<?php

namespace App\Repositories;

use stdClass;
use Exception;
use App\Models\Asset;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;
use App\Http\Resources\ProductResource;

class ProductRepository
{
    public $limit = 6;
    public function show($slug)
    {
        $product = new ProductResource(Product::with(['assets', 'category:id,title,slug','reviews' => function($q) {
            $q->limit(5);
            $q->latest();
        }, 'variants.variant_items.variant_item_values'])
        ->withCount('reviews')
        ->withSum('variantItems', 'item_stock')
        ->withAvg('reviews', 'rating')
        ->where('slug', $slug) 
        ->first());

        return $product;
    }

    public function getAll()
    {

        return Product::with('assets', 'category:id,title,slug','discount', 'promote')
            ->withAvg('reviews', 'rating')
            ->simplePaginate($this->limit);
        
    }

    public function getProductsFavorites($pids)
    {
        return Product::with('assets', 'category:id,title,slug','discount', 'promote')
            ->whereIn('id', $pids)
            ->withAvg('reviews', 'rating')
            ->get();
    }
    
    public function search($key)
    {

        return Product::with('assets', 'category:id,title,slug','discount', 'promote')
            ->where('title', 'like', '%'.$key.'%')
            ->orWhere('description', 'like', '%'.$key.'%')
            ->withAvg('reviews', 'rating')
            ->simplePaginate($this->limit);

    }

    public function getProductsByCategory($id)
    {
        return Product::with('assets', 'category:id,title,slug','discount', 'promote')
            ->where('category_id', $id)
            ->withAvg('reviews', 'rating')
            ->simplePaginate($this->limit);
    }

    public function getInitialProducts()
    {

        $data = Category::whereHas('products')
            ->with(['products' => function($query) {
                $query->with('assets');
                $query->with('promote');
                $query->withAvg('reviews', 'rating');
            }])
            ->where('is_front', 1)
            ->get()
            //  return view('welcome');
            ->map(function($cat) {

                $categoryItem = new stdClass();
                $categoryItem->title = $cat->title;
                $categoryItem->category_id = $cat->id;
                $categoryItem->category_slug = $cat->slug;
                $categoryItem->id = Str::random(16);
                $categoryItem->banner_src = $cat->banner? $cat->banner_src : '';
                $categoryItem->description = $cat->description ?? '';

                $categoryItem->items = $cat->products->map(function($product) use($cat) {

                    $newCat = new stdClass();
                    $newCat->id = $cat->id;
                    $newCat->title = $cat->title;
                    $newCat->slug = $cat->slug;

                    $product->category = $newCat;

                    return [
                        'id'      => $product->id,
                        'title'   => $product->title,
                        'slug'    => $product->slug,
                        'sku'     => $product->sku,
                        'description' =>  $product->description,
                        'status'  =>  $product->status,
                        'sold'    =>  $product->sold,
                        'weight'  =>  $product->weight,
                        'rating'  =>  $product->reviews_avg_rating ? (float) number_format($product->reviews_avg_rating, 1) : 0,
                        'pricing' =>  $this->setPricing($product),
                        'category' => $newCat,
                        'assets'  =>  $product->assets,
                    ];
                });

                return $categoryItem;
            });

        return $data;

    }
  
    public function store($request)
    {
        $path = public_path('/upload/images');

        if(! File::exists($path)) {
            File::makeDirectory($path, 0755, true, true);
        }

        DB::beginTransaction();
        
        try {
            $slug = Str::slug($request->title);
            $product = new Product();

            $product->title = $request->title;
            $product->slug = $slug;
            $product->price = $request->price;
            $product->stock = $request->stock;
            $product->weight = $request->weight;
            
            $product->category_id =  $request->category_id;

            $product->description = $request->description;

            $product->sku = 'PRD' . Str::random(14);
            
            $product->save();

            if($request->images) {
                foreach($request->images as $file) {
                    
                    $filename = Str::random(41).'.' . $file->extension();

                    $file->move($path, $filename);

                    $product->assets()->create([
                        'filename' => $filename
                    ]);
                }
            }
            

            if($request->variants) {
                
                $product->refresh();

                $variants = json_decode($request->variants, true);

                foreach($variants as $var) {

                    if(count($var['variant_items']) > 0) {
                        
                        $variant = $product->variants()->create([
                            'variant_name' => $var['variant_name'],
                            'variant_item_name' => $var['variant_item_name']
                        ]);
    
                        foreach($var['variant_items'] as $varItem) {
    
                            if(count($varItem['variant_item_values']) > 0) {
    
                                $item = $variant->variant_items()->create([
                                    'variant_item_label' => $varItem['variant_item_label']
                                ]);
        
                                foreach($varItem['variant_item_values'] as $value) {

                                    $value['product_id'] = $product->id;
                                    $item->variant_item_values()->create($value);
                                }
                            }
    
                        }
                    }

                }
            }


            DB::commit();

            $this->clearCache();

            return $product->load('assets','variants.variant_items.variant_item_values');


        } catch (Exception $e) {

            DB::rollBack();

            throw new Exception($e);
        }

            
    }

    public function update($request)
    {
        $product = Product::find($request->id);

        $path = public_path('/upload/images');

        if(! File::exists($path)) {
            File::makeDirectory($path, 0755, true, true);
        }

        DB::beginTransaction();

        $product->title = $request->title;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->weight = $request->weight;
        $product->description = $request->description;
        $product->category_id = $request->category_id;

        try {

            if($request->images) {
                foreach($request->images as $file) {

                    $filename = Str::random(42).'.' . $file->extension();
                    
                    if($file->move($path, $filename)){

                        $product->assets()->create([
                            'filename' => $filename
                        ]);
                    }

                }
            }
            if($request->del_images) {
                foreach($request->del_images as $filename) {
                    File::delete('upload/images/'. $filename);
                    Asset::where('filename', $filename)->delete();
                }
            }

            $product->save();

            
            if($request->variants) {

                $product->variants()->delete();

                $variants = json_decode($request->variants, true);

                foreach($variants as $var) {

                    if(count($var['variant_items']) > 0) {
                        
                        $variant = $product->variants()->create([
                                'variant_name' => $var['variant_name'],
                                'variant_item_name' => $var['variant_item_name']
                            ]);
        
                            foreach($var['variant_items'] as $varItem) {
        
                                if(count($varItem['variant_item_values']) > 0) {
        
                                    $item = $variant->variant_items()->create([
                                        'variant_item_label' => $varItem['variant_item_label']
                                    ]);
            
                                    foreach($varItem['variant_item_values'] as $value) {

                                    $value['product_id'] = $product->id;
                                    $item->variant_item_values()->create($value);
                                    }
                                }
        
                            }
                    }

                }
            }


            DB::commit();

            $this->clearCache();

            return $product->fresh();

        } catch (Exception $e) {

            DB::rollBack();
            
            throw new Exception($e);
        }

        
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        DB::beginTransaction();

        try {
            if($product->assets) {

                foreach($product->assets as $asset){
                    File::delete('upload/images/'. $asset->filename);
                }
                $product->assets()->delete();
            }
            $product->delete();

            DB::commit();

            $this->clearCache();

            return true;


        } catch (Exception $e) {

            DB::rollBack();

            throw new Exception($e);
        }
    }

    public function addProductReview($request)
    {   
        $product = Product::findOrFail($request->product_id);

        $review = $product->reviews()->create([
            'comment' => $request->comment,
            'rating' => $request->rating,
            'name' => $request->name,
        ]);

        return $review;

    }

    protected function setPricing($product)
    {
        $pricing = [
        'default_price' => $product->price,
        'current_price' => $product->price,
        'discount_value' => 0,
        'discount_percent' => 0,
        'is_discount' => false 
        ];
        
        $disc = null;
        
        if($product->discount_id != null) {
            $disc = $product->discount;
        } elseif($product->promote_id != null && $product->promote) {
            $disc = $product->promote->discount;
        }

        
        if($disc) {
        
            $pricing['is_discount'] = true;
        
            $discValue = 0;
            
        
            if($disc->unit == 'percent') {
        
                $discValue = ($product->price*$disc->value) / 100;
        
                $pricing['current_price'] = $product->price - ($product->price*$disc->value / 100);
                $pricing['discount_percent'] = $disc->value;
                
            } else{
        
                $discValue = $disc->value;
                $pricing['current_price'] = $product->price - (int) $disc->value;
                $pricing['discount_percent'] = number_format(((int)$disc->value / $product->price)*100, 1);
        
            }
        
            $pricing['discount_value'] = $discValue;
        }
        
        return $pricing;
    }

    protected function clearCache()
    {
        Cache::forget('products');
        Cache::forget('initial_products');
    }

}
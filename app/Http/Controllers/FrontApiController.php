<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Block;
use App\Models\Store;
use App\Models\Config;
use App\Models\Slider;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Repositories\ProductRepository;

class FrontApiController extends Controller
{
    private $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }
    public function home()
    {

        $sliders = Cache::rememberForever('sliders', function () {
            return Slider::OrderBy('weight', 'asc')->get();
        });
        
        $blocks = Cache::rememberForever('blocks', function () {
            return Block::with('post')->OrderBy('weight', 'asc')->get();
        });

        $shop = Cache::rememberForever('shop', function () {
            return Store::first();
        });
        $categories = Cache::rememberForever('categories', function () {
            return Category::orderBy('weight', 'asc')->get();
        });
        $posts = Cache::rememberForever('promote_post', function () {
            return Post::promote()->latest()->take(4)->get();
        });
        $config = Cache::rememberForever('shop_config', function () {
            return Config::first();
        });

        // Cache::flush();

        $initialProducts = Cache::rememberForever('initial_products', function() use ($categories){

            return $this->productRepository->getInitialProducts($categories);

        });

        // return view('welcome');

        return response()->json([
            'success' => true, 
            'results' => [
                'products' => $initialProducts,
                'sliders' => $sliders,
                'categories' => $categories,
                'blocks' => $blocks,
                'shop' => $shop,
                'posts' => $posts,
                'config' => $config,
                'sess_id' => Str::random(40),
            ]
            
        ],200);
    }
}

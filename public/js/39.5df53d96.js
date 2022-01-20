(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{ba30:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[i("q-header",[i("q-toolbar",[i("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),i("q-toolbar-title",[t._v("\n       Edit Produk\n      ")]),t.form.variants.length?t._e():i("q-btn",{attrs:{flat:"",icon:"add",label:"Produk Variasi"},on:{click:t.handleAddVariant}})],1)],1),i("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("div",{staticClass:"q-pa-md q-gutter-y-sm"},[i("q-input",{attrs:{type:"text",label:"Nama Produk",rules:[function(t){return t&&""!=t||"Nama produk harus diisi"}]},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),i("div",{staticClass:"row items-center q-gutter-x-sm"},[i("div",{staticClass:"col"},[i("q-input",{attrs:{filled:"",square:"",mask:"#########",label:"Harga",rules:t.requiredRules},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),i("div",{staticClass:"col"},[i("q-input",{attrs:{filled:"",square:"",mask:"#####",label:"Stok",rules:t.requiredRules},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1),i("div",{staticClass:"col"},[i("q-input",{attrs:{filled:"",square:"",mask:"#####",label:"Berat",suffix:"gram",rules:[function(t){return t&&t>49||"Berat harus diisi min 50 gram"}]},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}})],1)]),i("q-select",{staticClass:"q-pb-md",attrs:{filled:"",square:"",options:t.categories,label:"Kategori","emit-value":"","map-options":""},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}}),i("div",{staticClass:"q-mt-md q-mb-sm"},[i("label",{staticClass:"text-grey-7 q-pb-sm block",attrs:{for:"description"}},[t._v("Deskripsi")]),i("q-editor",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t.errors.description?i("div",{staticClass:"text-xs text-red"},[t._v(" "+t._s(t.errors.description[0]))]):t._e()],1),i("section",{staticClass:"q-my-md q-gutter-y-sm",attrs:{id:"image-section"}},[i("div",[i("q-btn",{staticClass:"mt-2 mr-2",attrs:{label:"Upload Gambar Produk",size:"sm",color:"primary",icon:"upload",type:"button"},on:{click:function(e){return e.preventDefault(),t.selectNewImage(e)}}}),i("input",{ref:"image",staticClass:"hidden",attrs:{type:"file",multiple:""},on:{change:t.updateImagePreview}})],1),i("q-list",{attrs:{separator:""}},[t._l(t.imagePreview,(function(e,a){return i("q-item",{key:a},[i("q-item-section",[i("img",{staticClass:"shadow-4 q-pa-xs bg-white",staticStyle:{width:"100px",height:"70px","object-fit":"cover"},attrs:{src:e}})]),i("q-item-section",{attrs:{side:""}},[i("q-btn",{attrs:{size:"sm",round:"",icon:"delete",glossy:"",color:"red"},on:{click:function(e){return e.preventDefault(),t.removeLocalImage(a)}}})],1)],1)})),t._l(t.oldImages,(function(e){return i("q-item",{key:e.id},[i("q-item-section",[i("img",{staticClass:"shadow-4 q-pa-xs bg-white",staticStyle:{width:"100px",height:"70px","object-fit":"cover"},attrs:{src:e.src}})]),i("q-item-section",{attrs:{side:""}},[i("q-btn",{attrs:{size:"sm",round:"",icon:"delete",glossy:"",color:"red"},on:{click:function(i){return i.preventDefault(),t.removeImage(e)}}})],1)],1)}))],2)],1)],1),t.form.variants.length?i("div",{attrs:{id:"variants"}},[i("div",{staticClass:"row items-center q-mt-xl q-pa-md q-gutter-x-md"},[i("div",{staticClass:"text-md2 text-weight-medium"},[t._v("Produk Variasi")]),i("q-btn",{attrs:{padding:"4px 8px",size:"13px",unelevated:"",color:"blue-6"},on:{click:t.handleAddVariant}},[i("q-icon",{attrs:{name:"edit"}}),i("span",[t._v("Edit")])],1)],1),t._l(t.form.variants,(function(e,a){return i("div",{key:a,staticClass:"q-pa-md bg-grey-2",staticStyle:{"min-height":"100px"}},t._l(e.variant_items,(function(r,s){return i("div",{key:s,staticClass:"q-mb-md"},[i("div",{staticClass:"text-md text-weight-medium q-pb-xs"},[t._v(t._s(e.variant_name)+" "+t._s(r.variant_item_label))]),i("q-list",{staticClass:"bg-grey-3 q-pa-sm"},t._l(r.variant_item_values,(function(r,o){return i("q-item",{key:o,staticClass:"q-pa-md bg-white q-mb-sm"},[i("q-item-section",[i("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:e.variant_item_name},model:{value:t.form.variants[a].variant_items[s].variant_item_values[o].item_label,callback:function(e){t.$set(t.form.variants[a].variant_items[s].variant_item_values[o],"item_label",e)},expression:"form.variants[varIndex].variant_items[itemIndex].variant_item_values[subItemIndex].item_label"}})],1),i("q-item-section",[i("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Additional Price",type:"number",min:"0"},model:{value:t.form.variants[a].variant_items[s].variant_item_values[o].additional_price,callback:function(e){t.$set(t.form.variants[a].variant_items[s].variant_item_values[o],"additional_price",e)},expression:"form.variants[varIndex].variant_items[itemIndex].variant_item_values[subItemIndex].additional_price"}})],1),i("q-item-section",[i("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Stok",type:"number",min:"0"},model:{value:t.form.variants[a].variant_items[s].variant_item_values[o].item_stock,callback:function(e){t.$set(t.form.variants[a].variant_items[s].variant_item_values[o],"item_stock",e)},expression:"form.variants[varIndex].variant_items[itemIndex].variant_item_values[subItemIndex].item_stock"}})],1)],1)})),1)],1)})),0)}))],2):t._e(),i("q-footer",[i("q-btn",{staticClass:"full-width",attrs:{type:"submit",loading:t.loading,label:"Simpan Data"}},[i("q-tooltip",{staticClass:"bg-accent"},[t._v("Simpan Data")])],1)],1)],1),i("q-dialog",{attrs:{persistent:"",maximized:"",seamless:"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.variantModalForm,callback:function(e){t.variantModalForm=e},expression:"variantModalForm"}},[i("product-variant-form",{attrs:{props:t.form.variants},on:{onSubmitForm:t.onSubmitForm,onClose:function(e){t.variantModalForm=!1}}})],1)],1)},r=[],s=i("ded3"),o=i.n(s),n=(i("a4d3"),i("e01a"),i("4de4"),i("2f62")),l=i("49a8"),m={name:"ProductFormEdit",components:{ProductVariantForm:l["a"]},data:function(){return{requiredRules:[function(t){return t&&t.length>0||"Field harus diisi."}],product:null,form:{id:"",title:"",price:"",weight:"",stock:"",category_id:"",description:"",variants:[],images:[],del_images:[],del_variant_ids:[],del_variant_item_ids:[],del_variant_value_ids:[]},imagePreview:[],oldImages:[],variantModalForm:!1}},computed:{errors:function(){return this.$store.state.errors},loading:function(){return this.$store.state.loading},categories:function(){return this.$store.getters["category/getValueOptions"]}},methods:o()(o()(o()({},Object(n["b"])("product",["productUpdate","getProductById"])),Object(n["b"])("category",["getCategories"])),{},{onSubmitForm:function(t){this.form.variants=t,this.variantModalForm=!1},handleAddVariant:function(){this.variantModalForm=!0},submit:function(){var t=new FormData;t.append("id",this.form.id),t.append("title",this.form.title),t.append("price",this.form.price),t.append("weight",this.form.weight),t.append("stock",this.form.stock),t.append("description",this.form.description),this.form.category_id&&t.append("category_id",this.form.category_id),this.form.variants.length&&t.append("variants",JSON.stringify(this.form.variants));for(var e=0;e<this.form.images.length;e++){var i=this.form.images[e];t.append("images["+e+"]",i)}if(this.form.images.length>0)for(e=0;e<this.form.images.length;e++){var a=this.form.images[e];t.append("images["+e+"]",a)}if(this.form.del_images.length>0)for(e=0;e<this.form.del_images.length;e++){var r=this.form.del_images[e];t.append("del_images["+e+"]",r)}this.productUpdate(t)},selectNewImage:function(){this.$refs.image.click()},updateImagePreview:function(){for(var t=this,e=this.$refs.image.files,i=0;i<e.length;i++){this.form.images.push(e[i]);var a=new FileReader;a.onload=function(e){t.imagePreview.push(e.target.result)},a.readAsDataURL(e[i])}},removeLocalImage:function(t){this.imagePreview=this.imagePreview.filter((function(e,i){return i!==t})),this.form.images=this.form.images.filter((function(e,i){return i!==t}))},removeImage:function(t){this.oldImages=this.oldImages.filter((function(e){return e.id!==t.id})),this.form.del_images.push(t.filename)},setData:function(){this.form.id=this.product.id,this.form.title=this.product.title,this.form.price=this.product.price,this.form.weight=this.product.weight,this.form.stock=this.product.stock,this.form.category_id=this.product.category_id,this.form.description=this.product.description,this.form.variants=this.product.variants,this.oldImages=this.product.assets}}),mounted:function(){var t=this;this.getProductById(this.$route.params.id).then((function(e){t.product=e.data.results,t.setData()})),this.categories.length||this.getCategories()}},d=m,c=i("2877"),u=i("9989"),f=i("e359"),p=i("65c6"),v=i("9c40"),g=i("6ac5"),h=i("0378"),_=i("27f9"),b=i("ddd8"),q=i("d66b"),k=i("1c1c"),x=i("66e5"),w=i("4074"),y=i("0016"),I=i("7ff0"),C=i("05c0"),P=i("24e8"),F=i("2eeb"),Q=i("eebe"),$=i.n(Q),S=Object(c["a"])(d,a,r,!1,null,null,null);e["default"]=S.exports;$()(S,"components",{QPage:u["a"],QHeader:f["a"],QToolbar:p["a"],QBtn:v["a"],QToolbarTitle:g["a"],QForm:h["a"],QInput:_["a"],QSelect:b["a"],QEditor:q["a"],QList:k["a"],QItem:x["a"],QItemSection:w["a"],QIcon:y["a"],QFooter:I["a"],QTooltip:C["a"],QDialog:P["a"]}),$()(S,"directives",{GoBack:F["a"]})}}]);
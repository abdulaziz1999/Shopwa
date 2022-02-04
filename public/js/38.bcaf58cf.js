(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"826c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-header",[a("q-toolbar",[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),a("q-toolbar-title",[t._v("\n       Tambah Produk\n      ")]),t.form.variants.length?t._e():a("q-btn",{attrs:{flat:"",icon:"add",label:"Produk Variasi"},on:{click:t.handleAddVariant}})],1)],1),a("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"q-pa-md q-gutter-y-sm"},[a("q-input",{attrs:{filled:"",type:"text",label:"Nama Produk",rules:t.requiredRules},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t.errors.title?a("div",{staticClass:"text-xs text-red"},[t._v(" "+t._s(t.errors.title[0]))]):t._e(),a("div",{staticClass:"row items-center q-gutter-x-sm"},[a("div",{staticClass:"col"},[a("q-input",{attrs:{filled:"",mask:"#########",label:"Harga",rules:t.requiredRules},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),a("div",{staticClass:"col"},[a("q-input",{attrs:{filled:"",mask:"#####",label:"Stok",rules:t.requiredRules},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1),a("div",{staticClass:"col"},[a("q-input",{attrs:{filled:"",mask:"#####",label:"Berat",suffix:"gram",rules:[function(t){return t&&t>49||"Berat harus diisi min 50 gram"}]},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}})],1)]),a("q-select",{staticClass:"q-pb-md",attrs:{filled:"",options:t.categories,label:"Kategori","emit-value":"","map-options":""},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}}),a("div",{staticClass:"q-mt-md q-mb-sm"},[a("label",{staticClass:"text-grey-7 q-pb-sm block",attrs:{for:"description"}},[t._v("Deskripsi")]),a("q-editor",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t.errors.description?a("div",{staticClass:"text-xs text-red"},[t._v(" "+t._s(t.errors.description[0]))]):t._e()],1),a("section",{staticClass:"q-my-lg q-gutter-y-sm",attrs:{id:"image-section"}},[a("div",[a("q-btn",{staticClass:"mt-2 mr-2",attrs:{label:"Upload Gambar Produk",size:"sm",color:"primary",icon:"upload",type:"button"},on:{click:function(e){return e.preventDefault(),t.selectNewImage(e)}}})],1),a("input",{ref:"image",staticClass:"hidden",attrs:{type:"file",multiple:""},on:{change:t.updateImagePreview}}),a("q-list",{attrs:{separator:""}},t._l(t.imagePreview,(function(e,i){return a("q-item",{key:i},[a("q-item-section",[a("img",{staticClass:"shadow-4 q-pa-xs bg-white",staticStyle:{width:"100px",height:"70px","object-fit":"cover"},attrs:{src:e}})]),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{size:"sm",round:"",icon:"delete",glossy:"",color:"red"},on:{click:function(e){return e.preventDefault(),t.removeImage(i)}}})],1)],1)})),1)],1)],1),t.form.variants.length?a("div",{attrs:{id:"variants"}},[a("div",{staticClass:"row items-center q-mt-xl q-pa-md q-gutter-x-md"},[a("div",{staticClass:"text-md2 text-weight-medium"},[t._v("Produk Variasi")]),a("q-btn",{attrs:{padding:"4px 8px",size:"13px",unelevated:"",color:"blue-6"},on:{click:t.handleAddVariant}},[a("q-icon",{attrs:{name:"edit"}}),a("span",[t._v("Edit")])],1)],1),t._l(t.form.variants,(function(e,i){return a("div",{key:i,staticClass:"q-pa-md bg-grey-2",staticStyle:{"min-height":"100px"}},t._l(e.variant_items,(function(r,s){return a("div",{key:s,staticClass:"q-mb-md"},[a("div",{staticClass:"text-md text-weight-medium q-pb-xs"},[t._v(t._s(e.variant_name)+" "+t._s(r.variant_item_label))]),a("q-list",{staticClass:"bg-grey-3 q-pa-sm"},t._l(r.variant_item_values,(function(r,n){return a("q-item",{key:n,staticClass:"q-pa-md bg-white q-mb-sm"},[a("q-item-section",[a("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:e.variant_item_name},model:{value:t.form.variants[i].variant_items[s].variant_item_values[n].item_label,callback:function(e){t.$set(t.form.variants[i].variant_items[s].variant_item_values[n],"item_label",e)},expression:"form.variants[varIndex].variant_items[itemIndex].variant_item_values[subItemIndex].item_label"}})],1),a("q-item-section",[a("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Additional Price",type:"number",min:"0"},model:{value:t.form.variants[i].variant_items[s].variant_item_values[n].additional_price,callback:function(e){t.$set(t.form.variants[i].variant_items[s].variant_item_values[n],"additional_price",e)},expression:"form.variants[varIndex].variant_items[itemIndex].variant_item_values[subItemIndex].additional_price"}})],1),a("q-item-section",[a("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Stok",type:"number",min:"0"},model:{value:t.form.variants[i].variant_items[s].variant_item_values[n].item_stock,callback:function(e){t.$set(t.form.variants[i].variant_items[s].variant_item_values[n],"item_stock",e)},expression:"form.variants[varIndex].variant_items[itemIndex].variant_item_values[subItemIndex].item_stock"}})],1)],1)})),1)],1)})),0)}))],2):t._e(),a("q-footer",[a("q-btn",{staticClass:"full-width",attrs:{type:"submit",loading:t.loading,label:"Simpan Data"}},[a("q-tooltip",{staticClass:"bg-accent"},[t._v("Simpan Data")])],1)],1)],1),a("q-dialog",{attrs:{persistent:"",maximized:"",seamless:"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.variantModalForm,callback:function(e){t.variantModalForm=e},expression:"variantModalForm"}},[a("product-variant-form",{attrs:{props:t.form.variants},on:{onSubmitForm:t.onSubmitForm,onClose:function(e){t.variantModalForm=!1}}})],1)],1)},r=[],s=a("ded3"),n=a.n(s),o=(a("a4d3"),a("e01a"),a("4de4"),a("2f62")),l=a("49a8"),m={name:"ProductFormCreate",components:{ProductVariantForm:l["a"]},data:function(){return{requiredRules:[function(t){return t&&t.length>0||"Field harus diisi."}],form:{title:"",price:"",weight:"",stock:"",description:"",category_id:"",variants:[],images:[]},imagePreview:[],variantModalForm:!1}},computed:{errors:function(){return this.$store.state.errors},loading:function(){return this.$store.state.loading},categories:function(){return this.$store.getters["category/getValueOptions"]}},methods:n()(n()(n()({},Object(o["b"])("product",["productStore"])),Object(o["b"])("category",["getCategories"])),{},{onSubmitForm:function(t){this.form.variants=t,this.variantModalForm=!1},handleAddVariant:function(){this.variantModalForm=!0},submit:function(){var t=new FormData;t.append("title",this.form.title),t.append("price",this.form.price),t.append("weight",this.form.weight),t.append("stock",this.form.stock),t.append("description",this.form.description),this.form.category_id&&t.append("category_id",this.form.category_id),this.form.variants.length&&t.append("variants",JSON.stringify(this.form.variants));for(var e=0;e<this.form.images.length;e++){var a=this.form.images[e];t.append("images["+e+"]",a)}this.productStore(t)},selectNewImage:function(){this.$refs.image.click()},updateImagePreview:function(){for(var t=this,e=this.$refs.image.files,a=0;a<e.length;a++){this.form.images.push(e[a]);var i=new FileReader;i.onload=function(e){t.imagePreview.push(e.target.result)},i.readAsDataURL(e[a])}},removeImage:function(t){this.imagePreview=this.imagePreview.filter((function(e,a){return a!==t})),this.form.images=this.form.images.filter((function(e,a){return a!==t}))},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}),mounted:function(){this.categories.length||this.getCategories()}},c=m,d=a("2877"),u=a("9989"),f=a("e359"),v=a("65c6"),p=a("9c40"),g=a("6ac5"),b=a("0378"),_=a("27f9"),h=a("ddd8"),q=a("d66b"),k=a("1c1c"),x=a("66e5"),w=a("4074"),y=a("0016"),C=a("7ff0"),I=a("05c0"),F=a("24e8"),P=a("2eeb"),Q=a("eebe"),$=a.n(Q),S=Object(d["a"])(c,i,r,!1,null,null,null);e["default"]=S.exports;$()(S,"components",{QPage:u["a"],QHeader:f["a"],QToolbar:v["a"],QBtn:p["a"],QToolbarTitle:g["a"],QForm:b["a"],QInput:_["a"],QSelect:h["a"],QEditor:q["a"],QList:k["a"],QItem:x["a"],QItemSection:w["a"],QIcon:y["a"],QFooter:C["a"],QTooltip:I["a"],QDialog:F["a"]}),$()(S,"directives",{GoBack:P["a"]})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{"783f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-grey-2 romance",class:{"flex flex-center":t.loading}},[n("q-header",{staticClass:"bg-white box-shadow",attrs:{reveal:"","reveal-offset":10}},[n("q-toolbar",{staticClass:"q-py-md"},[t.shop?n("img",{staticClass:"logo",attrs:{src:t.shop.logo?t.shop.logo:"/icon/logo.png"}}):t._e(),n("div",{staticClass:"col q-ml-sm row items-center"},[n("div",{staticClass:"col"},[n("q-input",{ref:"input",staticClass:"input-search text-xs bg-grey-1",attrs:{borderless:"",color:"grey-4",dense:"",placeholder:"cari produk..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchNow(e)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"search"},on:{click:t.searchNow}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("div",{staticClass:"q-pl-sm"},[n("shopping-cart")],1)])])],1),t.loading?t._e():[t.sliders.data.length?n("div",{staticClass:"header-romance",attrs:{id:"slider"}},[n("slider",{attrs:{datas:t.sliders.data}})],1):t._e(),t.blocks.featured.length?n("div",{staticClass:"auto-padding-side block-container q-pt-md",attrs:{id:"featured"}},[n("featured-carousel",{attrs:{datas:t.blocks.featured}})],1):t._e(),t.categories&&t.categories.data.length>1?n("div",{staticClass:"auto-padding-side block-container",attrs:{id:"categories"}},[n("div",{staticClass:"block-heading"},[n("div",{staticClass:"block-title"},[n("h2",[t._v("Kategori")])])]),n("div",{staticClass:"block-content q-pb-sm"},[n("category-carousel",{attrs:{datas:t.categories.data}})],1)]):t._e(),t.banner1?n("div",{staticClass:"banner auto-padding-side block-container"},[n("img",{attrs:{src:t.banner1.image_url},on:{click:function(e){return t.goToPost(t.banner1)}}})]):t._e(),n("product-block",{attrs:{products:t.products}}),t.blocks.partner.length?n("div",{staticClass:"partner auto-padding-side block-container"},[n("div",{staticClass:"block-heading"},[n("div",{staticClass:"block-title"},[n("h2",[t._v("Partners")])])]),n("div",{staticClass:"block-content"},[n("partner-carousel",{attrs:{datas:t.blocks.partner}})],1)]):t._e(),t.banner2?n("div",{staticClass:"banner auto-padding-side block-container"},[n("img",{attrs:{src:t.banner2.image_url},on:{click:function(e){return t.goToPost(t.banner2)}}})]):t._e(),n("post-block",{attrs:{posts:t.posts}}),t.banner3?n("div",{staticClass:"banner auto-padding block-container"},[n("img",{attrs:{src:t.banner3.image_url},on:{click:function(e){return t.goToPost(t.banner3)}}})]):t._e(),n("install-app"),n("footer-block")],n("q-inner-loading",{attrs:{showing:t.loading}},[n("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1)],2)},r=[],s=n("ded3"),o=n.n(s),i=(n("e260"),n("d3b7"),n("e6cf"),n("3ca3"),n("ddb0"),n("7db0"),n("ac1f"),n("841c"),n("2f62")),c=n("c6c8"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden"},[n("vue-glide",{attrs:{options:t.glideOptions}},t._l(t.datas,(function(t,e){return n("vue-glide-slide",{key:e},[n("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:t.src}})])})),1)],1)},u=[],d={name:"Front",props:{datas:Array},data:function(){return{glideOptions:{gap:10,perView:1,animationDuration:1e3,autoplay:6e3,bullet:!0}}}},h=d,p=n("2877"),g=Object(p["a"])(h,l,u,!1,null,null,null),b=g.exports,f=n("3f41"),k={name:"PageIndex",components:{ShoppingCart:c["a"],Slider:b,ProductBlock:f["a"],"category-carousel":function(){return n.e(59).then(n.bind(null,"731d"))},"featured-carousel":function(){return n.e(4).then(n.bind(null,"3990"))},"partner-carousel":function(){return n.e(3).then(n.bind(null,"9a15"))},"post-block":function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,"d29a"))},"footer-block":function(){return n.e(5).then(n.bind(null,"bae6"))},"install-app":function(){return n.e(2).then(n.bind(null,"30b4"))}},data:function(){return{viewMode:"grid",search:"",slide:0}},computed:o()(o()({},Object(i["e"])({blocks:function(t){return t.block.blocks},sliders:function(t){return t.slider.sliders},categories:function(t){return t.category.categories},products:function(t){return t.product.initial_products},shop:function(t){return t.shop},loading:function(t){return t.loading},posts:function(t){return t.post.initialPost},config:function(t){return t.config}})),{},{cheight:function(){this.$q.screen.width;return this.$q.screen.width>600?"400px":this.$q.screen.width/1.5+"px"},banner1:function(){if(this.blocks.banner.length){var t=this.blocks.banner.find((function(t){return 1==t.weight}));return void 0!=t?t:void 0}return null},banner2:function(){if(this.blocks.banner.length){var t=this.blocks.banner.find((function(t){return 2==t.weight}));return void 0!=t?t:void 0}return null},banner3:function(){if(this.blocks.banner.length){var t=this.blocks.banner.find((function(t){return 3==t.weight}));return void 0!=t?t:void 0}return null}}),methods:o()(o()({},Object(i["b"])(["getInitialData"])),{},{showProductByCategory:function(t){this.$router.push({name:"ProductCategory",params:{id:t}})},searchNow:function(){this.search&&""!=this.search&&this.$router.push({name:"ProductSearch",query:{q:this.search}})},goToPost:function(t){t.post&&this.$router.push({name:"FrontPostShow",params:{slug:t.post.slug}})}}),mounted:function(){this.config&&(this.viewMode=this.config.home_view_mode)},created:function(){this.shop&&this.products.data.length&&!this.$route.query.load||this.getInitialData()}},v=k,m=n("9989"),w=n("e359"),C=n("65c6"),y=n("27f9"),_=n("0016"),q=n("74f7"),x=n("e669"),P=n("eebe"),$=n.n(P),O=Object(p["a"])(v,a,r,!1,null,null,null);e["default"]=O.exports;$()(O,"components",{QPage:m["a"],QHeader:w["a"],QToolbar:C["a"],QInput:y["a"],QIcon:_["a"],QInnerLoading:q["a"],QSpinnerFacebook:x["a"]})}}]);
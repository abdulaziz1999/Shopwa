(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"062f":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"bg-grey-2 default"},[s("q-header",{staticClass:"bg-white text-dark"},[s("q-toolbar",{staticClass:"items-center sans"},[t.shop?s("img",{staticClass:"logo",attrs:{src:t.shop.logo?t.shop.logo:"/icon/logo.png"}}):t._e(),t.shop&&t.shop.name?s("q-toolbar-title",{staticClass:"text-weight-bold text-primary"},[t._v(t._s(t.shop.name))]):t._e(),s("shopping-cart")],1)],1),t.sliders.data.length?s("div",{staticClass:"q-pt-sm",attrs:{id:"slider"}},[s("swipe-slider",{attrs:{datas:t.sliders.data}})],1):t._e(),s("product-block",{attrs:{products:t.products}}),s("post-block",{attrs:{posts:t.posts}}),s("install-app"),s("footer-block")],1)},i=[],a=s("ded3"),r=s.n(a),n=(s("e260"),s("d3b7"),s("e6cf"),s("3ca3"),s("ddb0"),s("ac1f"),s("841c"),s("2f62")),c=s("c6c8"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overflow-hidden"},[s("vue-glide",{attrs:{options:t.glideOptions}},t._l(t.datas,(function(t,e){return s("vue-glide-slide",{key:e},[s("div",{staticClass:"auto-padding"},[s("img",{staticStyle:{width:"100%",height:"auto","border-radius":"6px"},attrs:{src:t.src}})])])})),1)],1)},u=[],d={name:"Front",props:{datas:Array},data:function(){return{glideOptions:{gap:10,perView:1,animationDuration:1e3,autoplay:6e3,bullet:!0}}}},p=d,h=s("2877"),g=Object(h["a"])(p,l,u,!1,null,null,null),f=g.exports,m=(s("3990"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overflow-hidden"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.datas,(function(e){return s("swiper-slide",{key:e.id},[s("div",{staticClass:"column full-height bg-white text-center"},[e.filename?s("q-img",{staticClass:"cursor-pointer",attrs:{src:e.src,ratio:"1"},on:{click:function(s){return t.openCategory(e.id)}}},[s("div",{staticClass:"text-weight-medium text-auto absolute-full flex flex-center"},[t._v(t._s(e.title))])]):t._e()],1)])})),1)],1)}),w=[],b={name:"CategoryCarousel",props:{datas:Array},data:function(){return{swiperOptions:{slidesPerView:4,spaceBetween:5}}},created:function(){this.datas.length<=3&&(this.swiperOptions.slidesPerView=3)},methods:{openCategory:function(t){t&&this.$router.push({name:"ProductCategory",params:{id:t}})}}},v=b,C=s("068f"),_=s("eebe"),y=s.n(_),k=Object(h["a"])(v,m,w,!1,null,null,null);k.exports;y()(k,"components",{QImg:C["a"]});var x=s("3f41"),P=s("d29a"),q=(s("9a15"),s("bae6")),$={name:"PageIndex",components:{ShoppingCart:c["a"],SwipeSlider:f,ProductBlock:x["a"],PostBlock:P["a"],FooterBlock:q["a"],"install-app":function(){return s.e(1).then(s.bind(null,"30b4"))}},data:function(){return{viewMode:"grid",search:"",slide:0}},computed:r()(r()({},Object(n["e"])({blocks:function(t){return t.block.blocks},sliders:function(t){return t.slider.sliders},categories:function(t){return t.category.categories},products:function(t){return t.product.initial_products},shop:function(t){return t.shop},loading:function(t){return t.loading},posts:function(t){return t.post.initialPost},config:function(t){return t.config}})),{},{cheight:function(){this.$q.screen.width;return this.$q.screen.width>600?"400px":this.$q.screen.width/1.5+"px"}}),methods:r()(r()({},Object(n["b"])(["getInitialData"])),{},{showProductByCategory:function(t){this.$router.push({name:"ProductCategory",params:{id:t}})},searchNow:function(){this.search&&""!=this.search&&this.$router.push({name:"ProductSearch",query:{q:this.search}})},goToPost:function(t){t.post_id&&this.$router.push({name:"FrontPostShow",params:{slug:t.post.slug}})}}),mounted:function(){this.config&&(this.viewMode=this.config.home_view_mode)},created:function(){this.shop&&this.products.data.length&&!this.$route.query.load||this.getInitialData()}},O=$,S=s("9989"),Q=s("e359"),j=s("65c6"),B=s("6ac5"),I=s("74f7"),F=s("e669"),T=Object(h["a"])(O,o,i,!1,null,null,null);e["default"]=T.exports;y()(T,"components",{QPage:S["a"],QHeader:Q["a"],QToolbar:j["a"],QToolbarTitle:B["a"],QInnerLoading:I["a"],QSpinnerFacebook:F["a"]})}}]);
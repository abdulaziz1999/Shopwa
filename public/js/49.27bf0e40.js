(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"062f":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"bg-grey-2 default"},[s("q-header",{staticClass:"bg-white text-dark"},[s("q-toolbar",{staticClass:"items-center sans"},[t.shop?s("img",{staticClass:"logo",attrs:{src:t.shop.logo?t.shop.logo:"/icon/logo.png"}}):t._e(),t.shop&&t.shop.name?s("q-toolbar-title",{staticClass:"text-weight-bold text-primary"},[t._v(t._s(t.shop.name))]):t._e(),s("shopping-cart")],1)],1),s("post-block",{attrs:{posts:t.posts}}),s("footer-block")],1)},i=[],n=s("ded3"),r=s.n(n),a=(s("ac1f"),s("841c"),s("2f62")),c=s("c6c8"),u=(s("3990"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overflow-hidden"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.datas,(function(e){return s("swiper-slide",{key:e.id},[s("div",{staticClass:"column full-height bg-white text-center"},[e.filename?s("q-img",{staticClass:"cursor-pointer",attrs:{src:e.src,ratio:"1"},on:{click:function(s){return t.openCategory(e.id)}}},[s("div",{staticClass:"text-weight-medium text-auto absolute-full flex flex-center"},[t._v(t._s(e.title))])]):t._e()],1)])})),1)],1)}),l=[],p={name:"CategoryCarousel",props:{datas:Array},data:function(){return{swiperOptions:{slidesPerView:4,spaceBetween:5}}},created:function(){this.datas.length<=3&&(this.swiperOptions.slidesPerView=3)},methods:{openCategory:function(t){t&&this.$router.push({name:"ProductCategory",params:{id:t}})}}},h=p,d=s("2877"),f=s("068f"),g=s("eebe"),m=s.n(g),w=Object(d["a"])(h,u,l,!1,null,null,null);w.exports;m()(w,"components",{QImg:f["a"]});s("3f41");var b=s("d29a"),C=(s("9a15"),s("30b4"),s("bae6")),_={name:"PageIndex",components:{ShoppingCart:c["a"],PostBlock:b["a"],FooterBlock:C["a"]},data:function(){return{viewMode:"grid",search:"",slide:0}},computed:r()(r()({},Object(a["e"])({blocks:function(t){return t.block.blocks},sliders:function(t){return t.slider.sliders},categories:function(t){return t.category.categories},products:function(t){return t.product.initial_products},shop:function(t){return t.shop},loading:function(t){return t.loading},posts:function(t){return t.post.initialPost},config:function(t){return t.config}})),{},{cheight:function(){this.$q.screen.width;return this.$q.screen.width>600?"400px":this.$q.screen.width/1.5+"px"}}),methods:r()(r()({},Object(a["b"])(["getInitialData"])),{},{showProductByCategory:function(t){this.$router.push({name:"ProductCategory",params:{id:t}})},searchNow:function(){this.search&&""!=this.search&&this.$router.push({name:"ProductSearch",query:{q:this.search}})},goToPost:function(t){t.post_id&&this.$router.push({name:"FrontPostShow",params:{slug:t.post.slug}})}}),mounted:function(){this.config&&(this.viewMode=this.config.home_view_mode)},created:function(){this.shop&&this.products.data.length&&!this.$route.query.load||this.getInitialData()}},y=_,k=s("9989"),v=s("e359"),x=s("65c6"),P=s("6ac5"),q=s("74f7"),$=s("e669"),O=Object(d["a"])(y,o,i,!1,null,null,null);e["default"]=O.exports;m()(O,"components",{QPage:k["a"],QHeader:v["a"],QToolbar:x["a"],QToolbarTitle:P["a"],QInnerLoading:q["a"],QSpinnerFacebook:$["a"]})}}]);
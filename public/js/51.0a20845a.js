(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{a21e:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pb-lg"},[e("q-header",{staticClass:"text-primary bg-white"},[e("q-toolbar",[e("q-btn",{attrs:{to:{name:"Home"},flat:"",round:"",dense:"",icon:"arrow_back"}}),e("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v("Cari Produk")]),e("q-btn",{attrs:{flat:"",label:"Cari Order",to:{name:"OrderSearch"}}})],1)],1),e("div",{staticClass:"q-px-md q-pt-lg"},[e("div",{staticClass:"col bg-white border"},[e("q-input",{ref:"input",attrs:{outlined:"",dense:"",color:"grey-2",autofocus:"",placeholder:"ketik nama produk"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.searchProduct(a)}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"search"},on:{click:t.searchProduct}})]},proxy:!0}]),model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),t.products.ready&&t.products.available?[e("div",{staticClass:"q-pt-sm"},[e("b",[t._v(t._s(t.products.data.length))]),t._v(' produk hasil pencarian "'),e("b",[t._v(t._s(t.searchTitle))])])]:t._e()],2),t.products.data.length?[e("product-section",{attrs:{products:t.products}})]:t._e(),t.products.available?t._e():[e("div",{staticClass:"text-center column"},[e("div",{staticClass:"text-h6"},[t._v("Opps..")]),e("div",{},[t._v("Tidak ada produk dengan kata kunci "),e("b",[t._v('"'+t._s(t.searchTitle)+'"')])])])],e("q-inner-loading",{attrs:{showing:t.loading}},[e("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1),t.products&&t.products.links?e("div",{staticClass:"flex justify-center q-py-lg"},[t.products.links.next?e("q-btn",{attrs:{label:"loadmore",color:"primary",outline:"",loading:t.isLoadmore},on:{click:function(a){return t.paginate(t.products.links.next)}}}):t._e()],1):t._e()],2)},s=[],o=e("448a"),n=e.n(o),c=e("ded3"),i=e.n(c),d=(e("d3b7"),e("e6cf"),e("a79d"),e("ac1f"),e("841c"),e("99af"),e("53a2")),l=e("2f62"),u=e("758b"),p={name:"ProductSearch",components:{ProductSection:d["a"]},data:function(){return{loading:!1,search:"",searchTitle:"",products:{data:[],ready:!1,available:!0,links:null,meta:null},isLoadmore:!1}},methods:i()(i()({},Object(l["b"])("product",["searchProducts"])),{},{searchProduct:function(){var t=this;this.loading=!0,this.$refs.input.blur(),this.searchProducts(this.search).then((function(a){200==a.status&&(t.products.data=a.data.data,t.products.links=a.data.links,t.products.meta=a.data.meta,t.products.available=!!t.products.data.length)})).finally((function(){t.products.ready=!0,t.loading=!1,t.searchTitle=t.search,t.search=""}))},paginate:function(t){var a=this;this.isLoadmore=!0,Object(u["a"])().get(t).then((function(t){200==t.status&&(a.products.data=[].concat(n()(a.products.data),n()(t.data.data)),a.products.links=t.data.links,a.products.meta=t.data.meta)})).finally((function(){return a.isLoadmore=!1}))}}),mounted:function(){if(this.$route.query.q){var t=this.$route.query.q;t&&(this.search=t,this.searchProduct())}},created:function(){this.$store.commit("product/CLEAR_PRODUCT_SEARCH")}},h=p,b=e("2877"),f=e("9989"),k=e("e359"),m=e("65c6"),g=e("9c40"),v=e("6ac5"),_=e("27f9"),q=e("0016"),y=e("74f7"),C=e("e669"),x=e("eebe"),w=e.n(x),P=Object(b["a"])(h,r,s,!1,null,null,null);a["default"]=P.exports;w()(P,"components",{QPage:f["a"],QHeader:k["a"],QToolbar:m["a"],QBtn:g["a"],QToolbarTitle:v["a"],QInput:_["a"],QIcon:q["a"],QInnerLoading:y["a"],QSpinnerFacebook:C["a"]})}}]);
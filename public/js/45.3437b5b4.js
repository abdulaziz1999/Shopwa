(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{a21e:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pb-lg"},[e("q-header",{staticClass:"text-primary bg-white"},[e("q-toolbar",[e("q-btn",{attrs:{to:{name:"Home"},flat:"",round:"",dense:"",icon:"arrow_back"}}),e("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v("Cari Produk")]),e("q-btn",{attrs:{flat:"",label:"Cari Order",to:{name:"OrderSearch"}}})],1)],1),e("div",{staticClass:"col bg-white border q-ma-md"},[e("q-input",{ref:"input",attrs:{outlined:"",dense:"",color:"grey-2",autofocus:"",placeholder:"ketik nama produk"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.searchProduct(a)}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"search"},on:{click:t.searchProduct}})]},proxy:!0}]),model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),t.products.ready&&t.products.available?[e("div",{staticClass:"text-center"},[e("b",[t._v(t._s(t.products.data.length))]),t._v(' produk hasil pencarian "'),e("b",[t._v(t._s(t.searchTitle))])])]:t._e(),t.products.data.length?[e("product-section",{attrs:{products:t.products}})]:t._e(),t.products.available?t._e():[e("div",{staticClass:"text-center column"},[e("div",{staticClass:"text-h6"},[t._v("Opps..")]),e("div",{},[t._v("Tidak ada produk dengan kata kunci "),e("b",[t._v('"'+t._s(t.searchTitle)+'"')])])])],e("q-inner-loading",{attrs:{showing:t.loading}},[e("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1)],2)},s=[],c=e("ded3"),o=e.n(c),n=(e("d3b7"),e("e6cf"),e("a79d"),e("ac1f"),e("841c"),e("53a2")),i=e("2f62"),d={name:"ProductSearch",components:{ProductSection:n["a"]},data:function(){return{loading:!1,search:"",searchTitle:"",products:{data:[],ready:!1,available:!0}}},methods:o()(o()({},Object(i["b"])("product",["searchProducts"])),{},{searchProduct:function(){var t=this;this.loading=!0,this.$refs.input.blur(),this.searchProducts(this.search).then((function(a){200==a.status&&(t.products.data=a.data.results,t.products.available=!!t.products.data.length)})).finally((function(){t.products.ready=!0,t.loading=!1,t.searchTitle=t.search,t.search=""}))}}),mounted:function(){if(this.$route.query.q){var t=this.$route.query.q;t&&(this.search=t,this.searchProduct())}},created:function(){this.$store.commit("product/CLEAR_PRODUCT_SEARCH")}},u=d,l=e("2877"),p=e("9989"),h=e("e359"),b=e("65c6"),f=e("9c40"),k=e("6ac5"),v=e("27f9"),_=e("0016"),m=e("74f7"),g=e("e669"),q=e("eebe"),y=e.n(q),C=Object(l["a"])(u,r,s,!1,null,null,null);a["default"]=C.exports;y()(C,"components",{QPage:p["a"],QHeader:h["a"],QToolbar:b["a"],QBtn:f["a"],QToolbarTitle:k["a"],QInput:v["a"],QIcon:_["a"],QInnerLoading:m["a"],QSpinnerFacebook:g["a"]})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"30b4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.canInstall?n("div",{staticClass:"q-py-md bg-white sans",class:{"q-my-md":t.spacing}},[n("q-list",[n("q-item",[n("q-item-section",{attrs:{avatar:""}},[t.shop&&t.shop.logo_url?n("img",{attrs:{src:t.shop.logo_url,width:"50",height:"50"}}):n("img",{attrs:{src:"/icon/icon-96x96.png",width:"50",height:"50"}})]),n("q-item-section",{attrs:{top:""}},[n("div",{staticClass:"text-weight-bold text-md text-primary"},[t._v(t._s(t.shop.name)+" App")]),n("q-item-label",{attrs:{caption:""}},[t._v("Berbelanja akan lebih mudah dan cepat dengan menggunakan aplikasi.")])],1),t.isMini?t._e():n("q-item-section",{attrs:{side:""}},[n("div",[n("q-btn",{attrs:{icon:"download",unelevated:"",rounded:"","no-caps":"",unzelevated:"",color:"primary"},on:{click:t.installNow}},[n("span",[t._v("Install")])])],1)])],1),t.isMini?n("q-item",[n("q-item-section",[n("q-btn",{attrs:{unelevated:"","no-caps":"",unzelevated:"",color:"primary"},on:{click:t.installNow}},[n("span",[t._v("Install Sekarang")])])],1)],1):t._e()],1)],1):t._e()])},i=[],s=n("ded3"),o=n.n(s),r=n("2f62"),l={props:{spacing:{type:Boolean,default:!1},dense:{type:Boolean,default:!1}},computed:o()(o()({},Object(r["e"])({shop:function(t){return t.shop},deferredPrompt:function(t){return t.deferredPrompt}})),{},{isMini:function(){return window.screen.width<480},canInstall:function(){return!!this.deferredPrompt}}),methods:{installNow:function(){this.deferredPrompt.prompt()}}},c=l,d=n("2877"),p=n("1c1c"),m=n("66e5"),u=n("4074"),h=n("0170"),w=n("9c40"),f=n("eebe"),g=n.n(f),v=Object(d["a"])(c,a,i,!1,null,null,null);e["default"]=v.exports;g()(v,"components",{QList:p["a"],QItem:m["a"],QItemSection:u["a"],QItemLabel:h["a"],QBtn:w["a"]})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{f6b42:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{attrs:{view:"hHh lpR fFf"}},[s("q-page-container",[s("router-view")],1),s("q-footer",{staticClass:"text-center text-xs text-grey-7 bg-white q-pa-md"},[e._v("© Copyright 2021 "+e._s(e.shop?e.shop.name:"")+" Allrights Reserved")])],1)},o=[],r=s("ded3"),i=s.n(r),a=s("2f62"),u={name:"AdminLayout",computed:i()({},Object(a["e"])({isCheckLogin:function(e){return e.user.isCheckLogin},shop:function(e){return e.shop},user:function(e){return e.user}})),created:function(){this.$store.dispatch("getAdminConfig"),this.shop||this.$store.dispatch("getShop"),this.user||this.$store.dispatch("user/getUser")}},c=u,h=s("2877"),p=s("4d5a"),f=s("09e3"),d=s("7ff0"),l=s("eebe"),g=s.n(l),w=Object(h["a"])(c,n,o,!1,null,null,null);t["default"]=w.exports;g()(w,"components",{QLayout:p["a"],QPageContainer:f["a"],QFooter:d["a"]})}}]);
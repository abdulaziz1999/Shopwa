(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{5785:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",[t("q-header",[t("q-toolbar",[t("q-toolbar-title",[e._v("\n        Dashboard\n      ")]),t("q-btn",{attrs:{to:{name:"Home",query:{load:"true"}},flat:"","icon-right":"arrow_forward",label:"Lihat Toko","no-caps":""}})],1)],1),t("div",{staticClass:"overflow-x-hidden relative"},[t("q-list",{attrs:{separator:""}},[e._l(e.menus,(function(a){return t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.label,attrs:{clickable:"",to:{name:a.path}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-avatar",{attrs:{color:a.color,"text-color":"white",icon:a.icon,size:"md"}})],1),t("q-item-section",[t("q-item-label",[e._v(e._s(a.label))]),t("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v(e._s(a.caption))])],1),t("q-item-section",{attrs:{side:""}},[t("q-icon",{attrs:{name:"navigate_next"}})],1)],1)})),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(a){return a.preventDefault(),e.logout(a)}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-avatar",{attrs:{color:"grey","text-color":"white",icon:"logout",size:"md"}})],1),t("q-item-section",[t("q-item-label",[e._v("Logout")]),t("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("Keluar Sesi")])],1),t("q-item-section",{attrs:{side:""}},[t("q-icon",{attrs:{name:"navigate_next"}})],1)],1)],2)],1)],1)},n=[],i={data:function(){return{isShowen:!1,menus:[{label:"Akun",caption:"Pengaturan Akun",path:"Account",icon:"person",color:"green"},{label:"Toko",caption:"Pengaturan Tampilan toko",path:"Shop",icon:"store",color:"blue"},{label:"Produk",caption:"Tambah, edit dan hapus produk",path:"AdminProductIndex",icon:"inventory_2",color:"deep-orange"},{label:"Kategori",caption:"Kelola kategori produk",path:"CategoryIndex",icon:"category",color:"amber-7"},{label:"Diskon / Kupon",caption:"Kelola Diskon, Kupon dan promo",path:"DiscountIndex",icon:"local_offer",color:"blue-7"},{label:"Order",caption:"Kelola pesanan",path:"OrderIndex",icon:"receipt",color:"green"},{label:"Akun Bank",caption:"Kelola Akun Bank",path:"BankIndex",icon:"account_balance",color:"purple"},{label:"Slider",caption:"Kelola slideshow",path:"Slider",icon:"view_carousel",color:"teal"},{label:"Block",caption:"Kelola banner, partner dan featured",path:"AdminBlockIndex",icon:"space_dashboard",color:"amber-7"},{label:"Artikel",caption:"Kelola Artikel / blog",path:"AdminPostIndex",icon:"article",color:"deep-orange"},{label:"Manage User",caption:"kelola user",path:"UserList",icon:"group",color:"teal"},{label:"Pengaturan",caption:"Pengaturan Website dan pengiriman",path:"Config",icon:"settings",color:"accent"}]}},methods:{logout:function(){this.$store.dispatch("user/logout")},exitApp:function(){this.$store.dispatch("user/exitApp",navigator)}}},l=i,r=t("2877"),c=t("9989"),s=t("e359"),p=t("65c6"),u=t("6ac5"),d=t("9c40"),b=t("1c1c"),m=t("66e5"),h=t("4074"),g=t("cb32"),k=t("0170"),v=t("0016"),q=t("714f"),f=t("eebe"),_=t.n(f),w=Object(r["a"])(l,o,n,!1,null,null,null);a["default"]=w.exports;_()(w,"components",{QPage:c["a"],QHeader:s["a"],QToolbar:p["a"],QToolbarTitle:u["a"],QBtn:d["a"],QList:b["a"],QItem:m["a"],QItemSection:h["a"],QAvatar:g["a"],QItemLabel:k["a"],QIcon:v["a"]}),_()(w,"directives",{Ripple:q["a"]})}}]);
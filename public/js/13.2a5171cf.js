(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"2f9a":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"bg-grey-2 front overflow-x-hidden",attrs:{view:"hHh lpR fFf"}},[t.config&&t.config.is_notifypro?o("notify"):t._e(),o("q-page-container",[o("router-view")],1),o("q-footer",{staticClass:"bg-white text-primary footer-tab"},[o("q-tabs",{staticClass:"text-grey-8 shadow-2 text-xs",attrs:{"active-color":"primary","no-caps":"",dense:"","switch-indicator":"","indicator-color":"primary"}},[o("q-route-tab",{attrs:{icon:"home",label:"Beranda",to:{name:"Home"},exact:""}}),o("q-route-tab",{attrs:{icon:"search",to:{name:"ProductSearch"},label:"Cari",exact:""}}),t.config&&"default"==t.config.theme?o("q-route-tab",{attrs:{icon:"store",to:{name:"ProductIndex"},label:"Katalog",exact:""}}):t._e(),t.config&&"romance"==t.config.theme?o("q-route-tab",{staticClass:"bg-primary text-white",attrs:{icon:"store",to:{name:"ProductIndex"},label:"Katalog",exact:""}}):t._e(),t.config&&"elegant"==t.config.theme?o("q-btn",{staticClass:"text-md",attrs:{to:{name:"ProductIndex"},icon:"store",color:"primary",round:""}}):t._e(),o("q-route-tab",{attrs:{to:{name:"Cart"},icon:"shopping_cart",exact:"",label:"Keranjang"}},[t.cartCount>0?o("q-badge",{attrs:{color:"pink",floating:""}},[t._v(t._s(t.cartCount))]):t._e()],1),o("q-tab",{attrs:{icon:"account_circle",exact:"",label:"Akun"},on:{click:t.toDashboard}})],1)],1)],1)},n=[],i=o("ded3"),a=o.n(i),s=(o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.orderItem?o("div",{staticClass:"notif-content",class:{show:t.isShowen}},[o("q-list",[o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",[o("img",{attrs:{src:t.orderItem.images[0].src}})])],1),o("q-item-section",[o("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.orderItem.order.customer_name)+" telah membeli")]),o("q-item-label",{staticClass:"ellipsis-2-lines"},[t._v(t._s(t.orderItem.name)+" ")]),o("div",{staticClass:"text-green-7 q-pa-xs text-xs"},[t._v(t._s(t.orderItem.created))])],1),o("q-item-section",{attrs:{side:"",top:""}},[o("q-btn",{attrs:{icon:"close",size:"10px",color:"primary",flat:"",round:""},on:{click:t.closeNotify}})],1)],1)],1)],1):t._e()}),c=[],u=(o("7db0"),o("758b")),h={data:function(){return{orders:[],isShowen:!1,orderItem:null,currentOrderIndex:0}},watch:{isShowen:function(t){var e=this;t&&setTimeout((function(){e.isShowen=!1}),this.notifyTimeOut)}},computed:{config:function(){return this.$store.state.config},notifyInterval:function(){return this.config?1e3*this.config.notifypro_interval:15e3},notifyTimeOut:function(){return this.config?1e3*this.config.notifypro_timeout:4e3}},methods:{showNotif:function(){var t=this;setInterval((function(){t.isShowen=!0,t.currentOrderIndex<t.orders.length-1?t.currentOrderIndex++:t.currentOrderIndex=0,t.setCurrentOrder()}),this.notifyInterval)},setCurrentOrder:function(){var t=this;this.orderItem=this.orders.find((function(e,o){return o==t.currentOrderIndex}))},closeNotify:function(){this.isShowen=!1}},mounted:function(){var t=this;Object(u["a"])().get("getRandomOrder").then((function(e){200==e.status&&(t.orders=e.data.results,t.orders.length&&(t.setCurrentOrder(),setTimeout((function(){t.showNotif()}),t.notifyInterval)))}))}},l=h,d=o("2877"),f=o("1c1c"),m=o("66e5"),g=o("4074"),p=o("cb32"),b=o("0170"),v=o("9c40"),x=o("eebe"),_=o.n(x),w=Object(d["a"])(l,s,c,!1,null,null,null),y=w.exports;_()(w,"components",{QList:f["a"],QItem:m["a"],QItemSection:g["a"],QAvatar:p["a"],QItemLabel:b["a"],QBtn:v["a"]});var C=o("2f62"),I=o("852e"),q=o.n(I),O={components:{Notify:y},name:"FrontLayout",data:function(){return{tab:"images",onsearch:!1,search:""}},computed:a()(a()(a()(a()({},Object(C["c"])("cart",["cartCount"])),Object(C["c"])("product",["favoriteCount"])),Object(C["e"])({isCheckLogin:function(t){return t.user.isCheckLogin},shop:function(t){return t.shop},config:function(t){return t.config},user:function(t){return t.user.user}})),{},{logoWidth:function(){return this.shop&&this.shop.name?"width:35px;height:35px;object:cover":"width:auto;height:35px;object:contain"}}),methods:{toDashboard:function(){this.user?"admin"==this.user.role?this.$router.push({name:"Settings"}):this.$router.push({name:"CustomerOrder"}):this.$router.push({name:"Login"})}},mounted:function(){this.shop||this.$store.dispatch("getShop"),this.config||this.$store.dispatch("getConfig"),q.a.get("__token")&&(this.user||this.$store.dispatch("user/getUser"))},created:function(){this.config&&this.$store.commit("SET_THEME_COLOR",this.config.theme_color)},meta:function(){var t;return{meta:{ogUrl:{property:"og:url",content:location.href},ogImage1:{property:"og:image",content:null===(t=this.shop)||void 0===t?void 0:t.logo}}}}},Q=O,S=o("4d5a"),$=o("09e3"),j=o("7ff0"),k=o("429b"),T=o("7867"),L=o("58a81"),E=o("7460"),N=Object(d["a"])(Q,r,n,!1,null,null,null);e["default"]=N.exports;_()(N,"components",{QLayout:S["a"],QPageContainer:$["a"],QFooter:j["a"],QTabs:k["a"],QRouteTab:T["a"],QBtn:v["a"],QBadge:L["a"],QTab:E["a"]})}}]);
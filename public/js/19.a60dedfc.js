(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"2f9a":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"bg-grey-2 front overflow-x-hidden",attrs:{view:"hHh lpR fFf"}},[t.config&&t.config.is_notifypro?o("notify"):t._e(),o("q-page-container",[o("router-view")],1),o("q-footer",{staticClass:"bg-white text-primary footer-tab"},[o("q-tabs",{staticClass:"text-grey-8 text-xs",attrs:{"active-color":"primary","no-caps":"",dense:"","switch-indicator":"","indicator-color":"primary"}},[o("q-route-tab",{attrs:{icon:"home",label:"Beranda",to:{name:"Home"},exact:""}}),o("q-route-tab",{attrs:{icon:"search",to:{name:"ProductSearch"},label:"Cari",exact:""}}),t.config&&"default"==t.config.theme?o("q-route-tab",{attrs:{icon:"store",to:{name:"ProductIndex"},label:"Katalog",exact:""}}):t._e(),t.config&&"romance"==t.config.theme?o("q-route-tab",{staticClass:"bg-primary text-white",attrs:{icon:"store",to:{name:"ProductIndex"},label:"Katalog",exact:""}}):t._e(),t.config&&"elegant"==t.config.theme?o("q-btn",{staticClass:"text-md",attrs:{to:{name:"ProductIndex"},icon:"store",color:"primary",round:""}}):t._e(),o("q-route-tab",{attrs:{to:{name:"Cart"},icon:"shopping_cart",exact:"",label:"Keranjang"}},[t.cartCount>0?o("q-badge",{attrs:{color:"pink",floating:""}},[t._v(t._s(t.cartCount))]):t._e()],1),o("q-tab",{attrs:{icon:"account_circle",exact:"",label:"Akun"},on:{click:t.toDashboard}})],1)],1)],1)},r=[],i=o("ded3"),a=o.n(i),s=(o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.orderItem?o("div",{staticClass:"notif-content",class:{show:t.isShowen}},[o("q-list",[o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",[o("img",{attrs:{src:t.orderItem.image}})])],1),o("q-item-section",[o("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.orderItem.customer_name)+" telah membeli")]),o("q-item-label",{staticClass:"ellipsis-2-lines"},[t._v(t._s(t.orderItem.name)+" ")]),o("div",{staticClass:"text-green-7 q-pa-xs text-xs"},[t._v(t._s(t.orderItem.created))])],1),o("q-item-section",{attrs:{side:"",top:""}},[o("q-btn",{attrs:{icon:"close",size:"10px",color:"primary",flat:"",round:""},on:{click:t.closeNotify}})],1)],1)],1)],1):t._e()}),c=[],u=(o("7db0"),o("758b")),h={data:function(){return{orders:[],isShowen:!1,orderItem:null,currentOrderIndex:0}},watch:{isShowen:function(t){var e=this;t&&setTimeout((function(){e.isShowen=!1}),this.notifyTimeOut)}},computed:{config:function(){return this.$store.state.config},orderItems:function(){return this.$store.state.order.orderItems},notifyInterval:function(){return this.config?1e3*this.config.notifypro_interval:15e3},notifyTimeOut:function(){return this.config?1e3*this.config.notifypro_timeout:4e3}},methods:{showNotif:function(){var t=this;this.isShowen=!0,setInterval((function(){t.orderItem&&(t.currentOrderIndex<t.orderItems.length-1?t.currentOrderIndex++:t.currentOrderIndex=0,t.setCurrentOrder())}),this.notifyInterval)},setCurrentOrder:function(){var t=this;localStorage.getItem("is_hide_notify")?this.isShowen=!1:(this.orderItem=this.orderItems.find((function(e,o){return o==t.currentOrderIndex})),this.isShowen=!0)},initialNotify:function(){var t=this;this.orderItem=this.orderItems.find((function(e,o){return o==t.currentOrderIndex})),setTimeout((function(){t.showNotif()}),2*this.notifyInterval)},closeNotify:function(){var t=this;localStorage.setItem("is_hide_notify",!0),this.isShowen=!1,setTimeout((function(){localStorage.removeItem("is_hide_notify"),t.isShowen=!0}),4*this.notifyInterval)},getRandomOrder:function(){var t=this;Object(u["a"])().get("getRandomOrder").then((function(e){200==e.status&&(t.$store.commit("order/SET_NOTIFY_ORDER_ITEMS",e.data.results),setTimeout((function(){t.orderItems.length&&t.initialNotify()}),500))}))}},mounted:function(){this.orderItems.length||this.getRandomOrder()}},l=h,d=o("2877"),f=o("1c1c"),m=o("66e5"),g=o("4074"),p=o("cb32"),b=o("0170"),I=o("9c40"),_=o("eebe"),v=o.n(_),x=Object(d["a"])(l,s,c,!1,null,null,null),y=x.exports;v()(x,"components",{QList:f["a"],QItem:m["a"],QItemSection:g["a"],QAvatar:p["a"],QItemLabel:b["a"],QBtn:I["a"]});var w=o("2f62"),O=o("852e"),q=o.n(O),C={components:{Notify:y},name:"FrontLayout",data:function(){return{tab:"images",onsearch:!1,search:""}},computed:a()(a()(a()(a()({},Object(w["c"])("cart",["cartCount"])),Object(w["c"])("product",["favoriteCount"])),Object(w["e"])({isCheckLogin:function(t){return t.user.isCheckLogin},shop:function(t){return t.shop},config:function(t){return t.config},user:function(t){return t.user.user}})),{},{logoWidth:function(){return this.shop&&this.shop.name?"width:35px;height:35px;object:cover":"width:auto;height:35px;object:contain"}}),methods:{toDashboard:function(){this.user?"admin"==this.user.role?this.$router.push({name:"Settings"}):this.$router.push({name:"CustomerOrder"}):this.$router.push({name:"Login"})}},mounted:function(){this.shop||this.$store.dispatch("getShop"),this.config||this.$store.dispatch("getConfig"),q.a.get("__token")&&(this.user||this.$store.dispatch("user/getUser"))},created:function(){this.config&&this.$store.commit("SET_THEME_COLOR",this.config.theme_color)},meta:function(){var t;return{meta:{ogUrl:{property:"og:url",content:location.href},ogImage1:{property:"og:image",content:null===(t=this.shop)||void 0===t?void 0:t.logo}}}}},S=C,Q=o("4d5a"),T=o("09e3"),$=o("7ff0"),j=o("429b"),k=o("7867"),E=o("58a81"),L=o("7460"),N=Object(d["a"])(S,n,r,!1,null,null,null);e["default"]=N.exports;v()(N,"components",{QLayout:Q["a"],QPageContainer:T["a"],QFooter:$["a"],QTabs:j["a"],QRouteTab:k["a"],QBtn:I["a"],QBadge:E["a"],QTab:L["a"]})}}]);
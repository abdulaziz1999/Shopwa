(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"29d2":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"q-pa-sm"},[o("q-header",{staticClass:"text-primary bg-white",attrs:{reveal:"","reveal-offset":10}},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"arrow_back"},on:{click:t.handleBackButton}}),o("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v("Checkout")])],1)],1),t.carts&&t.carts.items.length?o("div",{ref:"top",staticClass:"q-pb-xl",attrs:{id:"checkout"}},[o("shipping-address",{attrs:{isModalAddress:t.isAvailableOldAddress},on:{closeModal:function(e){t.isAvailableOldAddress=!1},checkStep:t.checkStepOk}})],1):t._e(),o("q-inner-loading",{attrs:{showing:t.loading}},[o("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1),o("q-footer",{staticClass:"bg-white q-pa-md"},[o("q-btn",{staticClass:"full-width",attrs:{disabled:!t.isOk,"no-caps":"",unelevated:"",label:"Proses Pesanan",color:"primary"},on:{click:t.checkout}})],1)],1)},n=[],s=(o("ac1f"),o("5319"),o("2ca0"),o("1276"),o("a15b"),o("159b"),o("99af"),o("b0c0"),o("54df")),a={components:{ShippingAddress:s["a"]},name:"CheckoutDirectWithShipping",data:function(){return{isAvailableOldAddress:!1,isOk:!1,formLoading:!1}},computed:{carts:function(){return this.$store.getters["cart/getCarts"]},formOrder:function(){return this.$store.getters["order/getFormOrder"]},shop:function(){return this.$store.state.shop},config:function(){return this.$store.state.config},loading:function(){return this.$store.state.loading},session_id:function(){return this.$store.state.session_id},coupon_discount:function(){return this.$store.state.coupon.coupon_discount}},mounted:function(){this.carts.items.length||this.$router.back(),this.checkDataUser(),this.collectOrder()},methods:{collectOrder:function(){this.$store.commit("order/COLLECT_ORDER",this.carts)},checkDataUser:function(){localStorage.getItem("user_data")&&(this.isAvailableOldAddress=!0)},handleBackButton:function(){this.$router.push({name:"Cart"})},checkStepOk:function(){this.formOrder.customer_name&&this.formOrder.customer_phone&&this.formOrder.shipping_courier_name&&this.formOrder.address?this.isOk=!0:this.isOk=!1},formatPhoneNumber:function(t){var e=t.replace(/\D/g,"");return e.startsWith("0")&&(e="62"+e.substr(1)),e},formatAddressCod:function(t){var e=t.split("<br>");return e.join("\n")},checkout:function(){var t=this;if(this.checkStepOk(),this.isOk){var e="https://api.whatsapp.com",o=this.formatPhoneNumber(this.shop.phone),r="Halo kak, saya mau order:\n\n",n=this.formOrder.items,s=1;n.forEach((function(e){r+="*".concat(s,". ").concat(e.name,"*\n"),e.note&&(r+="[".concat(e.note,"]\n")),r+="Jumlah: ".concat(e.quantity,"\nHarga (@): ").concat(t.moneyIDR(e.price),"\nHarga Total: ").concat(t.moneyIDR(e.quantity*e.price),"\n\n"),s++})),r+="Subtotal: *".concat(this.moneyIDR(this.formOrder.subtotal),"*\nOngkir: *").concat(this.moneyIDR(this.formOrder.shipping_cost),"*\nDiskon: *").concat(this.moneyIDR(this.formOrder.coupon_discount),"*\nTotal: *").concat(this.moneyIDR(this.formOrder.total),"*\n-----------------------------------\n\n*Nama:*\n ").concat(this.formOrder.customer_name," (").concat(this.formOrder.customer_phone,")\n\n*Alamat:*\n").concat(this.formatAddressCod(this.formOrder.address),"\n\nKurir: ").concat(this.formOrder.shipping_courier_name,"\nServis: ").concat(this.formOrder.shipping_courier_service,"\n");var a=e+"/send?phone="+o+"&text="+encodeURI(r);setTimeout((function(){t.$router.push({name:"Cart"})}),1e3),setTimeout((function(){t.$store.dispatch("cart/clearCart",t.session_id)}),5e3),window.open(a,"_blank")}},toTop:function(){var t=this;setTimeout((function(){var e=t.$refs.top;e.scrollIntoView({behavior:"smooth"})}),500)}}},i=a,c=o("2877"),h=o("9989"),d=o("e359"),u=o("65c6"),l=o("9c40"),m=o("6ac5"),f=o("74f7"),p=o("e669"),b=o("7ff0"),k=o("eebe"),O=o.n(k),g=Object(c["a"])(i,r,n,!1,null,null,null);e["default"]=g.exports;O()(g,"components",{QPage:h["a"],QHeader:d["a"],QToolbar:u["a"],QBtn:l["a"],QToolbarTitle:m["a"],QInnerLoading:f["a"],QSpinnerFacebook:p["a"],QFooter:b["a"]})}}]);
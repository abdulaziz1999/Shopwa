(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"841d":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("q-header",{staticClass:"text-primary bg-white",attrs:{reveal:"","reveal-offset":10}},[s("q-toolbar",[s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"arrow_back"},on:{click:t.handleBackButton}}),s("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v(t._s(t.title))])],1)],1),t.carts&&t.carts.items.length?s("div",{ref:"top",staticClass:"q-pb-xl",attrs:{id:"checkout"}},[s("q-stepper",{attrs:{"keep-alive":"",flat:"",color:"primary","alternative-labels":"",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("q-step",{attrs:{name:1,title:"Pengiriman",done:t.step>1,icon:"local_shipping"}},[s("shipping-address",{attrs:{canEmail:"",isModalAddress:t.isAvailableOldAddress,formData:t.form},on:{place:t.placeAddress,closeModal:function(e){t.isAvailableOldAddress=!1}}})],1),"COD"!=t.form.shipping_courier_name?s("q-step",{attrs:{name:2,title:"Pembayaran",done:t.step>2,icon:"payments"}},[s("payment-list",{ref:"paymentList",attrs:{isCod:t.isCod,paymentSelected:t.paymentSelected,payments:t.paymentChanels,order:t.form},on:{onSelect:t.onSelectPayment}})],1):t._e(),s("q-step",{attrs:{name:3,title:"Review",done:t.step>3,icon:"playlist_add_check"}},[s("review-order",{attrs:{form:t.form,carts:t.carts,paymentSelected:t.paymentSelected,noPayment:t.isCantPaymentStep}})],1)],1)],1):t._e(),s("q-inner-loading",{attrs:{showing:t.loading}},[s("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1),s("div",{staticClass:"bg-white q-pa-md q-gutter-y-sm column",class:{"sticky-bottom":t.$q.platform.is.desktop}},[3!=t.step&&"COD"!=t.form.shipping_courier_name?s("q-btn",{attrs:{disabled:!t.isOk,"no-caps":"",unelevated:"",label:"Langkah Selanjutnya",color:"primary"},on:{click:t.next}}):t._e(),"COD"==t.form.shipping_courier_name&&3!=t.step?s("q-btn",{attrs:{disabled:!t.isOk,"no-caps":"",unelevated:"",label:"Langkah Selanjutnya",color:"primary"},on:{click:function(e){t.step=3}}}):t._e(),3==t.step?s("q-btn",{attrs:{disabled:t.loading,"no-caps":"",unelevated:"",label:"Proses Pesanan",color:"primary"},on:{click:t.submitOrder}}):t._e()],1)],1)},a=[],i=s("ded3"),r=s.n(i),o=(s("b0c0"),s("ac1f"),s("1276"),s("a15b"),s("159b"),s("99af"),s("5319"),s("2ca0"),s("758b")),c=s("2f62"),m=s("54df"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-gutter-y-lg"},[t.payments.localbanks.length?s("div",[s("fieldset",[s("legend",{staticClass:"q-px-sm"},[t._v("Bank Transfer")]),s("div",{staticClass:"row q-gutter-sm payment-container"},t._l(t.payments.localbanks,(function(e,n){return s("div",{key:n,staticClass:"box-shadow cursor-pointer payment-list bank_trf",class:{"is-selected":t.isSelectedBank(e.id)},on:{click:function(s){return t.selectPaymentBank(e)}}},[s("div",[s("div",{staticClass:"text-center text-weight-bold text-md"},[t._v(t._s(e.bank_name))]),s("div",{staticClass:"text-weight-medium"},[t._v("Bank Transfer")])])])})),0),s("div",{staticClass:"q-pa-sm text-caption"},[t._v("*Verifikasi manual")])])]):t._e(),t.virtualAccounts.length?s("div",[s("fieldset",[s("legend",{staticClass:"q-px-sm"},[t._v("Virtual Account")]),s("div",{staticClass:"row q-gutter-sm payment-container"},t._l(t.virtualAccounts,(function(e,n){return s("div",{key:n},[s("div",{staticClass:"box-shadow cursor-pointer payment-list",class:{"is-selected":t.isSelected(e.code)},on:{click:function(s){return t.selectPayment(e)}}},[s("div",{staticClass:"image"},[e.icon_url?s("img",{attrs:{src:e.icon_url}}):s("img",{attrs:{src:"/static/no-image.png"}})]),s("div",{staticClass:"text-center name"},[t._v(t._s(e.name))])]),t.isFeeCustomer(e.fee_customer)?s("div",{staticClass:"text-grey-7 text-xs q-pa-xs text-center"},[t._v("Fee "+t._s(t.moneyIDR(t.calculateFee(e.fee_customer))))]):t._e()])})),0)])]):t._e(),t.convenienceStore.length?s("div",[s("fieldset",[s("legend",{staticClass:"q-px-sm"},[t._v("Convenion Store")]),s("div",{staticClass:"row q-gutter-sm payment-container"},t._l(t.convenienceStore,(function(e,n){return s("div",{key:n},[s("div",{staticClass:"box-shadow cursor-pointer payment-list",class:{"is-selected":t.isSelected(e.code)},on:{click:function(s){return t.selectPayment(e)}}},[s("div",{staticClass:"image"},[e.icon_url?s("img",{attrs:{src:e.icon_url}}):s("img",{attrs:{src:"/static/no-image.png"}})]),s("div",{staticClass:"text-center name"},[t._v(t._s(e.name))])]),t.isFeeCustomer(e.fee_customer)?s("div",{staticClass:"text-grey-7 text-xs q-pa-xs text-center"},[t._v("Fee "+t._s(t.moneyIDR(t.calculateFee(e.fee_customer))))]):t._e()])})),0)])]):t._e(),t.ewalet.length?s("div",[s("fieldset",[s("legend",{staticClass:"q-px-sm"},[t._v("E-Walet")]),s("div",{staticClass:"row q-gutter-sm payment-container"},t._l(t.ewalet,(function(e,n){return s("div",{key:n},[s("div",{staticClass:"box-shadow cursor-pointer payment-list",class:{"is-selected":t.isSelected(e.code)},on:{click:function(s){return t.selectPayment(e)}}},[s("div",{staticClass:"image"},[e.icon_url?s("img",{attrs:{src:e.icon_url}}):s("img",{attrs:{src:"/static/no-image.png"}})]),s("div",{staticClass:"text-center name"},[t._v(t._s(e.name))])]),t.isFeeCustomer(e.fee_customer)?s("div",{staticClass:"text-grey-7 text-xs q-pa-xs text-center"},[t._v("Fee "+t._s(t.moneyIDR(t.calculateFee(e.fee_customer))))]):t._e()])})),0)])]):t._e()])},p=[],u=(s("4de4"),s("0481"),{props:{payments:Object,paymentSelected:Object,isCod:Boolean,order:Object},computed:{user:function(){return this.$store.state.user.user},viaSaldo:function(){return this.paymentSelected&&"BALANCE"==this.paymentSelected.payment_type},canSaldo:function(){return this.user.balance.saldo>=this.order.total},virtualAccounts:function(){return this.payments&&this.payments.paymentGateway.length?this.payments.paymentGateway.filter((function(t){return"Virtual Account"==t.group&&1==t.active})):[]},convenienceStore:function(){return this.payments&&this.payments.paymentGateway.length?this.payments.paymentGateway.filter((function(t){return"Convenience Store"==t.group&&1==t.active})):[]},ewalet:function(){return this.payments&&this.payments.paymentGateway.length?this.payments.paymentGateway.filter((function(t){return"E-Wallet"==t.group&&1==t.active})):[]},isSelectedCod:function(){return!!this.paymentSelected&&"COD"==this.paymentSelected.payment_type}},methods:{isFeeCustomer:function(t){return t.flat>0||t.percent>0},calculateFee:function(t){var e=parseInt(t.flat);if(t.percent>0){var s=parseInt(this.order.total)*parseFloat(t.percent)/100;t.flat>0?e+=s:e=s}return e},isSelected:function(t){return!!this.paymentSelected&&this.paymentSelected.code==t},isSelectedBank:function(t){return!!this.paymentSelected&&this.paymentSelected.id==t},selectCodPayment:function(){var t={payment_type:"COD",payment_method:"COD",payment_name:"Bayar Ditempat"};this.$emit("onSelect",t)},selectSaldo:function(){this.canSaldo&&this.$emit("onSelect",{payment_type:"BALANCE"})},selectPayment:function(t){this.$emit("onSelect",r()(r()({},t),{},{payment_type:"GATEWAY",payment_fee:this.calculateFee(t.fee_customer)}))},selectPaymentBank:function(t){this.$emit("onSelect",r()(r()({},t),{},{payment_type:"DIRECT"}))}}}),d=u,h=s("2877"),_=Object(h["a"])(d,l,p,!1,null,null,null),f=_.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["OVO"==t.form.payment_method?s("div",{staticClass:"q-mb-md"},[t._m(0)]):t._e(),s("fieldset",[s("legend",{staticClass:"q-pa-sm"},[t._v("Info Pengiriman")]),s("table",{staticClass:"table dense"},[s("tr",[s("th",{attrs:{align:"left"}},[t._v("Penerima")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.form.customer_name))])]),s("tr",[s("th",{attrs:{align:"left"}},[t._v("Whatsapp")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.form.customer_whatsapp))])]),s("tr",[s("th",{attrs:{align:"left"}},[t._v("Alamat")]),s("td",[t._v(":")]),s("td",[s("div",{domProps:{innerHTML:t._s(t.form.address)}})])]),s("tr",[s("th",{attrs:{align:"left"}},[t._v("Kurir")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.form.shipping_courier_name))])]),t.form.shipping_courier_service?s("tr",[s("th",{attrs:{align:"left"}},[t._v("Servis")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.form.shipping_courier_service))])]):t._e()])]),s("fieldset",{staticClass:"q-mt-lg"},[s("legend",{staticClass:"q-pa-sm"},[t._v("Ringkasan Order")]),t.carts.items.length?s("div",{staticClass:"bg-grey-2 q-mb-md"},[s("q-list",{attrs:{separator:""}},t._l(t.carts.items,(function(e){return s("q-item",{key:e.id},[s("q-item-section",{attrs:{side:"",top:""}},[s("q-img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.image_url}})],1),s("q-item-section",[s("div",{staticClass:"col"},[s("div",{staticClass:"text-weight-medium"},[t._v(t._s(e.name))]),s("div",{staticClass:"text-caption text-grey-7"},[t._v(t._s(e.note))]),s("div",{staticClass:"text-grey-7"},[t._v(t._s(e.quantity+"x "+t.moneyIDR(e.price)))])])])],1)})),1)],1):t._e(),s("div",{staticClass:"flex justify-end"},[s("table",{staticClass:"table dense"},[s("tr",[s("td",{attrs:{align:"right"}},[t._v("Subtotal")]),s("td",{attrs:{align:"right"}},[t._v(":")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.form.subtotal)))])]),t.form.shipping_cost?s("tr",[s("td",{attrs:{align:"right"}},[t._v("Ongkos Kirim (+)")]),s("td",{attrs:{align:"right"}},[t._v(":")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.form.shipping_cost)))])]):t._e(),t.form.payment_fee?s("tr",[s("td",{attrs:{align:"right"}},[t._v("Payment Fee (+)")]),s("td",{attrs:{align:"right"}},[t._v(":")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.form.payment_fee)))])]):t._e(),t.form.coupon_discount?s("tr",[s("td",{attrs:{align:"right"}},[t._v("Diskon (-)")]),s("td",{attrs:{align:"right"}},[t._v(":")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.form.coupon_discount?t.moneyIDR(t.form.coupon_discount):0))])]):t._e()])]),s("div",{staticClass:"flex justify-end q-mt-sm"},[s("table",{staticClass:"table dense"},[s("tr",[s("th",{attrs:{align:"right"}},[t._v("Total Tagihan")]),s("td",{attrs:{align:"right"}},[t._v(":")]),s("th",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.form.total)))])])])])]),t.form.payment_method&&t.paymentSelected?s("fieldset",{staticClass:"q-mt-lg"},[s("legend",{staticClass:"q-pa-sm"},[t._v("Pembayaran")]),s("div",{staticClass:"row q-gutter-sm"},["COD"==t.form.payment_method?[t._m(1)]:[s("div",{staticClass:"box-shadow payment-list is-selected"},[t.paymentSelected.icon_url?s("div",{staticClass:"image"},[s("img",{attrs:{src:t.paymentSelected.icon_url}})]):t._e(),"DIRECT"==t.paymentSelected.payment_type?s("div",{staticClass:"flex justify-center items-center",staticStyle:{margin:"auto"}},[s("div",{staticClass:" text-weight-bold text-md"},[t._v(t._s(t.paymentSelected.bank_name))]),s("div",[t._v("Bank Transfer")])]):s("div",{staticClass:"text-center name"},[t._v("\n              "+t._s(t.paymentSelected.name)+"\n            ")])])]],2)]):t._e()])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-yellow-2 text-grey-7 q-pa-sm"},[s("div",{staticClass:"text-weight-bold"},[t._v("Note:")]),s("div",[t._v("\n        Anda memilih metode pembayaran OVO, "),s("br"),t._v("Pastikan nomor ponsel dan email yang anda inputkan sama dengan yang terdaftar di OVO milik anda.\n      ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-shadow payment-list is-selected"},[s("div",{staticClass:"text-weight-bold text-h5 text-center"},[t._v("COD")]),s("div",{staticClass:"text-center name q-pa-xs"},[t._v("Bayar Ditempat")])])}],v={name:"ReviewOrder",props:{carts:Object,form:Object,paymentSelected:Object,noPayment:Boolean},methods:{money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}},C=v,b=s("1c1c"),k=s("66e5"),O=s("4074"),S=s("068f"),w=s("eebe"),x=s.n(w),D=Object(h["a"])(C,y,g,!1,null,null,null),q=D.exports;x()(D,"components",{QList:b["a"],QItem:k["a"],QItemSection:O["a"],QImg:S["a"]});var I={components:{ShippingAddress:m["a"],PaymentList:f,ReviewOrder:q},name:"CheckoutPage",data:function(){return{isAvailableOldAddress:!1,isOk:!1,step1Ok:!1,step2Ok:!1,formLoading:!1,paymentChanels:{localbanks:[],paymentGateway:[]},invoiceTemp:null,step:1,paymentSelected:null,form:{reference:"",customer_name:"",customer_email:"",customer_whatsapp:"",payment_method:"",payment_name:"",payment_type:"",payment_code:"",payment_fee:0,address:"",items:[],subtotal:0,total:0,quantity:0,weight:0,shipping_courier_name:"",shipping_cost:0,shipping_courier_service:"",coupon_discount:0}}},watch:{step:function(){this.checkStepOk(),this.toTop()}},computed:{isOVO:function(){return"OVO"==this.form.payment_method},isCod:function(){return"COD"==this.form.shipping_courier_name},carts:function(){return this.$store.getters["cart/getCarts"]},shop:function(){return this.$store.state.shop},config:function(){return this.$store.state.config},loading:function(){return this.$store.state.loading},isCodPayment:function(){return"COD"==this.form.payment_method},isCantPaymentStep:function(){return"COD"==this.form.shipping_courier_name||!this.config.is_payment_gateway},title:function(){return 1==this.step?"Pengiriman":2==this.step?"Pembayaran":3==this.step?"Review Order":"Checkout"},session_id:function(){return this.$store.state.session_id},coupon_discount:function(){return this.$store.state.coupon.coupon_discount}},mounted:function(){this.carts.items.length||this.$router.push({name:"Cart"}),this.config&&this.config.is_payment_gateway&&!this.paymentChanels.paymentGateway.length&&this.getPaymentChanel(),this.paymentChanels.localbanks.length||this.getLocalBanks(),this.checkDataUser(),this.collectOrder()},methods:r()(r()({},Object(c["b"])("order",["storeOrder"])),{},{placeAddress:function(t){this.paymentSelected=null,"COD"==t.shipping_courier_name?(this.form.payment_type="COD",this.form.payment_method="COD",this.form.payment_name="COD"):(this.form.payment_type="",this.form.payment_method="",this.form.payment_name=""),this.form.user_id=t.user_id,this.form.customer_email=t.customer_email,this.form.customer_name=t.customer_name,this.form.customer_whatsapp=t.customer_whatsapp,this.form.shipping_cost=t.shipping_cost,this.form.shipping_courier_name=t.shipping_courier_name,this.form.shipping_courier_service=t.shipping_courier_service,this.form.address=t.address,this.checkDiscount(),this.collectOrder(),this.checkStepOk()},collectOrder:function(){this.form.items=this.carts.items,this.form.subtotal=this.carts.subtotal,this.form.total=this.sumTotal(),this.form.quantity=this.carts.qty,this.form.weight=this.carts.weight,this.coupon_discount&&(this.form.coupon_discount=this.getDiscountAmount())},checkDataUser:function(){localStorage.getItem("user_data")&&(this.isAvailableOldAddress=!0)},handleBackButton:function(){this.step>1?this.isCod?this.step=1:this.step-=1:this.$router.push({name:"Cart"})},toTop:function(){var t=this;setTimeout((function(){var e=t.$refs.top;e.scrollIntoView({behavior:"smooth"})}),500)},checkStepOk:function(){1==this.step?this.form.customer_name&&this.form.customer_email&&this.form.customer_whatsapp&&this.form.shipping_courier_name&&this.form.address&&(this.isCod||this.form.shipping_cost)?this.isOk=!0:this.isOk=!1:2==this.step?this.form.payment_name&&this.form.address&&this.form.payment_type?this.isOk=!0:this.isOk=!1:this.isOk=!0},onSelectPayment:function(t){this.paymentSelected=t,t.payment_fee?this.form.payment_fee=t.payment_fee:this.form.payment_fee=0,"DIRECT"==t.payment_type&&(this.form.payment_method="BANK_TRANSFER",this.form.payment_name=t.bank_name+" - "+t.bank_office+" ( a.n "+t.account_name+" )",this.form.payment_code=t.account_number,this.form.payment_type=t.payment_type),"GATEWAY"==t.payment_type&&(this.form.payment_method=t.code,this.form.payment_name=t.name,this.form.payment_code="",this.form.payment_type=t.payment_type),"COD"==t.payment_type&&(this.form.payment_method=t.payment_method,this.form.payment_name=t.payment_name,this.form.payment_code="",this.form.payment_type="COD"),this.checkDiscount(),this.collectOrder(),this.checkStepOk()},checkDiscount:function(){this.coupon_discount&&(this.form.coupon_discount=this.getDiscountAmount())},submitOrder:function(){var t=this;this.$store.commit("SET_LOADING",!0),this.storeOrder(this.form).then((function(e){t.$store.commit("SET_LOADING",!1),200==e.status&&(t.$store.commit("order/SET_INVOICE",e.data.results),t.$store.commit("coupon/SET_COUPON_DISCOUNT",null),setTimeout((function(){t.$store.dispatch("cart/clearCart",t.session_id)}),8e3),t.isCod&&t.directChekout(e.data.results),t.$router.push({name:"UserInvoice",params:{order_ref:e.data.results.order_ref}}),t.sendMessageNotification(e.data.results.order_ref))})).catch((function(){t.ready=!1,t.$store.commit("SET_LOADING",!1)}))},sendMessageNotification:function(t){var e=this;setTimeout((function(){Object(o["a"])().post("sendNotify",{url:e.getRoutePath(t),order_ref:t})}),12e3)},formatAddressCod:function(t){var e=t.split("<br>");return e.join("\n")},directChekout:function(t){var e=this,s="https://api.whatsapp.com",n=this.formatPhoneNumber(this.shop.phone),a="Halo kak, saya mau order:\n\n",i=t.items,r=1;i.forEach((function(t){a+="*".concat(r,". ").concat(t.name,"*\n"),t.note&&(a+="[".concat(t.note,"]\n")),a+="Jumlah: ".concat(t.quantity,"\nHarga (@): ").concat(e.moneyIDR(t.price),"\nHarga Total: ").concat(e.moneyIDR(t.quantity*t.price),"\n\n"),r++})),a+="Subtotal: *".concat(this.moneyIDR(t.order_subtotal),"*\nOngkir: *").concat(this.moneyIDR(t.shipping_cost),"*\nDiskon: *").concat(this.moneyIDR(t.discount),"*\nTotal: *").concat(this.moneyIDR(t.order_total),"*\n------------------------\n\n*Nama:*\n ").concat(t.customer_name," (").concat(t.customer_whatsapp,")\n\n*Alamat:*\n").concat(this.formatAddressCod(t.shipping_address),"\n\n"),a+="Metode Pembayaran: ".concat(t.transaction.payment_name,"\n\n"),a+="Referensi Order:\n".concat(this.getRoutePath(t.order_ref));var o=s+"/send?phone="+n+"&text="+encodeURI(a);window.open(o,"_blank")},formatPhoneNumber:function(t){var e=t.replace(/\D/g,"");return e.startsWith("0")&&(e="62"+e.substr(1)),e},getRoutePath:function(t){var e=this.$router.resolve({name:"UserInvoice",params:{order_ref:t}});return location.origin+e.href},getDiscountPercent:function(){return this.coupon_discount?"percent"==this.coupon_discount.discount.unit?parseInt(this.coupon_discount.discount.value):parseInt(this.coupon_discount.discount.value)/parseInt(this.carts.subtotal)*100:0},getDiscountAmount:function(){return this.coupon_discount?"percent"==this.coupon_discount.discount.unit?parseInt(this.coupon_discount.discount.value)/100*parseInt(this.carts.subtotal):parseInt(this.coupon_discount.discount.value):0},sumTotal:function(){return this.coupon_discount?this.carts.subtotal-this.getDiscountAmount()+parseInt(this.form.shipping_cost)+parseInt(this.form.payment_fee):this.carts.subtotal+parseInt(this.form.shipping_cost)+parseInt(this.form.payment_fee)},getLocalBanks:function(){var t=this;Object(o["a"])().get("banks").then((function(e){200==e.status&&(t.paymentChanels.localbanks=e.data.results)}))},getPaymentChanel:function(){var t=this;Object(o["a"])().get("tripay/payment-chanel").then((function(e){200==e.status&&(t.paymentChanels.paymentGateway=e.data.data)}))},next:function(){this.isCod?this.step=3:this.step+=1},prev:function(){this.isCod?this.step=1:this.step-=1}}),meta:function(){return{title:"Checkout"}}},A=I,P=s("9989"),R=s("e359"),T=s("65c6"),$=s("9c40"),E=s("6ac5"),B=s("f531"),j=s("87fe"),N=s("74f7"),F=s("e669"),L=Object(h["a"])(A,n,a,!1,null,null,null);e["default"]=L.exports;x()(L,"components",{QPage:P["a"],QHeader:R["a"],QToolbar:T["a"],QBtn:$["a"],QToolbarTitle:E["a"],QStepper:B["a"],QStep:j["a"],QInnerLoading:N["a"],QSpinnerFacebook:F["a"]})}}]);
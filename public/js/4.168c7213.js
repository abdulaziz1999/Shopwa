(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"01d1":function(t,a,e){},3092:function(t,a,e){"use strict";e("01d1")},c3d1:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pb-lg bg-grey-2"},[e("q-header",{staticClass:"text-primary bg-white"},[e("q-toolbar",[e("q-btn",{attrs:{to:{name:"CustomerOrder"},flat:"",round:"",dense:"",icon:"arrow_back"}}),t.invoice?e("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v("Invoice "+t._s(t.invoice.order_ref))]):t._e()],1)],1),t.invoice?e("div",[e("div",{staticClass:"q-pt-md q-gutter-y-md"},[e("div",{staticClass:"q-mt-md q-pb-lg bg-white q-pa-md"},[e("div",{staticClass:"flex justify-between text-grey-8"},[e("div",{staticClass:"q-mb-sm"},[e("div",{staticClass:"text-weight-bold q-mb-xs"},[t._v(t._s(t.shop.name))]),e("div",{},[t._v(t._s(t.shop.phone))]),e("div",{staticClass:"text-weight-thin",domProps:{innerHTML:t._s(t.shop.address)}})]),e("div",[e("table",[e("tr",[e("td",[t._v("Invoice")]),e("td",[t._v(": "+t._s(t.invoice.order_ref))])]),e("tr",[e("td",[t._v("Referensi")]),e("td",[t._v(": "+t._s(t.invoice.transaction.payment_ref))])]),e("tr",[e("td",[t._v("Dibuat")]),e("td",[t._v(": "+t._s(t.invoice.created_at))])]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"full-width q-px-md q-py-xs text-white text-center",class:t.isPaid?"bg-green-7":"bg-grey-7"},[t._v("\n                    "+t._s(t.isPaid?"DIBAYAR":"BELUM BAYAR")+"\n                  ")])])])])])]),e("div",{staticClass:"q-mt-lg text-grey-8"},[t.invoice.items?e("table",{staticClass:"table-order-item"},[e("tr",[e("th",{attrs:{align:"left"}},[t._v("Item")]),e("th",{attrs:{align:"left"}},[t._v("qty")]),e("th",{attrs:{align:"right"}},[t._v("Harga")])]),t._l(t.invoice.items,(function(a,i){return e("tr",{key:i},[e("td",{},[e("div",[t._v(t._s(a.name))]),e("div",{staticClass:"text-caption tet-grey-6"},[t._v(t._s(a.note))])]),e("td",[t._v(t._s(a.quantity))]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(a.price)))])])}))],2):t._e(),e("div",{staticClass:"column justify-end bg-grey-1 items-end q-pa-sm"},[e("table",{staticClass:"dense"},[e("tr",[e("td",{attrs:{align:"right"}},[t._v("SubTotal")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_subtotal)))])]),e("tr",[e("td",{attrs:{align:"right"}},[t._v("Ongkos Kirim")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.shipping_cost)))])]),e("tr",[e("td",{attrs:{align:"right"}},[t._v("Kode Unik")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v("- "+t._s(t.invoice.order_unique_code?t.invoice.order_unique_code:"-"))])]),e("tr",[e("th",{attrs:{align:"right"}},[t._v("Total")]),e("td",[t._v(":")]),e("th",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_total)))])])])])])]),e("q-card",{staticClass:"shadow",attrs:{flat:"",square:""}},[e("div",{staticClass:"card-heading"},[t._v("Customer")]),e("q-card-section",[e("div",{staticClass:"text-grey-9"},[e("table",{staticClass:"dense"},[e("tr",[e("td",[t._v("Nama")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.customer_name))])]),e("tr",[e("td",[t._v("Whatsapp")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.customer_whatsapp))])]),e("tr",[e("td",{staticStyle:{"vertical-align":"top"}},[t._v("Alamat")]),e("td",{staticStyle:{"vertical-align":"top"}},[t._v(":")]),e("td",[e("div",{domProps:{innerHTML:t._s(t.invoice.shipping_address)}})])])])])])],1),e("q-card",{staticClass:"bg-white shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading"},[t._v("Ekspedisi")]),e("q-card-section",[e("div",{staticClass:"text-grey-9"},[e("table",{staticClass:"dense"},[e("tr",[e("td",[t._v("Kurir")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_name))])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_service?t.invoice.shipping_courier_service:"-"))])]),e("tr",[e("td",[t._v("No Resi")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_code?t.invoice.shipping_courier_code:"-"))])])])])])],1),e("q-card",{staticClass:"bg-white shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading border-b"},[t._v("Pembayaran")]),e("q-card-section",[e("table",{staticClass:"dense"},[e("tr",[e("td",[t._v("Metode")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.transaction.payment_method.split("_").join(" ")))])]),e("tr",[e("td",{staticStyle:{"vertical-align":"top"}},[t._v("Detil")]),e("td",{staticStyle:{"vertical-align":"top"}},[t._v(":")]),e("td",[e("div",{domProps:{innerHTML:t._s(t.invoice.transaction.payment_name)}})])]),e("tr",[e("td",[t._v("Referensi")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.transaction.payment_ref))])])])])],1)],1),e("q-dialog",{attrs:{persistent:"",maximized:"",seamless:"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.modalPayment,callback:function(a){t.modalPayment=a},expression:"modalPayment"}},[e("q-card",{staticClass:"max-width bg-grey-2",attrs:{flat:"",square:""}},[e("q-toolbar",{staticClass:"bg-white sticky-top border-b"},[e("q-toolbar-title",[e("span",{staticClass:"text-weight-bold card-heading"},[t._v("Pembayaran")])]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),e("keep-alive",[e(t.isPaymentType,{tag:"component",attrs:{transaction:t.invoice.transaction},on:{kirimBukti:t.kirimBuktiTransfer}})],1)],1)],1),t.isPaid?t._e():e("q-footer",{staticClass:"bg-grey-2 q-pa-md"},[e("div",{staticClass:"text-center text-grey-7 column q-gutter-y-sm"},[t.invoice&&"COD"!=t.invoice.transaction.payment_method?e("q-btn",{attrs:{label:"Instruksi Pembayaran","no-caps":"",icon:"payments",color:"green-7"},on:{click:function(a){return a.preventDefault(),t.handlePaymentModal(a)}}}):t._e(),e("q-btn",{ref:"chatAdmin",attrs:{label:"Chat admin",icon:"chat","no-caps":"",color:"blue-7"},on:{click:t.chatToAdmin}})],1)])],1):t._e(),e("q-inner-loading",{attrs:{showing:t.loading}},[e("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1)],1)},s=[],n=e("9523"),r=e.n(n),o=e("ded3"),c=e.n(o),d=(e("99af"),e("b0c0"),e("ac1f"),e("5319"),e("2ca0"),e("cdde")),l=e("2f62"),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-grey-9"},[t.transaction?e("div",{staticClass:"q-gutter-y-lg"},[e("q-card",{staticClass:"shadow",attrs:{square:""}},[e("div",{staticClass:"q-py-md"},[e("q-list",[e("q-item",{staticClass:"text-weight-bold",attrs:{dense:""}},[e("q-item-section",[e("div",[t._v("Total Tagihan")])]),e("q-item-section",{attrs:{side:""}},[e("div",{staticClass:"text-md"},[t._v(t._s(t.moneyIDR(t.transaction.amount)))])])],1)],1)],1)]),e("q-card",{staticClass:"shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading"},[t._v("Metode Pembayaran")]),e("q-card-section",[e("div",{},[e("div",[e("div",{staticClass:"text-md text-weight-bold text-primary"},[t._v(t._s(t.transaction.payment_name))]),e("div",{staticClass:"text-grey-7 text-sm q-mt-sm"},[t._v("\n          Lakukan pembayaran sebelum melewati batas pembayaran serta pastikan nominal pembayaran sesuai dengan tagihan. Pembayaran akan di "),e("b",[t._v("verifikasi otomatis oleh sistem.")])])])])])],1),e("q-card",{staticClass:"shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading"},[t._v("Informasi Pembayaran")]),e("q-card-section",[e("div",{staticClass:"q-gutter-y-sm"},[t.isOVO?t._e():[t.transaction.qr_url?e("div",{staticClass:"column justify-center items-center q-gutter-y-sm"},[e("div",[t._v("QR CODE "+t._s(t.transaction.payment_name))]),e("img",{staticStyle:{width:"120px",height:"auto"},attrs:{src:t.transaction.qr_url}}),e("div",[e("q-btn",{attrs:{unelevated:"",color:"primary",size:"12px","text-color":"white",label:"Perbesar"},on:{click:function(a){t.viewQrModal=!0}}})],1)]):t._e(),t.transaction.payment_code?e("div",[e("div",[t._v("Kode Bayar")]),e("div",{staticClass:"row justify-between"},[e("div",{staticClass:"text-lg text-weight-bold text-primary"},[t._v(t._s(t.transaction.payment_code))]),e("div",[e("q-btn",{attrs:{unelevated:"",color:"primary",size:"12px","text-color":"white",label:"Salin Nomor"},on:{click:t.copy}})],1)])]):t._e()],t.isOVO?[e("div",{staticClass:"text-lg text-weight-bold text-primary"},[t._v(t._s(t.transaction.payment_name))]),e("div",{staticClass:"text-grey-7"},[t._v("( Lihat panduan pembayaran )")])]:t._e()],2),e("div",{staticClass:" q-gutter-y-xs q-mt-lg"},[e("div",[t._v("Batas Pembayaran")]),e("div",{staticClass:"text-weight-medium"},[t._v(t._s(t.formatCountDown(t.transaction.expired_time)))])])])],1),t.transaction?e("div",{staticClass:"bg-white"},[e("div",{staticClass:"card-heading"},[t._v("Panduan Pembayaran")]),e("q-list",{staticClass:"text-grey-9",attrs:{bordered:""}},[t._l(t.instructions,(function(a,i){return[e("q-expansion-item",{key:i,attrs:{group:"somegroup",label:a.title,"default-opened":0==i,"header-class":"bg-grey-7 text-white","expand-icon-class":"text-white"}},[e("q-card",{staticClass:"q-py-md q-pb-xl"},[e("q-list",{attrs:{bordered:""}},t._l(a.steps,(function(a,i){return e("q-item",{key:a},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{color:"grey-7","text-color":"white",size:"sm"}},[t._v("\n                      "+t._s(i+1)+"\n                    ")])],1),e("q-item-section",[e("q-item-label",{domProps:{innerHTML:t._s(a)}})],1)],1)})),1)],1)],1)]}))],2)],1):t._e()],1):t._e(),e("q-dialog",{attrs:{persistent:"",maximized:""},model:{value:t.viewQrModal,callback:function(a){t.viewQrModal=a},expression:"viewQrModal"}},[e("q-card",{staticClass:"max-width",attrs:{flat:""}},[e("div",{staticClass:"row justify-between items-center box-shadow q-pa-md"},[e("div",{staticClass:"text-weight-medium text-md"},[t._v("Scan atau download Qr Code")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:""}})],1),e("q-card-section",{staticClass:"flex justify-center items-center q-pt-lg"},[e("img",{staticStyle:{"max-width":"380px",width:"100%",height:"auto"},attrs:{src:t.transaction.qr_url}})])],1)],1)],1)},v=[],u={name:"PaymentGateway",props:["transaction"],data:function(){return{viewQrModal:!1}},computed:{isOVO:function(){return"OVO"==this.transaction.payment_method},isQRIS:function(){return"QRIS"==this.transaction.payment_method},instructions:function(){var t=JSON.parse(this.transaction.instructions);return this.isOVO&&(t[0].steps=["Periksa <b>aplikasi OVO</b> di Ponsel Anda","Akan muncul prompt transaksi. Pastikan data transaksi sudah sesuai","Klik tombol <b>Bayar</b>","Transaksi selesai. Simpan bukti pembayaran Anda"]),t}},methods:{copy:function(){var t=this;Object(d["a"])(this.transaction.payment_code).then((function(){t.$q.notify({type:"positive",message:"Berhasil menyalin kode bayar"})})).catch((function(){}))},formatCountDown:function(t){var a=new Date(1e3*t);return new Intl.DateTimeFormat("id-ID",{dateStyle:"full",timeStyle:"long"}).format(a)},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}},p=u,_=e("2877"),h=e("f09f"),y=e("1c1c"),g=e("66e5"),b=e("4074"),f=e("a370"),q=e("9c40"),C=e("3b73"),x=e("cb32"),w=e("0170"),k=e("24e8"),I=e("7f67"),P=e("eebe"),D=e.n(P),Q=Object(_["a"])(p,m,v,!1,null,null,null),O=Q.exports;D()(Q,"components",{QCard:h["a"],QList:y["a"],QItem:g["a"],QItemSection:b["a"],QCardSection:f["a"],QBtn:q["a"],QExpansionItem:C["a"],QAvatar:x["a"],QItemLabel:w["a"],QDialog:k["a"]}),D()(Q,"directives",{ClosePopup:I["a"]});var T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-grey-9"},[t.transaction?e("div",{staticClass:"q-gutter-y-lg"},[e("q-card",{staticClass:"shadow",attrs:{square:""}},[e("div",{staticClass:"q-py-md"},[e("q-list",[e("q-item",{staticClass:"text-weight-bold",attrs:{dense:""}},[e("q-item-section",[e("div",[t._v("Total Tagihan")])]),e("q-item-section",{attrs:{side:""}},[e("div",{staticClass:"text-md"},[t._v(t._s(t.moneyIDR(t.transaction.amount)))])])],1)],1)],1)]),e("q-card",{staticClass:"shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading"},[t._v("Metode Pembayaran")]),e("q-card-section",[e("div",{},[e("div",[e("div",{staticClass:"text-md text-weight-bold text-primary"},[t._v(t._s(t.transaction.payment_method.split("_").join(" ")))]),e("div",{staticClass:"text-grey-7 q-mt-sm"},[t._v("\n              Lakukan pembayaran sebelum melewati batas pembayaran serta pastikan nominal pembayaran sesuai dengan tagihan. Konfirmasi pembayaran dengan megirim bukti transfer setelah melakukan pembayaran.\n          ")])])])])],1),e("q-card",{staticClass:"shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading"},[t._v("Informasi Pembayaran")]),e("q-card-section",[e("div",{staticClass:"q-gutter-y-sm"},[e("div",[t._v("No. Rekening")]),e("div",{staticClass:"row justify-between items-center"},[e("div",{staticClass:"text-lg text-weight-bold text-primary"},[t._v(t._s(t.transaction.payment_code))]),e("div",[e("q-btn",{attrs:{unelevated:"",color:"primary",size:"12px","text-color":"white",label:"Salin No Rekening"},on:{click:t.copy}})],1)]),e("div",{staticClass:"text-sm text-grey-7",domProps:{innerHTML:t._s(t.transaction.payment_name)}})]),e("div",{staticClass:"q-gutter-y-xs q-mt-lg"},[e("div",[t._v("Batas Pembayaran")]),e("div",{staticClass:"text-weight-medium text-xs"},[t._v(t._s(t.expiredFormatDate))])])])],1),e("div",{staticClass:"bg-white"},[e("div",{staticClass:"card-heading"},[t._v("Panduan Pembayaran")]),e("q-list",{staticClass:"text-grey-9",attrs:{bordered:""}},[[e("q-expansion-item",{attrs:{group:"somegroup",label:"Bank Transfer","default-opened":"","header-class":"bg-grey-7 text-white","expand-icon-class":"text-white"}},[e("q-card",{staticClass:"q-py-md q-pb-xl"},[e("q-list",{attrs:{bordered:""}},t._l(t.instructions,(function(a,i){return e("q-item",{key:a},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{color:"grey-7","text-color":"white",size:"sm"}},[t._v("\n                      "+t._s(i+1)+"\n                    ")])],1),e("q-item-section",[e("q-item-label",{domProps:{innerHTML:t._s(a)}})],1)],1)})),1)],1)],1)]],2),e("div",{staticClass:"sticky-bottom"},[e("q-btn",{staticClass:"full-width",staticStyle:{"border-radius":"none"},attrs:{unelevated:"",label:"Kirim Bukti Transfer via Whatsapp",color:"primary","text-color":"white"},on:{click:function(a){return a.preventDefault(),t.kirimBuktiTransfer(a)}}})],1)],1)],1):t._e()])},S=[],R={name:"DirectPayment",props:["transaction"],data:function(){return{modal:!1,preview:"",fileData:""}},computed:{instructions:function(){var t=["Lakukan transfer ke nomor rekening <b>".concat(this.transaction.payment_code,".</b>"),"Transfer dengan total pembayaran  <b>".concat(this.priceFormated,"</b><br> <small>( jangan dibulatkan )</small> "),"Simpan dan <b>kirim bukti pembayaran.</b>","Kirim bukti transfer sebelum <b>".concat(this.expiredFormatDate," </b> agar pesananmu segera diproses.")];return t},priceFormated:function(){return this.moneyIDR(this.transaction.amount)},expiredFormatDate:function(){var t=new Date(1e3*this.transaction.expired_time);return new Intl.DateTimeFormat("id-ID",{dateStyle:"full",timeStyle:"long"}).format(t)}},methods:{copy:function(){var t=this;Object(d["a"])(this.transaction.payment_code).then((function(){t.$q.notify({type:"positive",message:"Berhasil menyalin nomor rekening"})})).catch((function(){}))},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)},kirimBuktiTransfer:function(){this.$emit("kirimBukti")}}},B=R,j=Object(_["a"])(B,T,S,!1,null,null,null),L=j.exports;D()(j,"components",{QCard:h["a"],QList:y["a"],QItem:g["a"],QItemSection:b["a"],QCardSection:f["a"],QBtn:q["a"],QExpansionItem:C["a"],QAvatar:x["a"],QItemLabel:w["a"]});var M={name:"InvoiceIndex",components:{PaymentGateway:O,DirectPayment:L},data:function(){return{modalPayment:!1,throtle:1}},computed:c()(c()({},Object(l["e"])(r()({loading:function(t){return t.loading},shop:function(t){return t.shop},invoice:function(t){return t.order.invoice}},"invoice",(function(t){return t.order.invoice})))),{},{isPaid:function(){return"PAID"==this.invoice.transaction.status},isPaymentType:function(){return"DIRECT"==this.invoice.transaction.payment_type?"DirectPayment":"PaymentGateway"}}),created:function(){this.invoice?this.invoice.order_ref!=this.$route.params.order_ref?this.getOrder():this.ready=!0:this.getOrder()},methods:c()(c()({},Object(l["b"])("order",["getOrderById"])),{},{getOrder:function(){var t=this,a=this;a.$store.commit("SET_LOADING",!0),this.$route.params.order_ref?this.getOrderById(this.$route.params.order_ref).then((function(t){200==t.status&&a.$store.commit("order/SET_INVOICE",t.data.results),a.$store.commit("SET_LOADING",!1)})).catch((function(){t.$router.push({name:"Cart"})})):this.$router.push({name:"Cart"})},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)},chatToAdmin:function(){var t="Halo ".concat(this.shop.name,",\nMohon pesanan saya untuk segera di proses.\nTerima Kasih.\n\nReferensi Order:\n").concat(location.href),a="https://api.whatsapp.com/send?phone=".concat(this.formatPhoneNumber(this.shop.phone),"&text=").concat(encodeURI(t));window.open(a,"_blank")},kirimBuktiTransfer:function(){this.modalPayment=!1;var t="Halo kak, saya akan mengkonfirmasi pembayaran atas pesanan\nInvoice ID: *".concat(this.invoice.order_ref,"*\nReferensi Order:\n").concat(location.href,"\n"),a="https://api.whatsapp.com/send?phone=".concat(this.formatPhoneNumber(this.shop.phone),"&text=").concat(encodeURI(t));window.open(a,"_blank")},formatPhoneNumber:function(t){var a=t.replace(/\D/g,"");return a.startsWith("0")&&(a="62"+a.substr(1)),a},copy:function(t){var a=this;Object(d["a"])(t).then((function(){a.$q.notify({type:"positive",message:"Berhasil menyalin nomor rekening"})})).catch((function(){a.$q.notify({type:"negative",message:"Browser anda tidak support copy to clipboard"})}))},handlePaymentModal:function(){this.modalPayment=!0}})},N=M,A=(e("3092"),e("9989")),$=e("e359"),E=e("65c6"),F=e("6ac5"),H=e("7ff0"),K=e("74f7"),z=e("e669"),V=Object(_["a"])(N,i,s,!1,null,null,null);a["default"]=V.exports;D()(V,"components",{QPage:A["a"],QHeader:$["a"],QToolbar:E["a"],QBtn:q["a"],QToolbarTitle:F["a"],QCard:h["a"],QCardSection:f["a"],QDialog:k["a"],QFooter:H["a"],QInnerLoading:K["a"],QSpinnerFacebook:z["a"]}),D()(V,"directives",{ClosePopup:I["a"]})}}]);
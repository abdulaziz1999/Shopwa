(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0cb5":function(t,e,i){"use strict";i("5173")},"3dc5":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"q-pb-lg bg-grey-2"},[i("q-header",{staticClass:"text-primary bg-white"},[i("q-toolbar",[i("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),t.invoice?i("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v("Invoice "+t._s(t.invoice.order_ref))]):t._e()],1)],1),t.invoice?i("div",[i("div",{staticClass:"q-pt-md q-gutter-y-md"},[i("div",{staticClass:"q-mt-md q-pb-lg bg-white q-pa-md"},[i("div",{staticClass:"flex justify-between text-grey-8"},[i("div",{staticClass:"q-mb-sm"},[i("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.shop.name))]),i("div",{staticClass:"text-weight-regular"},[t._v("Phone: "+t._s(t.shop.phone))]),i("div",{staticClass:"text-weight-regular",domProps:{innerHTML:t._s(t.shop.address)}})]),i("div",[i("table",[i("tr",[i("td",[t._v("Invoice")]),i("td",[t._v(": "+t._s(t.invoice.order_ref))])]),i("tr",[i("td",[t._v("Referensi")]),i("td",[t._v(": "+t._s(t.invoice.transaction.payment_ref))])]),i("tr",[i("td",[t._v("Dibuat")]),i("td",[t._v(": "+t._s(t.invoice.created_at))])]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("div",{staticClass:"full-width q-px-md q-py-xs text-white text-center",class:t.statusColor(t.invoice.order_status)},[t._v("\n                    "+t._s(t.invoice.status_label)+"\n                  ")])])])])])]),i("div",{staticClass:"q-mt-lg text-grey-8"},[t.invoice.items?i("table",{staticClass:"table-order-item"},[i("tr",[i("th",{attrs:{align:"left"}},[t._v("Item")]),i("th",{attrs:{align:"left"}},[t._v("qty")]),i("th",{attrs:{align:"right"}},[t._v("Harga")])]),t._l(t.invoice.items,(function(e,a){return i("tr",{key:a},[i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.quantity))]),i("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(e.price)))])])}))],2):t._e(),i("div",{staticClass:"column justify-end items-end q-py-sm"},[i("table",{staticClass:"dense"},[i("tr",[i("td",{attrs:{align:"right"}},[t._v("SubTotal")]),i("td",[t._v(":")]),i("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_subtotal)))])]),i("tr",[i("td",{attrs:{align:"right"}},[t._v("Ongkos Kirim")]),i("td",[t._v(":")]),i("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.shipping_cost)))])]),t.invoice.order_unique_code?i("tr",[i("td",{attrs:{align:"right"}},[t._v("Kode Unik")]),i("td",[t._v(":")]),i("td",{attrs:{align:"right"}},[t._v("- "+t._s(t.invoice.order_unique_code))])]):t._e(),i("tr",[i("td",{attrs:{align:"right"}},[t._v("Total")]),i("td",[t._v(":")]),i("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_subtotal+t.invoice.shipping_cost)))])])])]),i("div",{staticClass:"flex justify-end q-py-sm bg-grey-1"},[i("table",{staticClass:"table dense"},[t.invoice.discount?i("tr",[i("td",{attrs:{align:"right"}},[t._v("Diskon [-]")]),i("td",{attrs:{align:"right"}},[t._v(":")]),i("td",{attrs:{align:"right"}},[t._v(t._s(t.invoice.discount?t.moneyIDR(t.invoice.discount):0))])]):t._e(),i("tr",[i("th",{attrs:{align:"right"}},[t._v("Grand Total")]),i("td",{attrs:{align:"right"}},[t._v(":")]),i("th",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_total)))])])])])])]),i("q-card",{staticClass:"shadow",attrs:{flat:"",square:""}},[i("div",{staticClass:"card-heading"},[t._v("Informasi Penerima")]),i("q-card-section",[i("div",{staticClass:"text-grey-9"},[i("table",{staticClass:"dense"},[i("tr",[i("td",[t._v("Nama")]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.invoice.customer_name))])]),i("tr",[i("td",[t._v("Whatsapp")]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.invoice.customer_whatsapp))])]),i("tr",[i("td",{staticStyle:{"vertical-align":"top"}},[t._v("Alamat")]),i("td",{staticStyle:{"vertical-align":"top"}},[t._v(":")]),i("td",[i("div",{domProps:{innerHTML:t._s(t.invoice.shipping_address)}})])])])])])],1),i("q-card",{staticClass:"bg-white shadow",attrs:{square:""}},[i("div",{staticClass:"card-heading"},[t._v("Informasi Ekspedisi")]),i("q-card-section",[i("div",{staticClass:"text-grey-9"},[i("table",{staticClass:"dense"},[i("tr",[i("td",[t._v("Kurir")]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.invoice.shipping_courier_name))])]),i("tr",[i("td",[t._v("Service")]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.invoice.shipping_courier_service?t.invoice.shipping_courier_service:"-"))])]),i("tr",[i("td",[t._v("No Resi")]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.invoice.shipping_courier_code?t.invoice.shipping_courier_code:"-"))])])])])])],1),i("q-card",{staticClass:"bg-white shadow",attrs:{square:""}},[i("div",{staticClass:"card-heading border-b"},[t._v("Informasi Pembayaran")]),i("q-card-section",[i("table",{staticClass:"dense"},[i("tr",[i("td",[t._v("Metode")]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.invoice.transaction.payment_method.split("_").join(" ")))])]),i("tr",[i("td",{staticStyle:{"vertical-align":"top"}},[t._v("Detil")]),i("td",{staticStyle:{"vertical-align":"top"}},[t._v(":")]),i("td",[i("div",{domProps:{innerHTML:t._s(t.invoice.transaction.payment_name)}})])]),i("tr",[i("td",[t._v("Referensi")]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.invoice.transaction.payment_ref))])])])])],1)],1)]):t._e(),i("q-inner-loading",{attrs:{showing:t.loading}},[i("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],s=i("ded3"),r=i.n(s),o=(i("99af"),i("b0c0"),i("ac1f"),i("5319"),i("2ca0"),i("cdde")),c=i("2f62"),d={name:"InvoiceIndex",data:function(){return{modalPayment:!1,throtle:1}},computed:r()(r()({},Object(c["e"])({loading:function(t){return t.loading},shop:function(t){return t.shop},invoice:function(t){return t.order.invoice}})),{},{isPaid:function(){return"PAID"==this.invoice.transaction.status},isPaymentType:function(){return"DIRECT"==this.invoice.transaction.payment_type?"DirectPayment":"PaymentGateway"}}),created:function(){this.getOrder()},methods:r()(r()({},Object(c["b"])("order",["getOrderById"])),{},{statusColor:function(t){return"UNPAID"==t?"bg-grey-7":"CANCELED"==t?"bg-red-6":"COMPLETE"==t?"bg-green-6":"bg-blue-7"},getOrder:function(){var t=this,e=this;e.$store.commit("SET_LOADING",!0),this.$route.params.order_ref?this.getOrderById(this.$route.params.order_ref).then((function(t){200==t.status&&e.$store.commit("order/SET_INVOICE",t.data.results),e.$store.commit("SET_LOADING",!1)})).catch((function(){t.$router.push({name:"Cart"})})):this.$router.push({name:"Cart"})},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)},chatToAdmin:function(){var t="Halo ".concat(this.shop.name,",\nMohon pesanan saya untuk segera di proses.\nTerima Kasih.\n\nReferensi Order:\n").concat(location.href),e="https://api.whatsapp.com/send?phone=".concat(this.formatPhoneNumber(this.shop.phone),"&text=").concat(encodeURI(t));window.open(e,"_blank")},kirimBuktiTransfer:function(){this.modalPayment=!1;var t="Halo ".concat(this.shop.name,",\nKonfirmasi pembayaran atas pesanan:\n*INVOICE ").concat(this.invoice.order_ref,"*\n\nReferensi Order:\n").concat(location.href,"\n\nBerikut saya sertakan bukti transfer."),e="https://api.whatsapp.com/send?phone=".concat(this.formatPhoneNumber(this.shop.phone),"&text=").concat(encodeURI(t));window.open(e,"_blank")},formatPhoneNumber:function(t){var e=t.replace(/\D/g,"");return e.startsWith("0")&&(e="62"+e.substr(1)),e},copy:function(t){var e=this;Object(o["a"])(t).then((function(){e.$q.notify({type:"positive",message:"Berhasil menyalin nomor rekening"})})).catch((function(){e.$q.notify({type:"negative",message:"Browser anda tidak support copy to clipboard"})}))},handlePaymentModal:function(){this.modalPayment=!0}})},l=d,v=(i("0cb5"),i("2877")),_=i("9989"),h=i("e359"),u=i("65c6"),g=i("9c40"),p=i("6ac5"),m=i("f09f"),f=i("a370"),b=i("74f7"),y=i("e669"),C=i("2eeb"),q=i("eebe"),w=i.n(q),I=Object(v["a"])(l,a,n,!1,null,null,null);e["default"]=I.exports;w()(I,"components",{QPage:_["a"],QHeader:h["a"],QToolbar:u["a"],QBtn:g["a"],QToolbarTitle:p["a"],QCard:m["a"],QCardSection:f["a"],QInnerLoading:b["a"],QSpinnerFacebook:y["a"]}),w()(I,"directives",{GoBack:C["a"]})},5173:function(t,e,i){}}]);
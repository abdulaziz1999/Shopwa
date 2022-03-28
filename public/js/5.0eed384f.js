(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0cb5":function(t,i,e){"use strict";e("5173")},"3dc5":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"q-pb-lg bg-grey-2"},[e("q-header",{staticClass:"text-primary bg-white no-print"},[e("q-toolbar",[e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),t.invoice?e("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v("Invoice "+t._s(t.invoice.order_ref))]):t._e(),e("q-btn-dropdown",{attrs:{flat:"",icon:"print",color:"teal"}},[e("q-list",{staticClass:"no-print",attrs:{flat:""}},[e("q-item",{attrs:{clickable:""},on:{click:t.printPacking}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"print"}})],1),e("q-item-section",[t._v("Print Label Pengiriman")])],1),e("q-item",{attrs:{clickable:""},on:{click:t.printInvoice}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"print"}})],1),e("q-item-section",[t._v("Print Tagihan")])],1)],1)],1)],1)],1),t.invoice?e("div",{staticClass:"no-print"},[e("div",{staticClass:"q-pt-md q-gutter-y-md"},[e("div",{staticClass:"q-mt-md q-pb-lg bg-white q-pa-md"},[e("div",{staticClass:"flex justify-between text-grey-8"},[e("div",{staticClass:"q-mb-sm"},[e("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.shop.name))]),e("div",{staticClass:"text-weight-regular"},[t._v("Phone: "+t._s(t.shop.phone))]),e("div",{staticClass:"text-weight-regular",domProps:{innerHTML:t._s(t.shop.address)}})]),e("div",[e("table",[e("tr",[e("td",[t._v("Invoice")]),e("td",[t._v(": "+t._s(t.invoice.order_ref))])]),e("tr",[e("td",[t._v("Referensi")]),e("td",[t._v(": "+t._s(t.invoice.transaction.payment_ref))])]),e("tr",[e("td",[t._v("Dibuat")]),e("td",[t._v(": "+t._s(t.invoice.created_at))])]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"full-width q-px-md q-py-xs text-white text-center",class:t.statusColor(t.invoice.order_status)},[t._v("\n                    "+t._s(t.invoice.status_label)+"\n                  ")])])])])])]),e("div",{staticClass:"q-mt-lg text-grey-8"},[t.invoice.items?e("table",{staticClass:"table-order-item"},[e("tr",[e("th",{attrs:{align:"left"}},[t._v("Item")]),e("th",{attrs:{align:"left"}},[t._v("qty")]),e("th",{attrs:{align:"right"}},[t._v("Harga")])]),t._l(t.invoice.items,(function(i,a){return e("tr",{key:a},[e("td",{},[e("div",[t._v(t._s(i.name))]),e("div",{staticClass:"text-caption tet-grey-6"},[t._v(t._s(i.note))])]),e("td",[t._v(t._s(i.quantity))]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(i.price)))])])}))],2):t._e(),e("div",{staticClass:"column justify-end items-end q-py-sm"},[e("table",{staticClass:"dense"},[e("tr",[e("td",{attrs:{align:"right"}},[t._v("SubTotal")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_subtotal)))])]),e("tr",[e("td",{attrs:{align:"right"}},[t._v("Ongkos Kirim")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.shipping_cost)))])]),t.invoice.payment_fee>0?e("tr",[e("td",{attrs:{align:"right"}},[t._v("Payment Fee")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.payment_fee)))])]):t._e(),t.invoice.order_unique_code?e("tr",[e("td",{attrs:{align:"right"}},[t._v("Kode Unik ( - )")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.invoice.order_unique_code))])]):t._e(),e("tr",[e("td",{attrs:{align:"right"}},[t._v("Total Order")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_subtotal+t.invoice.shipping_cost+t.invoice.payment_fee)))])])])]),e("div",{staticClass:"flex justify-end q-py-sm bg-grey-1"},[e("table",{staticClass:"table dense"},[t.invoice.discount?e("tr",[e("td",{attrs:{align:"right"}},[t._v("Diskon ( - )")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.invoice.discount?t.moneyIDR(t.invoice.discount):0))])]):t._e(),e("tr",[e("th",{attrs:{align:"right"}},[t._v("Total Tagihan")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("th",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_total)))])])])])])]),e("q-card",{staticClass:" shadow",attrs:{flat:"",square:""}},[e("div",{staticClass:"card-heading"},[t._v("Informasi Penerima")]),e("q-card-section",[e("div",{staticClass:"text-grey-9"},[e("table",{staticClass:"dense"},[e("tr",[e("td",[t._v("Nama")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.customer_name))])]),e("tr",[e("td",[t._v("Whatsapp")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.customer_whatsapp))])]),e("tr",[e("td",{staticStyle:{"vertical-align":"top"}},[t._v("Alamat")]),e("td",{staticStyle:{"vertical-align":"top"}},[t._v(":")]),e("td",[e("div",{domProps:{innerHTML:t._s(t.invoice.shipping_address)}})])])])])])],1),e("q-card",{staticClass:" bg-white shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading"},[t._v("Informasi Ekspedisi")]),e("q-card-section",[e("div",{staticClass:"text-grey-9"},[e("table",{staticClass:"dense"},[e("tr",[e("td",[t._v("Kurir")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_name))])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_service?t.invoice.shipping_courier_service:"-"))])]),e("tr",[e("td",[t._v("No Resi")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_code?t.invoice.shipping_courier_code:"-"))])])])])])],1),e("q-card",{staticClass:" bg-white shadow",attrs:{square:""}},[e("div",{staticClass:"card-heading border-b"},[t._v("Informasi Pembayaran")]),e("q-card-section",[e("table",{staticClass:"dense"},[e("tr",[e("td",[t._v("Metode")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.transaction.payment_method.split("_").join(" ")))])]),e("tr",[e("td",{staticStyle:{"vertical-align":"top"}},[t._v("Detil")]),e("td",{staticStyle:{"vertical-align":"top"}},[t._v(":")]),e("td",[e("div",{domProps:{innerHTML:t._s(t.invoice.transaction.payment_name)}})])]),e("tr",[e("td",[t._v("Referensi")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.transaction.payment_ref))])])])])],1)],1)]):t._e(),e("q-inner-loading",{staticClass:"no-print",attrs:{showing:t.loading}},[e("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1),t.invoice?e("div",{class:{"no-print":t.isPrintPacking}},[e("div",{staticClass:"print-invoice"},[e("div",{},[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"text-lg text-weight-bold"},[t._v("Invoice")]),e("div",{staticClass:"q-mb-md flex justify-between item-start"},[e("table",[e("tr",[e("th",{attrs:{align:"left"}},[t._v("No")]),e("th",{attrs:{align:"left"}},[t._v(": "+t._s(t.invoice.order_ref))])]),e("tr",[e("td",{attrs:{align:"left"}},[t._v("Dibuat")]),e("td",[t._v(": "+t._s(t.invoice.created_at))])])]),e("div",[e("div",{staticClass:"text-center border q-pa-sm q-mb-sm text-weight-bold",staticStyle:{border:"1px solid #efefef"}},[t._v(t._s(t.invoice.status_label))]),e("div",[t._v(t._s(t.invoice.transaction.payment_name))])])]),e("div",{staticClass:"flex justify-between"},[e("div",{},[e("div",{staticClass:"text-weight-medium q-mb-xs"},[t._v("Ditagihkan Kepada:")]),e("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.invoice.customer_name))]),e("div",[t._v(t._s(t.invoice.customer_whatsapp))]),e("div",{domProps:{innerHTML:t._s(t.invoice.shipping_address)}})]),e("div",{},[e("div",{staticClass:"text-weight-medium q-mb-xs"},[t._v("Dibayarkan Kepada:")]),e("div",{staticClass:"text-weight-bold q-mb-xs"},[t._v(t._s(t.shop.name))]),e("div",{},[t._v(t._s(t.shop.phone))]),e("div",{},[t._v(t._s(t.shop.app_url))])])]),e("div",{staticClass:"q-mt-sm"},[e("div",{staticClass:"text-weight-bold q-mb-xs"},[t._v("Detil Pesanan:")]),t.invoice.items?e("table",{staticClass:"table-order-item"},[e("tr",[e("th",{attrs:{align:"left"}},[t._v("Item")]),e("th",{attrs:{align:"left"}},[t._v("qty")]),e("th",{attrs:{align:"right"}},[t._v("Harga")])]),t._l(t.invoice.items,(function(i,a){return e("tr",{key:a},[e("td",{},[e("div",[t._v(t._s(i.name))]),e("div",{staticClass:"text-caption tet-grey-6"},[t._v(t._s(i.note))])]),e("td",[t._v(t._s(i.quantity))]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(i.price)))])])}))],2):t._e(),e("div",{staticClass:"column justify-end items-end q-mt-sm"},[e("table",[e("tr",[e("td",{attrs:{align:"right"}},[t._v("SubTotal")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_subtotal)))])]),e("tr",[e("td",{attrs:{align:"right"}},[t._v("Ongkos Kirim")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.shipping_cost)))])]),t.invoice.payment_fee>0?e("tr",[e("td",{attrs:{align:"right"}},[t._v("Payment Fee")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.payment_fee)))])]):t._e(),t.invoice.order_unique_code?e("tr",[e("td",{attrs:{align:"right"}},[t._v("Kode Unik (-)")]),e("td",[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.invoice.order_unique_code))])]):t._e(),t.invoice.discount?e("tr",[e("td",{attrs:{align:"right"}},[t._v("Diskon (-)")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.invoice.discount?t.moneyIDR(t.invoice.discount):0))])]):t._e(),e("tr",[e("th",{attrs:{align:"right"}},[t._v("Total Tagihan")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("th",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_total)))])])])])])])])])]):t._e(),t.invoice?e("div",{class:{"no-print":t.isPrintInvoice}},[e("div",{staticClass:"print-packing"},[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"flex justify-between"},[e("div",{},[e("div",{staticClass:"text-weight-medium q-mb-xs text-weight-bold"},[t._v("Penerima:")]),e("table",[e("tr",[e("td",{attrs:{align:"left"}},[t._v("Nama")]),e("td",{attrs:{align:"left"}},[t._v(":")]),e("td",{attrs:{align:"left"}},[t._v(t._s(t.invoice.customer_name))])]),e("tr",[e("td",{attrs:{align:"left"}},[t._v("No Ponsel")]),e("td",{attrs:{align:"left"}},[t._v(":")]),e("td",{attrs:{align:"left"}},[t._v(t._s(t.invoice.customer_whatsapp))])])]),e("div",{staticClass:"q-mt-sm text-weight-bold"},[t._v("Alamat:")]),e("div",{domProps:{innerHTML:t._s(t.invoice.shipping_address)}})]),e("div",{},[e("div",{staticClass:"text-weight-medium q-mb-xs text-weight-bold"},[t._v("Pengirim:")]),e("table",[e("tr",[e("td",{attrs:{align:"left"}},[t._v("Toko")]),e("td",{attrs:{align:"left"}},[t._v(":")]),e("th",{attrs:{align:"left"}},[t._v(t._s(t.shop.name))])]),e("tr",[e("td",{attrs:{align:"left"}},[t._v("No Ponsel")]),e("td",{attrs:{align:"left"}},[t._v(":")]),e("td",{attrs:{align:"left"}},[t._v(t._s(t.shop.phone))])])]),e("div",{staticClass:"q-pl-xs"},[t._v(t._s(t.shop.app_url))]),t.shop.address?e("div",[e("div",{staticClass:"q-mt-sm text-weight-bold"},[t._v("Alamat Toko:")]),e("div",{domProps:{innerHTML:t._s(t.shop.address)}})]):t._e()])]),e("div",{staticClass:"q-mt-sm"},[e("div",{staticClass:"q-mb-xs text-weight-bold"},[t._v("Detil Pesanan:")]),t.invoice.items?e("table",{staticClass:"table-order-item"},[e("tr",[e("th",{attrs:{align:"left"}},[t._v("Item")]),e("th",{attrs:{align:"left"}},[t._v("qty")])]),t._l(t.invoice.items,(function(i,a){return e("tr",{key:a},[e("td",{},[e("div",[t._v(t._s(i.name))]),e("div",{staticClass:"text-caption tet-grey-6"},[t._v(t._s(i.note))])]),e("td",[t._v(t._s(i.quantity))])])}))],2):t._e(),e("div",{staticClass:"flex justify-end q-py-sm bg-grey-1"},[e("table",{staticClass:"table dense"},[e("tr",[e("th",{attrs:{align:"right"}},[t._v("Total Pesanan")]),e("td",{attrs:{align:"right"}},[t._v(":")]),e("th",{attrs:{align:"right"}},[t._v(t._s(t.moneyIDR(t.invoice.order_total)))])])])])]),e("div",{},[e("div",{staticClass:"q-mb-xs text-weight-bold"},[t._v("Kurir:")]),e("table",[e("tr",[e("td",[t._v("Kurir")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_name))])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_service?t.invoice.shipping_courier_service:"-"))])]),e("tr",[e("td",[t._v("No Resi")]),e("td",[t._v(":")]),e("td",[t._v(t._s(t.invoice.shipping_courier_code?t.invoice.shipping_courier_code:"-"))])])])])])])]):t._e()],1)},s=[],n=e("ded3"),r=e.n(n),o=(e("99af"),e("b0c0"),e("ac1f"),e("5319"),e("2ca0"),e("cdde")),c=e("2f62"),d={name:"InvoiceIndex",data:function(){return{modalPayment:!1,throtle:1,isPrintPacking:!1,isPrintInvoice:!1}},computed:r()(r()({},Object(c["e"])({loading:function(t){return t.loading},shop:function(t){return t.shop},invoice:function(t){return t.order.invoice}})),{},{isPaid:function(){return"PAID"==this.invoice.transaction.status},isPaymentType:function(){return"DIRECT"==this.invoice.transaction.payment_type?"DirectPayment":"PaymentGateway"}}),created:function(){this.getOrder()},methods:r()(r()({},Object(c["b"])("order",["getOrderById"])),{},{statusColor:function(t){return"UNPAID"==t?"bg-grey-7":"CANCELED"==t?"bg-red-6":"COMPLETE"==t?"bg-green-6":"bg-blue-7"},getOrder:function(){var t=this,i=this;i.$store.commit("SET_LOADING",!0),this.$route.params.order_ref?this.getOrderById(this.$route.params.order_ref).then((function(t){200==t.status&&i.$store.commit("order/SET_INVOICE",t.data.results),i.$store.commit("SET_LOADING",!1)})).catch((function(){t.$router.push({name:"Cart"})})):this.$router.push({name:"Cart"})},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)},chatToAdmin:function(){var t="Halo ".concat(this.shop.name,",\nMohon pesanan saya untuk segera di proses.\nTerima Kasih.\n\nReferensi Order:\n").concat(location.href),i="https://api.whatsapp.com/send?phone=".concat(this.formatPhoneNumber(this.shop.phone),"&text=").concat(encodeURI(t));window.open(i,"_blank")},kirimBuktiTransfer:function(){this.modalPayment=!1;var t="Halo ".concat(this.shop.name,",\nKonfirmasi pembayaran atas pesanan:\n*INVOICE ").concat(this.invoice.order_ref,"*\n\nReferensi Order:\n").concat(location.href,"\n\nBerikut saya sertakan bukti transfer."),i="https://api.whatsapp.com/send?phone=".concat(this.formatPhoneNumber(this.shop.phone),"&text=").concat(encodeURI(t));window.open(i,"_blank")},formatPhoneNumber:function(t){var i=t.replace(/\D/g,"");return i.startsWith("0")&&(i="62"+i.substr(1)),i},copy:function(t){var i=this;Object(o["a"])(t).then((function(){i.$q.notify({type:"positive",message:"Berhasil menyalin nomor rekening"})})).catch((function(){i.$q.notify({type:"negative",message:"Browser anda tidak support copy to clipboard"})}))},handlePaymentModal:function(){this.modalPayment=!0},printInvoice:function(){var t=(new Date).toDateString();document.title="INVOICE #".concat(this.invoice.order_ref," ").concat(t),this.isPrintPacking=!1,this.isPrintInvoice=!0,setTimeout((function(){window.print()}),200)},printPacking:function(){var t=(new Date).toDateString();document.title="PACKING #".concat(this.invoice.order_ref," ").concat(t),this.isPrintPacking=!0,this.isPrintInvoice=!1,setTimeout((function(){window.print()}),200)}})},v=d,_=(e("0cb5"),e("2877")),l=e("9989"),g=e("e359"),m=e("65c6"),h=e("9c40"),p=e("6ac5"),u=e("f20b"),b=e("1c1c"),f=e("66e5"),y=e("4074"),C=e("0016"),q=e("f09f"),w=e("a370"),x=e("74f7"),I=e("e669"),P=e("2eeb"),k=e("eebe"),D=e.n(k),T=Object(_["a"])(v,a,s,!1,null,null,null);i["default"]=T.exports;D()(T,"components",{QPage:l["a"],QHeader:g["a"],QToolbar:m["a"],QBtn:h["a"],QToolbarTitle:p["a"],QBtnDropdown:u["a"],QList:b["a"],QItem:f["a"],QItemSection:y["a"],QIcon:C["a"],QCard:q["a"],QCardSection:w["a"],QInnerLoading:x["a"],QSpinnerFacebook:I["a"]}),D()(T,"directives",{GoBack:P["a"]})},5173:function(t,i,e){}}]);
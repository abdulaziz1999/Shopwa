(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{ab69:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("q-header",[o("q-toolbar",[o("q-btn",{attrs:{to:{name:"Settings"},flat:"",round:"",dense:"",icon:"arrow_back"}}),o("q-toolbar-title",[t._v("\n       Diskon / Kupon\n      ")])],1)],1),o("q-tabs",{staticClass:"text-primary",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab",{attrs:{name:"diskon",label:"Diskon"}}),o("q-tab",{attrs:{name:"kupon",label:"Kupon"}}),o("q-tab",{attrs:{name:"promo",label:"Promo"}})],1),o("q-separator"),o("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab-panel",{attrs:{name:"diskon"}},[o("Discount")],1),o("q-tab-panel",{attrs:{name:"kupon"}},[o("Coupon")],1),o("q-tab-panel",{attrs:{name:"promo"}},[o("Promote")],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row items-center justify-between"},[o("div",{staticClass:"text-h6"},[t._v("Master Diskon")]),o("q-btn",{attrs:{unelevated:"",color:"primary"},on:{click:t.handleAddDiscount}},[o("q-icon",{attrs:{name:"add"}}),o("span",[t._v("Diskon")])],1)],1),o("div",{staticClass:"q-py-md"},[o("q-list",{attrs:{separator:""}},[o("q-item",[o("q-item-section",{attrs:{side:""}},[t._v("#")]),o("q-item-section",[t._v("Label")]),o("q-item-section",[t._v("Nilai")]),o("q-item-section",{attrs:{side:""}},[t._v("Action")])],1),t._l(t.discounts,(function(e,a){return o("q-item",{key:a},[o("q-item-section",{attrs:{side:""}},[t._v(t._s(a+1))]),o("q-item-section",[t._v(t._s(e.label))]),o("q-item-section",["percent"==e.unit?o("q-item-label",[t._v("\n           "+t._s(e.value)+" %\n         ")]):o("q-item-label",[t._v("\n           "+t._s(t.moneyIDR(e.value))+"\n         ")])],1),o("q-item-section",{attrs:{side:""}},[o("div",{staticClass:"q-gutter-sm"},[o("q-btn",{attrs:{size:"sm",unelevated:"",color:"red",icon:"delete",round:""},on:{click:function(o){return t.handleDeleteDiscount(e.id)}}}),o("q-btn",{attrs:{size:"sm",unelevated:"",color:"blue",icon:"edit",round:""},on:{click:function(o){return t.handleEditDiscount(e)}}})],1)])],1)}))],2)],1),o("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[o("q-card",{staticClass:"card-medium"},[o("div",{staticClass:"card-heading"},[t._v(t._s(t.formType)+" Diskon")]),o("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("q-card-section",[o("q-input",{attrs:{required:"",filled:"",square:"",label:"Label",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),o("div",{staticClass:"flex items-center q-mt-sm"},[o("q-input",{attrs:{required:"",filled:"",square:"",label:"Amount",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}}),o("q-select",{attrs:{required:"",filled:"",square:"",label:"Unit",options:t.options,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),o("div",{staticClass:"flex items-center justify-end q-mt-md q-gutter-x-sm"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary",label:"Batal"}}),o("q-btn",{attrs:{unelevated:"",color:"primary",type:"submit",label:"Simpan"}})],1)],1)],1)],1)],1)],1)},n=[],r=o("ded3"),l=o.n(r),c=(o("4de4"),o("2f62")),u={name:"DiscountBlock",data:function(){return{modal:!1,options:[{value:"percent",label:"Percent"},{value:"amount",label:"Amount"}],form:{label:"",unit:"percent",value:0},selectedDiscount:null,formType:"Tambah"}},computed:l()({},Object(c["e"])({discounts:function(t){return t.discount.discounts},coupons:function(t){return t.coupon.coupons},promotes:function(t){return t.promo.promotes}})),methods:l()(l()({},Object(c["b"])("discount",["getDiscounts","storeDiscount","updateDiscount","deleteDiscount"])),{},{handleAddDiscount:function(){this.clearForm(),this.formType="Tambah",this.modal=!0},handleEditDiscount:function(t){this.clearForm(),this.formType="Edit",this.selectedDiscount=t,this.setInputData(),this.modal=!0},handleDeleteDiscount:function(t){var e=this,o=this.coupons.filter((function(e){return e.discount_id==t}));if(o.length)this.$q.notify({type:"negative",message:"Gagal! Diskon terasosiasi dengan kupon"});else{var a=this.promotes.filter((function(e){return e.discount_id==t}));a.length?this.$q.notify({type:"negative",message:"Gagal! Diskon terasosiasi dengan promo"}):this.$q.dialog({message:"Yakin akan menghapus ini?",cancel:!0}).onOk((function(){e.deleteDiscount(t)}))}},setInputData:function(){this.form.label=this.selectedDiscount.label,this.form.unit=this.selectedDiscount.unit,this.form.value=this.selectedDiscount.value},submit:function(){var t=this,e=this.form;"Edit"==this.formType&&(e._method="PUT",e.id=this.selectedDiscount.id,this.updateDiscount(e).then((function(){t.closeModal()}))),"Tambah"==this.formType&&this.storeDiscount(e).then((function(){t.closeModal()}))},closeModal:function(){this.clearForm(),this.modal=!1},clearForm:function(){this.form.label="",this.form.unit="percent",this.form.value=0}}),mounted:function(){this.getDiscounts()}},d=u,m=o("2877"),p=o("9c40"),f=o("0016"),h=o("1c1c"),b=o("66e5"),q=o("4074"),v=o("0170"),_=o("24e8"),k=o("f09f"),y=o("0378"),D=o("a370"),g=o("27f9"),C=o("ddd8"),Q=o("7f67"),x=o("eebe"),T=o.n(x),w=Object(m["a"])(d,i,n,!1,null,null,null),P=w.exports;T()(w,"components",{QBtn:p["a"],QIcon:f["a"],QList:h["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:v["a"],QDialog:_["a"],QCard:k["a"],QForm:y["a"],QCardSection:D["a"],QInput:g["a"],QSelect:C["a"]}),T()(w,"directives",{ClosePopup:Q["a"]});var $=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row items-center justify-between"},[o("div",{staticClass:"text-h6"},[t._v("Kupon Diskon")]),o("q-btn",{attrs:{unelevated:"",color:"primary"},on:{click:t.handleAdd}},[o("q-icon",{attrs:{name:"add"}}),o("span",[t._v("Kupon")])],1)],1),o("div",{staticClass:"q-py-md"},[o("q-list",{attrs:{separator:""}},[o("q-item",[o("q-item-section",{attrs:{side:""}},[t._v("#")]),o("q-item-section",[t._v("Label")]),o("q-item-section",[t._v("Kupon Kode")]),o("q-item-section",[t._v("Diskon")]),o("q-item-section",{attrs:{side:""}},[t._v("Action")])],1),t._l(t.coupons,(function(e,a){return o("q-item",{key:a},[o("q-item-section",{attrs:{side:""}},[t._v(t._s(a+1))]),o("q-item-section",[t._v(t._s(e.label))]),o("q-item-section",[t._v(t._s(e.code))]),e.discount?o("q-item-section",["percent"==e.discount.unit?o("q-item-label",[t._v("\n           "+t._s(e.discount.value)+" %\n         ")]):o("q-item-label",[t._v("\n           "+t._s(t.moneyIDR(e.discount.value))+"\n         ")])],1):t._e(),o("q-item-section",{attrs:{side:""}},[o("div",{staticClass:"q-gutter-sm"},[o("q-btn",{attrs:{size:"sm",unelevated:"",color:"red",icon:"delete",round:""},on:{click:function(o){return t.handleDelete(e.id)}}}),o("q-btn",{attrs:{size:"sm",unelevated:"",color:"blue",icon:"edit",round:""},on:{click:function(o){return t.handleEdit(e)}}})],1)])],1)}))],2)],1),o("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[o("q-card",{staticClass:"card-medium"},[o("div",{staticClass:"card-heading"},[t._v(t._s(t.formType)+" Kupon")]),o("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("q-card-section",{staticClass:"q-gutter-y-sm"},[o("q-input",{attrs:{required:"",filled:"",square:"",label:"Label",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),o("q-input",{attrs:{required:"",filled:"",square:"",label:"Kode Kupon",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-btn",{attrs:{label:"Generate",color:"primary",unelevated:""},on:{click:t.generateCoupon}})]},proxy:!0}]),model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),o("q-select",{attrs:{required:"",filled:"",square:"",label:"Diskon",options:t.discountOptions,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.discount_id,callback:function(e){t.$set(t.form,"discount_id",e)},expression:"form.discount_id"}}),o("div",{staticClass:"flex items-center justify-end q-mt-md q-gutter-x-sm"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary",label:"Batal"}}),o("q-btn",{attrs:{unelevated:"",color:"primary",type:"submit",label:"Simpan"}})],1)],1)],1)],1)],1)],1)},F=[],I=(o("d81d"),{name:"CouponBlock",data:function(){return{modal:!1,form:{discount_id:"",code:"",label:""},selectedData:null,formType:"Tambah"}},computed:l()(l()({},Object(c["e"])({discounts:function(t){return t.discount.discounts},coupons:function(t){return t.coupon.coupons}})),{},{discountOptions:function(){var t=[];return this.discounts.map((function(e){t.push({value:e.id,label:e.label})})),t}}),methods:l()(l()(l()({},Object(c["b"])("discount",["getDiscounts"])),Object(c["b"])("coupon",["getCoupons","storeCoupon","updateCoupon","deleteCoupon"])),{},{handleAdd:function(){if(!this.discounts.length)return this.$q.notify({type:"warning",message:"Silahkan tambahkan diskon terlebih dahulu untuk membuat kupon"});this.clearForm(),this.formType="Tambah",this.modal=!0},handleEdit:function(t){this.clearForm(),this.formType="Edit",this.selectedData=t,this.setInputData(),this.modal=!0},handleDelete:function(t){var e=this;this.$q.dialog({message:"Yakin akan menghapus ini?",cancel:!0}).onOk((function(){e.deleteCoupon(t)}))},setInputData:function(){this.form.label=this.selectedData.label,this.form.code=this.selectedData.code,this.form.discount_id=this.selectedData.discount_id},submit:function(){var t=this,e=this.form;"Edit"==this.formType&&(e._method="PUT",e.discount_id=this.selectedData.id,this.updateCoupon(e).then((function(){t.closeModal()}))),"Tambah"==this.formType&&this.storeCoupon(e).then((function(){t.closeModal()}))},closeModal:function(){this.clearForm(),this.modal=!1},clearForm:function(){this.discount_id="",this.code="",this.label=""},generateCoupon:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",e="",o=0;o<8;o++)e+=t.charAt(Math.floor(Math.random()*t.length));var a=this.coupons.filter((function(t){return t.code==e}));a.length?this.generateCoupon():this.form.code=e}}),mounted:function(){this.getCoupons()}}),S=I,j=Object(m["a"])(S,$,F,!1,null,null,null),M=j.exports;T()(j,"components",{QBtn:p["a"],QIcon:f["a"],QList:h["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:v["a"],QDialog:_["a"],QCard:k["a"],QForm:y["a"],QCardSection:D["a"],QInput:g["a"],QSelect:C["a"]}),T()(j,"directives",{ClosePopup:Q["a"]});var O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row items-center justify-between"},[o("div",{staticClass:"text-h6"},[t._v("Promo Diskon")]),o("div",{staticClass:"row items-center q-gutter-x-sm"},[o("q-btn",{attrs:{unelevated:"",color:"primary"},on:{click:t.handleAdd}},[o("q-icon",{attrs:{name:"add"}}),o("span",[t._v("Promo")])],1)],1)]),o("div",{staticClass:"q-py-md"},[o("q-list",{attrs:{separator:""}},[o("q-item",[o("q-item-section",{attrs:{side:""}},[t._v("#")]),o("q-item-section",[t._v("Label")]),o("q-item-section",[t._v("Diskon")]),o("q-item-section",[t._v("Status")]),o("q-item-section",{attrs:{side:""}},[t._v("Action")])],1),t._l(t.promotes,(function(e,a){return o("q-item",{key:a},[o("q-item-section",{attrs:{side:""}},[t._v(t._s(a+1))]),o("q-item-section",[o("q-item-label",[t._v(t._s(e.label)+" ["+t._s(e.products_count)+"]")])],1),o("q-item-section",[o("div",[o("q-chip",{attrs:{square:"","text-color":"white",color:"teal",size:"sm"}},[t._v(t._s(e.discount.label)+" ")])],1)]),o("q-item-section",[o("q-item-label",[o("q-chip",{attrs:{size:"sm","text-color":"white",color:e.is_active?"green":"grey",label:e.is_active?"Active":"Inactive"}})],1)],1),o("q-item-section",{attrs:{side:""}},[o("div",{staticClass:"q-gutter-sm"},[o("q-btn",{attrs:{size:"sm",unelevated:"",color:"red",icon:"delete",round:""},on:{click:function(o){return t.handleDelete(e.id)}}}),o("q-btn",{attrs:{size:"sm",unelevated:"",color:"blue",icon:"edit",round:""},on:{click:function(o){return t.handleEdit(e)}}}),o("q-btn",{attrs:{size:"sm",unelevated:"",color:"teal",icon:"settings",round:""},on:{click:function(o){return t.$router.push({name:"PromoDetail",params:{id:e.id}})}}})],1)])],1)}))],2)],1),o("div",[o("q-list",t._l(t.products,(function(e){return o("q-item",{key:e.id},[o("q-item-section",[t._v(t._s(e.title))]),o("q-item-section",{attrs:{side:""}})],1)})),1)],1),o("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[o("q-card",{staticClass:"card-medium"},[o("div",{staticClass:"card-heading"},[t._v(t._s(t.formType)+" Promo")]),o("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("q-card-section",{staticClass:"q-gutter-y-sm"},[o("q-input",{attrs:{required:"",filled:"",square:"",label:"Label",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),o("q-select",{attrs:{required:"",filled:"",square:"",label:"Diskon",options:t.discountOptions,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.discount_id,callback:function(e){t.$set(t.form,"discount_id",e)},expression:"form.discount_id"}}),o("q-input",{attrs:{label:"Start Date",filled:"",readonly:"",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[o("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[o("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}},[o("div",{staticClass:"row items-center justify-end"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[o("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[o("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}},[o("div",{staticClass:"row items-center justify-end"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}}),o("q-input",{attrs:{label:"End Date",filled:"",readonly:"",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[o("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[o("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}},[o("div",{staticClass:"row items-center justify-end"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[o("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[o("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}},[o("div",{staticClass:"row items-center justify-end"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}}),o("div",{staticClass:"flex items-center justify-end q-mt-md q-gutter-x-sm"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary",label:"Batal"}}),o("q-btn",{attrs:{unelevated:"",color:"primary",type:"submit",label:"Simpan"}})],1)],1)],1)],1)],1)],1)},Y=[],E={name:"PromoteBlock",data:function(){return{modal:!1,form:{id:"",discount_id:"",start_date:"",end_date:"",label:""},selectedData:null,formType:"Tambah",search:"",productSearch:[]}},computed:l()(l()({},Object(c["e"])({discounts:function(t){return t.discount.discounts},promotes:function(t){return t.promo.promotes},products:function(t){return t.promo.products}})),{},{discountOptions:function(){var t=[];return this.discounts.map((function(e){t.push({value:e.id,label:e.label})})),t}}),methods:l()(l()(l()({},Object(c["b"])("discount",["getDiscounts"])),Object(c["b"])("promo",["getPromotes","storePromote","updatePromote","deletePromote","getProducts"])),{},{handleAdd:function(){if(!this.discounts.length)return this.$q.notify({type:"warning",message:"Silahkan tambahkan diskon terlebih dahulu untuk membuat promo"});this.clearForm(),this.formType="Tambah",this.modal=!0},handleEdit:function(t){this.clearForm(),this.formType="Edit",this.selectedData=t,this.setInputData(),this.modal=!0},handleDelete:function(t){var e=this;this.$q.dialog({message:"Yakin akan menghapus ini?",cancel:!0}).onOk((function(){e.deletePromote(t)}))},setInputData:function(){this.form.id=this.selectedData.id,this.form.label=this.selectedData.label,this.form.start_date=this.selectedData.start_date,this.form.end_date=this.selectedData.end_date,this.form.discount_id=this.selectedData.discount_id},submit:function(){var t=this,e=this.form;"Edit"==this.formType&&(e._method="PUT",this.updatePromote(e).then((function(){t.closeModal()}))),"Tambah"==this.formType&&this.storePromote(e).then((function(){t.closeModal()}))},searchProduct:function(t){console.log(t)},closeModal:function(){this.clearForm(),this.modal=!1},clearForm:function(){this.form.id="",this.form.discount_id="",this.form.label="",this.form.start_date="",this.form.end_date=""}}),mounted:function(){this.getPromotes()}},A=E,L=o("b047"),B=o("7cbe"),H=o("52ee"),K=o("ca78"),z=Object(m["a"])(A,O,Y,!1,null,null,null),N=z.exports;T()(z,"components",{QBtn:p["a"],QIcon:f["a"],QList:h["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:v["a"],QChip:L["a"],QDialog:_["a"],QCard:k["a"],QForm:y["a"],QCardSection:D["a"],QInput:g["a"],QSelect:C["a"],QPopupProxy:B["a"],QDate:H["a"],QTime:K["a"]}),T()(z,"directives",{ClosePopup:Q["a"]});var U={name:"DiscountIndex",components:{Discount:P,Coupon:M,Promote:N},data:function(){return{tab:"diskon"}},mounted:function(){this.$route.query.q&&(this.tab=this.$route.query.q)}},G=U,J=o("9989"),R=o("e359"),V=o("65c6"),W=o("6ac5"),X=o("429b"),Z=o("7460"),tt=o("eb85"),et=o("adad"),ot=o("823b"),at=Object(m["a"])(G,a,s,!1,null,null,null);e["default"]=at.exports;T()(at,"components",{QPage:J["a"],QHeader:R["a"],QToolbar:V["a"],QBtn:p["a"],QToolbarTitle:W["a"],QTabs:X["a"],QTab:Z["a"],QSeparator:tt["a"],QTabPanels:et["a"],QTabPanel:ot["a"]})}}]);
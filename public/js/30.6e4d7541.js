(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{ab69:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("q-header",[s("q-toolbar",[s("q-btn",{attrs:{to:{name:"Settings"},flat:"",round:"",dense:"",icon:"arrow_back"}}),s("q-toolbar-title",[t._v("\n       Diskon / Kupon\n      ")])],1)],1),s("q-tabs",{staticClass:"text-primary",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab",{attrs:{name:"diskon",label:"Diskon"}}),s("q-tab",{attrs:{name:"kupon",label:"Kupon"}}),s("q-tab",{attrs:{name:"promo",label:"Promo"}})],1),s("q-separator"),s("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab-panel",{staticClass:"q-px-xs",attrs:{name:"diskon"}},[s("Discount")],1),s("q-tab-panel",{staticClass:"q-px-xs",attrs:{name:"kupon"}},[s("Coupon")],1),s("q-tab-panel",{staticClass:"q-px-xs",attrs:{name:"promo"}},[s("Promote")],1)],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row items-center justify-between q-px-sm"},[s("div",{staticClass:"text-h6"},[t._v("Master Diskon")]),s("q-btn",{attrs:{unelevated:"",color:"primary"},on:{click:t.handleAddDiscount}},[s("q-icon",{attrs:{name:"add"}}),s("span",[t._v("Diskon")])],1)],1),s("div",{staticClass:"q-py-md"},[s("q-list",{attrs:{separator:""}},[s("q-item",[s("q-item-section",{attrs:{side:""}},[t._v("#")]),s("q-item-section",[t._v("Label")]),s("q-item-section",[t._v("Nilai")]),s("q-item-section",{attrs:{side:""}},[t._v("Action")])],1),t._l(t.discounts,(function(e,o){return s("q-item",{key:o},[s("q-item-section",{attrs:{side:""}},[t._v(t._s(o+1))]),s("q-item-section",[t._v(t._s(e.label))]),s("q-item-section",["percent"==e.unit?s("q-item-label",[t._v("\n           "+t._s(e.value)+" %\n         ")]):s("q-item-label",[t._v("\n           "+t._s(t.moneyIDR(e.value))+"\n         ")])],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"q-gutter-sm"},[s("q-btn",{attrs:{size:"sm",unelevated:"",color:"red",icon:"delete",round:""},on:{click:function(s){return t.handleDeleteDiscount(e.id)}}}),s("q-btn",{attrs:{size:"sm",unelevated:"",color:"blue",icon:"edit",round:""},on:{click:function(s){return t.handleEditDiscount(e)}}})],1)])],1)}))],2)],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[s("q-card",{staticClass:"card-medium"},[s("div",{staticClass:"card-heading"},[t._v(t._s(t.formType)+" Diskon")]),s("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("q-card-section",[s("q-input",{attrs:{required:"",filled:"",square:"",label:"Label",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),s("div",{staticClass:"flex items-center q-mt-sm"},[s("q-input",{attrs:{required:"",filled:"",square:"",label:"Amount",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}}),s("q-select",{attrs:{required:"",filled:"",square:"",label:"Unit",options:t.options,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),s("div",{staticClass:"flex items-center justify-end q-mt-md q-gutter-x-sm"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary",label:"Batal"}}),s("q-btn",{attrs:{unelevated:"",color:"primary",type:"submit",label:"Simpan"}})],1)],1)],1)],1)],1)],1)},n=[],r=s("ded3"),l=s.n(r),c=(s("4de4"),s("2f62")),u={name:"DiscountBlock",data:function(){return{modal:!1,options:[{value:"percent",label:"Percent"},{value:"amount",label:"Amount"}],form:{label:"",unit:"percent",value:0},selectedDiscount:null,formType:"Tambah"}},computed:l()({},Object(c["e"])({discounts:function(t){return t.discount.discounts},coupons:function(t){return t.coupon.coupons},promotes:function(t){return t.promo.promotes}})),methods:l()(l()({},Object(c["b"])("discount",["getDiscounts","storeDiscount","updateDiscount","deleteDiscount"])),{},{handleAddDiscount:function(){this.clearForm(),this.formType="Tambah",this.modal=!0},handleEditDiscount:function(t){this.clearForm(),this.formType="Edit",this.selectedDiscount=t,this.setInputData(),this.modal=!0},handleDeleteDiscount:function(t){var e=this,s=this.coupons.filter((function(e){return e.discount_id==t}));if(s.length)this.$q.notify({type:"negative",message:"Gagal! Diskon terasosiasi dengan kupon"});else{var o=this.promotes.filter((function(e){return e.discount_id==t}));o.length?this.$q.notify({type:"negative",message:"Gagal! Diskon terasosiasi dengan promo"}):this.$q.dialog({message:"Yakin akan menghapus ini?",cancel:!0}).onOk((function(){e.deleteDiscount(t)}))}},setInputData:function(){this.form.label=this.selectedDiscount.label,this.form.unit=this.selectedDiscount.unit,this.form.value=this.selectedDiscount.value},submit:function(){var t=this,e=this.form;"Edit"==this.formType&&(e._method="PUT",e.id=this.selectedDiscount.id,this.updateDiscount(e).then((function(){t.closeModal()}))),"Tambah"==this.formType&&this.storeDiscount(e).then((function(){t.closeModal()}))},closeModal:function(){this.clearForm(),this.modal=!1},clearForm:function(){this.form.label="",this.form.unit="percent",this.form.value=0}}),mounted:function(){this.getDiscounts()}},d=u,m=s("2877"),p=s("9c40"),f=s("0016"),h=s("1c1c"),b=s("66e5"),q=s("4074"),v=s("0170"),_=s("24e8"),k=s("f09f"),D=s("0378"),y=s("a370"),C=s("27f9"),g=s("ddd8"),x=s("7f67"),Q=s("eebe"),T=s.n(Q),w=Object(m["a"])(d,i,n,!1,null,null,null),P=w.exports;T()(w,"components",{QBtn:p["a"],QIcon:f["a"],QList:h["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:v["a"],QDialog:_["a"],QCard:k["a"],QForm:D["a"],QCardSection:y["a"],QInput:C["a"],QSelect:g["a"]}),T()(w,"directives",{ClosePopup:x["a"]});var $=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row items-center justify-between q-px-sm"},[s("div",{staticClass:"text-h6"},[t._v("Kupon Diskon")]),s("q-btn",{attrs:{unelevated:"",color:"primary"},on:{click:t.handleAdd}},[s("q-icon",{attrs:{name:"add"}}),s("span",[t._v("Kupon")])],1)],1),s("div",{staticClass:"q-py-md"},[s("q-list",{attrs:{separator:""}},[s("q-item",[s("q-item-section",{attrs:{side:""}},[t._v("#")]),s("q-item-section",[t._v("Label")]),s("q-item-section",[t._v("Kupon Kode")]),s("q-item-section",[t._v("Diskon")]),s("q-item-section",{attrs:{side:""}},[t._v("Action")])],1),t._l(t.coupons,(function(e,o){return s("q-item",{key:o},[s("q-item-section",{attrs:{side:""}},[t._v(t._s(o+1))]),s("q-item-section",[t._v(t._s(e.label))]),s("q-item-section",[t._v(t._s(e.code))]),e.discount?s("q-item-section",["percent"==e.discount.unit?s("q-item-label",[t._v("\n           "+t._s(e.discount.value)+" %\n         ")]):s("q-item-label",[t._v("\n           "+t._s(t.moneyIDR(e.discount.value))+"\n         ")])],1):t._e(),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"q-gutter-sm"},[s("q-btn",{attrs:{size:"sm",unelevated:"",color:"red",icon:"delete",round:""},on:{click:function(s){return t.handleDelete(e.id)}}}),s("q-btn",{attrs:{size:"sm",unelevated:"",color:"blue",icon:"edit",round:""},on:{click:function(s){return t.handleEdit(e)}}})],1)])],1)}))],2)],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[s("q-card",{staticClass:"card-medium"},[s("div",{staticClass:"card-heading"},[t._v(t._s(t.formType)+" Kupon")]),s("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("q-card-section",{staticClass:"q-gutter-y-sm"},[s("q-input",{attrs:{required:"",filled:"",square:"",label:"Label",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),s("q-input",{attrs:{required:"",filled:"",square:"",label:"Kode Kupon",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-btn",{attrs:{label:"Generate",color:"primary",unelevated:""},on:{click:t.generateCoupon}})]},proxy:!0}]),model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),s("q-select",{attrs:{required:"",filled:"",square:"",label:"Diskon",options:t.discountOptions,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.discount_id,callback:function(e){t.$set(t.form,"discount_id",e)},expression:"form.discount_id"}}),s("div",{staticClass:"flex items-center justify-end q-mt-md q-gutter-x-sm"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary",label:"Batal"}}),s("q-btn",{attrs:{unelevated:"",color:"primary",type:"submit",label:"Simpan"}})],1)],1)],1)],1)],1)],1)},F=[],I=(s("d81d"),{name:"CouponBlock",data:function(){return{modal:!1,form:{discount_id:"",code:"",label:""},selectedData:null,formType:"Tambah"}},computed:l()(l()({},Object(c["e"])({discounts:function(t){return t.discount.discounts},coupons:function(t){return t.coupon.coupons}})),{},{discountOptions:function(){var t=[];return this.discounts.map((function(e){t.push({value:e.id,label:e.label})})),t}}),methods:l()(l()(l()({},Object(c["b"])("discount",["getDiscounts"])),Object(c["b"])("coupon",["getCoupons","storeCoupon","updateCoupon","deleteCoupon"])),{},{handleAdd:function(){if(!this.discounts.length)return this.$q.notify({type:"warning",message:"Silahkan tambahkan diskon terlebih dahulu untuk membuat kupon"});this.clearForm(),this.formType="Tambah",this.modal=!0},handleEdit:function(t){this.clearForm(),this.formType="Edit",this.selectedData=t,this.setInputData(),this.modal=!0},handleDelete:function(t){var e=this;this.$q.dialog({message:"Yakin akan menghapus ini?",cancel:!0}).onOk((function(){e.deleteCoupon(t)}))},setInputData:function(){this.form.label=this.selectedData.label,this.form.code=this.selectedData.code,this.form.discount_id=this.selectedData.discount_id},submit:function(){var t=this,e=this.form;"Edit"==this.formType&&(e._method="PUT",e.discount_id=this.selectedData.id,this.updateCoupon(e).then((function(){t.closeModal()}))),"Tambah"==this.formType&&this.storeCoupon(e).then((function(){t.closeModal()}))},closeModal:function(){this.clearForm(),this.modal=!1},clearForm:function(){this.discount_id="",this.code="",this.label=""},generateCoupon:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",e="",s=0;s<8;s++)e+=t.charAt(Math.floor(Math.random()*t.length));var o=this.coupons.filter((function(t){return t.code==e}));o.length?this.generateCoupon():this.form.code=e}}),mounted:function(){this.getCoupons()}}),S=I,j=Object(m["a"])(S,$,F,!1,null,null,null),M=j.exports;T()(j,"components",{QBtn:p["a"],QIcon:f["a"],QList:h["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:v["a"],QDialog:_["a"],QCard:k["a"],QForm:D["a"],QCardSection:y["a"],QInput:C["a"],QSelect:g["a"]}),T()(j,"directives",{ClosePopup:x["a"]});var O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row items-center justify-between q-px-sm"},[s("div",{staticClass:"text-h6"},[t._v("Promo Diskon")]),s("div",{staticClass:"row items-center q-gutter-x-sm"},[s("q-btn",{attrs:{unelevated:"",color:"primary"},on:{click:t.handleAdd}},[s("q-icon",{attrs:{name:"add"}}),s("span",[t._v("Promo")])],1)],1)]),s("div",{staticClass:"q-py-md"},[s("q-list",{attrs:{separator:""}},[s("q-item",[s("q-item-section",{attrs:{side:""}},[t._v("#")]),s("q-item-section",[t._v("Label")]),t.isDesktop?s("q-item-section",[t._v("Diskon")]):t._e(),s("q-item-section",[t._v("Status")]),s("q-item-section",{attrs:{side:""}},[t._v("Action")])],1),t._l(t.promotes,(function(e,o){return s("q-item",{key:o},[s("q-item-section",{attrs:{side:""}},[t._v(t._s(o+1))]),s("q-item-section",[s("q-item-label",[t._v(t._s(e.label)+" ["+t._s(e.products_count)+"]")]),t.isDesktop?t._e():s("div",[s("q-chip",{attrs:{square:"","text-color":"white",color:"teal",size:"sm"}},[t._v(t._s(e.discount.label)+" ")])],1)],1),t.isDesktop?s("q-item-section",[s("div",[s("q-chip",{attrs:{square:"","text-color":"white",color:"teal",size:"sm"}},[t._v(t._s(e.discount.label)+" ")])],1)]):t._e(),s("q-item-section",[s("q-item-label",[s("q-chip",{attrs:{size:"sm","text-color":"white",color:e.is_active?"green":"grey",label:e.is_active?"Active":"Inactive"}})],1)],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"q-gutter-sm"},[s("q-btn",{attrs:{size:"sm",unelevated:"",color:"red",icon:"delete",round:""},on:{click:function(s){return t.handleDelete(e.id)}}}),s("q-btn",{attrs:{size:"sm",unelevated:"",color:"blue",icon:"edit",round:""},on:{click:function(s){return t.handleEdit(e)}}}),s("q-btn",{attrs:{size:"sm",unelevated:"",color:"teal",icon:"settings",round:""},on:{click:function(s){return t.$router.push({name:"PromoDetail",params:{id:e.id}})}}})],1)])],1)}))],2)],1),s("div",[s("q-list",t._l(t.products,(function(e){return s("q-item",{key:e.id},[s("q-item-section",[t._v(t._s(e.title))]),s("q-item-section",{attrs:{side:""}})],1)})),1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[s("q-card",{staticClass:"card-medium"},[s("div",{staticClass:"card-heading"},[t._v(t._s(t.formType)+" Promo")]),s("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("q-card-section",{staticClass:"q-gutter-y-sm"},[s("q-input",{attrs:{required:"",filled:"",square:"",label:"Label",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),s("q-select",{attrs:{required:"",filled:"",square:"",label:"Diskon",options:t.discountOptions,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.discount_id,callback:function(e){t.$set(t.form,"discount_id",e)},expression:"form.discount_id"}}),s("q-input",{attrs:{label:"Start Date",filled:"",readonly:"",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[s("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[s("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[s("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}}),s("q-input",{attrs:{label:"End Date",filled:"",readonly:"",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[s("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[s("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[s("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}}),s("div",{staticClass:"flex items-center justify-end q-mt-md q-gutter-x-sm"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary",label:"Batal"}}),s("q-btn",{attrs:{unelevated:"",color:"primary",type:"submit",label:"Simpan"}})],1)],1)],1)],1)],1)],1)},Y=[],E={name:"PromoteBlock",data:function(){return{modal:!1,form:{id:"",discount_id:"",start_date:"",end_date:"",label:""},selectedData:null,formType:"Tambah",search:"",productSearch:[]}},computed:l()(l()({},Object(c["e"])({discounts:function(t){return t.discount.discounts},promotes:function(t){return t.promo.promotes},products:function(t){return t.promo.products}})),{},{discountOptions:function(){var t=[];return this.discounts.map((function(e){t.push({value:e.id,label:e.label})})),t},isDesktop:function(){return window.innerWidth>600}}),methods:l()(l()(l()({},Object(c["b"])("discount",["getDiscounts"])),Object(c["b"])("promo",["getPromotes","storePromote","updatePromote","deletePromote","getProducts"])),{},{handleAdd:function(){if(!this.discounts.length)return this.$q.notify({type:"warning",message:"Silahkan tambahkan diskon terlebih dahulu untuk membuat promo"});this.clearForm(),this.formType="Tambah",this.modal=!0},handleEdit:function(t){this.clearForm(),this.formType="Edit",this.selectedData=t,this.setInputData(),this.modal=!0},handleDelete:function(t){var e=this;this.$q.dialog({message:"Yakin akan menghapus ini?",cancel:!0}).onOk((function(){e.deletePromote(t)}))},setInputData:function(){this.form.id=this.selectedData.id,this.form.label=this.selectedData.label,this.form.start_date=this.selectedData.start_date,this.form.end_date=this.selectedData.end_date,this.form.discount_id=this.selectedData.discount_id},submit:function(){var t=this,e=this.form;"Edit"==this.formType&&(e._method="PUT",this.updatePromote(e).then((function(){t.closeModal()}))),"Tambah"==this.formType&&this.storePromote(e).then((function(){t.closeModal()}))},searchProduct:function(t){console.log(t)},closeModal:function(){this.clearForm(),this.modal=!1},clearForm:function(){this.form.id="",this.form.discount_id="",this.form.label="",this.form.start_date="",this.form.end_date=""}}),mounted:function(){this.getPromotes()}},A=E,L=s("b047"),B=s("7cbe"),z=s("52ee"),H=s("ca78"),K=Object(m["a"])(A,O,Y,!1,null,null,null),N=K.exports;T()(K,"components",{QBtn:p["a"],QIcon:f["a"],QList:h["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:v["a"],QChip:L["a"],QDialog:_["a"],QCard:k["a"],QForm:D["a"],QCardSection:y["a"],QInput:C["a"],QSelect:g["a"],QPopupProxy:B["a"],QDate:z["a"],QTime:H["a"]}),T()(K,"directives",{ClosePopup:x["a"]});var U={name:"DiscountIndex",components:{Discount:P,Coupon:M,Promote:N},data:function(){return{tab:"diskon"}},mounted:function(){this.$route.query.q&&(this.tab=this.$route.query.q)}},G=U,J=s("9989"),R=s("e359"),W=s("65c6"),V=s("6ac5"),X=s("429b"),Z=s("7460"),tt=s("eb85"),et=s("adad"),st=s("823b"),ot=Object(m["a"])(G,o,a,!1,null,null,null);e["default"]=ot.exports;T()(ot,"components",{QPage:J["a"],QHeader:R["a"],QToolbar:W["a"],QBtn:p["a"],QToolbarTitle:V["a"],QTabs:X["a"],QTab:Z["a"],QSeparator:tt["a"],QTabPanels:et["a"],QTabPanel:st["a"]})}}]);
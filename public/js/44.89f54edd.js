(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{bd74:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-grey-2",class:{"flex flex-center":!t.carts.length}},[n("q-header",{staticClass:"text-primary bg-white"},[n("q-toolbar",[n("q-btn",{attrs:{to:{name:"ProductIndex"},flat:"",round:"",dense:"",icon:"arrow_back"}}),n("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v("Keranjang Belanja")])],1)],1),t.carts.length?n("div",{staticClass:"q-py-md"},[n("q-list",{staticClass:"bg-white",attrs:{separator:""}},t._l(t.carts,(function(e){return n("q-item",{key:e.sku},[n("q-item-section",{attrs:{side:""}},[n("q-btn",{attrs:{icon:"cancel",flat:"",color:"red",padding:"3px"},on:{click:function(n){return t.removeCart(e)}}})],1),n("q-item-section",{attrs:{side:""}},[n("q-img",{staticStyle:{width:"90px",height:"90px"},attrs:{src:e.image_url}})],1),n("q-item-section",[n("div",{staticClass:"col"},[n("div",{staticClass:"text-weight-bold"},[t._v(t._s(e.name))]),n("div",{staticClass:"text-grey-7 q-mb-xs"},[t._v(t._s(e.note))]),n("div",{staticClass:"text-grey-7"},[t._v("Harga "+t._s(t.moneyIDR(e.price)))]),n("div",{staticClass:"text-grey-7"},[t._v("Subtotal "+t._s(t.moneyIDR(e.quantity*e.price)))]),n("div",{staticClass:"q-gutter-x-sm"},[n("q-btn",{staticStyle:{cursor:"pointer"},attrs:{flat:"",round:"",icon:"remove_circle_outline",size:"24"},on:{click:function(n){return t.decrementQty(e)}}}),n("span",{staticClass:"text-weight-medium text-md"},[t._v(t._s(e.quantity))]),n("q-btn",{staticStyle:{cursor:"pointer"},attrs:{flat:"",round:"",icon:"add_circle_outline",size:"24"},on:{click:function(n){return t.incrementQty(e)}}})],1)])])],1)})),1)],1):t._e(),t.carts.length?t._e():n("div",{staticClass:"column items-center"},[n("p",{staticClass:"text-grey-8 text-weight-bold text-center"},[t._v("Keranjang belanja anda masih kosong!")]),n("q-btn",{attrs:{unelevated:"",to:{name:"ProductIndex"},rounded:"","text-color":"white",color:"primary",icon:"keyboard_backspace",label:"kembali berbelanja","no-caps":""}})],1),n("q-dialog",{attrs:{persistent:""},model:{value:t.directCheckoutModal,callback:function(e){t.directCheckoutModal=e},expression:"directCheckoutModal"}},[n("div",{staticStyle:{width:"100%","max-width":"430px"}},[n("direct-checkout-block",{on:{close:function(e){t.directCheckoutModal=!1}}})],1)]),n("q-dialog",{attrs:{persistent:"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.loginModal,callback:function(e){t.loginModal=e},expression:"loginModal"}},[n("login-block",{on:{onResponse:t.onResponse,onClose:function(e){t.loginModal=!1}}})],1),t.carts.length?n("q-footer",{staticClass:"bg-white q-pa-md"},[n("div",{staticClass:"q-pb-sm row text-right justify-end"},[n("table",{staticClass:"text-green-7 text-weight-medium",staticStyle:{"font-size":"17px"}},[n("tr",[n("td",{attrs:{align:"right"}},[t._v("Total Order")]),n("td",[t._v(":")]),n("th",[t._v(t._s(t.moneyIDR(t.total())))])])])]),t.isCanChekout?n("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"primary","no-caps":""},on:{click:t.checkout}},[n("svg",{attrs:{"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",height:"20",width:"20",id:"svg2",version:"1.1"}},[n("defs",{attrs:{id:"defs6"}}),n("path",{staticStyle:{fill:"currentColor","stroke-width":"0.24390244"},attrs:{id:"path817",d:"M 6.829268,18.2927 C 6.206549,17.66998 6.208549,16.962199 6.834768,16.335948 7.295075,15.87564 7.299158,15.833489 6.895748,15.70635 4.7751346,15.038014 4.5526598,14.587213 4.3890898,10.627041 4.2795602,7.9752375 4.1370612,7.0800955 3.5418488,5.3048955 L 2.8262839,3.1707495 H 1.7964173 C 0.8348259,3.1707495 0,2.7173665 0,2.1951395 c 0,-0.557993 0.8368698,-0.97561 1.9550402,-0.97561 1.8447535,0 2.2088159,0.47497 3.7390088,4.878049 l 1.313822,3.780488 h 4.072009 4.072008 l 1.485653,-3.353659 1.485657,-3.353658 h 0.9384 c 0.516122,0 0.938402,0.04665 0.938402,0.103676 0,0.355734 -3.738563,8.3325965 -3.976041,8.4835585 -0.160739,0.102181 -2.405057,0.187463 -4.987374,0.189518 l -4.695122,0.0037 v 0.827563 c 0,0.529633 0.138893,0.880862 0.385803,0.97561 0.21219,0.08143 2.517068,0.148046 5.121951,0.148046 h 4.736149 v 0.97561 c 0,0.813008 -0.0813,0.97561 -0.487805,0.97561 h -0.487805 l 0.487805,0.487805 c 0.268293,0.268292 0.487805,0.707317 0.487805,0.975609 0,0.268293 -0.219512,0.707317 -0.487805,0.97561 -0.268293,0.268293 -0.707317,0.487805 -0.97561,0.487805 -0.628185,0 -1.463414,-0.835228 -1.463414,-1.463415 0,-0.268292 0.219512,-0.707317 0.487804,-0.975609 l 0.487805,-0.487805 H 11.463415 8.292683 l 0.487805,0.487805 c 0.268292,0.268292 0.487805,0.707317 0.487805,0.975609 0,0.628187 -0.83523,1.463415 -1.463415,1.463415 -0.268293,0 -0.707317,-0.219512 -0.97561,-0.487805 z M 8.04878,17.31709 c 0,-0.134146 -0.109756,-0.243902 -0.243902,-0.243902 -0.134146,0 -0.243902,0.109756 -0.243902,0.243902 0,0.134146 0.109756,0.243903 0.243902,0.243903 0.134146,0 0.243902,-0.109757 0.243902,-0.243903 z m 7.317074,0 c 0,-0.134146 -0.109756,-0.243902 -0.243903,-0.243902 -0.134146,0 -0.243902,0.109756 -0.243902,0.243902 0,0.134146 0.109756,0.243903 0.243902,0.243903 0.134147,0 0.243903,-0.109757 0.243903,-0.243903 z M 11.707317,6.0339515 V 5.1219685 H 9.756098 7.804878 v -0.97561 -0.975609 h 1.95122 1.951219 v -0.911983 -0.911983 l 1.399788,1.399788 1.399788,1.399787 -1.399788,1.399788 -1.399788,1.399788 z"}})]),n("span",{staticClass:"q-ml-sm"},[t._v("\n        Checkout Sekarang\n      ")])]):t._e(),t.isCanCheckoutWhatsapp?n("q-btn",{staticClass:"full-width q-mt-sm",attrs:{outline:"",unelevated:"",color:"green-6","no-caps":""},on:{click:t.directCheckout}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 50 50",width:"20px",height:"20px"}},[n("g",{attrs:{id:"surface1441897"}},[n("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"currentColor","fill-opacity":"1"},attrs:{d:"M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 28.960938 3.023438 32.855469 4.964844 36.289062 L 2.035156 46.730469 C 1.941406 47.074219 2.035156 47.441406 2.28125 47.695312 C 2.472656 47.894531 2.734375 48 3 48 C 3.078125 48 3.160156 47.988281 3.238281 47.972656 L 14.136719 45.273438 C 17.464844 47.058594 21.210938 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 36.570312 33.117188 C 36.078125 34.476562 33.71875 35.722656 32.585938 35.886719 C 31.566406 36.035156 30.277344 36.101562 28.863281 35.65625 C 28.007812 35.386719 26.90625 35.027344 25.496094 34.429688 C 19.574219 31.902344 15.707031 26.011719 15.410156 25.625 C 15.117188 25.234375 13 22.464844 13 19.59375 C 13 16.726562 14.523438 15.3125 15.066406 14.730469 C 15.609375 14.144531 16.246094 14 16.640625 14 C 17.035156 14 17.429688 14.003906 17.773438 14.019531 C 18.136719 14.039062 18.625 13.882812 19.101562 15.023438 C 19.59375 16.191406 20.777344 19.058594 20.921875 19.351562 C 21.070312 19.644531 21.167969 19.984375 20.972656 20.375 C 20.777344 20.761719 20.679688 21.007812 20.382812 21.347656 C 20.085938 21.6875 19.761719 22.105469 19.496094 22.367188 C 19.199219 22.660156 18.894531 22.976562 19.238281 23.558594 C 19.582031 24.144531 20.765625 26.050781 22.523438 27.597656 C 24.777344 29.585938 26.679688 30.199219 27.269531 30.492188 C 27.859375 30.785156 28.203125 30.734375 28.550781 30.347656 C 28.894531 29.957031 30.023438 28.644531 30.417969 28.058594 C 30.8125 27.476562 31.203125 27.574219 31.746094 27.769531 C 32.289062 27.960938 35.191406 29.371094 35.78125 29.664062 C 36.371094 29.957031 36.765625 30.101562 36.914062 30.34375 C 37.0625 30.585938 37.0625 31.753906 36.570312 33.117188 Z M 36.570312 33.117188 "}})])]),n("span",{staticClass:"q-ml-sm"},[t._v("\n        Order Via Whatsapp\n      ")])]):t._e()],1):t._e()],1)},a=[],i=n("ded3"),r=n.n(i),o=(n("159b"),n("13d5"),n("2f62")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-form",{on:{submit:function(e){return e.preventDefault(),t.submitOrder(e)}}},[n("q-card",{staticClass:"full-width"},[n("div",{staticClass:"text-weight-bold q-py-sm q-px-md bg-green-6 text-white text-md"},[t._v("Checkout Whatsapp")]),n("q-card-section",[n("q-input",{attrs:{dense:"",label:"Nama Anda*",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},model:{value:t.form.customer_name,callback:function(e){t.$set(t.form,"customer_name",e)},expression:"form.customer_name"}}),n("q-input",{attrs:{dense:"",label:"Nomor Whatsapp*",placeholder:"081234567890",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},model:{value:t.form.customer_whatsapp,callback:function(e){t.$set(t.form,"customer_whatsapp",e)},expression:"form.customer_whatsapp"}}),n("q-input",{attrs:{dense:"",label:"Alamat",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),n("div",{staticClass:"q-pa-sm bg-grey-2 q-mt-sm",domProps:{innerHTML:t._s(t.cartFormat)}})],1),n("q-card-actions",{staticClass:"justify-end q-pa-md"},[n("q-btn",{attrs:{unelevated:"",color:"grey-3","text-color":"green-7",type:"button",disabled:t.loading,label:"Batal","no-caps":""},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}}),n("q-btn",{attrs:{type:"submit",loading:t.loading,disabled:!t.canDirectCheckout,unelevated:"",label:"Order Sekarang",color:"green-6","no-caps":""}})],1)],1)],1),n("q-dialog",{model:{value:t.errorModal,callback:function(e){t.errorModal=e},expression:"errorModal"}},[n("q-card",[n("q-card-section",[n("div",{staticClass:"text-md"},[t._v("Error")]),n("div",{staticClass:"q-mt-sm"},[t._v("\n          Silahkan masukkan nomor whatsapp yang benar.\n        ")]),n("div",{staticClass:"q-mt-md flex justify-end"},[n("q-btn",{attrs:{label:"OK",color:"blue-7",unelevated:"",flat:""},on:{click:function(e){t.errorModal=!1}}})],1)])],1)],1)],1)},l=[],u=(n("99af"),n("b0c0"),n("ac1f"),n("5319"),n("2ca0"),{name:"CartBlock",data:function(){return{loading:!1,cartFormat:"",errorModal:!1,form:{customer_name:"",customer_whatsapp:"",address:""}}},computed:r()(r()({},Object(o["e"])({config:function(t){return t.config},shop:function(t){return t.shop},carts:function(t){return t.cart.carts}})),{},{session_id:function(){return this.$store.state.session_id},canDirectCheckout:function(){return!!(this.carts.length&&this.form.customer_name&&this.form.customer_whatsapp&&this.form.address&&this.shop.phone)}}),mounted:function(){var t=this;if(this.carts.length){var e="Pesanan Anda:<br>";this.carts.forEach((function(n){e+="<b>".concat(n.quantity,"x</b> ").concat(n.name,"<br/> (@) ").concat(t.moneyIDR(n.price),"<br>")})),e+="<br><b>Total = ".concat(this.moneyIDR(this.sumTotal()),"</b>"),this.cartFormat=e}},methods:{submitOrder:function(){var t=this;if(this.checkInputPhone(),this.canDirectCheckout){var e="Halo kak, saya mau order:\n\n",n="https://api.whatsapp.com",s=this.formatPhoneNumber(this.shop.phone),a=this.carts,i=1;a.forEach((function(n){e+="*".concat(i,". ").concat(n.name,"*\nJumlah: ").concat(n.quantity,"\nHarga (@): ").concat(t.moneyIDR(n.price),"\nHarga Total: ").concat(t.moneyIDR(n.quantity*n.price),"\n\n"),i++})),e+="Total: *".concat(this.moneyIDR(this.sumTotal()),"*\n------------------------\n\n*Nama:*\n ").concat(this.form.customer_name," (").concat(this.form.customer_whatsapp,")\n\n*Alamat:*\n").concat(this.form.address,"\n\n");var r=n+"/send?phone="+s+"&text="+encodeURI(e);setTimeout((function(){t.$emit("close")}),7e3),setTimeout((function(){t.$store.dispatch("cart/clearCart",t.session_id)}),2e4),window.open(r,"_blank")}},sumQty:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(e){t.push(e.quantity)})),t.reduce((function(t,e){return t+e}))}return this.carts[0].quantity},sumSubtotal:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(e){t.push(e.quantity*e.price)})),t.reduce((function(t,e){return t+e}))}return this.carts[0].quantity*this.carts[0].price},sumWeight:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(e){t.push(e.weight*e.quantity)})),t.reduce((function(t,e){return t+e}))}return this.carts[0].quantity*this.carts[0].weight},sumTotal:function(){return this.sumSubtotal()},formatPhoneNumber:function(t){var e=t.replace(/\D/g,"");return e.startsWith("0")&&(e="62"+e.substr(1)),e},checkInputPhone:function(){this.form.customer_whatsapp=this.form.customer_whatsapp.replace(/\D/g,""),this.checkPhoneNumber(this.form.customer_whatsapp)||(this.$q.dialog({message:"Silahkan masukkan nomor whatsapp yang benar."}),this.form.customer_whatsapp="")},checkPhoneNumber:function(t){if(t.length>9&&(t.startsWith("08")||t.startsWith("628")))return!0},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}}}),d=u,m=n("2877"),h=n("0378"),p=n("f09f"),f=n("a370"),g=n("27f9"),b=n("4b7e"),y=n("9c40"),C=n("24e8"),_=n("eebe"),v=n.n(_),k=Object(m["a"])(d,c,l,!1,null,null,null),w=k.exports;v()(k,"components",{QForm:h["a"],QCard:p["a"],QCardSection:f["a"],QInput:g["a"],QCardActions:b["a"],QBtn:y["a"],QDialog:C["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"bg-white",staticStyle:{"max-width":"420px",width:"100%"},attrs:{flat:""}},[n("div",{staticClass:"q-py-sm q-px-md row justify-between items-center"},[n("div",{staticClass:"text-md text-weight-bold text-grey-8"},[t._v(t._s(t.isRegister?"Register":"Login"))]),n("q-btn",{attrs:{icon:"close",round:"",flat:"",padding:"xs"},on:{click:function(e){return e.preventDefault(),t.onClose(e)}}})],1),n("q-separator"),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"70vh"}},[n("q-form",{staticClass:"q-gutter-y-xs",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t.isRegister?[n("q-input",{attrs:{color:"grey-6",label:"Nama Anda *",dense:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"account_circle"}})]},proxy:!0}],null,!1,3991180320),model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),n("q-input",{attrs:{color:"grey-6",label:"Alamat email *",dense:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"email"}})]},proxy:!0}],null,!1,3271653952),model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),n("q-input",{attrs:{color:"grey-6",label:"No Ponsel / Whatsapp *",dense:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"phone"}})]},proxy:!0}],null,!1,2596585552),model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})]:t._e(),t.isRegister?t._e():[n("q-input",{attrs:{color:"grey-6",label:"Alamat email *",dense:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"email"}})]},proxy:!0}],null,!1,3271653952),model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],n("q-input",{attrs:{label:"Password *",color:"grey-6",type:t.isPwd?"password":"text",dense:"",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t.isRegister?[n("q-input",{attrs:{label:"Konfirmasi Password *",color:"grey-6",type:t.isPwd?"password":"text",dense:"",rules:[function(t){return t&&t.length>0||"Wajib diisi"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}],null,!1,3050512400),model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})]:t._e(),n("div",{staticClass:"column q-gutter-y-sm"},[n("q-btn",{attrs:{loading:t.isLoading,type:"submit",color:"primary",padding:"sm lg"}},[t._v(t._s(t.isRegister?"Daftar":"Login"))])],1)],2),n("div",{staticClass:"column q-gutter-y-sm text-center q-mt-xs"},[t.isRegister?n("div",[t._v("Sudah punya akun "),n("q-btn",{attrs:{"no-caps":"",color:"green-7",padding:"xs",flat:"",disabled:t.isLoading,label:"Login Disini"},on:{click:function(e){t.formType="login"}}})],1):t._e(),t.isRegister?t._e():n("div",[n("div",[t._v("\n          Belum punya akun "),n("q-btn",{attrs:{"no-caps":"",color:"green-7",padding:"xs",flat:"",disabled:t.isLoading,label:"Daftar Disini"},on:{click:function(e){t.formType="register"}}})],1),n("div",[n("q-btn",{attrs:{"no-caps":"",color:"green-7",padding:"xs",flat:"",disabled:t.isLoading,label:"Lupa password?",to:{name:"ForgotPassword"}}})],1)])])],1)],1)},x=[],S=(n("d3b7"),n("e6cf"),n("a79d"),n("758b")),I={data:function(){return{isLoading:!1,isPwd:!0,loading:!1,formType:"login",form:{name:"",email:"",password:"",phone:"",password_confirmation:"",device_name:"APP"}}},computed:{isRegister:function(){return"register"==this.formType}},methods:{onClose:function(){this.$emit("onClose")},submit:function(){var t=this;this.isLoading=!0,"login"==this.formType&&Object(S["a"])().post("user/login",this.form).then((function(e){200==e.status&&(t.$store.commit("user/SET_USER",e.data.results),localStorage.setItem("API_TOKEN",e.data.token)),t.$emit("onResponse",!0)})).finally((function(){t.isLoading=!1})),"register"==this.formType&&Object(S["a"])().post("user/register",this.form).then((function(e){201==e.status&&(t.$store.commit("user/SET_USER",e.data.results),localStorage.setItem("API_TOKEN",e.data.token),t.$emit("onResponse",!0))})).finally((function(){t.isLoading=!1}))}}},D=I,Q=n("eb85"),P=n("0016"),$=Object(m["a"])(D,q,x,!1,null,null,null),j=$.exports;v()($,"components",{QCard:p["a"],QBtn:y["a"],QSeparator:Q["a"],QCardSection:f["a"],QForm:h["a"],QInput:g["a"],QIcon:P["a"]});var R={name:"CartPage",components:{DirectCheckoutBlock:w,LoginBlock:j},data:function(){return{loginModal:!1,checkoutDemoModal:!1,directCheckoutModal:!1,discount:0,currentOrder:null}},computed:r()(r()({},Object(o["e"])({carts:function(t){return t.cart.carts},shop:function(t){return t.shop},config:function(t){return t.config},user:function(t){return t.user.user}})),{},{session_id:function(){return this.$store.state.session_id},isCanChekout:function(){return!!(this.carts.length&&this.config&&this.config.can_shipping)&&!(!this.config.is_tripay_ready&&!this.config.is_bank_ready)},isCanCheckoutDirectWithShipping:function(){return!!(this.carts.length&&this.shop.phone&&this.config&&this.config.can_shipping)},isCanCheckoutWhatsapp:function(){return!!(this.config&&this.config.is_whatsapp_checkout&&this.shop.phone)}}),created:function(){this.shop||this.$store.dispatch("getShop")},methods:{onResponse:function(t){!0===t&&(this.loginModal=!1,this.checkout())},checkout:function(){this.config.is_guest_checkout||this.user?this.$router.push({name:"Checkout"}):this.loginModal=!0},directCheckout:function(){this.isCanCheckoutDirectWithShipping?this.$router.push({name:"CheckoutWithShipping"}):this.directCheckoutModal=!0},incrementQty:function(t){if(!(parseInt(t.quantity)>=parseInt(t.product_stock))){var e=parseInt(t.quantity)+1;this.session_id&&this.$store.dispatch("cart/updateCart",{sku:t.sku,quantity:e,session_id:this.session_id})}},decrementQty:function(t){if(!(parseInt(t.quantity)<=1)){var e=parseInt(t.quantity)-1;this.session_id&&this.$store.dispatch("cart/updateCart",{sku:t.sku,quantity:e,session_id:this.session_id})}},subtotal:function(){if(this.carts.length>1){var t=[];return this.carts.forEach((function(e){t.push(e.quantity*e.price)})),t.reduce((function(t,e){return t+e}))}return this.carts[0].quantity*this.carts[0].price},total:function(){return this.subtotal()},removeCart:function(t){this.$store.dispatch("cart/removeCart",{sku:t.sku,session_id:t.session_id})},money:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}},meta:function(){return{title:"Keranjang Belanja"}}},M=R,T=n("9989"),W=n("e359"),L=n("65c6"),E=n("6ac5"),O=n("1c1c"),N=n("66e5"),z=n("4074"),B=n("068f"),A=n("7ff0"),F=Object(m["a"])(M,s,a,!1,null,null,null);e["default"]=F.exports;v()(F,"components",{QPage:T["a"],QHeader:W["a"],QToolbar:L["a"],QBtn:y["a"],QToolbarTitle:E["a"],QList:O["a"],QItem:N["a"],QItemSection:z["a"],QImg:B["a"],QDialog:C["a"],QFooter:A["a"]})}}]);
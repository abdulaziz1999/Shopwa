(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"2cee":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pb-xl",class:{"flex flex-center":!t.sliders.available}},[a("q-header",[a("q-toolbar",[a("q-btn",{attrs:{to:{name:"Settings"},flat:"",round:"",dense:"",icon:"arrow_back"}}),a("q-toolbar-title",[t._v("\n       Slider Banner\n      ")]),a("q-btn",{staticClass:"gt-xs",attrs:{flat:"",icon:"add_circle",label:"Tambah Slider","no-caps":""},on:{click:t.handleBtnUpload}})],1)],1),a("div",{staticClass:"q-pa-sm text-xs text-grey-8 bg-yellow-2",class:t.sliders.data.length?"relative":"absolute-top"},[a("div",[t._v("Note")]),a("div",[t._v("Untuk hasil terbaik, Gunakan gambar dengan ukuran yang sama.")])]),a("input",{ref:"image",staticClass:"hidden",attrs:{type:"file"},on:{change:t.handleFileUpload}}),t.sliders.available?[a("div",{staticClass:"q-py-md"},[a("q-list",{attrs:{separator:""}},t._l(t.sliders.data,(function(e){return a("q-item",{key:e.id},[a("q-item-section",{attrs:{top:"",avatar:""}},[a("img",{staticClass:"shadow-4 q-pa-xs bg-white",staticStyle:{width:"100px",height:"70px","object-fit":"cover"},attrs:{src:e.src}})]),a("q-item-section",{attrs:{top:""}},[a("div",{staticClass:"q-mb-xs"},[t._v("Urutan Tamplian")]),a("div",{staticClass:"row q-gutter-sm items-center"},[a("q-btn",{staticClass:"bg-blue-grey-1",attrs:{icon:"remove",size:"xs",unelevated:"",round:""},on:{click:function(a){return t.decre(e)}}}),a("span",[t._v(t._s(e.weight))]),a("q-btn",{staticClass:"bg-blue-grey-1",attrs:{icon:"add",size:"xs",round:"",unelevated:""},on:{click:function(a){return t.incre(e)}}})],1)]),a("q-item-section",{attrs:{center:"",side:""}},[a("q-btn",{attrs:{size:"sm",round:"",icon:"delete",glossy:"",color:"red"},on:{click:function(a){return t.remove(e.id)}}})],1)],1)})),1)],1)]:[a("div",[t._v("Tidak ada data")])],a("q-inner-loading",{attrs:{showing:!t.sliders.ready}},[a("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1),a("q-page-sticky",{staticClass:"lt-sm",attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"add",color:"primary",glossy:""},on:{click:t.handleBtnUpload}})],1)],2)},n=[],s=a("ded3"),o=a.n(s),r=a("758b"),l=a("2f62"),c={data:function(){return{timeout:null,uploadPercentage:0}},computed:o()({},Object(l["e"])({sliders:function(t){return t.slider.sliders},loading:function(t){return t.loading}})),mounted:function(){this.sliders.data.length||this.getSliders()},methods:o()(o()({},Object(l["b"])("slider",["removeSlider","getSliders","updateSliderWeight"])),{},{changeWeight:function(t,e){this.updateSliderWeight({value:t,id:e})},incre:function(t){this.changeWeight(t.weight+1,t.id)},decre:function(t){t.weight<=1||this.changeWeight(t.weight-1,t.id)},remove:function(t){var e=this;this.$q.dialog({title:"Konfirmasi Penghapusan Item",message:"Yakin akan menghapus data ini?",ok:{label:"Hapus",flat:!0,"no-caps":!0},cancel:{label:"Batal",flat:!0,"no-caps":!0}}).onOk((function(){e.removeSlider(t)})).onCancel((function(){console.log("Cancel")})).onDismiss((function(){}))},handleBtnUpload:function(){this.$refs.image.click()},handleFileUpload:function(){var t=this,e=this;e.$store.commit("slider/SET_DATA_STATUS",!1);var a=new FormData;a.append("image",this.$refs.image.files[0]),Object(r["a"])().post("sliders",a,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){t.uploadPercentage=parseInt(Math.round(e.loaded/e.total*100))}}).then((function(t){e.getSliders()})).catch((function(t){console.log("FAILURE!!"),e.$store.commit("slider/SET_DATA_STATUS",!0)}))}})},d=c,u=(a("8322"),a("2877")),g=a("9989"),p=a("e359"),h=a("65c6"),m=a("9c40"),f=a("6ac5"),b=a("1c1c"),v=a("66e5"),q=a("4074"),k=a("27f9"),S=a("74f7"),w=a("e669"),y=a("de5e"),_=a("eebe"),x=a.n(_),T=Object(u["a"])(d,i,n,!1,null,"ee336522",null);e["default"]=T.exports;x()(T,"components",{QPage:g["a"],QHeader:p["a"],QToolbar:h["a"],QBtn:m["a"],QToolbarTitle:f["a"],QList:b["a"],QItem:v["a"],QItemSection:q["a"],QInput:k["a"],QInnerLoading:S["a"],QSpinnerFacebook:w["a"],QPageSticky:y["a"]})},"540b":function(t,e,a){},8322:function(t,e,a){"use strict";a("540b")}}]);
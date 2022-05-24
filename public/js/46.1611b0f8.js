(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"826c":function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"q-pb-xl"},[t("q-header",[t("q-toolbar",[t("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),t("q-toolbar-title",[a._v("\n       Tambah Produk\n      ")])],1)],1),t("q-form",{on:{submit:function(e){return e.preventDefault(),a.submit(e)}}},[t("div",{staticClass:"q-pa-md q-gutter-y-sm"},[t("q-input",{attrs:{filled:"",type:"text",label:"Nama Produk",rules:a.requiredRules},model:{value:a.form.title,callback:function(e){a.$set(a.form,"title",e)},expression:"form.title"}}),a.errors.title?t("div",{staticClass:"text-xs text-red"},[a._v(" "+a._s(a.errors.title[0]))]):a._e(),t("div",{staticClass:"row items-center q-gutter-x-sm"},[t("div",{staticClass:"col"},[t("q-input",{attrs:{filled:"",mask:"#########",label:"Harga",rules:a.requiredRules},model:{value:a.form.price,callback:function(e){a.$set(a.form,"price",e)},expression:"form.price"}})],1),t("div",{staticClass:"col"},[t("q-input",{attrs:{filled:"",mask:"#####",label:"Stok",rules:a.requiredRules},model:{value:a.form.stock,callback:function(e){a.$set(a.form,"stock",e)},expression:"form.stock"}})],1),t("div",{staticClass:"col"},[t("q-input",{attrs:{filled:"",mask:"#####",label:"Berat",suffix:"gram",rules:[function(a){return a&&a>49||"Berat harus diisi min 50 gram"}]},model:{value:a.form.weight,callback:function(e){a.$set(a.form,"weight",e)},expression:"form.weight"}})],1)]),t("q-select",{staticClass:"q-pb-md",attrs:{filled:"",options:a.categories,label:"Kategori","emit-value":"","map-options":""},model:{value:a.form.category_id,callback:function(e){a.$set(a.form,"category_id",e)},expression:"form.category_id"}}),t("div",{staticClass:"q-mt-md q-mb-sm"},[t("label",{staticClass:"text-grey-7 q-pb-sm block",attrs:{for:"description"}},[a._v("Deskripsi")]),t("q-editor",{model:{value:a.form.description,callback:function(e){a.$set(a.form,"description",e)},expression:"form.description"}}),a.errors.description?t("div",{staticClass:"text-xs text-red"},[a._v(" "+a._s(a.errors.description[0]))]):a._e()],1),t("section",{staticClass:"q-my-lg q-gutter-y-sm",attrs:{id:"image-section"}},[t("div",[t("q-btn",{staticClass:"mt-2 mr-2",attrs:{label:"Upload Gambar Produk",size:"sm",color:"primary",icon:"upload",type:"button"},on:{click:function(e){return e.preventDefault(),a.selectNewImage(e)}}})],1),t("input",{ref:"image",staticClass:"hidden",attrs:{type:"file",multiple:""},on:{change:a.updateImagePreview}}),a.imagePreview.length?t("q-list",{staticClass:"q-mt-md",attrs:{separator:""}},[t("q-item",{attrs:{dense:""}},[t("q-item-section",[a._v("\n                      Gambar Utama\n                    ")])],1),a._l(a.imagePreview,(function(e,i){return t("q-item",{key:i},[t("q-item-section",[t("img",{staticClass:"bg-white",staticStyle:{width:"100px",height:"70px","object-fit":"contain"},attrs:{src:e}})]),t("q-item-section",{attrs:{side:""}},[t("q-btn",{attrs:{size:"sm",round:"",icon:"delete",glossy:"",color:"red"},on:{click:function(e){return e.preventDefault(),a.removeImage(i)}}})],1)],1)}))],2):a._e()],1)],1),t("div",{attrs:{id:"variants"}},[t("div",{staticClass:"row items-center justify-between q-mt-xl q-pa-md bg-green-1"},[t("div",{staticClass:"text-md2 text-weight-medium"},[a._v("Produk Variasi")]),a.canAddVarian?t("q-btn",{attrs:{label:"Tambah Variasi",color:"accent",size:"12px"},on:{click:function(e){a.varianModal=!0}}}):a._e()],1),a.form.varians.length?t("div",[a.form.varians[0].has_subvarian?t("div",a._l(a.form.varians,(function(e,i){return t("div",{key:i},[t("div",{staticClass:"row items-start justify-between bg-grey-2 q-pa-md q-pt-lg"},[t("div",{staticClass:"text-weight-bold text-md"},[a._v(a._s(a.form.varians[i].label)+" "+a._s(a.form.varians[i].value))]),t("div",{staticClass:"q-gutter-x-sm"},[t("q-btn",{attrs:{unelevated:"",size:"10px",color:"red"},on:{click:function(e){return a.deleteVarian(i)}}},[a._v("Hapus "+a._s(a.form.varians[i].value))]),t("q-btn",{attrs:{unelevated:"",size:"10px",color:"teal"},on:{click:function(e){return a.pushSubVarian(i)}}},[a._v("Tambah Item")])],1)]),t("div",{},[a.form.varians[i].subvarian.length?t("q-list",{staticClass:"bg-white q-pa-sm q-mt-xs"},a._l(a.form.varians[i].subvarian,(function(e,r){return t("q-item",{key:r,staticClass:"q-px-sm"},[t("q-item-section",{attrs:{side:""}},[t("q-btn",{attrs:{round:"",unelevated:"",padding:"2px",icon:"remove",size:"9px",color:"red"},on:{click:function(e){return a.deleteSubvarian(i,r)}}})],1),t("q-item-section",[t("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:a.form.varians[i].subvarian[r].label},model:{value:a.form.varians[i].subvarian[r].value,callback:function(e){a.$set(a.form.varians[i].subvarian[r],"value",e)},expression:"form.varians[varIndex].subvarian[subIndex].value"}})],1),t("q-item-section",[t("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Tambahan Harga",mask:"###########"},model:{value:a.form.varians[i].subvarian[r].price,callback:function(e){a.$set(a.form.varians[i].subvarian[r],"price",e)},expression:"form.varians[varIndex].subvarian[subIndex].price"}})],1),t("q-item-section",[t("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Stok",mask:"#######"},model:{value:a.form.varians[i].subvarian[r].stock,callback:function(e){a.$set(a.form.varians[i].subvarian[r],"stock",e)},expression:"form.varians[varIndex].subvarian[subIndex].stock"}})],1)],1)})),1):a._e()],1)])})),0):t("div",[t("div",{staticClass:"row items-start justify-between bg-grey-2 q-pa-md q-pt-lg"},[t("div",{staticClass:"text-weight-bold text-md"},[a._v(a._s(a.form.varians[0].label)+" ")]),t("div",{staticClass:"q-gutter-x-sm"},[t("q-btn",{attrs:{unelevated:"",size:"10px",color:"teal"},on:{click:a.pushVarian}},[a._v("Tambah Item")])],1)]),t("q-list",[t("q-list",{staticClass:"bg-white q-pa-sm q-mt-xs"},a._l(a.form.varians,(function(e,i){return t("q-item",{key:i},[t("q-item-section",{attrs:{side:""}},[t("q-btn",{attrs:{round:"",unelevated:"",padding:"2px",icon:"remove",size:"9px",color:"red"},on:{click:function(e){return a.deleteVarian(i)}}})],1),t("q-item-section",[t("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:a.form.varians[i].label},model:{value:a.form.varians[i].value,callback:function(e){a.$set(a.form.varians[i],"value",e)},expression:"form.varians[vIndex].value"}})],1),t("q-item-section",[t("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Tambahan Harga",mask:"###########"},model:{value:a.form.varians[i].price,callback:function(e){a.$set(a.form.varians[i],"price",e)},expression:"form.varians[vIndex].price"}})],1),t("q-item-section",[t("q-input",{attrs:{"stack-label":"",filled:"",square:"",required:"",dense:"",label:"Stok",mask:"######"},model:{value:a.form.varians[i].stock,callback:function(e){a.$set(a.form.varians[i],"stock",e)},expression:"form.varians[vIndex].stock"}})],1)],1)})),1)],1)],1)]):a._e()]),t("q-footer",[t("q-btn",{staticClass:"full-width",attrs:{type:"submit",loading:a.loading,label:"Simpan Data"}},[t("q-tooltip",{staticClass:"bg-accent"},[a._v("Simpan Data")])],1)],1)],1),t("q-dialog",{model:{value:a.varianModal,callback:function(e){a.varianModal=e},expression:"varianModal"}},[t("q-card",{staticClass:"card-medium"},[t("div",{staticClass:"card-heading"},[a._v("Tambah varian")]),t("q-form",{on:{submit:function(e){return e.preventDefault(),a.addVarianProduk(e)}}},[t("q-card-section",[t("div",[t("div",{staticClass:"text-md"},[a._v("Varian")]),t("q-input",{attrs:{label:"Label",placeholder:"contoh: Ukuran"},model:{value:a.tempVarian.label,callback:function(e){a.$set(a.tempVarian,"label",e)},expression:"tempVarian.label"}}),t("q-input",{attrs:{label:"Item",placeholder:"contoh: Small, Medium, Large"},model:{value:a.tempVarian.value,callback:function(e){a.$set(a.tempVarian,"value",e)},expression:"tempVarian.value"}}),t("div",{staticClass:"text-grey-7 text-xs q-py-xs"},[a._v("Untuk multiple item, gunakan sparator koma")])],1),a.canToggleSubvarian?t("div",[t("q-checkbox",{attrs:{label:"Subvarian?"},model:{value:a.form.has_subvarian,callback:function(e){a.$set(a.form,"has_subvarian",e)},expression:"form.has_subvarian"}})],1):a._e(),a.mustHaveSubvarian?t("div",{staticClass:"q-mt-md"},[t("div",{staticClass:"text-md"},[a._v("Subvarian")]),t("q-input",{attrs:{label:"Label",placeholder:"contoh: Warna"},model:{value:a.tempSubvarian.label,callback:function(e){a.$set(a.tempSubvarian,"label",e)},expression:"tempSubvarian.label"}}),t("q-input",{attrs:{label:"Item",placeholder:"contoh: Merah, Biru, Ungu"},model:{value:a.tempSubvarian.value,callback:function(e){a.$set(a.tempSubvarian,"value",e)},expression:"tempSubvarian.value"}}),t("div",{staticClass:"text-grey-7 text-xs q-py-xs"},[a._v("Untuk multiple item, gunakan sparator koma")])],1):a._e(),t("div",{staticClass:"flex justify-end q-mt-md q-gutter-sm"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Tutup",flat:"",color:"primary"}}),t("q-btn",{attrs:{unelevated:"",label:"Tambah",type:"submit",color:"primary"}})],1)])],1)],1)],1)],1)},r=[],s=t("ded3"),n=t.n(s),l=(t("a434"),t("ac1f"),t("1276"),t("159b"),t("a4d3"),t("e01a"),t("4de4"),t("2f62")),o={name:"ProductFormCreate",data:function(){return{varianModal:!1,tempVarian:{label:"",value:""},tempSubvarian:{label:"",value:"",stock:"",price:"",items:"",sku:""},requiredRules:[function(a){return a&&a.length>0||"Field harus diisi."}],form:{title:"",price:"",weight:"",stock:"",description:"",category_id:"",varians:[],images:[],sku:"",has_subvarian:!1},imagePreview:[],variantModalForm:!1}},computed:{errors:function(){return this.$store.state.errors},loading:function(){return this.$store.state.loading},categories:function(){return this.$store.getters["category/getValueOptions"]},canToggleSubvarian:function(){return!this.form.varians.length||!this.form.varians[0].has_subvarian},mustHaveSubvarian:function(){return!(!this.form.varians.length||!this.form.varians[0].has_varian)||!!this.form.has_subvarian},canAddVarian:function(){return!(this.form.varians.length&&!this.form.varians[0].has_subvarian)}},methods:n()(n()(n()(n()({},Object(l["b"])("product",["productStore"])),Object(l["b"])("category",["getCategories"])),Object(l["b"])("customerService",["getCustomerServices"])),{},{onUpdateImage:function(a){this.form.product_images.push(a)},onDeleteImage:function(a){this.form.product_images.splice(a,1)},onSubmitForm:function(a){this.form.variants=a,this.variantModalForm=!1},deleteVarian:function(a){var e=this;this.$q.dialog({title:"Yakin akan menghapus data?",cancel:!0}).onOk((function(){e.form.varians.splice(a,1)}))},deleteSubvarian:function(a,e){this.form.varians[a].subvarian.splice(e,1),this.form.varians[a].subvarian.length||this.form.varians.splice(a,1)},pushSubVarian:function(a){var e=this.form.varians[a],t={label:e.subvarian[0].label,value:"",stock:0,sku:this.generateSku(8),price:0};this.form.varians[a].subvarian.push(t)},pushVarian:function(){this.form.varians.push({has_subvarian:!1,label:this.form.varians[0].label,value:"",stock:0,sku:this.generateSku(8),price:0})},handleAddVarian:function(){this.varianModal=!0},addVarianProduk:function(){var a=this,e=this.tempVarian.value.split(",");this.form.has_subvarian?e.forEach((function(e){var t=null;t={has_subvarian:!0,label:a.tempVarian.label,value:e,subvarian:[]};var i=a.tempSubvarian.value.split(",");i.forEach((function(e){var i={label:a.tempSubvarian.label,value:e,stock:0,sku:a.generateSku(13),price:0};t.subvarian.push(i)})),a.form.varians.push(t)})):e.forEach((function(e){var t=null;t={has_subvarian:!1,label:a.tempVarian.label,value:e,stock:0,sku:a.generateSku(12),price:0},a.form.varians.push(t)})),this.varianModal=!1},submit:function(){var a=new FormData;a.append("title",this.form.title),a.append("price",this.form.price),a.append("weight",this.form.weight),a.append("sku",this.generateSku()),a.append("has_subvarian",this.form.has_subvarian),a.append("stock",this.form.stock),a.append("description",this.form.description),this.form.category_id&&a.append("category_id",this.form.category_id),this.form.varians.length>0&&a.append("varians",JSON.stringify(this.form.varians));for(var e=0;e<this.form.images.length;e++){var t=this.form.images[e];a.append("images["+e+"]",t)}this.productStore(a)},selectNewImage:function(){this.$refs.image.click()},updateImagePreview:function(){for(var a=this,e=this.$refs.image.files,t=0;t<e.length;t++){this.form.images.push(e[t]);var i=new FileReader;i.onload=function(e){a.imagePreview.push(e.target.result)},i.readAsDataURL(e[t])}},removeImage:function(a){this.imagePreview=this.imagePreview.filter((function(e,t){return t!==a})),this.form.images=this.form.images.filter((function(e,t){return t!==a}))}}),mounted:function(){this.getCategories()}},u=o,c=t("2877"),m=t("9989"),v=t("e359"),d=t("65c6"),f=t("9c40"),p=t("6ac5"),b=t("0378"),h=t("27f9"),g=t("ddd8"),q=t("d66b"),k=t("1c1c"),x=t("66e5"),_=t("4074"),C=t("7ff0"),w=t("05c0"),S=t("24e8"),y=t("f09f"),V=t("a370"),I=t("8f8e"),$=t("2eeb"),Q=t("7f67"),P=t("eebe"),T=t.n(P),D=Object(c["a"])(u,i,r,!1,null,null,null);e["default"]=D.exports;T()(D,"components",{QPage:m["a"],QHeader:v["a"],QToolbar:d["a"],QBtn:f["a"],QToolbarTitle:p["a"],QForm:b["a"],QInput:h["a"],QSelect:g["a"],QEditor:q["a"],QList:k["a"],QItem:x["a"],QItemSection:_["a"],QFooter:C["a"],QTooltip:w["a"],QDialog:S["a"],QCard:y["a"],QCardSection:V["a"],QCheckbox:I["a"]}),T()(D,"directives",{GoBack:$["a"],ClosePopup:Q["a"]})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"731d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overflow-hidden"},[i("vue-glide",{attrs:{options:t.glideOptions}},t._l(t.datas,(function(e){return i("vue-glide-slide",{key:e.id},[i("div",{staticClass:"column full-height relative bg-white wisata-card"},[e.filename?i("q-img",{staticClass:"cursor-pointer rounded-borders",attrs:{src:e.src,ratio:"1"},on:{click:function(i){return t.openCategory(e.id)}}}):t._e()],1),i("div",{staticClass:"text-category-auto text-center q-mt-xs"},[t._v(t._s(e.title))])])})),1)],1)},s=[],a={name:"CategoryCarousel",props:{datas:Array},data:function(){return{glideOptions:{rewind:!1,perView:4,gap:12,bound:!0}}},created:function(){this.setGlideOptions()},methods:{setGlideOptions:function(){(this.datas.length<=3||window.innerWidth<360)&&(this.glideOptions.perView=3,this.glideOptions.gap=8)},openCategory:function(t){t&&this.$router.push({name:"ProductCategory",params:{id:t}})}}},o=a,r=i("2877"),d=i("068f"),l=i("eebe"),c=i.n(l),u=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=u.exports;c()(u,"components",{QImg:d["a"]})}}]);
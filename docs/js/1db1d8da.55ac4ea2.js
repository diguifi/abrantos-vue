(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1db1d8da"],{"534b":function(t,a,e){"use strict";var n=e("e0f9"),r=e.n(n);r.a},"5c28":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"row text-center"},[e("div",{staticClass:"col self-center q-ma-xl"},[e("q-card",{staticClass:"danger",attrs:{bordered:""}},[e("q-card-section",[t._v("\n        Aqui vai ficar o gráfico "),e("br"),e("ul",{staticStyle:{padding:"0"}},t._l(t.abrantos,function(a){return e("li",{key:a.id},[t._v("\n            "+t._s(a.date)+" - "+t._s(a.abrantos)+"\n          ")])}),0)])],1)],1)])},r=[],s=e("d722"),o={name:"Home",data:function(){return{isLoading:!1,abrantos:null,api:new s["a"]}},created:function(){var t=this;this.api.getAll("dailyregister").then(function(a){t.isLoading=!1,a&&(t.abrantos=a.data.dailyRegisterList,t.abrantos.forEach(function(t){var a=new Date(t.date);t.date="".concat(a.getDate(),"/").concat(new Date(a.setMonth(a.getMonth()+1)).getMonth())}))}).catch(function(a){t.isLoading=!1,a.response.data.errors?(t.errors.splice(0),t.errors=a.response.data.errors):t.$q.notify({color:"red-5",textColor:"white",icon:"fas fa-exclamation-triangle",message:a.response.data})})}},i=o,c=(e("534b"),e("2877")),d=Object(c["a"])(i,n,r,!1,null,null,null);a["default"]=d.exports},e0f9:function(t,a,e){}}]);
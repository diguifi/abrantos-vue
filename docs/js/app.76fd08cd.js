(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"isAuthenticated",function(){return J}),n.d(r,"getToken",function(){return N});var a={};n.r(a),n.d(a,"setAuthenticated",function(){return R}),n.d(a,"removeAuthenticated",function(){return D});var u={};n.r(u),n.d(u,"AUTH_REQUEST",function(){return W}),n.d(u,"AUTH_LOGOUT",function(){return Y});var o=n("967e"),c=n.n(o),i=(n("96cf"),n("fa84")),s=n.n(i),f=(n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),p=n("b05d"),l=n("4d5a"),d=n("9898"),h=n("f2cc"),m=n("c7a0"),v=n("2ea3"),b=n("65c6"),w=n("6ac5"),k=n("9c40"),g=n("0016"),y=n("497d"),x=n("6ab5"),Q=n("033f"),A=n("e208"),T=n("0378"),P=n("27f9"),S=n("9564"),I=n("f09f"),L=n("a370"),O=n("4b7e"),U=n("c1d0"),V=n("714f"),q=n("2a19");f["a"].use(p["a"],{config:{},components:{QLayout:l["a"],QHeader:d["a"],QDrawer:h["a"],QPageContainer:m["a"],QPage:v["a"],QToolbar:b["a"],QToolbarTitle:w["a"],QBtn:k["a"],QIcon:g["a"],QList:y["a"],QItem:x["a"],QItemSection:Q["a"],QItemLabel:A["a"],QForm:T["a"],QInput:P["a"],QToggle:S["a"],QCard:I["a"],QCardSection:L["a"],QCardActions:O["a"],QSlider:U["a"]},directives:{Ripple:V["a"]},plugins:{Notify:q["a"]}});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},E=[],_={name:"App"},z=_,B=n("2877"),H=Object(B["a"])(z,C,E,!1,null,null,null),$=H.exports,j=n("2f62"),G={token:localStorage.getItem("abrantostoken")||""};function J(e){return!!e.token}function N(e){return e.token}function R(e,t){e.token=t}function D(e){e.token=""}var F=n("bc3a"),K=n.n(F),M=n("d722");function W(e,t){return X.apply(this,arguments)}function X(){return X=s()(c.a.mark(function e(t,n){var r,a,u,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=new M["a"],e.next=3,r.post("authentication/login",{userNameOrEmail:n.username,password:n.password});case 3:return a=e.sent,u=a.data.accessToken,localStorage.setItem("abrantostoken",u),o="Authorization",K.a.defaults.headers.common[o]="Bearer ".concat(u),this.commit("auth/setAuthenticated",u),e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,this)})),X.apply(this,arguments)}function Y(){return Z.apply(this,arguments)}function Z(){return Z=s()(c.a.mark(function e(){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="Authorization",delete K.a.defaults.headers.common[t],localStorage.removeItem("abrantostoken"),this.commit("auth/removeAuthenticated"),this.$router.push("/login"),e.abrupt("return",!0);case 6:case"end":return e.stop()}},e,this)})),Z.apply(this,arguments)}var ee={namespaced:!0,state:G,getters:r,mutations:a,actions:u};f["a"].use(j["a"]);var te=function(){var e=new j["a"].Store({modules:{auth:ee},strict:!1});return e},ne=n("8c4f"),re=[{path:"/",component:function(){return n.e("a08eda5a").then(n.bind(null,"dead"))},children:[{path:"",name:"home",component:function(){return n.e("1db1d8da").then(n.bind(null,"5c28"))}},{path:"/add",name:"addabrantos",component:function(){return n.e("2d0af67d").then(n.bind(null,"0dd7"))}}],meta:{requiresAuth:!0}},{path:"",component:function(){return n.e("a0baf0c4").then(n.bind(null,"589e"))},children:[{path:"/login",name:"login",component:function(){return n.e("2d0e9930").then(n.bind(null,"8db0"))}},{path:"/register",name:"register",component:function(){return n.e("53326e41").then(n.bind(null,"c98e"))}},{path:"/confirm",name:"confirm",component:function(){return n.e("50b670f6").then(n.bind(null,"3c28"))}}]}];re.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var ae=re;f["a"].use(ne["a"]);var ue=function(e){var t=e.store,n=new ne["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ae,mode:"hash",base:""});return n.beforeEach(function(e,n,r){if(e.matched.some(function(e){return e.meta.requiresAuth})){var a=t.getters["auth/isAuthenticated"];if(a){var u="Authorization";if(!K.a.defaults.headers.common[u]){var o=t.getters["auth/getToken"];K.a.defaults.headers.common[u]="Bearer ".concat(o)}r()}else r({path:"/login",query:{redirect:e.fullPath}})}else r()}),n},oe=function(){var e="function"===typeof te?te({Vue:f["a"]}):te,t="function"===typeof ue?ue({Vue:f["a"],store:e}):ue;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e($)}};return{app:n,store:e,router:t}},ce=n("a925"),ie={failed:"Action failed",success:"Action was successful"},se={"en-us":ie},fe=function(){var e=s()(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.app,r=t.Vue,r.use(ce["a"]),n.i18n=new ce["a"]({locale:"en-us",fallbackLocale:"en-us",messages:se});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),pe=(n("551c"),n("06db"),function(){var e=s()(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,r=t.store,K.a.interceptors.response.use(function(e){return e},function(){var e=s()(c.a.mark(function e(t){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(401!==t.response.status){e.next=4;break}return e.next=3,r.dispatch("auth/AUTH_LOGOUT");case 3:t.response.data="Sua sessão expirou, parça";case 4:return e.abrupt("return",Promise.reject(t));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n.prototype.$axios=K.a;case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),le=(n("7f7f"),n("44c2")),de=n("8bff"),he=function(){var e=s()(c.a.mark(function e(t){var n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.use(le["a"]),n.component(de["a"].name,de["a"]);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),me=oe(),ve=me.app,be=me.store,we=me.router;function ke(){return ge.apply(this,arguments)}function ge(){return ge=s()(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[fe,pe,he],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:ve,router:we,store:be,Vue:f["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new f["a"](ve);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),ge.apply(this,arguments)}ke()},"7e6d":function(e,t,n){},d722:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n("551c"),n("06db");var r=n("fc74"),a=n.n(r),u=n("59a1"),o=n.n(u),c=n("bc3a"),i=n.n(c),s=function(){function e(){a()(this,e),this.url="https://abrantos.azurewebsites.net/api/"}return o()(e,[{key:"get",value:function(e,t){var n=this;return new Promise(function(r){r(i.a.get("".concat(n.url).concat(e,"/").concat(t)))})}},{key:"delete",value:function(e,t){var n=this;return new Promise(function(r){r(i.a.delete("".concat(n.url).concat(e,"/").concat(t)))})}},{key:"deleteList",value:function(e,t){var n=this;return new Promise(function(r){r(i.a.delete(n.url+e,t))})}},{key:"getAll",value:function(e){var t=this;return new Promise(function(n){n(i.a.get(t.url+e))})}},{key:"put",value:function(e,t,n){var r=this;return new Promise(function(a){a(i.a.put("".concat(r.url).concat(e,"/").concat(n),t))})}},{key:"post",value:function(e,t){var n=this;return new Promise(function(r){r(i.a.post(n.url+e,t))})}}]),e}()}},[[0,"runtime","vendor"]]]);
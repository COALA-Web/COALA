(function(){"use strict";var t={234:function(t,i,e){var n=e(144),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],r=e(736),o={},l=(0,r.Z)(o,a,s,!1,null,null,null),c=l.exports,u=e(345),f=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"main"},[e("navbar-view"),e("section",{staticStyle:{padding:"200px"}},[e("b-notification",{attrs:{type:"is-warning","aria-close-label":"Close notification"}},[t._v(" 알림 / 전체 공지사항 ")]),t._m(0),t._m(1),t._m(2)],1)],1)},d=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"notification is-warning"},[e("button",{staticClass:"delete"}),t._v(" 알림 ipsum dolor. "),e("strong",[t._v("Pellentesque risus mi")]),t._v(", tempus quis 이에요 fringilla. Nullam gravida purus diam, et dictum "),e("a",[t._v("felis venenatis")]),t._v(" efficitur. ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[t._v("First column")]),e("div",{staticClass:"column"},[t._v("Second column")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[t._v("First column")]),e("div",{staticClass:"column"},[t._v("Second column")])])}],p=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("b-navbar",{attrs:{centered:!0,type:"is-white"},scopedSlots:t._u([{key:"brand",fn:function(){return[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("img",{staticStyle:{"max-height":"4rem"},attrs:{src:e(730),alt:"COALA",width:"200"}})])]},proxy:!0},{key:"start",fn:function(){return[n("b-navbar-item",{attrs:{href:"#"}},[t._v(" 추천학습 ")]),n("b-navbar-item",{attrs:{href:"#"}},[t._v(" 선택학습 ")]),n("b-navbar-item",{attrs:{href:"#"}},[t._v(" 게시판 ")]),n("b-navbar-item",{attrs:{href:"#"}},[t._v(" 랭킹 ")]),n("b-navbar-item",{attrs:{href:"#"}},[t._v(" 마이페이지 ")]),n("b-navbar-dropdown",{attrs:{label:"Info"}},[n("b-navbar-item",{attrs:{href:"#"}},[t._v(" About ")]),n("b-navbar-item",{attrs:{href:"#"}},[t._v(" Contact ")])],1)]},proxy:!0},{key:"end",fn:function(){return[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-primary"},[n("strong",[t._v("Sign up")])]),n("a",{staticClass:"button is-light"},[t._v(" Log in ")])])])]},proxy:!0}])})},v=[],m={name:"navbarView",props:{msg:String}},b=m,h=(0,r.Z)(b,p,v,!1,null,null,null),g=h.exports,_={name:"MainView",components:{NavbarView:g},methods:{clickMe(){this.$buefy.notification.open("Clicked!!")}}},C=_,y=(0,r.Z)(C,f,d,!1,null,null,null),x=y.exports,w=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{attrs:{id:"wrap"}},[t._m(0),e("div",{attrs:{id:"container"}},[e("div",{staticClass:"d-box"},[e("div",{staticClass:"c_b mt30"},[t._v(" ")]),e("div",{staticClass:"login"},[e("div",{staticClass:"login_con"},[e("span",{staticStyle:{float:"left","text-align":"start","font-weight":"500","font-family":"'NanumGothic'"}},[t._v("Portal Login")]),e("p",{staticClass:"login_tit",staticStyle:{"margin-top":"35px"}}),t._m(1),e("div",{staticClass:"btn",staticStyle:{display:"inline-block","margin-left":"0px","margin-right":"0px","margin-bottom":"0px","padding-top":"0px","padding-bottom":"0px","padding-right":"0px",width:"84px"}},[e("button",{staticStyle:{"font-family":"'NanumGothic'","font-size":"1em","font-weight":"bold"},attrs:{id:"login_btn"},on:{click:t.loginFn}},[t._v(" 로그인 ")])])])]),e("div",{staticClass:"c_b mt50"},[t._v(" ")])])]),t._m(2)])])},S=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"d-box"},[n("h1",{staticClass:"logo",staticStyle:{float:"left","margin-block-end":"0px","padding-left":"15px"}},[n("img",{staticStyle:{float:"left"},attrs:{src:e(781),alt:"한양대학교 로고"}}),n("span",{staticClass:"title",staticStyle:{display:"inline-block","margin-top":"15px","margin-left":"0px","margin-right":"0px","margin-bottom":"0px","padding-top":"0px","padding-bottom":"0px","padding-right":"0px","font-family":"'NanumGothic'","font-size":"2em","text-align":"top"}},[t._v("한양대학교 | 로그인")])]),n("h2",{staticClass:"title_txt mt30",staticStyle:{float:"left","text-align":"start","font-family":"'NanumGothic'"}},[n("br"),t._v("고객님의 정보에 접근하기 위하여 인증이 필요합니다."),n("br"),t._v("한양대학교 포털 한양인(HY-in)계정으로 로그인 하시기 바랍니다. ")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("dl",[e("dt",[e("label",{staticStyle:{float:"left","text-align":"start","font-weight":"800","font-family":"'NanumGothic'"},attrs:{for:"userId"}},[t._v("ID")])]),e("dd",{staticStyle:{"margin-inline-start":"0px"}},[e("input",{staticStyle:{float:"left"},attrs:{type:"text",id:"uid",value:"",placeholder:"아이디를 입력하세요"}})]),e("dt",[e("label",{staticStyle:{float:"left","text-align":"start","font-weight":"800","font-family":"'NanumGothic'"},attrs:{for:"userPassword"}},[t._v("Password")])]),e("dd",{staticStyle:{"margin-inline-start":"0px"}},[e("input",{attrs:{type:"password",id:"upw",value:"",placeholder:"비밀번호를 입력하세요"}})])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"bottom"}},[e("div",{staticClass:"d-box"},[e("h2",[e("span",{staticStyle:{"font-family":"'NanumGothic'","font-size":"1em","font-weight":"bold"}},[t._v("COALA 알고리즘 학습 플랫폼")])])])])}],k={components:{},methods:{loginFn(){this.$router.push({path:"/main"})}}},E=k,O=(0,r.Z)(E,w,S,!1,null,"10ae6762",null),Z=O.exports,$=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tile is-ancestor"},[e("div",{staticClass:"tile is-vertical is-8"},[e("div",{staticClass:"tile"},[e("div",{staticClass:"tile is-parent is-vertical"},[e("article",{staticClass:"tile is-child notification is-primary"},[e("p",{staticClass:"title"},[t._v("1번")]),e("p",{staticClass:"subtitle"},[t._v("Top tile")])]),e("article",{staticClass:"tile is-child notification is-warning"},[e("p",{staticClass:"title"},[t._v("...tiles")]),e("p",{staticClass:"subtitle"},[t._v("Bottom tile")])])]),e("div",{staticClass:"tile is-parent"},[e("article",{staticClass:"tile is-child notification is-info"},[e("p",{staticClass:"title"},[t._v("2번")]),e("p",{staticClass:"subtitle"},[t._v("With an image")]),e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:"https://bulma.io/images/placeholders/640x480.png"}})])])])]),e("div",{staticClass:"tile is-parent"},[e("article",{staticClass:"tile is-child notification is-danger"},[e("p",{staticClass:"title"},[t._v("5번")]),e("p",{staticClass:"subtitle"},[t._v("Aligned with the right tile")]),e("div",{staticClass:"content"})])])]),e("div",{staticClass:"tile is-parent"},[e("article",{staticClass:"tile is-child notification is-success"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title"},[t._v("Tall tile")]),e("p",{staticClass:"subtitle"},[t._v("With even more content")]),e("div",{staticClass:"content"})])])])])}],j={},A=(0,r.Z)(j,$,P,!1,null,null,null),N=A.exports;n.Z.use(u.Z);const T=[{path:"/",name:"login",component:Z},{path:"/main",name:"main",component:x},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,421))},{path:"/tile",name:"tile",component:N}],G=new u.Z({mode:"history",base:"/",routes:T});var L=G,F=e(629);n.Z.use(F.ZP);var I=new F.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),M=e(589);e(588);n.Z.use(M.ZP,{defaultIconPack:"fas",defaultContainerElement:"#content"}),n.Z.config.productionTip=!1,new n.Z({router:L,store:I,render:t=>t(c)}).$mount("#app")},730:function(t,i,e){t.exports=e.p+"img/COALA.4a8b18a1.svg"},781:function(t,i,e){t.exports=e.p+"img/HYU_logo.40a53416.png"}},i={};function e(n){var a=i[n];if(void 0!==a)return a.exports;var s=i[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(i,n,a,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],s=t[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(u--,1);var c=a();void 0!==c&&(i=c)}}return i}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,a,s]}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(i,n){return e.f[n](t,i),i}),[]))}}(),function(){e.u=function(t){return"js/about.110e7949.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={},i="coala-frontend:";e.l=function(n,a,s,r){if(t[n])t[n].push(a);else{var o,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==i+s){o=f;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,e.nc&&o.setAttribute("nonce",e.nc),o.setAttribute("data-webpack",i+s),o.src=n),t[n]=[a];var d=function(i,e){o.onerror=o.onload=null,clearTimeout(p);var a=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(e)})),i)return i(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(i,n){var a=e.o(t,i)?t[i]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(e,n){a=t[i]=[e,n]}));n.push(a[2]=s);var r=e.p+e.u(i),o=new Error,l=function(n){if(e.o(t,i)&&(a=t[i],0!==a&&(t[i]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+i+" failed.\n("+s+": "+r+")",o.name="ChunkLoadError",o.type=s,o.request=r,a[1](o)}};e.l(r,l,"chunk-"+i,i)}},e.O.j=function(i){return 0===t[i]};var i=function(i,n){var a,s,r=n[0],o=n[1],l=n[2],c=0;if(r.some((function(i){return 0!==t[i]}))){for(a in o)e.o(o,a)&&(e.m[a]=o[a]);if(l)var u=l(e)}for(i&&i(n);c<r.length;c++)s=r[c],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(u)},n=self["webpackChunkcoala_frontend"]=self["webpackChunkcoala_frontend"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(234)}));n=e.O(n)})();
//# sourceMappingURL=app.b4eb295d.js.map
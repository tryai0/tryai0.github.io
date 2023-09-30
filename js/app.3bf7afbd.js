(function(){"use strict";var e={2640:function(e,t,n){n(7658);var o=n(144),r=n(998),i=n(6232),a=n(5550),s=n(4562),c=n(266),u=n(2118),l=n(9223),d=n(8271),f=n(4324),h=n(5808),g=n(4525),m=n(2866),p=n(4611),b=n(3059),v=n(7233),w=n(3687),y=function(){var e=this,t=e._self._c;return t(r.Z,[t(i.Z,{attrs:{app:"",color:"primary",dark:"","clipped-left":""}},[t(a.Z,{on:{click:function(t){t.stopPropagation(),e.showNav=!e.showNav}}}),t(w.Z),t(s.Z,{attrs:{text:""},on:{click:function(t){return e.$router.push("/about")}}},[t("span",{staticClass:"title"},[e._v("关于")])])],1),t(v.Z,{attrs:{app:"",clipped:""},model:{value:e.showNav,callback:function(t){e.showNav=t},expression:"showNav"}},[t(g.Z,[t(m.km,[t(m.V9,{staticClass:"text-h6"},[e._v(" 菜单 ")])],1)],1),t(l.Z),t(h.Z,{attrs:{nav:""}},e._l(e.items,(function(n,o){return t(g.Z,{key:o,attrs:{link:""},on:{click:function(t){return e.onItemClick(n)}}},[t(p.Z,[t(f.Z,[e._v(e._s(n.icon))])],1),t(m.km,[t(m.V9,[e._v(e._s(n.title))])],1)],1)})),1)],1),t(b.Z,[t(u.Z,{attrs:{fluid:"",id:"maincontainer"}},[t("router-view")],1)],1),t(d.Z,{staticClass:"font-weight-medium",attrs:{padless:""}},[t(c.Z,{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),t("strong",[e._v("TRYAI")])])],1)],1)},k=[],L=n(7625),T={name:"App",metaInfo:{title:"TRYAI"},data:()=>({showNav:!1,store:L.h}),computed:{items(){return this.store.online?[{title:"计费与充值",icon:"mdi-currency-cny",linkTo:"/recharge"},{title:"ChatGPT",icon:"mdi-chat",linkTo:"/chat"},{title:"GPT4",icon:"mdi-numeric-4-box",linkTo:"/chat4"},{title:"图片生成",icon:"mdi-image",linkTo:"/imggen"},{title:"关于",icon:"mdi-information",linkTo:"/about"},{title:"注销",icon:"mdi-logout",linkTo:"/login"}]:[{title:"免费试用",icon:"mdi-chat",linkTo:"/freechat"},{title:"关于",icon:"mdi-information",linkTo:"/about"},{title:"登录",icon:"mdi-login",linkTo:"/login"}]}},watch:{},methods:{onItemClick(e){"注销"==e.title?this.axios.post("/logout").then((()=>{this.store.online=!1,localStorage.setItem("tryai_online",!1),this.$router.push(e.linkTo)})):this.$router.push(e.linkTo)}},mounted(){let e=JSON.parse(localStorage.getItem("tryai_online"));this.store.online=e||!1}},Z=T,P=n(1001),_=(0,P.Z)(Z,y,k,!1,null,null,null),x=_.exports,C=n(1705);o.ZP.use(C.Z);var O=new C.Z({icons:{iconfont:"mdi"}}),S=VueRouter,j=n.n(S);o.ZP.use(j());const N=[{path:"/",name:"home",redirect:"/freechat"},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4567))},{path:"/register",name:"register",component:()=>Promise.all([n.e(329),n.e(31)]).then(n.bind(n,9031))},{path:"/login",name:"login",component:()=>Promise.all([n.e(329),n.e(840)]).then(n.bind(n,8840))},{path:"/recharge",name:"recharge",component:()=>Promise.all([n.e(329),n.e(784)]).then(n.bind(n,3784))},{path:"/chat",name:"chat",component:()=>Promise.all([n.e(329),n.e(222),n.e(113)]).then(n.bind(n,2705))},{path:"/chat4",name:"chat4",component:()=>Promise.all([n.e(329),n.e(222),n.e(785)]).then(n.bind(n,3655))},{path:"/imggen",name:"imggen",component:()=>Promise.all([n.e(329),n.e(222),n.e(937)]).then(n.bind(n,4126))},{path:"/freechat",name:"freechat",component:()=>Promise.all([n.e(329),n.e(222),n.e(981)]).then(n.bind(n,3708))}],A=new(j())({mode:"history",base:"/",routes:N});A.beforeEach(((e,t,n)=>{if("/freechat"==e)return void n();if(L.h.init){let e=JSON.parse(localStorage.getItem("tryai_online"));e&&(L.h.online=e),L.h.init=!1}let o=L.h.online;"recharge"!=e.name&&"chat"!=e.name||o?"login"==e.name&&o?n({name:"chat"}):n():n({name:"login"})}));var E=A,I=axios,R=n.n(I),U=n(2346),Y=n(6133),F=n.n(Y),M=n(7802),q=n.n(M),B=n(6102);q().registerLanguage("bash",n(1519)),q().registerLanguage("c-like",n(8212)),q().registerLanguage("c",n(5745)),q().registerLanguage("css",n(8914)),q().registerLanguage("cpp",n(4006)),q().registerLanguage("go",n(3048)),q().registerLanguage("htmlbars",n(3202)),q().registerLanguage("http",n(786)),q().registerLanguage("java",n(7721)),q().registerLanguage("javascript",n(6344)),q().registerLanguage("json",n(2026)),q().registerLanguage("matlab",n(1304)),q().registerLanguage("python",n(308)),q().registerLanguage("rust",n(1374)),q().registerLanguage("shell",n(9514)),q().registerLanguage("typescript",n(1533)),q().registerLanguage("xml",n(2157)),o.ZP.use(B.Z),o.ZP.config.productionTip=!1;const $=!0;$?"tryai0.github.io"==window.location.hostname?(R().defaults.baseURL=window.location.protocol+"//tryai6.com/api",R().defaults.wsURL=("http:"==window.location.protocol?"ws://":"wss://")+"tryai6.com/wsapi"):(R().defaults.baseURL=window.location.protocol+"//"+window.location.hostname+"/api",R().defaults.wsURL=("http:"==window.location.protocol?"ws://":"wss://")+window.location.hostname+"/wsapi"):(R().defaults.baseURL=window.location.protocol+"//"+window.location.hostname+":3030/api",R().defaults.wsURL="ws://"+window.location.hostname+":3040"),R().defaults.withCredentials=!0,R().interceptors.request.use((e=>{let t=localStorage.getItem("session");return t&&(e.headers.mysession=t),e}),(e=>{console.log(e)})),R().interceptors.response.use((e=>(e.data.session&&localStorage.setItem("session",JSON.stringify(e.data.session)),e)),(e=>{401==e.response.status?(L.h.online=!1,E.push("/login")):429==e.response.status&&alert("您的操作过于频繁！")})),o.ZP.use(U.Z,R()),o.ZP.use(F()),new o.ZP({vuetify:O,router:E,render:e=>e(x)}).$mount("#app")},7625:function(e,t,n){n.d(t,{h:function(){return r}});var o=n(144);const r=(0,o.qj)({init:!0,online:!1})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{31:"e52a3d9d",113:"1b67485b",222:"81fe2129",329:"ddd0716e",443:"72295734",784:"9cffcdb7",785:"b8f1857c",840:"c5bc71aa",937:"4b8dd367",981:"d623d515"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{31:"d54629c5",113:"b39abdfc",329:"13eeda80",443:"8f80b55a",784:"ebc8762c",785:"845a169b",840:"d54629c5",937:"458a0891",981:"97667bc5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="TRYAI:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={31:1,113:1,329:1,443:1,784:1,785:1,840:1,937:1,981:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkTRYAI"]=self["webpackChunkTRYAI"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2640)}));o=n.O(o)})();
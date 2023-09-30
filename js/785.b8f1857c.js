"use strict";(self["webpackChunkTRYAI"]=self["webpackChunkTRYAI"]||[]).push([[785],{3655:function(t,e,s){s.r(e),s.d(e,{default:function(){return M}});var i=s(7359),n=s(3423),a=s(4562),o=s(9582),r=s(4886),l=s(266),d=s(2118),c=s(4061),h=s(9223),g=s(4324),u=s(5808),m=s(4525),p=s(5187),C=s(2866),L=s(7941),f=s(3305),v=s(1713),Z=s(3687),x=s(7808),y=function(){var t=this,e=t._self._c;return e(d.Z,{staticClass:"fill-height pa-0",attrs:{fluid:""}},[e(c.Z,{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.Z,[e(r.EB,{staticClass:"text-h5 grey lighten-2"},[t._v(" 注意事项 ")]),e(r.ZB,{staticStyle:{"text-align":"left"}},[e("p"),e("p",[t._v("1. 本系统当前使用的模型为：gpt-4-0613")]),e("p",[t._v(" 2. ChatGPT的官方API要求每轮对话都发送全部的对话历史记录并参与计费，如果接下来的对话内容与当前上下文无关，"),e("b",[t._v("请点击左侧新建对话以避免浪费余额")])]),e("p",[t._v(" 3. GPT4的计费策略为：每1000token（约800汉字）价格 = 1.15 - 0.1 * 账户等级。举例：1级账户每1000token计费1.05RMB ")])]),e(h.Z),e(r.h7,[e(Z.Z),e(a.Z,{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 好的 ")])],1)],1)],1),t.isDesktop?e("div",{staticStyle:{width:"100%",height:"100%",top:"0",left:"0"}},[e(v.Z,{staticClass:"no-gutters elevation-0 fill-height"},[e(l.Z,{attrs:{cols:"12",sm:"2"}},[e("div",{attrs:{id:"sb1"}},[e("div",{attrs:{id:"addbutton"}},[e(a.Z,{staticClass:"ma-2",staticStyle:{width:"80%"},attrs:{color:"success"},on:{click:t.createList}},[t._v("新建对话")])],1),e("div",{attrs:{id:"lst"}},[e(u.Z,{attrs:{nav:""}},[e(L.Z,{attrs:{mandatory:"",color:"primary"},on:{change:t.onListSelected},model:{value:t.selectedListID,callback:function(e){t.selectedListID=e},expression:"selectedListID"}},t._l(t.lists,(function(s,i){return e(m.Z,{key:i},[e(C.km,[e(C.V9,[t._v(t._s(s.title))])],1),e(p.Z,[e(a.Z,{attrs:{icon:""},on:{click:function(e){return t.deleteList(i)}}},[e(g.Z,[t._v("mdi-delete")])],1)],1)],1)})),1)],1)],1)])]),e(l.Z,{staticStyle:{top:"0"},attrs:{cols:"12",sm:"10"}},[e("div",{attrs:{id:"chatwindow"}},[e("div",{attrs:{id:"log"}},[t._l(t.selectedList.messages,(function(s){return e("div",{key:s.id,class:"user"!=s.from&&"userfail"!=s.from?"botchatitem":"humanchatitem"},[e("div",{staticClass:"avatar"},[e(n.Z,{staticClass:"inneravatar",attrs:{color:"user"!=s.from&&"userfail"!=s.from?"teal":"orange",size:"48",rounded:""}},["user"!=s.from&&"userfail"!=s.from?e("svg",{attrs:{width:"256px",height:"260px",viewBox:"0 0 256 260",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"}},[e("title",[t._v("OpenAI")]),e("g",[e("path",{attrs:{transform:"scale(0.75, 0.75) translate(44,42)",d:"M239.183914,106.202783 C245.054304,88.5242096 243.02228,69.1733805 233.607599,53.0998864 C219.451678,28.4588021 190.999703,15.7836129 163.213007,21.739505 C147.554077,4.32145883 123.794909,-3.42398554 100.87901,1.41873898 C77.9631105,6.26146349 59.3690093,22.9572536 52.0959621,45.2214219 C33.8436494,48.9644867 18.0901721,60.392749 8.86672513,76.5818033 C-5.443491,101.182962 -2.19544431,132.215255 16.8986662,153.320094 C11.0060865,170.990656 13.0197283,190.343991 22.4238231,206.422991 C36.5975553,231.072344 65.0680342,243.746566 92.8695738,237.783372 C105.235639,251.708249 123.001113,259.630942 141.623968,259.52692 C170.105359,259.552169 195.337611,241.165718 204.037777,214.045661 C222.28734,210.296356 238.038489,198.869783 247.267014,182.68528 C261.404453,158.127515 258.142494,127.262775 239.183914,106.202783 L239.183914,106.202783 Z M141.623968,242.541207 C130.255682,242.559177 119.243876,238.574642 110.519381,231.286197 L112.054146,230.416496 L163.724595,200.590881 C166.340648,199.056444 167.954321,196.256818 167.970781,193.224005 L167.970781,120.373788 L189.815614,133.010026 C190.034132,133.121423 190.186235,133.330564 190.224885,133.572774 L190.224885,193.940229 C190.168603,220.758427 168.442166,242.484864 141.623968,242.541207 Z M37.1575749,197.93062 C31.456498,188.086359 29.4094818,176.546984 31.3766237,165.342426 L32.9113895,166.263285 L84.6329973,196.088901 C87.2389349,197.618207 90.4682717,197.618207 93.0742093,196.088901 L156.255402,159.663793 L156.255402,184.885111 C156.243557,185.149771 156.111725,185.394602 155.89729,185.550176 L103.561776,215.733903 C80.3054953,229.131632 50.5924954,221.165435 37.1575749,197.93062 Z M23.5493181,85.3811273 C29.2899861,75.4733097 38.3511911,67.9162648 49.1287482,64.0478825 L49.1287482,125.438515 C49.0891492,128.459425 50.6965386,131.262556 53.3237748,132.754232 L116.198014,169.025864 L94.3531808,181.662102 C94.1132325,181.789434 93.8257461,181.789434 93.5857979,181.662102 L41.3526015,151.529534 C18.1419426,138.076098 10.1817681,108.385562 23.5493181,85.125333 L23.5493181,85.3811273 Z M203.0146,127.075598 L139.935725,90.4458545 L161.7294,77.8607748 C161.969348,77.7334434 162.256834,77.7334434 162.496783,77.8607748 L214.729979,108.044502 C231.032329,117.451747 240.437294,135.426109 238.871504,154.182739 C237.305714,172.939368 225.050719,189.105572 207.414262,195.67963 L207.414262,134.288998 C207.322521,131.276867 205.650697,128.535853 203.0146,127.075598 Z M224.757116,94.3850867 L223.22235,93.4642272 L171.60306,63.3828173 C168.981293,61.8443751 165.732456,61.8443751 163.110689,63.3828173 L99.9806554,99.8079259 L99.9806554,74.5866077 C99.9533004,74.3254088 100.071095,74.0701869 100.287609,73.9215426 L152.520805,43.7889738 C168.863098,34.3743518 189.174256,35.2529043 204.642579,46.0434841 C220.110903,56.8340638 227.949269,75.5923959 224.757116,94.1804513 L224.757116,94.3850867 Z M88.0606409,139.097931 L66.2158076,126.512851 C65.9950399,126.379091 65.8450965,126.154176 65.8065367,125.898945 L65.8065367,65.684966 C65.8314495,46.8285367 76.7500605,29.6846032 93.8270852,21.6883055 C110.90411,13.6920079 131.063833,16.2835462 145.5632,28.338998 L144.028434,29.2086986 L92.3579852,59.0343142 C89.7419327,60.5687513 88.1282597,63.3683767 88.1117998,66.4011901 L88.0606409,139.097931 Z M99.9294965,113.5185 L128.06687,97.3011417 L156.255402,113.5185 L156.255402,145.953218 L128.169187,162.170577 L99.9806554,145.953218 L99.9294965,113.5185 Z",fill:"white"}})])]):e("span",{staticClass:"white--text text-h5"},[t._v("U")])])],1),"assistant"==s.from?e("div",{staticClass:"chattext"},[e("ChatItem",{attrs:{text:s.content}})],1):e("div",{staticClass:"chattext"},[t._v("  "+t._s(s.content))])])})),e("div",{attrs:{id:"endpos"}})],2),e("div",{attrs:{id:"chatinput"}},[t.userInfo.balance<.05?e(i.Z,{attrs:{dense:"",type:"error"}},[t._v(" 余额不足，请"),e("router-link",{attrs:{to:"/recharge"}},[t._v("充值")])],1):t.sending||t.selectedList.gettingMsg?e(f.Z,{attrs:{id:"sendingcircle",indeterminate:"",color:"primary"}}):e(x.Z,{attrs:{solo:"",id:"inputfield","append-icon":"mdi-send",placeholder:"当前使用的模型为GPT-4",maxlength:"2048"},on:{"click:append":t.sendStreaming,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.sendStreaming.apply(null,arguments))}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)])])],1)],1):e("div",{staticStyle:{width:"100%",height:"100%",top:"0",left:"0"}},[e(v.Z,{staticClass:"no-gutters elevation-0 fill-height"},[e(l.Z,{staticStyle:{top:"0"},attrs:{cols:"12"}},[e("div",{attrs:{id:"chatwindow"}},[e("div",{attrs:{id:"sb1mob"}},[e("div",{attrs:{id:"addbutton"}},[e(a.Z,{staticClass:"ma-2",staticStyle:{width:"80%"},attrs:{color:"success"},on:{click:t.createList}},[t._v("新建对话")])],1),e("div",{attrs:{id:"lst"}},[e(u.Z,{attrs:{nav:""}},[e(L.Z,{attrs:{mandatory:"",color:"primary"},on:{change:t.onListSelected},model:{value:t.selectedListID,callback:function(e){t.selectedListID=e},expression:"selectedListID"}},t._l(t.lists,(function(s,i){return e(m.Z,{key:i},[e(C.km,[e(C.V9,[t._v(t._s(s.title))])],1),e(p.Z,[e(a.Z,{attrs:{icon:""},on:{click:function(e){return t.deleteList(i)}}},[e(g.Z,[t._v("mdi-delete")])],1)],1)],1)})),1)],1)],1)]),e("div",{attrs:{id:"logmob"}},[t._l(t.selectedList.messages,(function(s){return e("div",{key:s.id,class:"user"!=s.from&&"userfail"!=s.from?"botchatitem":"humanchatitem"},[e("div",{staticClass:"avatar"},[e(n.Z,{staticClass:"inneravatar",attrs:{color:"user"!=s.from&&"userfail"!=s.from?"red":"orange",size:"48",rounded:""}},["user"!=s.from&&"userfail"!=s.from?e("svg",{attrs:{width:"256px",height:"260px",viewBox:"0 0 256 260",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"}},[e("title",[t._v("OpenAI")]),e("g",[e("path",{attrs:{transform:"scale(0.75, 0.75) translate(44,42)",d:"M239.183914,106.202783 C245.054304,88.5242096 243.02228,69.1733805 233.607599,53.0998864 C219.451678,28.4588021 190.999703,15.7836129 163.213007,21.739505 C147.554077,4.32145883 123.794909,-3.42398554 100.87901,1.41873898 C77.9631105,6.26146349 59.3690093,22.9572536 52.0959621,45.2214219 C33.8436494,48.9644867 18.0901721,60.392749 8.86672513,76.5818033 C-5.443491,101.182962 -2.19544431,132.215255 16.8986662,153.320094 C11.0060865,170.990656 13.0197283,190.343991 22.4238231,206.422991 C36.5975553,231.072344 65.0680342,243.746566 92.8695738,237.783372 C105.235639,251.708249 123.001113,259.630942 141.623968,259.52692 C170.105359,259.552169 195.337611,241.165718 204.037777,214.045661 C222.28734,210.296356 238.038489,198.869783 247.267014,182.68528 C261.404453,158.127515 258.142494,127.262775 239.183914,106.202783 L239.183914,106.202783 Z M141.623968,242.541207 C130.255682,242.559177 119.243876,238.574642 110.519381,231.286197 L112.054146,230.416496 L163.724595,200.590881 C166.340648,199.056444 167.954321,196.256818 167.970781,193.224005 L167.970781,120.373788 L189.815614,133.010026 C190.034132,133.121423 190.186235,133.330564 190.224885,133.572774 L190.224885,193.940229 C190.168603,220.758427 168.442166,242.484864 141.623968,242.541207 Z M37.1575749,197.93062 C31.456498,188.086359 29.4094818,176.546984 31.3766237,165.342426 L32.9113895,166.263285 L84.6329973,196.088901 C87.2389349,197.618207 90.4682717,197.618207 93.0742093,196.088901 L156.255402,159.663793 L156.255402,184.885111 C156.243557,185.149771 156.111725,185.394602 155.89729,185.550176 L103.561776,215.733903 C80.3054953,229.131632 50.5924954,221.165435 37.1575749,197.93062 Z M23.5493181,85.3811273 C29.2899861,75.4733097 38.3511911,67.9162648 49.1287482,64.0478825 L49.1287482,125.438515 C49.0891492,128.459425 50.6965386,131.262556 53.3237748,132.754232 L116.198014,169.025864 L94.3531808,181.662102 C94.1132325,181.789434 93.8257461,181.789434 93.5857979,181.662102 L41.3526015,151.529534 C18.1419426,138.076098 10.1817681,108.385562 23.5493181,85.125333 L23.5493181,85.3811273 Z M203.0146,127.075598 L139.935725,90.4458545 L161.7294,77.8607748 C161.969348,77.7334434 162.256834,77.7334434 162.496783,77.8607748 L214.729979,108.044502 C231.032329,117.451747 240.437294,135.426109 238.871504,154.182739 C237.305714,172.939368 225.050719,189.105572 207.414262,195.67963 L207.414262,134.288998 C207.322521,131.276867 205.650697,128.535853 203.0146,127.075598 Z M224.757116,94.3850867 L223.22235,93.4642272 L171.60306,63.3828173 C168.981293,61.8443751 165.732456,61.8443751 163.110689,63.3828173 L99.9806554,99.8079259 L99.9806554,74.5866077 C99.9533004,74.3254088 100.071095,74.0701869 100.287609,73.9215426 L152.520805,43.7889738 C168.863098,34.3743518 189.174256,35.2529043 204.642579,46.0434841 C220.110903,56.8340638 227.949269,75.5923959 224.757116,94.1804513 L224.757116,94.3850867 Z M88.0606409,139.097931 L66.2158076,126.512851 C65.9950399,126.379091 65.8450965,126.154176 65.8065367,125.898945 L65.8065367,65.684966 C65.8314495,46.8285367 76.7500605,29.6846032 93.8270852,21.6883055 C110.90411,13.6920079 131.063833,16.2835462 145.5632,28.338998 L144.028434,29.2086986 L92.3579852,59.0343142 C89.7419327,60.5687513 88.1282597,63.3683767 88.1117998,66.4011901 L88.0606409,139.097931 Z M99.9294965,113.5185 L128.06687,97.3011417 L156.255402,113.5185 L156.255402,145.953218 L128.169187,162.170577 L99.9806554,145.953218 L99.9294965,113.5185 Z",fill:"white"}})])]):e("span",{staticClass:"white--text text-h5"},[t._v("U")])])],1),e("div",{staticClass:"chattext"},[t._v("  "+t._s(s.content))])])})),e("div",{attrs:{id:"endpos"}})],2),e("div",{attrs:{id:"chatinput"}},[t.userInfo.balance<.05?e(i.Z,{attrs:{dense:"",type:"error"}},[t._v(" 余额不足，请"),e("router-link",{attrs:{to:"/recharge"}},[t._v("充值")])],1):t.sending||t.selectedList.gettingMsg?e(f.Z,{attrs:{id:"sendingcircle",indeterminate:"",color:"primary"}}):e(x.Z,{attrs:{solo:"",id:"inputfield","append-icon":"mdi-send",placeholder:"当前使用的模型为GPT-4",maxlength:"2048"},on:{"click:append":t.sendStreaming,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.sendStreaming.apply(null,arguments))}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)])])],1)],1)],1)},_=[],w=(s(7658),s(541),s(6233)),k={name:"Chat4View",metaInfo:{title:"ChatGPT中文站"},components:{ChatItem:w.Z},data:()=>({isDesktop:!0,dialog:!0,sending:!1,show1:!1,needScroll:!1,lists:[{id:0,title:"chat0",gettingMsg:!1,messages:null}],selectedList:{id:0,title:"chat0",gettingMsg:!1,messages:[]},selectedListID:0,message:"",userInfo:{balance:0}}),beforeMount(){window.innerWidth<600&&(this.isDesktop=!1)},mounted(){console.log("这是一个彩蛋"),window.addEventListener("resize",(()=>{window.innerWidth<600?this.isDesktop=!1:this.isDesktop=!0})),this.axios.get("/user").then((t=>{this.userInfo=t.data.user;let e=this.userInfo.chats,s=[];for(let i of e)s.push({id:i.id,title:i.title,gettingMsg:!1,messages:null}),this.lists=s;this.setSelectedList(0)}))},updated(){if(this.needScroll){this.needScroll=!1;let t=document.getElementById("endpos");t.scrollIntoView(!1)}},methods:{onListSelected(){this.setSelectedList(this.selectedListID)},createList(){this.axios.post("/addchat").then((t=>{let e=t.data.status;if(200==e.code){let e=t.data.id,s={id:e,title:"chat"+e.toString(),gettingMsg:!1,messages:[]};this.lists.unshift(s),this.setSelectedList(0)}else"chat cnt reach limit"==e.msg&&alert("已达到最大对话数量32")}))},deleteList(t){let e=this.lists[t];this.axios.post("/delchat",{id:e.id}).then((t=>{let s;for(s=0;s<this.lists.length;s++)if(this.lists[s].id==e.id)break;if(s!=this.lists.length)if(this.lists.splice(s,1),0==this.lists.length){let e=t.data.id,s={id:e,title:"chat"+e.toString(),gettingMsg:!1,messages:[]};this.lists.push(s),this.setSelectedList(0)}else this.setSelectedList(Math.min(this.lists.length-1,Math.max(0,s-1)))}))},sendStreaming(){this.sending=!0;let t=this.selectedList.messages,e={id:t.length,from:"user",content:this.message.toString()};t.push(e);let s={id:t.length,from:"hint",content:" "};t.push(s),this.message="",this.needScroll=!0,this.axios.post("/chatws",{id:this.selectedList.id,message:t,model:"gpt-4-0613"}).then((t=>{let i=this.selectedList;this.recvStreaming(t,e,s,i)})).catch((()=>{this.sending=!1,e.from="userfail",s.from="hint",s.content="发生未知错误，请稍后再试"}))},recvStreaming(t,e,s,i){let n=t.data.status;if(200!==n.code){let t="系统消息：";"timeout exceeded"==n.msg?t+="ChatGPT响应超时":"user insufficient balance"==n.msg?t+="用户余额不足":"too many waiting"==n.msg?t+="当前排队使用人数过多，请稍后再试":"too many requests"==n.msg?t+="您的请求过于频繁，请稍后再试":"arg error"==n.msg?t+="参数格式错误":"empty message"==n.msg?t+="请勿发送空消息":"token count exceeds limit"==n.msg?t+="对话总字数超出上限，请创建一个新的对话":"another client connected"==n.msg?t+="请等待上一轮对话结束":t+="服务器错误",t+="（这条消息不参与计费）",s.from="hint",s.content=t,e.from="userfail",this.syncMessages(i),this.sending=!1}else{let e=t.data.key;this.wsConn(e,s,i)}this.selectedList.id==i.id&&(this.needScroll=!0)},handleBadWS(t,e){setTimeout((()=>{this.getMessages(e),this.axios.get("/user").then((t=>{this.userInfo.balance=t.data.user.balance})),this.sending=!1}),t)},wsConn(t,e,s){let i=!1,n=new WebSocket(this.axios.defaults.wsURL+"/?"+this.userInfo.email+"&"+t);n.onopen=()=>{},n.onerror=()=>{this.handleBadWS(25e3,s)},n.onmessage=async t=>{let n=await t.data.text(),a=n.indexOf("￥$￥");if(-1!=a){a>0&&(e.from="assistant",e.content+=n.slice(0,a),this.selectedList.id==s.id&&(this.needScroll=!0));let t=parseFloat(n.slice(a+3));this.userInfo.balance+=t,i=!0}else e.from="assistant",e.content+=n,this.selectedList.id==s.id&&(this.needScroll=!0)},n.onclose=()=>{i?this.sending=!1:this.handleBadWS(e.content.length>5?1e4:2e4,s)},setTimeout((()=>{0==n.readyState&&n.close()}),3e3)},syncMessages(t){this.axios.post("/setmsg",{id:t.id,message:t.messages})},getMessages(t){t.gettingMsg=!0,this.axios.get("/chat",{params:{id:t.id}}).then((e=>{t.messages=e.data.messages,this.selectedList.id==t.id&&(this.needScroll=!0),t.gettingMsg=!1}))},setSelectedList(t){this.selectedListID=t,this.selectedList=this.lists[this.selectedListID];let e=this.lists[this.selectedListID];e.messages?this.needScroll=!0:this.getMessages(e)}}},S=k,b=s(1001),I=(0,b.Z)(S,y,_,!1,null,"e96f651e",null),M=I.exports},7359:function(t,e,s){s.d(e,{Z:function(){return g}});var i=s(3434),n=s(6656),a=s(2240),o=s(1444),r=s(6669),l=s(144),d=l.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=s(7678),h=s(4101),g=(0,c.Z)(i.Z,o.Z,d).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(n.Z,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(a.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(a.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||r.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,h.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},6656:function(t,e,s){var i=s(4562);e["Z"]=i.Z}}]);
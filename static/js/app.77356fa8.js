(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"07a6":function(e,t,s){e.exports=s.p+"static/img/login.535e2b7b.png"},"16f4":function(e,t,s){e.exports=s.p+"static/img/404.47c50765.png"},1918:function(e,t){e.exports="data:image/png;base64,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"},"2e9a":function(e,t,s){"use strict";s("43d2")},"426b":function(e,t,s){"use strict";s("efa1")},"43d2":function(e,t,s){},"4c91":function(e,t,s){"use strict";s("e6dc")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r={data:function(){return{}},created:function(){var e=this;sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",(function(){sessionStorage.setItem("store",JSON.stringify(e.$store.state))}))},methods:{}},o=r,c=(s("034f"),s("2877")),u=Object(c["a"])(o,a,i,!1,null,null,null),l=u.exports,p=s("8c4f"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("p",[e._v("尊敬的用户"),s("b",[e._v(" "+e._s(e.user)+" ")]),e._v("您好，欢迎登录本系统，很抱歉浪费了您的时间，因为目前本系统啥也没有(#^.^#)")]),s("p",[e._v("1、命运就象强奸，反抗不了就要学会享受。工作就象轮奸，不行了别人就上。生活就象自慰，什么都得靠双手。前途就象做爱，总有高潮和低潮。")]),s("p",[e._v("2、等我有钱了，我就买一辆公交车，专门走公交专用车道，专门停在公交车站，等有人想上车了，我就说：对不起，这是私家车。")]),s("p",[e._v("3、女人不要以为长得好就可以不读书，男人不要以为书读的好就可以长得难看。")]),s("p",[e._v("4、我觉得自己特二。看了很多年的西游记86版的。我一直以为100多集，少说也有50-60集。结果今天想看了，才25集。小时候怎么总觉得看不完呢。还有没有觉得西游记很长的`孩纸。")]),s("p",[e._v("5、竟然有人我涂了蓝眼影，那简直是在侮辱我得黑眼圈！")]),s("p",[e._v("6、我那么喜欢你，你喜欢我一下会死啊。")]),s("p",[e._v("7、我不是超人，由于我把裤子穿在了内裤外。")]),s("p",[e._v("8、如果这都不算爱，那我宁愿卖白菜。")]),s("p",[e._v("9、等待你的关心，等到我关上了心。")]),s("p",[e._v("10、难免埋怨时间的手，把相爱写成相爱过。")]),s("p",[e._v("11、天气热得像个笑话，日子过的像句废话。")]),s("p",[e._v("12、千万别混日子，当心日子把你给混了。")]),s("p",[e._v("13、如果你注定不能给予我期待的回应。那么就保持在安全距离之外吧。")]),s("p",[e._v("14、现在的手机、电脑都流行触屏。有位朋友特别感慨：现在科技发展这么快，说不准哪天电视都触屏了。另外一朋友说：你傻啊！有遥控器不用，非要走过去用手指戳？")]),s("p",[e._v("15、我爱你时，你说什么就是什么。我不爱你时，你说你是什么。")]),s("p",[e._v("16、我又不是人民币，怎么能让人人都喜欢我？")]),s("p",[e._v("17、女人，口才常有而身材不常有；男人，身材常有而钱财不常有。")]),s("p",[e._v("18、我多想一个不小心就和你白头偕老。")]),s("p",[e._v("19、还是古代好混，割掉了就能够当公务员。")]),s("p",[e._v("20、人家减肥减腰减屁股，为什么你非要从脑细胞开始。")]),s("p",[e._v("21、我要做个下载软件，名字叫掩耳。因为迅雷不及掩耳。")]),s("p",[e._v("22、旋转木马是这世上最残酷的游戏，彼此追逐，却永远隔着可悲的距离。")]),s("p",[e._v("23、西游记告诉我们：凡是有后台的妖怪都被接走了，凡是没后台的都被一棒子打死了。")]),s("p",[e._v("24、当时间和耐心都已经变为奢侈，我们只能靠星座了解彼此。")]),s("p",[e._v("25、养鱼挺麻烦的，每周要换一次水，我经常忘记。后来就只好每周换一次鱼了。")]),s("p",[e._v("26、你太矮了！借你望远镜吧，再看清楚点，我不帅吗？")]),s("p",[e._v("27、如果：婚姻是爱情的坟墓，那么：相亲，是为坟墓看风水；表白，是自掘坟墓；结婚，是双双殉情；移情别恋，是迁坟；第三者，是盗墓！")]),s("p",[e._v("28、旁人总是看到我们幸福得牵手，其实真相是：的、一旦我放开手，她就会跑去买东西。")]),s("p",[e._v("29、老子不打你，你不知道我文武双全。")]),s("p",[e._v("30、穿他人的鞋走他人的路，让他人既找不到鞋又找不到路。")]),s("p",[e._v("31、心里有座坟，葬着未亡人。")]),s("p",[e._v("32、情侣之间需要深进调查，不然怎能彼此了解？")]),s("p",[e._v("33、踏遍青楼人未老，请用汇仁肾宝。")]),s("p",[e._v("34、你不是我脑袋里的交警，无权干预我的走向。")]),s("p",[e._v("35、夏天来了，我才发现，哪凉快哪待着去，真不是一句骂人的话，这绝对是最真挚的关怀，最深藏不露的爱。")]),s("p",[e._v("36、别惹我，否则我会让你死得很有节奏感。")]),s("p",[e._v("37、我允许你走进我的世界，但不许你在我的世界里走来走去。")]),s("p",[e._v("38、将薪比薪想一下，算了，不想活了。")]),s("p",[e._v("39、虽然你身上喷了古龙水，但我还是能隐约闻到一股渣味儿。")]),s("p",[e._v("40、有的人聪明得像天气，多变；有的人傻得像天气预报，变天它都看不出来。")])])},d=[],h=s("5530"),v=s("2f62"),g={name:"Home",components:{},data:function(){return{}},created:function(){},computed:Object(h["a"])({},Object(v["c"])(["user"])),methods:{},filters:{}},m=g,b=(s("426b"),Object(c["a"])(m,f,d,!1,null,"256cbdf5",null)),w=b.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"})},j=[],x={name:"About",components:{},data:function(){return{}},created:function(){},methods:{}},y=x,C=Object(c["a"])(y,O,j,!1,null,"7b695838",null),S=C.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test"},[s("Head")],1)},G=[],B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"head"},[s("el-page-header",{attrs:{content:e.currentTitle},on:{back:e.goBack}})],1)},Y=[],A={name:"Head",data:function(){return{}},computed:Object(h["a"])({},Object(v["c"])({currentTitle:function(e){return e.title}})),created:function(){},methods:{goBack:function(){ce.back()}}},P=A,k=Object(c["a"])(P,B,Y,!1,null,"48b9f3b6",null),J=k.exports,V={components:{Head:J},data:function(){return{title:"测试页面"}},created:function(){this.goPageTitle(this.title)},computed:{},methods:Object(h["a"])(Object(h["a"])({},Object(v["b"])(["goPageTitle"])),{},{goBack:function(){this.$router.back()}})},N=V,E=(s("ea01"),Object(c["a"])(N,H,G,!1,null,"4f57bc07",null)),_=E.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-box"},[n("img",{staticClass:"login-title",attrs:{src:s("07a6"),alt:""}}),n("div",{staticClass:"input-suffix"},[n("label",{staticClass:"input-label"},[e._v("用户：")]),n("el-input",{attrs:{placeholder:"请输入用户名称","prefix-icon":"el-icon-user",type:"text",maxlength:"10","show-word-limit":""},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),n("div",{staticClass:"input-suffix"},[n("label",{staticClass:"input-label"},[e._v("密码：")]),n("el-input",{attrs:{placeholder:"请输入密码","prefix-icon":"el-icon-lock",type:"password",maxlength:"16",minlength:"6"},model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}})],1),n("div",{staticClass:"input-suffix"},[n("label",{staticClass:"input-label"},[e._v("验证：")]),n("VueSimpleVerify",{ref:"verify",attrs:{width:360,height:40},on:{success:e.success}})],1),n("div",{staticClass:"btn-group"},[n("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),n("el-button",{on:{click:e.register}},[e._v("注册")])],1)])])},z=[],I=s("8237"),R=s.n(I),M=s("7f2f"),Q=s.n(M),U=(s("8391"),{name:"Login",components:{VueSimpleVerify:Q.a},data:function(){return{user:"",passwd:"",verify:!1}},created:function(){sessionStorage.removeItem("isLogin"),this.setUser(""),this.enter()},methods:Object(h["a"])(Object(h["a"])({},Object(v["b"])(["setUser"])),{},{success:function(){this.verify=!0},login:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"))||{user:"test",passwd:"e10adc3949ba59abbe56e057f20f883e"};return this.user!==t.user?this.$message.error("用户名错误"):R()(this.passwd)!==t.passwd?this.$message.error("密码错误"):this.verify?(this.setUser(this.user),sessionStorage.setItem("isLogin",!0),void this.$message({message:"欢迎您，"+this.user,type:"success",duration:1500,onClose:function(){e.$router.push("/")}})):this.$message.error("请先完成验证")},enter:function(){var e=this;document.onkeydown=function(t){var s=window.event.keyCode;13===s&&e.login()}},register:function(){this.$router.push("/register")}})}),K=U,Z=(s("6fbe"),Object(c["a"])(K,L,z,!1,null,"d96bb04c",null)),F=Z.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("div",{staticClass:"register-box"},[n("img",{staticClass:"register-title",attrs:{src:s("1918"),alt:""}}),n("div",{staticClass:"input-suffix"},[n("label",{staticClass:"input-label"},[e._v("设置用户名：")]),n("el-input",{attrs:{placeholder:"请输入用户名称","prefix-icon":"el-icon-user",type:"text",maxlength:"10","show-word-limit":""},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),n("div",{staticClass:"input-suffix"},[n("label",{staticClass:"input-label"},[e._v("设置密码：")]),n("el-input",{attrs:{placeholder:"请输入密码","prefix-icon":"el-icon-lock",type:"password",maxlength:"16",minlength:"6"},model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}})],1),n("div",{staticClass:"input-suffix"},[n("label",{staticClass:"input-label"},[e._v("设置邮箱：")]),n("el-input",{attrs:{placeholder:"请输入邮箱","prefix-icon":"el-icon-message",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("div",{staticClass:"btn-group"},[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("提交")]),n("el-button",{on:{click:e.back}},[e._v("返回")])],1)])])},X=[],W={name:"Register",data:function(){return{user:"",passwd:"",email:""}},created:function(){this.enter()},methods:{save:function(){var e=this;if(""===this.user)return this.$message.error("请输入用户名称");if(""===this.passwd)return this.$message.error("请设置密码");if(""===this.email)return this.$message.error("请设置邮箱");var t={user:this.user,passwd:R()(this.passwd),email:this.email};localStorage.setItem("userInfo",JSON.stringify(t)),this.$message({message:"注册成功，即将前往登录",type:"success",duration:1500,onClose:function(){e.$router.push("/login")}})},enter:function(){var e=this;document.onkeydown=function(t){var s=window.event.keyCode;13===s&&e.save()}},back:function(){this.$router.go(-1)}}},D=W,q=(s("4c91"),Object(c["a"])(D,T,X,!1,null,"6a67b035",null)),$=q.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error"},[n("img",{attrs:{src:s("16f4"),alt:""}}),n("h2",[e._v("抱歉，您访问的页面出错了")]),n("p",[e._v("您可能输错了网址，或该网页已删除或不存在")]),n("a",{attrs:{href:"/"}},[e._v("返回首页")])])}],se={name:"Error",data:function(){return{}}},ne=se,ae=(s("2e9a"),Object(c["a"])(ne,ee,te,!1,null,"2ccdc9c2",null)),ie=ae.exports;n["default"].use(p["a"]);var re=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:S},{path:"/test",name:"Test",component:_},{path:"/login",name:"Login",component:F},{path:"/register",name:"Register",component:$},{path:"*",name:"error",component:ie}],oe=new p["a"]({routes:re});oe.beforeEach((function(e,t,s){"/login"!==e.path?sessionStorage.isLogin||"/register"===e.path?s():s({path:"/login"}):s()}));var ce=oe,ue=s("bc3a"),le=s.n(ue),pe=s("2106"),fe=s.n(pe),de=(s("0fae"),s("5c96"));n["default"].use(de["Button"]),n["default"].use(de["Input"]),n["default"].prototype.$message=de["Message"],n["default"].use(v["a"]);var he=new v["a"].Store({state:{user:""},mutations:{setUser:function(e,t){e.user=t}},actions:{},modules:{}});n["default"].use(fe.a,le.a),le.a.defaults.baseURL="http://api.tianapi.com/",n["default"].config.productionTip=!1,new n["default"]({router:ce,store:he,render:function(e){return e(l)}}).$mount("#app")},"6fbe":function(e,t,s){"use strict";s("aed3")},7560:function(e,t,s){},"85ec":function(e,t,s){},aed3:function(e,t,s){},e6dc:function(e,t,s){},ea01:function(e,t,s){"use strict";s("7560")},efa1:function(e,t,s){}});
//# sourceMappingURL=app.77356fa8.js.map
webpackJsonp([10],{115:function(n,t,e){"use strict";var r=e(50),a=e.n(r),u=e(18),o=e.n(u),c=e(52),i=e.n(c),s=e(118),f=e.n(s),d=e(120),p=e.n(d),l=e(49),h=e.n(l),m=e(86),v=this;t.a=function(){var n=h()(a.a.mark(function n(){var t,e,r,u,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fetch";return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(d=d.toUpperCase(),c=m.a+c,"GET"==d&&(t="",p()(s).forEach(function(n){t+=n+"="+s[n]+"&"}),""!==t&&(t=t.substr(0,t.lastIndexOf("&")),c=c+"?"+t)),!window.fetch||"fetch"!=l){n.next=21;break}return e={credentials:"include",method:d,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"force-cache"},"POST"==d&&Object.defineProperty(e,"body",{value:f()(s)}),n.prev=6,n.next=9,fetch(c,e);case 9:return r=n.sent,n.next=12,r.json();case 12:return u=n.sent,n.abrupt("return",u);case 16:throw n.prev=16,n.t0=n.catch(6),new Error(n.t0);case 19:n.next=22;break;case 21:return n.abrupt("return",new i.a(function(n,t){var e=void 0;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject;var r="";"POST"==d&&(r=f()(s)),e.open(d,c,!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send(r),e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status){var r=e.response;"object"!==(void 0===r?"undefined":o()(r))&&(r=JSON.parse(r)),n(r)}else t(e)}}));case 22:case"end":return n.stop()}},n,v,[[6,16]])}));return function(){return n.apply(this,arguments)}}()},116:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(3),a=e(83),u=e.n(a),o=e(79),c=e(80),i=e(81),s=e.n(i),f=e(82);e.n(f);r.default.config.productionTip=!1,r.default.use(s.a),new r.default({el:"#app",router:o.a,store:c.a,template:"<App/>",components:{App:u.a}})},117:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},178:function(n,t){},184:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"fillcontain",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},79:function(n,t,e){"use strict";var r=e(3),a=e(185);r.default.use(a.a);var u=function(n){return e.e(4).then(function(){return n(e(193))}.bind(null,e)).catch(e.oe)},o=function(n){return e.e(3).then(function(){return n(e(194))}.bind(null,e)).catch(e.oe)},c=function(n){return e.e(0).then(function(){return n(e(192))}.bind(null,e)).catch(e.oe)},i=function(n){return e.e(2).then(function(){return n(e(195))}.bind(null,e)).catch(e.oe)},s=function(n){return e.e(1).then(function(){return n(e(197))}.bind(null,e)).catch(e.oe)},f=function(n){return e.e(5).then(function(){return n(e(196))}.bind(null,e)).catch(e.oe)},d=function(n){return e.e(6).then(function(){return n(e(191))}.bind(null,e)).catch(e.oe)},p=function(n){return e.e(8).then(function(){return n(e(189))}.bind(null,e)).catch(e.oe)},l=function(n){return e.e(7).then(function(){return n(e(190))}.bind(null,e)).catch(e.oe)},h=[{path:"/",component:u},{path:"/manage",component:o,name:"",children:[{path:"",component:c,meta:[]},{path:"/addUser",component:d,meta:["添加数据","添加用户"]},{path:"/addSinger",component:p,meta:["添加数据","添加歌手"]},{path:"/addSong",component:l,meta:["添加数据","添加歌曲"]},{path:"/userList",component:s,meta:["数据管理","用户列表"]},{path:"/singerList",component:i,meta:["数据管理","歌手列表"]},{path:"/songList",component:f,meta:["数据管理","歌曲列表"]}]}];t.a=new a.a({routes:h,strict:!1})},80:function(n,t,e){"use strict";var r=e(50),a=e.n(r),u=e(49),o=e.n(u),c=e(3),i=e(87),s=e(85);c.default.use(i.a);var f={adminInfo:{avatar:"default.jpg"}},d={saveAdminInfo:function(n,t){n.adminInfo=t}},p={getAdminData:function(n){var t=this,r=n.commit;return o()(a.a.mark(function n(){var u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.i(s.a)();case 3:if(u=n.sent,1!=u.status){n.next=8;break}r("saveAdminInfo",u.data),n.next=9;break;case 8:throw new Error(u.type);case 9:n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:case"end":return n.stop()}},n,t,[[0,11]])}))()}};t.a=new i.a.Store({state:f,actions:p,mutations:d})},82:function(n,t){},83:function(n,t,e){e(178);var r=e(84)(e(117),e(184),null,null);n.exports=r.exports},85:function(n,t,e){"use strict";e.d(t,"k",function(){return a}),e.d(t,"d",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"e",function(){return c}),e.d(t,"a",function(){return i}),e.d(t,"f",function(){return s}),e.d(t,"g",function(){return f}),e.d(t,"h",function(){return d}),e.d(t,"j",function(){return p});var r=e(115),a=function(n){return e.i(r.a)("/nodeApi/users/login",n,"POST")},u=function(){return e.i(r.a)("/nodeApi/users/signout")},o=function(){return e.i(r.a)("/nodeApi/users/userList")},c=function(){return e.i(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq")},i=function(){return e.i(r.a)("/admin/info")},s=function(n){return e.i(r.a)("/statis/user/"+n+"/count")},f=function(n){return e.i(r.a)("/statis/order/"+n+"/count")},d=function(n){return e.i(r.a)("/statis/admin/"+n+"/count")},p=function(){return e.i(r.a)("/admin/count")}},86:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return a});var r="",a=void 0;r="//c.y.qq.com"}},[116]);
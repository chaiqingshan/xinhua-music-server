webpackJsonp([0],{"5J2h":function(t,n){},VYwS:function(t,n,i){"use strict";n.a=function(t){return new e.a(function(n,i){s.a.getSongUrlList(t).then(function(i){var a=i.url_mid.data.midurlinfo;t.forEach(function(t,n){t.songUrl="http://dl.stream.qqmusic.qq.com/"+a[n].purl}),n(t)},function(t){i(t)})})};var a=i("rVsN"),e=i.n(a),s=i("Z1Bu")},fLbX:function(t,n,i){"use strict";var a=i("4YfN"),e=i.n(a),s=i("LFTv"),c=i("48sp"),r={name:"music-detail",props:{title:{type:String,default:""},imgUrl:{type:String,default:""},data:{type:Array,default:function(){return[{singer:[{name:""}]}]}}},data:function(){return{id:"",cdList:[{}]}},comments:{},created:function(){},methods:e()({clickPlayAll:function(){this.currentMusic(this.data);var t=s.a.getRandomNumBoth(1,this.data.length+1);this.currentMusicIndex(t),this.playerDetailShow(!0)},navigateToDetail:function(t){this.currentMusic(this.data),this.currentMusicIndex(t),this.playerDetailShow(!0)},goBack:function(){this.$router.push({path:"/"})}},Object(c.b)(["currentMusic","currentMusicIndex","playAll","playerDetailShow"]))},l={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{name:"slide-fade"}},[i("div",{ref:"aa",staticClass:"music-detail"},[i("div",{staticClass:"go-back",on:{click:function(n){return t.goBack()}}},[i("i",{staticClass:"iconfont icon-fanhui"})]),t._v(" "),i("h1",[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"music-img",staticStyle:{border:"none"}},[t.imgUrl?i("img",{staticStyle:{border:"none"},attrs:{src:t.imgUrl,width:"100%",height:"100%",alt:""}}):t._e(),t._v(" "),i("div",{staticClass:"play-all",on:{click:function(n){return t.clickPlayAll()}}},[i("span",[i("i",{staticClass:"iconfont icon-bofang"}),t._v("\n                    随机播放全部\n                ")])])]),t._v(" "),i("div",{staticClass:"filter"}),t._v(" "),i("div",{staticClass:"song-list"},[i("ul",t._l(t.data,function(n,a){return i("li",{key:a},[i("h2",[t._v(t._s(n.songname))]),t._v(" "),i("p",{on:{click:function(n){return t.navigateToDetail(a)}}},[t._v(t._s(n.singer[0].name)+"  "+t._s(n.albumname))])])}),0)])])])},staticRenderFns:[]};var u=i("C7Lr")(r,l,!1,function(t){i("5J2h")},"data-v-630dafd5",null);n.a=u.exports}});
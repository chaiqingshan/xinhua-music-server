webpackJsonp([6],{YOyO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("4YfN"),i=s.n(n),a=s("48sp"),c=s("VYwS"),o={data:function(){return{value:"",result:[{title:"ssss",value:"ssss"},{title:"ssss",value:"ssss"},{title:"ssss",value:"ssss"},{title:"ssss",value:"ssss"}],hotKey:[],songList:[]}},created:function(){this.getSearchKey()},methods:i()({getSearchKey:function(){var t=this;this.$searchService.getSearchKey().then(function(e){t.hotKey=e.data.hotkey.slice(0,10)},function(t){console.log(t.msg)})},searchIt:function(t){this.search(t),this.value=t},searchChange:function(t){this.search(t.target.value)},search:function(t){var e=this;this.$searchService.searchMusicByKeyWord(t).then(function(t){var s=t.data.song.list;Object(c.a)(s).then(function(t){e.songList=t},function(t){})},function(t){})},deleteValue:function(){this.value=""},navigateToDetail:function(t){this.currentMusic(this.songList),this.currentMusicIndex(t),this.playerDetailShow(!0)}},Object(a.b)(["currentMusic","currentMusicIndex","playAll","playerDetailShow"]))},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"search-t"},[s("div",{staticClass:"search"},[s("i",{staticClass:"iconfont icon-sousuo icon-color",staticStyle:{color:"#866363"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"search-input",attrs:{type:"text",placeholder:"搜索歌曲、歌手"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){return t.searchChange(e)}]}}),t._v(" "),s("i",{staticClass:"iconfont icon-delete icon-color",staticStyle:{color:"#866363"},on:{click:function(e){return t.deleteValue()}}})])]),t._v(" "),t.value?t._e():s("div",{staticClass:"search-hot-key"},[s("p",[t._v("热门搜索")]),t._v(" "),s("ul",t._l(t.hotKey,function(e,n){return s("li",{key:n,staticClass:"hot-key",on:{click:function(s){return t.searchIt(e.k)}}},[t._v("\n                "+t._s(e.k)+"\n            ")])}),0)]),t._v(" "),t.value?s("div",{staticClass:"search-list"},[s("ul",t._l(t.songList,function(e,n){return s("li",{key:n,on:{click:function(e){return t.navigateToDetail(n)}}},[s("i",{staticClass:"iconfont icon-yinle1"}),t._v(" "),s("span",[t._v(t._s(e.songname))])])}),0)]):t._e()])},staticRenderFns:[]};var r=s("C7Lr")(o,l,!1,function(t){s("vi6W")},"data-v-658ff373",null);e.default=r.exports},vi6W:function(t,e){}});
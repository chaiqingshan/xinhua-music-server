webpackJsonp([7],{"3OLO":function(e,t){},"W1+L":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("ZnkQ");var i={name:"recommend",data:function(){return{msg:"Welcome to Your Vue.js App",items:[],swipes:[]}},created:function(){this.getRecommend(),this.getCdInfo()},methods:{getRecommend:function(){var e=this;this.$recommendService.getRecommend().then(function(t){e.swipes=t.data.slider},function(e){throw new Error(e)})},getCdInfo:function(){var e=this;this.$recommendService.getCdInfo().then(function(t){e.items=t.data.list})},goToDetail:function(e){this.$router.push({path:"/recommend/detail/"+e})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"song-recommend"},[n("ul",e._l(e.items,function(t,i){return n("li",{key:i,on:{click:function(n){return e.goToDetail(t.dissid)}}},[n("div",{staticClass:"song-img"},[n("img",{attrs:{width:"60",height:"60",src:t.imgurl,alt:""}})]),e._v(" "),n("div",{staticClass:"song-info"},[n("p",{attrs:{href:""}},[e._v(e._s(t.creator.name))]),e._v(" "),n("p",[e._v(e._s(t.dissname))])])])}),0)])])},staticRenderFns:[]};var o=n("C7Lr")(i,s,!1,function(e){n("3OLO")},"data-v-62a3d27a",null);t.default=o.exports}});
webpackJsonp([50],{"1I2l":function(e,t,a){var n=a("hKms");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("98c1ef48",n,!0)},hKms:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"",""])},vOZX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{activeName:"dice",show:"dice"}},components:{dice:function(e){return Promise.all([a.e(0),a.e(5)]).then(function(){var t=[a("Q/GF")];e.apply(null,t)}.bind(this)).catch(a.oe)},dataCount:function(e){return Promise.all([a.e(0),a.e(1)]).then(function(){var t=[a("SiVL")];e.apply(null,t)}.bind(this)).catch(a.oe)},betRecord:function(e){return Promise.all([a.e(0),a.e(3)]).then(function(){var t=[a("riJm")];e.apply(null,t)}.bind(this)).catch(a.oe)}},mounted:function(){},methods:{},watch:{activeName:function(e){this.show=e}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bhb"},[a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"Dice游戏",name:"dice"}},[a("dice")],1),e._v(" "),a("el-tab-pane",{attrs:{label:"Dice投注记录"}},[a("betRecord")],1),e._v(" "),a("el-tab-pane",{attrs:{label:"Dice数据统计"}},[a("dataCount")],1)],1)],1)},staticRenderFns:[]};var i=a("/Xao")(n,c,!1,function(e){a("1I2l")},"data-v-22d6c1e8",null);t.default=i.exports}});
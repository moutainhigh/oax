webpackJsonp([10],{"R/so":function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.block[data-v-f9e2c3dc] {\n  margin-top: 20px;\n}\n",""])},"c7+k":function(t,e,a){var n=a("R/so");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("4c8e549d",n,!0)},pj17:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aA9S"),i=a.n(n),s=a("zY+o"),o={data:function(){return{value8:"",total:0,tableList:[],tabData:{},pages:{pageNum:1,pageSize:10},condition:{userId:"",startTime:"",endTime:""}}},computed:{conditions:function(){return{userId:this.condition.userId,startTime:this.condition.startTime,endTime:this.condition.endTime}}},components:{},mounted:function(){this.initData()},methods:{initData:function(){var t=this,e=i()(this.conditions,this.pages);s.h(e).then(function(e){t.tabData=e.data,t.tableList=e.data.pageInfo.list,t.total=e.data.pageInfo.total}).catch(function(t){console.log(t)})},handleSearch:function(){var t=this,e=i()(this.conditions,this.pages);s.h(e).then(function(e){t.tabData=e.data,t.tableList=e.data.pageInfo.list,t.total=e.data.pageInfo.total}).catch(function(t){console.log(t)})},handleSizeChange:function(t){this.pages.pageSize=t,this.handleSearch()},handleCurrentChange:function(t){this.pages.pageNum=t,this.handleSearch()},searchPickerDate:function(t){t?(this.condition.startTime=t[0],this.condition.endTime=t[1]):(this.condition.startTime="",this.condition.endTime="")}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4,offset:2}},[t._v("\n      投注金额: "+t._s(t.tabData.allBetQty)+"\n    ")]),t._v(" "),a("el-col",{attrs:{span:4,offset:2}},[t._v("\n      中奖金额: "+t._s(t.tabData.allPayoutQty)+"\n    ")]),t._v(" "),a("el-col",{attrs:{span:4,offset:2}},[t._v("\n      收益金额: "+t._s(t.tabData.allBenefitQty)+"\n    ")]),t._v(" "),a("el-col",{attrs:{span:4,offset:2}},[t._v("\n       用户投注次数: "+t._s(t.tabData.countBetTime)+"\n    ")])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:3,offset:10}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"用户ID查询",clearable:"",size:"small"},model:{value:t.condition.userId,callback:function(e){t.$set(t.condition,"userId",e)},expression:"condition.userId"}})],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-date-picker",{attrs:{type:"datetimerange",size:"small",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["12:00:00","08:00:00"]},on:{change:t.searchPickerDate},model:{value:t.value8,callback:function(e){t.value8=e},expression:"value8"}})],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:t.handleSearch}},[t._v("搜索")])],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableList}},[a("el-table-column",{attrs:{prop:"userId",label:"用户Id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"betQty",label:"投注金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"payoutQty",label:"中奖金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"benefitQty",label:"收益金额",align:"center"}})],1)],1),t._v(" "),t.tableList.length>0?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.pages.pageNum,"page-sizes":[10,20,50,100],"page-size":t.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1)},staticRenderFns:[]};var c=a("/Xao")(o,l,!1,function(t){a("c7+k")},"data-v-f9e2c3dc",null);e.default=c.exports}});
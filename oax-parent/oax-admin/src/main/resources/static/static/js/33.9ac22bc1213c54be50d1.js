webpackJsonp([33],{"4I2K":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aA9S"),i=a.n(n),o=a("pY21"),l=a("zY+o"),s={data:function(){return{loading:!1,coinType:[],value8:[],total:0,tableList:[],tabData:{},pages:{pageNum:1,pageSize:10},condition:{coinId:54,userId:"",startTime:"",endTime:""}}},computed:{conditions:function(){return{coinId:this.condition.coinId,userId:this.condition.userId,startTime:this.condition.startTime,endTime:this.condition.endTime}}},components:{},mounted:function(){var t=this;this.getTime(),this.$nextTick(function(){t.initData(),t.getCoin()})},methods:{getCoin:function(){var t=this;o.d().then(function(e){t.coinType=e.data}).catch(function(t){console.log(t)})},getTime:function(){var t=new Date(new Date((new Date).toLocaleDateString()).getTime()+1),e=new Date(new Date((new Date).toLocaleDateString()).getTime()+864e5-1);this.value8=[this.format(t),this.format(e)],this.condition.startTime=this.format(t),this.condition.endTime=this.format(e)},add0:function(t){return t<10?"0"+t:t},format:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),o=e.getHours(),l=e.getMinutes(),s=e.getSeconds();return a+"-"+this.add0(n)+"-"+this.add0(i)+" "+this.add0(o)+":"+this.add0(l)+":"+this.add0(s)},initData:function(){var t=this;this.loading=!0;var e=i()(this.conditions,this.pages);l.n(e).then(function(e){t.loading=!1,t.tabData=e.data,t.tableList=e.data.pageInfo.list,t.total=e.data.pageInfo.total}).catch(function(e){t.loading=!1,console.log(e)})},handleSearch:function(){var t=this;this.loading=!0;var e=i()(this.conditions,this.pages);l.n(e).then(function(e){t.loading=!1,t.tabData=e.data,t.tableList=e.data.pageInfo.list,t.total=e.data.pageInfo.total}).catch(function(e){t.loading=!1,console.log(e)})},handleSizeChange:function(t){this.pages.pageSize=t,this.handleSearch()},handleCurrentChange:function(t){this.pages.pageNum=t,this.handleSearch()},searchPickerDate:function(t){new Date(new Date((new Date).toLocaleDateString()).getTime()+1),new Date(new Date((new Date).toLocaleDateString()).getTime()+864e5-1);t?(this.condition.startTime=t[0],this.condition.endTime=t[1]):(this.condition.startTime="",this.condition.endTime="")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-row",{staticStyle:{background:"#fff",padding:"15px 0","text-align":"center"},attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[t._v("投注金额: "+t._s(t.tabData.allBetQty))]),t._v(" "),a("el-col",{attrs:{span:4}},[t._v("中奖金额: "+t._s(t.tabData.allPayoutQty))]),t._v(" "),a("el-col",{attrs:{span:4}},[t._v("收益金额: "+t._s(t.tabData.allBenefitQty))]),t._v(" "),a("el-col",{attrs:{span:4}},[t._v("手续费: "+t._s(t.tabData.allChargesQty))]),t._v(" "),a("el-col",{attrs:{span:4}},[t._v("用户投注次数: "+t._s(t.tabData.countBetTime))]),t._v(" "),a("el-col",{attrs:{span:4}},[t._v("投注人数: "+t._s(t.tabData.countUser))])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:8}},[a("el-select",{attrs:{placeholder:"币种",clearable:"",size:"small"},model:{value:t.condition.coinId,callback:function(e){t.$set(t.condition,"coinId",e)},expression:"condition.coinId"}},t._l(t.coinType,function(t){return a("el-option",{key:t.coinId,attrs:{label:t.coinName,value:t.coinId}})}))],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"用户ID查询",clearable:"",size:"small"},model:{value:t.condition.userId,callback:function(e){t.$set(t.condition,"userId",e)},expression:"condition.userId"}})],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-date-picker",{attrs:{type:"datetimerange",size:"small",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"]},on:{change:t.searchPickerDate},model:{value:t.value8,callback:function(e){t.value8=e},expression:"value8"}})],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:t.handleSearch}},[t._v("搜索")])],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableList}},[a("el-table-column",{attrs:{prop:"userId",label:"用户Id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"betQty",label:"投注金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"payoutQty",label:"中奖金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"benefitQty",label:"收益金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"chargesQty",label:"手续费",align:"center"}})],1)],1),t._v(" "),t.tableList.length>0?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.pages.pageNum,"page-sizes":[10,20,50,100],"page-size":t.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1)},staticRenderFns:[]};var r=a("/Xao")(s,c,!1,function(t){a("IDmQ")},"data-v-6dd07b14",null);e.default=r.exports},IDmQ:function(t,e,a){var n=a("jSiC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("46b49bf8",n,!0)},jSiC:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.block[data-v-6dd07b14] {\n  margin-top: 20px;\n}\n",""])}});
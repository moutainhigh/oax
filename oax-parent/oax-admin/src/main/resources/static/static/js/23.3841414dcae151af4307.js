webpackJsonp([23],{"7tSe":function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.classA[data-v-ac909536] {\n  color: #5db96b;\n}\n.classB[data-v-ac909536] {\n  color: #dc6d65;\n}\n.classC[data-v-ac909536] {\n  color: #969799;\n}\n.buy[data-v-ac909536] .el-button--text {\n  color: #333333;\n  background-color: #ffb933;\n  padding: 0;\n  padding: 3px 6px;\n}\n",""])},A5XL:function(t,e,a){var n=a("7tSe");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("f7140e7c",n,!0)},FdwJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aA9S"),s=a.n(n),o=(a("6iV/"),a("Ul/C")),i={data:function(){return{options3:[{value:"NO_PAY",label:"未付款"},{value:"PAYED",label:"处理中"},{value:"APPEAL",label:"申诉中"},{value:"PROCESSING",label:"申诉处理中"},{value:"FINISH",label:"交易完成"},{value:"CANCEL",label:"已取消"}],condition:{status:"",id:"",userName:"",merchantId:"",userId:"",startTime:"",endTime:""},reqData:{pageNum:1,pageSize:10},value8:"",pageInfo:{},tableData:[],multipleSelection:[],selectData:[]}},computed:{conditions:function(){return{status:this.condition.status,id:this.condition.id,userName:this.condition.userName,merchantId:this.condition.merchantId,userId:this.condition.userId,startTime:this.condition.startTime,endTime:this.condition.endTime}}},components:{Pagination:a("1onU").a},mounted:function(){this.initData()},methods:{exportTable:function(){var t=this;a.e(66).then(function(){var e=a("zWO4").export_json_to_excel,n=t.selectData;e(["订单编号","用户ID","用户名","用户姓名","商家ID","商家姓名","买入数量","买入金额","买入方式","买入时间","到账时间","状态"],t.formatJson(["id","userId","userName","idName","merchantId","merchantIdName","qty","totalCost","tradeTypeDesc","createDate","finishDate","statusDesc"],n),"购买记录表")}.bind(null,a)).catch(a.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},handleSelectionChange:function(t){this.multipleSelection=t,console.log(t),this.selectData=t},add0:function(t){return t<10?"0"+t:t},format:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),o=e.getHours(),i=e.getMinutes(),l=e.getSeconds();return a+"-"+this.add0(n)+"-"+this.add0(s)+" "+this.add0(o)+":"+this.add0(i)+":"+this.add0(l)},statusColor:function(t){switch(t){case"买入":return"classA";case"卖出":case"处理中":case"未付款":case"已付款":case"申诉中":case"申诉处理中":return"classB";case"交易完成":case"已取消":return"classC";case"用户确认中":return"classB"}},initData:function(){var t=this;s()(this.conditions,this.reqData);var e=this.conditions;o.d(e).then(function(e){var a=e.data;t.tableData=a.list,t.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t)})},handleSearch:function(t){var e=this;o.d(t).then(function(t){var a=t.data;e.tableData=a.list,e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t),e.loading=!1})},handleProcess:function(t){var e=this;o.k(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},handelAccount:function(t){var e=this;o.b(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},closeAppeal:function(t){var e=this;o.e(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},closeOrder:function(t){var e=this;o.f(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},handleSizeChange:function(t){this.reqData.pageSize=t,this.initData()},handleCurrentChange:function(t){this.reqData.pageNum=t,this.initData()},searchStatus:function(t){this.condition.status=t,s()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchID:function(t){this.condition.id=t,s()(this.conditions,this.reqData),console.log(this.conditions),this.handleSearch(this.conditions)},searchUserName:function(t){this.condition.userName=t,s()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchUserID:function(t){this.condition.userId=t,s()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchPickerDate:function(t){console.log(t),t?(this.condition.startTime=t[0],this.condition.endTime=t[1],s()(this.conditions,this.reqData),this.handleSearch(this.conditions)):(this.condition.startTime="",this.condition.endTime="",s()(this.conditions,this.reqData),this.handleSearch(this.conditions))}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buy"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.exportTable()}}},[t._v("导出Excel")])],1),t._v(" "),a("el-col",{attrs:{span:1.5}}),t._v(" "),a("el-col",{attrs:{span:2,offset:5}},[a("el-select",{attrs:{placeholder:"订单状态",clearable:"",size:"small"},on:{change:t.searchStatus},model:{value:t.condition.status,callback:function(e){t.$set(t.condition,"status",e)},expression:"condition.status"}},t._l(t.options3,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"订单号",clearable:"",size:"small"},on:{input:function(e){t.searchID(t.condition.id)}},model:{value:t.condition.id,callback:function(e){t.$set(t.condition,"id",e)},expression:"condition.id"}})],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"用户名",clearable:"",size:"small"},on:{input:function(e){t.searchUserName(t.condition.userName)}},model:{value:t.condition.userName,callback:function(e){t.$set(t.condition,"userName",e)},expression:"condition.userName"}})],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"用户ID查询",clearable:"",size:"small"},on:{input:function(e){t.searchUserID(t.condition.userId)}},model:{value:t.condition.userId,callback:function(e){t.$set(t.condition,"userId",e)},expression:"condition.userId"}})],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-date-picker",{attrs:{type:"datetimerange",size:"small",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["12:00:00","08:00:00"]},on:{change:t.searchPickerDate},model:{value:t.value8,callback:function(e){t.value8=e},expression:"value8"}})],1)],1),t._v(" "),a("section",[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"订单编号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userId",label:"用户ID",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"用户名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"idName",label:"用户姓名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"merchantId",label:"商家ID",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"merchantIdName",label:"商家姓名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qty",label:"买入数量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalCost",label:"买入金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tradeTypeDesc",label:"买入方式",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createDate",label:"买入时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t.format(e.row.createDate))+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"finishDate",label:"到账时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t.format(e.row.finishDate))+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"statusDesc",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:t.statusColor(e.row.statusDesc)},[t._v(t._s(e.row.statusDesc))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return["NO_PAY"==e.row.status?a("span",[t._v("----")]):t._e(),t._v(" "),"PAYED"==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.closeOrder(e.row.id)}}},[t._v("关闭订单")]):t._e(),t._v(" "),"APPEAL"==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleProcess(e.row.id)}}},[t._v("已处理")]):t._e(),t._v(" "),"PROCESSING"==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handelAccount(e.row.id)}}},[t._v("确认到账")]):t._e(),t._v(" "),"PROCESSING"==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.closeOrder(e.row.id)}}},[t._v("关闭订单")]):t._e(),t._v(" "),"PROCESSING"==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.closeAppeal(e.row.id)}}},[t._v("关闭申诉")]):t._e(),t._v(" "),"FINISH"==e.row.status?a("span",[t._v("----")]):t._e(),t._v(" "),"CANCEL"==e.row.status?a("span",[t._v("----")]):t._e()]}}])})],1)],1),t._v(" "),t.tableData.length>0?a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:t.pageInfo},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange}})],1):t._e()],1)},staticRenderFns:[]};var c=a("/Xao")(i,l,!1,function(t){a("A5XL")},"data-v-ac909536",null);e.default=c.exports}});
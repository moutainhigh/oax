webpackJsonp([3,24,31,43,44],{"7SZx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZLEe"),i=a.n(n),l=a("aA9S"),o=a.n(l),s=a("6iV/"),r=a.n(s),c=a("zY+o"),u={data:function(){return{dialogFormVisible:!1,dialogFormVisible1:!1,formLabelWidth:"80px",tableData:[],reqData:{pageNum:1,pageSize:10},total:0,pageInfo:{},condition:{status:"",id:""},options3:[{value:"0",label:"未开始"},{value:"1",label:"进行中"},{value:"2",label:"已结束"}],value7:"",value8:"",value9:[],value10:[],form:{id:"",reachBase:"",reachNeed:"",participateBase:"",startTime:"",endTime:""},editform:{id:"",reachBase:"",participateBase:""}}},components:{Pagination:a("1onU").a},filters:{filterStatus:function(t){switch(t){case 0:return"未开始";case 1:return"进行中";case 2:return"已结束"}}},computed:{conditions:function(){return{status:this.condition.status,id:this.condition.id}},forms:function(){return{id:this.form.id,reachBase:this.form.reachBase,reachNeed:this.form.reachNeed,participateBase:this.form.participateBase,startTime:this.form.startTime,endTime:this.form.endTime}},editforms:function(){return{id:this.editform.id,reachBase:this.editform.reachBase,participateBase:this.editform.participateBase}}},mounted:function(){this.initData()},methods:{add0:function(t){return t<10?"0"+t:t},format:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),l=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return a+"-"+this.add0(n)+"-"+this.add0(i)+" "+this.add0(l)+":"+this.add0(o)+":"+this.add0(s)},pickerDate:function(t){console.log(t),t?(this.form.startTime=t[0],this.form.endTime=t[1]):(this.form.startTime="",this.form.endTime="")},handleOpen:function(t){var e=this;c.c(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},handleFinish:function(t){var e=this;c.b(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},handleClose:function(t){var e=this;c.a(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},initData:function(){var t=this;o()(this.conditions,this.reqData);var e=this.conditions;c.d(e).then(function(e){var a=e.data;t.tableData=a.list,t.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t)})},handleSearch:function(t){var e=this;c.d(t).then(function(t){var a=t.data;e.tableData=a.list,e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t),e.loading=!1})},searchActiveId:function(t){this.condition.id=t,o()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchStatus:function(t){this.condition.status=t,o()(this.conditions,this.reqData),this.handleSearch(this.conditions)},handleSizeChange:function(t){this.reqData.pageSize=t,this.initData()},handleCurrentChange:function(t){this.reqData.pageNum=t,this.initData()},handleEdit:function(t,e){this.dialogFormVisible1=!0,console.log(e),this.editform=e,console.log(this.editforms)},submit:function(){var t=this,e=this.forms;e=r.a.stringify(e),c.e(e).then(function(e){t.loading=!1,console.log(e.data),t.dialogFormVisible=!1,t.$message.success("提交成功"),t.initData(),i()(t.form).map(function(e){return t.form[e]=""}),t.value7="",t.value8=""}).catch(function(e){console.log(e),t.loading=!1,t.$message.error(e.msg)})},submitEdit:function(){var t=this,e=this.editforms.id,a=this.editforms;a=r.a.stringify(a),c.g(e,a).then(function(e){t.loading=!1,console.log(e.data),t.dialogFormVisible1=!1,t.$message.success("修改成功"),t.initData()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error(e.msg)})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"active"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("+ 新增活动")])],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:10}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入期号",clearable:"",size:"small"},on:{input:function(e){t.searchActiveId(t.condition.id)}},model:{value:t.condition.id,callback:function(e){t.$set(t.condition,"id",e)},expression:"condition.id"}})],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:1}},[a("el-select",{attrs:{placeholder:"请选择状态",clearable:"",size:"small"},on:{change:t.searchStatus},model:{value:t.condition.status,callback:function(e){t.$set(t.condition,"status",e)},expression:"condition.status"}},t._l(t.options3,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"期号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reach",label:"达标人数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.reach))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"reachBase",label:"达标基数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reachNeed",label:"需人达标",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"participate",label:"参与人数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"participateBase",label:"参与人数基数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"buyCount",label:"购买人数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("filterStatus")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"finishTime",label:"完成时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.finishTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),0==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleOpen(e.row.id)}}},[t._v("开启活动")]):t._e(),t._v(" "),1==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleFinish(e.row.id)}}},[t._v("结束活动")]):t._e(),t._v(" "),2==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleClose(e.row.id)}}},[t._v("关闭订单")]):t._e()]}}])})],1)],1),t._v(" "),t.tableData.length>0?a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:t.pageInfo},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange}})],1):t._e(),t._v(" "),a("el-dialog",{attrs:{title:"添加活动",visible:t.dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"活动id","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"达标基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.reachBase,callback:function(e){t.$set(t.form,"reachBase",e)},expression:"form.reachBase"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动达标人数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.reachNeed,callback:function(e){t.$set(t.form,"reachNeed",e)},expression:"form.reachNeed"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参与人数基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.participateBase,callback:function(e){t.$set(t.form,"participateBase",e)},expression:"form.participateBase"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动开始/结束","label-width":t.formLabelWidth}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["12:00:00","08:00:00"]},on:{change:t.pickerDate},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑活动",visible:t.dialogFormVisible1,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[a("el-form",{attrs:{model:t.editform}},[a("el-form-item",{attrs:{label:"活动id","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.id,callback:function(e){t.$set(t.editform,"id",e)},expression:"editform.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"达标基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.reachBase,callback:function(e){t.$set(t.editform,"reachBase",e)},expression:"editform.reachBase"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参与人数基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.participateBase,callback:function(e){t.$set(t.editform,"participateBase",e)},expression:"editform.participateBase"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible1=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=a("/Xao")(u,d,!1,function(t){a("BY5u")},"data-v-52a13bb7",null);e.default=p.exports},A6wA:function(t,e,a){var n=a("mpIZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("2285b620",n,!0)},BY5u:function(t,e,a){var n=a("Re7x");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("7d49c684",n,!0)},CIVG:function(t,e,a){var n=a("iwbK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("3ea0ff96",n,!0)},IlBZ:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"",""])},PNCe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7SZx"),i=a("uAlj"),l=a("nHSV"),o=a("x6RS"),s={data:function(){return{activeName:"activeData",show:"activeData"}},components:{activeData:n.default,joinData:i.default,helpData:l.default,dice:o.default},mounted:function(){},methods:{},watch:{activeName:function(t){this.show=t}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bhb"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"活动数据",name:"activeData"}},[a("activeData")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"参与数据"}},[a("joinData")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"助力数据"}},[a("helpData")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Dice游戏"}},[a("dice")],1)],1)],1)},staticRenderFns:[]};var c=a("/Xao")(s,r,!1,function(t){a("VjxS")},"data-v-6d065ed0",null);e.default=c.exports},Re7x:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.active .dialog-footer[data-v-52a13bb7] {\n  text-align: center;\n}\n",""])},VjxS:function(t,e,a){var n=a("X8WW");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("8bf08f42",n,!0)},X8WW:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"",""])},gZYz:function(t,e,a){var n=a("IlBZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("993b02e6",n,!0)},iwbK:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"",""])},mpIZ:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.dice .config[data-v-6f99b3c6] {\n  margin-top: 20px;\n  background: #fff;\n  padding: 30px 0;\n}\n.dice .config[data-v-6f99b3c6] .el-col-10 {\n    padding: 20px 10px;\n}\n.dice .config .last[data-v-6f99b3c6] .el-slider__bar {\n    background-color: #f56c6c;\n}\n.dice .config .last[data-v-6f99b3c6] .el-slider__button {\n    border: solid 2px #f56c6c;\n}\n.dice .config .btm[data-v-6f99b3c6] {\n    margin-top: 30px;\n    text-align: center;\n}\n.dice .config .btm[data-v-6f99b3c6] .el-button--medium {\n      padding: 10px 50px;\n}\n",""])},nHSV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aA9S"),i=a.n(n),l=(a("6iV/"),a("zY+o")),o={data:function(){return{dialogFormVisible:!1,dialogFormVisible1:!1,formLabelWidth:"80px",tableData:[],reqData:{pageNum:1,pageSize:10},total:0,pageInfo:{},condition:{phone:"",userId:"",activityId:""}}},components:{Pagination:a("1onU").a},computed:{conditions:function(){return{phone:this.condition.phone,userId:this.condition.userId,activityId:this.condition.activityId}}},mounted:function(){this.initData()},methods:{add0:function(t){return t<10?"0"+t:t},format:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),l=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return a+"-"+this.add0(n)+"-"+this.add0(i)+" "+this.add0(l)+":"+this.add0(o)+":"+this.add0(s)},initData:function(){var t=this;i()(this.conditions,this.reqData);var e=this.conditions;l.i(e).then(function(e){var a=e.data;t.tableData=a.list,t.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t)})},handleSearch:function(t){var e=this;l.i(t).then(function(t){var a=t.data;e.tableData=a.list,e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t),e.loading=!1})},searchActiveId:function(t){this.condition.activityId=t,i()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchUserId:function(t){this.condition.userId=t,i()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchPhone:function(t){this.condition.phone=t,i()(this.conditions,this.reqData),this.handleSearch(this.conditions)},handleSizeChange:function(t){this.reqData.pageSize=t,this.initData()},handleCurrentChange:function(t){this.reqData.pageNum=t,this.initData()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"active"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2.5,offset:10}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入期号",clearable:"",size:"small"},on:{input:function(e){t.searchActiveId(t.condition.activityId)}},model:{value:t.condition.activityId,callback:function(e){t.$set(t.condition,"activityId",e)},expression:"condition.activityId"}})],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:1}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入用户id",clearable:"",size:"small"},on:{input:function(e){t.searchUserId(t.condition.userId)}},model:{value:t.condition.userId,callback:function(e){t.$set(t.condition,"userId",e)},expression:"condition.userId"}})],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:1}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入用户手机号",clearable:"",size:"small"},on:{input:function(e){t.searchPhone(t.condition.phone)}},model:{value:t.condition.phone,callback:function(e){t.$set(t.condition,"phone",e)},expression:"condition.phone"}})],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"activityId",label:"活动id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userId",label:"用户id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"助力好友手机号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"helpValue",label:"助力值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"助力时间",align:"center"}})],1)],1),t._v(" "),t.tableData.length>0?a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:t.pageInfo},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange}})],1):t._e()],1)},staticRenderFns:[]};var r=a("/Xao")(o,s,!1,function(t){a("CIVG")},"data-v-01733564",null);e.default=r.exports},uAlj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aA9S"),i=a.n(n),l=(a("6iV/"),a("zY+o")),o={data:function(){return{dialogFormVisible:!1,dialogFormVisible1:!1,formLabelWidth:"80px",tableData:[],reqData:{pageNum:1,pageSize:10},total:0,pageInfo:{},condition:{status:"",userId:"",activityId:""},options3:[{value:"0",label:"已参与"},{value:"1",label:"已达标"}]}},components:{Pagination:a("1onU").a},filters:{filterStatus:function(t){switch(t){case 0:return"已参与";case 1:return"已达标"}}},computed:{conditions:function(){return{status:this.condition.status,userId:this.condition.userId,activityId:this.condition.activityId}}},mounted:function(){this.initData()},methods:{add0:function(t){return t<10?"0"+t:t},format:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),l=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return a+"-"+this.add0(n)+"-"+this.add0(i)+" "+this.add0(l)+":"+this.add0(o)+":"+this.add0(s)},initData:function(){var t=this;i()(this.conditions,this.reqData);var e=this.conditions;l.j(e).then(function(e){var a=e.data;t.tableData=a.list,t.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t)})},handleSearch:function(t){var e=this;l.j(t).then(function(t){var a=t.data;e.tableData=a.list,e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t),e.loading=!1})},searchActiveId:function(t){this.condition.activityId=t,i()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchUserId:function(t){this.condition.userId=t,i()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchStatus:function(t){this.condition.status=t,i()(this.conditions,this.reqData),this.handleSearch(this.conditions)},handleSizeChange:function(t){this.reqData.pageSize=t,this.initData()},handleCurrentChange:function(t){this.reqData.pageNum=t,this.initData()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"active"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2.5,offset:10}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入期号",clearable:"",size:"small"},on:{input:function(e){t.searchActiveId(t.condition.activityId)}},model:{value:t.condition.activityId,callback:function(e){t.$set(t.condition,"activityId",e)},expression:"condition.activityId"}})],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:1}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入用户id",clearable:"",size:"small"},on:{input:function(e){t.searchUserId(t.condition.userId)}},model:{value:t.condition.userId,callback:function(e){t.$set(t.condition,"userId",e)},expression:"condition.userId"}})],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:1}},[a("el-select",{attrs:{placeholder:"请选择状态",clearable:"",size:"small"},on:{change:t.searchStatus},model:{value:t.condition.status,callback:function(e){t.$set(t.condition,"status",e)},expression:"condition.status"}},t._l(t.options3,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"activityId",label:"活动id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userId",label:"用户id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"shareCode",label:"活动分享标识码",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qty",label:"购买个数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remainQty",label:"剩余可交易量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"helpCount",label:"助力人数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"helpValue",label:"当前助力值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("filterStatus")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"参与时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"finishTime",label:"达标时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.finishTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"validTime",label:"购买有效期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.validTime)))])]}}])})],1)],1),t._v(" "),t.tableData.length>0?a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:t.pageInfo},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange}})],1):t._e()],1)},staticRenderFns:[]};var r=a("/Xao")(o,s,!1,function(t){a("gZYz")},"data-v-0095e7d4",null);e.default=r.exports},x6RS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("6iV/"),i=a.n(n),l=a("zY+o"),o={data:function(){return{tableData:[],maxs:400,value0:50,value1:50,value2:50,value3:50,value4:50,value5:50,value6:50,value7:50}},components:{},created:function(){this.initDice()},mounted:function(){},methods:{change0:function(t){this.value0=t},change1:function(t){this.value1=t},change2:function(t){this.value2=t},change3:function(t){this.value3=t},change4:function(t){this.value4=t},change5:function(t){this.value5=t},change6:function(t){this.value6=t},change7:function(t){this.value7=t},initDice:function(){var t=this;l.h().then(function(e){t.tableData=[],t.tableData.push(e.data),t.value0=t.tableData[0].backWin60,t.value1=t.tableData[0].backWin70,t.value2=t.tableData[0].backWin80,t.value3=t.tableData[0].backWin90,t.value4=t.tableData[0].backWin0,t.value6=t.tableData[0].backWin100,t.value7=t.tableData[0].backWin200,t.value5=t.tableData[0].randomRate}).catch(function(t){console.log(t)})},config:function(){var t=this,e={backWin60:this.value0,backWin70:this.value1,backWin80:this.value2,backWin90:this.value3,backWin0:this.value4,backWin100:this.value6,backWin200:this.value7,randomRate:this.value5};e=i.a.stringify(e),l.f(e).then(function(e){e.success?(t.initDice(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(t){console.log(t)})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dice"},[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"backWin0",label:"0-60的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin60",label:"60-70的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin70",label:"70-80的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin80",label:"80-90的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin90",label:"90-100的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin100",label:"100-200的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin200",label:"200-300的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"randomRate",label:"随机数乘以倍率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"countUser",label:"参与用户总数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"allBetQty",label:"用户总投注",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"allPayoutQty",label:"用户总获利 ",align:"center"}})],1),t._v(" "),a("div",{staticClass:"config"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("60-70的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change0},model:{value:t.value0,callback:function(e){t.value0=e},expression:"value0"}})],1),t._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("span",[t._v("70-80的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("80-90的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("span",[t._v("90-100的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change3},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("100-200的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change6},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}})],1),t._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("span",[t._v("200-300的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change7},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("0-60的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change4},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),t._v(" "),a("el-col",{staticClass:"last",attrs:{span:10,offset:2}},[a("span",[t._v("随机数乘以倍率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":"",max:t.maxs},on:{change:t.change5},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1)],1),t._v(" "),a("div",{staticClass:"btm"},[a("el-button",{attrs:{type:"primary"},on:{click:t.config}},[t._v("配置")])],1)],1)],1)},staticRenderFns:[]};var r=a("/Xao")(o,s,!1,function(t){a("A6wA")},"data-v-6f99b3c6",null);e.default=r.exports}});
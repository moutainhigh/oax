webpackJsonp([40],{"7SZx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("ZLEe"),o=a.n(i),n=a("aA9S"),l=a.n(n),s=a("6iV/"),r=a.n(s),c=a("zY+o"),u={data:function(){return{dialogFormVisible:!1,dialogFormVisible1:!1,formLabelWidth:"80px",tableData:[],reqData:{pageNum:1,pageSize:10},total:0,pageInfo:{},condition:{status:"",id:""},options3:[{value:"0",label:"未开始"},{value:"1",label:"进行中"},{value:"2",label:"已结束"}],value7:"",value8:"",value9:[],value10:[],form:{id:"",reachBase:"",reachNeed:"",participateBase:"",startTime:"",endTime:""},editform:{id:"",reachBase:"",participateBase:""}}},components:{Pagination:a("1onU").a},filters:{filterStatus:function(t){switch(t){case 0:return"未开始";case 1:return"进行中";case 2:return"已结束"}}},computed:{conditions:function(){return{status:this.condition.status,id:this.condition.id}},forms:function(){return{id:this.form.id,reachBase:this.form.reachBase,reachNeed:this.form.reachNeed,participateBase:this.form.participateBase,startTime:this.form.startTime,endTime:this.form.endTime}},editforms:function(){return{id:this.editform.id,reachBase:this.editform.reachBase,participateBase:this.editform.participateBase}}},mounted:function(){this.initData()},methods:{add0:function(t){return t<10?"0"+t:t},format:function(t){var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),n=e.getHours(),l=e.getMinutes(),s=e.getSeconds();return a+"-"+this.add0(i)+"-"+this.add0(o)+" "+this.add0(n)+":"+this.add0(l)+":"+this.add0(s)},pickerDate:function(t){console.log(t),t?(this.form.startTime=t[0],this.form.endTime=t[1]):(this.form.startTime="",this.form.endTime="")},handleOpen:function(t){var e=this;c.c(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},handleFinish:function(t){var e=this;c.b(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},handleClose:function(t){var e=this;c.a(t).then(function(t){t.success?(e.$message.success(t.msg),e.initData()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},initData:function(){var t=this;l()(this.conditions,this.reqData);var e=this.conditions;c.d(e).then(function(e){var a=e.data;t.tableData=a.list,t.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t)})},handleSearch:function(t){var e=this;c.d(t).then(function(t){var a=t.data;e.tableData=a.list,e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t),e.loading=!1})},searchActiveId:function(t){this.condition.id=t,l()(this.conditions,this.reqData),this.handleSearch(this.conditions)},searchStatus:function(t){this.condition.status=t,l()(this.conditions,this.reqData),this.handleSearch(this.conditions)},handleSizeChange:function(t){this.reqData.pageSize=t,this.initData()},handleCurrentChange:function(t){this.reqData.pageNum=t,this.initData()},handleEdit:function(t,e){this.dialogFormVisible1=!0,console.log(e),this.editform=e,console.log(this.editforms)},submit:function(){var t=this,e=this.forms;e=r.a.stringify(e),c.e(e).then(function(e){t.loading=!1,console.log(e.data),t.dialogFormVisible=!1,t.$message.success("提交成功"),t.initData(),o()(t.form).map(function(e){return t.form[e]=""}),t.value7="",t.value8=""}).catch(function(e){console.log(e),t.loading=!1,t.$message.error(e.msg)})},submitEdit:function(){var t=this,e=this.editforms.id,a=this.editforms;a=r.a.stringify(a),c.j(e,a).then(function(e){t.loading=!1,console.log(e.data),t.dialogFormVisible1=!1,t.$message.success("修改成功"),t.initData()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error(e.msg)})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"active"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("+ 新增活动")])],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:10}},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入期号",clearable:"",size:"small"},on:{input:function(e){t.searchActiveId(t.condition.id)}},model:{value:t.condition.id,callback:function(e){t.$set(t.condition,"id",e)},expression:"condition.id"}})],1),t._v(" "),a("el-col",{attrs:{span:2.5,offset:1}},[a("el-select",{attrs:{placeholder:"请选择状态",clearable:"",size:"small"},on:{change:t.searchStatus},model:{value:t.condition.status,callback:function(e){t.$set(t.condition,"status",e)},expression:"condition.status"}},t._l(t.options3,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"期号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reach",label:"达标人数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.reach))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"reachBase",label:"达标基数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reachNeed",label:"需人达标",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"participate",label:"参与人数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"participateBase",label:"参与人数基数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"buyCount",label:"购买人数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("filterStatus")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"finishTime",label:"完成时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.finishTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),0==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleOpen(e.row.id)}}},[t._v("开启活动")]):t._e(),t._v(" "),1==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleFinish(e.row.id)}}},[t._v("结束活动")]):t._e(),t._v(" "),2==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleClose(e.row.id)}}},[t._v("关闭订单")]):t._e()]}}])})],1)],1),t._v(" "),t.tableData.length>0?a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:t.pageInfo},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange}})],1):t._e(),t._v(" "),a("el-dialog",{attrs:{title:"添加活动",visible:t.dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"活动id","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"达标基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.reachBase,callback:function(e){t.$set(t.form,"reachBase",e)},expression:"form.reachBase"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动达标人数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.reachNeed,callback:function(e){t.$set(t.form,"reachNeed",e)},expression:"form.reachNeed"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参与人数基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.participateBase,callback:function(e){t.$set(t.form,"participateBase",e)},expression:"form.participateBase"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动开始/结束","label-width":t.formLabelWidth}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["12:00:00","08:00:00"]},on:{change:t.pickerDate},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑活动",visible:t.dialogFormVisible1,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[a("el-form",{attrs:{model:t.editform}},[a("el-form-item",{attrs:{label:"活动id","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.id,callback:function(e){t.$set(t.editform,"id",e)},expression:"editform.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"达标基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.reachBase,callback:function(e){t.$set(t.editform,"reachBase",e)},expression:"editform.reachBase"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参与人数基数","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.participateBase,callback:function(e){t.$set(t.editform,"participateBase",e)},expression:"editform.participateBase"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible1=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var f=a("/Xao")(u,d,!1,function(t){a("BY5u")},"data-v-52a13bb7",null);e.default=f.exports},BY5u:function(t,e,a){var i=a("Re7x");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("7d49c684",i,!0)},Re7x:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.active .dialog-footer[data-v-52a13bb7] {\n  text-align: center;\n}\n",""])}});
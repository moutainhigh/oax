webpackJsonp([30],{"6nzU":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("3cXf"),i=a.n(l),n=a("vLgD");var o=a("1onU"),s=a("6lZ+"),r=a("EGuJ"),d=a("mC4M"),c=a("5aCZ"),u={name:"noticeManage",data:function(){return{loading:!1,editLoading:!1,tableData:[],pageInfo:{current_page:0,total:0},reqData:{cnTitle:"",status:"",type:"",beginTime:"",endTime:"",pageNum:1,pageSize:10},selectBar:[{name:"发布状态",label:"status",data:[{id:"",name:"全部"},{id:1,name:"未发布"},{id:2,name:"已发布"}]},{name:"发布类型",label:"type",data:[{id:"",name:"全部"},{id:1,name:"最新资讯"},{id:2,name:"常见问题"},{id:3,name:"官方公告"},{id:4,name:"法律支援"}]}],editVisible:!1,editDetail:{cnTitle:"",enTitle:"",type:"",releaseTime:"",status:"",cnContent:"",enContent:""},rules:{cnTitle:[{required:!0,message:"请输入文章标题",trigger:"blur"}],enTitle:[{required:!0,message:"请输入文章标题（英文）",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],releaseTime:[{required:!0,message:"请输入发布日期",trigger:"change"}],status:[{required:!0,message:"请选择是否发布",trigger:"change"}],cnContent:[{required:!0,message:"请输入公告内容",trigger:"blur"}],enContent:[{required:!0,message:"请输入公告内容（英文）",trigger:"blur"}]},delId:"",addVisible:!1,addLoading:!1,addDetail:{cnTitle:"",enTitle:"",type:"",releaseTime:"",status:"",cnContent:"",enContent:""}}},methods:{addList:function(){this.addVisible=!0},addSubmitForm:function(e){var t=this;console.log(t.addDetail),t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var a;t.loading=!0,(a=t.addDetail,Object(n.a)({url:"article/save",method:"POST",data:a})).then(function(e){t.loading=!1,console.log(e),!0===e.success?(t.$message({message:"添加成功",type:"success"}),t.handleList()):t.$message.error("添加失败"),t.addVisible=!1}).catch(function(e){console.log(e),t.$message.error("添加失败"),t.loading=!1})})},delRow:function(e){var t=this;t.delId=e.id,t.loading=!0,function(e){return Object(n.a)({url:"article/delete/"+e,method:"DELETE"})}(t.delId).then(function(e){console.log(t.delId),t.loading=!1,console.log(e),!0===e.success?(t.$message({message:"删除成功",type:"success"}),t.handleList()):t.$message.error("删除失败")}).catch(function(e){console.log(e),t.$message.error("删除失败"),t.loading=!1})},handleList:function(){var e,t=this;this.loading=!0,(e=this.reqData,Object(n.a)({url:"article/manageList",method:"post",data:e})).then(function(e){console.log(t.reqData),t.loading=!1;var a=e.data;t.tableData=a.list,console.log(t.tableData),t.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(e){console.log(e),t.loading=!1})},handleSizeChange:function(e){this.reqData.page_size=e,this.handleList()},handleCurrentChange:function(e){this.reqData.pageNum=e,this.handleList()},editShow:function(e){var t,a=this;a.editLoading=!0,a.loading=!0,console.log(e.id),(t=e.id,Object(n.a)({url:"article/get/"+t,method:"GET"})).then(function(e){console.log(e),a.loading=!1,a.editLoading=!1;var t=e.data;a.editDetail=a.cloneObjectFn(t),a.editDetail.type=a.editDetail.type.toString(),a.editDetail.status=a.editDetail.status.toString()}).catch(function(e){console.log(e),a.loading=!1,a.editLoading=!1}),a.editVisible=!0},submitForm:function(e){var t=this;console.log(t.editDetail),t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.editLoading=!1,!1;var a;t.loading=!0,(a=t.editDetail,Object(n.a)({url:"article/update",method:"put",data:a})).then(function(e){t.loading=!1,console.log(e),t.handleList(),t.editVisible=!1,t.editLoading=!1,t.$message({message:"修改成功",type:"success"})}).catch(function(e){console.log(e),t.$message.error("修改失败"),t.loading=!1,t.editLoading=!1})})},cloneObjectFn:function(e){return JSON.parse(i()(e))}},mounted:function(){this.handleList()},components:{Pagination:o.a,QuitConfirm:s.a,FilterSection:d.a,DragDialog:r.a,Tinymce:c.a}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("section",{staticClass:"filter-container clearfix"},[a("section",{staticClass:"filter-container-section clearfix"},[a("div",{staticClass:"fl filter-container-box"},[a("label",{staticClass:"label"},[e._v("文章标题：")]),e._v(" "),a("div",{staticClass:"filter-container-rightbox"},[a("el-input",{staticClass:"filter-section-labal",model:{value:e.reqData.cnTitle,callback:function(t){e.$set(e.reqData,"cnTitle",t)},expression:"reqData.cnTitle"}})],1)]),e._v(" "),e._l(e.selectBar,function(t,l){return a("div",{key:l,staticClass:"fl filter-container-box"},[a("label",{staticClass:"label"},[e._v(e._s(t.name)+": ")]),e._v(" "),a("el-select",{staticClass:"filter-section-labal filter-container-rightbox",attrs:{placeholder:"请选择",clearable:""},on:{change:e.handleList},model:{value:e.reqData[t.label],callback:function(a){e.$set(e.reqData,t.label,a)},expression:"reqData[value.label]"}},e._l(t.data,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)}),e._v(" "),a("div",{staticClass:"fl filter-container-box"},[a("label",{staticClass:"label "},[e._v("上传日期:")]),e._v(" "),a("div",{staticClass:"filter-container-rightbox"},[a("el-date-picker",{attrs:{editable:!1,type:"datetime",placeholder:"开始日期",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.reqData.beginTime,callback:function(t){e.$set(e.reqData,"beginTime",t)},expression:"reqData.beginTime"}}),e._v(" "),a("el-date-picker",{attrs:{align:"right",editable:!1,type:"datetime",placeholder:"结束日期",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.reqData.endTime,callback:function(t){e.$set(e.reqData,"endTime",t)},expression:"reqData.endTime"}})],1)]),e._v(" "),a("div",{staticClass:"btn-box"},[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.handleList}},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:e.addList}},[e._v("添加")])],1)],2)]),e._v(" "),a("section",{staticClass:"list-table-container"},[a("section",{staticClass:"table-container-area"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"cnTitle",label:"文章标题",width:"300","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"readCount",label:"浏览次数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"adminName",label:"发布者"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?a("div",[e._v("最新资讯")]):2===t.row.type?a("div",[e._v("常见问题")]):3===t.row.type?a("div",[e._v("官方公告")]):a("div",[e._v("法律支援")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"是否发布"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?a("div",[e._v("否")]):a("div",[e._v("是")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"releaseTime",label:"发布日期",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"最后修改日期",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"opt-btns-container"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.editShow(t.row)}}},[e._v("修改")]),e._v(" "),a("quit-confirm",{attrs:{type:"danger",message:"删除操作不可逆，确定要删除吗？"},on:{handle:function(a){e.delRow(t.row)}}},[e._v("删除")])],1)]}}])})],1)],1),e._v(" "),a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1)]),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.editLoading,expression:"editLoading"}],staticClass:"center-dialog",attrs:{title:"公告管理",visible:e.editVisible},on:{"update:visible":function(t){e.editVisible=t}}},[a("section",{staticClass:"dialog-section"},[a("h3",{staticClass:"title"},[e._v("编辑公告")])]),e._v(" "),a("el-form",{ref:"editDetail",attrs:{model:e.editDetail,rules:e.rules,"label-width":"150px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文章标题",prop:"cnTitle"}},[a("el-input",{model:{value:e.editDetail.cnTitle,callback:function(t){e.$set(e.editDetail,"cnTitle",t)},expression:"editDetail.cnTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文章标题（英文）",prop:"enTitle"}},[a("el-input",{model:{value:e.editDetail.enTitle,callback:function(t){e.$set(e.editDetail,"enTitle",t)},expression:"editDetail.enTitle"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:e.editDetail.type,callback:function(t){e.$set(e.editDetail,"type",t)},expression:"editDetail.type"}},[a("el-option",{attrs:{label:"最新资讯",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"常见问题",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"官方公告",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"法律支援",value:"4"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发布日期",prop:"releaseTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期",editable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.editDetail.releaseTime,callback:function(t){e.$set(e.editDetail,"releaseTime",t)},expression:"editDetail.releaseTime"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否发布",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:e.editDetail.status,callback:function(t){e.$set(e.editDetail,"status",t)},expression:"editDetail.status"}},[a("el-option",{attrs:{label:"否",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"是",value:"2"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公告内容",prop:"cnContent"}},[a("Tinymce",{model:{value:e.editDetail.cnContent,callback:function(t){e.$set(e.editDetail,"cnContent",t)},expression:"editDetail.cnContent"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公告内容（英文）",prop:"enContent"}},[a("Tinymce",{model:{value:e.editDetail.enContent,callback:function(t){e.$set(e.editDetail,"enContent",t)},expression:"editDetail.enContent"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("editDetail")}}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("关 闭")])],1)],1),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.addLoading,expression:"addLoading"}],staticClass:"center-dialog",attrs:{title:"公告管理",visible:e.addVisible},on:{"update:visible":function(t){e.addVisible=t}}},[a("section",{staticClass:"dialog-section"},[a("h3",{staticClass:"title"},[e._v("添加公告")])]),e._v(" "),a("el-form",{ref:"addDetail",attrs:{model:e.addDetail,rules:e.rules,"label-width":"150px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文章标题",prop:"cnTitle"}},[a("el-input",{model:{value:e.addDetail.cnTitle,callback:function(t){e.$set(e.addDetail,"cnTitle",t)},expression:"addDetail.cnTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文章标题（英文）",prop:"enTitle"}},[a("el-input",{model:{value:e.addDetail.enTitle,callback:function(t){e.$set(e.addDetail,"enTitle",t)},expression:"addDetail.enTitle"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:e.addDetail.type,callback:function(t){e.$set(e.addDetail,"type",t)},expression:"addDetail.type"}},[a("el-option",{attrs:{label:"最新资讯",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"常见问题",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"官方公告",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"法律支援",value:"4"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发布日期",prop:"releaseTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期",addable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addDetail.releaseTime,callback:function(t){e.$set(e.addDetail,"releaseTime",t)},expression:"addDetail.releaseTime"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否发布",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:e.addDetail.status,callback:function(t){e.$set(e.addDetail,"status",t)},expression:"addDetail.status"}},[a("el-option",{attrs:{label:"否",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"是",value:"2"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公告内容",prop:"cnContent"}},[a("Tinymce",{model:{value:e.addDetail.cnContent,callback:function(t){e.$set(e.addDetail,"cnContent",t)},expression:"addDetail.cnContent"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公告内容（英文）",prop:"enContent"}},[a("Tinymce",{model:{value:e.addDetail.enContent,callback:function(t){e.$set(e.addDetail,"enContent",t)},expression:"addDetail.enContent"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addSubmitForm("addDetail")}}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var m=a("/Xao")(u,p,!1,function(e){a("KoOh")},null,null);t.default=m.exports},KoOh:function(e,t,a){var l=a("tuee");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("8bSs")("6f64ca90",l,!0)},tuee:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.filter-container-section .filter-container-box {\n  margin: 0 20px 10px 0;\n}\n.filter-container-section .filter-container-rightbox {\n  display: inline-block;\n  margin: 0 0 5px 5px;\n}\n.filter-container-section .btn-box {\n  display: inline-block;\n}\n.filter-container-section .btn-box .btn {\n    margin-bottom: 10px;\n    font-size: 14px;\n    margin-right: 10px;\n}\n.dialog-section {\n  padding: 0 0 20px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.dialog-section .el-row:not(:first-child) {\n    margin-top: 20px;\n}\n.dialog-section .el-row .el-col > div {\n    display: inline-block;\n    vertical-align: top;\n}\n",""])}});
webpackJsonp([41],{A2Zz:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.viewer-open .el-dialog__wrapper {\n  z-index: 2001 !important;\n}\n.viewer-open .v-modal {\n  z-index: 2000 !important;\n  display: none !important;\n}\n",""])},TtwL:function(e,t,a){var n=a("A2Zz");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("64996dc9",n,!0)},fYGr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3cXf"),r=a.n(n),s=a("azsk"),i=a("1onU"),l=a("6lZ+"),o=a("ahvv"),c=(a("ba5Z"),{data:function(){var e=this;return{pickerBeginDateBefore:{disabledDate:function(t){var a=e.reqData.regEndDate;if(a)return t.getTime()>new Date(a)}},pickerBeginDateAfter:{disabledDate:function(t){var a=e.reqData.regBeginDate;if(a)return t.getTime()<new Date(a)}},auditlog:[],passVisible:!1,passLoading:!1,notPass:{},notPassSelectContent:"",userId:"",tableData:[],pageInfo:{current_page:0,total:0},reqData:{pageNum:1,pageSize:10,id:null,name:null,emailOrPhone:null,cardNo:null,regBeginDate:null,regEndDate:null},loading:!1,editForm:{},editLoading:!1,detailVisible:!1,cardtype:["",this.generateUser("idcard"),this.generateUser("passcard")]}},methods:{generateUser:a("ivlf").j,clearSearch:function(){this.reqData={page:1,page_size:10,id:null,name:null,emailOrPhone:null,cardNo:null,regBeginDate:null,regEndDate:null},this.handleList()},handleSizeChange:function(e){this.reqData.pageSize=e,this.reqData.pageNum=1,this.handleList()},handleCurrentChange:function(e){this.reqData.pageNum=e,this.handleList()},passTheAudit:function(e){var t=this;s.e(e).then(function(e){t.$message({type:"success",message:e.msg}),t.detailVisible=!1,t.handleList()}).catch(function(e){console.log(e)})},notPassAudit:function(e){this.passVisible=!0,this.userId=e},pass:function(){var e=this;this.notPass.userId=this.userId,s.d(this.notPass).then(function(t){e.$message({type:"success",message:t.msg}),e.passVisible=!1,e.detailVisible=!1,e.handleList()}).catch(function(e){console.log(e)})},onSubmit:function(){this.handleList()},cloneObjectFn:function(e){return JSON.parse(r()(e))},handleList:function(){var e=this;this.loading=!0;var t=this.cloneObjectFn(this.reqData);t.regEndDate&&(t.regEndDate=t.regEndDate+86399999),s.c(t).then(function(t){e.loading=!1;var a=t.data;console.log(a.list),e.tableData=a.list,e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total},console.log(e.pageInfo)}).catch(function(t){console.log(t),e.loading=!1})},handAudit:function(e){var t=this;this.editLoading=!0,this.detailVisible=!0,s.a(e).then(function(e){t.editForm=e.data,new o.a(document.getElementById("viewer-box"))}).then(function(a){s.b(e).then(function(e){t.editLoading=!1,t.auditlog=e.data})})},notPassSelect:function(){this.notPass.remark?this.notPass.remark=this.notPass.remark+this.notPassSelectContent:this.notPass.remark=this.notPassSelectContent}},mounted:function(){this.handleList()},components:{Pagination:i.a,QuitConfirm:l.a}}),d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userLevel-page"},[a("el-card",{staticClass:"box-card"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.reqData}},[a("el-form-item",{attrs:{label:e.generateUser("userid")}},[a("el-input",{model:{value:e.reqData.id,callback:function(t){e.$set(e.reqData,"id",t)},expression:"reqData.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateUser("names")}},[a("el-input",{model:{value:e.reqData.name,callback:function(t){e.$set(e.reqData,"name",t)},expression:"reqData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateUser("phone")+"/"+e.generateUser("email")}},[a("el-input",{model:{value:e.reqData.emailOrPhone,callback:function(t){e.$set(e.reqData,"emailOrPhone",t)},expression:"reqData.emailOrPhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateUser("cardid")}},[a("el-input",{model:{value:e.reqData.cardNo,callback:function(t){e.$set(e.reqData,"cardNo",t)},expression:"reqData.cardNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateUser("regtime")}},[a("el-date-picker",{attrs:{editable:!1,type:"date",placeholder:e.generateUser("startime"),format:"yyyy-MM-dd","value-format":"timestamp","picker-options":e.pickerBeginDateBefore},model:{value:e.reqData.regBeginDate,callback:function(t){e.$set(e.reqData,"regBeginDate",t)},expression:"reqData.regBeginDate"}}),e._v(" "),a("el-date-picker",{attrs:{align:"right",editable:!1,type:"date",placeholder:e.generateUser("endtime"),format:"yyyy-MM-dd","value-format":"timestamp","picker-options":e.pickerBeginDateAfter},model:{value:e.reqData.regEndDate,callback:function(t){e.$set(e.reqData,"regEndDate",t)},expression:"reqData.regEndDate"}})],1),e._v(" "),a("div",[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.generateUser("query")))])],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.clearSearch}},[e._v(e._s(e.generateUser("clearQuery:")))])],1)],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"userId",label:e.generateUser("userid"),width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:e.generateUser("names"),width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:e.generateUser("phone")}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:e.generateUser("email")}}),e._v(" "),a("el-table-column",{attrs:{prop:"verificationType",label:e.generateUser("cardtpye"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.cardtype[t.row.verificationType]))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"cardNo",label:e.generateUser("cardid"),width:"350"}}),e._v(" "),a("el-table-column",{attrs:{prop:"checkTime",label:e.generateUser("rztime")}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:e.generateUser("control"),width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handAudit(t.row.userId)}}},[e._v(e._s(e.generateUser("sh")))])]}}])})],1),e._v(" "),a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.editLoading,expression:"editLoading"}],staticClass:"center-dialog",attrs:{title:e.generateUser("lvsh"),visible:e.detailVisible},on:{"update:visible":function(t){e.detailVisible=t}}},[a("el-card",{staticClass:"dialog-section"},[a("el-row",[a("el-col",{attrs:{span:7}},[a("p",[e._v(e._s(e.generateUser("names"))+"："+e._s(e.editForm.name))])]),e._v(" "),a("el-col",{attrs:{span:7}},[a("p",[e._v(e._s(e.generateUser("cardtpye"))+"："+e._s(e.editForm.verificationType))])]),e._v(" "),a("el-col",{attrs:{span:7}},[a("p",[e._v(e._s(e.generateUser("cardid"))+"："+e._s(e.editForm.cardNo))])])],1)],1),e._v(" "),a("el-card",[a("el-row",{attrs:{id:"viewer-box"}},[a("el-col",{attrs:{span:12}},[a("p",[e._v(e._s(e.generateUser("cardphotoA"))+":")]),e._v(" "),a("div",[a("img",{staticStyle:{width:"500px",height:"300px",display:"block"},attrs:{src:e.editForm.idImageA}})])]),e._v(" "),a("el-col",{attrs:{span:12}},[a("p",[e._v(e._s(e.generateUser("cardphotoB"))+":")]),e._v(" "),a("div",[a("img",{staticStyle:{width:"500px",height:"300px",display:"block"},attrs:{src:e.editForm.idImageB}})])])],1),e._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"25px"}},[a("quit-confirm",{attrs:{type:"primary",message:e.generateUser("qdshtg")},on:{handle:function(t){e.passTheAudit(e.editForm.userId)}}},[e._v(e._s(e.generateUser("shtg")))]),e._v(" "),a("quit-confirm",{attrs:{type:"danger",message:e.generateUser("qdshbtg")},on:{handle:function(t){e.notPassAudit(e.editForm.userId)}}},[e._v(e._s(e.generateUser("shbtg")))]),e._v(" "),a("el-button",{on:{click:function(t){e.detailVisible=!1}}},[e._v(e._s(e.generateUser("cc")))])],1)],1),e._v(" "),a("section",{staticClass:"list-table-container"},[a("h3",[e._v(e._s(e.generateUser("records"))+"：")]),e._v(" "),a("section",{staticClass:"table-container-area"},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.auditlog}},[a("el-table-column",{attrs:{prop:"adminId",label:e.generateUser("dealid")}}),e._v(" "),a("el-table-column",{attrs:{prop:"adminName",label:e.generateUser("dealname")}}),e._v(" "),a("el-table-column",{attrs:{prop:"disposeTime",label:e.generateUser("dealdate")}}),e._v(" "),a("el-table-column",{attrs:{prop:"describes",label:e.generateUser("desc")}}),e._v(" "),a("el-table-column",{attrs:{prop:"describes",label:e.generateUser("note")}})],1)],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.detailVisible=!1}}},[e._v(e._s(e.generateUser("cancel")))])],1)],1),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.passLoading,expression:"passLoading"}],staticClass:"mini-dialog",attrs:{title:e.generateUser("shdetail"),visible:e.passVisible},on:{"update:visible":function(t){e.passVisible=t}}},[e._v("\n      "+e._s(e.generateUser("quickIn"))+"：\n      "),a("el-select",{staticStyle:{width:"100%","margin-bottom":"15px"},attrs:{placeholder:e.generateUser("quickIn"),clearable:""},on:{change:e.notPassSelect},model:{value:e.notPassSelectContent,callback:function(t){e.notPassSelectContent=t},expression:"notPassSelectContent"}},[a("el-option",{attrs:{label:e.generateUser("unclearA"),value:e.generateUser("unclearA")}}),e._v(" "),a("el-option",{attrs:{label:e.generateUser("unclearB"),value:e.generateUser("unclearB")}}),e._v(" "),a("el-option",{attrs:{label:e.generateUser("uperror"),value:e.generateUser("uperror")}})],1),e._v(" "),a("el-input",{attrs:{type:"textarea"},model:{value:e.notPass.remark,callback:function(t){e.$set(e.notPass,"remark",t)},expression:"notPass.remark"}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.pass()}}},[e._v(e._s(e.generateUser("confirm")))]),e._v(" "),a("el-button",{on:{click:function(t){e.passVisible=!1}}},[e._v(e._s(e.generateUser("cancel")))])],1)],1)],1)},staticRenderFns:[]};var u=a("/Xao")(c,d,!1,function(e){a("TtwL")},null,null);t.default=u.exports}});
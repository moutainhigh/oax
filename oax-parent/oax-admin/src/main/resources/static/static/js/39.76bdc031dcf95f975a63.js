webpackJsonp([39],{RbW5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3cXf"),i=a.n(n),o=a("ivlf"),l=a("vLgD");var s=a("1onU"),r=a("6lZ+"),d=a("EGuJ"),c=a("mC4M"),g={name:"noticeManage",data:function(){return{loading:!1,editLoading:!1,tableData:[],editVisible:!1,editDetail:{id:"",sortNo:""},coinList:[],marketsSimple:[],rules:{marketId:[{required:!0,message:this.generateContent("requiretradetype"),trigger:"change"}],sortNo:[{required:!0,message:this.generateContent("requirenum"),trigger:"blur"}]}}},methods:{generateContent:o.c,handleList:function(){var e,t=this;this.loading=!0,Object(l.a)({url:"market/manageList",method:"post",data:e}).then(function(e){t.loading=!1;var a=e.data;t.tableData=a,console.log(t.tableData)}).catch(function(e){console.log(e),t.loading=!1})},editShow:function(e){var t=this;console.log(e),t.editLoading=!0,t.loading=!0,Object(l.a)({url:"markets/simple",method:"GET"}).then(function(a){if(console.log(a),t.loading=!1,t.editLoading=!1,a.success){var n=a.data;t.marketsSimple=t.cloneObjectFn(n),t.editDetail.id=e.id,t.editDetail.marketId=e.marketId,t.editDetail.sortNo=e.sortNo,console.log(t.editDetail),t.editDetail=t.cloneObjectFn(t.editDetail)}else t.$message.error(a.msg)}).catch(function(e){console.log(e),t.loading=!1,t.editLoading=!1}),t.editVisible=!0},submitForm:function(e){var t=this;console.log(t.editDetail),t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.editLoading=!1,!1;var a;t.loading=!0,(a=t.editDetail,Object(l.a)({url:"market/update",method:"put",data:a})).then(function(e){t.loading=!1,e.success?(console.log(e),t.handleList(),t.editVisible=!1,t.editLoading=!1,t.$message({message:t.generateContent("changesuccess"),type:"success"})):t.$message.error(e.msg)}).catch(function(e){console.log(e),t.$message.error(t.generateContent("changefail")),t.loading=!1,t.editLoading=!1})})},cloneObjectFn:function(e){return JSON.parse(i()(e))}},mounted:function(){this.handleList()},components:{Pagination:s.a,QuitConfirm:r.a,FilterSection:c.a,DragDialog:d.a}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("section",{staticClass:"list-table-container"},[a("section",{staticClass:"table-container-area"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"dealTroops",label:e.generateContent("counterparty")}}),e._v(" "),a("el-table-column",{attrs:{prop:"adminName",label:e.generateContent("Publisher")}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:e.generateContent("putawayTime")}}),e._v(" "),a("el-table-column",{attrs:{prop:"sortNo",label:e.generateContent("sort")}}),e._v(" "),a("el-table-column",{attrs:{label:e.generateContent("handel"),width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"opt-btns-container"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.editShow(t.row)}}},[e._v(e._s(e.generateContent("change")))])],1)]}}])})],1)],1)]),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.editLoading,expression:"editLoading"}],staticClass:"center-dialog",attrs:{title:e.generateContent("trademangement"),visible:e.editVisible},on:{"update:visible":function(t){e.editVisible=t}}},[a("section",{staticClass:"dialog-section"},[a("h3",{staticClass:"title"},[e._v(e._s(e.generateContent("edittrade")))])]),e._v(" "),a("el-form",{ref:"editDetail",attrs:{model:e.editDetail,rules:e.rules,"label-width":"150px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("tradetype"),prop:"marketId"}},[a("el-select",{attrs:{filterable:"",placeholder:e.generateContent("please")},model:{value:e.editDetail.marketId,callback:function(t){e.$set(e.editDetail,"marketId",t)},expression:"editDetail.marketId"}},e._l(e.marketsSimple,function(e){return a("el-option",{key:e.index,attrs:{label:e.marketsName,value:e.marketId}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("sort"),prop:"sortNo"}},[a("el-input",{model:{value:e.editDetail.sortNo,callback:function(t){e.$set(e.editDetail,"sortNo",t)},expression:"editDetail.sortNo"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("editDetail")}}},[e._v(e._s(e.generateContent("sure")))]),e._v(" "),a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v(e._s(e.generateContent("close")))])],1)],1)],1)},staticRenderFns:[]};var m=a("/Xao")(g,u,!1,function(e){a("bASy")},null,null);t.default=m.exports},bASy:function(e,t,a){var n=a("mzcd");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("3d2650f2",n,!0)},mzcd:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.dialog-section {\n  padding: 0 0 20px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.dialog-section .el-row:not(:first-child) {\n    margin-top: 20px;\n}\n.dialog-section .el-row .el-col > div {\n    display: inline-block;\n    vertical-align: top;\n}\n",""])}});
webpackJsonp([52],{SBWA:function(e,t,n){var a=n("gmdk");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("58a2abce",a,!0)},ZhVk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("3cXf"),l=n.n(a),i=n("ivlf"),o=n("vLgD");var s=n("1onU"),r=n("6lZ+"),c=n("EGuJ"),d=n("mC4M"),g=n("5aCZ"),u={name:"noticeManage",data:function(){var e=this;return{pickerBeginDateBefore:{disabledDate:function(t){var n=e.reqData.endTime;if(n)return t.getTime()>new Date(n)}},pickerBeginDateAfter:{disabledDate:function(t){var n=e.reqData.beginTime;if(n)return t.getTime()<new Date(n)}},loading:!1,editLoading:!1,tableData:[],pageInfo:{current_page:0,total:0},reqData:{cnTitle:"",status:"",type:"",beginTime:"",endTime:"",pageNum:1,pageSize:10},selectBar:[{name:this.generateContent("publishStatus"),label:"status",data:[{id:"",name:this.generateContent("total")},{id:1,name:this.generateContent("private")},{id:2,name:this.generateContent("public")}]},{name:this.generateContent("publishType"),label:"type",data:[{id:"",name:this.generateContent("total")},{id:1,name:this.generateContent("newCoin")},{id:2,name:this.generateContent("newNotice")},{id:3,name:this.generateContent("commonquestion")},{id:4,name:this.generateContent("tips")},{id:5,name:this.generateContent("stipulation")},{id:6,name:this.generateContent("aboutUs")}]}],editVisible:!1,editDetail:{cnTitle:"",enTitle:"",type:"",releaseTime:"",status:"",cnContent:"",enContent:""},rules:{cnTitle:[{required:!0,message:this.generateContent("requireTitle"),trigger:"blur"}],enTitle:[{required:!0,message:this.generateContent("requoreEnTotle"),trigger:"blur"}],type:[{required:!0,message:this.generateContent("pleasechosetype"),trigger:"change"}],releaseTime:[{required:!0,message:this.generateContent("requirePublishTime"),trigger:"change"}],status:[{required:!0,message:this.generateContent("require1"),trigger:"change"}],cnContent:[{required:!0,message:this.generateContent("requireContent"),trigger:"blur"}],enContent:[{required:!0,message:this.generateContent("requireEnContent"),trigger:"blur"}]},delId:"",addVisible:!1,addVisibleContent:!1,addLoading:!1,addDetail:{cnTitle:"",enTitle:"",type:"",releaseTime:"",status:"",cnContent:"",enContent:""},closeBtn:!1}},methods:{generateContent:i.c,addList:function(){this.addVisible=!0,this.addVisibleContent=!0},addSubmitForm:function(e){var t=this;console.log(t.addDetail),t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var n;t.loading=!0,(n=t.addDetail,Object(o.a)({url:"article/save",method:"POST",data:n})).then(function(e){t.loading=!1,console.log(e),!0===e.success?(t.$message({message:t.generateContent("addsuccsee"),type:"success"}),t.addDetail={cnTitle:"",enTitle:"",type:"",releaseTime:"",status:"",cnContent:"",enContent:""},t.addVisibleContent=!1,t.handleList()):t.$message.error(t.generateContent("addfail")),t.addVisible=!1}).catch(function(e){console.log(e),t.$message.error(t.generateContent("addfail")),t.loading=!1})})},delRow:function(e){var t=this;t.delId=e.id,t.loading=!0,function(e){return Object(o.a)({url:"article/delete/"+e,method:"DELETE"})}(t.delId).then(function(e){console.log(t.delId),t.loading=!1,console.log(e),!0===e.success?(t.$message({message:t.generateContent("deletesuccess"),type:"success"}),t.handleList()):t.$message.error(t.generateContent("deletefail"))}).catch(function(e){console.log(e),t.$message.error(t.generateContent("deletefail")),t.loading=!1})},handleList:function(){var e=this;this.loading=!0;var t,n=this.cloneObjectFn(this.reqData);n.endTime&&(n.endTime=n.endTime+86399999),(t=n,Object(o.a)({url:"article/manageList",method:"post",data:t})).then(function(t){if(console.log(n),e.loading=!1,t.success){var a=t.data;e.tableData=a.list,console.log(e.tableData),e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}else e.$message.error(t.msg)}).catch(function(t){console.log(t),e.loading=!1})},handleSizeChange:function(e){this.reqData.pageSize=e,this.reqData.pageNum=1,this.handleList()},handleCurrentChange:function(e){this.reqData.pageNum=e,this.handleList()},editShow:function(e){var t,n=this;n.editLoading=!0,n.loading=!0,console.log(e.id),(t=e.id,Object(o.a)({url:"article/get/"+t,method:"GET"})).then(function(e){console.log(e),n.loading=!1,n.editLoading=!1;var t=e.data;n.editDetail=n.cloneObjectFn(t),n.editDetail.type=n.editDetail.type.toString(),n.editDetail.status=n.editDetail.status.toString()}).catch(function(e){console.log(e),n.loading=!1,n.editLoading=!1}),n.editVisible=!0},submitForm:function(e){var t=this;console.log(t.editDetail),t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.editLoading=!1,!1;var n;t.loading=!0,(n=t.editDetail,Object(o.a)({url:"article/update",method:"put",data:n})).then(function(e){t.loading=!1,console.log(e),t.handleList(),t.editVisible=!1,t.editLoading=!1,t.$message({message:t.generateContent("changesuccess"),type:"success"})}).catch(function(e){console.log(e),t.$message.error(t.generateContent("changefail")),t.loading=!1,t.editLoading=!1})})},cloneObjectFn:function(e){return JSON.parse(l()(e))},closeTmc:function(){this.$refs.edit_tmc_cn.hasChange=!1,this.$refs.edit_tmc_en.hasChange=!1,this.editVisible=!1},closeTmc_add:function(){this.$refs.add_tmc_cn.hasChange=!1,this.$refs.add_tmc_en.hasChange=!1,this.addVisible=!1}},mounted:function(){this.handleList()},components:{Pagination:s.a,QuitConfirm:r.a,FilterSection:d.a,DragDialog:c.a,Tinymce:g.a}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("section",{staticClass:"filter-container clearfix"},[n("section",{staticClass:"filter-container-section clearfix"},[n("div",{staticClass:"fl filter-container-box"},[n("label",{staticClass:"label"},[e._v(e._s(e.generateContent("aritcletitle"))+"：")]),e._v(" "),n("div",{staticClass:"filter-container-rightbox"},[n("el-input",{staticClass:"filter-section-labal",model:{value:e.reqData.cnTitle,callback:function(t){e.$set(e.reqData,"cnTitle",t)},expression:"reqData.cnTitle"}})],1)]),e._v(" "),e._l(e.selectBar,function(t,a){return n("div",{key:a,staticClass:"fl filter-container-box"},[n("label",{staticClass:"label"},[e._v(e._s(t.name)+": ")]),e._v(" "),n("el-select",{staticClass:"filter-section-labal filter-container-rightbox",attrs:{placeholder:e.generateContent("pleasechose"),clearable:""},on:{change:e.handleList},model:{value:e.reqData[t.label],callback:function(n){e.$set(e.reqData,t.label,n)},expression:"reqData[value.label]"}},e._l(t.data,function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)}),e._v(" "),n("div",{staticClass:"fl filter-container-box"},[n("label",{staticClass:"label "},[e._v(e._s(e.generateContent("updateTime"))+":")]),e._v(" "),n("div",{staticClass:"filter-container-rightbox"},[n("el-date-picker",{attrs:{editable:!1,type:"date",placeholder:e.generateContent("startdate"),format:"yyyy-MM-dd","value-format":"timestamp","picker-options":e.pickerBeginDateBefore},model:{value:e.reqData.beginTime,callback:function(t){e.$set(e.reqData,"beginTime",t)},expression:"reqData.beginTime"}}),e._v(" "),n("el-date-picker",{attrs:{align:"right",editable:!1,type:"date",placeholder:e.generateContent("enddate"),format:"yyyy-MM-dd","value-format":"timestamp","picker-options":e.pickerBeginDateAfter},model:{value:e.reqData.endTime,callback:function(t){e.$set(e.reqData,"endTime",t)},expression:"reqData.endTime"}})],1)]),e._v(" "),n("div",{staticClass:"btn-box"},[n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.handleList}},[e._v(e._s(e.generateContent("search")))]),e._v(" "),n("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:e.addList}},[e._v(e._s(e.generateContent("add")))])],1)],2)]),e._v(" "),n("section",{staticClass:"list-table-container"},[n("section",{staticClass:"table-container-area"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"cnTitle",label:e.generateContent("aritcletitle"),width:"300","show-overflow-tooltip":""}}),e._v(" "),n("el-table-column",{attrs:{prop:"readCount",label:e.generateContent("readTimes")}}),e._v(" "),n("el-table-column",{attrs:{prop:"adminName",label:e.generateContent("Publisher")}}),e._v(" "),n("el-table-column",{attrs:{prop:"type",label:e.generateContent("Type")},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?n("div",[e._v(e._s(e.generateContent("newCoin")))]):2===t.row.type?n("div",[e._v(e._s(e.generateContent("newNotice")))]):3===t.row.type?n("div",[e._v(e._s(e.generateContent("commonquestion")))]):4===t.row.type?n("div",[e._v(e._s(e.generateContent("tips")))]):5===t.row.type?n("div",[e._v(e._s(e.generateContent("stipulation")))]):6===t.row.type?n("div",[e._v(e._s(e.generateContent("aboutUs")))]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"status",label:e.generateContent("whitherPublic")},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?n("div",[e._v(e._s(e.generateContent("no")))]):n("div",[e._v(e._s(e.generateContent("yes")))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"releaseTime",label:e.generateContent("publishTime"),width:"220"}}),e._v(" "),n("el-table-column",{attrs:{prop:"updateTime",label:e.generateContent("latestChange"),width:"220"}}),e._v(" "),n("el-table-column",{attrs:{label:e.generateContent("handel"),width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"opt-btns-container"},[n("el-button",{attrs:{type:"primary"},on:{click:function(n){e.editShow(t.row)}}},[e._v(e._s(e.generateContent("change")))]),e._v(" "),n("quit-confirm",{attrs:{type:"danger",message:e.generateContent("sureToDelete")},on:{handle:function(n){e.delRow(t.row)}}},[e._v(e._s(e.generateContent("delete")))])],1)]}}])})],1)],1),e._v(" "),n("section",{staticClass:"pagination-container"},[n("Pagination",{attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1)]),e._v(" "),n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.editLoading,expression:"editLoading"}],staticClass:"center-dialog",attrs:{title:e.generateContent("articleMangment"),visible:e.editVisible,"show-close":e.closeBtn},on:{"update:visible":function(t){e.editVisible=t}}},[n("section",{staticClass:"dialog-section"},[n("h3",{staticClass:"title"},[e._v(e._s(e.generateContent("editArticle")))])]),e._v(" "),n("el-form",{ref:"editDetail",attrs:{model:e.editDetail,rules:e.rules,"label-width":"150px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("aritcletitle"),prop:"cnTitle"}},[n("el-input",{model:{value:e.editDetail.cnTitle,callback:function(t){e.$set(e.editDetail,"cnTitle",t)},expression:"editDetail.cnTitle"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("aritcletitleEn"),prop:"enTitle"}},[n("el-input",{model:{value:e.editDetail.enTitle,callback:function(t){e.$set(e.editDetail,"enTitle",t)},expression:"editDetail.enTitle"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("Type"),prop:"type"}},[n("el-select",{attrs:{placeholder:e.generateContent("pleasechosetype")},model:{value:e.editDetail.type,callback:function(t){e.$set(e.editDetail,"type",t)},expression:"editDetail.type"}},[n("el-option",{attrs:{label:e.generateContent("newCoin"),value:"1"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("newNotice"),value:"2"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("commonquestion"),value:"3"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("tips"),value:"4"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("stipulation"),value:"5"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("aboutUs"),value:"6"}})],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("publishTime"),prop:"releaseTime"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:e.generateContent("selectTime"),editable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.editDetail.releaseTime,callback:function(t){e.$set(e.editDetail,"releaseTime",t)},expression:"editDetail.releaseTime"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("whitherPublic"),prop:"status"}},[n("el-select",{attrs:{placeholder:e.generateContent("slcointype")},model:{value:e.editDetail.status,callback:function(t){e.$set(e.editDetail,"status",t)},expression:"editDetail.status"}},[n("el-option",{attrs:{label:e.generateContent("no"),value:"1"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("yes"),value:"2"}})],1)],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:e.generateContent("articleContent"),prop:"cnContent"}},[n("Tinymce",{ref:"edit_tmc_cn",model:{value:e.editDetail.cnContent,callback:function(t){e.$set(e.editDetail,"cnContent",t)},expression:"editDetail.cnContent"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:e.generateContent("articleContentEn"),prop:"enContent"}},[n("Tinymce",{ref:"edit_tmc_en",model:{value:e.editDetail.enContent,callback:function(t){e.$set(e.editDetail,"enContent",t)},expression:"editDetail.enContent"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("editDetail")}}},[e._v(e._s(e.generateContent("sure")))]),e._v(" "),n("el-button",{on:{click:e.closeTmc}},[e._v(e._s(e.generateContent("close")))])],1)],1),e._v(" "),e.addVisibleContent?n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.addLoading,expression:"addLoading"}],staticClass:"center-dialog",attrs:{title:e.generateContent("articleMangment"),visible:e.addVisible,"show-close":e.closeBtn},on:{"update:visible":function(t){e.addVisible=t}}},[n("section",{staticClass:"dialog-section"},[n("h3",{staticClass:"title"},[e._v(e._s(e.generateContent("addArticle")))])]),e._v(" "),n("el-form",{ref:"addDetail",attrs:{model:e.addDetail,rules:e.rules,"label-width":"150px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("aritcletitle"),prop:"cnTitle"}},[n("el-input",{model:{value:e.addDetail.cnTitle,callback:function(t){e.$set(e.addDetail,"cnTitle",t)},expression:"addDetail.cnTitle"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("aritcletitleEn"),prop:"enTitle"}},[n("el-input",{model:{value:e.addDetail.enTitle,callback:function(t){e.$set(e.addDetail,"enTitle",t)},expression:"addDetail.enTitle"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("Type"),prop:"type"}},[n("el-select",{attrs:{placeholder:e.generateContent("slcointype")},model:{value:e.addDetail.type,callback:function(t){e.$set(e.addDetail,"type",t)},expression:"addDetail.type"}},[n("el-option",{attrs:{label:e.generateContent("newCoin"),value:"1"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("newNotice"),value:"2"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("commonquestion"),value:"3"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("tips"),value:"4"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("stipulation"),value:"5"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("aboutUs"),value:"6"}})],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("publishTime"),prop:"releaseTime"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:e.generateContent("selectTime"),addable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addDetail.releaseTime,callback:function(t){e.$set(e.addDetail,"releaseTime",t)},expression:"addDetail.releaseTime"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.generateContent("whitherPublic"),prop:"status"}},[n("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:e.addDetail.status,callback:function(t){e.$set(e.addDetail,"status",t)},expression:"addDetail.status"}},[n("el-option",{attrs:{label:e.generateContent("no"),value:"1"}}),e._v(" "),n("el-option",{attrs:{label:e.generateContent("yes"),value:"2"}})],1)],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:e.generateContent("articleContent"),prop:"cnContent"}},[n("Tinymce",{ref:"add_tmc_cn",model:{value:e.addDetail.cnContent,callback:function(t){e.$set(e.addDetail,"cnContent",t)},expression:"addDetail.cnContent"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:e.generateContent("articleContentEn"),prop:"enContent"}},[n("Tinymce",{ref:"add_tmc_en",model:{value:e.addDetail.enContent,callback:function(t){e.$set(e.addDetail,"enContent",t)},expression:"addDetail.enContent"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addSubmitForm("addDetail")}}},[e._v(e._s(e.generateContent("sure")))]),e._v(" "),n("el-button",{on:{click:e.closeTmc_add}},[e._v(e._s(e.generateContent("close")))])],1)],1):e._e()],1)},staticRenderFns:[]};var m=n("/Xao")(u,p,!1,function(e){n("SBWA")},null,null);t.default=m.exports},gmdk:function(e,t,n){(e.exports=n("BkJT")(!1)).push([e.i,"\n.filter-container-section .filter-container-box {\n  margin: 0 20px 10px 0;\n}\n.filter-container-section .filter-container-rightbox {\n  display: inline-block;\n  margin: 0 0 5px 5px;\n}\n.filter-container-section .btn-box {\n  display: inline-block;\n}\n.filter-container-section .btn-box .btn {\n    margin-bottom: 10px;\n    font-size: 14px;\n    margin-right: 10px;\n}\n.dialog-section {\n  padding: 0 0 20px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.dialog-section .el-row:not(:first-child) {\n    margin-top: 20px;\n}\n.dialog-section .el-row .el-col > div {\n    display: inline-block;\n    vertical-align: top;\n}\n",""])}});
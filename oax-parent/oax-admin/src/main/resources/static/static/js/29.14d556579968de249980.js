webpackJsonp([29],{DCXS:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.page-banner .filter-container-section .filter-container-box {\n  margin: 0 20px 10px 0;\n}\n.page-banner .filter-container-section .filter-container-rightbox {\n  display: inline-block;\n  margin: 0 0 5px 5px;\n}\n.page-banner .filter-container-section .btn-box {\n  display: inline-block;\n}\n.page-banner .filter-container-section .btn-box .btn {\n    margin-bottom: 10px;\n    font-size: 14px;\n    margin-right: 10px;\n}\n.page-banner .dialog-section {\n  padding: 0 0 20px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.page-banner .dialog-section .el-row:not(:first-child) {\n    margin-top: 20px;\n}\n.page-banner .dialog-section .el-row .el-col > div {\n    display: inline-block;\n    vertical-align: top;\n}\n.page-banner .avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.page-banner .avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.page-banner .avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.page-banner .avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n.page-banner .upload-img-size-tips {\n  color: #f56c6c;\n  font-size: 12px;\n}\n.viewer-open .el-dialog__wrapper {\n  z-index: 2001 !important;\n}\n.viewer-open .v-modal {\n  z-index: 2000 !important;\n  display: none !important;\n}\n",""])},fhsG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3cXf"),i=a.n(n),l=a("ivlf"),o=a("vLgD");function s(e){return Object(o.a)({url:"/fileUpload/uploadPic",method:"post",data:e})}var r=a("1onU"),d=a("6lZ+"),c=a("EGuJ"),p=a("mC4M"),u=a("ahvv"),g=(a("ba5Z"),{name:"bannerManage",data:function(){var e=this;return{pickerBeginDateBefore:{disabledDate:function(t){var a=e.reqData.endTime;if(a)return t.getTime()>new Date(a)}},pickerBeginDateAfter:{disabledDate:function(t){var a=e.reqData.beginTime;if(a)return t.getTime()<new Date(a)}},uploadSizePC:"444*222",uploadSizeMobile:"1125*570",loading:!1,tableData:[],pageInfo:{},reqData:{type:"",status:"",beginTime:"",endTime:"",pageNum:1,pageSize:10},selectBar:[{name:this.generateContent("device_type"),label:"type",data:[{id:"",name:this.generateContent("total")},{id:1,name:this.generateContent("PC")},{id:2,name:this.generateContent("mobile")}]},{name:this.generateContent("status"),label:"status",data:[{id:"",name:this.generateContent("total")},{id:1,name:this.generateContent("PC")},{id:2,name:this.generateContent("mobile")}]}],editVisible:!1,editLoading:!1,editDetail:{id:"",type:"",title:"",sortNo:"",status:"",url:"",cnImage:"",enImage:"",adminName:""},rules:{type:[{required:!0,message:this.generateContent("pleasechoseDevice"),trigger:"change"}],title:[{required:!0,message:this.generateContent("requiretitle"),trigger:"blur"}],sortNo:[{required:!0,message:this.generateContent("requiresort"),trigger:"blur"}],status:[{required:!0,message:this.generateContent("pleasechoseStatus"),trigger:"change"}],url:[{required:!0,message:this.generateContent("requireLink"),trigger:"blur"}],cnImage:[{required:!0,message:this.generateContent("requireimg"),trigger:"change"}],enImage:[{required:!0,message:this.generateContent("requireimg"),trigger:"change"}]},fileList:[],enFileList:[],uploadBtnShow:!0,enUploadBtnShow:!0,uploadUrl:".//fileUpload/uploadPic",imgLimit:1,delId:"",addVisible:!1,addVisibleContent:!1,addLoading:!1,addDetail:{id:"",type:"",title:"",sortNo:"",status:"",url:"",cnImage:"",enImage:"",adminName:""},addFileList:[],enAddFileList:[],addUploadBtnShow:!0,enAddUploadBtnShow:!0}},watch:{tableData:function(){this.$nextTick(function(){new u.a(document.getElementById("viewer-box"))})}},methods:{generateContent:l.c,addList:function(){this.addVisible=!0,this.addVisibleContent=!0},addSubmitForm:function(e){var t=this;t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var a;t.loading=!0,(a=t.addDetail,Object(o.a)({url:"banner/save",method:"POST",data:a})).then(function(e){console.log(t.addDetail),t.loading=!1,console.log(e),!0===e.success?(t.$message({message:t.generateContent("addsuccsee"),type:"success"}),t.addDetail={id:"",type:"",title:"",sortNo:"",status:"",url:"",cnImage:"",enImage:"",adminName:""},t.addFileList=[],t.enAddFileList=[],t.addUploadBtnShow=!0,t.enAddUploadBtnShow=!0,t.addVisibleContent=!1,t.handleList()):t.$message.error(t.generateContent("addfail")),t.addVisible=!1}).catch(function(e){console.log(e),t.$message.error(t.generateContent("addfail")),t.loading=!1})})},addChangeUpload:function(e,t){var a=this;a.addFileList=t;var n=new FormData;n.append("picname",e.raw),n.append("picType",1),console.log(n),s(n).then(function(e){e.success&&(console.log(e),a.addUploadSuccess(e))})},addRemoveUploadImg:function(){this.addDetail.cnImage=this.result,this.addUploadBtnShow=!0},addUploadSuccess:function(e,t,a){this.addIsShowUpload(),this.addDetail.cnImage=e.data[0]},addIsShowUpload:function(){this.addFileList.length>=this.imgLimit?this.addUploadBtnShow=!1:this.addUploadBtnShow=!0},enAddChangeUpload:function(e,t){var a=this;a.enAddFileList=t;var n=new FormData;n.append("picname",e.raw),n.append("picType",1),console.log(n),s(n).then(function(e){e.success&&(console.log(e),a.enAddUploadSuccess(e))})},enAddRemoveUploadImg:function(){this.addDetail.enImage=this.result,this.enAddUploadBtnShow=!0},enAddUploadSuccess:function(e,t,a){console.log(e.data[0]),this.enAddIsShowUpload(),this.addDetail.enImage=e.data[0]},enAddIsShowUpload:function(){this.enAddFileList.length>=this.imgLimit?this.enAddUploadBtnShow=!1:this.enAddUploadBtnShow=!0},delRow:function(e){var t=this;t.delId=e.id,t.loading=!0,function(e){return Object(o.a)({url:"banner/delete/"+e,method:"DELETE"})}(t.delId).then(function(e){console.log(t.delId),t.loading=!1,console.log(e),!0===e.success?(t.$message({message:t.generateContent("deletesuccess"),type:"success"}),t.handleList()):t.$message.error(t.generateContent("deletefail"))}).catch(function(e){console.log(e),t.$message.error(t.generateContent("deletefail")),t.loading=!1})},handleList:function(){var e=this;this.loading=!0;var t,a=this.cloneObjectFn(this.reqData);a.endTime&&(a.endTime=a.endTime+86399999),(t=a,Object(o.a)({url:"banner/manageList",method:"post",data:t})).then(function(t){if(console.log(a),e.loading=!1,t.success){var n=t.data;e.tableData=n.list,console.log(t),e.pageInfo={current_page:Number(n.pageNum),from:1,last_page:n.lastPage,next_page_url:null,path:"",per_page:n.pageSize,prev_page_url:null,to:1,total:n.total}}else e.$message.error(t.msg)}).catch(function(t){console.log(t),e.loading=!1})},handleSizeChange:function(e){this.reqData.pageSize=e,this.reqData.pageNum=1,this.handleList()},handleCurrentChange:function(e){this.reqData.pageNum=e,this.handleList()},editShow:function(e){this.editDetail=this.cloneObjectFn(e),this.editDetail.type=this.editDetail.type.toString(),this.editDetail.status=this.editDetail.status.toString(),this.fileList=[{url:this.editDetail.cnImage}],this.enFileList=[{url:this.editDetail.enImage}],this.isShowUpload(),this.enIsShowUpload(),this.editVisible=!0},submitForm:function(e){var t=this;t.editLoading=!0,t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.editLoading=!1,!1;var a;t.loading=!0,(a=t.editDetail,Object(o.a)({url:"banner/update",method:"put",data:a})).then(function(e){console.log(t.editDetail),t.loading=!1,console.log(e),t.handleList(),t.editVisible=!1,t.editLoading=!1,t.$message({message:t.generateContent("changesuccess"),type:"success"})}).catch(function(e){console.log(e),t.$message.error(t.generateContent("changefail")),t.loading=!1,t.editLoading=!1})})},changeUpload:function(e,t){var a=this;a.fileList=t;var n=new FormData;n.append("picname",e.raw),n.append("picType",1),console.log(n),s(n).then(function(e){e.success&&(console.log(e),a.uploadSuccess(e))})},removeUploadImg:function(){this.editDetail.cnImage=this.result,this.uploadBtnShow=!0},uploadSuccess:function(e,t,a){this.isShowUpload(),this.editDetail.cnImage=e.data[0]},isShowUpload:function(){this.fileList.length>=this.imgLimit?this.uploadBtnShow=!1:this.uploadBtnShow=!0},enChangeUpload:function(e,t){var a=this;a.enFileList=t;var n=new FormData;n.append("picname",e.raw),n.append("picType",1),console.log(n),s(n).then(function(e){e.success&&(console.log(e),a.enUploadSuccess(e))})},enRemoveUploadImg:function(){this.editDetail.enImage=this.result,this.enUploadBtnShow=!0},enUploadSuccess:function(e,t,a){this.enIsShowUpload(),this.editDetail.enImage=e.data[0]},enIsShowUpload:function(){console.log(this.enFileList),this.enFileList.length>=this.imgLimit?this.enUploadBtnShow=!1:this.enUploadBtnShow=!0},cloneObjectFn:function(e){return JSON.parse(i()(e))}},mounted:function(){this.handleList()},components:{Pagination:r.a,QuitConfirm:d.a,FilterSection:p.a,DragDialog:c.a}}),m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-banner"},[a("section",{staticClass:"filter-container clearfix"},[a("section",{staticClass:"filter-container-section clearfix"},[e._l(e.selectBar,function(t,n){return a("div",{key:n,staticClass:"fl filter-container-box"},[a("label",{staticClass:"label"},[e._v(e._s(t.name)+": ")]),e._v(" "),a("el-select",{staticClass:"filter-section-labal filter-container-rightbox",attrs:{placeholder:e.generateContent("pleasechose"),clearable:""},on:{change:e.handleList},model:{value:e.reqData[t.label],callback:function(a){e.$set(e.reqData,t.label,a)},expression:"reqData[value.label]"}},e._l(t.data,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)}),e._v(" "),a("div",{staticClass:"fl filter-container-box"},[a("label",{staticClass:"label"},[e._v(e._s(e.generateContent("updateTime"))+":")]),e._v(" "),a("div",{staticClass:"filter-container-rightbox"},[a("el-date-picker",{attrs:{editable:!1,type:"date",placeholder:e.generateContent("startdate"),format:"yyyy-MM-dd","value-format":"timestamp","picker-options":e.pickerBeginDateBefore},model:{value:e.reqData.beginTime,callback:function(t){e.$set(e.reqData,"beginTime",t)},expression:"reqData.beginTime"}}),e._v(" "),a("el-date-picker",{attrs:{align:"right",editable:!1,type:"date",placeholder:e.generateContent("enddate"),format:"yyyy-MM-dd","value-format":"timestamp","picker-options":e.pickerBeginDateAfter},model:{value:e.reqData.endTime,callback:function(t){e.$set(e.reqData,"endTime",t)},expression:"reqData.endTime"}})],1)]),e._v(" "),a("div",{staticClass:"btn-box"},[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.handleList}},[e._v(e._s(e.generateContent("search")))]),e._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:e.addList}},[e._v(e._s(e.generateContent("add")))])],1)],2)]),e._v(" "),a("section",{staticClass:"list-table-container"},[a("section",{staticClass:"table-container-area",attrs:{id:"viewer-box"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"type",label:e.generateContent("device_type")},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?a("div",[e._v(e._s(e.generateContent("PC")))]):a("div",[e._v(e._s(e.generateContent("mobile")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:e.generateContent("bannertitle")}}),e._v(" "),a("el-table-column",{attrs:{prop:"cnImage",label:e.generateContent("img")},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"100px",display:"block"},attrs:{src:e.row.cnImage}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"url",label:e.generateContent("adLink"),width:"200","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:e.generateContent("status")},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?a("div",[e._v(e._s(e.generateContent("private")))]):a("div",[e._v(e._s(e.generateContent("public")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"adminName",label:e.generateContent("Publisher")}}),e._v(" "),a("el-table-column",{attrs:{prop:"sortNo",label:e.generateContent("sort")}}),e._v(" "),a("el-table-column",{attrs:{label:e.generateContent("handel"),width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"opt-btns-container"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.editShow(t.row)}}},[e._v(e._s(e.generateContent("change")))]),e._v(" "),a("quit-confirm",{attrs:{type:"danger",message:e.generateContent("suretocancel")},on:{handle:function(a){e.delRow(t.row)}}},[e._v(e._s(e.generateContent("delete")))])],1)]}}])})],1)],1),e._v(" "),a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1)]),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.editLoading,expression:"editLoading"}],staticClass:"center-dialog",attrs:{title:e.generateContent("bannermangement"),visible:e.editVisible},on:{"update:visible":function(t){e.editVisible=t}}},[a("section",{staticClass:"dialog-section"},[a("h3",{staticClass:"title"},[e._v(e._s(e.generateContent("editbanner")))])]),e._v(" "),a("el-form",{ref:"editDetail",attrs:{model:e.editDetail,rules:e.rules,"label-width":"150px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("device_type"),prop:"type"}},[a("el-select",{attrs:{placeholder:e.generateContent("pleasechoseDevice")},model:{value:e.editDetail.type,callback:function(t){e.$set(e.editDetail,"type",t)},expression:"editDetail.type"}},[a("el-option",{attrs:{label:e.generateContent("PC"),value:"1"}}),e._v(" "),a("el-option",{attrs:{label:e.generateContent("mobile"),value:"2"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("bannertitle"),prop:"title"}},[a("el-input",{model:{value:e.editDetail.title,callback:function(t){e.$set(e.editDetail,"title",t)},expression:"editDetail.title"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("sort"),prop:"sortNo"}},[a("el-input",{model:{value:e.editDetail.sortNo,callback:function(t){e.$set(e.editDetail,"sortNo",t)},expression:"editDetail.sortNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("status"),prop:"status"}},[a("el-select",{attrs:{placeholder:e.generateContent("pleasechoseStatus")},model:{value:e.editDetail.status,callback:function(t){e.$set(e.editDetail,"status",t)},expression:"editDetail.status"}},[a("el-option",{attrs:{label:e.generateContent("putaway"),value:"2"}}),e._v(" "),a("el-option",{attrs:{label:e.generateContent("sold_out"),value:"1"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("bindLink"),prop:"url"}},[a("el-input",{model:{value:e.editDetail.url,callback:function(t){e.$set(e.editDetail,"url",t)},expression:"editDetail.url"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("uploadimgCn"),prop:"cnImage"}},[a("el-upload",{staticClass:"upload-box",attrs:{action:"","auto-upload":!1,"on-change":e.changeUpload,"on-remove":e.removeUploadImg,"on-success":e.uploadSuccess,limit:e.imgLimit,"list-type":"picture","file-list":e.fileList}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.uploadBtnShow,expression:"uploadBtnShow"}],attrs:{size:"small",type:"primary"}},[e._v(e._s(e.generateContent("clicktoupdate")))])],1),e._v(" "),"1"===e.editDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizePC)+"px")]):"2"===e.editDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizeMobile)+"px")]):e._e(),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.editDetail.cnImage,callback:function(t){e.$set(e.editDetail,"cnImage",t)},expression:"editDetail.cnImage"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("uploadimgEn"),prop:"enImage"}},[a("el-upload",{staticClass:"upload-box",attrs:{action:"","auto-upload":!1,"on-change":e.enChangeUpload,"on-remove":e.enRemoveUploadImg,"on-success":e.enUploadSuccess,limit:e.imgLimit,"list-type":"picture","file-list":e.enFileList}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.enUploadBtnShow,expression:"enUploadBtnShow"}],attrs:{size:"small",type:"primary"}},[e._v(e._s(e.generateContent("clicktoupdate")))])],1),e._v(" "),"1"===e.editDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizePC)+"px")]):"2"===e.editDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizeMobile)+"px")]):e._e(),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.editDetail.enImage,callback:function(t){e.$set(e.editDetail,"enImage",t)},expression:"editDetail.enImage"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("editDetail")}}},[e._v(e._s(e.generateContent("sure")))]),e._v(" "),a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v(e._s(e.generateContent("close")))])],1)],1),e._v(" "),e.addVisibleContent?a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.addLoading,expression:"addLoading"}],staticClass:"center-dialog",attrs:{title:e.generateContent("bannermangement"),visible:e.addVisible},on:{"update:visible":function(t){e.addVisible=t}}},[a("section",{staticClass:"dialog-section"},[a("h3",{staticClass:"title"},[e._v(e._s(e.generateContent("addbanner")))])]),e._v(" "),a("el-form",{ref:"addDetail",attrs:{model:e.addDetail,rules:e.rules,"label-width":"150px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("device_type"),prop:"type"}},[a("el-select",{attrs:{placeholder:e.generateContent("pleasechoseDevice")},model:{value:e.addDetail.type,callback:function(t){e.$set(e.addDetail,"type",t)},expression:"addDetail.type"}},[a("el-option",{attrs:{label:e.generateContent("PC"),value:"1"}}),e._v(" "),a("el-option",{attrs:{label:e.generateContent("mobile"),value:"2"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("bannertitle"),prop:"title"}},[a("el-input",{model:{value:e.addDetail.title,callback:function(t){e.$set(e.addDetail,"title",t)},expression:"addDetail.title"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("sort"),prop:"sortNo"}},[a("el-input",{model:{value:e.addDetail.sortNo,callback:function(t){e.$set(e.addDetail,"sortNo",t)},expression:"addDetail.sortNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("status"),prop:"status"}},[a("el-select",{attrs:{placeholder:e.generateContent("pleasechoseStatus")},model:{value:e.addDetail.status,callback:function(t){e.$set(e.addDetail,"status",t)},expression:"addDetail.status"}},[a("el-option",{attrs:{label:e.generateContent("putaway"),value:"2"}}),e._v(" "),a("el-option",{attrs:{label:e.generateContent("sold_out"),value:"1"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("bindLink"),prop:"url"}},[a("el-input",{model:{value:e.addDetail.url,callback:function(t){e.$set(e.addDetail,"url",t)},expression:"addDetail.url"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("uploadimgCn"),prop:"cnImage"}},[a("el-upload",{staticClass:"upload-box",attrs:{action:"","auto-upload":!1,"on-change":e.addChangeUpload,"on-remove":e.addRemoveUploadImg,"on-success":e.addUploadSuccess,limit:e.imgLimit,"list-type":"picture","file-list":e.addFileList}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.addUploadBtnShow,expression:"addUploadBtnShow"}],attrs:{size:"small",type:"primary"}},[e._v(e._s(e.generateContent("clicktoupdate")))])],1),e._v(" "),"1"===e.addDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizePC)+"px")]):"2"===e.addDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizeMobile)+"px")]):e._e(),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.addDetail.cnImage,callback:function(t){e.$set(e.addDetail,"cnImage",t)},expression:"addDetail.cnImage"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.generateContent("uploadimgEn"),prop:"enImage"}},[a("el-upload",{staticClass:"upload-box",attrs:{action:"","auto-upload":!1,"on-change":e.enAddChangeUpload,"on-remove":e.enAddRemoveUploadImg,"on-success":e.enAddUploadSuccess,limit:e.imgLimit,"list-type":"picture","file-list":e.enAddFileList}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.enAddUploadBtnShow,expression:"enAddUploadBtnShow"}],attrs:{size:"small",type:"primary"}},[e._v(e._s(e.generateContent("clicktoupdate")))])],1),e._v(" "),"1"===e.addDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizePC)+"px")]):"2"===e.addDetail.type?a("div",{staticClass:"upload-img-size-tips"},[e._v(e._s(e.generateContent("imgsize"))+"："+e._s(e.uploadSizeMobile)+"px")]):e._e(),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.addDetail.enImage,callback:function(t){e.$set(e.addDetail,"enImage",t)},expression:"addDetail.enImage"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addSubmitForm("addDetail")}}},[e._v(e._s(e.generateContent("sure")))]),e._v(" "),a("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v(e._s(e.generateContent("close")))])],1)],1):e._e()],1)},staticRenderFns:[]};var h=a("/Xao")(g,m,!1,function(e){a("xlMN")},null,null);t.default=h.exports},xlMN:function(e,t,a){var n=a("DCXS");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("20606754",n,!0)}});
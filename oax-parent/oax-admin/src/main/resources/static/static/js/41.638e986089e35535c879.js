webpackJsonp([41],{iF77:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("azsk"),r=l("1onU"),i=l("6lZ+"),o=l("EGuJ"),n=l("mC4M"),s={name:"user_level",data:function(){return{activeName:0,loading:!1,disabled:!0,tableData:[{num:"1",title:"大公牛交易平台首发AAA上线ETH交易市场公告",name:"admin",type:"系统",time_issue:"2018.05.28"},{num:"2",title:"大公牛交易平台首发ARP (App Rendering Power)上线ETH交易市场公告",name:"admin",type:"活动",time_issue:"2018.05.28"},{num:"3",title:"大公牛交易平台首发ARP (App Rendering Power)上线ETH交易市场公告",name:"admin",type:"活动",time_issue:"2018.05.28"}],pageInfo:{current_page:1,from:1,last_page:13,next_page_url:null,path:"",per_page:10,prev_page_url:null,to:1,total:123},reqData:{name:"",page:1,page_size:10,start_pay_time:"",end_pay_time:"",payment_time:""},detailreqData:{page:1,page_size:10,status:0,type:""},selectBar:[{name:"问题类型",label:"status",data:[{id:1,name:"账户问题"},{id:2,name:"充值提现"},{id:3,name:"转入转出"},{id:4,name:"关于交易"}]}],detailBar:[{name:"问题类型",label:"status",data:[{id:1,name:"账户问题"},{id:2,name:"充值提现"},{id:3,name:"转入转出"},{id:4,name:"关于交易"}]}],multipleSelection:[],ids:[],currency_id:"",dialogFormVisible:!1,dialogLoading:!1,detailVisible:!1,detailLoading:!1,tableloading:!1,noticeDetail:{coin_type:""},editVisible:!1,editLoading:!1,editDetail:{coin_type:""},ruleForm:{name_en_simple:"",name_en:"",name_zh:"",server_ip:"",server_port:"",server_name:"",server_pw:"",out_min:"",out_max:"",out_poundage:"",out_poundage_per:"",hot_wallet_addr:"",hot_wallet_privatekey:"",cold_wallet_addr:"",gt_out:"",date:"",type:"",funid:"",contract_addr:"",unit:"",gt_tohot:"",is_tocold:"",is_normal_in:"",is_normal_out:"",coin_desc_simple:"",coin_desc_multi:"",coin_icon:""},rules:{name_en_simple:[{required:!0,message:"请输入英文简称",trigger:"blur"}],name_en:[{required:!0,message:"请输入英文名",trigger:"blur"}],name_zh:[{required:!0,message:"请输入中文名",trigger:"blur"}],server_ip:[{required:!0,message:"请输入钱包服务器IP",trigger:"blur"}],server_port:[{required:!0,message:"请输入钱包服务器端口",trigger:"blur"}],server_name:[{required:!0,message:"请输入钱包服务器用户名",trigger:"blur"}],server_pw:[{required:!0,message:"请输入钱包服务器密码",trigger:"blur"}],out_min:[{required:!0,message:"请输入转出最小限制",trigger:"blur"}],out_max:[{required:!0,message:"请输入转出最大限制",trigger:"blur"}],out_poundage:[{required:!0,message:"请输入转出手续费",trigger:"blur"}],hot_wallet_addr:[{required:!0,message:"请输入热钱包地址",trigger:"blur"}],hot_wallet_privatekey:[{required:!0,message:"请输入热钱包私钥",trigger:"blur"}],cold_wallet_addr:[{required:!0,message:"请输入冷钱包地址",trigger:"blur"}],gt_out:[{required:!0,message:"请输入大于多少自动转入",trigger:"blur"}],date:[{type:"date",required:!0,message:"请选择推出日期",trigger:"change"}],type:[{required:!0,message:"请选择币种类型",trigger:"change"}],is_tocold:[{required:!0,message:"请选择是否自动转入冷钱包",trigger:"change"}],is_normal_in:[{required:!0,message:"请选择是否正常转入",trigger:"change"}],is_normal_out:[{required:!0,message:"请选择是否正常转出",trigger:"change"}],coin_desc_simple:[{required:!0,message:"请填写币种描述-简体",trigger:"blur"}],coin_desc_multi:[{required:!0,message:"请填写币种描述-英文",trigger:"blur"}],coin_icon:[{required:!0,message:"请上传图标",trigger:"change"}]}}},methods:{delRow:function(e){},changeUpload:function(e,t){var l=this;this.fileList=t,this.$nextTick(function(){var e=document.getElementsByClassName("el-upload-list")[0].children;l.ruleForm.coin_icon="123";for(var a=0;a<e.length;a++){var r=e[a],i=document.createElement("img");i.setAttribute("src",t[a].url),i.setAttribute("style","max-width:50%;padding-left:25%"),"IMG"!==r.lastElementChild.nodeName&&r.appendChild(i)}})},handleSelectionChange:function(e){this.multipleSelection=e,this.ids=this.multipleSelection.map(function(e){return e.id})},handleFilter:function(e){this.reqData[e[0]]=e[1],this.handleList()},handleList:function(){var e=this;this.loading=!0,a.c(this.reqData).then(function(t){console.log(e.reqData),e.loading=!1;var l=t.data;e.tableData=l.data}).catch(function(t){console.log(t),e.loading=!1})},handleSizeChange:function(e){this.reqData.page_size=e,this.handleList()},handleCurrentChange:function(e){this.reqData.page=e,this.handleList()},detailhandleSizeChange:function(e){this.detailreqData.page_size=e,this.detailhandleList()},detailhandleCurrentChange:function(e){this.detailreqData.page=e,this.detailhandleList()},detailhandleList:function(){},detailhandleFilter:function(){},confirm:function(){this.dialogFormVisible=!1,this.dialogLoading=!1},detailShow:function(e){this.noticeDetail=e,this.detailVisible=!0},detailConfirm:function(){this.detailVisible=!1,this.detailLoading=!1},editShow:function(e){this.editDetail=e,this.editVisible=!0},editConfirm:function(){this.editVisible=!1,this.editLoading=!1},edithandleSizeChange:function(e){this.detailreqData.page_size=e,this.detailhandleList()},edithandleCurrentChange:function(e){this.detailreqData.page=e,this.detailhandleList()},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}},mounted:function(){},components:{Pagination:r.a,QuitConfirm:i.a,FilterSection:n.a,DragDialog:o.a}},u={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"page"},[l("section",{staticClass:"filter-container clearfix"},[l("section",{staticClass:"filter-container-section clearfix"},[l("div",{staticClass:"fl filter-container-box"},[l("label",{staticClass:"label"},[e._v("问题：")]),e._v(" "),l("div",{staticClass:"filter-container-rightbox"},[l("el-input",{staticClass:"filter-section-labal",model:{value:e.reqData.name,callback:function(t){e.$set(e.reqData,"name",t)},expression:"reqData.name"}})],1)]),e._v(" "),e._l(e.selectBar,function(t,a){return l("div",{key:a,staticClass:"fl filter-container-box"},[l("label",{staticClass:"label"},[e._v(e._s(t.name)+": ")]),e._v(" "),l("el-select",{staticClass:"filter-section-labal filter-container-rightbox",attrs:{placeholder:"请选择",clearable:""},on:{change:e.handleList},model:{value:e.reqData[t.label],callback:function(l){e.$set(e.reqData,t.label,l)},expression:"reqData[value.label]"}},e._l(t.data,function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)}),e._v(" "),l("div",{staticClass:"btn-box"},[l("el-button",{staticClass:"btn",attrs:{type:"primary"}},[e._v("查询")]),e._v(" "),l("el-button",{staticClass:"btn",attrs:{type:"success"}},[e._v("添加")])],1)],2)]),e._v(" "),l("section",{staticClass:"list-table-container"},[l("section",{staticClass:"table-container-area"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData}},[l("el-table-column",{attrs:{prop:"num",label:"序号",width:"70",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"num",label:"排序值",width:"70",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"type",label:"类型",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"title",label:"问题",width:"300",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"发布人",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time_issue",label:"发布日期",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("div",{staticClass:"opt-btns-container"},[l("el-button",{attrs:{type:"text"},on:{click:function(l){e.editShow(t.row)}}},[e._v("修改")]),e._v(" "),l("el-button",{attrs:{type:"text"},on:{click:function(l){e.delRow(t.row)}}},[e._v("删除")])],1)]}}])})],1)],1),e._v(" "),l("section",{staticClass:"pagination-container"},[l("Pagination",{attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.detailhandleSizeChange,currentChange:e.detailhandleCurrentChange}})],1)]),e._v(" "),l("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}],staticClass:"center-dialog small-dialog",attrs:{title:"提示",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")]),e._v(" "),l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("关 闭")])],1)]),e._v(" "),l("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.editLoading,expression:"editLoading"}],staticClass:"center-dialog",attrs:{title:"公告管理",visible:e.editVisible},on:{"update:visible":function(t){e.editVisible=t}}},[l("section",{staticClass:"dialog-section"},[l("h3",{staticClass:"title"},[e._v("编辑公告")])]),e._v(" "),l("el-form",{ref:"ruleForm",staticClass:"edit-form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[l("el-form-item",{attrs:{label:"英文简称",prop:"name_en_simple"}},[l("el-input",{model:{value:e.ruleForm.name_en_simple,callback:function(t){e.$set(e.ruleForm,"name_en_simple",t)},expression:"ruleForm.name_en_simple"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"英文名",prop:"name_en"}},[l("el-input",{model:{value:e.ruleForm.name_en,callback:function(t){e.$set(e.ruleForm,"name_en",t)},expression:"ruleForm.name_en"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"中文名",prop:"name_zh"}},[l("el-input",{model:{value:e.ruleForm.name_zh,callback:function(t){e.$set(e.ruleForm,"name_zh",t)},expression:"ruleForm.name_zh"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"钱包服务器IP",prop:"server_ip"}},[l("el-input",{model:{value:e.ruleForm.server_ip,callback:function(t){e.$set(e.ruleForm,"server_ip",t)},expression:"ruleForm.server_ip"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"钱包服务器端口",prop:"server_port"}},[l("el-input",{model:{value:e.ruleForm.server_port,callback:function(t){e.$set(e.ruleForm,"server_port",t)},expression:"ruleForm.server_port"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"钱包服务器用户名",prop:"server_name"}},[l("el-input",{model:{value:e.ruleForm.server_name,callback:function(t){e.$set(e.ruleForm,"server_name",t)},expression:"ruleForm.server_name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"钱包服务器密码",prop:"server_pw"}},[l("el-input",{model:{value:e.ruleForm.server_pw,callback:function(t){e.$set(e.ruleForm,"server_pw",t)},expression:"ruleForm.server_pw"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"转出最小限制",prop:"out_min"}},[l("el-input",{model:{value:e.ruleForm.out_min,callback:function(t){e.$set(e.ruleForm,"out_min",t)},expression:"ruleForm.out_min"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"转出最大限制",prop:"out_max"}},[l("el-input",{model:{value:e.ruleForm.out_max,callback:function(t){e.$set(e.ruleForm,"out_max",t)},expression:"ruleForm.out_max"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"转出手续费",prop:"out_poundage"}},[l("el-input",{model:{value:e.ruleForm.out_poundage,callback:function(t){e.$set(e.ruleForm,"out_poundage",t)},expression:"ruleForm.out_poundage"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"转出最高手续费率"}},[l("el-input",{model:{value:e.ruleForm.out_poundage_per,callback:function(t){e.$set(e.ruleForm,"out_poundage_per",t)},expression:"ruleForm.out_poundage_per"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"热钱包地址",prop:"hot_wallet_addr"}},[l("el-input",{model:{value:e.ruleForm.hot_wallet_addr,callback:function(t){e.$set(e.ruleForm,"hot_wallet_addr",t)},expression:"ruleForm.hot_wallet_addr"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"热钱包私钥",prop:"hot_wallet_privatekey"}},[l("el-input",{model:{value:e.ruleForm.hot_wallet_privatekey,callback:function(t){e.$set(e.ruleForm,"hot_wallet_privatekey",t)},expression:"ruleForm.hot_wallet_privatekey"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"冷钱包地址",prop:"cold_wallet_addr"}},[l("el-input",{model:{value:e.ruleForm.cold_wallet_addr,callback:function(t){e.$set(e.ruleForm,"cold_wallet_addr",t)},expression:"ruleForm.cold_wallet_addr"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"大于多少自动转入",prop:"gt_out"}},[l("el-input",{model:{value:e.ruleForm.gt_out,callback:function(t){e.$set(e.ruleForm,"gt_out",t)},expression:"ruleForm.gt_out"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"推出日期",prop:"date"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"币种类型",prop:"type"}},[l("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[l("el-option",{attrs:{label:"以太坊系列",value:"eth"}}),e._v(" "),l("el-option",{attrs:{label:"比特币系列",value:"btc"}}),e._v(" "),l("el-option",{attrs:{label:"小蚁系列",value:"neo"}}),e._v(" "),l("el-option",{attrs:{label:"量子链系列",value:"qtum"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"方法ID"}},[l("el-input",{model:{value:e.ruleForm.funid,callback:function(t){e.$set(e.ruleForm,"funid",t)},expression:"ruleForm.funid"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"合约地址"}},[l("el-input",{model:{value:e.ruleForm.contract_addr,callback:function(t){e.$set(e.ruleForm,"contract_addr",t)},expression:"ruleForm.contract_addr"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"单位"}},[l("el-input",{model:{value:e.ruleForm.unit,callback:function(t){e.$set(e.ruleForm,"unit",t)},expression:"ruleForm.unit"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"超过多少转入热钱包"}},[l("el-input",{model:{value:e.ruleForm.gt_tohot,callback:function(t){e.$set(e.ruleForm,"gt_tohot",t)},expression:"ruleForm.gt_tohot"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"是否自动转入冷钱包",prop:"is_tocold"}},[l("el-select",{attrs:{placeholder:"请选择是否自动转入冷钱包"},model:{value:e.ruleForm.is_tocold,callback:function(t){e.$set(e.ruleForm,"is_tocold",t)},expression:"ruleForm.is_tocold"}},[l("el-option",{attrs:{label:"是",value:"yes"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"no"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"是否正常转入",prop:"is_normal_in"}},[l("el-select",{attrs:{placeholder:"请选择是否正常转入"},model:{value:e.ruleForm.is_normal_in,callback:function(t){e.$set(e.ruleForm,"is_normal_in",t)},expression:"ruleForm.is_normal_in"}},[l("el-option",{attrs:{label:"是",value:"yes"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"no"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"是否正常转出",prop:"is_normal_out"}},[l("el-select",{attrs:{placeholder:"请选择是否正常转出"},model:{value:e.ruleForm.is_normal_out,callback:function(t){e.$set(e.ruleForm,"is_normal_out",t)},expression:"ruleForm.is_normal_out"}},[l("el-option",{attrs:{label:"是",value:"yes"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"no"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"币种描述-简体",prop:"coin_desc_simple"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.coin_desc_simple,callback:function(t){e.$set(e.ruleForm,"coin_desc_simple",t)},expression:"ruleForm.coin_desc_simple"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"币种描述-英文",prop:"coin_desc_multi"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.coin_desc_multi,callback:function(t){e.$set(e.ruleForm,"coin_desc_multi",t)},expression:"ruleForm.coin_desc_multi"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"图标",prop:"coin_icon"}},[l("el-upload",{staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,"on-change":e.changeUpload}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1),e._v(" "),l("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.ruleForm.coin_icon,callback:function(t){e.$set(e.ruleForm,"coin_icon",t)},expression:"ruleForm.coin_icon"}})],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")]),e._v(" "),l("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var m=l("/Xao")(s,u,!1,function(e){l("yFaW")},null,null);t.default=m.exports},omYz:function(e,t,l){(e.exports=l("BkJT")(!1)).push([e.i,"\n.filter-container-section .filter-container-box {\n  margin: 0 20px 10px 0;\n}\n.filter-container-section .filter-container-rightbox {\n  display: inline-block;\n  margin: 0 0 5px 5px;\n}\n.filter-container-section .btn-box {\n  display: inline-block;\n}\n.filter-container-section .btn-box .btn {\n    margin-bottom: 10px;\n    font-size: 14px;\n    margin-right: 10px;\n}\n.dialog-section {\n  padding: 0 0 20px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.dialog-section .el-row:not(:first-child) {\n    margin-top: 20px;\n}\n.dialog-section .el-row .el-col > div {\n    display: inline-block;\n    vertical-align: top;\n}\n.edit-form {\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n}\n.edit-form .line {\n    text-align: center;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n",""])},yFaW:function(e,t,l){var a=l("omYz");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("8bSs")("64aae496",a,!0)}});
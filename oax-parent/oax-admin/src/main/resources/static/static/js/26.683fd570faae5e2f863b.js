webpackJsonp([26],{OBvN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("rVsN"),r=a.n(n),i=a("3cXf"),s=a.n(i),l=a("mC4M"),o=a("1onU"),c=a("vLgD");function d(e){return Object(c.a)({url:"/recharges/page",method:"post",data:e})}var u={data:function(){var e=this;return{pickerBeginDateBefore:{disabledDate:function(t){var a=e.reqData.endTime;if(a)return t.getTime()>new Date(a)}},pickerBeginDateAfter:{disabledDate:function(t){var a=e.reqData.startTime;if(a)return t.getTime()<new Date(a)}},welfaresLimit:1,welfaresOpen:!1,welfaresLoad:!1,uploadUrl:".//welfares/employee",welfaresData:{file:"",remark:""},uploadData:{file:{},fileList:[]},welfaresRules:{file:[{required:!0,message:this.generateFinance("file"),trigger:"change"}],remark:[{required:!0,message:this.generateFinance("remarks"),trigger:"blur"}]},flieList:[],loading:!1,searchLists:[],flag:!1,pageInfo:{},tableData:[],reqData:{userId:"",username:"",coinId:"",pageNum:1,pageSize:10,startTime:"",endTime:"",sortQty:""},coinSum:0,multipleSelection:[],selectData:[]}},methods:{exportTable:function(){var e=this;a.e(66).then(function(){var t=a("zWO4").export_json_to_excel,n=e.selectData;t(["用户ID","手机","邮箱","币种","类型","转入数量","转出地址","转入地址","转入时间"],e.formatJson(["userId","phone","email","coinName","type","qty","fromAddress","toAddress","createTime"],n),"虚拟币转入")}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handleSelectionChange:function(e){this.multipleSelection=e,console.log(e),this.selectData=e},generateFinance:a("ivlf").f,forbiddenTips:function(){this.$alert(this.generateFinance("remarks"))},changeUpload:function(e,t){this.fileList=t,t.length>0?this.welfaresData.file=1:this.welfaresData.file="",this.uploadData={file:e,fileList:t}},removeUpload:function(e,t){this.fileList=t,t.length>0?this.welfaresData.file=1:this.welfaresData.file=""},welfaresSubmit:function(e){var t=this;t.$refs[e].validate(function(e){e&&t.$confirm(t.generateFinance("confirmXcoin"),t.generateFinance("tipmsg"),{confirmButtonText:t.generateFinance("confirm"),cancelButtonText:t.generateFinance("cancel"),type:"warning"}).then(function(){t.welfaresLoad=!0;var e,a=new FormData;a.append("filename",t.uploadData.file.raw),a.append("remark",t.welfaresData.remark),(e=a,Object(c.a)({url:"/welfares/employee",method:"POST",data:e})).then(function(e){e.success?(t.welfaresLoad=!1,t.handleSuccess(e)):t.$alert(e.msg)})}).catch(function(){})})},handleSuccess:function(e,t){this.fileList=[],this.welfaresData.file="",this.welfaresOpen=!1,this.$refs.uploadList.clearFiles(),this.$refs.welfaresData.resetFields(),this.$alert(this.generateFinance("Xcoincuccess")),this.handleList()},handleError:function(e,t,a){var n=JSON.parse(e.toString().substring(e.toString().indexOf("{"),e.toString().indexOf("}")+1));n.msg?this.$alert(n.msg):this.$alert(this.generateFinance("errorFile"))},limitTips:function(){this.$alert(this.generateFinance("justOne"))},onSubmit:function(){console.log("submit!")},handleFilter:function(e){this.reqData[e[0]]=e[1],this.handleList()},handleSizeChange:function(e){this.reqData.pageSize=e,this.handleList()},handleCurrentChange:function(e){this.reqData.pageNum=e,this.handleList()},resetForm:function(e){this.reqData={userId:"",username:"",coinId:"",pageNum:1,pageSize:10,startTime:"",endTime:"",sortQty:""},this.$refs[e].clearSort(),this.flag=!1,this.handleList()},cloneObjectFn:function(e){return JSON.parse(s()(e))},handleList:function(){var e=this;this.loading=!0;var t=this.cloneObjectFn(this.reqData);t.endTime&&(t.endTime=t.endTime+86399999),d(t).then(function(t){e.loading=!1;var a=t.data;e.tableData=a.list,e.coinSum=0,t.data.list.forEach(function(t){e.coinSum+=t.qty}),console.log(e.tableData,111),e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total},console.log(e.pageInfo)}).catch(function(t){console.log(t),e.loading=!1})},search:function(){var e=this,t=this.cloneObjectFn(this.reqData);if(t.endTime&&(t.endTime=t.endTime+86399999),""!==t.coinId){console.log(t.startTime,t.endTime);this.loading=!0,new r.a(function(a,n){d(t).then(function(n){e.loading=!1;var r=n.data.list,i=n.data.list;e.coinSum=0,i.forEach(function(t){e.coinSum+=t.qty});var s=[];if(""===t.endTime||null===t.endTime)for(var l=0;l<r.length;l++)r[l].createTime>t.startTime&&s.push(r[l]);else for(var o=0;o<r.length;o++)r[o].createTime>t.startTime&&r[o].createTime<t.endTime&&s.push(r[o]);e.tableData=s,e.startTime=new Date,e.pageInfo={current_page:Number(n.data.pageNum),from:1,last_page:n.data.lastPage,next_page_url:null,path:"",per_page:n.data.pageSize,prev_page_url:null,to:1,total:n.data.total},console.log(e.pageInfo),a()}).catch(function(t){console.log(t),e.loading=!1})}).then(function(){var a;(a=t.coinId,Object(c.a)({url:"/recharges/"+a+"/countQty",method:"get"})).then(function(e){if(e.success)e.data.list}).catch(function(t){console.log(t),e.loading=!1})})}else this.flag=!1,this.handleList()},getSearchList:function(){var e=this;Object(c.a)({url:"coins/marketCoins",method:"get"}).then(function(t){e.searchLists=t.data})},convertNum:function(e){var t="",a="",n=null,r=0,i=[],s=e.toString(),l="";if("-"===s[0]&&(s=s.substring(1),l="-"),-1!==s.indexOf("E")||-1!==s.indexOf("e")){if(n=new RegExp("^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$","ig").exec(s),console.log(n),null!=n&&(t=n[2],a=n[5],n=null),!t&&!a)return!1;if(r=t.indexOf("."),i=(t=t.replace(".","")).split(""),Number(a)>=0){var o=t.substr(r);a=Number(a);for(var c=0;c<a-o.length;c++)i.push("0");a-o.length<0&&i.splice(r+a,0,".")}else{a=a.replace("-",""),a=Number(a);for(var d=0;d<=a+r;d++)i.unshift("0");var u=a-r>=0?1:-(a-r);i.splice(u,0,".")}return l+""+(t=i.join(""))}return e},sortFun:function(e){this.reqData.sortQty="","ascending"===e.order?this.reqData.sortQty=0:"descending"===e.order?this.reqData.sortQty=1:this.reqData.sortQty="",this.handleList()}},mounted:function(){this.handleList(),this.getSearchList()},components:{FilterSection:l.a,Pagination:o.a}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("section",{staticClass:"filter-container clearfix"},[a("el-form",{ref:"reqData",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.reqData}},[a("el-form-item",{attrs:{label:e.generateFinance("userId"),prop:"userId"}},[a("el-input",{model:{value:e.reqData.userId,callback:function(t){e.$set(e.reqData,"userId",t)},expression:"reqData.userId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateFinance("username"),prop:"username"}},[a("el-input",{model:{value:e.reqData.username,callback:function(t){e.$set(e.reqData,"username",t)},expression:"reqData.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateFinance("coinId"),prop:"coinId"}},[a("el-select",{attrs:{filterable:"",placeholder:e.generateFinance("pselect"),clearable:""},model:{value:e.reqData.coinId,callback:function(t){e.$set(e.reqData,"coinId",t)},expression:"reqData.coinId"}},e._l(e.searchLists,function(e){return a("el-option",{key:e.coinId,attrs:{label:e.coinName,value:e.coinId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateFinance("regTime")}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:e.generateFinance("startTime"),"value-format":"timestamp","picker-options":e.pickerBeginDateBefore},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"hot-cold-box"},[a("div",[e._v(e._s(e._f("parseTime")(t.row.startTime)))])])]}}]),model:{value:e.reqData.startTime,callback:function(t){e.$set(e.reqData,"startTime",t)},expression:"reqData.startTime"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2,align:"center"}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:e.generateFinance("endTime"),"value-format":"timestamp","picker-options":e.pickerBeginDateAfter},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"hot-cold-box"},[a("div",[e._v(e._s(e._f("parseTime")(t.row.endTime)))])])]}}]),model:{value:e.reqData.endTime,callback:function(t){e.$set(e.reqData,"endTime",t)},expression:"reqData.endTime"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.exportTable()}}},[e._v("导出Excel")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v(e._s(e.generateFinance("query")))]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("multipleTable")}}},[e._v(e._s(e.generateFinance("clearQuery")))])],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userId",label:e.generateFinance("userId"),width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:e.generateFinance("username"),width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.phone?a("div",[e._v(e._s(t.row.phone))]):a("div",[e._v(e._s(t.row.email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"coinName",label:e.generateFinance("coinId"),width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:e.generateFinance("type")},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.type?a("div",[e._v(e._s(e.generateFinance("self")))]):1===t.row.type?a("div",[e._v(e._s(e.generateFinance("fuli")))]):2===t.row.type?a("div",[e._v(e._s(e.generateFinance("errorAddress")))]):3===t.row.type?a("div",[e._v(e._s(e.generateFinance("return")))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"qty",label:e.generateFinance("qty"),width:"220",align:"right",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e.convertNum(t.row.qty)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"fromAddress",label:e.generateFinance("fromAddress"),width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.fromAddress?a("div",[/^0x([a-z]|[A-Z]|[0-9]){40}/.test(t.row.fromAddress)?a("div",{staticStyle:{color:"blue"}},[a("a",{attrs:{href:"https://etherscan.io/search?q="+t.row.fromAddress,target:"_blank"}},[e._v(e._s(t.row.fromAddress))])]):!/^0x([a-z]|[A-Z]|[0-9]){40}/.test(t.row.fromAddress)&&t.row.fromAddress.length>=26&&t.row.fromAddress.length<=34?a("div",{staticStyle:{color:"blue"}},[a("a",{attrs:{href:"https://btc.com/"+t.row.fromAddress,target:"_blank"}},[e._v(e._s(t.row.fromAddress))])]):a("div",{staticStyle:{color:"blue"}},[e._v(e._s(t.row.fromAddress))])]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"toAddress",label:e.generateFinance("toAddress"),width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.toAddress?a("div",[/^0x([a-z]|[A-Z]|[0-9]){40}/.test(t.row.toAddress)?a("div",{staticStyle:{color:"blue"}},[a("a",{attrs:{href:"https://etherscan.io/search?q="+t.row.toAddress,target:"_blank"}},[e._v(e._s(t.row.toAddress))])]):!/^0x([a-z]|[A-Z]|[0-9]){40}/.test(t.row.toAddress)&&t.row.toAddress.length>=26&&t.row.toAddress.length<=34?a("div",{staticStyle:{color:"blue"}},[a("a",{attrs:{href:"https://btc.com/"+t.row.toAddress,target:"_blank"}},[e._v(e._s(t.row.toAddress))])]):a("div",{staticStyle:{color:"blue"}},[e._v(e._s(t.row.toAddress))])]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:e.generateFinance("toTime")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("div",[e._v(e._s(e._f("parseTime")(t.row.createTime)))])])]}}])})],1),e._v(" "),a("div",{staticClass:"bottom clearfix"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],staticClass:"sum"},[e._v("\n        "+e._s(e.generateFinance("total"))+"：\n        "),a("i",{staticStyle:{"font-style":"normal"}},[e._v(e._s(e.coinSum))])]),e._v(" "),a("section",{staticClass:"pagination-container fr"},[a("Pagination",{attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1)])],1),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.welfaresLoad,expression:"welfaresLoad"}],attrs:{title:e.generateFinance("Xcoin"),visible:e.welfaresOpen,width:"30%",center:""},on:{"update:visible":function(t){e.welfaresOpen=t}}},[a("el-form",{ref:"welfaresData",attrs:{model:e.welfaresData,rules:e.welfaresRules}},[a("el-form-item",{attrs:{label:e.generateFinance("upload"),prop:"file"}},[a("el-upload",{ref:"uploadList",attrs:{action:e.uploadUrl,"show-file-list":!0,"on-success":e.handleSuccess,"on-error":e.handleError,"on-change":e.changeUpload,"on-remove":e.removeUpload,"auto-upload":!1,"file-list":e.flieList,limit:e.welfaresLimit,"on-exceed":e.limitTips,accept:".xlsx, .xls"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v(e._s(e.generateFinance("clickUp")))])],1),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.welfaresData.file,callback:function(t){e.$set(e.welfaresData,"file",t)},expression:"welfaresData.file"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.generateFinance("remark"),prop:"remark"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.welfaresData.remark,callback:function(t){e.$set(e.welfaresData,"remark",t)},expression:"welfaresData.remark"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.welfaresOpen=!1}}},[e._v(e._s(e.generateFinance("cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.welfaresSubmit("welfaresData")}}},[e._v(e._s(e.generateFinance("confirm")))])],1)],1)],1)},staticRenderFns:[]};var m=a("/Xao")(u,f,!1,function(e){a("x8Ib")},"data-v-9719c6ec",null);t.default=m.exports},TjUr:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.sum[data-v-9719c6ec] {\n  width: 450px;\n  padding: 30px 0 0 30px;\n  display: inline-block;\n  font-size: 16px;\n}\n.el-table th[data-v-9719c6ec] {\n  text-align: center;\n}\n.el-table td[data-v-9719c6ec] {\n  text-align: center;\n}\nsection[data-v-9719c6ec] {\n  display: inline-block;\n}\n",""])},x8Ib:function(e,t,a){var n=a("TjUr");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("ee17b490",n,!0)}});
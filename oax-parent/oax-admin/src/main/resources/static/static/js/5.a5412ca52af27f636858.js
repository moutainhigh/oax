webpackJsonp([5],{"02Hh":function(t,e,a){var l=a("yaU0");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("8bSs")("7dcc2be0",l,!0)},"Q/GF":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("6iV/"),n=a.n(l),o=a("zY+o"),i={data:function(){return{tableData:[],total:0,tableList:[],pages:{pageNum:1,pageSize:10},dialogFormVisible:!1,dialogFormVisible1:!1,formLabelWidth:"120px",maxs:400,value0:50,value1:50,value2:50,value3:50,value4:50,value5:50,value6:50,value7:50,options:[{value:1,label:"开启"},{value:0,label:"关闭"}],form:{minIncome:0,maxIncome:0,backWin:"",status:""},editform:{id:"",minIncome:0,maxIncome:0,backWin:"",status:""}}},computed:{forms:function(){return{minIncome:this.form.minIncome,maxIncome:this.form.maxIncome,backWin:this.form.backWin,status:this.form.status}},editforms:function(){return{id:this.editform.id,minIncome:this.editform.minIncome,maxIncome:this.editform.maxIncome,backWin:this.editform.backWin,status:this.editform.status}}},components:{},created:function(){this.initIncome(),this.initDice()},mounted:function(){},methods:{change0:function(t){this.value0=t},change1:function(t){this.value1=t},change2:function(t){this.value2=t},change3:function(t){this.value3=t},change4:function(t){this.value4=t},change5:function(t){this.value5=t},change6:function(t){this.value6=t},change7:function(t){this.value7=t},isStatus:function(t){return t?"开启":"关闭"},handleSizeChange:function(t){this.pages.pageSize=t,this.initIncome()},handleCurrentChange:function(t){this.pages.pageNum=t,this.initIncome()},handleEdit:function(t,e){this.dialogFormVisible1=!0,this.editform=e,console.log(this.editform)},submit:function(){var t=this,e=this.forms;e=n.a.stringify(e),o.f(e).then(function(e){console.log(e.data),t.dialogFormVisible=!1,t.$message.success(e.msg),t.initIncome()}).catch(function(e){t.$message.error(e.msg)})},submitEdit:function(){var t=this,e=this.editforms;e=n.a.stringify(e),o.o(e).then(function(e){t.dialogFormVisible1=!1,t.$message.success(e.msg),t.initIncome()}).catch(function(e){t.$message.error(e.msg)})},initIncome:function(){var t=this,e=this.pages;o.r(e).then(function(e){console.log(e.data),t.tableList=e.data.list,t.total=e.data.total}).catch(function(t){console.log(t)})},initDice:function(){var t=this;o.p().then(function(e){t.tableData=[],t.tableData.push(e.data),t.value0=t.tableData[0].backWin60,t.value1=t.tableData[0].backWin70,t.value2=t.tableData[0].backWin80,t.value3=t.tableData[0].backWin90,t.value4=t.tableData[0].backWin0,t.value6=t.tableData[0].backWin100,t.value7=t.tableData[0].backWin200,t.value5=t.tableData[0].randomRate}).catch(function(t){console.log(t)})},config:function(){var t=this,e={backWin60:this.value0,backWin70:this.value1,backWin80:this.value2,backWin90:this.value3,backWin0:this.value4,backWin100:this.value6,backWin200:this.value7,randomRate:this.value5};e=n.a.stringify(e),o.k(e).then(function(e){e.success?(t.initDice(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(t){console.log(t)})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dice"},[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"backWin0",label:"0-60的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin60",label:"60-70的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin70",label:"70-80的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin80",label:"80-90的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin90",label:"90-100的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin100",label:"100-200的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin200",label:"200-300的概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"randomRate",label:"随机数乘以倍率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"countUser",label:"参与用户总数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"allBetQty",label:"用户总投注",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"allPayoutQty",label:"用户总获利",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"benefitQty",label:"平台获利",align:"center"}})],1),t._v(" "),a("div",{staticClass:"config"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("60-70的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change0},model:{value:t.value0,callback:function(e){t.value0=e},expression:"value0"}})],1),t._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("span",[t._v("70-80的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("80-90的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("span",[t._v("90-100的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change3},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("100-200的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change6},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}})],1),t._v(" "),a("el-col",{attrs:{span:10,offset:2}},[a("span",[t._v("200-300的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change7},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:1}},[a("span",[t._v("0-60的概率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":""},on:{change:t.change4},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),t._v(" "),a("el-col",{staticClass:"last",attrs:{span:10,offset:2}},[a("span",[t._v("随机数乘以倍率:")]),t._v(" "),a("el-slider",{attrs:{"show-input":"",max:t.maxs},on:{change:t.change5},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1)],1),t._v(" "),a("div",{staticClass:"btm"},[a("el-button",{attrs:{type:"primary"},on:{click:t.config}},[t._v("配置")])],1)],1),t._v(" "),a("section",{staticStyle:{"margin-top":"15px",background:"#fff","padding-top":"15px","padding-bottom":"10px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3,offset:1}},[a("el-button",{attrs:{type:"text"}},[t._v("DICE盈利区间调控")])],1),t._v(" "),a("el-col",{attrs:{span:2,offset:18}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("+ 新增")])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableList}},[a("el-table-column",{attrs:{prop:"id",label:"Id编号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"minIncome",label:"收入下限",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"maxIncome",label:"收入上限",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backWin",label:"后台调控概率",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"是否开启",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.isStatus(e.row.status)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),t.tableList.length>0?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.pages.pageNum,"page-sizes":[10,20,50,100],"page-size":t.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1),t._v(" "),a("el-dialog",{attrs:{title:"添加盈利区间",visible:t.dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"盈利下线","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.minIncome,callback:function(e){t.$set(t.form,"minIncome",e)},expression:"form.minIncome"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"盈利上限","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.maxIncome,callback:function(e){t.$set(t.form,"maxIncome",e)},expression:"form.maxIncome"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"概率0-100","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.backWin,callback:function(e){t.$set(t.form,"backWin",e)},expression:"form.backWin"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑盈利区间",visible:t.dialogFormVisible1,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[a("el-form",{attrs:{model:t.editform}},[a("el-form-item",{attrs:{label:"盈利下线","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.minIncome,callback:function(e){t.$set(t.editform,"minIncome",e)},expression:"editform.minIncome"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"盈利上限","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.maxIncome,callback:function(e){t.$set(t.editform,"maxIncome",e)},expression:"editform.maxIncome"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"概率0-100","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.backWin,callback:function(e){t.$set(t.editform,"backWin",e)},expression:"editform.backWin"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.editform.status,callback:function(e){t.$set(t.editform,"status",e)},expression:"editform.status"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible1=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=a("/Xao")(i,s,!1,function(t){a("02Hh")},"data-v-48491a8c",null);e.default=c.exports},yaU0:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.dice .config[data-v-48491a8c] {\n  margin-top: 20px;\n  background: #fff;\n  padding: 30px 0;\n}\n.dice .config[data-v-48491a8c] .el-col-10 {\n    padding: 20px 10px;\n}\n.dice .config .last[data-v-48491a8c] .el-slider__bar {\n    background-color: #f56c6c;\n}\n.dice .config .last[data-v-48491a8c] .el-slider__button {\n    border: solid 2px #f56c6c;\n}\n.dice .config .btm[data-v-48491a8c] {\n    margin-top: 30px;\n    text-align: center;\n}\n.dice .config .btm[data-v-48491a8c] .el-button--medium {\n      padding: 10px 50px;\n}\n.dice .block[data-v-48491a8c] {\n  margin-top: 20px;\n}\n.dice .dialog-footer[data-v-48491a8c] {\n  text-align: center;\n}\n",""])}});
webpackJsonp([45],{"HaW+":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("ZLEe"),l=o.n(i),n=o("aA9S"),a=o.n(n),r=o("6iV/"),s=o.n(r),c=o("LEHx"),d=o("pY21"),m={data:function(){return{loading:!1,dialogFormVisible1:!1,dialogFormVisible:!1,formLabelWidth:"120px",coinType:[],tableList:[],pages:{pageNum:1,pageSize:10},total:0,condition:{coinId:""},form:{coinId:"",minRollUnder:"",maxRollUnder:"",backWin:"",status:""},editform:{id:"",coinId:"",minRollUnder:"",maxRollUnder:"",backWin:"",status:""},options:[{value:1,label:"开启"},{value:0,label:"关闭"}]}},components:{Pagination:o("1onU").a},computed:{conditions:function(){return{coinId:this.condition.coinId}},forms:function(){return{coinId:this.form.coinId,minRollUnder:this.form.minRollUnder,maxRollUnder:this.form.maxRollUnder,backWin:this.form.backWin,status:this.form.status}},editforms:function(){return{id:this.editform.id,coinId:this.editform.coinId,minRollUnder:this.editform.minRollUnder,maxRollUnder:this.editform.maxRollUnder,backWin:this.editform.backWin,status:this.editform.status}}},mounted:function(){var t=this;this.initData(),this.$nextTick(function(){t.getCoin()})},methods:{getCoin:function(){var t=this;d.d().then(function(e){t.coinType=e.data}).catch(function(t){console.log(t)})},filterType:function(t){var e="";return this.coinType.forEach(function(o){o.coinId===t&&(e=o.coinName)}),e},isBool:function(t){return t?"开启":"关闭"},initData:function(){var t=this;a()(this.conditions,this.pages);var e=this.conditions;c.f(e).then(function(e){t.tableList=e.data.list,t.total=e.data.total}).catch(function(t){console.log(t)})},handleSearch:function(){this.initData()},handleSizeChange:function(t){this.pages.pageSize=t,this.handleSearch()},handleCurrentChange:function(t){this.pages.pageNum=t,this.handleSearch()},submit:function(){var t=this;this.loading=!0;var e=this.forms;e=s.a.stringify(e),c.b(e).then(function(e){t.loading=!1,t.dialogFormVisible=!1,t.$message.success("提交成功"),t.initData(),l()(t.form).map(function(e){return t.form[e]=""}),t.value8=""}).catch(function(e){t.loading=!1,t.$message.error(e.msg)})},handleEdit:function(t,e){this.dialogFormVisible1=!0,this.editform=e},submitEdit:function(){var t=this,e=this.editforms.id,o=this.editforms;o=s.a.stringify(o),c.n(e,o).then(function(e){t.dialogFormVisible1=!1,t.$message.success("修改成功"),t.initData()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error(e.msg)})},handleDelete:function(t,e){this.open2(e.id)},open2:function(t){var e=this;this.$confirm("此操作将删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.subDelete(t)}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},subDelete:function(t){var e=this;this.loading=!0,c.h(t).then(function(t){e.loading=!1,e.$message.success("删除成功"),e.initData()}).catch(function(t){e.loading=!1,e.$message.error(t.msg)})}}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{"v-loading":t.loading}},[o("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[o("el-col",{attrs:{span:2,offset:0}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("+ 新增")])],1),t._v(" "),o("el-col",{attrs:{span:2,offset:15}},[o("el-select",{attrs:{placeholder:"币种",clearable:"",size:"small"},model:{value:t.condition.coinId,callback:function(e){t.$set(t.condition,"coinId",e)},expression:"condition.coinId"}},t._l(t.coinType,function(t){return o("el-option",{key:t.coinId,attrs:{label:t.coinName,value:t.coinId}})}))],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:t.handleSearch}},[t._v("搜索")])],1)],1),t._v(" "),o("section",[o("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableList}},[o("el-table-column",{attrs:{prop:"coinId",label:"币种id",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"coinName",label:"币种名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.filterType(e.row.coinId)))]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"minRollUnder",label:"收入下限",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"maxRollUnder",label:"收入上限",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"backWin",label:"后台调控概率",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"status",label:"是否开启",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.isBool(e.row.status)))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(o){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),o("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(o){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),t.tableList.length>0?o("div",{staticClass:"block"},[o("el-pagination",{attrs:{"current-page":t.pages.pageNum,"page-sizes":[10,20,50,100],"page-size":t.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e(),t._v(" "),o("el-dialog",{attrs:{title:"添加",visible:t.dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{attrs:{model:t.form}},[o("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:t.form.coinId,callback:function(e){t.$set(t.form,"coinId",e)},expression:"form.coinId"}},t._l(t.coinType,function(t){return o("el-option",{key:t.coinId,attrs:{label:t.coinName,value:t.coinId}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"盈利下限","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.minRollUnder,callback:function(e){t.$set(t.form,"minRollUnder",e)},expression:"form.minRollUnder"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"盈利上限","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.maxRollUnder,callback:function(e){t.$set(t.form,"maxRollUnder",e)},expression:"form.maxRollUnder"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"后台调控概率","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.backWin,callback:function(e){t.$set(t.form,"backWin",e)},expression:"form.backWin"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"开启/关闭","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"编辑",visible:t.dialogFormVisible1,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[o("el-form",{attrs:{model:t.editform}},[o("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:t.editform.coinId,callback:function(e){t.$set(t.editform,"coinId",e)},expression:"editform.coinId"}},t._l(t.coinType,function(t){return o("el-option",{key:t.coinId,attrs:{label:t.coinName,value:t.coinId}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"盈利下限","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.minRollUnder,callback:function(e){t.$set(t.editform,"minRollUnder",e)},expression:"editform.minRollUnder"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"盈利上限","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.maxRollUnder,callback:function(e){t.$set(t.editform,"maxRollUnder",e)},expression:"editform.maxRollUnder"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"后台调控概率","label-width":t.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.backWin,callback:function(e){t.$set(t.editform,"backWin",e)},expression:"editform.backWin"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"开启/关闭","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.editform.status,callback:function(e){t.$set(t.editform,"status",e)},expression:"editform.status"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible1=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=o("/Xao")(m,f,!1,function(t){o("SJaI")},"data-v-44ff1222",null);e.default=u.exports},SJaI:function(t,e,o){var i=o("vU+S");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("8bSs")("860c1da0",i,!0)},"vU+S":function(t,e,o){(t.exports=o("BkJT")(!1)).push([t.i,"\n.block[data-v-44ff1222] {\n  margin-top: 20px;\n}\n.dialog-footer[data-v-44ff1222] {\n  text-align: center;\n}\n",""])}});
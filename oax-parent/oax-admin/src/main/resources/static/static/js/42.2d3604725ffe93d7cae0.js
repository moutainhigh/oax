webpackJsonp([42],{"1+Ur":function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,"\n.tips[data-v-53ce04ce] {\n  background: #fff;\n  color: #f56c6c;\n  padding: 20px 30px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.block[data-v-53ce04ce] {\n  margin-top: 20px;\n}\n.dialog-footer[data-v-53ce04ce] {\n  text-align: center;\n}\n",""])},guEK:function(t,e,i){var o=i("1+Ur");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("8bSs")("ed1e078e",o,!0)},sR23:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("ZLEe"),n=i.n(o),a=i("aA9S"),l=i.n(a),r=i("6iV/"),s=i.n(r),c=i("LEHx"),d=i("pY21"),u={data:function(){return{loading:!1,dialogFormVisible1:!1,dialogFormVisible:!1,formLabelWidth:"120px",coinType:[],tableList:[],pages:{pageNum:1,pageSize:10},total:0,condition:{coinId:""},form:{coinId:"",randomRate:""},editform:{id:"",coinId:"",randomRate:""},options:[{value:1,label:"开启"},{value:0,label:"关闭"}]}},components:{Pagination:i("1onU").a},computed:{conditions:function(){return{coinId:this.condition.coinId}},forms:function(){return{coinId:this.form.coinId,randomRate:this.form.randomRate}},editforms:function(){return{id:this.editform.id,coinId:this.editform.coinId,randomRate:this.editform.randomRate}}},mounted:function(){var t=this;this.initData(),this.$nextTick(function(){t.getCoin()})},methods:{getCoin:function(){var t=this;d.d().then(function(e){t.coinType=e.data}).catch(function(t){console.log(t)})},filterType:function(t){var e="";return this.coinType.forEach(function(i){i.coinId===t&&(e=i.coinName)}),e},isBool:function(t){return t?"开启":"关闭"},initData:function(){var t=this;l()(this.conditions,this.pages);var e=this.conditions;c.r(e).then(function(e){t.tableList=e.data.list,t.total=e.data.total}).catch(function(t){console.log(t)})},handleSearch:function(){this.initData()},handleSizeChange:function(t){this.pages.pageSize=t,this.handleSearch()},handleCurrentChange:function(t){this.pages.pageNum=t,this.handleSearch()},submit:function(){var t=this;this.loading=!0;var e=this.forms;e=s.a.stringify(e),c.c(e).then(function(e){t.loading=!1,t.dialogFormVisible=!1,t.$message.success("提交成功"),t.initData(),n()(t.form).map(function(e){return t.form[e]=""})}).catch(function(e){t.loading=!1,t.$message.error(e.msg)})},handleEdit:function(t,e){this.dialogFormVisible1=!0,this.editform=e},submitEdit:function(){var t=this,e=this.editforms,i=this.editforms.id;e=s.a.stringify(e),c.o(i,e).then(function(e){t.dialogFormVisible1=!1,t.$message.success("修改成功"),t.initData()}).catch(function(e){console.log(e),t.loading=!1,t.$message.error(e.msg)})},handleDelete:function(t,e){this.open2(e.id)},open2:function(t){var e=this;this.$confirm("此操作将删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.subDelete(t)}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},subDelete:function(t){var e=this;this.loading=!0,c.i(t).then(function(t){e.loading=!1,e.$message.success("删除成功"),e.initData()}).catch(function(t){e.loading=!1,e.$message.error(t.msg)})}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{"v-loading":t.loading}},[t._m(0),t._v(" "),i("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[i("el-col",{attrs:{span:2,offset:0}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("+ 新增")])],1),t._v(" "),i("el-col",{attrs:{span:2,offset:15}},[i("el-select",{attrs:{placeholder:"币种",clearable:"",size:"small"},model:{value:t.condition.coinId,callback:function(e){t.$set(t.condition,"coinId",e)},expression:"condition.coinId"}},t._l(t.coinType,function(t){return i("el-option",{key:t.coinId,attrs:{label:t.coinName,value:t.coinId}})}))],1),t._v(" "),i("el-col",{attrs:{span:3}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:t.handleSearch}},[t._v("搜索")])],1)],1),t._v(" "),i("section",[i("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableList}},[i("el-table-column",{attrs:{prop:"coinId",label:"币种id",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"coinName",label:"币种名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.filterType(e.row.coinId)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"randomRate",label:"开奖数倍率",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),t.tableList.length>0?i("div",{staticClass:"block"},[i("el-pagination",{attrs:{"current-page":t.pages.pageNum,"page-sizes":[10,20,50,100],"page-size":t.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e(),t._v(" "),i("el-dialog",{attrs:{title:"添加",visible:t.dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:t.form.coinId,callback:function(e){t.$set(t.form,"coinId",e)},expression:"form.coinId"}},t._l(t.coinType,function(t){return i("el-option",{key:t.coinId,attrs:{label:t.coinName,value:t.coinId}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"开奖数倍率","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.randomRate,callback:function(e){t.$set(t.form,"randomRate",e)},expression:"form.randomRate"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.dialogFormVisible1,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[i("el-form",{attrs:{model:t.editform}},[i("el-form-item",{attrs:{label:"币种","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择币种类型"},model:{value:t.editform.coinId,callback:function(e){t.$set(t.editform,"coinId",e)},expression:"editform.coinId"}},t._l(t.coinType,function(t){return i("el-option",{key:t.coinId,attrs:{label:t.coinName,value:t.coinId}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"开奖数倍率","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.randomRate,callback:function(e){t.$set(t.editform,"randomRate",e)},expression:"editform.randomRate"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible1=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("h3",[this._v("温馨提示：")]),this._v(" "),e("p",[this._v("dice开奖数倍率：后台生成的开奖数 x (开奖数倍率/100) = 真实的开奖数")]),this._v(" "),e("p",[this._v("即：开奖数倍率越小，用户中奖概率越高，数值范围0-400")]),this._v(" "),e("p",[this._v("ps：无论怎么调，用户的最高中奖率都控制在96%")])])}]};var m=i("/Xao")(u,f,!1,function(t){i("guEK")},"data-v-53ce04ce",null);e.default=m.exports}});
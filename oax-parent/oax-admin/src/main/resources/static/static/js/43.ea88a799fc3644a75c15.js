webpackJsonp([43],{"5leR":function(t,i,e){(t.exports=e("BkJT")(!1)).push([t.i,"\n.tinymce-box:not(:first-child) {\n  margin-top: 70px;\n}\n.tinymce-box .tinymce-title {\n  margin-bottom: 10px;\n}\n",""])},VUne:function(t,i,e){var a=e("5leR");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("024f6050",a,!0)},hbpv:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("azsk"),n=e("1onU"),l=e("6lZ+"),s=e("EGuJ"),o=e("mC4M"),c=e("5aCZ"),r={name:"user_level",data:function(){return{activeName:"0",loading:!1,disabled:!0,dialogLoading:!1,dialogFormVisible:!1}},methods:{handleClick:function(){},changeUpload:function(t,i){var e=this;this.fileList=i,this.$nextTick(function(){var t=document.getElementsByClassName("el-upload-list")[0].children;e.ruleForm.coin_icon="123";for(var a=0;a<t.length;a++){var n=t[a],l=document.createElement("img");l.setAttribute("src",i[a].url),l.setAttribute("style","max-width:50%;padding-left:25%"),"IMG"!==n.lastElementChild.nodeName&&n.appendChild(l)}})},handleList:function(){var t=this;this.loading=!0,a.c(this.reqData).then(function(i){console.log(t.reqData),t.loading=!1;var e=i.data;t.tableData=e.data}).catch(function(i){console.log(i),t.loading=!1})},confirm:function(){this.dialogFormVisible=!1,this.dialogLoading=!1},resetForm:function(t){this.$refs[t].resetFields()}},components:{Pagination:n.a,QuitConfirm:l.a,FilterSection:o.a,DragDialog:s.a,Tinymce:c.a}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page"},[[e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"用户协议",name:"0"}},[e("div",{staticClass:"tinymce-box"},[e("div",{staticClass:"tinymce-title"},[t._v("内容编辑：")]),t._v(" "),e("Tinymce")],1),t._v(" "),e("div",{staticClass:"tinymce-box"},[e("div",{staticClass:"tinymce-title"},[t._v("内容(英文)编辑：")]),t._v(" "),e("Tinymce")],1)]),t._v(" "),e("el-tab-pane",{attrs:{label:"隐私政策",name:"1"}},[e("div",{staticClass:"tinymce-box"},[e("div",{staticClass:"tinymce-title"},[t._v("内容编辑：")]),t._v(" "),e("Tinymce")],1),t._v(" "),e("div",{staticClass:"tinymce-box"},[e("div",{staticClass:"tinymce-title"},[t._v("内容(英文)编辑：")]),t._v(" "),e("Tinymce")],1)]),t._v(" "),e("el-tab-pane",{attrs:{label:"防洗钱",name:"2"}},[e("div",{staticClass:"tinymce-box"},[e("div",{staticClass:"tinymce-title"},[t._v("内容编辑：")]),t._v(" "),e("Tinymce")],1),t._v(" "),e("div",{staticClass:"tinymce-box"},[e("div",{staticClass:"tinymce-title"},[t._v("内容(英文)编辑：")]),t._v(" "),e("Tinymce")],1)])],1)],t._v(" "),e("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}],staticClass:"center-dialog small-dialog",attrs:{title:"提示",visible:t.dialogFormVisible},on:{"update:visible":function(i){t.dialogFormVisible=i}}},[e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")]),t._v(" "),e("el-button",{on:{click:function(i){t.dialogFormVisible=!1}}},[t._v("关 闭")])],1)])],2)},staticRenderFns:[]};var m=e("/Xao")(r,d,!1,function(t){e("VUne")},null,null);i.default=m.exports}});
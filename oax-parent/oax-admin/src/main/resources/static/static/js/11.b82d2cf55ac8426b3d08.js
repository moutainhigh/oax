webpackJsonp([11],{"+sLl":function(e,t,r){var a=r("5/Ik");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("8bSs")("69ca7bf1",a,!0)},"5/Ik":function(e,t,r){(e.exports=r("BkJT")(!1)).push([e.i,"\n.mini-dialog .el-dialog[data-v-f23a2952] {\n  width: 15%;\n  min-width: 400px;\n  height: 70%;\n}\n",""])},VVAO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("1onU"),s=r("vLgD");var o={data:function(){return{listloading:!1,registerLoading:!1,userdialogForm:!1,menuData:[],tableData:[],urlData:[{name:"GET",id:"GET"},{name:"POST",id:"POST"},{name:"PUT",id:"PUT"},{name:"PATCH",id:"PATCH"},{name:"DELETE",id:"DELETE"}],registerForm:{name:"",resurl:"",type:"",parentid:1,sort:""},typeData:[{type:this.generateAuthority("menu"),id:1},{type:this.generateAuthority("button"),id:2}],registerRules:{name:[{required:!0,message:this.generateAuthority("inresources"),trigger:"blur"}],resurl:[{required:!0,message:this.generateAuthority("inresurl"),trigger:"blur"}],method:[{required:!0,message:this.generateAuthority("postmethod"),trigger:"blur"}],type:[{required:!0,message:this.generateAuthority("postmethod"),trigger:"blur"}]}}},methods:{generateAuthority:r("ivlf").b,cancel:function(){this.userdialogForm=!1,this.registerForm={email:"",password:"",tel:"",name:"",username:""}},handleList:function(){var e,t=this;this.listloading=!0,Object(s.a)({url:"resources",method:"get",params:e}).then(function(e){t.listloading=!1;var r=e.data;t.tableData=r,t.menuData=r.map(function(e){if(1===e.type)return e}),console.log(t.menuData)}).catch(function(e){console.log(e),t.listloading=!1})},deleteRole:function(e){var t,r=this;(t=e,Object(s.a)({url:"resources/"+t,method:"delete"})).then(function(e){r.$message.success(e.msg),r.handleList()}).catch(function(e){console.log(e)})},addResources:function(){this.userdialogForm=!0,console.log("add")},usersave:function(){var e=this;this.$refs.registerForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;var r;e.registerLoading=!0,(r=e.registerForm,Object(s.a)({url:"resources",method:"post",data:r})).then(function(t){e.registerLoading=!1,e.$message.success(t.msg),e.userdialogForm=!1,e.registerForm={email:"",password:"",tel:"",name:"",username:""},e.handleList()}).catch(function(){e.registerLoading=!1})})}},mounted:function(){this.handleList()},components:{Pagination:a.a}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("section",{staticClass:"list-table-container"},[r("section",{staticClass:"btn-container-area clearfix"},[r("el-button",{attrs:{type:"success"},on:{click:e.addResources}},[e._v(e._s(e.generateAuthority("add")))])],1),e._v(" "),r("section",{directives:[{name:"loading",rawName:"v-loading",value:e.listloading,expression:"listloading"}],staticClass:"table-container-area"},[r("el-table",{staticClass:"table",attrs:{data:e.tableData}},[r("el-table-column",{attrs:{width:"55"}}),e._v(" "),r("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",{attrs:{title:t.row.id}},[r("span",[e._v(e._s(t.row.id))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.generateAuthority("resources")},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",{attrs:{title:t.row.name}},[r("span",[e._v(e._s(t.row.name))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.generateAuthority("father")},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",{attrs:{title:t.row.parentid}},[r("span",[e._v(e._s(t.row.parentid))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.generateAuthority("resurl")},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",{attrs:{title:t.row.resurl}},[r("span",[e._v(e._s(t.row.resurl))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.generateAuthority("restype")},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",{attrs:{title:t.row.type}},[r("span",[e._v(e._s(t.row.type))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.generateAuthority("sort")},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",{attrs:{title:t.row.sort}},[r("span",[e._v(e._s(t.row.sort))])])]}}])})],1)],1)]),e._v(" "),r("el-dialog",{staticClass:"center-dialog small-dialog",attrs:{title:e.generateAuthority("adduser"),visible:e.userdialogForm},on:{"update:visible":function(t){e.userdialogForm=t}}},[r("section",{staticClass:"filter-container clearfix"},[r("el-form",{ref:"registerForm",attrs:{model:e.registerForm,"label-width":"90px",rules:e.registerRules}},[r("el-form-item",{attrs:{prop:"name",label:e.generateAuthority("resources")+"："}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:e.generateAuthority("inresources"),clearable:""},model:{value:e.registerForm.name,callback:function(t){e.$set(e.registerForm,"name",t)},expression:"registerForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"resurl",label:e.generateAuthority("resurl")+"："}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:e.generateAuthority("inresurl"),clearable:""},model:{value:e.registerForm.resurl,callback:function(t){e.$set(e.registerForm,"resurl",t)},expression:"registerForm.resurl"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"type",label:e.generateAuthority("restype")+"：","label-width":"200"}},[r("el-select",{attrs:{filterable:""},model:{value:e.registerForm.type,callback:function(t){e.$set(e.registerForm,"type",t)},expression:"registerForm.type"}},e._l(e.typeData,function(e,t){return r("el-option",{key:t,attrs:{label:e.type,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{prop:"parentid",label:e.generateAuthority("father")+"："}},[r("el-select",{attrs:{filterable:""},model:{value:e.registerForm.parentid,callback:function(t){e.$set(e.registerForm,"parentid",t)},expression:"registerForm.parentid"}},e._l(e.menuData,function(t,a){return t?r("el-option",{key:a,attrs:{label:t.name,value:t.id}}):e._e()}))],1),e._v(" "),r("el-form-item",{attrs:{prop:"method",label:e.generateAuthority("urlmethod")+"：","label-width":"230"}},[r("el-select",{attrs:{filterable:""},model:{value:e.registerForm.method,callback:function(t){e.$set(e.registerForm,"method",t)},expression:"registerForm.method"}},e._l(e.urlData,function(t,a){return t?r("el-option",{key:a,attrs:{label:t.name,value:t.id}}):e._e()}))],1),e._v(" "),r("el-form-item",{attrs:{prop:"sort",label:e.generateAuthority("sort")+"："}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:e.generateAuthority("insort"),clearable:""},model:{value:e.registerForm.sort,callback:function(t){e.$set(e.registerForm,"sort",t)},expression:"registerForm.sort"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",loading:e.registerLoading},nativeOn:{click:function(t){t.preventDefault(),e.usersave(t)}}},[e._v(e._s(e.generateAuthority("save")))]),e._v(" "),r("el-button",{on:{click:function(t){e.cancel()}}},[e._v(e._s(e.generateAuthority("cancel")))])],1)])],1)},staticRenderFns:[]};var i=r("/Xao")(o,l,!1,function(e){r("+sLl")},"data-v-f23a2952",null);t.default=i.exports}});
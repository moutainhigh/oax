webpackJsonp([28],{CD3c:function(t,n,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.activation-page {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.activation-page .activation-wrapper {\n    margin: 100px auto;\n    width: 540px;\n    background-color: #fff;\n    padding: 56px 60px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.activation-page .activation-wrapper .activation-title {\n      width: 100%;\n      text-align: center;\n      font-size: 24px;\n      color: #000;\n      line-height: 28px;\n}\n.activation-page .activation-wrapper .activation-content {\n      width: 100%;\n      color: #333;\n      font-size: 16px;\n      line-height: 24px;\n      margin-top: 60px;\n}\n.activation-page .activation-wrapper .activation-content span {\n        color: #0080F7;\n}\n.activation-page .activation-wrapper .form-btn:hover {\n      background-color: #e0a32d;\n}\n.activation-page .activation-wrapper .form-btn {\n      line-height: 48px;\n      height: 48px;\n      background-color: #FFB933;\n      color: #333;\n      font-size: 16px;\n      text-align: center;\n      margin-top: 60px;\n      cursor: pointer;\n}\n",""])},suag:function(t,n,a){var i=a("CD3c");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("ceafccf8",i,!0)},x4ye:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=a("vLgD");var e={name:"accountActivation",data:function(){return{activationLoad:!1,mail:""}},methods:{generateAccountActivation:a("ivlf").a,haveMail:function(){sessionStorage.oaxRegisterMail?this.mail=sessionStorage.oaxRegisterMail:this.$router.push({path:"/register"})},sendAgain:function(){var t=this;t.activationLoad=!0;var n,a={email:t.mail};(n=a,Object(i.a)({url:"/email/sendRegisterUrl",method:"POST",data:n})).then(function(n){t.activationLoad=!1,!0===n.success?t.$message({message:n.msg,type:"success"}):t.$message.error(n.msg)}).catch(function(n){t.activationLoad=!1})}},mounted:function(){this.haveMail()},components:{}},o={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"activation-page"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.activationLoad,expression:"activationLoad"}],staticClass:"activation-wrapper"},[a("div",{staticClass:"activation-title"},[t._v(t._s(t.generateAccountActivation("accountActivation_title")))]),t._v(" "),a("div",{staticClass:"activation-content"},[t._v(t._s(t.generateAccountActivation("accountActivation_tips_1"))),a("span",[t._v(t._s(t.mail))]),t._v("，"+t._s(t.generateAccountActivation("accountActivation_tips_2")))]),t._v(" "),a("div",{staticClass:"form-btn",on:{click:t.sendAgain}},[t._v(t._s(t.generateAccountActivation("accountActivation_resend")))])])])},staticRenderFns:[]};var c=a("/Xao")(e,o,!1,function(t){a("suag")},null,null);n.default=c.exports}});
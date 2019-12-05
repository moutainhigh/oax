webpackJsonp([5,15],{"2N68":function(n,e,o){(n.exports=o("BkJT")(!1)).push([n.i,'\n.login-register-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #f4f4f4;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.login-register-container section {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.login-register-container .bgimg-container {\n    width: 500px;\n    height: 700px;\n}\n.login-register-container .bgimg-container img {\n      width: 100%;\n      height: 440px;\n      margin-top: 130px;\n}\n.login-register-container .title {\n    font-size: 24px;\n    text-align: center;\n}\n.login-register-container .tips {\n    text-align: center;\n    position: relative;\n}\n.login-register-container .tips:before {\n      content: "";\n      position: absolute;\n      width: 100%;\n      height: 1px;\n      background-color: #eee;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      left: 0;\n}\n.login-register-container .tips .text-tips {\n      position: relative;\n      z-index: 1;\n      padding: 0 10px;\n      background: #fff;\n}\n.login-register-container .form-container {\n    margin-left: 50px;\n    -webkit-box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.15);\n            box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.15);\n    padding: 40px 100px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 500px;\n    height: 700px;\n    background-color: #fff;\n}\n.login-register-container .form-container h3 {\n      color: #606266;\n}\n',""])},"7oaL":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={name:"login",data:function(){return{loginForm:{username:"",password:"",googleCode:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,e,o){e.trim().length>=3?o():o(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,e,o){e.length<5?o(new Error("密码不能小于5位")):o()}}],googleCode:[{required:!0,trigger:"blur",validator:function(n,e,o){e.length<5?o(new Error("google验证码不能小于5位")):o()}}]},loading:!1,pwdType:"password"}},components:{},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("Login",n.loginForm).then(function(){console.log("Login"),n.loading=!1,n.$router.push({path:"/"}),console.log("Login2")}).catch(function(){console.log("catch"),n.loading=!1})})}}},i={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules,"label-position":"left","label-width":"0px"}},[o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container svg-container_login"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),o("el-input",{attrs:{name:"username",type:"text",autoComplete:"off",placeholder:"手机号/邮箱"},model:{value:n.loginForm.username,callback:function(e){n.$set(n.loginForm,"username",e)},expression:"loginForm.username"}})],1),n._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),o("el-input",{attrs:{name:"password",type:n.pwdType,autoComplete:"off",placeholder:"密码"},model:{value:n.loginForm.password,callback:function(e){n.$set(n.loginForm,"password",e)},expression:"loginForm.password"}}),n._v(" "),o("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[o("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),o("el-form-item",{attrs:{prop:"googleCode"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"googleCode"}})],1),n._v(" "),o("el-input",{attrs:{name:"googleCode",type:"text",autoComplete:"off",placeholder:"请输入google动态验证码"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}},model:{value:n.loginForm.googleCode,callback:function(e){n.$set(n.loginForm,"googleCode",e)},expression:"loginForm.googleCode"}})],1),n._v(" "),o("el-form-item",[o("el-button",{staticClass:"confirm-btn",attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(e){e.preventDefault(),n.handleLogin(e)}}},[n._v("\n        登 录\n      ")])],1)],1)],1)},staticRenderFns:[]};var r=o("/Xao")(t,i,!1,function(n){o("dWUY")},null,null);e.default=r.exports},GPtc:function(n,e,o){n.exports=o.p+"static/img/ban.ca4e6fe.png"},"T+/8":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o("7oaL"),i=o("GPtc"),r=o.n(i),a={name:"login",data:function(){return{banner:r.a,formType:"loginPage"}},components:{loginPage:t.default},methods:{}},s={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"login-register-container"},[e("section",[e("div",{staticClass:"bgimg-container"},[e("img",{attrs:{src:this.banner,alt:""}})]),this._v(" "),e("div",{staticClass:"form-container"},[e("h3",{staticClass:"title"},[this._v("\n        XBTC 后台管理系统\n      ")]),this._v(" "),e(this.formType,{tag:"component"})],1)])])},staticRenderFns:[]};var l=o("/Xao")(a,s,!1,function(n){o("mk4K")},null,null);e.default=l.exports},dWUY:function(n,e,o){var t=o("h4xw");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("8bSs")("04ef9ff0",t,!0)},h4xw:function(n,e,o){(n.exports=o("BkJT")(!1)).push([n.i,'\n.login-container {\n  margin: 40px 0;\n}\n.login-container .show-pwd,\n  .login-container .svg-container {\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-size: 16px;\n    color: #a8a8a8;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.login-container .svg-container {\n    left: 10px;\n    z-index: 1;\n    width: 25px;\n}\n.login-container .el-input {\n    display: inline-block;\n    width: 100%;\n}\n.login-container .el-input input {\n      padding: 12px 12px 12px 30px;\n}\n.login-container .forgetPsd {\n    position: absolute;\n    color: #909399;\n    top: 0;\n    right: 0;\n    height: 46px;\n    border: none;\n    background-color: transparent;\n}\n.login-container .forgetPsd::before {\n      content: "";\n      width: 1px;\n      height: 20px;\n      position: absolute;\n      background-color: #d8d8d8;\n      left: 0;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%);\n}\n',""])},mk4K:function(n,e,o){var t=o("2N68");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("8bSs")("cc048f96",t,!0)}});
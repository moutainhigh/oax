webpackJsonp([30],{"J/Xr":function(e,t,o){var n=o("m/HT");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("8bSs")("4dec0ef4",n,!0)},bV28:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("ladc"),i={data:function(){return{qwe:!0,timecount1:60,timecount2:60,phoneflag:!0,emailflag:!0,googleflag:!0,phonecodemsg:"",emailcodemsg:"",googlecodemsg:"",personInfo:{},checkType:{phoneStatus:0,emailStatus:0,googleStatus:0},checkCode:{emailCode:"",smsCode:"",googleCode:""},type:"",status:"",timeId1:"",timeId2:""}},methods:{generateUserChild:o("ivlf").C,toback:function(){this.$router.push({path:"/user/user_center"})},getData:function(){var e=this,t=window.sessionStorage.oaxLoginAccessToken,o=window.sessionStorage.oaxLoginUserId;n.B(o,t).then(function(t){if(t.success){var o=t.data.usercenter;e.personInfo=o,e.personLog=t.data.userLoginLogList,e.userList=t.data.userLoginLogList[0],e.getchecktype()}}).catch(function(e){})},getchecktype:function(){var e=this,t=this.personInfo.phone||this.personInfo.email;n.r(t).then(function(t){if(t.success){e.checkType=t.data,e.qwe=!1;var o=0;for(var n in e.checkType)1===e.checkType[n]&&o++;o<=1&&window.sessionStorage.oaxLoginSafeTip?(e.tipflag=!0,document.body.style.overflow="hidden"):e.tipflag=!1,e.safecount=o}else e.$message.error(t.msg)}).catch(function(e){})},getphonecode:function(e,t){var o=this,i=this;i.phoneflag=!1,n.p(e,t).then(function(e){e.success||o.$message.error(e.msg)}).catch(function(e){}),this.timeId1=setInterval(function(){i.timecount1--,0===i.timecount1&&(i.timecount1=60,i.phoneflag=!0,clearInterval(o.timeId1))},1e3)},getemailcode:function(e){var t=this,o=this;this.emailflag=!1,n.v(e).then(function(e){e.success||t.$message.error(e.msg)}).catch(function(e){}),this.timeId2=setInterval(function(){o.timecount2--,0===o.timecount2&&(o.timecount2=60,o.emailflag=!0,clearInterval(t.timeId2))},1e3)},checkphone:function(){if(""===this.checkCode.smsCode)return this.phonecodemsg=this.generateUserChild("user_writeSmsCode"),!1;return/^[0-9]*$/.test(this.checkCode.smsCode)?(this.phonecodemsg="",!0):(this.phonecodemsg=this.generateUserChild("user_makesureYourCode"),!1)},checkemail:function(){if(""===this.checkCode.emailCode)return this.emailcodemsg=this.generateUserChild("user_writeEmailCode"),!1;return/^[0-9]*$/.test(this.checkCode.emailCode)?(this.emailcodemsg="",!0):(this.emailcodemsg=this.generateUserChild("user_makesureYourCode"),!1)},checkgoogle:function(){if(""===this.checkCode.googleCode)return this.googlecodemsg=this.generateUserChild("useer_wirteGoogleCode"),!1;return/^[0-9]*$/.test(this.checkCode.googleCode)?(this.googlecodemsg="",!0):(this.googlecodemsg=this.generateUserChild("user_makesureYourCode"),!1)},check:function(){return!(1===this.checkType.phoneStatus&&!this.checkphone())&&(!(1===this.checkType.emailStatus&&!this.checkemail())&&(!(1===this.checkType.googleStatus&&!this.checkgoogle())&&void this.submitStatus()))},submitStatus:function(){var e=this;this.checkCode.type=this.type,this.checkCode.status=this.status,n.d(this.checkCode).then(function(t){if(t.success)e.$router.push({path:"/user/user_center"});else{var o=t.msg,n=t.code;"10019"===n?e.emailcodemsg=o:"10007"===n?e.phonecodemsg=o:"10104"===n?e.googlecodemsg=o:e.$message.error(t.msg)}})}},created:function(){this.getData(),this.type=this.$route.params.id,this.status=this.$route.params.status},mounted:function(){var e=this;document.onkeydown=function(t){13===t.keyCode&&e.check()}},destroyed:function(){document.onkeydown=function(e){if(13===e.keyCode)return e.returnValue=!1,!1}},filters:{hiddEmail:function(e){if(e){if(-1!==e.indexOf("@")){var t=e.indexOf("@");return e="****"+e.substring(t-4)}return e.substring(4,4)+"********"+e.substring(e.length-4)}}}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qwe,expression:"qwe"}],staticClass:"checkBox"},[o("span",{staticClass:"returnback",on:{click:e.toback}}),e._v(" "),o("h1",[e._v(e._s(e.generateUserChild("user_safeCheck")))]),e._v(" "),o("form",{attrs:{action:""}},[0!==e.checkType.phoneStatus?o("p",[e._v(e._s(e.generateUserChild("user_phone"))+"："+e._s(e._f("hiddEmail")(e.personInfo.phone)))]):e._e(),e._v(" "),0!==e.checkType.phoneStatus?o("div",{staticClass:"code phone"},[o("div",{staticClass:"code-l fl"},[o("i",{staticClass:"safeicon"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode.smsCode,expression:"checkCode.smsCode"}],attrs:{type:"text",placeholder:e.generateUserChild("user_writeSmsCode"),maxlength:"10"},domProps:{value:e.checkCode.smsCode},on:{blur:e.checkphone,input:function(t){t.target.composing||e.$set(e.checkCode,"smsCode",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"code-r fr"},[e.phoneflag?o("a",{on:{click:function(t){e.getphonecode(e.personInfo.phone,6)}}},[e._v(e._s(e.generateUserChild("user_getcode")))]):o("a",[e._v(e._s(e.timecount1)+e._s(e.generateUserChild("user_countDown")))])]),e._v(" "),o("span",[e._v(e._s(e.phonecodemsg))])]):e._e(),e._v(" "),0!==e.checkType.emailStatus?o("p",[e._v(e._s(e.generateUserChild("user_email"))+"："+e._s(e._f("hiddEmail")(e.personInfo.email)))]):e._e(),e._v(" "),0!==e.checkType.emailStatus?o("div",{staticClass:"code email"},[o("div",{staticClass:"code-l fl"},[o("i",{staticClass:"safeicon"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode.emailCode,expression:"checkCode.emailCode"}],attrs:{type:"text",placeholder:e.generateUserChild("user_writeEmailCode"),maxlength:"10"},domProps:{value:e.checkCode.emailCode},on:{blur:e.checkemail,input:function(t){t.target.composing||e.$set(e.checkCode,"emailCode",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"code-r fr"},[e.emailflag?o("a",{on:{click:function(t){e.getemailcode(e.personInfo.email)}}},[e._v(e._s(e.generateUserChild("user_getcode")))]):o("a",[e._v(e._s(e.timecount2)+e._s(e.generateUserChild("user_countDown")))])]),e._v(" "),o("span",[e._v(e._s(e.emailcodemsg))])]):e._e(),e._v(" "),0!==e.checkType.googleStatus?o("p",[e._v(e._s(e.generateUserChild("user_google")))]):e._e(),e._v(" "),0!==e.checkType.googleStatus?o("div",{staticClass:"code google"},[o("div",{staticClass:"google"},[o("i",{staticClass:"safeicon"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode.googleCode,expression:"checkCode.googleCode"}],attrs:{type:"text",placeholder:e.generateUserChild("useer_wirteGoogleCode"),maxlength:"10"},domProps:{value:e.checkCode.googleCode},on:{blur:e.checkgoogle,input:function(t){t.target.composing||e.$set(e.checkCode,"googleCode",t.target.value)}}})]),e._v(" "),o("span",[e._v(e._s(e.googlecodemsg))])]):e._e(),e._v(" "),o("div",{staticClass:"btn_submit",on:{click:e.check}},[e._v(e._s(e.generateUserChild("user_submit")))])])])},staticRenderFns:[]};var s=o("/Xao")(i,c,!1,function(e){o("J/Xr")},"data-v-d0c4e3ac",null);t.default=s.exports},"m/HT":function(e,t,o){(e.exports=o("BkJT")(!1)).push([e.i,"\n.checkBox[data-v-d0c4e3ac] {\n  width: 540px;\n  padding: 60px 60px 30px 60px;\n  background-color: #fff;\n  margin: 100px auto 100px;\n  position: relative;\n}\n.checkBox .returnback[data-v-d0c4e3ac] {\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    background: url("+o("P9/e")+") no-repeat;\n    position: absolute;\n    top: 20px;\n    left: 30px;\n}\n.checkBox h1[data-v-d0c4e3ac] {\n    width: 100%;\n    text-align: center;\n    font-size: 24px;\n    font-weight: 600;\n    margin: 0 0 46px 0;\n}\n.checkBox form > div[data-v-d0c4e3ac] {\n    width: 420px;\n    height: 48px;\n    border: 1px solid #eee;\n    margin: 0 auto;\n    margin-bottom: 29px;\n}\n.checkBox form > div > span[data-v-d0c4e3ac] {\n      display: inline-block;\n      color: #FF5656;\n      text-align: left;\n      font-size: 12px;\n      float: right;\n      padding: 6px 3px;\n}\n.checkBox form > div .code-l[data-v-d0c4e3ac] {\n      width: 290px;\n      height: 100%;\n}\n.checkBox form > div .code-l i[data-v-d0c4e3ac] {\n        float: left;\n        display: inline-block;\n        width: 24px;\n        height: 24px;\n        margin: 11px 15px;\n}\n.checkBox form > div .code-l input[data-v-d0c4e3ac] {\n        float: left;\n        width: 216px;\n        height: 100%;\n        border: none;\n        outline: none;\n        font-size: 14px;\n        color: #333;\n}\n.checkBox form > div .code-r a[data-v-d0c4e3ac] {\n      display: inline-block;\n      text-align: center;\n      width: 125px;\n      height: 46px;\n      line-height: 48px;\n      background-color: #fff;\n      color: #FFB933;\n      font-size: 14px;\n      border: none;\n}\n.checkBox form > div .google[data-v-d0c4e3ac] {\n      width: 328px;\n      height: 100%;\n}\n.checkBox form > div .google i[data-v-d0c4e3ac] {\n        float: left;\n        display: inline-block;\n        width: 24px;\n        height: 24px;\n        margin: 12px 15px;\n}\n.checkBox form > div .google input[data-v-d0c4e3ac] {\n        float: left;\n        width: 216px;\n        height: 100%;\n        border: none;\n        outline: none;\n        font-size: 14px;\n        color: #333;\n}\n.checkBox form p[data-v-d0c4e3ac] {\n    font-size: 14px;\n    color: #333;\n    margin: 0 0 18px;\n}\n.checkBox form .phone i[data-v-d0c4e3ac] {\n    background: url("+o("tAd5")+");\n}\n.checkBox form .email i[data-v-d0c4e3ac] {\n    background: url("+o("vqCc")+");\n}\n.checkBox form .google i[data-v-d0c4e3ac] {\n    background: url("+o("oIUg")+");\n}\n.checkBox form .btn_submit[data-v-d0c4e3ac] {\n    text-align: center;\n    line-height: 48px;\n    width: 420px;\n    height: 48px;\n    background-color: #FFB933;\n    border: none;\n    margin-top: 15px;\n    outline: none;\n    cursor: pointer;\n}\n",""])}});
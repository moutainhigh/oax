webpackJsonp([12,26],{Kuhd:function(e,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d("YC2J"),a=d("4pec"),i=d("1/T0"),r=d("ivlf"),o={name:"present_addr",components:{tableList:n.default,Pages:i.a},data:function(){return{pageInfo:{pageNum:"",pageSize:"",total:"",pages:""},tableData:[],userSite:{coinId:"",address:"",remark:""},coin:[],coinType:"",site:"",remark:"",loading:!1,addLloading:!1,type:null,addrId:"",ethTest:/^0x([a-z]|[A-Z]|[0-9]){40}/,addrCoinTips:!1,addrSiteTips:!1,addrRegData:{pageIndex:1,pageSize:10},maskflag:!0,phoneflag:!0,emailflag:!0,googleflag:!0,phonecodemsg:"",emailcodemsg:"",googlecodemsg:"",checkCode:{emailCode:"",smsCode:"",googleCode:""},checkType:{phoneStatus:0,emailStatus:0,googleStatus:0},timecount1:60,timecount2:60,personInfo:{},timeId1:"",timeId2:"",scopenum:""}},methods:{generatepresentAddr:r.E,goback:function(){this.maskflag=!0},getdata:function(){var e=this;e.addLloading=!0,a.a(e.addrRegData).then(function(t){e.addLloading=!1,e.pageInfo={pageNum:t.data.pageNum,pageSize:t.data.pageSize,total:t.data.total,pages:t.data.pages},e.tableData=t.data.list}).catch(function(e){})},pageChange:function(e){this.addrRegData.pageIndex=e,this.getdata()},getCoin:function(){var e=this;e.loading=!0,a.d().then(function(t){e.loading=!1,e.coin=t.data,e.addrId?e.userSite.coinId=e.addrId:e.userSite.coinId=t.data[0].coinId,e.siteCion(e.userSite.coinId)}).catch(function(e){})},postSite:function(){var e=this,t=this;t.loading=!0;var d={coinId:t.userSite.coinId,address:t.userSite.address,remark:t.userSite.remark,smsCode:this.checkCode.smsCode,emailCode:this.checkCode.emailCode,googleCode:this.checkCode.googleCode};a.g(d).then(function(d){t.loading=!1,d.success?(t.userSite.address="",t.userSite.remark="",t.maskflag=!0,t.$alert(e.generatepresentAddr("presentAddr_add_successfully"),{confirmButtonText:e.generatepresentAddr("presentAddr_affirm")}),t.getdata()):t.$alert(d.msg)}).catch(function(e){t.loading=!1})},PostDeleteSite:function(e){var t=this,d={userId:window.sessionStorage.oaxLoginUserId,accesstoken:window.sessionStorage.oaxLoginAccessToken},n=this.tableData[e].id;a.c(d,n).then(function(e){t.getdata()}).catch(function(e){})},addSite:function(){return this.userSite.coinId?(this.addrCoinTips=!1,!this.userSite.address||1===this.coinType&&!this.ethTest.test(this.userSite.address)||3===this.coinType&&!this.ethTest.test(this.userSite.address)||2===this.coinType&&this.userSite.address.length<26||2===this.coinType&&this.userSite.address.length>34?(this.addrSiteTips=!0,!1):(this.addrSiteTips=!1,void(this.maskflag=!1))):(this.addrCoinTips=!0,!1)},deleteSite:function(e){var t=this;this.$confirm(this.generatepresentAddr("presentAddr_confirm_deleting_address"),this.generatepresentAddr("presentAddr_hint"),{confirmButtonText:this.generatepresentAddr("presentAddr_affirm"),cancelButtonText:this.generatepresentAddr("presentAddr_cancel"),type:"warning"}).then(function(){t.PostDeleteSite(e),t.getdata()}).catch(function(){})},siteCion:function(e){for(var t=0;t<this.coin.length;t++)if(parseInt(e)===parseInt(this.coin[t].coinId))return this.coinType=parseInt(this.coin[t].type),!1},checkAddrId:function(){sessionStorage.oaxAssetManagementAddAddrId&&(this.addrId=sessionStorage.oaxAssetManagementAddAddrId),this.getCoin()},getuserinfo:function(){var e=this;a.f().then(function(t){t.success&&(e.personInfo=t.data.usercenter,e.getcheckType())})},getcheckType:function(){var e=this,t=this.personInfo.phone||this.personInfo.email,d={username:t};a.b(d).then(function(t){t.success&&(e.checkType=t.data)})},getphonecode:function(e,t){var d=this,n=this;n.phoneflag=!1,a.e(e,t).then(function(e){e.success||d.$message.error(e.msg)}).catch(function(e){}),this.timeId1=setInterval(function(){n.timecount1--,0===n.timecount1&&(n.timecount1=60,n.phoneflag=!0,clearInterval(d.timeId1))},1e3)},getemailcode:function(e){var t=this,d=this;this.emailflag=!1,a.h(e).then(function(e){e.success||t.$message.error(e.msg)}).catch(function(e){}),this.timeId2=setInterval(function(){d.timecount2--,0===d.timecount2&&(d.timecount2=60,d.emailflag=!0,clearInterval(t.timeId2))},1e3)},checkphone:function(){if(""===this.checkCode.smsCode)return this.phonecodemsg=this.generatepresentAddr("presentAddr_pleaseWritePhonecode"),!1;return/^[0-9]*$/.test(this.checkCode.smsCode)?(this.phonecodemsg="",!0):(this.phonecodemsg=this.generatepresentAddr("presentAddr_pleaseWriteRightCode"),!1)},checkemail:function(){if(""===this.checkCode.emailCode)return this.emailcodemsg=this.generatepresentAddr("presentAddr_pleaseWriteEmailcode"),!1;return/^[0-9]*$/.test(this.checkCode.emailCode)?(this.emailcodemsg="",!0):(this.emailcodemsg=this.generatepresentAddr("presentAddr_pleaseWriteRightCode"),!1)},checkgoogle:function(){if(""===this.checkCode.googleCode)return this.googlecodemsg=this.generatepresentAddr("presentAddr_pleaseWriteGooglecode"),!1;return/^[0-9]*$/.test(this.checkCode.googleCode)?(this.googlecodemsg="",!0):(this.googlecodemsg=this.generatepresentAddr("presentAddr_pleaseWriteRightCode"),!1)},check:function(){return!(1===this.checkType.phoneStatus&&!this.checkphone())&&(!(1===this.checkType.emailStatus&&!this.checkemail())&&(!(1===this.checkType.googleStatus&&!this.checkgoogle())&&void this.postSite()))}},filters:{hiddEmail:function(e){if(e){if(-1!==e.indexOf("@")){var t=e.indexOf("@");return e="****"+e.substring(t-4)}return e.substring(4,4)+"********"+e.substring(e.length-4)}}},destroyed:function(){sessionStorage.removeItem("oaxAssetManagementAddAddrId")},mounted:function(){this.getdata(),this.checkAddrId(),this.getuserinfo()}},s={render:function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("main",[e.maskflag?d("div",{staticClass:"addr_box"},[d("div",{staticClass:"addr"},[d("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"addr_card"},[d("div",{staticClass:"addr_card_title"},[d("h3",[e._v(e._s(e.generatepresentAddr("presentAddr_address")))])]),e._v(" "),d("div",{staticClass:"addr_card_body clearfix"},[d("div",{staticClass:"addr_card_body_left"},[d("div",[d("label",{attrs:{for:"addr_coin"}},[e._v(e._s(e.generatepresentAddr("presentAddr_select_coin")))]),e._v(" "),d("select",{directives:[{name:"model",rawName:"v-model",value:e.userSite.coinId,expression:"userSite.coinId"}],attrs:{name:"addr_coin",id:"addr_coin"},on:{change:[function(t){var d=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.userSite,"coinId",t.target.multiple?d:d[0])},function(t){e.siteCion(e.userSite.coinId)}]}},e._l(e.coin,function(t,n){return d("option",{key:n,domProps:{value:t.coinId}},[e._v(e._s(t.coinName))])})),e._v(" "),e.addrCoinTips?d("div",{staticClass:"addr_box_tips"},[e._v(e._s(e.generatepresentAddr("presentAddr_please_select_coin")))]):e._e()]),e._v(" "),d("div",[d("label",{attrs:{for:"addr_site"}},[e._v(e._s(e.generatepresentAddr("presentAddr_mention_address")))]),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.userSite.address,expression:"userSite.address"}],attrs:{type:"text",id:"addr_site"},domProps:{value:e.userSite.address},on:{input:function(t){t.target.composing||e.$set(e.userSite,"address",t.target.value)}}}),e._v(" "),e.addrSiteTips?d("div",{staticClass:"addr_box_tips"},[e._v(e._s(e.generatepresentAddr("presentAddr_true_withdrawal_address")))]):e._e()]),e._v(" "),d("div",[d("label",{attrs:{for:"addr_remark"}},[e._v(e._s(e.generatepresentAddr("presentAddr_remark")))]),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.userSite.remark,expression:"userSite.remark"}],attrs:{type:"text",id:"addr_remark",maxlength:"10"},domProps:{value:e.userSite.remark},on:{input:function(t){t.target.composing||e.$set(e.userSite,"remark",t.target.value)}}})]),e._v(" "),d("div",[d("button",{on:{click:e.addSite}},[e._v(e._s(e.generatepresentAddr("presentAddr_add")))])])]),e._v(" "),d("div",{staticClass:"addr_card_body_right"},[d("ul",[d("li",[e._v(e._s(e.generatepresentAddr("presentAddr_warm")))]),e._v(" "),d("li",[e._v("*"+e._s(e.generatepresentAddr("presentAddr_warm_one")))]),e._v(" "),d("li",[e._v("*"+e._s(e.generatepresentAddr("presentAddr_warm_two")))]),e._v(" "),d("li",[e._v("*"+e._s(e.generatepresentAddr("presentAddr_warm_three")))]),e._v(" "),d("li",[e._v("*"+e._s(e.generatepresentAddr("presentAddr_warm_four")))])])])])]),e._v(" "),d("div",{directives:[{name:"loading",rawName:"v-loading",value:e.addLloading,expression:"addLloading"}],staticClass:"addr_table clearfix"},[d("div",{staticClass:"addr_table_title"},[d("h3",[e._v(e._s(e.generatepresentAddr("presentAddr_withdrawal_address")))])]),e._v(" "),d("div",{staticClass:"addr_table_body"},[e.tableData.length>0?d("table-list",{attrs:{tableData:e.tableData},on:{deleteSite:e.deleteSite}}):d("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tableLis-nodata"},[e._v(e._s(e.generatepresentAddr("presentAddr_no_data")))])],1),e._v(" "),e.pageInfo.pages>1?d("Pages",{staticClass:"page-model",attrs:{pageInfo:e.pageInfo},on:{pageChange:e.pageChange}}):e._e()],1)])]):d("div",{staticClass:"safe"},[d("span",{staticClass:"returnback",on:{click:e.goback}}),e._v(" "),d("h1",[e._v(e._s(e.generatepresentAddr("presentAddr_safeidenty")))]),e._v(" "),d("form",{attrs:{action:""}},[0!==e.checkType.phoneStatus?d("p",[e._v(e._s(e.generatepresentAddr("presentAddr_phone"))+"："+e._s(e._f("hiddEmail")(e.personInfo.phone)))]):e._e(),e._v(" "),0!==e.checkType.phoneStatus?d("div",{staticClass:"code phone"},[d("div",{staticClass:"code-l fl"},[d("i",{staticClass:"safeicon"}),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode.smsCode,expression:"checkCode.smsCode"}],attrs:{type:"text",placeholder:e.generatepresentAddr("presentAddr_pleaseWritePhonecode"),maxlength:"10"},domProps:{value:e.checkCode.smsCode},on:{input:function(t){t.target.composing||e.$set(e.checkCode,"smsCode",t.target.value)}}})]),e._v(" "),d("div",{staticClass:"code-r fr"},[e.phoneflag?d("a",{on:{click:function(t){e.getphonecode(e.personInfo.phone,6)}}},[e._v(e._s(e.generatepresentAddr("presentAddr_getcode")))]):d("a",[e._v(e._s(e.timecount1)+e._s(e.generatepresentAddr("presentAddr_timedown")))])]),e._v(" "),d("span",[e._v(e._s(e.phonecodemsg))])]):e._e(),e._v(" "),0!==e.checkType.emailStatus?d("p",[e._v(e._s(e.generatepresentAddr("presentAddr_email"))+"："+e._s(e._f("hiddEmail")(e.personInfo.email)))]):e._e(),e._v(" "),0!==e.checkType.emailStatus?d("div",{staticClass:"code email"},[d("div",{staticClass:"code-l fl"},[d("i",{staticClass:"safeicon"}),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode.emailCode,expression:"checkCode.emailCode"}],attrs:{type:"text",placeholder:e.generatepresentAddr("presentAddr_pleaseWriteEmailcode"),maxlength:"10"},domProps:{value:e.checkCode.emailCode},on:{input:function(t){t.target.composing||e.$set(e.checkCode,"emailCode",t.target.value)}}})]),e._v(" "),d("div",{staticClass:"code-r fr"},[e.emailflag?d("a",{on:{click:function(t){e.getemailcode(e.personInfo.email)}}},[e._v(e._s(e.generatepresentAddr("presentAddr_getcode")))]):d("a",[e._v(e._s(e.timecount2)+e._s(e.generatepresentAddr("presentAddr_timedown")))])]),e._v(" "),d("span",[e._v(e._s(e.emailcodemsg))])]):e._e(),e._v(" "),0!==e.checkType.googleStatus?d("p",[e._v(e._s(e.generatepresentAddr("presentAddr_google")))]):e._e(),e._v(" "),0!==e.checkType.googleStatus?d("div",{staticClass:"code google"},[d("div",{staticClass:"google"},[d("i",{staticClass:"safeicon"}),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode.googleCode,expression:"checkCode.googleCode"}],attrs:{type:"text",placeholder:e.generatepresentAddr("presentAddr_pleaseWriteGooglecode"),maxlength:"10"},domProps:{value:e.checkCode.googleCode},on:{input:function(t){t.target.composing||e.$set(e.checkCode,"googleCode",t.target.value)}}})]),e._v(" "),d("span",[e._v(e._s(e.googlecodemsg))])]):e._e(),e._v(" "),d("div",{staticClass:"btn_submit",on:{click:e.check}},[e._v(e._s(e.generatepresentAddr("presentAddr_submit")))])])])])},staticRenderFns:[]};var c=d("/Xao")(o,s,!1,function(e){d("Xd2Z")},"data-v-02d7d538",null);t.default=c.exports},PXNL:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTVEOEFFQTc2Qjk2MTFFODlGMjI4MkZEMUU2RDkxMEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTVEOEFFQTg2Qjk2MTFFODlGMjI4MkZEMUU2RDkxMEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNUQ4QUVBNTZCOTYxMUU4OUYyMjgyRkQxRTZEOTEwRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUQ4QUVBNjZCOTYxMUU4OUYyMjgyRkQxRTZEOTEwRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhbZFukAAALkSURBVHjapJNZSFRRGMf/d1ZnrrPfuXPHccuVXBmwBa2UMEIhiSRbhMioFzUhybR6iQLrJSFsIcOnRLDerAeDpDSyHJESUVLC3IaxMdPZ0HuveTujMD3Ym+fAdzjf+c6Pb6UkScJOliIsamtqodXSUKvkiI+3Gzib6YCVYfcyjC2OsZhFo9UxBchckPhP/b0f1j4PDUKiZGhsur4FEAQRdpsqOyGBq1vxySsGh0L6Wc83eJeHCVSJ3SkxyEpjkZFpXkxKYV/OupnHM3PesYgHjEXf5g/hUnvHJIZHggj4BaIlofGr5FSiG3/IuQZlNG09VMBVlxxNrbZzbBdRnt4ExNhth+8/+YLpCR+QmEAUJshYI64dz8XizwV09s9g1S9CXAqi980E+gZG8bytqjj8VxYWLGt6kZacBESZAasO0GlwuywW2rRdEDgbCvZwgNFADKMBmkN6UiIcdmtHBKBVK15nZMUCJInQ04DNClojR4ZGwPegCm/XbABH4HotoJYjJzcORp32VQTgD4oDRfkJ84oUYiiuAxYLrvxKxTgdi/ocCg1pq1AzDHkj5qyGeBTjXd+geiOA5cA6nOlc65nSXGDOBxW1hkqDG8+meNx1a5BtkiFKTRFDEXmZBuRlcHf8oQ1EAA6HkUAWH9w6v48HZ4DwYxlLywJaU0WcNPBoGpHgm/AC0eu4UOjwRxm4hxSl+NdIxcVHwAsCbzGz526cdXY1t7xDj8mAnvE+ktgoEiMpp9uDqkIdspKt5WOT05CkcGnzQW1rZSnQlXeqpWJ4cAnIiiG9QHIyH8BBpwJP64vv2VOd13mBB0U2y7JbAJfLtfVXCidaBp/X/f7qo6+FH3tmSImUKCm14XJZcntRaflFjTZ6+yyMjo5uXjYIgNaowFnooroTjm4LJR7Tm5SoqXQ2r0r0zRVfCP8F6PX6CID0BBZ/hzC/sFLWULe/Ua3SzUFBd/o9HuLhxrZppHY6zn8FGAB/MgKeTHEpXQAAAABJRU5ErkJggg=="},TDCq:function(e,t,d){(e.exports=d("BkJT")(!1)).push([e.i,"\n.tableLis-nodata[data-v-02d7d538] {\n  text-align: center;\n  color: #999;\n  padding: 20px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #ffffff;\n}\n.addr_box[data-v-02d7d538] {\n  width: 1200px;\n  margin: 0 auto;\n}\n.addr_box h3[data-v-02d7d538] {\n    font-size: 16px;\n    color: #333;\n    font-weight: 600;\n}\n.addr_box .addr_card[data-v-02d7d538] {\n    background: #ffffff;\n    margin-top: 18px;\n    width: 1200px;\n    height: 343px;\n}\n.addr_box .addr_card .addr_card_title[data-v-02d7d538] {\n      padding: 17px 0px 0px 18px;\n}\n.addr_box .addr_card .addr_card_body[data-v-02d7d538] {\n      margin-top: 52px;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left[data-v-02d7d538] {\n        width: 600px;\n        float: left;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div[data-v-02d7d538] {\n          height: 42px;\n          margin-bottom: 24px;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div label[data-v-02d7d538] {\n            display: inline-block;\n            width: 96px;\n            text-align: right;\n            font-size: 14px;\n            font-weight: 600;\n            color: #333;\n            margin-right: 16px;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div select[data-v-02d7d538] {\n            height: 42px;\n            width: 420px;\n            border: 1px solid #EEEEEE;\n            outline: none;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div input[data-v-02d7d538] {\n            height: 42px;\n            width: 420px;\n            border: 1px solid #EEEEEE;\n            outline: none;\n            padding: 0px 3px;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div button[data-v-02d7d538] {\n            height: 42px;\n            width: 420px;\n            margin-left: 115px;\n            background: #FFC24C;\n            border: 0;\n            cursor: pointer;\n            font-size: 14px;\n            color: #333;\n            outline: none;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div .addr_box_tips[data-v-02d7d538] {\n            width: 420px;\n            margin-left: 115px;\n            font-size: 12px;\n            line-height: 15px;\n            color: red;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div[data-v-02d7d538]:nth-child(1) {\n          position: relative;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div:nth-child(1) .deposit_box_addr_listbox[data-v-02d7d538] {\n            position: absolute;\n            display: block;\n            z-index: 9;\n            width: 480px;\n            background-color: #fff;\n            left: 101px;\n            top: 34px;\n            -webkit-box-shadow: 0 2px 4px #ccc;\n                    box-shadow: 0 2px 4px #ccc;\n            max-height: 185px;\n            overflow-y: scroll;\n            -webkit-overflow-scrolling: touch;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div:nth-child(1) .deposit_box_addr_listbox .deposit_box_addr_list[data-v-02d7d538]:nth-child(2n) {\n              background-color: #eee;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div:nth-child(1) .deposit_box_addr_listbox .deposit_box_addr_list[data-v-02d7d538]:hover {\n              background-color: #FFC24C;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_left div:nth-child(1) .deposit_box_addr_listbox .deposit_box_addr_list[data-v-02d7d538] {\n              cursor: pointer;\n              display: block;\n              word-break: break-all;\n              float: none;\n              padding: 10px 10px;\n              -webkit-box-sizing: border-box;\n                      box-sizing: border-box;\n              height: auto;\n              line-height: 20px;\n              width: 100%;\n              text-align: left;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_right[data-v-02d7d538] {\n        width: 600px;\n        float: left;\n}\n.addr_box .addr_card .addr_card_body .addr_card_body_right ul li[data-v-02d7d538] {\n          line-height: 30px;\n          font-size: 12px;\n          color: #999999;\n}\n.addr_box .addr_table[data-v-02d7d538] {\n    margin-top: 12px;\n    margin-bottom: 18px;\n    position: relative;\n}\n.addr_box .addr_table .page-model[data-v-02d7d538] {\n      margin: 18px auto 0 auto;\n      float: right;\n}\n.addr_box .addr_table .table_list[data-v-02d7d538] {\n      margin-top: 0;\n}\n.addr_box .addr_table .addr_table_title[data-v-02d7d538] {\n      background: #ffffff;\n      padding: 17px 18px 17px 18px;\n}\n.safe[data-v-02d7d538] {\n  width: 540px;\n  padding: 60px;\n  background-color: #fff;\n  margin: 100px auto;\n  position: relative;\n}\n.safe .returnback[data-v-02d7d538] {\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    background: url("+d("P9/e")+") no-repeat;\n    position: absolute;\n    top: 20px;\n    left: 30px;\n}\n.safe h1[data-v-02d7d538] {\n    width: 100%;\n    text-align: center;\n    font-size: 24px;\n    font-weight: 600;\n    margin: 0 0 46px 0;\n}\n.safe form > div[data-v-02d7d538] {\n    width: 420px;\n    height: 48px;\n    border: 1px solid #eee;\n    margin: 0 auto;\n    margin-bottom: 29px;\n}\n.safe form > div > span[data-v-02d7d538] {\n      display: inline-block;\n      color: #FF5656;\n      text-align: left;\n      font-size: 12px;\n      float: right;\n      padding: 6px 3px;\n}\n.safe form > div .code-l[data-v-02d7d538] {\n      width: 290px;\n      height: 100%;\n}\n.safe form > div .code-l i[data-v-02d7d538] {\n        float: left;\n        display: inline-block;\n        width: 24px;\n        height: 24px;\n        margin: 11px 15px;\n}\n.safe form > div .code-l input[data-v-02d7d538] {\n        float: left;\n        width: 216px;\n        height: 100%;\n        border: none;\n        outline: none;\n        font-size: 14px;\n        color: #333;\n}\n.safe form > div .code-r a[data-v-02d7d538] {\n      display: inline-block;\n      text-align: center;\n      width: 125px;\n      height: 46px;\n      line-height: 48px;\n      background-color: #fff;\n      color: #FFB933;\n      font-size: 14px;\n      border: none;\n}\n.safe form > div .google[data-v-02d7d538] {\n      width: 328px;\n      height: 100%;\n}\n.safe form > div .google i[data-v-02d7d538] {\n        float: left;\n        display: inline-block;\n        width: 24px;\n        height: 24px;\n        margin: 12px 15px;\n}\n.safe form > div .google input[data-v-02d7d538] {\n        float: left;\n        width: 216px;\n        height: 100%;\n        border: none;\n        outline: none;\n        font-size: 14px;\n        color: #333;\n}\n.safe form p[data-v-02d7d538] {\n    font-size: 14px;\n    color: #333;\n    margin: 0 0 18px;\n}\n.safe form .phone i[data-v-02d7d538] {\n    background: url("+d("tAd5")+");\n}\n.safe form .email i[data-v-02d7d538] {\n    background: url("+d("vqCc")+");\n}\n.safe form .google i[data-v-02d7d538] {\n    background: url("+d("oIUg")+");\n}\n.safe form .btn_submit[data-v-02d7d538] {\n    text-align: center;\n    line-height: 48px;\n    width: 420px;\n    height: 48px;\n    background-color: #FFB933;\n    border: none;\n    margin-top: 15px;\n    outline: none;\n    cursor: pointer;\n}\n",""])},Xd2Z:function(e,t,d){var n=d("TDCq");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);d("8bSs")("114e4e3a",n,!0)},Xwn3:function(e,t,d){var n=d("bAfK");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);d("8bSs")("af111fc8",n,!0)},YC2J:function(e,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{name:"table"}},props:["tableData"],methods:{generatepresentAddr:d("ivlf").E,deleteSite:function(e){this.$emit("deleteSite",e)}}},a={render:function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"table_list"},[d("table",[d("thead",[d("tr",[d("th",[e._v(e._s(e.generatepresentAddr("presentAddr_coin")))]),e._v(" "),d("th",[e._v(e._s(e.generatepresentAddr("presentAddr_withdrawal_address")))]),e._v(" "),d("th",{staticClass:"text-right"},[e._v(e._s(e.generatepresentAddr("presentAddr_remark")))]),e._v(" "),d("th",{staticClass:"text-right"},[e._v(e._s(e.generatepresentAddr("presentAddr_operation")))])])]),e._v(" "),d("tbody",e._l(e.tableData,function(t,n){return d("tr",{key:n},[d("td",[e._v(e._s(t.coinName))]),e._v(" "),d("td",[e._v(e._s(t.address))]),e._v(" "),d("td",{staticClass:"text-right"},[e._v(e._s(t.remark))]),e._v(" "),d("td",{staticClass:"text-right"},[d("span",{on:{click:function(t){e.deleteSite(n)}}},[e._v(e._s(e.generatepresentAddr("presentAddr_delete")))])])])}))])])},staticRenderFns:[]};var i=d("/Xao")(n,a,!1,function(e){d("Xwn3")},"data-v-46168f3e",null);t.default=i.exports},bAfK:function(e,t,d){(e.exports=d("BkJT")(!1)).push([e.i,"\n.tableLis-nodata[data-v-46168f3e] {\n  text-align: center;\n  color: #999;\n  padding: 20px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.text-right[data-v-46168f3e] {\n  text-align: right !important;\n}\ntable[data-v-46168f3e], tr[data-v-46168f3e], th[data-v-46168f3e], td[data-v-46168f3e] {\n  padding: 0;\n  margin: 0;\n  border-spacing: 0;\n}\ntable[data-v-46168f3e] {\n  width: 100%;\n}\n.table_list[data-v-46168f3e] {\n  background-color: #fff;\n  margin-top: 15px;\n}\n.table_list thead tr th[data-v-46168f3e] {\n    text-align: left;\n    padding: 0px 0px 8px 0px;\n    width: 170px;\n    font-weight: 600;\n    font-size: 12px;\n    color: #999;\n}\n.table_list thead tr th[data-v-46168f3e]:nth-child(1) {\n    padding-left: 18px;\n}\n.table_list thead tr th[data-v-46168f3e]:nth-child(4) {\n    padding-right: 18px;\n}\n.table_list tbody tr[data-v-46168f3e] {\n    height: 36px;\n}\n.table_list tbody tr td[data-v-46168f3e] {\n      text-align: left;\n      height: 48px;\n      vertical-align: middle;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n.table_list tbody tr td i[data-v-46168f3e] {\n        vertical-align: middle;\n        font-style: normal;\n}\n.table_list tbody tr td i b[data-v-46168f3e] {\n          vertical-align: middle;\n          display: inline-block;\n          width: 16px;\n          height: 16px;\n          background: url("+d("PXNL")+");\n}\n.table_list tbody tr td span[data-v-46168f3e] {\n        display: inline-block;\n        width: 66px;\n        height: 24px;\n        margin-left: 12px;\n        line-height: 24px;\n        text-align: center;\n        border: 1px solid #EEEEEE;\n        background: #fff;\n        cursor: pointer;\n}\n.table_list tbody tr td span[data-v-46168f3e]:nth-child(1) {\n        margin-left: 0px;\n}\n.table_list tbody tr td[data-v-46168f3e]:nth-child(1) {\n      padding-left: 18px;\n}\n.table_list tbody tr td[data-v-46168f3e]:nth-child(4) {\n      padding-right: 18px;\n}\n.table_list tbody tr[data-v-46168f3e]:nth-child(odd) {\n    background: #F9F9F9;\n}\n.table_list tbody tr[data-v-46168f3e]:nth-child(even) {\n    background: #FFFFFF;\n}\n",""])}});
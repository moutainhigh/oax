webpackJsonp([35],{LJ30:function(n,e,i){var t=i("z1/T");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);i("8bSs")("748cb88d",t,!0)},mLrJ:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=i("vLgD");var a={name:"noticeCenter",data:function(){return{loading:!1,newCoinList:[],newNoticeList:[]}},methods:{generateNoticeCenter:i("ivlf").r,getData:function(){var n,e=this;e.loading=!0,Object(t.a)({url:"noticeCenter/list",method:"post",data:n}).then(function(n){e.loading=!1,!0===n.success?(e.newCoinList=n.data.newCoinList,e.newNoticeList=n.data.newNoticeList):e.$message.error(n.msg)}).catch(function(n){e.loading=!1})}},mounted:function(){this.getData()},components:{}},o={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"noticecenter-page"},[i("div",{staticClass:"title"},[n._v(n._s(n.generateNoticeCenter("noticeCenter_title")))]),n._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"mian"},[i("div",{staticClass:"main-line clearfix"},[i("div",{staticClass:"main-box"},[i("div",{staticClass:"main-title"},[n._v(n._s(n.generateNoticeCenter("noticeCenter_newonline")))]),n._v(" "),n.newCoinList.length>0?i("div",[i("div",{staticClass:"main-listbox"},n._l(n.newCoinList,function(e,t){return t<10?i("router-link",{key:t,staticClass:"main-list clearfix",attrs:{to:{name:"notice_detail",params:{id:e.id,type:1}},title:e.name}},[i("div",{staticClass:"main-list-title"},[n._v(n._s(e.name))]),n._v(" "),e.releaseTime?i("div",{staticClass:"main-list-time"},[n._v(n._s(e.releaseTime.slice(0,10)))]):n._e()]):n._e()})),n._v(" "),n.newCoinList.length>10?i("router-link",{staticClass:"main-more",attrs:{to:{name:"notice_more",params:{type:1}}}},[n._v(n._s(n.generateNoticeCenter("noticeCenter_more")))]):n._e()],1):i("div",{staticClass:"no-data"},[n._v(n._s(n.generateNoticeCenter("noticeCenter_nodata")))])]),n._v(" "),i("div",{staticClass:"main-box"},[i("div",{staticClass:"main-title"},[n._v(n._s(n.generateNoticeCenter("noticeCenter_notice")))]),n._v(" "),n.newNoticeList.length>0?i("div",[i("div",{staticClass:"main-listbox"},n._l(n.newNoticeList,function(e,t){return t<10?i("router-link",{key:t,staticClass:"main-list clearfix",attrs:{to:{name:"notice_detail",params:{id:e.id,type:2}},title:e.name}},[i("div",{staticClass:"main-list-title"},[n._v(n._s(e.name))]),n._v(" "),e.releaseTime?i("div",{staticClass:"main-list-time"},[n._v(n._s(e.releaseTime.slice(0,10)))]):n._e()]):n._e()})),n._v(" "),n.newNoticeList.length>10?i("router-link",{staticClass:"main-more",attrs:{to:{name:"notice_more",params:{type:2}}}},[n._v(n._s(n.generateNoticeCenter("noticeCenter_more")))]):n._e()],1):i("div",{staticClass:"no-data"},[n._v(n._s(n.generateNoticeCenter("noticeCenter_nodata")))])])])])])},staticRenderFns:[]};var s=i("/Xao")(a,o,!1,function(n){i("LJ30")},null,null);e.default=s.exports},"z1/T":function(n,e,i){(n.exports=i("BkJT")(!1)).push([n.i,"\n.noticecenter-page {\n  width: 1200px;\n  background-color: #fff;\n  margin: 18px auto 30px auto;\n  padding: 0 19px 34px 19px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.noticecenter-page .title {\n    width: 100%;\n    line-height: 56px;\n    color: #333;\n    font-size: 20px;\n    border-bottom: 1px solid #eee;\n    font-weight: bold;\n}\n.noticecenter-page .mian {\n    width: 100%;\n}\n.noticecenter-page .mian .main-line:first-child {\n      margin-top: 16px;\n}\n.noticecenter-page .mian .main-line {\n      width: 100%;\n      margin-top: 55px;\n}\n.noticecenter-page .mian .main-line .main-box:nth-child(2n) {\n        margin-left: 4%;\n}\n.noticecenter-page .mian .main-line .main-box {\n        width: 48%;\n        float: left;\n}\n.noticecenter-page .mian .main-line .main-box .main-title {\n          color: #333;\n          font-size: 16px;\n          line-height: 20px;\n}\n.noticecenter-page .mian .main-line .main-box .main-listbox {\n          margin-top: 30px;\n}\n.noticecenter-page .mian .main-line .main-box .main-listbox .main-list:not(:first-child) {\n            margin-top: 25px;\n}\n.noticecenter-page .mian .main-line .main-box .main-listbox .main-list:hover .main-list-title {\n            color: #FFB933;\n}\n.noticecenter-page .mian .main-line .main-box .main-listbox .main-list:hover .main-list-time {\n            color: #FFB933;\n}\n.noticecenter-page .mian .main-line .main-box .main-listbox .main-list {\n            display: block;\n            line-height: 15px;\n            font-size: 12px;\n            width: 100%;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n}\n.noticecenter-page .mian .main-line .main-box .main-listbox .main-list .main-list-title {\n              float: left;\n              width: 75%;\n              overflow: hidden;\n              white-space: nowrap;\n              text-overflow: ellipsis;\n              color: #333;\n}\n.noticecenter-page .mian .main-line .main-box .main-listbox .main-list .main-list-time {\n              float: right;\n              width: 25%;\n              text-align: right;\n              color: #999;\n}\n.noticecenter-page .mian .main-line .main-box .main-more:hover {\n          color: #e0a32d;\n          border-color: #e0a32d;\n}\n.noticecenter-page .mian .main-line .main-box .main-more {\n          display: inline-block;\n          color: #FFB933;\n          line-height: 24px;\n          padding: 0 10px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          font-size: 12px;\n          border: 1px solid #FFB933;\n          margin-top: 28px;\n}\n.noticecenter-page .no-data {\n    width: 100%;\n    color: #999;\n    margin: 30px auto;\n    text-align: center;\n}\n",""])}});
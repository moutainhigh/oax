webpackJsonp([63],{PTj5:function(e,t,n){(e.exports=n("BkJT")(!1)).push([e.i,"\n.noticemore-page {\n  position: relative;\n  padding: 18px 0 22px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.noticemore-page .page-content {\n    width: 1200px;\n    background-color: #fff;\n    margin: 0 auto 30px auto;\n    padding: 0 19px 44px 19px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.noticemore-page .page-content .title {\n      width: 626px;\n      line-height: 56px;\n      color: #333;\n      font-size: 20px;\n      border-bottom: 1px solid #eee;\n      font-weight: bold;\n}\n.noticemore-page .page-content .mian {\n      width: 100%;\n}\n.noticemore-page .page-content .mian .main-title {\n        color: #333;\n        font-size: 16px;\n        line-height: 20px;\n        margin-top: 16px;\n}\n.noticemore-page .page-content .mian .main-listbox {\n        width: 100%;\n        margin-top: 32px;\n}\n.noticemore-page .page-content .mian .main-listbox .main-list:not(:first-child) {\n          margin-top: 25px;\n}\n.noticemore-page .page-content .mian .main-listbox .main-list:hover .list-title,\n        .noticemore-page .page-content .mian .main-listbox .main-list:hover .list-time {\n          color: #FFB933;\n}\n.noticemore-page .page-content .mian .main-listbox .main-list {\n          width: 100%;\n          display: block;\n          line-height: 15px;\n          font-size: 12px;\n}\n.noticemore-page .page-content .mian .main-listbox .main-list .list-title {\n            color: #333;\n            float: left;\n            width: 100%;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            width: 85%;\n}\n.noticemore-page .page-content .mian .main-listbox .main-list .list-time {\n            color: #999;\n            float: right;\n            width: 15%;\n            text-align: right;\n}\n.noticemore-page .page-content .no-data {\n      width: 100%;\n      color: #999;\n      margin: 30px auto;\n      text-align: center;\n}\n.noticemore-page .page-model {\n    display: inline-block;\n    margin-left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n",""])},gQXr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("vLgD");var i=n("1/T0"),o={name:"noticeMore",data:function(){return{loading:!1,dataList:[],pageInfo:{pageNum:"",pageSize:"",total:"",pages:""},regData:{pageIndex:1,pageSize:10,type:""}}},methods:{generateNoticeMore:n("ivlf").t,getData:function(){var e,t=this;t.loading=!0,(e=t.regData,Object(a.a)({url:"noticeCenter/readMore",method:"post",data:e})).then(function(e){t.loading=!1,!0===e.success?(t.dataList=e.data.list,t.pageInfo={pageNum:e.data.pageNum,pageSize:e.data.pageSize,total:e.data.total,pages:e.data.pages}):t.$message.error(e.msg)}).catch(function(e){t.loading=!1})},pageChange:function(e){this.regData.pageIndex=e,this.getData()}},mounted:function(){this.getData(),this.regData.type=parseInt(this.$route.params.type)},components:{Pages:i.a}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"noticemore-page"},[n("div",{staticClass:"page-content"},[n("div",{staticClass:"title"},[e._v(e._s(e.generateNoticeMore("noticeMore_title")))]),e._v(" "),n("div",{staticClass:"mian"},[1===e.regData.type?n("div",{staticClass:"main-title"},[e._v(e._s(e.generateNoticeMore("noticeMore_newonline")))]):2===e.regData.type?n("div",{staticClass:"main-title"},[e._v(e._s(e.generateNoticeMore("noticeMore_notice")))]):e._e(),e._v(" "),e.dataList.length>0?n("div",{staticClass:"main-listbox"},e._l(e.dataList,function(t){return n("router-link",{key:t.index,staticClass:"main-list clearfix",attrs:{to:{name:"notice_detail",params:{id:t.id,type:e.regData.type}}}},[n("div",{staticClass:"list-title"},[e._v(e._s(t.name))]),e._v(" "),t.releaseTime?n("div",{staticClass:"list-time"},[e._v(e._s(new Date(t.releaseTime).getFullYear())+"-"),(new Date(t.releaseTime).getMonth()+1).toString().length<=1?n("span",[e._v("0")]):e._e(),e._v(e._s(new Date(t.releaseTime).getMonth()+1)+"-"),new Date(t.releaseTime).getDate().toString().length<=1?n("span",[e._v("0")]):e._e(),e._v(e._s(new Date(t.releaseTime).getDate()))]):e._e()])})):n("div",{staticClass:"no-data"},[e._v(e._s(e.generateNoticeMore("noticeMore_nodata")))])])]),e._v(" "),e.pageInfo.pages>1?n("Pages",{staticClass:"page-model",attrs:{pageInfo:e.pageInfo},on:{pageChange:e.pageChange}}):e._e()],1)},staticRenderFns:[]};var r=n("/Xao")(o,s,!1,function(e){n("of2r")},null,null);t.default=r.exports},of2r:function(e,t,n){var a=n("PTj5");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("12f96740",a,!0)}});
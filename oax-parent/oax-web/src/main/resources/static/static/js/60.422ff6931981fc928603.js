webpackJsonp([60],{"0tbg":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("vLgD");var i=a("1/T0"),o={name:"helpMore",data:function(){return{loading:!1,dataList:[],pageInfo:{pageNum:"",pageSize:"",total:"",pages:""},regData:{pageIndex:1,pageSize:10,type:""}}},methods:{generateHelpMore:a("ivlf").k,getData:function(){var e,t=this;t.loading=!0,(e=t.regData,Object(n.a)({url:"helpCenter/readMore",method:"post",data:e})).then(function(e){t.loading=!1,!0===e.success?(t.dataList=e.data.list,t.pageInfo={pageNum:e.data.pageNum,pageSize:e.data.pageSize,total:e.data.total,pages:e.data.pages}):t.$message.error(e.msg)}).catch(function(e){t.loading=!1})},pageChange:function(e){this.regData.pageIndex=e,this.getData()}},mounted:function(){this.getData(),this.regData.type=parseInt(this.$route.params.type)},components:{Pages:i.a}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"helpmore-page"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"title"},[e._v(e._s(e.generateHelpMore("helpMore_title")))]),e._v(" "),a("div",{staticClass:"mian"},[6===e.regData.type?a("div",{staticClass:"main-title"},[e._v(e._s(e.generateHelpMore("helpMore_aboutus")))]):3===e.regData.type?a("div",{staticClass:"main-title"},[e._v(e._s(e.generateHelpMore("helpMore_problem")))]):4===e.regData.type?a("div",{staticClass:"main-title"},[e._v(e._s(e.generateHelpMore("helpMore_info")))]):5===e.regData.type?a("div",{staticClass:"main-title"},[e._v(e._s(e.generateHelpMore("helpMore_law")))]):e._e(),e._v(" "),e.dataList.length>0?a("div",{staticClass:"main-listbox"},e._l(e.dataList,function(t){return a("router-link",{key:t.index,staticClass:"main-list clearfix",attrs:{to:{name:"help_detail",params:{id:t.id,type:e.regData.type}}}},[a("div",{staticClass:"list-title"},[e._v(e._s(t.name))]),e._v(" "),t.releaseTime?a("div",{staticClass:"list-time"},[e._v(e._s(new Date(t.releaseTime).getFullYear())+"-"),(new Date(t.releaseTime).getMonth()+1).toString().length<=1?a("span",[e._v("0")]):e._e(),e._v(e._s(new Date(t.releaseTime).getMonth()+1)+"-"),new Date(t.releaseTime).getDate().toString().length<=1?a("span",[e._v("0")]):e._e(),e._v(e._s(new Date(t.releaseTime).getDate()))]):e._e()])})):a("div",{staticClass:"no-data"},[e._v(e._s(e.generateHelpMore("helpMore_nodata")))])])]),e._v(" "),e.pageInfo.pages>1?a("Pages",{staticClass:"page-model",attrs:{pageInfo:e.pageInfo},on:{pageChange:e.pageChange}}):e._e()],1)},staticRenderFns:[]};var s=a("/Xao")(o,l,!1,function(e){a("5V0T")},null,null);t.default=s.exports},"5V0T":function(e,t,a){var n=a("xVUu");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("7e593839",n,!0)},xVUu:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.helpmore-page {\n  position: relative;\n  padding: 18px 0 22px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.helpmore-page .page-content {\n    width: 1200px;\n    background-color: #fff;\n    margin: 0 auto 30px auto;\n    padding: 0 19px 44px 19px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.helpmore-page .page-content .title {\n      width: 626px;\n      line-height: 56px;\n      color: #333;\n      font-size: 20px;\n      border-bottom: 1px solid #eee;\n      font-weight: bold;\n}\n.helpmore-page .page-content .mian {\n      width: 100%;\n}\n.helpmore-page .page-content .mian .main-title {\n        color: #333;\n        font-size: 16px;\n        line-height: 20px;\n        margin-top: 16px;\n}\n.helpmore-page .page-content .mian .main-listbox {\n        width: 100%;\n        margin-top: 32px;\n}\n.helpmore-page .page-content .mian .main-listbox .main-list:not(:first-child) {\n          margin-top: 25px;\n}\n.helpmore-page .page-content .mian .main-listbox .main-list:hover .list-title,\n        .helpmore-page .page-content .mian .main-listbox .main-list:hover .list-time {\n          color: #FFB933;\n}\n.helpmore-page .page-content .mian .main-listbox .main-list {\n          width: 100%;\n          display: block;\n          line-height: 15px;\n          font-size: 12px;\n}\n.helpmore-page .page-content .mian .main-listbox .main-list .list-title {\n            color: #333;\n            float: left;\n            width: 100%;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            width: 85%;\n}\n.helpmore-page .page-content .mian .main-listbox .main-list .list-time {\n            color: #999;\n            float: right;\n            width: 15%;\n            text-align: right;\n}\n.helpmore-page .page-content .no-data {\n      width: 100%;\n      color: #999;\n      margin: 30px auto;\n      text-align: center;\n}\n.helpmore-page .page-model {\n    display: inline-block;\n    margin-left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n",""])}});
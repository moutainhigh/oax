webpackJsonp([41],{"69PC":function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,"\n.noticedetail-page {\n  width: 100%;\n  background-color: #fff;\n}\n.noticedetail-page .main {\n    width: 1200px;\n    margin: 0 auto;\n    padding: 30px 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.noticedetail-page .main .left-wrapper {\n      float: left;\n      width: 180px;\n}\n.noticedetail-page .main .left-wrapper .left-title {\n        width: 100%;\n        color: #333;\n        font-size: 18px;\n        line-height: 24px;\n        font-weight: bold;\n}\n.noticedetail-page .main .left-wrapper .left-listbox {\n        width: 100%;\n        margin-top: 15px;\n}\n.noticedetail-page .main .left-wrapper .left-listbox .left-list:not(:first-child) {\n          margin-top: 10px;\n}\n.noticedetail-page .main .left-wrapper .left-listbox .left-list.active {\n          background-color: #FFB933;\n}\n.noticedetail-page .main .left-wrapper .left-listbox .left-list:hover {\n          background-color: #FFB933;\n}\n.noticedetail-page .main .left-wrapper .left-listbox .left-list {\n          position: relative;\n          display: block;\n          width: 100%;\n          border-radius: 5px;\n          color: #333;\n          font-size: 12px;\n          line-height: 22px;\n          padding: 13px 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          cursor: pointer;\n}\n.noticedetail-page .main .left-wrapper .left-listbox .left-list .left-list-title {\n            width: 144px;\n            text-align: justify;\n}\n.noticedetail-page .main .right-wrapper {\n      float: left;\n      width: 978px;\n      margin-left: 42px;\n}\n.noticedetail-page .main .right-wrapper .article-title {\n        width: 100%;\n        text-align: justify;\n        color: #333;\n        font-size: 36px;\n}\n.noticedetail-page .main .right-wrapper .article-time {\n        width: 100%;\n        border-top: 1px solid #eee;\n        margin-top: 30px;\n        font-size: 16px;\n        color: #999;\n        padding-top: 14px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        line-height: 20px;\n}\n.noticedetail-page .main .right-wrapper .article-content {\n        width: 100%;\n        margin-top: 30px;\n}\n.noticedetail-page .main .right-wrapper .article-content img {\n          max-width: 100%;\n}\n",""])},BxZQ:function(t,e,i){var a=i("69PC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("8bSs")("a5f6266c",a,!0)},o1Mp:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("3cXf"),n=i.n(a),r=i("vLgD");var l={name:"noticeDetail",data:function(){return{loading:!1,articleLoadFinish:!1,listLoadFinish:!1,regData:{articleData:{id:""},moreList:{pageIndex:1,pageSize:10,type:""}},articleData:{title:"",content:"",id:"",releaseTime:""},listData:[]}},methods:{generateNoticeDetail:i("ivlf").s,getData:function(){var t,e=this;e.loading=!0,e.articleLoadFinish=!1,e.listLoadFinish=!1,(t=e.regData.articleData,Object(r.a)({url:"noticeCenter/readDetail",method:"post",data:t})).then(function(t){e.articleLoadFinish=!0,e.isLoadFinish(),!0===t.success?e.articleData=t.data:e.$message.error(t.msg)}).catch(function(t){e.articleLoadFinish=!0,e.isLoadFinish()}),function(t){return Object(r.a)({url:"noticeCenter/readMore",method:"post",data:t})}(e.regData.moreList).then(function(t){e.listLoadFinish=!0,e.isLoadFinish(),!0===t.success?e.listData=t.data.list:e.$message.error(t.msg)}).catch(function(t){e.listLoadFinish=!0,e.isLoadFinish()})},isLoadFinish:function(){!0===this.articleLoadFinish&&!0===this.listLoadFinish&&(this.loading=!1)},articleChange:function(t){if(t===this.articleData.id)return!1;this.regData.articleData.id=t,this.getData()},cloneObjectFn:function(t){return JSON.parse(n()(t))}},mounted:function(){this.regData.articleData.id=parseInt(this.$route.params.id),this.regData.moreList.type=parseInt(this.$route.params.type),this.getData()},components:{},watch:{$route:function(t,e){this.regData.articleData.id=parseInt(this.$route.params.id),this.regData.moreList.type=parseInt(this.$route.params.type),this.getData()}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"noticedetail-page"},[i("div",{staticClass:"main clearfix"},[i("div",{staticClass:"left-wrapper"},[1===t.regData.moreList.type?i("div",{staticClass:"left-title"},[t._v(t._s(t.generateNoticeDetail("noticeDetail_newonline")))]):2===t.regData.moreList.type?i("div",{staticClass:"left-title"},[t._v(t._s(t.generateNoticeDetail("noticeDetail_notice")))]):t._e(),t._v(" "),i("div",{staticClass:"left-listbox"},t._l(t.listData,function(e){return i("router-link",{key:e.index,staticClass:"left-list",class:t.articleData.id===e.id?"active":"",attrs:{to:{name:"notice_detail",params:{id:e.id,type:t.regData.moreList.type}}}},[i("div",{staticClass:"left-list-title"},[t._v(t._s(e.name))])])}))]),t._v(" "),i("div",{staticClass:"right-wrapper"},[i("div",{staticClass:"article-title"},[t._v(t._s(t.articleData.name))]),t._v(" "),t.articleData.releaseTime?i("div",{staticClass:"article-time"},[t._v(t._s(t.generateNoticeDetail("noticeDetail_releasetime"))+"："+t._s(new Date(t.articleData.releaseTime).getFullYear())+t._s(t.generateNoticeDetail("noticeDetail_releasetime_year"))+t._s(new Date(t.articleData.releaseTime).getMonth()+1)+t._s(t.generateNoticeDetail("noticeDetail_releasetime_month"))+t._s(new Date(t.articleData.releaseTime).getDate())+t._s(t.generateNoticeDetail("noticeDetail_releasetime_date"))+"      "+t._s(t.generateNoticeDetail("noticeDetail_issuer")))]):i("div",{staticClass:"article-time"},[t._v(t._s(t.generateNoticeDetail("noticeDetail_releasetime"))+"：0-0-0      "+t._s(t.generateNoticeDetail("noticeDetail_issuer")))]),t._v(" "),i("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.articleData.content)}})])])])},staticRenderFns:[]};var o=i("/Xao")(l,s,!1,function(t){i("BxZQ")},null,null);e.default=o.exports}});
webpackJsonp([14],{"0Po5":function(n,o,e){var a=e("z4L2");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("8bSs")("7c46d666",a,!0)},F4lI:function(n,o,e){n.exports=e.p+"static/img/app_down_bg.b89d67b.png"},GgCC:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("LqYc"),i=e.n(a),t={name:"appDownload",data:function(){return{isJump:!1,isMobile:!1}},methods:{generateAppDownload:e("ivlf").c,forMobile:function(){var n=document.documentElement.clientWidth;if(document.getElementsByClassName("download-page").length>0&&n<=1024){document.getElementsByClassName("navbar")[0].classList.add("navbar-appdownload"),document.getElementsByClassName("main-container")[0].classList.add("main-container-appdownload"),document.getElementsByClassName("app-main-container")[0].classList.add("app-main-container-appdownload"),document.getElementsByClassName("footer_container")[0].classList.add("footer_container-appdownload"),this.isMobile=!0;var o=window.navigator.userAgent;o.indexOf("iPhone")>=0&&o.indexOf("MicroMessenger")>=0?this.isJump=!0:o.indexOf("iPhone")>=0&&o.indexOf(" QQ")>=0&&o.indexOf("Mobile")>=0?this.isJump=!0:o.indexOf("Android")>=0&&o.indexOf("MicroMessenger")>=0?this.isJump=!0:o.indexOf("Android")>=0&&o.indexOf(" QQ")>=0&&o.indexOf("Mobile")>=0?this.isJump=!0:this.isJump=!1,o.indexOf("iPhone")>=0||o.indexOf("Android")}else this.isMobile=!1,document.getElementsByClassName("navbar")[0].classList.remove("navbar-appdownload"),document.getElementsByClassName("main-container")[0].classList.remove("main-container-appdownload"),document.getElementsByClassName("app-main-container")[0].classList.remove("app-main-container-appdownload"),document.getElementsByClassName("footer_container")[0].classList.remove("footer_container-appdownload")},qrcode:function(){new i.a("content-codeimg",{width:220,height:220,text:window.location.href,image:"",correctLevel:i.a.CorrectLevel.L})}},mounted:function(){var n,o,e,a,i;n=document,o=window,e=n.documentElement,a="orientationchange"in window?"orientationchange":"resize",i=function(){var n=e.clientWidth;n&&(n>750&&(n=750),e.style.fontSize=n/375*20+"px")},n.addEventListener&&(o.addEventListener(a,i,!1),n.addEventListener("DOMContentLoaded",i,!1));var t=this;t.forMobile(),window.onresize=function(){t.forMobile()},this.qrcode()},destroyed:function(){document.getElementsByClassName("navbar")[0].classList.remove("navbar-appdownload"),document.getElementsByClassName("main-container")[0].classList.remove("main-container-appdownload"),document.getElementsByClassName("app-main-container")[0].classList.remove("app-main-container-appdownload"),document.getElementsByClassName("footer_container")[0].classList.remove("footer_container-appdownload")},components:{}},d={render:function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"download-page"},[!1===n.isMobile?a("div",{staticClass:"download-bg"}):n._e(),n._v(" "),!1===n.isMobile?a("div",{staticClass:"download-main clearfix"}):n._e(),n._v(" "),!0===n.isMobile?a("div",{staticClass:"mobile-wrapper"},[a("img",{staticClass:"mobile-wrapper-img",attrs:{src:e("F4lI")}}),n._v(" "),a("a",{staticClass:"mobile-wrapper-btn",attrs:{href:"/app/downloadUrl"}},[n._v(n._s(n.generateAppDownload("appDownload_download")))]),n._v(" "),n.isJump?a("div",{staticClass:"mobile-wrapper-pop"},[a("img",{staticClass:"mobile-wrapper-pop-arrow",attrs:{src:e("d8Ol")}}),n._v(" "),a("div",{staticClass:"mobile-wrapper-pop-tips",attrs:{src:"../../assets/images/pop_arrow.png"}},[a("div",[n._v(n._s(n.generateAppDownload("appDownload_righttop_copy")))]),n._v(" "),a("div",[n._v(n._s(n.generateAppDownload("appDownload_open_browser")))])])]):n._e()]):n._e()])},staticRenderFns:[]};var l=e("/Xao")(t,d,!1,function(n){e("0Po5")},null,null);o.default=l.exports},OIEU:function(n,o,e){n.exports=e.p+"static/img/down_pc.c72d9a7.jpg"},d8Ol:function(n,o){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAC3CAYAAAD3n7shAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyOGU4MDdkMS0zYzkxLWUwNDgtYmVjYS03MDc1MTU0OTMwNzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI3QUExMzA3QjRCMTFFODlFODlFNjQwQjhBNkUwNDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI3QUExMkY3QjRCMTFFODlFODlFNjQwQjhBNkUwNDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYyNkY4Rjk3QzY4OTExRTY4RDQ4RDA0QUU2MUUzRTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYyNkY4Rjk4QzY4OTExRTY4RDQ4RDA0QUU2MUUzRTgyIi8+IDwvcmRmOkRlc2Ny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"},z4L2:function(n,o,e){(n.exports=e("BkJT")(!1)).push([n.i,"\n.navbar-appdownload {\n  display: none !important;\n}\n.main-container-appdownload {\n  padding: 0 !important;\n  min-width: 0 !important;\n  background-color: #fff !important;\n}\n.app-main-container-appdownload {\n  min-width: 0 !important;\n}\n.footer_container-appdownload {\n  display: none !important;\n}\n@media screen and (min-width: 1024px) {\n.download-page {\n    width: 100%;\n    background-color: #fff;\n    height: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.download-page .download-bg {\n      width: 100%;\n      height: 1011px;\n      background: url("+e("OIEU")+") no-repeat center;\n}\n.download-page .download-bg img {\n        display: block;\n        position: absolute;\n}\n.download-page .download-bg .download-bg-img-left {\n        left: 110px;\n        bottom: 24px;\n}\n.download-page .download-bg .download-bg-img-right {\n        top: 25px;\n        right: 91px;\n}\n.download-page .download-main {\n      position: relative;\n      z-index: 9;\n      width: 1200px;\n      margin: 0 auto;\n}\n.download-page .download-main .main-phone {\n        display: block;\n        float: left;\n}\n.download-page .download-main .main-content {\n        position: absolute;\n        right: 0;\n        width: 580px;\n        height: 100%;\n}\n.download-page .download-main .main-content .main-content-box {\n          position: absolute;\n          width: 100%;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n}\n.download-page .download-main .main-content .main-content-box .content-title {\n            width: 100%;\n            text-align: center;\n            color: #333;\n            font-size: 45px;\n            line-height: 60px;\n}\n.download-page .download-main .main-content .main-content-box .content-codeimg {\n            display: block;\n            width: 220px;\n            height: 220px;\n            margin: 50px auto 0 auto;\n}\n.download-page .download-main .main-content .main-content-box .content-tips {\n            width: 100%;\n            text-align: center;\n            color: #333;\n            font-size: 24px;\n            line-height: 36px;\n            margin-top: 55px;\n}\n}\n@media screen and (max-width: 1024px) {\n.download-page {\n    width: 100%;\n}\n.download-page .mobile-wrapper {\n      position: relative;\n}\n.download-page .mobile-wrapper .mobile-wrapper-img {\n        display: block;\n        width: 100%;\n}\n.download-page .mobile-wrapper .mobile-wrapper-btn {\n        display: block;\n        position: absolute;\n        z-index: 9;\n        bottom: 4rem;\n        width: 80%;\n        left: 10%;\n        line-height: 2.4rem;\n        text-align: center;\n        font-size: .9rem;\n        color: #333;\n        border-radius: 1.2rem;\n        background-color: #FFC24C;\n}\n.download-page .mobile-wrapper .mobile-wrapper-pop {\n        position: fixed;\n        z-index: 99;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.6);\n        padding: 5%;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n}\n.download-page .mobile-wrapper .mobile-wrapper-pop .mobile-wrapper-pop-arrow {\n          display: block;\n          width: 20%;\n          margin-left: 80%;\n}\n.download-page .mobile-wrapper .mobile-wrapper-pop .mobile-wrapper-pop-tips {\n          width: 100%;\n          text-align: center;\n          font-size: .8rem;\n          color: #fff;\n          margin: 1rem auto 0 auto;\n          line-height: 1.2rem;\n}\n}\n",""])}});
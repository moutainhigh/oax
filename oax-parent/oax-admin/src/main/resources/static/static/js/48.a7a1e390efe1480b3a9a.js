webpackJsonp([48],{sdkd:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3cXf"),r=a.n(n),l=a("ivlf"),i=a("1onU"),o=a("vLgD");var s={data:function(){var e=this;return{pickerBeginDateBefore:{disabledDate:function(t){var a=e.reqData.endTime;if(a)return t.getTime()>new Date(a)}},pickerBeginDateAfter:{disabledDate:function(t){var a=e.reqData.startTime;if(a)return t.getTime()<new Date(a)}},searchLists:[],pageInfo:{},reqData:{coinId:"",pageNum:1,pageSize:10,startTime:"",endTime:""},tableData:[],multipleSelection:[],selectData:[]}},methods:{filterReduce:function(e,t){var a=Number(t);return 45==e?this.convertNum(a-3e5):54==e?this.convertNum(a-2e5):this.convertNum(a)},exportTable:function(){var e=this;a.e(57).then(function(){var t=a("zWO4").export_json_to_excel,n=e.selectData;t(["币种id","币种","用户账户余额","用户总转入","用户总转出","总转出手续费","总交易手续费(买/卖)","平台转账成本"],e.formatJson(["coinId","coinName","userBalance","rechargeQty","withdrawQty","withdrawFee","tradeFee","platformCost"],n),"平台虚拟币统计")}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handleSelectionChange:function(e){this.multipleSelection=e,console.log(e),this.selectData=e},generateCount:l.d,handleSizeChange:function(e){this.reqData.pageSize=e,this.handleList()},handleCurrentChange:function(e){this.reqData.pageNum=e,this.handleList()},cloneObjectFn:function(e){return JSON.parse(r()(e))},handleList:function(){var e=this;this.loading=!0;var t,a=this.cloneObjectFn(this.reqData);a.endTime&&(a.endTime=a.endTime+86399999),(t=a,Object(o.a)({url:"sumCoins/page",method:"post",data:t})).then(function(t){e.loading=!1;var a=t.data;e.tableData=a.list,e.pageInfo={current_page:Number(a.pageNum),from:1,last_page:a.lastPage,next_page_url:null,path:"",per_page:a.pageSize,prev_page_url:null,to:1,total:a.total}}).catch(function(t){console.log(t),e.loading=!1})},getSearchList:function(){var e=this;Object(o.a)({url:"coins/marketCoins",method:"get"}).then(function(t){e.searchLists=t.data})},convertNum:function(e){var t="",a="",n=null,r=0,l=[],i=e.toString(),o="";if("-"===i[0]&&(i=i.substring(1),o="-"),-1!==i.indexOf("E")||-1!==i.indexOf("e")){if(n=new RegExp("^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$","ig").exec(i),console.log(n),null!=n&&(t=n[2],a=n[5],n=null),!t&&!a)return!1;if(r=t.indexOf("."),l=(t=t.replace(".","")).split(""),Number(a)>=0){var s=t.substr(r);a=Number(a);for(var c=0;c<a-s.length;c++)l.push("0");a-s.length<0&&l.splice(r+a,0,".")}else{a=a.replace("-",""),a=Number(a);for(var u=0;u<=a+r;u++)l.unshift("0");var d=a-r>=0?1:-(a-r);l.splice(d,0,".")}return o+""+(t=l.join(""))}return e}},mounted:function(){var e=new Date((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate()).getTime();this.reqData.startTime=e-864e5,this.reqData.endTime=e-864e5,this.handleList(),this.getSearchList()},components:{Pagination:i.a}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.reqData}},[a("label",{staticClass:"el-form-item__label"},[e._v(e._s(e.generateCount("coinType")))]),e._v(" "),a("el-select",{attrs:{filterable:"",placeholder:e.generateCount("pleasechose"),clearable:""},model:{value:e.reqData.coinId,callback:function(t){e.$set(e.reqData,"coinId",t)},expression:"reqData.coinId"}},e._l(e.searchLists,function(e){return a("el-option",{key:e.coinId,attrs:{label:e.coinName,value:e.coinId}})})),e._v(" "),a("el-form-item",{attrs:{label:e.generateCount("date"),"label-width":"100px"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:e.generateCount("startdate"),"value-format":"timestamp","picker-options":e.pickerBeginDateBefore},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e._f("parseTime")(t.row.startTime)))])]}}]),model:{value:e.reqData.startTime,callback:function(t){e.$set(e.reqData,"startTime",t)},expression:"reqData.startTime"}})],1),e._v(" "),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:e.generateCount("enddate"),"value-format":"timestamp","picker-options":e.pickerBeginDateAfter},model:{value:e.reqData.endTime,callback:function(t){e.$set(e.reqData,"endTime",t)},expression:"reqData.endTime"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleList}},[e._v(e._s(e.generateCount("search")))])],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.exportTable()}}},[e._v("导出Excel")])],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"coinId",label:e.generateCount("coinId"),width:"200",hidden:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"coinName",label:e.generateCount("coinType"),width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userBalance",label:e.generateCount("userbalance"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e.filterReduce(t.row.coinId,t.row.userBalance)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"rechargeQty",label:e.generateCount("usertotalin"),align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e.convertNum(t.row.rechargeQty)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"withdrawQty",label:e.generateCount("usertotalout"),align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e.convertNum(t.row.withdrawQty)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"withdrawFee",label:e.generateCount("outfee"),align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e.convertNum(t.row.withdrawFee)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"tradeFee",label:e.generateCount("totalfee"),align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e.convertNum(t.row.tradeFee)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"platformCost",label:e.generateCount("cost"),align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e.convertNum(t.row.platformCost)))])]}}])})],1),e._v(" "),a("section",{staticClass:"pagination-container"},[a("Pagination",{attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]},u=a("/Xao")(s,c,!1,null,null,null);t.default=u.exports}});
webpackJsonp([24],{A6wA:function(a,e,t){var n=t("mpIZ");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t("8bSs")("2285b620",n,!0)},mpIZ:function(a,e,t){(a.exports=t("BkJT")(!1)).push([a.i,"\n.dice .config[data-v-6f99b3c6] {\n  margin-top: 20px;\n  background: #fff;\n  padding: 30px 0;\n}\n.dice .config[data-v-6f99b3c6] .el-col-10 {\n    padding: 20px 10px;\n}\n.dice .config .last[data-v-6f99b3c6] .el-slider__bar {\n    background-color: #f56c6c;\n}\n.dice .config .last[data-v-6f99b3c6] .el-slider__button {\n    border: solid 2px #f56c6c;\n}\n.dice .config .btm[data-v-6f99b3c6] {\n    margin-top: 30px;\n    text-align: center;\n}\n.dice .config .btm[data-v-6f99b3c6] .el-button--medium {\n      padding: 10px 50px;\n}\n",""])},x6RS:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("6iV/"),l=t.n(n),c=t("zY+o"),s={data:function(){return{tableData:[],maxs:400,value0:50,value1:50,value2:50,value3:50,value4:50,value5:50,value6:50,value7:50}},components:{},created:function(){this.initDice()},mounted:function(){},methods:{change0:function(a){this.value0=a},change1:function(a){this.value1=a},change2:function(a){this.value2=a},change3:function(a){this.value3=a},change4:function(a){this.value4=a},change5:function(a){this.value5=a},change6:function(a){this.value6=a},change7:function(a){this.value7=a},initDice:function(){var a=this;c.h().then(function(e){a.tableData=[],a.tableData.push(e.data),a.value0=a.tableData[0].backWin60,a.value1=a.tableData[0].backWin70,a.value2=a.tableData[0].backWin80,a.value3=a.tableData[0].backWin90,a.value4=a.tableData[0].backWin0,a.value6=a.tableData[0].backWin100,a.value7=a.tableData[0].backWin200,a.value5=a.tableData[0].randomRate}).catch(function(a){console.log(a)})},config:function(){var a=this,e={backWin60:this.value0,backWin70:this.value1,backWin80:this.value2,backWin90:this.value3,backWin0:this.value4,backWin100:this.value6,backWin200:this.value7,randomRate:this.value5};e=l.a.stringify(e),c.f(e).then(function(e){e.success?(a.initDice(),a.$message.success(e.msg)):a.$message.error(e.msg)}).catch(function(a){console.log(a)})}}},i={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"dice"},[t("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:a.tableData}},[t("el-table-column",{attrs:{prop:"backWin0",label:"0-60的概率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"backWin60",label:"60-70的概率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"backWin70",label:"70-80的概率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"backWin80",label:"80-90的概率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"backWin90",label:"90-100的概率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"backWin100",label:"100-200的概率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"backWin200",label:"200-300的概率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"randomRate",label:"随机数乘以倍率",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"countUser",label:"参与用户总数",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"allBetQty",label:"用户总投注",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"allPayoutQty",label:"用户总获利 ",align:"center"}})],1),a._v(" "),t("div",{staticClass:"config"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:10,offset:1}},[t("span",[a._v("60-70的概率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":""},on:{change:a.change0},model:{value:a.value0,callback:function(e){a.value0=e},expression:"value0"}})],1),a._v(" "),t("el-col",{attrs:{span:10,offset:2}},[t("span",[a._v("70-80的概率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":""},on:{change:a.change1},model:{value:a.value1,callback:function(e){a.value1=e},expression:"value1"}})],1)],1),a._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:10,offset:1}},[t("span",[a._v("80-90的概率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":""},on:{change:a.change2},model:{value:a.value2,callback:function(e){a.value2=e},expression:"value2"}})],1),a._v(" "),t("el-col",{attrs:{span:10,offset:2}},[t("span",[a._v("90-100的概率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":""},on:{change:a.change3},model:{value:a.value3,callback:function(e){a.value3=e},expression:"value3"}})],1)],1),a._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:10,offset:1}},[t("span",[a._v("100-200的概率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":""},on:{change:a.change6},model:{value:a.value6,callback:function(e){a.value6=e},expression:"value6"}})],1),a._v(" "),t("el-col",{attrs:{span:10,offset:2}},[t("span",[a._v("200-300的概率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":""},on:{change:a.change7},model:{value:a.value7,callback:function(e){a.value7=e},expression:"value7"}})],1)],1),a._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:10,offset:1}},[t("span",[a._v("0-60的概率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":""},on:{change:a.change4},model:{value:a.value4,callback:function(e){a.value4=e},expression:"value4"}})],1),a._v(" "),t("el-col",{staticClass:"last",attrs:{span:10,offset:2}},[t("span",[a._v("随机数乘以倍率:")]),a._v(" "),t("el-slider",{attrs:{"show-input":"",max:a.maxs},on:{change:a.change5},model:{value:a.value5,callback:function(e){a.value5=e},expression:"value5"}})],1)],1),a._v(" "),t("div",{staticClass:"btm"},[t("el-button",{attrs:{type:"primary"},on:{click:a.config}},[a._v("配置")])],1)],1)],1)},staticRenderFns:[]};var o=t("/Xao")(s,i,!1,function(a){t("A6wA")},"data-v-6f99b3c6",null);e.default=o.exports}});
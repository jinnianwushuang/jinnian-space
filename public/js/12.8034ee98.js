(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"0ad4":function(t,n,e){var o={"./0.概述笔记.md":"92fc","./1.node全栈项目依赖.md":"e52a","./2.node-schedule增加定时任务.md":"e68a"};function r(t){var n=i(t);return e(n)}function i(t){if(!e.o(o,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="0ad4"},"1b62":function(t,n,e){"use strict";e.d(n,"d",(function(){return s})),e.d(n,"c",(function(){return d})),e.d(n,"a",(function(){return g})),e.d(n,"b",(function(){return w})),e("4de4"),e("c975");var o=e("448a"),r=e.n(o),i=["/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf","/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf"],a="linux/heima-Linux云计算",s={name:"Container",data:function(){return{prefix:a,book_options:i,book_options_all:[],show:!0,book:i[0],src:""}},created:function(){this.book_options_all=r()(this.book_options),this.src=this.$utils.compute_book_src(this.prefix+this.book)},watch:{book:function(t,n){t&&this.change_book()}},methods:{change_book:function(){console.log("this.book",this.book),this.src=this.$utils.compute_book_src(this.prefix+this.book)},filterFn:function(t,n){var e=this;n(""!==t?function(){var n=t.toLowerCase();e.book_options=e.book_options_all.filter((function(t){return t.toLowerCase().indexOf(n)>-1}))}:function(){e.book_options=e.book_options_all})}}},l=e("ded3"),c=e.n(l),u=e("2f62"),d={data:function(){return{tab:"",tab_level:1,is_active:!1}},computed:c()({},Object(u["c"])(["get_current_selected_right_menu"])),created:function(){this.is_active=!0,this.fix_right_menu_config()},watch:{tab:function(){this.tab||this.fix_right_menu_config()},get_current_selected_right_menu:function(t,n){this.tab=this.get_current_selected_right_menu["t"+this.tab_level]}},methods:c()(c()({},Object(u["b"])(["set_right_menu_fix_config"])),{},{fix_right_menu_config:function(){this.set_right_menu_fix_config({tl:this.tab_level,tabs:this.tabs||[],tv:this.tab||this.tabs[0]["value"]})}}),beforeDestroy:function(){this.is_active=!1}},_=(e("99af"),e("d81d"),e("fb6a"),e("a434"),e("07ac"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"q-my-md q-mx-sm"},[e("div",{staticClass:"q-mb-md row q-gutter-x-md q-gutter-y-sm"},[e("q-select",{staticStyle:{width:"300px"},attrs:{dense:"",filled:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",options:t.topic_options_filtered},on:{filter:t.filterFn,"filter-abort":t.abortFilterFn,input:t.handle_topic_change},scopedSlots:t._u([{key:"before",fn:function(){return[t._v("\n        主题\n      ")]},proxy:!0}]),model:{value:t.topic,callback:function(n){t.topic=n},expression:"topic"}}),e("q-select",{staticStyle:{width:"300px"},attrs:{dense:"",filled:"",options:t.column_options},on:{input:t.handle_column_change},scopedSlots:t._u([{key:"before",fn:function(){return[t._v("\n        列数\n      ")]},proxy:!0}]),model:{value:t.column,callback:function(n){t.column=n},expression:"column"}})],1),e("q-markup-table",{attrs:{dense:""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left text-weight-bolder  ",attrs:{colspan:t.column}},[t._v("\n          "+t._s(t.table_title?t.table_title+"------":"")+"当前词条数量："+t._s(t.word_total)+"\n        ")])])]),e("tbody",[t._l(t.table_data,(function(n,o){return[t.compute_if_show(n)?e("tr",{key:o,class:t.compute_topic_options_style(n)},t._l(t.column,(function(o){return e("td",{key:o,staticClass:"text-left"},[t._v("\n            "+t._s(n[o-1])+"\n          ")])})),0):t._e()]}))],2)])],1)}),p=[],h=(e("caad"),e("a9e3"),e("2532"),{data:function(){return{topic:"全部",column:2,topic_options_filtered:[],topic_options_all:[]}},props:{table_title:{type:String,default:""},word_total:{type:Number,default:0},topic_options:{type:Array,default:function(){return[]}},column_options:{type:Array,default:function(){return[]}},table_data:{type:Array,default:function(){return[]}},show_empty_line:!1},watch:{topic_options:function(t,n){this.init_topic_options_related()},column_options:function(t,n){this.init_column()}},created:function(){this.init_topic_options_related(),this.init_column(),this.handle_column_change(),this.handle_topic_change()},methods:{init_topic_options_related:function(){this.topic_options_all=r()(this.topic_options),this.topic_options_filtered=r()(this.topic_options)},filterFn:function(t,n,e){var o=this;console.log("this.topic_options_all",this.topic_options_all),setTimeout((function(){n((function(){if(""===t)o.topic_options_filtered=r()(o.topic_options_all);else{var n=t.toLowerCase();o.topic_options_filtered=o.topic_options_all.filter((function(t){return t.toLowerCase().indexOf(n)>-1}))}o.$forceUpdate()}),(function(n){""!==t&&n.options.length>0&&(n.setOptionIndex(-1),n.moveOptionSelection(1,!0))}))}),300)},abortFilterFn:function(){},handle_column_change:function(){this.$emit("handle_column_change",this.column)},handle_topic_change:function(){this.$emit("handle_topic_change",this.topic)},init_column:function(){var t=this.$q.platform.is.desktop,n=window.innerWidth;n=t?n-200:n-100,n=n<370?370:n,console.log("ww",n);var e=Math.ceil(n/350);e=e<1?1:e,n<400&&(e=1),e=e>8?8:e,this.column=e},compute_topic_options_style:function(t){var n="",e=1==t.length&&this.topic_options.includes(t[0]);return n=e?"bg-teal-4":"",n},compute_if_show:function(t){if(this.show_empty_line)return!0;var n=t.filter((function(t){return t}));return n.length>0}}}),f=h,m=e("2877"),v=Object(m["a"])(f,_,p,!1,null,"4e74a874",null),b=v.exports,g={components:{excelTable:b},data:function(){return{workSheetsFromFile:[[{data:[]}]],table_title:"",column:8,word_total:0,table_data:[],table_data_all:[],column_options:[1,2,3,4,5,6,7,8],exclude_topic_options:!0,show_empty_line:!1,topic:"",topic_options:[]}},created:function(){this.init_workSheetsFromFile()},methods:{init_workSheetsFromFile:function(){},handle_column_change:function(t){this.column=t,this.init_data()},handle_topic_change:function(t){this.topic=t,console.log("this.topic----",this.topic),this.compute_table_data_show_and_word_total()},rebuild_arr_reduce_empty_line:function(t){var n=[[""]];return t.map((function(t){var e=t.filter((function(t){return t})),o=e.length;if(o)n.push(t);else{var r=n[n.length-1].filter((function(t){return t})).length,i=n[n.length-1].length;i>0&&r>0&&n.push([""])}})),n},init_data:function(){var t=this;console.log("workSheetsFromFile --------",this.workSheetsFromFile);var n=[],e={},o=[];this.workSheetsFromFile.map((function(t){n=n.concat(t["data"])}));var i=this.$lodash.cloneDeep(n[0].filter((function(t){return t})));i.map((function(t,n){e["key_"+n]={title:t,words_raw:[]}})),this.exclude_topic_options&&n.splice(0,1),n.map((function(t,n){t.map((function(t,n){e["key_"+n]["words_raw"].push(t)}))})),console.log("final_obj------------",e);var a=Object.values(e);a.map((function(n,e){o.push([n["title"]]),o=o.concat(t.$lodash.chunk(n["words_raw"],t.column)),o=o.concat([[""]])})),this.topic_options=["全部"].concat(r()(i)),this.table_data_all=this.rebuild_arr_reduce_empty_line(o),this.compute_table_data_show_and_word_total(),console.log("  this.table_data_all   ",this.table_data_all)},compute_table_data_show_and_word_total:function(){var t=[],n=[],e=0;if(n=this.$lodash.cloneDeep(this.table_data_all),console.log(" table_data--------",n),"全部"==this.topic)t=n;else{var o=this.topic_options.indexOf(this.topic),r=o==this.topic_options.length-1,i=r?"":this.topic_options[o+1],a=this.find_topic_index(this.topic),s=i?this.find_topic_index(i):n.length;t=n.slice(a,s)}t.map((function(t){var n=t.filter((function(t){return t})).length;e+=n})),this.word_total=e,this.table_data=t},find_topic_index:function(t){for(var n=0,e=0;e<this.table_data_all.length;e++){var o=this.table_data_all[e];if(1==o.length&&o[0]&&o[0]==t){n=e;break}}return n}}},w=(e("7db0"),e("ac1f"),e("1276"),{data:function(){return{relative_path:"",tab:"",tabs:[],MainComponent:"",img_prefix:"./img/linux/heima-Linux云计算/讲义/"}},methods:{extendMarkdown:function(t){var n=this;console.log(t.renderer.rules);var e=t.renderer.rules.html_block;t.renderer.rules.html_block=function(t,o,r,i,a){var s=t[o];if(console.log("1"),s.content.includes("<img")){console.log("token-- ",s);var l="";l=s.content;var c=l.split('src="'),u="",d=c[1];c[0],n.img_prefix,c[1],u=d.includes("http")?c[0]+' src="'+d:c[0]+' src="'+n.img_prefix+d,s.content=u}return s.attrSet("class","q-markdown--token  "),e(t,o,r,i,a)},t.renderer.rules.image=function(t,e,o,r,i){var a=t[e];console.log("3"),a.attrSet("class","q-markdown--image"),console.log("token--- "+e+"-----",a);var s=a.attrGet("src");return console.log(s),s.includes("http")?a.attrSet("src",s):a.attrSet("src",n.img_prefix+s),i.renderToken(t,e,o)}},compute_img_prefix:function(){var t=this;if(this.MainComponent){var n=this.tabs.find((function(n){return n["value"]==t.tab}));if(n&&n["modules_obj"]){var e=this.relative_path;this.img_prefix="."+e+(n["modules_obj"]["relative_folder"]||"")}else this.img_prefix="."+relative_path}}}})},3686:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e("e260"),e("a15b"),e("d81d"),e("fb6a"),e("4e82"),e("d3b7"),e("ac1f"),e("5319"),e("1276"),e("ddb0");var o=e("ded3"),r=e.n(o),i=e("d958"),a=function(t){var n=i(t,{style:i.STYLE_NORMAL}),e="";return n.map((function(t){e+=t[0]})),e},s=function(t){if(!t)return"";var n="",e=t.split("/");return e.shift(),e.pop(),n=e.join("/"),n?"/"+n+"/":""},l=function(t){t=t||"";var n=t.split("/"),e=n.length;return n[e-1]},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"md",e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];console.log("当前 require.context---",t),console.log("当前 field_components.keys()---",t.keys());var c=t.keys(),u={},d=[],_={},p=[];return c.map((function(r){var i=/[^\u4E00-\u9FA5A-Za-z]+/g,l=r.slice(2,r.length-n.length-1),c="";e?(c=a(r).replace(i,""),c=c.slice(0,c.length-n.length)):c=l,p.push(l),_[l]={value:c,relative_path:r,relative_folder:s(r)},console.log("x---",r),u[c]=o?"\n            <div>\n            <code>\n              ".concat(t(r).default,"\n            </code>\n            </div>\n            "):t(r).default})),p.sort((function(t,n){return parseFloat(t)-parseFloat(n)})),p.map((function(t){d.push({label:i?l(t):t,value:_[t]["value"],modules_obj:r()({},_[t])})})),console.log("all_components------------",u),console.log("all_modules---------------",d),{all_components:u,all_modules:d}}},"92fc":function(t,n,e){"use strict";e.r(n),n["default"]="# 一些散乱笔记\r\n\r\nnode 项目 遇到的坑\r\n\r\n- linux 部署 node 项目 后台运行 需要两次回车 ，第一次 退出 node 项目界面 ，第二次 才是背后运行\r\n- nohup , 后缀 $ ， forever start xxxxx, node ./server.js  \r\n- \r\n\r\n"},bbaf:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("q-markdown",{attrs:{extend:t.extendMarkdown,src:t.MainComponent}})],1)},r=[],i=e("3686"),a=e("1b62"),s="/books/node/",l=Object(i["a"])(e("0ad4"),"md",!0),c=l.all_components,u=l.all_modules,d={mixins:[a["c"],a["b"]],data:function(){return{relative_path:s,img_prefix:"."+s,tab:u[0].value,tab_level:1,MainComponent:c[u[0].value],tabs:u}},watch:{tab:function(t,n){this.MainComponent=c[this.tab],this.compute_img_prefix()}}},_=d,p=e("2877"),h=Object(p["a"])(_,o,r,!1,null,"3824ba44",null);n["default"]=h.exports},e52a:function(t,n,e){"use strict";e.r(n),n["default"]='# node全栈项目的几套依赖参照\r\n\r\n```json\r\n{\r\n  "name": "node-web-fullstack",\r\n  "version": "0.0.1",\r\n  "description": "锦年node全栈学习项目",\r\n  "productName": "锦年fullstack",\r\n  "author": "jinnianwushuang ",\r\n  "private": true,\r\n  "main": "server.js",\r\n  "apidoc":{\r\n    "name": "锦年node全栈学习项目API",\r\n    "version": "0.1.0",\r\n    "description": "明日复明日，万事成蹉跎。",\r\n    "title": "锦年node全栈学习项目API",\r\n    "url": "http://192.168.0.36:19090"\r\n  },\r\n  "scripts": {\r\n    "test": "echo \\"No test specified\\" && exit 0",\r\n    "start-makedoc": "apidoc -i app/ -o apidoc/",\r\n    "start-docpage": " http-server ./apidoc -a 192.168.0.36 -p 19092 -s -o ",\r\n    "start-docpage-b": "http-server ./apidoc -a 192.168.0.36 -p 19092 -s -o ",\r\n    "start-server": "nodemon --harmony  server.js",\r\n    "start-webpage": "quasar dev",\r\n    "start-doc-s": "run-s start-makedoc start-docpage",\r\n    "start-fullstack-p": "run-p  start-server  start-webpage",\r\n    "init-env": "node init.js",\r\n    "start": "run-s  init-env   start2",\r\n    "start2": "run-p   start-fullstack-p start-doc-s"\r\n  },\r\n  "dependencies": {\r\n    "@quasar/extras": "^1.0.0",\r\n    "axios": "^0.18.1",\r\n    "body-parser": "^1.19.0",\r\n    "core-js": "^3.6.5",\r\n    "cors": "^2.8.5",\r\n    "express": "^4.17.1",\r\n    "lodash": "^4.17.20",\r\n    "log4js": "^6.3.0",\r\n    "md5": "^2.3.0",\r\n    "mongoose": "^5.8.10",\r\n    "mongoose-paginate-v2": "^1.3.9",\r\n    "quasar": "^1.0.0",\r\n    "vue-i18n": "^8.0.0"\r\n  },\r\n  "devDependencies": {\r\n    "@quasar/app": "^2.0.0",\r\n    "apidoc": "^0.25.0",\r\n    "http-server": "^0.12.3",\r\n    "nodemon": "^2.0.4",\r\n    "npm-run-all": "^4.1.5"\r\n  },\r\n  "browserslist": [\r\n    "ie >= 11",\r\n    "last 10 Chrome versions",\r\n    "last 10 Firefox versions",\r\n    "last 4 Edge versions",\r\n    "last 7 Safari versions",\r\n    "last 8 Android versions",\r\n    "last 8 ChromeAndroid versions",\r\n    "last 8 FirefoxAndroid versions",\r\n    "last 10 iOS versions",\r\n    "last 5 Opera versions"\r\n  ],\r\n  "engines": {\r\n    "node": ">= 10.18.1",\r\n    "npm": ">= 6.13.4",\r\n    "yarn": ">= 1.21.1"\r\n  }\r\n}\r\n```\r\n\r\n'},e68a:function(t,n,e){"use strict";e.r(n),n["default"]="# 从零开始在NodeJs中使用node-schedule增加定时任务\r\n\r\n## 简介\r\n\r\njava中直接使用定时器类就行了，但是在node中就没有这么简单了，只能使用setInterval或者setTimeout两个方法来实现，但是太繁琐了，搜索了之后发现`node-schedule`这个包，特意试用一下\r\n\r\n## 版本\r\n\r\nnode版本12.16.2\r\n\r\nkoa2版> 2.7.0\r\n\r\n## 1. 安装\r\n\r\n```javascript\r\nnpm insatll node-schedule -S\r\n\r\n```\r\n\r\n## 2. 使用方法\r\n\r\n### 2-1. 调用格式\r\n\r\n```javascript\r\n// 任务名称可以用中文，也可以用英文，但必须唯一\r\nschedule.scheduleJob(`任务名称`, `时间`, () => {\r\n});\r\n\r\n```\r\n\r\n### 2-2. 时间格式\r\n\r\n- 每分钟的第30秒触发： '30 * * * * *'\r\n- 每小时的1分30秒触发 ：'30 1 * * * *'\r\n- 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'\r\n- 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'\r\n- 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'\r\n- 每周1的1点1分30秒触发 ：'30 1 1 * * 1'\r\n\r\n## 3. 在项目中使用\r\n\r\n### 3-1. 建立schedule.js\r\n\r\n```javascript\r\nconst schedule = require('node-schedule');\r\n\r\n// 生成新的定时任务\r\nlet interval = async (options) => {\r\n  return new Promise((resolve) => {\r\n    \r\n    // 这里设定14天为一个循环周期\r\n    // 假如设定的日期是2020-06-08, 返回就是{year: 2020, month: 6, day: 22, hour: 8, min: 0}\r\n    let time14 = GetDateStr(options.maintain_time, 14)\r\n    console.log(`${options.unit_name}_${time14.year}-${time14.month}-${time14.day}`, `1-2 1 1 ${time14.day} ${time14.month} *`)\r\n    \r\n    // 终止之前的定时任务\r\n    editMaintainTime(options)\r\n    \r\n    // 按照固定格式，设定定时任务，这里使用每条数据的唯一字段+定时任务时间，作为任务名称\r\n    // 任务名称就是'名字_2020-6-22'\r\n    // 任务时间就是'1-2 1 1 22 6 *' ，意思是每年的6月22日的1点1分的1秒~10秒触发，触发10次\r\n    schedule.scheduleJob(`${options.unit_name}_${time14.year}-${time14.month < 10 ? \"0\" + time14.month: time14.month}-${time14.day < 10 ? \"0\" + time14.day: time14.day}`, `1-10 * * ${time14.day} ${time14.month} *`, () => {\r\n        console.log(options,'The world is going to end today.' +  new Date())\r\n\r\n      // 写入你自己想在定时任务触发的时候，想要执行的函数\r\n    });\r\n}\r\n\r\n// 删除定时任务\r\nlet editMaintainTime = async (options) => {\r\n    console.log('options', options)\r\n  \r\n    // 查看所有的定时任务\r\n    for (let i in schedule.scheduledJobs) {\r\n      console.error(\"任务删除前：\"+i);\r\n    }\r\n    // 终止之前的定时任务\r\n    console.log('终止的任务', `${options.alarm14}`)\r\n    if (schedule.scheduledJobs[`${options.alarm14}`]) {\r\n      schedule.scheduledJobs[`${options.alarm14}`].cancel();\r\n    }\r\n    \r\n    // 查看剩下的定时任务\r\n    for (let i in schedule.scheduledJobs) {\r\n      console.error(\"任务删除后：\"+i);\r\n    }\r\n    // time.cancel()\r\n    \r\n     console.log('删除成功')\r\n}\r\n\r\n\r\n// 时间选择\r\nlet GetDateStr = (maintain_time, AddDayCount) => {\r\n  var dd = new Date(`${maintain_time}`);\r\n  dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期\r\n  var y = dd.getFullYear(); \r\n  var m = dd.getMonth() + 1\r\n  var d = dd.getDate()\r\n  var h = dd.getHours()\r\n  var min = dd.getMinutes()\r\n  return {\r\n    year: y,\r\n    month: m,\r\n    day: d,\r\n    hour: h,\r\n    min: min,\r\n  }\r\n}\r\n\r\nconst intervalControl = {\r\n  interval: interval\r\n}\r\n\r\nmodule.exports = intervalControl\r\n\r\n```\r\n\r\n### 3-2. 调用该方法\r\n\r\n```javascript\r\nconst intervalControl = require('../util/schedule')\r\n\r\n// options传入{unit_name: '名字', maintain_time: '自己选择的开始时间', alarm14: '上一次定时任务的任务名称'}\r\n// unit_name，无格式\r\n// maintain_time：2020-06-08\r\n// alarm14: 2020-06-22\r\nintervalControl.interval(options)\r\n```"}}]);
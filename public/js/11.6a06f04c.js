(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1b62":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return g})),n("4de4"),n("c975");var i=n("448a"),o=n.n(i),a=["/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf","/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf"],l="linux/heima-Linux云计算",c={name:"Container",data:function(){return{prefix:l,book_options:a,book_options_all:[],show:!0,book:a[0],src:""}},created:function(){this.book_options_all=o()(this.book_options),this.src=this.$utils.compute_book_src(this.prefix+this.book)},watch:{book:function(t,e){t&&this.change_book()}},methods:{change_book:function(){console.log("this.book",this.book),this.src=this.$utils.compute_book_src(this.prefix+this.book)},filterFn:function(t,e){var n=this;e(""!==t?function(){var e=t.toLowerCase();n.book_options=n.book_options_all.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}:function(){n.book_options=n.book_options_all})}}},s=n("ded3"),r=n.n(s),_=n("2f62"),u={data:function(){return{tab:"",tab_level:1,is_active:!1}},computed:r()({},Object(_["c"])(["get_current_selected_right_menu"])),created:function(){this.is_active=!0,this.fix_right_menu_config()},watch:{tab:function(){this.tab||this.fix_right_menu_config()},get_current_selected_right_menu:function(t,e){this.tab=this.get_current_selected_right_menu["t"+this.tab_level]}},methods:r()(r()({},Object(_["b"])(["set_right_menu_fix_config"])),{},{fix_right_menu_config:function(){this.set_right_menu_fix_config({tl:this.tab_level,tabs:this.tabs||[],tv:this.tab||this.tabs[0]["value"]})}}),beforeDestroy:function(){this.is_active=!1}},h=(n("99af"),n("d81d"),n("fb6a"),n("a434"),n("07ac"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-my-md q-mx-sm"},[n("div",{staticClass:"q-mb-md row q-gutter-x-md q-gutter-y-sm"},[n("q-select",{staticStyle:{width:"300px"},attrs:{dense:"",filled:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",options:t.topic_options_filtered},on:{filter:t.filterFn,"filter-abort":t.abortFilterFn,input:t.handle_topic_change},scopedSlots:t._u([{key:"before",fn:function(){return[t._v("\n        主题\n      ")]},proxy:!0}]),model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}}),n("q-select",{staticStyle:{width:"300px"},attrs:{dense:"",filled:"",options:t.column_options},on:{input:t.handle_column_change},scopedSlots:t._u([{key:"before",fn:function(){return[t._v("\n        列数\n      ")]},proxy:!0}]),model:{value:t.column,callback:function(e){t.column=e},expression:"column"}})],1),n("q-markup-table",{attrs:{dense:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left text-weight-bolder  ",attrs:{colspan:t.column}},[t._v("\n          "+t._s(t.table_title?t.table_title+"------":"")+"当前词条数量："+t._s(t.word_total)+"\n        ")])])]),n("tbody",[t._l(t.table_data,(function(e,i){return[t.compute_if_show(e)?n("tr",{key:i,class:t.compute_topic_options_style(e)},t._l(t.column,(function(i){return n("td",{key:i,staticClass:"text-left"},[t._v("\n            "+t._s(e[i-1])+"\n          ")])})),0):t._e()]}))],2)])],1)}),p=[],f=(n("caad"),n("a9e3"),n("2532"),{data:function(){return{topic:"全部",column:2,topic_options_filtered:[],topic_options_all:[]}},props:{table_title:{type:String,default:""},word_total:{type:Number,default:0},topic_options:{type:Array,default:function(){return[]}},column_options:{type:Array,default:function(){return[]}},table_data:{type:Array,default:function(){return[]}},show_empty_line:!1},watch:{topic_options:function(t,e){this.init_topic_options_related()},column_options:function(t,e){this.init_column()}},created:function(){this.init_topic_options_related(),this.init_column(),this.handle_column_change(),this.handle_topic_change()},methods:{init_topic_options_related:function(){this.topic_options_all=o()(this.topic_options),this.topic_options_filtered=o()(this.topic_options)},filterFn:function(t,e,n){var i=this;console.log("this.topic_options_all",this.topic_options_all),setTimeout((function(){e((function(){if(""===t)i.topic_options_filtered=o()(i.topic_options_all);else{var e=t.toLowerCase();i.topic_options_filtered=i.topic_options_all.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}i.$forceUpdate()}),(function(e){""!==t&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))}),300)},abortFilterFn:function(){},handle_column_change:function(){this.$emit("handle_column_change",this.column)},handle_topic_change:function(){this.$emit("handle_topic_change",this.topic)},init_column:function(){var t=this.$q.platform.is.desktop,e=window.innerWidth;e=t?e-200:e-100,e=e<370?370:e,console.log("ww",e);var n=Math.ceil(e/350);n=n<1?1:n,e<400&&(n=1),n=n>8?8:n,this.column=n},compute_topic_options_style:function(t){var e="",n=1==t.length&&this.topic_options.includes(t[0]);return e=n?"bg-teal-4":"",e},compute_if_show:function(t){if(this.show_empty_line)return!0;var e=t.filter((function(t){return t}));return e.length>0}}}),d=f,m=n("2877"),b=Object(m["a"])(d,h,p,!1,null,"4e74a874",null),v=b.exports,g={components:{excelTable:v},data:function(){return{workSheetsFromFile:[[{data:[]}]],table_title:"",column:8,word_total:0,table_data:[],table_data_all:[],column_options:[1,2,3,4,5,6,7,8],exclude_topic_options:!0,show_empty_line:!1,topic:"",topic_options:[]}},created:function(){this.init_workSheetsFromFile()},methods:{init_workSheetsFromFile:function(){},handle_column_change:function(t){this.column=t,this.init_data()},handle_topic_change:function(t){this.topic=t,console.log("this.topic----",this.topic),this.compute_table_data_show_and_word_total()},rebuild_arr_reduce_empty_line:function(t){var e=[[""]];return t.map((function(t){var n=t.filter((function(t){return t})),i=n.length;if(i)e.push(t);else{var o=e[e.length-1].filter((function(t){return t})).length,a=e[e.length-1].length;a>0&&o>0&&e.push([""])}})),e},init_data:function(){var t=this;console.log("workSheetsFromFile --------",this.workSheetsFromFile);var e=[],n={},i=[];this.workSheetsFromFile.map((function(t){e=e.concat(t["data"])}));var a=this.$lodash.cloneDeep(e[0].filter((function(t){return t})));a.map((function(t,e){n["key_"+e]={title:t,words_raw:[]}})),this.exclude_topic_options&&e.splice(0,1),e.map((function(t,e){t.map((function(t,e){n["key_"+e]["words_raw"].push(t)}))})),console.log("final_obj------------",n);var l=Object.values(n);l.map((function(e,n){i.push([e["title"]]),i=i.concat(t.$lodash.chunk(e["words_raw"],t.column)),i=i.concat([[""]])})),this.topic_options=["全部"].concat(o()(a)),this.table_data_all=this.rebuild_arr_reduce_empty_line(i),this.compute_table_data_show_and_word_total(),console.log("  this.table_data_all   ",this.table_data_all)},compute_table_data_show_and_word_total:function(){var t=[],e=[],n=0;if(e=this.$lodash.cloneDeep(this.table_data_all),console.log(" table_data--------",e),"全部"==this.topic)t=e;else{var i=this.topic_options.indexOf(this.topic),o=i==this.topic_options.length-1,a=o?"":this.topic_options[i+1],l=this.find_topic_index(this.topic),c=a?this.find_topic_index(a):e.length;t=e.slice(l,c)}t.map((function(t){var e=t.filter((function(t){return t})).length;n+=e})),this.word_total=n,this.table_data=t},find_topic_index:function(t){for(var e=0,n=0;n<this.table_data_all.length;n++){var i=this.table_data_all[n];if(1==i.length&&i[0]&&i[0]==t){e=n;break}}return e}}}},"44af":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(""+t.tab,{tag:"component"})],1)},o=[],a=function(){var t=this;t.$createElement;return t._self._c,t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("a",{attrs:{href:"https://www.infoq.cn/article/event-tracking-in-zhihu"}},[t._v("数据埋点太难！知乎的做法有何可借鉴之处")]),n("br"),n("a",{attrs:{href:"https://github.com/Meituan-Dianping/Logan"}},[t._v("美团 Logan")])])}],c={},s=c,r=n("2877"),_=Object(r["a"])(s,a,l,!1,null,"199185c0",null),u=_.exports,h=function(){var t=this;t.$createElement;return t._self._c,t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"http://caibaojian.com/some-fe"}},[t._v("http://caibaojian.com/some-fe")]),n("br"),n("a",{attrs:{href:"https://www.jianshu.com/p/91cf0071c1f6"}},[t._v("https://www.jianshu.com/p/91cf0071c1f6")])])}],f={},d=f,m=Object(r["a"])(d,h,p,!1,null,"2152820d",null),b=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    1\n")])},g=[],w={},x=w,k=Object(r["a"])(x,v,g,!1,null,"486cbcb2",null),y=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    1\n")])},F=[],j={},O=j,E=Object(r["a"])(O,$,F,!1,null,"9c54ee30",null),S=E.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    1\n")])},C=[],L={},D=L,A=Object(r["a"])(D,q,C,!1,null,"f03d1fae",null),J=A.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    1\n")])},T=[],z={},I=z,N=Object(r["a"])(I,M,T,!1,null,"5ded576a",null),U=N.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    1\n")])},B=[],G={},H=G,K=Object(r["a"])(H,W,B,!1,null,"33f93eab",null),P=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    1\n")])},R=[],V={},X=V,Y=Object(r["a"])(X,Q,R,!1,null,"0a0525ec",null),Z=Y.exports,tt=n("1b62"),et={mixins:[tt["b"]],components:{m1:u,m2:b,m3:y,m4:S,m5:J,m6:U,m7:P,m8:Z},data:function(){return{tab:"m1",tab_level:1,tabs:[{label:"未开发",value:"m1"},{label:"未开发",value:"m2"},{label:"未开发",value:"m3"},{label:"未开发",value:"m4"},{label:"未开发",value:"m5"},{label:"未开发",value:"m6"},{label:"未开发",value:"m7"},{label:"未开发",value:"m8"}]}}},nt=et,it=Object(r["a"])(nt,i,o,!1,null,"6aac2cbe",null);e["default"]=it.exports}}]);
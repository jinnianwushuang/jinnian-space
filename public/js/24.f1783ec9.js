(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{f241:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{view:"hHh LpR lFf"}},[r("q-header",{staticClass:"bg-primary text-white",staticStyle:{"border-bottom":"1px solid #ccc"}},["electron"===t.current_mode?r("q-bar",{staticClass:"q-electron-drag ",staticStyle:{height:"36px","line-height":"36px"}},[r("q-icon",{attrs:{name:"img:logo.png",size:"30px"}}),r("q-btn",{staticStyle:{"font-size":"14px"},attrs:{flat:"",label:"菜单"},on:{click:function(e){t.drawer=!t.drawer}}}),r("div",{staticClass:"fsz12 ",staticStyle:{"font-size":"14px"}},[t._v("\n        --------- "+t._s(t.title)+" ---------"+t._s(t.last_update_time)+"\n      ")]),r("q-space"),r("q-btn",{attrs:{dense:"",flat:"",icon:"minimize"},on:{click:t.minimize}}),r("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square"},on:{click:t.maximize}}),r("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:t.closeApp}}),r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerRight=!t.drawerRight}}})],1):t._e(),"electron"!==t.current_mode?r("q-toolbar",[r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerLeft=!t.drawerLeft}}}),r("div",{staticClass:"text-h6"},[t._v(t._s(t.title))]),r("q-space"),r("div",{staticClass:"text-uppercase text-h6"},[t._v(t._s(t.mid_text))]),r("q-space"),r("div",{staticClass:"desktop-only"},[t._v(t._s(t.last_update_time))]),r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerRight=!t.drawerRight}}})],1):t._e()],1),r("q-drawer",{staticClass:"hide-scrollbar",attrs:{"show-if-above":"",width:160,breakpoint:500,bordered:"","content-class":"bg-grey-3 hide-scrollbar "},model:{value:t.drawerLeft,callback:function(e){t.drawerLeft=e},expression:"drawerLeft"}},[r("q-scroll-area",{staticClass:"fit hide-scrollbar"},t._l(t.menu,(function(e,n){return r("q-list",{key:n,staticClass:"hide-scrollbar"},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:e.name==t.current_menu?"bg-primary text-white":"bg=white text-black",attrs:{clickable:""},on:{click:function(r){return t.go_to_router(e)}}},[r("q-item-section",[t._v("\n            "+t._s(n+1+"."+e.name)+"\n          ")])],1)],1)})),1)],1),r("q-drawer",{attrs:{side:"right",bordered:"",dense:"",width:250,breakpoint:500,"content-class":"bg-grey-3 hide-scrollbar "},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[r("q-scroll-area",{staticClass:"fit hide-scrollbar"},t._l(t.flat_right_menu,(function(e,n){return r("q-list",{key:n,staticClass:"hide-scrollbar"},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.compute_right_menu_item_class(e),attrs:{clickable:""},on:{click:function(r){return t.right_menu_item_click(e)}}},[r("q-item-section",[r("div",{class:1==e.tl?"":"q-pl-md"},[2==e.tl?r("span",[t._v("-")]):t._e(),t._v("  "+t._s(" "+e.label)+"\n            ")])])],1)],1)})),1)],1),r("q-page-container",{staticClass:"q-pb-sm",style:t.q_page_container_style},[r("router-view",{class:t.$q.platform.is.desktop?"q-pa-md":"q-pa-sm"}),r("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[r("q-btn",{attrs:{dense:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)],1)},i=[],a=(r("d81d"),r("b0c0"),r("ded3")),s=r.n(a),c=r("9523"),l=r.n(c),o=r("2197"),u=r("b178"),_=r("2f62"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},d=[],h={data:function(){return{}},computed:{name:function(){}},created:function(){},methods:{}},p=h,f=r("2877"),g=Object(f["a"])(p,m,d,!1,null,"0becda72",null),b=(g.exports,1636517844200),w=u["s"].formatDate(b,"YYYY-MM-DD     HH:mm:ss"),q={name:"MyLayout",data:function(){var t;return t={title:"我生待明日，万事成蹉跎。"},l()(t,"title","锦绣年华"),l()(t,"mid_text","we are who we choose to be"),l()(t,"mid_text","Learn、analyze and follow the process"),l()(t,"mid_text","流程错了"),l()(t,"last_update_time",w),l()(t,"drawerLeft",!1),l()(t,"menu",o["a"]),l()(t,"current_menu","note"),l()(t,"tab","note"),l()(t,"tabs",[1,2,3,4,5,6,7,8]),l()(t,"drawerRight",!0),l()(t,"current_mode","spa"),l()(t,"flat_right_menu",[]),t},computed:s()(s()({},Object(_["c"])({right_menu:"get_right_menu",current_selected_right_menu:"get_current_selected_right_menu"})),{},{q_page_container_style:function(){var t="";t=this.$q.platform.is.desktop?"calc( 100vw - 16px)":" 100vw ";var e={width:t};return e}}),created:function(){this.$route.name||this.$router.push(o["a"][0]),this.current_menu=this.$route.name},watch:{$route:function(t,e){this.current_menu=this.$route.name},right_menu:{handler:function(){console.log("right_menu---------------right_menu",this.right_menu),this.compute_flat_right_menu()},deep:!0}},methods:s()(s()({},Object(_["b"])(["set_current_selected_right_menu"])),{},{compute_flat_right_menu:function(){var t=[];this.right_menu.map((function(e){var r=s()(s()({},e),{},{tl:1});t.push(r),Array.isArray(e.children)&&e.children.map((function(r){var n=s()(s()({},r),{},{tl:2,parent:s()({},e)});t.push(n)}))})),this.flat_right_menu=t,console.log("flat_right_menuflat_right_menu ",this.flat_right_menu),this.$forceUpdate()},go_to_router:function(t){this.current_menu=t.name,this.$route.name!=t.name&&this.$router.push({name:t.name})},right_menu_item_click:function(t){console.log("右侧菜单点击 ",t),this.set_current_selected_right_menu(t),this.$nextTick(this.compute_flat_right_menu())},compute_right_menu_item_class:function(t){var e=!1,r=this.current_selected_right_menu,n=r.t1,i=r.t2;return i&&t.parent&&(e=t.value==i&&t.parent.value==n),i||(e=t.value==n),e?"bg-primary text-white":"bg=white text-black"},minimize:function(){0},maximize:function(){},closeApp:function(){0}})},v=q,k=Object(f["a"])(v,n,i,!1,null,null,null);e["default"]=k.exports}}]);
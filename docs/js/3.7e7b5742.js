(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{f241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh Lpr lFf"}},[a("q-header",{staticClass:"bg-primary text-white",staticStyle:{"border-bottom":"1px solid #ccc"}},["electron"===t.current_mode?a("q-bar",{staticClass:"q-electron-drag ",staticStyle:{height:"36px","line-height":"36px"}},[a("q-icon",{attrs:{name:"img:logo.png",size:"30px"}}),a("q-btn",{staticStyle:{"font-size":"14px"},attrs:{flat:"",label:"菜单"},on:{click:function(e){t.drawer=!t.drawer}}}),a("div",{staticClass:"fsz12 ",staticStyle:{"font-size":"14px"}},[t._v("---------          "+t._s(t.title)+" ---------"+t._s(t.last_update_time))]),a("q-space"),a("q-btn",{attrs:{dense:"",flat:"",icon:"minimize"},on:{click:t.minimize}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square"},on:{click:t.maximize}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:t.closeApp}})],1):t._e(),"electron"!==t.current_mode?a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}}),a("q-toolbar-title",[t._v(t._s(t.title))]),a("q-space",{staticClass:"desktop-only"}),a("div",{staticClass:"desktop-only"},[t._v(t._s(t.last_update_time))])],1):t._e()],1),a("q-drawer",{staticClass:"hide-scrollbar",attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3 hide-scrollbar "},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit hide-scrollbar"},t._l(t.menu,(function(e,n){return a("q-list",{key:n,staticClass:"hide-scrollbar"},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:e.name==t.current_menu?"bg-primary text-white":"bg=white text-black",attrs:{clickable:""},on:{click:function(a){return t.go_to_router(e)}}},[a("q-item-section",[t._v("\n             "+t._s(n+1+"."+e.name)+"\n           ")])],1)],1)})),1)],1),a("q-page-container",{class:t.$q.platform.is.desktop?"q-pl-md":""},[a("router-view",{staticClass:"q-pl-md"}),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)],1)},r=[],o=(a("b0c0"),a("9523")),s=a.n(o),i=[{name:"web",text:"web"},{name:"ios_android",text:"ios_android"},{name:"node",text:"node"},{name:"seo",text:"seo"},{path:"c",name:"c"},{path:"docker",name:"docker"},{path:"go",name:"go"},{path:"java",name:"java"},{path:"k8s",name:"k8s"},{path:"linux",name:"linux"},{path:"mba",name:"mba"},{path:"operation",name:"operation"},{path:"os",name:"os"},{path:"php",name:"php"},{path:"python",name:"python"},{path:"sql",name:"sql"},{path:"tensorflow",name:"tensorflow"},{path:"other",name:"other"},{path:"bookshelf",name:"bookshelf"}],l=a("b178"),c=1618220778391,m=l["s"].formatDate(c,"YYYY-MM-DD     HH:mm:ss"),p={name:"MyLayout",data:function(){var t;return t={title:"我生待明日，万事成蹉跎。"},s()(t,"title","锦绣年华"),s()(t,"last_update_time",m),s()(t,"drawer",!1),s()(t,"menu",i),s()(t,"current_menu","note"),s()(t,"tab","note"),s()(t,"tabs",[1,2,3,4,5,6,7,8]),s()(t,"leftDrawerOpen",!1),s()(t,"current_mode","spa"),t},created:function(){this.$route.name||this.$router.push(i[0]),this.current_menu=this.$route.name},watch:{$route:function(t,e){this.current_menu=this.$route.name}},methods:{go_to_router:function(t){this.current_menu=t.name,this.$route.name!=t.name&&this.$router.push({name:t.name})},minimize:function(){0},maximize:function(){},closeApp:function(){0}}},u=p,d=a("2877"),h=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=h.exports}}]);
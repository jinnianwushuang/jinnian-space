(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}),a("q-toolbar-title",[e._v(e._s(e.title))])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},e._l(e.menu,(function(t,n){return a("q-list",{key:n},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.name==e.current_menu},on:{click:function(a){return e.go_to_router(t)}}},[a("q-item-section",[e._v("\n              "+e._s(n+1+"."+t.name)+"\n            ")])],1)],1)})),1)],1),a("q-page-container",{staticClass:"q-px-lg"},[a("router-view"),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)],1)},r=[],o=(a("7f7f"),[{name:"note",text:"note"},{name:"web",text:"web"},{name:"node",text:"node"},{name:"seo",text:"seo"},{path:"c",name:"c"},{path:"english",name:"english"},{path:"docker",name:"docker"},{path:"go",name:"go"},{path:"java",name:"java"},{path:"k8s",name:"k8s"},{path:"linux",name:"linux"},{path:"mba",name:"mba"},{path:"operation",name:"operation"},{path:"os",name:"os"},{path:"php",name:"php"},{path:"python",name:"python"},{path:"sql",name:"sql"},{path:"tensorflow",name:"tensorflow"},{path:"other",name:"other"},{path:"bookshelf",name:"bookshelf"}]),s={name:"MyLayout",data:function(){return{title:"我生待明日，万事成蹉跎。",drawer:!1,menu:o,current_menu:"note",tab:"note",tabs:[1,2,3,4,5,6,7,8],leftDrawerOpen:!1}},created:function(){this.go_to_router({name:"note"})},methods:{go_to_router:function(e){this.current_menu=e.name,this.$router.push({name:e.name})}}},i=s,l=a("2877"),c=Object(l["a"])(i,n,r,!1,null,null,null);t["default"]=c.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22cafe"],{f3fa:function(n,t,a){"use strict";a.r(t);var c=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},o=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("h4",[n._v("Mac电脑Tomcat下载及安装(详细)")]),a("pre",[n._v("           1.打开Apache Tomcat官网,选择你需要的版本进行下载:\n地址http://tomcat.apache.org/download-70.cgi\n\n2.解压apache-tomcat-7.0.82文件,最好把他放入/Library(资源库中)\nmac寻找library资源库\n\n(1).点击finder--\x3e用户--\x3e你电脑的名字--\x3e资源库(有的也叫/Library)\n\n\n\n(2).有些苹果将library目录隐藏起来了，要进入那个目录，需要用到一定的技巧。 \n\n打开Finder，按下shift+command+g，输入“~/Library”（输入引号里面的），再按回车就到了。\n\n3.配置Tomcat\n\n(1).对目录进行权限设置：\n\n打开终端输入  sudo chmod 755 Library/tomcat/bin/*.sh  回车，设置文件的读写执行权限；(这里需要输入管理员密码)\n\n为了方便使用把这里把解压后的apache-tomcat-7.0.82重新命名为tomcat.\n\nsudo chmod 755 (你Tomcat解压的位置,可以直接拖拽放入)/bin/*.sh\n\n注释:sudo通常为系统超级管理员755 代表用户对该文件拥有读，写，执行的权限，\n同组其他人员拥有执行和读的权限，没有写的权限，其他用户的权限和同组人员权限一样。777代表，user,group ,others ,都有读写和可执行权限。\n\n(2).启动Tomcat      \n\n启动方法一:在终端中输入 sudo sh startup.sh\n\n若出现如下提示则表示安装并运行成功： \n\n\n启动方法二:在Library/tomcat/bin中找到startup.sh文件,把文件拖入到终端中回车启动\n\n\n4.验证Tomcat是否启动\n\n打开你的safari,然后在网址输入框输入http://localhost:8080/回车\n\n如果能正常打开tomcat首页，说明tomcat 配置启动成功:\n--------------------- \n\n       ")])])}],r={},e=r,s=a("2877"),i=Object(s["a"])(e,c,o,!1,null,"bc6d13e4",null);t["default"]=i.exports}}]);
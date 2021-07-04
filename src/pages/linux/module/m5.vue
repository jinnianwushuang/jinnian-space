<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/module/m5.vue
 * @Description    : 
-->
 
 
<template>
  <div class="">
<div id="content_views" class="markdown_views prism-atom-one-dark">
   
 

<blockquote> 
 <p>本文主要是Linux的入门内容，利用40张思维导图从<strong>基础、操作、实用指令、组管理和权限管理、crond任务调度、Linux磁盘分区和挂载、Linux网络环境配置、进程管理、服务管理、RPM和YUM、软件安装关键点、Shell编程共十二部分着手</strong>，从而系统的了解一下Linux（基于Centos），本文的定位是前端工程师够用、运维工程师入门。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNDQzMTBjYjU3ZGE.png" alt=""></p> 
<h2><a name="t0"></a><a name="t0"></a><a id="_6"></a>一、基础</h2> 
<blockquote> 
 <p>主要阐述了什么是Linux、主要发行版有什么、如何在自己利用VM安装自己的Linux系统、Linux树形目录结构及相关目录的用途。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNDQ3OGE2MDQwNzk.png" alt=""></p> 
<h2><a name="t1"></a><a name="t1"></a><a id="_10"></a>二、操作</h2> 
<blockquote> 
 <p>主要介绍了Xftp5、XShell工具及vi和vim编辑器的使用。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNDRhM2Y2OWFkMzI.png" alt=""></p> 
<h2><a name="t2"></a><a name="t2"></a><a id="_14"></a>三、实用指令</h2> 
<blockquote> 
 <p>主要阐述了一系列实用指令，包括：关机&amp;重启命令；用户登录和注销；用户管理；切换到指定运行级别；帮助指令；文件目录类；时间日期类；搜索查找类；压缩和解压类。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNGZjNmVhZDYyMDg.png" alt=""></p> 
<h3><a name="t3"></a><a name="t3"></a><a id="31__18"></a>3.1 关机&amp;重启命令</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNGZlNDFlOTRlMzc.png" alt=""></p> 
<h3><a name="t4"></a><a name="t4"></a><a id="32__20"></a>3.2 用户登陆和注销</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNGZmYjQ1MDcwNTE.png" alt=""></p> 
<h3><a name="t5"></a><a name="t5"></a><a id="33__22"></a>3.3 用户管理</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTAwZmJiZGU5MGU.png" alt=""></p> 
<h3><a name="t6"></a><a name="t6"></a><a id="34__24"></a>3.4 切换到指令运行级别</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTAyODdlYmFkZWU.png" alt=""></p> 
<h3><a name="t7"></a><a name="t7"></a><a id="35__26"></a>3.5 帮助指令</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTAzYzI2NGRjODk.png" alt=""></p> 
<h3><a name="t8"></a><a name="t8"></a><a id="36__28"></a>3.6 文件目录类</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTA1M2JkMzZiMzQ.png" alt=""></p> 
<h3><a name="t9"></a><a name="t9"></a><a id="37__30"></a>3.7 时间日期类</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTA3MzVkMDc2YjE.png" alt=""></p> 
<h3><a name="t10"></a><a name="t10"></a><a id="38__32"></a>3.8 搜索查找类</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTA4ODJjZDNlOGY.png" alt=""></p> 
<h3><a name="t11"></a><a name="t11"></a><a id="39__34"></a>3.9 压缩和解压类</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTA5Yzc0NTVlMDg.png" alt=""></p> 
<h2><a name="t12"></a><a name="t12"></a><a id="_36"></a>四、组管理和权限管理</h2> 
<blockquote> 
 <p>主要阐述了组管理及权限管理相关的内容。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTBmYzU1MTc5NjI.png" alt=""></p> 
<h2><a name="t13"></a><a name="t13"></a><a id="crond_40"></a>五、crond任务调度</h2> 
<blockquote> 
 <p>主要阐述了crond任务调度，使系统在某个时间执行特定的命令或程序</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTEzNzViNDc4MjA.png" alt=""></p> 
<h2><a name="t14"></a><a name="t14"></a><a id="Linux_44"></a>六、Linux磁盘分区、挂载</h2> 
<blockquote> 
 <p>主要阐述了Linux磁盘分区、挂载，使开发者能够自己增加一块硬盘</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTE1NjIwNzAwYzk.png" alt=""></p> 
<h2><a name="t15"></a><a name="t15"></a><a id="Linux_48"></a>七、Linux网络环境配置</h2> 
<blockquote> 
 <p>主要阐述了Linux网络环境配置中的自动获取IP和指定固定的IP，从而实现网络连接。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNTE3NTNiMDYxMjk.png" alt=""></p> 
<h2><a name="t16"></a><a name="t16"></a><a id="_52"></a>八、进程管理</h2> 
<blockquote> 
 <p>主要阐述了与进程管理相关的内容，包括基本概念、显示执行的进程、查看进程树、终止进程、动态监控进程、查看系统网络情况及进程状态。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWMzMmViYjE3NmY.png" alt=""></p> 
<h3><a name="t17"></a><a name="t17"></a><a id="81__56"></a>8.1 基本</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWM0OGM2NWJhNGU.png" alt=""></p> 
<h3><a name="t18"></a><a name="t18"></a><a id="82__58"></a>8.2 显示执行的进程</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWM1OTQyNmNiNDU.png" alt=""></p> 
<h3><a name="t19"></a><a name="t19"></a><a id="83__60"></a>8.3 查看进程树</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWM2ODQ0YjkxMDg.png" alt=""></p> 
<h3><a name="t20"></a><a name="t20"></a><a id="84__62"></a>8.4 终止进程</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWM3NTRmNDAyYmU.png" alt=""></p> 
<h3><a name="t21"></a><a name="t21"></a><a id="85__64"></a>8.5 动态监控进程</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWM4MzY4ZGMxM2E.png" alt=""></p> 
<h3><a name="t22"></a><a name="t22"></a><a id="86__66"></a>8.6 查看系统网络情况</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWM5MGJjY2ZkMTg.png" alt=""></p> 
<h3><a name="t23"></a><a name="t23"></a><a id="87__68"></a>8.7 进程状态</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWNhMGQxODQ0ZTM.png" alt=""></p> 
<h2><a name="t24"></a><a name="t24"></a><a id="_70"></a>九、服务管理</h2> 
<blockquote> 
 <p>主要阐述了何为服务以及与服务管理相关的一些列指令。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWQxODhjMWM1ZjE.png" alt=""></p> 
<h2><a name="t25"></a><a name="t25"></a><a id="RPMYUM_74"></a>十、RPM和YUM</h2> 
<blockquote> 
 <p>主要阐述了Linux系统中软件安装的两种方式：rpm和yum。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWQ4MDQ1YTc1YTU.png" alt=""></p> 
<h2><a name="t26"></a><a name="t26"></a><a id="_78"></a>十一、软件安装关键点</h2> 
<blockquote> 
 <p>阐述了软件安装中需要注意的关键点：如何配置环境变量及开放对应端口。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNWRjMjQ3NDA0N2Y.png" alt=""></p> 
<h2><a name="t27"></a><a name="t27"></a><a id="Shell_82"></a>十二、Shell编程</h2> 
<blockquote> 
 <p>主要阐述与Linux操作息息相关的Shell编程中的一些基础语法。</p> 
</blockquote> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjY2MTEwYWNkYjE.png" alt=""></p> 
<h3><a name="t28"></a><a name="t28"></a><a id="121__86"></a>12.1 基本介绍</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjY3NTU4MDZhNmM.png" alt=""></p> 
<h3><a name="t29"></a><a name="t29"></a><a id="122__88"></a>12.2 基本使用</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjY4MTllNWI3N2M.png" alt=""></p> 
<h3><a name="t30"></a><a name="t30"></a><a id="123_shell_90"></a>12.3 shell的变量</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjY4ZWU4NDBiOTE.png" alt=""></p> 
<h3><a name="t31"></a><a name="t31"></a><a id="124__92"></a>12.4 注释</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjY5ZTUwMjEyN2I.png" alt=""></p> 
<h3><a name="t32"></a><a name="t32"></a><a id="125__94"></a>12.5 字符串</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjZhYzM2YWM1M2Y.png" alt=""></p> 
<h3><a name="t33"></a><a name="t33"></a><a id="126__96"></a>12.6 数组</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjZiYTI2MTNkNWM.png" alt=""></p> 
<h3><a name="t34"></a><a name="t34"></a><a id="127__98"></a>12.7 运算符</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjZjZTUwMTUyMjU.png" alt=""></p> 
<h3><a name="t35"></a><a name="t35"></a><a id="128__100"></a>12.8 条件判断</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjZkZWY4MmI1NGI.png" alt=""></p> 
<h3><a name="t36"></a><a name="t36"></a><a id="129__102"></a>12.9 流程控制</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjZlZmQ2Y2RmYmI.png" alt=""></p> 
<h3><a name="t37"></a><a name="t37"></a><a id="1210_read_104"></a>12.10 read读取控制台输入</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjZmZTI2YWYxZGI.png" alt=""></p> 
<h3><a name="t38"></a><a name="t38"></a><a id="1211__106"></a>12.11 函数</h3> 
<p><img src="img/linux/xmind-img/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC82LzIzLzE3MmRmNjcwZGFjNDhjZmI.png" alt=""></p> 


                </div>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
 
    };
  }
};
</script>

<style lang="scss" scoped></style>



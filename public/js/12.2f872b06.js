(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"1b62":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return _})),t("4de4"),t("c975");var r=t("448a"),s=t.n(r),a=["/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf","/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf"],c="linux/heima-Linux云计算",i={name:"Container",data:function(){return{prefix:c,book_options:a,book_options_all:[],show:!0,book:a[0],src:""}},created:function(){this.book_options_all=s()(this.book_options),this.src=this.$utils.compute_book_src(this.prefix+this.book)},watch:{book:function(n,e){n&&this.change_book()}},methods:{change_book:function(){console.log("this.book",this.book),this.src=this.$utils.compute_book_src(this.prefix+this.book)},filterFn:function(n,e){var t=this;e(""!==n?function(){var e=n.toLowerCase();t.book_options=t.book_options_all.filter((function(n){return n.toLowerCase().indexOf(e)>-1}))}:function(){t.book_options=t.book_options_all})}}},o=t("ded3"),b=t.n(o),v=t("2f62"),_={data:function(){return{tab:"",tab_level:1,is_active:!1}},computed:b()({},Object(v["c"])(["get_current_selected_right_menu"])),created:function(){this.is_active=!0,this.fix_right_menu_config()},watch:{tab:function(){this.tab||this.fix_right_menu_config()},get_current_selected_right_menu:function(n,e){this.tab=this.get_current_selected_right_menu["t"+this.tab_level]}},methods:b()(b()({},Object(v["b"])(["set_right_menu_fix_config"])),{},{fix_right_menu_config:function(){this.set_right_menu_fix_config({tl:this.tab_level,tabs:this.tabs||[],tv:this.tab||this.tabs[0]["value"]})}}),beforeDestroy:function(){this.is_active=!1}}},"1c0f":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t(""+n.tab,{tag:"component"})],1)},s=[],a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t(""+n.tab,{tag:"component"})],1)},c=[],i=function(){var n=this;n.$createElement;return n._self._c,n._m(0)},o=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("p",[n._v("\n\nCMD命令：开始－>运行－>键入cmd或command（在命令行里可以看到系统版本、文件系统版本）"),t("br"),n._v("\nchcp 修改默认字符集"),t("br"),n._v("\nchcp 936默认中文"),t("br"),n._v("\nchcp 65001"),t("br"),n._v("\n1. appwiz.cpl：程序和功能\n2. calc：启动计算器\n"),t("br"),t("br"),n._v("\n5. chkdsk.exe：Chkdsk磁盘检查（管理员身份运行命令提示符）\n"),t("br"),n._v("\n6. cleanmgr: 打开磁盘清理工具\n\n\n9. cmd.exe：CMD命令提示符\n10. 自动关机命令\n 　 Shutdown -s -t 600：表示600秒后自动关机\n 　 shutdown -a ：可取消定时关机\n 　 Shutdown -r -t 600：表示600秒后自动重启\n 　"),t("br"),t("br"),n._v("\n12. CompMgmtLauncher：计算机管理\n13. compmgmt.msc：计算机管理\n14. credwiz：备份或还原储存的用户名和密码\n"),t("br"),n._v("\n16. control：控制面版\n17. dcomcnfg：打开系统组件服务\n19. devmgmt.msc：设备管理器\n20. desk.cpl：屏幕分辨率\n21. dfrgui：优化驱动器   Windows 7→dfrg.msc：磁盘碎片整理程序\n22. dialer：电话拨号程序\n23. diskmgmt.msc：磁盘管理\n24. dvdplay：DVD播放器\n25. dxdiag：检查DirectX信息\n26. eudcedit：造字程序\n27. eventvwr：事件查看器\n28. explorer：打开资源管理器\n29. Firewall.cpl：Windows防火墙\n"),t("br"),n._v("\n31. fsmgmt.msc：共享文件夹管理器\n32. gpedit.msc：组策略\n33. hdwwiz.cpl：设备管理器\n34. inetcpl.cpl：Internet属性\n35. intl.cpl：区域\n36. iexpress：木马捆绑工具，系统自带\n37. joy.cpl：游戏控制器\n38. logoff：注销命令\n39. lusrmgr.msc：本地用户和组\n40. lpksetup：语言包安装/删除向导，安装向导会提示下载语言包\n41. lusrmgr.msc：本机用户和组\n42. main.cpl：鼠标属性\n43. mmsys.cpl：声音\n\n45. mem.exe：显示内存使用情况（如果直接运行无效，可以先管理员身份运行命令提示符，在命令提示符里输入mem.exe>d:a.txt 即可打开d盘查看a.txt，里面的就是内存使用情况了。当然什么盘什么文件名可自己决定。）\n"),t("br"),t("br"),t("br"),n._v("\n47. mmc：打开控制台\n48. mobsync：同步命令\n\n 50. Msconfig.exe：系统配置实用程序\n51. msdt：微软支持诊断工具\n52. msinfo32：系统信息\n53. mspaint：画图\n54. Msra：Windows远程协助\n55. mstsc：远程桌面连接\n56. NAPCLCFG.MSC：客户端配置\n57. ncpa.cpl：网络连接\n58. narrator：屏幕“讲述人”\n59. Netplwiz：高级用户帐户控制面板，设置登陆安全相关的选项\n60. netstat : an(TC)命令检查接口\n61. notepad：打开记事本\n62. Nslookup：IP地址侦测器\n63. odbcad32：ODBC数据源管理器\n"),t("br"),n._v("\n64. OptionalFeatures：打开“打开或关闭Windows功能”对话框\n"),t("br"),t("br"),n._v("\n65. osk：打开屏幕键盘\n66. perfmon.msc：计算机性能监测器\n67. perfmon：计算机性能监测器\n68. PowerShell：提供强大远程处理能力\n69. printmanagement.msc：打印管理\n70. powercfg.cpl：电源选项\n71. psr：问题步骤记录器\n72. Rasphone：网络连接\n73. Recdisc：创建系统修复光盘\n74. Resmon：资源监视器\n75. Rstrui：系统还原\n76. regedit.exe：注册表\n77. regedt32：注册表编辑器\n78. rsop.msc：组策略结果集\n79. sdclt：备份状态与配置，就是查看系统是否已备份\n80. secpol.msc：本地安全策略\n81. services.msc：本地服务设置\n82. sfc /scannow：扫描错误并复原/windows文件保护\n83. sfc.exe：系统文件检查器\n84. shrpubw：创建共享文件夹\n85. sigverif：文件签名验证程序\n86. slui：Windows激活，查看系统激活信息\n87. slmgr.vbs -dlv ：显示详细的许可证信息\n 　 slmgr.vbs -dli ：显示许可证信息\n 　 slmgr.vbs -xpr ：当前许可证截止日期\n 　 slmgr.vbs -dti ：显示安装ID 以进行脱机激\n 　 slmgr.vbs -ipk ：(Product Key)安装产品密钥\n 　 slmgr.vbs -ato ：激活Windows\n　 slmgr.vbs -cpky ：从注册表中清除产品密钥（防止泄露引起的攻击）\n 　 slmgr.vbs -ilc ：(License file)安装许可证\n 　 slmgr.vbs -upk ：卸载产品密钥\n 　 slmgr.vbs -skms ：(name[ort] )批量授权\n88. snippingtool：截图工具，支持无规则截图\n89. soundrecorder：录音机，没有录音时间的限制\n90. StikyNot：便笺\n91. sysdm.cpl：系统属性\n92. sysedit：系统配置编辑器\n93. syskey：系统加密，一旦加密就不能解开，保护系统的双重密码\n94. taskmgr：任务管理器（旧版）\n95. TM任务管理器（新版）\n96. taskschd.msc：任务计划程序\n97. timedate.cpl：日期和时间\n98. UserAccountControlSettings用户账户控制设置\n99. utilman：辅助工具管理器\n100. wf.msc：高级安全Windows防火墙\n101. WFS：Windows传真和扫描\n102. wiaacmgr：扫描仪和照相机向导\n103. winver：关于Windows\n 104. wmimgmt.msc：打开windows管理体系结构(WMI)\n 105. write：写字板\n106. wscui.cpl：操作中心\n107. wscript：windows脚本宿主设置\n108. wuapp：Windows更新"),t("br"),t("br"),n._v("\n1. gpedit.msc-----组策略"),t("br"),n._v("\n\n2. sndrec32-------录音机"),t("br"),n._v("\n\n3. Nslookup-------IP地址侦测器 ，是一个 监测网络中 DNS 服务器是否能正确实现域名解析的命令行工具。 它在 Windows NT/2000/XP 中均可使用 , 但在 Windows 98 中却没有集成这一个工具。"),t("br"),n._v("\n\n4. explorer-------打开资源管理器\n\n5. logoff---------注销命令"),t("br"),n._v("\n\n6. shutdown-------60秒倒计时关机命令"),t("br"),n._v("\n\n7. lusrmgr.msc----本机用户和组"),t("br"),n._v("\n\n8. services.msc---本地服务设置"),t("br"),n._v("\n\n9. oobe/msoobe /a----检查XP是否激活"),t("br"),n._v("\n\n10. notepad--------打开记事本\n\n\n"),t("br"),t("br"),t("br"),t("br"),n._v("\n11. cleanmgr-------垃圾整理"),t("br"),n._v("\n\n12. net start messenger----开始信使服务"),t("br"),n._v("\n\n13. compmgmt.msc---计算机管理"),t("br"),n._v("\n\n14. net stop messenger-----停止信使服务"),t("br"),n._v("\n\n15. conf-----------启动netmeeting"),t("br"),n._v("\n\n16. dvdplay--------DVD播放器"),t("br"),n._v("\n\n17. charmap--------启动字符映射表"),t("br"),n._v("\n\n18. diskmgmt.msc---磁盘管理实用程序"),t("br"),n._v("\n\n19. calc-----------启动计算器"),t("br"),n._v("\n\n20. dfrg.msc-------磁盘碎片整理程序"),t("br"),n._v("\n\n21. chkdsk.exe-----Chkdsk磁盘检查"),t("br"),n._v("\n\n22. devmgmt.msc--- 设备管理器\n\n23. regsvr32 /u *.dll----停止dll文件运行"),t("br"),n._v("\n\n24. drwtsn32------ 系统医生"),t("br"),n._v("\n\n25. rononce -p----15秒关机"),t("br"),n._v("\n\n26. dxdiag---------检查DirectX信息"),t("br"),n._v("\n\n27. regedt32-------注册表编辑器\n\n28. Msconfig.exe---系统配置实用程序"),t("br"),n._v("\n\n29. rsop.msc-------组策略结果集"),t("br"),n._v("\n\n30. mem.exe--------显示内存使用情况"),t("br"),n._v("\n\n31. regedit.exe----注册表"),t("br"),n._v("\n\n32. winchat--------XP自带局域网聊天"),t("br"),n._v("\n\n33. progman--------程序管理器"),t("br"),n._v("\n\n34. winmsd---------系统信息"),t("br"),n._v("\n\n35. perfmon.msc----计算机性能监测程序"),t("br"),n._v("\n\n36. winver---------检查Windows版本"),t("br"),n._v("\n\n37. sfc /scannow-----扫描错误并复原"),t("br"),n._v("\n\n38. taskmgr-----任务管理器（2000/xp/2003"),t("br"),n._v("\n\n39. winver---------检查Windows版本"),t("br"),n._v("\n\n40. wmimgmt.msc----打开windows管理体系结构(WMI)"),t("br"),n._v("\n\n41. wupdmgr--------windows更新程序"),t("br"),n._v("\n\n42. wscript--------windows脚本宿主设置"),t("br"),n._v("\n\n43. write----------写字板"),t("br"),n._v("\n\n44. winmsd---------系统信息"),t("br"),n._v("\n\n45. wiaacmgr-------扫描仪和照相机向导"),t("br"),n._v("\n\n46. winchat--------XP自带局域网聊天"),t("br"),n._v("\n\n47. mem.exe--------显示内存使用情况"),t("br"),n._v("\n\n48. Msconfig.exe---系统配置实用程序"),t("br"),n._v("\n\n49. mplayer2-------简易widnows media player"),t("br"),n._v("\n\n50. mspaint--------画图板"),t("br"),n._v("\n\n51. mstsc----------远程桌面连接"),t("br"),n._v("\n\n52. mplayer2-------媒体播放机"),t("br"),n._v("\n\n53. magnify--------放大镜实用程序"),t("br"),n._v("\n\n54. mmc------------打开控制台"),t("br"),n._v("\n\n55. mobsync--------同步命令"),t("br"),n._v("\n\n56. dxdiag---------检查DirectX信息"),t("br"),n._v("\n\n57. iexpress-------木马捆绑工具，系统自带 58. fsmgmt.msc-----共享文件夹管理器"),t("br"),n._v("\n\n59. utilman--------辅助工具管理器"),t("br"),n._v("\n\n60. diskmgmt.msc---磁盘管理实用程序"),t("br"),n._v("\n\n61. dcomcnfg-------打开系统组件服务"),t("br"),n._v("\n\n62. ddeshare-------打开DDE共享设置"),t("br"),n._v("\n\n110. osk------------打开屏幕键盘\n\n111. odbcad32-------ODBC数据源管理器"),t("br"),n._v("\n\n112. oobe/msoobe /a----检查XP是否激活 114. logoff---------注销命令"),t("br"),n._v("\n\n66. notepad--------打开记事本"),t("br"),n._v("\n\n67. nslookup-------网络管理的工具向导"),t("br"),n._v("\n\n68. ntbackup-------系统备份和还原"),t("br"),n._v("\n\n69. narrator-------屏幕“讲述人”"),t("br"),n._v("\n\n70. ntmsmgr.msc----移动存储管理器"),t("br"),n._v("\n\n71. ntmsoprq.msc---移动存储管理员操作请求"),t("br"),n._v("\n\n72. netstat -an----(TC)命令检查接口"),t("br"),n._v("\n\n73. syncapp--------创建一个公文包"),t("br"),n._v("\n\n74. sysedit--------系统配置编辑器"),t("br"),n._v("\n\n75. sigverif-------文件签名验证程序"),t("br"),n._v("\n\n76. ciadv.msc------索引服务程序"),t("br"),n._v("\n\n77. shrpubw--------创建共享文件夹"),t("br"),n._v("\n\n78. secpol.msc-----本地安全策略"),t("br"),n._v("\n\n79. syskey---------系统加密，一旦加密就不能解开，保护windows xp系统的双重密码"),t("br"),n._v("\n\n80. services.msc---本地服务设置"),t("br"),n._v("\n\n81. Sndvol32-------音量控制程序"),t("br"),n._v("\n\n82. sfc.exe--------系统文件检查器"),t("br"),n._v("\n\n83. sfc /scannow---windows文件保护"),t("br"),n._v("\n\n84. ciadv.msc------索引服务程序"),t("br"),n._v("\n\n85. tourstart------xp简介（安装完成后出现的漫游xp程序）"),t("br"),n._v("\n\n86. taskmgr--------任务管理器"),t("br"),n._v("\n\n87. eventvwr-------事件查看器"),t("br"),n._v("\n\n88. eudcedit-------造字程序"),t("br"),n._v("\n\n89. compmgmt.msc---计算机管理"),t("br"),n._v("\n\n90. packager-------对象包装程序"),t("br"),n._v("\n\n91. perfmon.msc----计算机性能监测程序"),t("br"),n._v("\n\n92. charmap--------启动字符映射表"),t("br"),n._v("\n\n93. cliconfg-------SQL SERVER 客户端网络实用程序"),t("br"),n._v("\n\n94. Clipbrd--------剪贴板查看器"),t("br"),n._v("\n\n95. conf-----------启动netmeeting"),t("br"),n._v("\n\n96. certmgr.msc----证书管理实用程序"),t("br"),n._v("\n\n97. regsvr32 /u *.dll----停止dll文件运行"),t("br"),n._v("\n\n98. regsvr32 /u zipfldr.dll------取消ZIP支持"),t("br"),n._v("\n\n99. cmd.exe--------CMD命令提示符"),t("br"),n._v("\n\n100. chkdsk.exe-----Chkdsk磁盘检查"),t("br"),n._v("\n\n1.磁盘操作，fdisk 隐含 参数 /mbr 重建主引导记录fdisk /mbr 重建主引导记录fdisk 在DOS7.0以后增加了/cmbr参数，可在挂接多个物理硬盘时，重建排序在后面的硬盘的主引导记录，例如：fdisk /cmbr 2，可重写第二个硬盘的主引导记录。（在使用时要十分小心，避免把好的硬盘引导记录损坏）format 参数： /q 快速格式化 /u 不可恢复 /autotest 不提示 /s 创建 MS-DOS 引导盘 format c: /q /u /autotest"),t("br"),n._v("\n2.目录操作DIR [目录名或文件名] [/S][/W][/P][/A] 列出目录 参数: /s 查找子目录/w 只显示文件名 /p 分页/a 显示隐藏文件 DIR format.exe /s查找该盘的format.exe文件并报告位置MD (MKDIR) [目录名] 创建目录 MKDIR HELLOWORLD 创建HELLOWORLD目录\n　　CD (CHDIR) [目录名] PS:可以使用相对目录或绝对目录 进入目录 CD AA 进入当前文件夹下的AA目录,cd .. 进入上一个文件夹cd \\返回根目录;cd c:\\windows 进入c:\\windows文件夹RD ( RMDIR) [目录名] 删除目录 RD HELLOWORLD 删除HELLOWORLD目录"),t("br"),n._v("\n3.文件操作删除目录及其文件： rmdir [目录名或文件名] [/S][/W][/P][/A] 。例 rmdir c:\\qqdownload/s 删除C盘的qqdownload目录。del [目录名或文件名] [/f][/s][/q] 删除 参数:/f 删除只读文件/s 删除该目录及其下的所有内容 /q 删除前不确认del c:\\del /s /q 自动删除c盘的del目录。copy [源文件或目录] [目标目录] 复制文件 copy d:\\pwin98\\*.* c:\\presetup 将d盘的pwin98的所有文件复制到c盘的presetup下。attrib [参数][源文件或目录] 文件属性操作命令，attrib命令可以列出或修改磁盘上文件的属性，文件属性包括文档（A）、只读(R)、隐藏(H)、系统(S)，例如：attrib -h -r -s io.sys 执行这一命令后，将把DOS系统文件io.sys文件的只读、隐藏、系统属性去掉，这时将可以直接通过dir命令看到io.sys文件。attrib +h +r +s autoexec.bat将为自动批处理文件增加以上属性。"),t("br"),n._v("\n4.内存操作debug 调试内存 参数 -w [文件名] 写入二进制文件 -o [地址1] [地址2] 输出内存 -q 退出 exp:o 70 10[return] o 71 01[return] 01[return] q[return] DOS下通过写70h/71h PORT改变BIOS密码在CMOS中存放的对应位置的值,用以清除AWARD BIOS密码.debug 还可以破解硬盘保护卡等,但只可以在纯DOS下用。"),t("br"),n._v("\n5.分区操作给磁盘分区，一般都会分成四个区，磁盘分区由主分区、扩展分区、逻辑分区组成。PQ和Acronis Disk Director这两个工具都可以在不丢失数据的情况下对分区进行调整大小，以及合并等操作，XP系统的话你用PQ，WIN7系统的话用Acronis Disk Director 操作基本一样，可以去网上找教程来看看，再不重装系统的情况下都能调整分区大小，但是建议你还是先备份下数据再调整，毕竟对硬盘直接进行的操作有一定的危险性。"),t("br"),n._v('\nnet use ipipc$ " " /user:" " 建立IPC空链接'),t("br"),n._v('\n\nnet use ipipc$ "密码" /user:"用户名" 建立IPC非空链接'),t("br"),n._v('\n\nnet use h: ipc$ "密码" /user:"用户名" 直接登陆后映射对方C：到本地为H:'),t("br"),n._v("\n\nnet use h: ipc$ 登陆后映射对方C：到本地为H:"),t("br"),n._v("\n\nnet use ipipc$ /del 删除IPC链接"),t("br"),n._v("\n\nnet use h: /del 删除映射对方到本地的为H:的映射"),t("br"),n._v("\n\nnet user 用户名　密码　/add 建立用户"),t("br"),n._v("\n\nnet user guest /active:yes 激活guest用户"),t("br"),n._v("\n\nnet user 查看有哪些用户"),t("br"),n._v("\n\nnet user 帐户名 查看帐户的属性"),t("br"),n._v("\n\nnet localgroup administrators 用户名 /add 把“用户”添加到管理员中使其具有管理员权限"),t("br"),n._v("\n\nnet start 查看开启了哪些服务"),t("br"),n._v("\n\nnet start 服务名　开启服务；(如:net start telnet， net start schedule)"),t("br"),n._v("\n\nnet stop 服务名 停止某服务"),t("br"),n._v("\n\nnet time 目标ip 查看对方时间"),t("br"),n._v("\n\nnet time 目标ip /set 设置本地计算机时间与“目标IP”主机的时间同步,加上参数/yes可取消确认信息"),t("br"),n._v("\n\nnet view 查看本地局域网内开启了哪些共享"),t("br"),n._v("\n\nnet view ip 查看对方局域网内开启了哪些共享"),t("br"),n._v("\n\nnet config 显示系统网络设置"),t("br"),n._v("\n\nnet logoff 断开连接的共享"),t("br"),n._v("\n\nnet pause 服务名 暂停某服务"),t("br"),n._v('\n\nnet send ip "文本信息" 向对方发信息'),t("br"),n._v("\n\nnet ver 局域网内正在使用的网络连接类型和信息"),t("br"),n._v("\n\nnet share 查看本地开启的共享"),t("br"),n._v("\n\nnet share ipc$ 开启ipc$共享"),t("br"),n._v("\n\nnet share ipc$ /del 删除ipc$共享"),t("br"),n._v("\n\nnet share c$ /del 删除C：共享"),t("br"),n._v("\n\nnet user guest 12345 用guest用户登陆后用将密码改为12345"),t("br"),n._v("\n\nnet password 密码 更改系统登陆密码"),t("br"),n._v("\n\nnetstat -a 查看开启了哪些端口,常用netstat -an"),t("br"),n._v("\n\nnetstat -n 查看端口的网络连接情况，常用netstat -an"),t("br"),n._v("\n\nnetstat -v 查看正在进行的工作"),t("br"),n._v("\n\nnetstat -p 协议名 例：netstat -p tcq/ip 查看某协议使用情况"),t("br"),n._v("\n\nnetstat -s 查看正在使用的所有协议使用情况"),t("br"),n._v("\n\nnbtstat -A ip 对方136到139其中一个端口开了的话，就可查看对方最近登陆的用户名"),t("br"),n._v("\n\ntracert -参数 ip(或计算机名) 跟踪路由（数据包），参数：“-w数字”用于设置超时间隔。"),t("br"),n._v("\n\nping ip(或域名) 向对方主机发送默认大小为32字节的数据，参数：“-l[空格]数据包大小”；“-n发送数据次数”；“-t”指一直ping。"),t("br"),n._v("\n\nping -t -l 65550 ip 死亡之ping(发送大于64K的文件并一直ping就成了死亡之ping)"),t("br"),n._v("\n\nipconfig (winipcfg) 用于windows NT及XP(windows 95 98)查看本地ip地址，ipconfig可用参数“/all”显示全部配置信息"),t("br"),n._v("\n\ntlist -t 以树行列表显示进程(为系统的附加工具，默认是没有安装的，在安装目录的Support/tools文件夹内)"),t("br"),n._v("\n\nkill -F 进程名 加-F参数后强制结束某进程(为系统的附加工具，默认是没有安装的，在安装目录的Support/tools文件夹内)"),t("br"),n._v("\n\ndel -F 文件名 加-F参数后就可删除只读文件,/AR、/AH、/AS、/AA分别表示删除只读、隐藏、系统、存档文件，"),t("br"),n._v("\n/A-R、/A-H、/A-S、/A-A表示删除除只读、隐藏、系统、存档以外的文件。例如“DEL/AR *.*”表示删除当前目录下所有只读文件，“DEL/A-S *.*”表示删除当前目录下除系统文件以外的所有文件"),t("br"),n._v("\n\ndel /S /Q 目录 或用：rmdir /s /Q 目录 /S删除目录及目录下的所有子目录和文件。同时使用参数/Q 可取消删除操作时的系统确认就直接删除。（二个命令作用相同）"),t("br"),n._v("\n\nmove 盘符路径要移动的文件名　存放移动文件的路径移动后文件名 移动文件,用参数/y将取消确认移动目录存在相同文件的提示就直接覆盖"),t("br"),n._v('\n\nfc one.txt two.txt > 3st.txt 对比二个文件并把不同之处输出到3st.txt文件中，"> "和"> >" 是重定向命令'),t("br"),n._v("\n\nat id号 开启已注册的某个计划任务"),t("br"),n._v("\n\nat /delete 停止所有计划任务，用参数/yes则不需要确认就直接停止"),t("br"),n._v("\n\nat id号 /delete 停止某个已注册的计划任务"),t("br"),n._v("\n\nat 查看所有的计划任务"),t("br"),n._v("\n\nat ip time 程序名(或一个命令) /r 在某时间运行对方某程序并重新启动计算机"),t("br"),n._v("\n\nfinger username @host 查看最近有哪些用户登陆"),t("br"),n._v("\n\ntelnet ip 端口 远和登陆服务器,默认端口为23"),t("br"),n._v("\n\nopen ip 连接到IP（属telnet登陆后的命令）"),t("br"),n._v("\n\ntelnet 在本机上直接键入telnet 将进入本机的telnet"),t("br"),n._v("\n\ncopy 路径文件名1　路径文件名2 /y 复制文件1到指定的目录为文件2，用参数/y就同时取消确认你要改写一份现存目录文件"),t("br"),n._v("\n\ncopy c:srv.exe ipadmin$ 复制本地c:srv.exe到对方的admin下"),t("br"),n._v("\n\ncopy 1st.jpg/b+2st.txt/a 3st.jpg 将2st.txt的内容藏身到1st.jpg中生成3st.jpg新的文件，注：2st.txt文件头要空三排，参数：/b指二进制文件，/a指ASCLL格式文件"),t("br"),n._v("\n\ncopy ipadmin$svv.exe c: 或:copyipadmin$*.* 复制对方admini$共享下的srv.exe文件（所有文件）至本地C："),t("br"),n._v("\n\nxcopy 要复制的文件或目录树　目标地址目录名 复制文件和目录树，用参数/Y将不提示覆盖相同文件"),t("br"),n._v("\n\n用参数/e才可连目录下的子目录一起复制到目标地址下。"),t("br"),n._v("\n\ntftp -i 自己IP(用肉机作跳板时这用肉机IP) get server.exec:server.exe 登陆后，"),t("br"),n._v("\n将“IP”的server.exe下载到目标主机c:server.exe 参数：-i指以二进制模式传送，如传送exe文件时用，如不加-i 则以ASCII模式（传送文本文件模式）进行传送"),t("br"),n._v("\n\ntftp -i 对方IP　put c:server.exe 登陆后，上传本地c:server.exe至主机"),t("br"),n._v("\n\nftp ip 端口 用于上传文件至服务器或进行文件操作，默认端口为21。bin指用二进制方式传送（可执行文件进）；默认为ASCII格式传送(文本文件时)"),t("br"),n._v("\n\nroute print 显示出IP路由，将主要显示网络地址Network addres，子网掩码Netmask，网关地址Gateway addres，接口地址Interface"),t("br"),n._v("\n\narp 查看和处理ARP缓存，ARP是名字解析的意思，负责把一个IP解析成一个物理性的MAC地址。arp -a将显示出全部信息"),t("br"),n._v("\n\nstart 程序名或命令 /max 或/min 新开一个新窗口并最大化（最小化）运行某程序或命令"),t("br"),n._v("\n\nmem 查看cpu使用情况"),t("br"),n._v("\n\nattrib 文件名(目录名) 查看某文件（目录）的属性"),t("br"),n._v("\n\nattrib 文件名 -A -R -S -H 或 +A +R +S +H 去掉(添加)某文件的 存档，只读，系统，隐藏 属性；用+则是添加为某属性"),t("br"),n._v("\n\ndir 查看文件，参数：/Q显示文件及目录属系统哪个用户，/T:C显示文件创建时间，/T:A显示文件上次被访问时间，/T:W上次被修改时间"),t("br"),n._v("\n\ndate /t 、 time /t 使用此参数即“DATE/T”、“TIME/T”将只显示当前日期和时间，而不必输入新日期和时间"),t("br"),n._v("\n\nset 指定环境变量名称=要指派给变量的字符 设置环境变量"),t("br"),n._v("\n\nset 显示当前所有的环境变量"),t("br"),n._v("\n\nset p(或其它字符) 显示出当前以字符p(或其它字符)开头的所有环境变量"),t("br"),n._v("\n\npause 暂停批处理程序，并显示出：请按任意键继续...."),t("br"),n._v("\n\nif 在批处理程序中执行条件处理（更多说明见if命令及变量）"),t("br"),n._v("\n\ngoto 标签 将cmd.exe导向到批处理程序中带标签的行（标签必须单独一行，且以冒号打头，例如：“：start”标签）"),t("br"),n._v("\n\ncall 路径批处理文件名 从批处理程序中调用另一个批处理程序 （更多说明见call /?）"),t("br"),n._v("\n\nfor 对一组文件中的每一个文件执行某个特定命令（更多说明见for命令及变量）"),t("br"),n._v("\n\necho on或off 打开或关闭echo，仅用echo不加参数则显示当前echo设置"),t("br"),n._v("\n\necho 信息 在屏幕上显示出信息"),t("br"),n._v('\n\necho 信息 >> pass.txt 将"信息"保存到pass.txt文件中'),t("br"),n._v('\n\nfindstr "Hello" aa.txt 在aa.txt文件中寻找字符串hello'),t("br"),n._v("\n\nfind 文件名 查找某文件"),t("br"),n._v("\n\ntitle 标题名字 更改CMD窗口标题名字"),t("br"),n._v("\n\ncolor 颜色值 设置cmd控制台前景和背景颜色；0=黑、1=蓝、2=绿、3=浅绿、4=红、5=紫、6=黄、7=白、8=灰、9=淡蓝、A=淡绿、B=淡浅绿、C=淡红、D=淡紫、E=淡黄、F=亮白"),t("br"),n._v("\n\nprompt 名称 更改cmd.exe的显示的命令提示符(把C:、D:统一改为：EntSky )"),t("br"),n._v("\n\nver 在DOS窗口下显示版本信息\n\nwinver 弹出一个窗口显示版本信息（内存大小、系统版本、补丁版本、计算机名）"),t("br"),n._v("\n\nformat 盘符 /FS:类型 格式化磁盘,类型:FAT、FAT32、NTFS ,例：Format D: /FS:NTFS"),t("br"),n._v("\n\nmd　目录名 创建目录"),t("br"),n._v("\n\nreplace 源文件　要替换文件的目录 替换文件"),t("br"),n._v("\n\nren 原文件名　新文件名 重命名文件名"),t("br"),n._v("\n\ntree 以树形结构显示出目录，用参数-f 将列出第个文件夹中文件名称"),t("br"),n._v("\n\ntype 文件名 显示文本文件的内容"),t("br"),n._v("\n\nmore 文件名 逐屏显示输出文件"),t("br"),n._v("\n\ndoskey 要锁定的命令=字符"),t("br"),n._v("\n\ndoskey 要解锁命令= 为DOS提供的锁定命令(编辑命令行，重新调用win2k命令，并创建宏)。如：锁定dir命令：doskey dir=entsky (不能用doskey dir=dir)；解锁：doskey dir="),t("br"),n._v("\n\ntaskmgr 调出任务管理器"),t("br"),n._v("\n\nchkdsk /F D: 检查磁盘D并显示状态报告；加参数/f并修复磁盘上的错误"),t("br"),n._v("\n\ntlntadmn telnt服务admn,键入tlntadmn选择3，再选择8,就可以更改telnet服务默认端口23为其它任何端口"),t("br"),n._v("\n\nexit 退出cmd.exe程序或目前，用参数/B则是退出当前批处理脚本而不是cmd.exe"),t("br"),n._v("\n\npath 路径可执行文件的文件名 为可执行文件设置一个路径。"),t("br"),n._v("\n\ncmd 启动一个win2K命令解释窗口。参数：/eff、/en 关闭、开启命令扩展；更我详细说明见cmd /?"),t("br"),n._v("\n\nregedit /s 注册表文件名 导入注册表；参数/S指安静模式导入，无任何提示；"),t("br"),n._v("\n\nregedit /e 注册表文件名 导出注册表"),t("br"),n._v("\n\ncacls 文件名　参数 显示或修改文件访问控制列表（ACL）——针对NTFS格式时。"),t("br"),n._v("\n参数：/D 用户名:设定拒绝某用户访问；/P 用户名:perm 替换指定用户的访问权限；"),t("br"),n._v("\n/G 用户名:perm 赋予指定用户访问权限；Perm 可以是: N 无，R 读取， W 写入， C 更改(写入)，F 完全控制；例：cacls D: est.txt /D pub 设定d: est.txt拒绝pub用户访问。"),t("br"),n._v("\n\ncacls 文件名 查看文件的访问用户权限列表"),t("br"),n._v("\n\nREM 文本内容 在批处理文件中添加注解"),t("br"),n._v("\n\nnetsh 查看或更改本地网络配置情况"),t("br"),t("br")])])}],b={},v=b,_=t("2877"),l=Object(_["a"])(v,i,o,!1,null,"789b5eac",null),m=l.exports,d=function(){var n=this;n.$createElement;return n._self._c,n._m(0)},p=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("pre",[n._v("    dir  目录 \n    cls 清屏\n    资源管理器 内  地址栏  直接输入 cmd 定位当前文件夹 目录 \n")])])}],u={},f=u,h=Object(_["a"])(f,d,p,!1,null,"0d0bc40a",null),g=h.exports,w=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},x=[],k={},y=k,D=Object(_["a"])(y,w,x,!1,null,"90f215c0",null),S=D.exports,A=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},O=[],C={},$=C,E=Object(_["a"])($,A,O,!1,null,"e4da473e",null),P=E.exports,I=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},j=[],M={},L=M,R=Object(_["a"])(L,I,j,!1,null,"639ec3a2",null),T=R.exports,W=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},F=[],H={},N=H,q=Object(_["a"])(N,W,F,!1,null,"39aaaae3",null),z=q.exports,X=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},B=[],Q={},J=Q,K=Object(_["a"])(J,X,B,!1,null,"0fb69224",null),V=K.exports,G=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},U=[],Z={},Y=Z,nn=Object(_["a"])(Y,G,U,!1,null,"347b0d36",null),en=nn.exports,tn=t("1b62"),rn={mixins:[tn["a"]],components:{m1:m,m2:g,m3:S,m4:P,m5:T,m6:z,m7:V,m8:en},data:function(){return{tab:"m1",tab_level:2,tabs:[{label:"CMD命令",value:"m1"}]}}},sn=rn,an=Object(_["a"])(sn,a,c,!1,null,"b7c93b9a",null),cn=an.exports,on=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t(""+n.tab,{tag:"component"})],1)},bn=[],vn=function(){var n=this;n.$createElement;return n._self._c,n._m(0)},_n=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("pre",[n._v("        在mac下npm install的错误处理\nsudo －s      权限问题\n\ncommand+shift+G，前往文件夹\ncommand+shift+. 显示隐藏文件\nopen ~/.bash_profile .  打开文件\nsource ~/.bash_profile   立即生效\nPATH=$PATH:~/.composer/vendor/bin  添加 path\n\n\nmac 终端 一些命令\n\nsudo －s      权限问题\ncd downloads\nmkdir  生成文件夹\ncd    进入 \ncd ../server\nls    列出当前文件夹下的文件夹\ntouch js/class/test.js   创建test 文件，并 初始化\ntouch views/index.ejs  初始化创建 入口 模板文件\n\nclear   清空 \n    ")]),t("pre",[n._v("        mac退出bash-32\n        https://blog.csdn.net/qingtian12138/article/details/68065272\n\n今天准备学Scala，配环境的时候，不知道怎么弄得，晕晕乎乎把终端root了，打开就显示bash-32，不显示当前工作路径了，输入exit也没用，打开还是bash, 搜了一下午解决方案，都不好使，咨询了大神，终于弄好了，下面记录下来。\n出现这种情况的原因是进了shell环境，我们首先检查终端是不是一打开就默认进shell环境，\n左上角打开终端的偏好设置，将shell的打开方式那一栏选命令\n\n\n然后重启终端，看看问题是不是解决了，如果还是不行，接着下一步\n输入vi ~/.bash_profile\n打开配置文件，输入i进入编辑页面，在最后一行加入\nexport PS1='[\\u@\\h \\w]\\$'\n\n然后按Esc退出编辑模式，输入大写ZZ保存退出。\n然后执行\nsource ~/.bash_profile\n重启终端，问题解决！\n\n\n其实呢，加进去的那一行是bash可识别的转义序列\nbash可识别的转义序列有下面这些：\n\\u 用户名\n\\h 主机名第一部分\n\\H 主机名全称\n\\w 当前工作目录（如 “/home/username/mywork”）\n\\W 当前工作目录的“基名 (basename)”（如 “mywork”)\n\\t 24 小时制时间\n\\T 12 小时制时间\n\\@ 带有 am/pm 的 12 小时制时间\n\\d “Sat Dec 18″ 格式的日期\n\\s shell 的名称（如 “bash”)\n\\v bash 的版本（如 2.04）\n\\V Bash 版本（包括补丁级别）\n\\n 换行符\n\\r 回车符\n\\\\ 反斜杠\n\\a ASCII 响铃字符（也可以键入 07）\n\\e ASCII 转义字符（也可以键入 33)\n这个序列应该出现在不移动光标的字符序列（如颜色转义序列）之前。它使bash能够正确计算自动换行。\n这个序列应该出现在非打印字符序列之后。\n知道了全部的转义序列，就可以对自己的终端提示符进行定制了。\n\n\n    ")])])}],ln={},mn=ln,dn=Object(_["a"])(mn,vn,_n,!1,null,"db8584be",null),pn=dn.exports,un=function(){var n=this;n.$createElement;return n._self._c,n._m(0)},fn=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h4",[n._v("Mac电脑Tomcat下载及安装(详细)")]),t("pre",[n._v("           1.打开Apache Tomcat官网,选择你需要的版本进行下载:\n地址http://tomcat.apache.org/download-70.cgi\n\n2.解压apache-tomcat-7.0.82文件,最好把他放入/Library(资源库中)\nmac寻找library资源库\n\n(1).点击finder--\x3e用户--\x3e你电脑的名字--\x3e资源库(有的也叫/Library)\n\n\n\n(2).有些苹果将library目录隐藏起来了，要进入那个目录，需要用到一定的技巧。 \n\n打开Finder，按下shift+command+g，输入“~/Library”（输入引号里面的），再按回车就到了。\n\n3.配置Tomcat\n\n(1).对目录进行权限设置：\n\n打开终端输入  sudo chmod 755 Library/tomcat/bin/*.sh  回车，设置文件的读写执行权限；(这里需要输入管理员密码)\n\n为了方便使用把这里把解压后的apache-tomcat-7.0.82重新命名为tomcat.\n\nsudo chmod 755 (你Tomcat解压的位置,可以直接拖拽放入)/bin/*.sh\n\n注释:sudo通常为系统超级管理员755 代表用户对该文件拥有读，写，执行的权限，\n同组其他人员拥有执行和读的权限，没有写的权限，其他用户的权限和同组人员权限一样。777代表，user,group ,others ,都有读写和可执行权限。\n\n(2).启动Tomcat      \n\n启动方法一:在终端中输入 sudo sh startup.sh\n\n若出现如下提示则表示安装并运行成功： \n\n\n启动方法二:在Library/tomcat/bin中找到startup.sh文件,把文件拖入到终端中回车启动\n\n\n4.验证Tomcat是否启动\n\n打开你的safari,然后在网址输入框输入http://localhost:8080/回车\n\n如果能正常打开tomcat首页，说明tomcat 配置启动成功:\n--------------------- \n\n       ")])])}],hn={},gn=hn,wn=Object(_["a"])(gn,un,fn,!1,null,"bc6d13e4",null),xn=wn.exports,kn=function(){var n=this;n.$createElement;return n._self._c,n._m(0)},yn=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("pre",[n._v('        Mac安装、配置Maven\n2017年09月16日 21:15:52 东陆之滇 阅读数：22536\n 版权声明：欢迎转载，但是请附上原文链接! https://blog.csdn.net/zixiao217/article/details/78006599\nMac下安装maven步骤如下：\n下载maven， http://maven.apache.org/download.cgi 下载 \n\n\n我们选择binary zip archive 的类型 。\n解压maven 解压下载好的maven’，将目录丢到终端命令去获取文件路径。设置path： \nvi ~/.bash_profile \n添加maven的路径，将下载好的maven资源引入path 中：\nexport M2_HOME=/Users/byronyy/Documents/zixiao217/jobsoftwares/apache-maven-3.5.0\nexport PATH=$PATH:$M2_HOME/bin\n1\n2\n使path设置生效 \n设置path后，使用以下命令使之生效： \nsource ~/.bash_profile\n查看maven配置是否生效 \n使用 man -v 命令查看mvn命令是否ok\n mvn -v\nApache Maven 3.5.0 (ff8f5e7444045639af65f6095c62210b5713f426; 2017-04-04T03:39:06+08:00)\nMaven home: /Users/byronyy/Documents/zixiao217/jobsoftwares/apache-maven-3.5.0\nJava version: 1.8.0_144, vendor: Oracle Corporation\nJava home: /Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home/jre\nDefault locale: zh_CN, platform encoding: UTF-8\nOS name: "mac os x", version: "10.12.6", arch: "x86_64", family: "mac"\n1\n2\n3\n4\n5\n6\n7\n我们看到maven安装并设置ok了。接下来可以使用maven构建应用了。\n')])])}],Dn={},Sn=Dn,An=Object(_["a"])(Sn,kn,yn,!1,null,"f6c9236a",null),On=An.exports,Cn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},$n=[],En={},Pn=En,In=Object(_["a"])(Pn,Cn,$n,!1,null,"4942b3d4",null),jn=In.exports,Mn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},Ln=[],Rn={},Tn=Rn,Wn=Object(_["a"])(Tn,Mn,Ln,!1,null,"1f4e9b15",null),Fn=Wn.exports,Hn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},Nn=[],qn={},zn=qn,Xn=Object(_["a"])(zn,Hn,Nn,!1,null,"154afb54",null),Bn=Xn.exports,Qn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},Jn=[],Kn={},Vn=Kn,Gn=Object(_["a"])(Vn,Qn,Jn,!1,null,"69332cd2",null),Un=Gn.exports,Zn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n    1\n")])},Yn=[],ne={},ee=ne,te=Object(_["a"])(ee,Zn,Yn,!1,null,"bd1b5e50",null),re=te.exports,se={mixins:[tn["a"]],components:{m1:pn,m2:xn,m3:On,m4:jn,m5:Fn,m6:Bn,m7:Un,m8:re},data:function(){return{tab:"m1",tab_level:2,tabs:[{label:"基本",value:"m1"},{label:"基本",value:"m2"},{label:"基本",value:"m3"},{label:"基本",value:"m4"},{label:"基本",value:"m5"},{label:"基本",value:"m6"},{label:"基本",value:"m7"},{label:"基本",value:"m8"}]}}},ae=se,ce=Object(_["a"])(ae,on,bn,!1,null,"bc1b338e",null),ie=ce.exports,oe={mixins:[tn["a"]],components:{win:cn,mac:ie},data:function(){return{tab_level:1,tab:"win",tabs:[{label:"win",value:"win"},{label:"mac",value:"mac"}]}}},be=oe,ve=Object(_["a"])(be,r,s,!1,null,"0906d96d",null);e["default"]=ve.exports}}]);
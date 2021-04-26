<!--
 * @Date           : 2021-01-30 02:07:31
 * @FilePath       : /jinnian-space/src/pages/linux/module/m1.vue
 * @Description    : 
-->
<template>
    <div>
         <table width="944" border="0" cellpadding="0" cellspacing="0" style='width:708.00pt;border-collapse:collapse;table-layout:fixed;'>
   <col width="93" class="xl65" style='mso-width-source:userset;mso-width-alt:2976;'/>
   <col width="98" class="xl65" style='mso-width-source:userset;mso-width-alt:3136;'/>
   <col width="221" class="xl65" style='mso-width-source:userset;mso-width-alt:7072;'/>
   <col width="144" class="xl65" style='mso-width-source:userset;mso-width-alt:4608;'/>
   <col width="388" class="xl65" style='mso-width-source:userset;mso-width-alt:12416;'/>
   <col width="72" span="16379" class="xl65" style='mso-width-source:userset;mso-width-alt:2304;'/>
   <tr height="19" class="xl65" style='height:14.25pt;'>
    <td class="xl66" height="19" width="93" style='height:14.25pt;width:69.75pt;' x:str>主题</td>
    <td class="xl67" width="98" style='width:73.50pt;' x:str>相关命令</td>
    <td class="xl67" width="221" style='width:165.75pt;' x:str>作用</td>
    <td class="xl67" width="144" style='width:108.00pt;' x:str>常用参数</td>
    <td class="xl68" width="388" style='width:291.00pt;' x:str>备注</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl69" height="234" rowspan="6" style='height:175.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>开关机</td>
    <td class="xl70" x:str>shutdown</td>
    <td class="xl70" x:str>关机或重启</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-r 重启<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-h 关机<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-k 警告<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-c 取消</td>
    <td class="xl72" x:str>shutdown -r now<br/>shutdown -h now<br/>shutdown -r +1<br/>shutdown -r 11:30</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>reboot</td>
    <td class="xl70" x:str>重启</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>r<font class="font1">eboot</font></td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl70" x:str>init</td>
    <td class="xl70" x:str>运行级别</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>0 关机<br/><span style='mso-spacerun:yes;'>&nbsp;</span>3 命令行模式<br/><span style='mso-spacerun:yes;'>&nbsp;</span>5 图形界面<br/><span style='mso-spacerun:yes;'>&nbsp;</span>6 重启</td>
    <td class="xl74" x:str>init 0</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>halt</td>
    <td class="xl70" x:str>硬件关机</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>h<font class="font1">alt</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>poweroff</td>
    <td class="xl70" x:str>硬件关机</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-f 强行关机</td>
    <td class="xl75" x:str>p<font class="font1">oweroff</font><font class="font1"><br/>poweroff -f</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl76" x:str>s<font class="font1">ync</font></td>
    <td class="xl76" x:str>将内存中数据回填到硬盘</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>s<font class="font1">ync;sync</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl69" height="36" style='height:27.00pt;' x:str>启动X-Windows</td>
    <td class="xl70" x:str>startx</td>
    <td class="xl70" x:str>进入X-Window</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>进入X<font class="font1">-Windows后可以用logout注销回到命令行</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl77" height="180" rowspan="3" style='height:135.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>日期/时间</td>
    <td class="xl70" x:str>cal</td>
    <td class="xl70" x:str>日历</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>cal 2011<br/>cal 03 2011</td>
   </tr>
   <tr height="108" class="xl65" style='height:81.00pt;'>
    <td class="xl70" x:str>date</td>
    <td class="xl70" x:str>日期</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-s 修改日期<br/><span style='mso-spacerun:yes;'>&nbsp;</span></td>
    <td class="xl72" x:str>date +%Y/%m/%d 按指定格式显示日期<br/>date -s 07/13/2011<br/>date -s 11:55:00<br/>clock --systohc 将时间保存到硬件<br/>date 071610512011 月日时分年<br/>hwclock -w 写入主板芯片</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl76" x:str>t<font class="font1">ime</font></td>
    <td class="xl76" x:str>计算某个命令执行所耗费时间</td>
    <td class="xl71"></td>
    <td class="xl75" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>time sh myshell.sh<span style='mso-spacerun:yes;'>&nbsp; </span>运行myshell.sh这个脚本所花的时间</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="18" style='height:13.50pt;' x:str>公告</td>
    <td class="xl70" x:str>wall</td>
    <td class="xl70" x:str>广播</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>w<font class="font1">all hello</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="18" style='height:13.50pt;' x:str>清屏</td>
    <td class="xl70" x:str>clear</td>
    <td class="xl70" x:str>清屏</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>c<font class="font1">lear</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="108" rowspan="6" style='height:81.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>帮助</td>
    <td class="xl80" x:str>whatis</td>
    <td class="xl70" x:str>命令介绍</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>w<font class="font1">hatis ls</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>apropos</td>
    <td class="xl70" x:str>帮助一览</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>help</td>
    <td class="xl70" x:str>帮助</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>help cd</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str="'--help">--help</td>
    <td class="xl70" x:str>帮助</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>l<font class="font1">s --help</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>man</td>
    <td class="xl70" x:str>参考手册</td>
    <td class="xl70" x:str>可以像在vi里一样使<span style='display:none;'>用斜杠来查找字符串</span></td>
    <td class="xl74" x:str>man ls | more</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>info</td>
    <td class="xl70" x:str>相关信息</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>i<font class="font1">nfo ls</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="54" rowspan="2" style='height:40.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>系统设定</td>
    <td class="xl70" x:str>setup</td>
    <td class="xl70" x:str>系统设定工具</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>修改/etc/sysconfig的内容</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl76" x:str>l<font class="font1">ocale</font></td>
    <td class="xl76" x:str>显示语系</td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-a 显示所有支持的语系</font></td>
    <td class="xl75" x:str>locale -a<br/>cat /etc/sysconfig/i18n</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl69" height="234" rowspan="6" style='height:175.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>网络命令</td>
    <td class="xl80" x:str>ifconfig</td>
    <td class="xl71" x:str>查看IP<br/>设置IP<br/>启用网卡<br/>禁用网卡</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>ifconfig<br/>ifconfig eth0 172.168.0.201 netmask 255.255.0.0<br/><font class="font1">ifconfig eth0 </font><font class="font1">up</font><font class="font1"><br/>ifconfig eth0 </font><font class="font1">down</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl80" x:str>ifup</td>
    <td class="xl70" x:str>启用网卡</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>ifup eth0</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl80" x:str>ifdown</td>
    <td class="xl70" x:str>禁用网卡</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>ifdown eth0</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>route</td>
    <td class="xl70" x:str>路由</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="90" class="xl65" style='height:67.50pt;'>
    <td class="xl70" x:str>netstat</td>
    <td class="xl70" x:str>显示Tcp/IP网络状态</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-a 显示所有的socket<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-n 以IP地址显示<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-p 显示进程号<br/></td>
    <td class="xl73" x:str>n<font class="font1">etstat -na</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>netconfig</td>
    <td class="xl70" x:str>配置网络</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>修改的内容实际在 /etc/sysconfig/network-scripts 中</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="216" rowspan="12" style='height:162.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>系统信息查询</td>
    <td class="xl70" x:str>whoami</td>
    <td class="xl70" x:str>查看自己是谁</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>who am i</td>
    <td class="xl70" x:str>查看自己账号及登录信息</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>通过s<font class="font1">u可以看到whoami和who am i的不同</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>who</td>
    <td class="xl70" x:str>查看当前系统在线用户</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>w<font class="font1">ho</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>w</td>
    <td class="xl70" x:str>查看当前系统在线用户</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>who</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl80" x:str>last</td>
    <td class="xl70" x:str>查看这个月的用户登录信息</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>l<font class="font1">ast</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>hostname</td>
    <td class="xl70" x:str>查看自己的主机名</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>h<font class="font1">ostname</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>uname</td>
    <td class="xl70" x:str>列出系统信息</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-a 查询所有</td>
    <td class="xl73" x:str>u<font class="font1">name -a</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>dmesg</td>
    <td class="xl70" x:str>查看开机启动信息</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>d<font class="font1">mesg</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>uptime</td>
    <td class="xl70" x:str>查看开机时长</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>u<font class="font1">ptime</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl80" x:str>id</td>
    <td class="xl70" x:str>查看自己及所属的组的信息</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>i<font class="font1">d</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>finger</td>
    <td class="xl76" x:str>查看用户信息</td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-s 完整列出</td>
    <td class="xl73" x:str>f<font class="font1">inger -s username</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>groups</td>
    <td class="xl70" x:str>查看自己属于哪些组</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>groups root</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl69" height="36" style='height:27.00pt;' x:str>查看历史命令</td>
    <td class="xl70" x:str>history</td>
    <td class="xl70" x:str>历史命令</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>h<font class="font1">istory | tail </font><font class="font1">-</font><font class="font1">10<br/>可以用!n执行第n条历史，!!执行最后一条命令</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="324" rowspan="12" style='height:243.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>账号管理</td>
    <td class="xl70" x:str>newgrp</td>
    <td class="xl70" x:str>登录另一个组</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>类似login动作</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>groupadd</td>
    <td class="xl76" x:str>添加组（在/etc/group）</td>
    <td class="xl70"></td>
    <td class="xl75" x:str>groupadd testing<span style='mso-spacerun:yes;'>&nbsp;</span></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>groupdel</td>
    <td class="xl70" x:str>删除组</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>groupdel test</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>groupmod</td>
    <td class="xl70" x:str>修改组</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>groupmod -n test testing</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>gpasswd</td>
    <td class="xl70" x:str>修改组的密码</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>useradd</td>
    <td class="xl70" x:str>添加用户</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-g</td>
    <td class="xl73" x:str>u<font class="font1">seradd zhangsan</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>userdel</td>
    <td class="xl70" x:str>删除用户</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-r 连用户主目录一<span style='display:none;'>起删除</span></td>
    <td class="xl73" x:str>u<font class="font1">serdel -r zhangsan</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>usermod</td>
    <td class="xl70" x:str>编辑用户</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-g 修改所属组<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-d 修改主目录</td>
    <td class="xl72" x:str>usermod -g test51 root<br/>usermod -d /home/lisi zhangsan</td>
   </tr>
   <tr height="90" class="xl65" style='height:67.50pt;'>
    <td class="xl70" x:str>passwd</td>
    <td class="xl70" x:str>修改用户的密码</td>
    <td class="xl70"></td>
    <td class="xl75" x:str>p<font class="font1">asswd zhangsan</font><font class="font1"><br/>备注：如果忘记root密码，可以在开机时按下e进入grub编辑模式，移到kernel所在行，在最后的rhgb quiet后输入 single。按回车确定后，按下b进入single模式。然后输入passwd修改密码。</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>chsh</td>
    <td class="xl81" x:str>修改用户的默认SHELL<br/><font class="font1">查看</font><font class="font1">SHELL</font></td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-l<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-s</td>
    <td class="xl75" x:str>chsh -l 查看shell<br/>chsh root 修改root的默认shell</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>chfn</td>
    <td class="xl70" x:str>更改注释字段</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>userconf</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl69" height="324" rowspan="9" style='height:243.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>目录与路径</td>
    <td class="xl70" x:str>cd</td>
    <td class="xl70" x:str>进入到某个目录下</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>~ 进入指定用户的主目录<br/><span style='mso-spacerun:yes;'>&nbsp;</span>- 返回之前进入的目录</td>
    <td class="xl72" x:str>cd ~zhangsan<br/>cd ~<br/><font class="font1">cd<br/></font><font class="font1">cd -</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>pwd</td>
    <td class="xl70" x:str>显示当前目录的全路径</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>p<font class="font1">wd</font></td>
   </tr>
   <tr height="126" class="xl65" style='height:94.50pt;'>
    <td class="xl70" x:str>ls</td>
    <td class="xl70" x:str>列出当前目录下的文件和目录</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-l</font><font class="font1"> 详细信息</font><font class="font1"><br/></font><font class="font1"><span style='mso-spacerun:yes;'>&nbsp;</span>-m 以逗号分割</font><font class="font1"><br/><span style='mso-spacerun:yes;'>&nbsp;</span>-a</font><font class="font1"> 显示隐藏文件</font><font class="font1"><br/><span style='mso-spacerun:yes;'>&nbsp;</span>-r<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-t<br/></font><font class="font1"><span style='mso-spacerun:yes;'>&nbsp;</span>-R<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-x</font></td>
    <td class="xl75" x:str>ls -lrt<br/>ls -la<br/>ls -R</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>ll</td>
    <td class="xl70" x:str>列出当前目录下的文件和目录</td>
    <td class="xl71"></td>
    <td class="xl74" x:str>等价于ls -l --color=tty （有颜色）</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>vdir</td>
    <td class="xl70" x:str>列出当前目录下的文件和目录</td>
    <td class="xl71"></td>
    <td class="xl74" x:str>等价于ls -l （无颜色）</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl80" x:str>mkdir</td>
    <td class="xl70" x:str>新建目录</td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-p</font></td>
    <td class="xl73" x:str>mkdir -p /dir1/dir2/dir3/dir4</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>rmdir</td>
    <td class="xl70" x:str>删除空目录</td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-p</font></td>
    <td class="xl73" x:str>rmdir dir1</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>basename</td>
    <td class="xl70" x:str>获取文件名</td>
    <td class="xl76"></td>
    <td class="xl74" x:str>basename $0</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>dirname</td>
    <td class="xl70" x:str>获取目录名</td>
    <td class="xl76"></td>
    <td class="xl73" x:str>d<font class="font1">irname $0</font></td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl69" height="252" rowspan="10" style='height:189.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>文件的查看</td>
    <td class="xl80" x:str>cat</td>
    <td class="xl70" x:str>显示文件内容</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-n 对输出行编号<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-v 显示控制字符<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-b 和-n类似，但空白行不编号</td>
    <td class="xl75" x:str>cat /etc/profile<br/>cat ~/.bash_profile<br/>cat -b file1 file2 file3<br/>cat -v file1 DOS下的换行符会以^M显示</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>tac</td>
    <td class="xl70" x:str>逆向输出文件内容</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>tac myfile</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>nl</td>
    <td class="xl70" x:str>显示文件内容</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>nl myfile</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>od</td>
    <td class="xl70" x:str>以八进制显示文件内容</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>od myfile</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>more</td>
    <td class="xl70" x:str>分页显示内容</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>more myfile</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>less</td>
    <td class="xl70" x:str>分页显示内容（可以上下翻页）</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>less myfile</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>head</td>
    <td class="xl70" x:str>显示文件前面几行的内容</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-n</td>
    <td class="xl73" x:str>head -n 10 /etc/passwd</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>tail</td>
    <td class="xl70" x:str>显示文件后面几行的内容</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-n</td>
    <td class="xl73" x:str>tail -n 20 /etc/passwd</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>strings</td>
    <td class="xl76" x:str>查看二进制文件中的可打印字符</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>s<font class="font1">trings /bin/ls</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl80" x:str>touch</td>
    <td class="xl71" x:str>新建文件<br/>更新文件时间</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>touch myfile</td>
   </tr>
   <tr height="90" class="xl65" style='height:67.50pt;'>
    <td class="xl69" height="90" style='height:67.50pt;' x:str>文件的编辑</td>
    <td class="xl70" x:str>vi</td>
    <td class="xl70" x:str>编辑文件内容</td>
    <td class="xl71" x:str>编辑模式：a/i/o<br/>命令模式：冒号或者斜杠或者问号<br/>一般模式：上下左右hjkl<span style='mso-spacerun:yes;'>&nbsp;</span></td>
    <td class="xl74" x:str>常用的：x dd ndd u n $ G L</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;mso-height-source:userset;mso-height-alt:270;'>
    <td class="xl69" height="108" rowspan="3" style='height:81.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>文件的复制、移动和删除</td>
    <td class="xl80" x:str>cp</td>
    <td class="xl70" x:str>拷贝</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-R 递归</td>
    <td class="xl73" x:str>cp hello.txt /opt/test/hello.cp</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl80" x:str>mv</td>
    <td class="xl71" x:str>移动<br/>重命名</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-f 连同子目录一起<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-i<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-t   目标目录</td>
    <td class="xl73" x:str>mv hello.txt /opt/test/<font class="font1">ok.txt</font>
        <br/>
        mv -t d  a  b c 
    </td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl70" x:str>rm</td>
    <td class="xl70" x:str>删除</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-r<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-f 强制删除<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-i</td>
    <td class="xl73" x:str>rm -rf /<font class="font1"><span style='mso-spacerun:yes;'>&nbsp; </span>此命令慎用！</font></td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl69" height="54" style='height:40.50pt;' x:str>链接文件</td>
    <td class="xl70" x:str>ln</td>
    <td class="xl70" x:str>连接</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-s 建立软链接<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-d 建立硬链接（默认，可以不写）</td>
    <td class="xl75" x:str>ln -s /root/myfile /s_myfile<br/><font class="font1">ln -d hello.txt dhello</font></td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl69" height="90" rowspan="2" style='height:67.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>挂载设备</td>
    <td class="xl70" x:str>mount</td>
    <td class="xl70"></td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-t</td>
    <td class="xl72" x:str>文件系统有vfat/iso9660，装优盘前先用fdisk -l查看<br/>mount -t vfat /dev/sdb1 /mnt/udisk<br/>mount -a</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>umount</td>
    <td class="xl70"></td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-f 强制将该文件系统退出</font></td>
    <td class="xl75" x:str>umount -a<br/><font class="font1">umount /home</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl69" height="162" rowspan="4" style='height:121.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>修改文件权限</td>
    <td class="xl70" x:str>chgrp</td>
    <td class="xl76" x:str>切换组改变文件的所属组</td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-R 递归</font></td>
    <td class="xl75" x:str>chgrp mary /opt/test <br/>chgrp -R mary /opt/test</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>chown</td>
    <td class="xl76" x:str>改变文件的所有者</td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-R 递归</font></td>
    <td class="xl73" x:str>chown -R mary /opt/test</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl70" x:str>chmod</td>
    <td class="xl70" x:str>修改权限</td>
    <td class="xl76" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-R 递归批量修改</font></td>
    <td class="xl75" x:str>chmod u=rwx,og=rx .bashrc<br/>chmod a+w .bashrc<br/>chmod a-x .bashrc<br/>chmod -R 777 /home/test</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl76" x:str>c<font class="font1">hattr</font></td>
    <td class="xl76" x:str>改变文件的特殊属性</td>
    <td class="xl81" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>+i 属性不可更改<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-i 属性可以更改</td>
    <td class="xl74" x:str>chattr +i myfile 文件删不掉</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="414" rowspan="4" style='height:310.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>搜索文件或目录</td>
    <td class="xl70" x:str>which</td>
    <td class="xl76" x:str>查看可执行文件的位置</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>which ls</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>whereis</td>
    <td class="xl76" x:str>查看文件位置</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>whereis ls</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>locate</td>
    <td class="xl76" x:str>配合数据库查看文件位置</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>locate ls<br/>首次先要用updatedb初始化一下数据库</td>
   </tr>
   <tr height="342" class="xl65" style='height:256.50pt;'>
    <td class="xl70" x:str>find</td>
    <td class="xl76" x:str>搜索硬盘上的文件</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-name<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-type<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-size<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-newer<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-user<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-group<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-amin<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-atime<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-cmin<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-ctime<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-perm</td>
    <td class="xl72" x:str>find / -name man<br/>find /home -amin -10 十分钟内访问过的文件<br/>find /home -atime -10 十天内访问过的文件<br/>find /home -cmin -10 十分中内修改过的文件<br/>find /home -ctime +10 十天内被改过、新增的文件<br/>find /home -size +1000c 大于1000bytes的文件<br/>find . -perm 777<span style='mso-spacerun:yes;'>&nbsp; </span>权限是777的所有文件<br/>find . -path &quot;./test&quot; -prune -o -name &quot;*hello*&quot;<br/>find . -user mary<br/>find . -group dev<br/>find . -newer hello.txt 比hello还要新的文件<br/>find . ! -newer hello.txt<br/>find . -type d<span style='mso-spacerun:yes;'>&nbsp; </span>找目录<br/>find . -perm 764 -exec rm {} \;<br/>find . -perm 764 -ok rm {} \;<br/>find . -perm 764 | xargs rm -f<span style='mso-spacerun:yes;'>&nbsp; </span><br/>find . -name '*a*' -prune<span style='mso-spacerun:yes;'>&nbsp; </span>文件名包含a，目录名不包含a<br/>find . -size +1000c | xargs touch<span style='mso-spacerun:yes;'>&nbsp;</span></td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl69" height="108" rowspan="3" style='height:81.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>查找字符串</td>
    <td class="xl70" x:str>grep</td>
    <td class="xl70" x:str>reGulaR ExPression</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-i 忽略大小写<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-n 显示行号<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-v 取反<br/><span style='mso-spacerun:yes;'>&nbsp;</span></td>
    <td class="xl72" x:str>grep &quot;^ma&quot; /etc/passwd<br/>grep &quot;bash$&quot; /etc/passwd<br/>grep &quot;^[r|d]&quot; /etc/passwd<br/> cat redis.conf | grep -v "#" | grep -v "^$"  </td>
  
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>egrep</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>fgrep</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl69" height="36" style='height:27.00pt;' x:str>显示</td>
    <td class="xl70" x:str>echo</td>
    <td class="xl70" x:str>显示、打印</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-e 使转义符生效</td>
    <td class="xl72" x:str>echo -e &quot;hello\tworld&quot;<br/>echo -e &quot;\&quot;\&quot;&quot;</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl69" height="72" rowspan="3" style='height:54.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>用户切换</td>
    <td class="xl70" x:str>su</td>
    <td class="xl70" x:str>切换用户</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-</td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>sudo</td>
    <td class="xl70" x:str>以其他用户的身份执行命令</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>只有/etc/sudoers内的用户才有权限执行。用visudo编辑</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>visudo</td>
    <td class="xl70" x:str>用vi编辑/etc/sudoers文件</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>在文件中的 root<span style='mso-spacerun:yes;'>&nbsp; </span>ALL=(ALL)<span style='mso-spacerun:yes;'>&nbsp; </span>ALL下面加一行：<br/>zhangsan<span style='mso-spacerun:yes;'>&nbsp; </span>ALL=(ALL)<span style='mso-spacerun:yes;'>&nbsp; </span>ALL</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl69" height="378" rowspan="7" style='height:283.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>进程管理</td>
    <td class="xl70" x:str>ps</td>
    <td class="xl76" x:str>查看进程（静态）</td>
    <td class="xl81" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-e 显示所有进程<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-f 全格式</font></td>
    <td class="xl73" x:str>p<font class="font1">s -ef</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>pgrep</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74" x:str>类似于ps -ef | grep<span style='mso-spacerun:yes;'>&nbsp;</span></td>
   </tr>
   <tr height="198" class="xl65" style='height:148.50pt;'>
    <td class="xl70" x:str>top</td>
    <td class="xl76" x:str>查看进程（动态）</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-d 指定刷新频率（秒）<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-n 输出n次后退出<br/><span style='mso-spacerun:yes;'>&nbsp;</span>u 显示指定用户进程<br/><span style='mso-spacerun:yes;'>&nbsp;</span>k 杀掉进程</td>
    <td class="xl72" x:str>第一行的项目依次为当前时间、系统启动时间、当前系统登录用户数目、平均负载（小于0.6较妥）。<br/>第二行为进程情况，依次为进程总数、休眠进程数、运行进程数、僵尸进程数、终止进程数。<br/>第三行为CPU状态，依次为用户占用、系统占用、优先进程占用、闲置进程占用。<br/>第四行为内存状态，依次为平均可用内存、已用内存、空闲内存、共享内存、缓存使用内存。第五行为交换状态，依次为平均可用交换容量、已用容量、闲置容量、高速缓存容量。<br/>top -d 1</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl70" x:str>kill</td>
    <td class="xl76" x:str>杀掉进程</td>
    <td class="xl71" x:str="' -9 强行杀掉进程&#10; -2 中断进程&#10; -15 停止进程（默认）"><span style='mso-spacerun:yes;'>&nbsp;</span>-9 强行杀掉进程<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-2 中断进程<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-15 停止进程（默认）</td>
    <td class="xl74" x:str>kill -9 %1</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>free</td>
    <td class="xl70" x:str>查看内存使用情况</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>f<font class="font1">ree</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>nice</td>
    <td class="xl70" x:str>调整程序的执行优先级</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>nice -n -5 find / -name core &gt; /tmp/core</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>renice</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74" x:str>通常和ps配合使用</td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl82" height="162" rowspan="5" style='height:121.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>硬盘管理</td>
    <td class="xl70" x:str>df</td>
    <td class="xl71" x:str>查看磁盘使用情况<br/>查看目录在哪个分区下</td>
    <td class="xl81" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-h 以易读方式显示<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-l</td>
    <td class="xl75" x:str>df<br/>df /boot/<br/>df -h</td>
   </tr>

   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl70" x:str>du</td>
    <td class="xl76" x:str>查看文件已有容量</td>
    <td class="xl81" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-k 以KB输出<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-m 以MB输出<br/><font class="font1"><span style='mso-spacerun:yes;'>&nbsp;</span>-s 只列出总量</font></td>
    <td class="xl75" x:str>du -m /home<br/><font class="font1">du -s <br/></font><font class="font1">du -sk hello.txt</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>fdisk</td>
    <td class="xl71" x:str>分区<br/>查看分区的具体情况</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-l</td>
    <td class="xl74"></td>
   </tr>
      <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>lsblk</td>
    <td class="xl70">列出磁盘的使用情况</td>
    <td class="xl70">&nbsp;-f 显示系统信息</td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>mke2fs</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="90" class="xl65" style='height:67.50pt;'>
    <td class="xl69" height="90" style='height:67.50pt;' x:str>打包</td>
    <td class="xl70" x:str>tar</td>
    <td class="xl81" x:str>打包<br/>解包</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-c<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-v<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-f<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-x<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-z</td>
    <td class="xl72" x:str>tar -c mydir &gt; mydir.tar<br/>tar -cvf test.tar /opt/test<br/>tar -xvf test.tar<br/>tar -zcvf hello.tar.gz hello.txt<br/>tar -zxvf hello.tar.gz</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl69" height="234" rowspan="9" style='height:175.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>压缩</td>
    <td class="xl70" x:str>gzip</td>
    <td class="xl70" x:str>解压缩</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-d</td>
    <td class="xl72" x:str>gzip hello.tar<br/>gzip -d hello.tar.gz</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>gunzip</td>
    <td class="xl70" x:str>解压</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>gunzip hello.tar.gz</td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl70" x:str>zip</td>
    <td class="xl70" x:str>压缩</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-r</td>
    <td class="xl72" x:str>zip file.zip *<br/>zip m file.zip to.txt<br/>zip -r file.zip *</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>unzip</td>
    <td class="xl70" x:str>解压</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>unzip hello.zip<br/>unzip -v hello.zip</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>zcat</td>
    <td class="xl70" x:str>显示压缩文件的内容</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>zmore</td>
    <td class="xl70" x:str>显示压缩文件的内容</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>zless</td>
    <td class="xl70" x:str>显示压缩文件的内容</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>zgrep</td>
    <td class="xl76" x:str>查找压缩文件的内容</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>zdiff</td>
    <td class="xl76" x:str>比较压缩文件的不同</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl69" height="306" rowspan="5" style='height:229.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>安装</td>
    <td class="xl70" x:str>gcc</td>
    <td class="xl70" x:str>编译</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-o 指定目标文件</td>
    <td class="xl72" x:str>gcc hello.c<br/>gcc -o hello.o *.c</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>configure</td>
    <td class="xl70" x:str>生成makefile文件</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>--help<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-h 帮助说明</td>
    <td class="xl74" x:str>./configure --help</td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl70" x:str>make</td>
    <td class="xl70" x:str>编译</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>make 编译生成目标文件、可执行文件<br/>make install 安装程序<br/>make clean 去除目标文件</td>
   </tr>
   <tr height="108" class="xl65" style='height:81.00pt;'>
    <td class="xl70" x:str>rpm</td>
    <td class="xl76" x:str>软件包管理器</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-ivh 安装<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-Uvh 升级<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-e 卸载<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-e --nodeps强卸<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-q 查询<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-V 验证</td>
    <td class="xl72" x:str>rpm -qa 列出所有安装过的套件和版本<br/>rpm -qi 列出这个套件的详细信息<br/>rpm -ql 列出这个套件安装后的文件和路径<br/>rpm -qf 查询某文件属于那一个套件</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl70" x:str>yum</td>
    <td class="xl76"></td>
    <td class="xl71"></td>
    <td class="xl72" x:str>yum search raid<br/>yum info mdadm<br/>yum list aa*<br/>yum -y install pam-devel<br/>  </td>
   </tr>
   <tr height="108" class="xl65" style='height:81.00pt;'>
    <td class="xl69" height="180" rowspan="2" style='height:135.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>系统服务</td>
    <td class="xl70" x:str>chkconfig</td>
    <td class="xl70" x:str>开机自动启停服务</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>--list 列出所有服务<br/><span style='mso-spacerun:yes;'>&nbsp;</span>--add 添加服务<br/><span style='mso-spacerun:yes;'>&nbsp;</span>--del 删除服务</td>
    <td class="xl72" x:str>chkconfig vsftpd on<br/>chkconfig sshd on<br/>chkconfig iptables off<br/>chkconfig --add httpd<br/>chkconfig --del httpd<br/>chkconfig --level 35 httpd on</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl70" x:str>service</td>
    <td class="xl70" x:str>立即启停服务</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>start 启动<br/><span style='mso-spacerun:yes;'>&nbsp;</span>stop 停止<br/><span style='mso-spacerun:yes;'>&nbsp;</span>restart 重启<br/><span style='mso-spacerun:yes;'>&nbsp;</span>status 查看</td>
    <td class="xl72" x:str>service network restart<br/>service iptables stop<br/>service vsftpd start<br/>service iptables status</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl82" height="270" rowspan="9" style='height:202.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>任务计划</td>
    <td class="xl70" x:str>tab键</td>
    <td class="xl70" x:str>命令自动补全</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>按一下会自动展开；<br/>按两下会列出所有命令</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>nohup</td>
    <td class="xl70" x:str>不挂断的运行</td>
    <td class="xl70"></td>
    <td class="xl72"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>&amp;</td>
    <td class="xl76" x:str>后台运行</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>command &amp;</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>Ctrl+Z</td>
    <td class="xl70" x:str>后台运行</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>jobs</td>
    <td class="xl76" x:str>列出作业</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>fg</td>
    <td class="xl76" x:str>前台</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>%number 表示jobs的<span style='display:none;'>工作代号</span></td>
    <td class="xl74" x:str>fg %2 后台程序切到前台</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>bg</td>
    <td class="xl76" x:str>后台</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>%number 表示jobs的<span style='display:none;'>工作代号</span></td>
    <td class="xl74" x:str>bg %1 将Stopped状态的后台程序改为Running状态</td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl70" x:str>at</td>
    <td class="xl70" x:str>一次性运行的任务计划</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-f 要提交的脚本<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-r 清除<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-l 罗列</td>
    <td class="xl75" x:str>at 3:00pm tomorrow -f /home/wuxh/hello.sh<br/>at now + 5 minutes</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl70" x:str>crontab</td>
    <td class="xl70" x:str>循环运行的任务计划</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-u 用户<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-e 编辑crontab<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-l 罗列<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-r 删除crontab</td>
    <td class="xl72" x:str>格式： 分&lt;&gt;时&lt;&gt;日&lt;&gt;月&lt;&gt;星期&lt;&gt;要运行的命令<br/>45 4 1,10,22 * * /apps/bin/backup.sh</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl83" height="1945" rowspan="45" style='height:1458.75pt;border-right:.5pt solid windowtext;border-bottom:1.0pt solid windowtext;' x:str>Bash</td>
    <td class="xl76" x:str>bash</td>
    <td class="xl76" x:str>执行脚本</td>
    <td class="xl70"></td>
    <td class="xl75" x:str>bash helloworld.sh<br/><font class="font1">./w.sh</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>重定向符 &gt;</td>
    <td class="xl70" x:str>标准输出</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>command &gt; out.file 2&gt;&amp;1 &amp;<br/>command 2&gt; err.txt &gt;&amp;2</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>重定向符 &gt;&gt;</td>
    <td class="xl70" x:str>追加</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>c<font class="font1">al &gt;&gt; c.txt</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>重定向符 2&gt;</td>
    <td class="xl70" x:str>标准错误</td>
    <td class="xl70"></td>
    <td class="xl74" x:str>ls ddd 2&gt; /dev/null</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>重定向符 &lt;</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74" x:str>sort &lt; name.txt &gt; name.out</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>重定向符 &lt;&lt;</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="90" class="xl65" style='height:67.50pt;'>
    <td class="xl70" x:str>正则表达式</td>
    <td class="xl85" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str><span style='mso-spacerun:yes;'>&nbsp;</span>. 匹配任意字符<br/><span style='mso-spacerun:yes;'>&nbsp;</span>^ 匹配行首<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$ 匹配文件尾<br/><span style='mso-spacerun:yes;'>&nbsp;</span>[] 匹配字符组之一<br/><span style='mso-spacerun:yes;'>&nbsp;</span>* 匹配0到n个字符<br/><span style='mso-spacerun:yes;'>&nbsp;</span>\{min,max\}<br/><span style='mso-spacerun:yes;'>&nbsp;</span>\(…\)</td>
    <td class="xl72" x:str>XXX* 匹配至少两个连续的X<br/>X\{1,10\} 匹配1到10个连续的X<br/>^\(.\) 匹配行首的第一个字符（不管是什么）<br/>^\(.\).*\1$ 匹配一行中的头一个字符和最后一个字符相同的行</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>管道符 |</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl70" x:str>双引号</td>
    <td class="xl70" x:str>引用字符串,但对$,`,\敏感</td>
    <td class="xl70" x:str>&quot;&quot;</td>
    <td class="xl72" x:str>echo &quot;$$&quot;<br/>echo &quot;\$$&quot;</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>单引号</td>
    <td class="xl70" x:str>引用字符串，对特殊字符不敏感</td>
    <td class="xl70" x:str="'''">''</td>
    <td class="xl74" x:str>echo '$$'</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl70" x:str>反引号</td>
    <td class="xl70" x:str>将反引号内的字符串作为命令</td>
    <td class="xl70" x:str>``</td>
    <td class="xl74" x:str>echo `date`</td>
   </tr>
   <tr height="90" class="xl65" style='height:67.50pt;'>
    <td class="xl86" x:str>命令集</td>
    <td class="xl76" x:str>一行中执行多个命令</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">;</font><font class="font1"> 顺序执行</font><font class="font1"><br/><span style='mso-spacerun:yes;'>&nbsp;</span>&amp;&amp;</font><font class="font1"> 前面成功后续才执行</font><font class="font1"><br/><span style='mso-spacerun:yes;'>&nbsp;</span>||</font><font class="font1"> 前面失败后续才执行</font></td>
    <td class="xl75" x:str>l<font class="font1">s;ls<br/>ls&amp;&amp;ls<br/>ls||ls</font></td>
   </tr>
   <tr height="180" class="xl65" style='height:135.00pt;'>
    <td class="xl87" x:str>变量</td>
    <td class="xl85" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str><span style='mso-spacerun:yes;'>&nbsp;</span>位置变量<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$$ 脚本当前进程ID<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$! 后台运行的最后一个进程的ID<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$? 命令的退出状态（0表示成功，1表示失败）<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$# 传递到脚本的参数个数<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$* 以一个单字符串的形式显示所有向脚本传递的参数<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$@ 与$*相同，但是使用时加引号，并在引号中返回每个参数<br/><span style='mso-spacerun:yes;'>&nbsp;</span>$_ 就是set命令</td>
    <td class="xl72" x:str>观察$*和$@的不同：<br/>for i in &quot;$*&quot;<br/>do<br/><span style='mso-spacerun:yes;'>&nbsp;&nbsp;</span>echo $i<br/>done<br/><br/>for i in &quot;$@&quot;<br/>do<br/><span style='mso-spacerun:yes;'>&nbsp;&nbsp;</span>echo $i<br/>done</td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl87" x:str>wc</td>
    <td class="xl76" x:str>统计字数</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-l 统计行数<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-c 统计字符 <br/><span style='mso-spacerun:yes;'>&nbsp;</span>-w 统计字</td>
    <td class="xl73" x:str>c<font class="font1">at /etc/passwd | wc -l</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl87" x:str>sleep</td>
    <td class="xl70" x:str>等待</td>
    <td class="xl81"></td>
    <td class="xl75" x:str>sleep 5 暂停5秒<br/>usleep 500 这个单位是纳秒</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" x:str>read</td>
    <td class="xl70" x:str>从键盘读入信息到变量中</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>read name</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl87"></td>
    <td class="xl76" x:str>变量赋值</td>
    <td class="xl70"></td>
    <td class="xl75" x:str>PATH=&quot;$PATH&quot;:/root<br/><font class="font1">LANG=C</font><font class="font1"><br/>LANG=zh_CN.gb2312<br/>PS1='[\u@\h \W]\$ '</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl87" x:str>set</td>
    <td class="xl81" x:str>显示当前shell的变量，包括当前用户的变量（即环境变量）</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>s<font class="font1">et</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" x:str>unset</td>
    <td class="xl76" x:str>删除变量</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>u<font class="font1">nset i</font></td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl87" x:str>export</td>
    <td class="xl81" x:str>把变量即刻导入到当前的用户环境中（被export的变量叫环境变量），这时可以在env中看到</td>
    <td class="xl81" x:str>环境变量相当可以被子进程使用，其他变量不行。</td>
    <td class="xl72" x:str>export LANG=C<br/>export LC_ALL=en</td>
   </tr>
   <tr height="54" class="xl65" style='height:40.50pt;'>
    <td class="xl87" x:str>env</td>
    <td class="xl81" x:str>显示当前用户环境的变量（被export的变量可以用env查看到）</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>e<font class="font1">nv</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl87" x:str>alias</td>
    <td class="xl70" x:str>命令别名</td>
    <td class="xl70"></td>
    <td class="xl75" x:str>a<font class="font1">lias ll<br/>alias l=ls -la</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" x:str>unalias</td>
    <td class="xl70" x:str>取消命令别名</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>u<font class="font1">nlias l</font></td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl87" x:str>sort</td>
    <td class="xl76" x:str>对文件内容做排序</td>
    <td class="xl81" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-n 以数字排序<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-r 反向排序<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-u 同样的只出现一次</font></td>
    <td class="xl73" x:str>s<font class="font1">ort -n name.txt</font></td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl87" x:str>cut</td>
    <td class="xl70" x:str>提取字符串</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-c 字符<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-d 分隔符<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-f 字段</td>
    <td class="xl72" x:str>cat /etc/passwd | cut -d &quot;:&quot; -f1<br/>last | cut -d &quot; &quot; -f1 列出第一个区块<br/>who | cut -c1-8,18- 每行的1-8个字符和第18行到行尾<br/>cut -d: -f1,6 /etc/passwd</td>
   </tr>
   <tr height="72" class="xl65" style='height:54.00pt;'>
    <td class="xl87" x:str>paste</td>
    <td class="xl70" x:str>和cut相反的命令，合并行</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-d 指定合并的分隔符<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-s 把文件内的所有行合并为一行</td>
    <td class="xl72" x:str>paste names numbers 把两个文件的每行都分别合起来<br/>paste -d'+' names addresses numbers<br/>paste -s names<br/>ls | paste -d' ' -s</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl86" x:str>j<font class="font1">oin</font></td>
    <td class="xl76" x:str>把两个文件中相同的行连起来</td>
    <td class="xl71"></td>
    <td class="xl75" x:str>j<font class="font1">oin -t ':' /etc/passwd /etc/shadow<br/>join -t ':' -1 4 /etc/passwd -2 3 /etc/group</font></td>
   </tr>
   <tr height="198" class="xl65" style='height:148.50pt;'>
    <td class="xl87" x:str>sed</td>
    <td class="xl70" x:str>Stream Editor流编辑器</td>
    <td class="xl81" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-n<span style='mso-spacerun:yes;'>&nbsp;</span></font></td>
    <td class="xl75" x:str>sed 's/Unix/UNIX/' myFile 把Unix换成UNIX（没改原文件），但只改动每行的第一个改掉<br/>sed 's/Unix/UNIX/g' myfile &gt; temp.txt 把每行的所有Unix都换成UNIX<br/>sed '1,2d' myfile 删除第1、2行<br/>sed '/[Tt]est/d' 删除含test或Test的行<br/><font class="font1">sed '/jan/s/fds/abc/' 将所有包含了jan的行中第1个fds改为abc</font><font class="font1"><br/>sed -n '20,25p' text 只显示第20到25行<br/>sed 's/…//' data 删除文件中每行的前3个字符<br/>sed 's/…$//' data 删除文件中每行的最后3个字符</font></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" x:str>awk</td>
    <td class="xl70"></td>
    <td class="xl71"></td>
    <td class="xl72" x:str><span style='mso-spacerun:yes;'></span>通过正则匹配，切割，提取需要的值<span style='mso-spacerun:yes;'>&nbsp;&nbsp;</span></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" x:str>diff</td>
    <td class="xl76" x:str>比较两个文件的不同</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>d<font class="font1">iff file1 file2</font></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl87" x:str>uniq</td>
    <td class="xl76" x:str>删除重复行从而只显示一个</td>
    <td class="xl70"></td>
    <td class="xl72" x:str>last | cut -d &quot; &quot; -f1 | sort | uniq<br/>查看这个月登录主机的用户都有谁</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" x:str>source</td>
    <td class="xl76" x:str>执行脚本</td>
    <td class="xl70"></td>
    <td class="xl73" x:str>source helloworld.sh</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" x:str>tee</td>
    <td class="xl70" x:str>输出到文件的同时显示在屏幕上</td>
    <td class="xl70" x:str><span style='mso-spacerun:yes;'>&nbsp;</span>-a 追加到末尾</td>
    <td class="xl74"></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl87" x:str>tr</td>
    <td class="xl70" x:str>替换指定内容</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-d 删除指定串<br/><span style='mso-spacerun:yes;'>&nbsp;</span>-s</font><font class="font1"> 替换重复字符</font></td>
    <td class="xl72" x:str>cat dostxt | tr -d '\r' &gt; dostxt-noM <br/>去掉文件中的DOS下的 ^M 断行符</td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl87" x:str>split</td>
    <td class="xl70" x:str>分割文件</td>
    <td class="xl71" x:str><span style='mso-spacerun:yes;'>&nbsp;</span><font class="font1">-b 以文件</font><font class="font1">size分</font><font class="font1"><br/><span style='mso-spacerun:yes;'>&nbsp;</span>-l</font><font class="font1"> 以行数分</font></td>
    <td class="xl74" x:str>split -l 5 /etc/passwd test</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl87" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>test</td>
    <td class="xl71" x:str>测试文件</td>
    <td class="xl81"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl71" x:str>测试字符串</td>
    <td class="xl81"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl71" x:str>测试数值</td>
    <td class="xl81"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="36" class="xl65" style='height:27.00pt;'>
    <td class="xl87" x:str>expr</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl75" x:str>expr 10 + 10 只算整数，真正的计算要用bc（计算器）<br/>expr 3 \* 7 乘号要转义</td>
   </tr>
   <tr height="144" class="xl65" style='height:108.00pt;'>
    <td class="xl86" x:str>函数</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl75" x:str>下例可以看出$*和$@的区别：<br/>function testargs<br/>{<br/><span style='mso-spacerun:yes;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>echo &quot;There is $# args&quot;<br/><span style='mso-spacerun:yes;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>echo $10<br/>}<br/>testargs &quot;$*&quot;<br/>testargs &quot;$@&quot;</td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl88" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>条件判断</td>
    <td class="xl71" x:str>if</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl71" x:str>case</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl88" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:1.0pt solid windowtext;' x:str>循环</td>
    <td class="xl71" x:str>while … do … done</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="18" class="xl65" style='height:13.50pt;'>
    <td class="xl71" x:str>until … do … done</td>
    <td class="xl70"></td>
    <td class="xl74"></td>
   </tr>
   <tr height="19" class="xl65" style='height:14.25pt;'>
    <td class="xl93" x:str>for … do … done</td>
    <td class="xl94"></td>
    <td class="xl95"></td>
   </tr>
 
  </table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>

  @page
	{margin:0.75in 0.70in 0.75in 0.70in;
	mso-header-margin:0.30in;
	mso-footer-margin:0.30in;}
tr
	{mso-height-source:auto;
	mso-ruby-visibility:none;}
col
	{mso-width-source:auto;
	mso-ruby-visibility:none;}
br
	{mso-data-placement:same-cell;}
.font0
	{color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font1
	{color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font2
	{color:#000000;
	font-size:12.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font3
	{color:#000000;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font4
	{color:#3F3F76;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font5
	{color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font6
	{color:#1F497D;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font7
	{color:#FF0000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font8
	{color:#000000;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font9
	{color:#006100;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font10
	{color:#7F7F7F;
	font-size:11.0pt;
	font-weight:400;
	font-style:italic;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font11
	{color:#800080;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font12
	{color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font13
	{color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font14
	{color:#9C0006;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font15
	{color:#9C6500;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font16
	{color:#FFFFFF;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font17
	{color:#3F3F3F;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font18
	{color:#0000FF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font19
	{color:#FA7D00;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font20
	{color:#FA7D00;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.font21
	{color:#1F497D;
	font-size:13.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font22
	{color:#1F497D;
	font-size:15.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font23
	{color:#1F497D;
	font-size:18.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.style0
	{mso-number-format:"General";
	text-align:general;
	vertical-align:middle;
	white-space:nowrap;
	mso-rotate:0;
	mso-pattern:auto;
	mso-background-source:auto;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	border:none;
	mso-protection:locked visible;
	mso-style-name:"常规";
	mso-style-id:0;}
.style16
	{mso-number-format:"_ \0022\00A5\0022* \#\,\#\#0_ \;_ \0022\00A5\0022* \\-\#\,\#\#0_ \;_ \0022\00A5\0022* \0022-\0022_ \;_ \@_ ";
	mso-style-name:"货币[0]";
	mso-style-id:7;}
.style17
	{mso-pattern:auto none;
	background:#EBF1DE;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"20% - 强调文字颜色 3";}
.style18
	{mso-pattern:auto none;
	background:#FFCC99;
	color:#3F3F76;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	border:.5pt solid #7F7F7F;
	mso-style-name:"输入";}
.style19
	{mso-number-format:"_ \0022\00A5\0022* \#\,\#\#0\.00_ \;_ \0022\00A5\0022* \\-\#\,\#\#0\.00_ \;_ \0022\00A5\0022* \0022-\0022??_ \;_ \@_ ";
	mso-style-name:"货币";
	mso-style-id:4;}
.style20
	{mso-number-format:"_ * \#\,\#\#0_ \;_ * \\-\#\,\#\#0_ \;_ * \0022-\0022_ \;_ \@_ ";
	mso-style-name:"千位分隔[0]";
	mso-style-id:6;}
.style21
	{mso-pattern:auto none;
	background:#D8E4BC;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"40% - 强调文字颜色 3";}
.style22
	{mso-pattern:auto none;
	background:#FFC7CE;
	color:#9C0006;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"差";}
.style23
	{mso-number-format:"_ * \#\,\#\#0\.00_ \;_ * \\-\#\,\#\#0\.00_ \;_ * \0022-\0022??_ \;_ \@_ ";
	mso-style-name:"千位分隔";
	mso-style-id:3;}
.style24
	{mso-pattern:auto none;
	background:#C4D79B;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"60% - 强调文字颜色 3";}
.style25
	{color:#0000FF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"超链接";
	mso-style-id:8;}
.style26
	{mso-number-format:"0%";
	mso-style-name:"百分比";
	mso-style-id:5;}
.style27
	{color:#800080;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"已访问的超链接";
	mso-style-id:9;}
.style28
	{mso-pattern:auto none;
	background:#FFFFCC;
	border:.5pt solid #B2B2B2;
	mso-style-name:"注释";}
.style29
	{mso-pattern:auto none;
	background:#DA9694;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"60% - 强调文字颜色 2";}
.style30
	{color:#1F497D;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	mso-style-name:"标题 4";}
.style31
	{color:#FF0000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"警告文本";}
.style32
	{color:#1F497D;
	font-size:18.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	mso-style-name:"标题";}
.style33
	{color:#7F7F7F;
	font-size:11.0pt;
	font-weight:400;
	font-style:italic;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"解释性文本";}
.style34
	{color:#1F497D;
	font-size:15.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	border-bottom:1.0pt solid #4F81BD;
	mso-style-name:"标题 1";}
.style35
	{color:#1F497D;
	font-size:13.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	border-bottom:1.0pt solid #4F81BD;
	mso-style-name:"标题 2";}
.style36
	{mso-pattern:auto none;
	background:#95B3D7;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"60% - 强调文字颜色 1";}
.style37
	{color:#1F497D;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	border-bottom:1.0pt solid #A7BFDE;
	mso-style-name:"标题 3";}
.style38
	{mso-pattern:auto none;
	background:#B1A0C7;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"60% - 强调文字颜色 4";}
.style39
	{mso-pattern:auto none;
	background:#F2F2F2;
	color:#3F3F3F;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	border:.5pt solid #3F3F3F;
	mso-style-name:"输出";}
.style40
	{mso-pattern:auto none;
	background:#F2F2F2;
	color:#FA7D00;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	border:.5pt solid #7F7F7F;
	mso-style-name:"计算";}
.style41
	{mso-pattern:auto none;
	background:#A5A5A5;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	border:2.0pt double #3F3F3F;
	mso-style-name:"检查单元格";}
.style42
	{mso-pattern:auto none;
	background:#FDE9D9;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"20% - 强调文字颜色 6";}
.style43
	{mso-pattern:auto none;
	background:#C0504D;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"强调文字颜色 2";}
.style44
	{color:#FA7D00;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	border-bottom:2.0pt double #FF8001;
	mso-style-name:"链接单元格";}
.style45
	{color:#000000;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	border-top:.5pt solid #4F81BD;
	border-bottom:2.0pt double #4F81BD;
	mso-style-name:"汇总";}
.style46
	{mso-pattern:auto none;
	background:#C6EFCE;
	color:#006100;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"好";}
.style47
	{mso-pattern:auto none;
	background:#FFEB9C;
	color:#9C6500;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"适中";}
.style48
	{mso-pattern:auto none;
	background:#DAEEF3;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"20% - 强调文字颜色 5";}
.style49
	{mso-pattern:auto none;
	background:#4F81BD;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"强调文字颜色 1";}
.style50
	{mso-pattern:auto none;
	background:#DCE6F1;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"20% - 强调文字颜色 1";}
.style51
	{mso-pattern:auto none;
	background:#B8CCE4;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"40% - 强调文字颜色 1";}
.style52
	{mso-pattern:auto none;
	background:#F2DCDB;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"20% - 强调文字颜色 2";}
.style53
	{mso-pattern:auto none;
	background:#E6B8B7;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"40% - 强调文字颜色 2";}
.style54
	{mso-pattern:auto none;
	background:#9BBB59;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"强调文字颜色 3";}
.style55
	{mso-pattern:auto none;
	background:#8064A2;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"强调文字颜色 4";}
.style56
	{mso-pattern:auto none;
	background:#E4DFEC;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"20% - 强调文字颜色 4";}
.style57
	{mso-pattern:auto none;
	background:#CCC0DA;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"40% - 强调文字颜色 4";}
.style58
	{mso-pattern:auto none;
	background:#4BACC6;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"强调文字颜色 5";}
.style59
	{mso-pattern:auto none;
	background:#B7DEE8;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"40% - 强调文字颜色 5";}
.style60
	{mso-pattern:auto none;
	background:#92CDDC;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"60% - 强调文字颜色 5";}
.style61
	{mso-pattern:auto none;
	background:#F79646;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"强调文字颜色 6";}
.style62
	{mso-pattern:auto none;
	background:#FCD5B4;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"40% - 强调文字颜色 6";}
.style63
	{mso-pattern:auto none;
	background:#FABF8F;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:0;
	mso-style-name:"60% - 强调文字颜色 6";}
td
	{mso-style-parent:style0;
	padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	mso-number-format:"General";
	text-align:general;
	vertical-align:middle;
	white-space:nowrap;
	mso-rotate:0;
	mso-pattern:auto;
	mso-background-source:auto;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	border:none;
	mso-protection:locked visible;}
.xl65
	{mso-style-parent:style0;
	mso-font-charset:134;}
.xl66
	{mso-style-parent:style0;
	text-align:center;
	mso-pattern:auto none;
	background:#FFFF00;
	font-size:12.0pt;
	font-weight:700;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-top:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl67
	{mso-style-parent:style0;
	text-align:center;
	mso-pattern:auto none;
	background:#FFFF00;
	font-size:12.0pt;
	font-weight:700;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl68
	{mso-style-parent:style0;
	text-align:center;
	mso-pattern:auto none;
	background:#FFFF00;
	font-size:12.0pt;
	font-weight:700;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl69
	{mso-style-parent:style0;
	text-align:center;
	white-space:normal;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl70
	{mso-style-parent:style0;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl71
	{mso-style-parent:style0;
	white-space:normal;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl72
	{mso-style-parent:style0;
	white-space:normal;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl73
	{mso-style-parent:style0;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl74
	{mso-style-parent:style0;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl75
	{mso-style-parent:style0;
	white-space:normal;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl76
	{mso-style-parent:style0;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl77
	{mso-style-parent:style0;
	text-align:center;
	white-space:normal;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl78
	{mso-style-parent:style0;
	text-align:center;
	white-space:normal;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl79
	{mso-style-parent:style0;
	text-align:center;
	white-space:normal;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl80
	{mso-style-parent:style0;
	mso-pattern:auto none;
	background:#FFFF00;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl81
	{mso-style-parent:style0;
	white-space:normal;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl82
	{mso-style-parent:style0;
	text-align:center;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl83
	{mso-style-parent:style0;
	text-align:center;
	font-weight:700;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl84
	{mso-style-parent:style0;
	text-align:center;
	font-weight:700;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl85
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl86
	{mso-style-parent:style0;
	text-align:left;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl87
	{mso-style-parent:style0;
	text-align:left;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl88
	{mso-style-parent:style0;
	text-align:left;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl89
	{mso-style-parent:style0;
	text-align:left;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl90
	{mso-style-parent:style0;
	text-align:left;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl91
	{mso-style-parent:style0;
	text-align:center;
	font-weight:700;
	mso-font-charset:134;
	border-left:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;}
.xl92
	{mso-style-parent:style0;
	text-align:left;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;}
.xl93
	{mso-style-parent:style0;
	white-space:normal;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;}
.xl94
	{mso-style-parent:style0;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;}
.xl95
	{mso-style-parent:style0;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;}
</style>
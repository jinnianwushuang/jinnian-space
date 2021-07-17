<!--
 * @Date           : 2021-01-30 02:07:31
 * @FilePath       : /jinnian-space/src/pages/linux/module/m1.vue
 * @Description    : 
-->
<template>
  <div>
    <table
      width="1144"
      border="1"
      cellpadding="0"
      cellspacing="0"
      style="width:1144px;border-collapse:collapse;table-layout:fixed;"
    >
      <tr height="19">
        <td style="width:80px;">主题</td>
        <td style="width:80px;">相关命令</td>
        <td style="width:180px;">作用</td>
        <td style="width:280px;">常用参数</td>
        <td style="width:400px;">备注</td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td height="234" rowspan="6">开关机</td>
        <td>shutdown</td>
        <td>关机或重启</td>
        <td>-r 重启<br />-h 关机<br />-k 警告<br />-c 取消</td>
        <td>
          shutdown -r now<br />shutdown -h now<br />shutdown -r +1<br />
          shutdown -h 1 一分钟后关机 <br />
          shutdown -r 11:30 <br />
          shutdown -c 撤销shutdown 命令
        </td>
      </tr>
      <tr>
        <td>reboot</td>
        <td>重启</td>
        <td></td>
        <td>reboot</td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>init</td>
        <td>运行级别</td>
        <td colspan="2">
          systemctl get-default <br />
          CentOS7的运行级别 <br />
          0 shutdown.target 系统关机状态 halt init 0 <br />
          1 emergency.target
          单用户工作状态(类似Windows的安全模式，Linux忘记密码)<br />
          2 rescure.target <br />
          3 multi-user.target 命令行模式 多用户状态
          (字符模式,服务基本都是此模式)<br />
          4 无 系统未使用，留给用户<br />
          5 graphical.target 图形模式 (个人计算机都是此模式)<br />
          6 无 <br />
        </td>
      </tr>
      <tr>
        <td>halt</td>
        <td>硬件关机</td>
        <td></td>
        <td>halt</td>
      </tr>
      <tr height="36">
        <td>poweroff</td>
        <td>硬件关机</td>
        <td>-f 强行关机</td>
        <td>poweroff<br />poweroff -f</td>
      </tr>
      <tr>
        <td>sync</td>
        <td>将内存中数据回填到硬盘</td>
        <td></td>
        <td>sync;sync</td>
      </tr>
      <tr height="36">
        <td height="36">启动X-Windows</td>
        <td>startx</td>
        <td>进入X-Window</td>
        <td></td>
        <td>进入X-Windows后可以用logout注销回到命令行</td>
      </tr>
      <tr height="36">
        <td height="180" rowspan="3">日期/时间</td>
        <td>cal</td>
        <td>日历</td>
        <td></td>
        <td>cal 2011<br />cal 03 2011</td>
      </tr>
      <tr style="height:81.00pt;">
        <td>date</td>
        <td>日期</td>
        <td>-s 修改日期<br /></td>
        <td>
          date +%Y/%m/%d 按指定格式显示日期<br />date -s 07/13/2011<br />date -s
          11:55:00<br />clock --systohc 将时间保存到硬件<br />date 071610512011
          月日时分年<br />hwclock -w 写入主板芯片
        </td>
      </tr>
      <tr height="36">
        <td>time</td>
        <td>计算某个命令执行所耗费时间</td>
        <td></td>
        <td>
          time sh myshell.sh<span style="mso-spacerun:yes;">&nbsp; </span
          >运行myshell.sh这个脚本所花的时间
        </td>
      </tr>
      <tr>
        <td>公告</td>
        <td>wall</td>
        <td>广播</td>
        <td></td>
        <td>wall hello</td>
      </tr>
      <tr>
        <td>清屏</td>
        <td>clear</td>
        <td>清屏</td>
        <td></td>
        <td>clear</td>
      </tr>
      <tr>
        <td rowspan="7">帮助</td>
        <td>whatis</td>
        <td>命令介绍</td>
        <td></td>
        <td>whatis ls</td>
      </tr>
      <tr>
        <td>apropos</td>
        <td>帮助一览</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>help</td>
        <td>帮助</td>
        <td></td>
        <td>help cd</td>
      </tr>
      <tr>
        <td>--help</td>
        <td>帮助</td>
        <td></td>
        <td>ls --help</td>
      </tr>
      <tr>
        <td>man</td>
        <td>参考手册</td>
        <td>可以像在vi里一样使<span style="">用斜杠来查找字符串</span></td>
        <td>man ls | more</td>
      </tr>
      <tr>
        <td>info</td>
        <td>相关信息</td>
        <td></td>
        <td>info ls</td>
      </tr>
      <tr>
        <td>type</td>
        <td>查看一个命令是属于内部命令还是外部命令。</td>
        <td></td>
        <td>type cd</td>
      </tr>
      <tr>
        <td height="54" rowspan="2" style="height:40.50pt;">系统设定</td>
        <td>setup</td>
        <td>系统设定工具</td>
        <td></td>
        <td>修改/etc/sysconfig的内容</td>
      </tr>
      <tr height="36">
        <td>locale</td>
        <td>显示语系</td>
        <td>-a 显示所有支持的语系</td>
        <td>locale -a<br />cat /etc/sysconfig/i18n</td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td height="234" rowspan="6">网络命令</td>
        <td>ifconfig</td>
        <td colspan="2">
          ens33 ：是默认的网卡<br />
          lo（loop，循环）：表示回环网卡，代表本机<br />
          virbr0：虚拟网络接口<br />
          # vim /etc/sysconfig/network-scripts/ifcfg-ens33<br />
          TYPE="Ethernet"<br />
          BOOTPROTO="dhcp"<br />
          NAME="ens33"<br />
          UUID="6c809893-d12c-46af-9987-4c05b2773c91"<br />
          DEVICE="ens33"<br />
          ONBOOT="yes"<br />
          参数解析：<br />
          TYPE ：网络类型，Ethernet以太网<br />
          BOOTPROTO：IP的获取方式，dhcp代表自动获取，static/none代表手工设置<br />
          NAME ：网卡的名称（名字），ens33<br />
          UUID ：代表网卡的UUID编号（必须是唯一的）<br />
          DEVICE ：设备名称<br />
          ONBOOT：代表网卡是否随计算机开启启动，yes随计算机开机启动，no代表不启动<br />
        </td>
        <td>
          查看IP<br />设置IP<br />启用网卡<br />禁用网卡<br />
          ifconfig<br />
          ifconfig eth0 172.168.0.201 netmask 255.255.0.0<br />
          ifconfig ens33 172.168.0.201 netmask 255.255.0.0<br />
          ifconfig eth0 up<br />
          ifconfig eth0 down
        </td>
      </tr>
      <tr>
        <td>ifup</td>
        <td>启用网卡</td>
        <td></td>
        <td>ifup eth0</td>
      </tr>
      <tr>
        <td>ifdown</td>
        <td>禁用网卡</td>
        <td></td>
        <td>ifdown eth0</td>
      </tr>
      <tr>
        <td>route</td>
        <td>路由</td>
        <td></td>
        <td></td>
      </tr>
      <tr height="90">
        <td>netstat</td>
        <td>显示Tcp/IP网络状态</td>
        <td>
          -a 显示所有的socket<br />-n 以IP地址显示<br />-p 显示进程号<br />
        </td>
        <td>netstat -na</td>
      </tr>
      <tr>
        <td>netconfig</td>
        <td>配置网络</td>
        <td></td>
        <td>修改的内容实际在 /etc/sysconfig/network-scripts 中</td>
      </tr>
      <tr>
        <td height="216" rowspan="13">系统信息查询</td>
        <td>whoami</td>
        <td>查看自己是谁</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>who am i</td>
        <td>查看自己账号及登录信息</td>
        <td></td>
        <td>通过su可以看到whoami和who am i的不同</td>
      </tr>
      <tr>
        <td>who</td>
        <td>查看当前系统在线用户</td>
        <td></td>
        <td>who</td>
      </tr>
      <tr>
        <td>w</td>
        <td>查看当前系统在线用户</td>
        <td></td>
        <td>who</td>
      </tr>
      <tr>
        <td>last</td>
        <td>查看这个月的用户登录信息</td>
        <td></td>
        <td>last</td>
      </tr>
      <tr>
        <td>hostname</td>
        <td>查看自己的主机名</td>
        <td></td>
        <td>hostname</td>
      </tr>
      <tr>
        <td>hostnamectl</td>
        <td>设置自己的主机名</td>
        <td></td>
        <td>
          hostnamectl -- <br />
          静态的（static） <br />瞬态的（transient）<br />灵活的（pretty）<br />
          hostnamectl --static set-hostname hr01.aa.cn
        </td>
      </tr>
      <tr>
        <td>uname</td>
        <td>列出系统信息</td>
        <td>-a 查询所有</td>
        <td>uname -a</td>
      </tr>
      <tr>
        <td>dmesg</td>
        <td>查看开机启动信息</td>
        <td></td>
        <td>dmesg</td>
      </tr>
      <tr>
        <td>uptime</td>
        <td>查看开机时长</td>
        <td></td>
        <td>uptime</td>
      </tr>
      <tr>
        <td>id</td>
        <td>查看自己及所属的组的信息</td>
        <td></td>
        <td>id</td>
      </tr>
      <tr>
        <td>finger</td>
        <td>查看用户信息</td>
        <td>-s 完整列出</td>
        <td>finger -s username</td>
      </tr>
      <tr>
        <td>groups</td>
        <td>查看自己属于哪些组</td>
        <td></td>
        <td>groups root</td>
      </tr>
      <tr height="36">
        <td height="36">查看历史命令</td>
        <td>history</td>
        <td>历史命令</td>
        <td></td>
        <td>
          history | tail -10<br />可以用!n执行第n条历史，!!执行最后一条命令
        </td>
      </tr>
      <tr>
        <td height="324" rowspan="12">账号管理</td>
        <td>newgrp</td>
        <td>登录另一个组</td>
        <td></td>
        <td>类似login动作</td>
      </tr>
      <tr>
        <td>groupadd</td>
        <td colspan="2">
          添加组（在/etc/group） <br />
          -g 编号 <br />
          tcpdump:x:72: <br />
          组名:组密码:组编号:组内用户信息 <br />
          自定义组从 1000开始<br />
        </td>
        <td>groupadd testing</td>
      </tr>
      <tr>
        <td>groupdel</td>
        <td>删除组</td>
        <td></td>
        <td>groupdel test</td>
      </tr>
      <tr>
        <td>groupmod</td>
        <td>修改组</td>
        <td>
          -g 编号 <br />
          -n 名称 <br />
        </td>
        <td>
          groupmod -n test testing<br />
          #groupmod -g 1100 -n bjhr hr<br />
          含义：将hr组的组ID改成1100，组名改成bjhr<br />
        </td>
      </tr>
      <tr>
        <td>gpasswd</td>
        <td>修改组的密码</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>useradd</td>
        <td colspan="2">
          添加用户 <br />
          etc/passwd 存储用户信息的文件<br />
          用户：/etc/passwd文件，每创建一个用户，其就会在此文件中追加一行 <br />
          # vim /etc/passwd<br />
          root:x:0:0:root:/root:/bin/bash<br />
          由上图可知，一共拥有7列<br />
          第1列：用户名称<br />
          第2列：用户的密码，使用一个x占位符，真实密码存储在/etc/shadow(1-用户名，2-加密密码)<br />
          第3列：数字，用户的ID编号<br />
          第4列：数字，用户的主组ID编号<br />
          第5列：代表注释信息，useradd -c "备注信息" 用户名称<br />
          第6列：用户的家目录，默认在/home/用户名称<br />
          第7列：用户可以使用的Shell类型，useradd -s /bin/bash或/sbin/nologin
          用户名称<br />
        </td>
        <td>
          # useradd [选项 选项的值] 用户名称<br />
          选项说明：<br />
          -g ：指定用户的主组的编号信息<br />
          -s ：指定用户可以使用的Shell类型<br />
          /bin/bash ：给人用的，给运维工程师<br />
          /sbin/nologin ：给软件用的，比如mysql<br />
          -G ：指定附属组的ID编号，如果有多个附属组，可以使用逗号隔开 useradd -G
          1000,1001 .. 用户名称 会显示在 附加组 组信息后，主组不会<br />
          -d ：指定用户的家，/home/itheima，useradd -d /itheima itheima<br />
          -u ：指定用户的ID编号，默认是自动生成的<br />
          -c ：comment，注释信息，scj:x:uid:gid:宋楚杰的账号<br />
          -n ：取消以用户名称命名的组信息<br />
          注意：不用任何参数，创建用户，系统会默认执行以下操作：<br />
          1）在 /etc/passwd 文件中创建一行关于zhangsan用户的数据<br />
          2）在 /etc/shadow 文件中新增了一行关于zhangsan 密码的数据<br />
          3）在 /etc/group 文件中创建一行与用户名相同的组，例如zhangsan<br />
          4）在 /etc/gshadow
          文件中新增一行与新增群组相关的密码信息，例如zhangsan<br />
          5）自动创建用户的家目录，默认在/home下，与用户名同名<br />
        </td>
      </tr>
      <tr>
        <td>userdel</td>
        <td colspan="2">
          删除用户<br />
          -r 连用户主目录一起删除 <br />
          删除用户递归删除该用户所有文件 删除账号流程： <br />
          ① 删除账号 <br />
          ② 确认是否删除用户家 <br />
          ③ 删除用户主组（没有其他用户） <br />
        </td>
        <td>
          userdel -r zhangsan <br />
          ps -ef |grep zhangsan<br />
          搜索包含了zhangsan 关键词的所有进程 <br />
          kill [-9] 进程的ID编号 <br />
        </td>
      </tr>
      <tr height="36">
        <td>usermod</td>
        <td colspan="2">
          编辑用户<br />
          # usermod [选项 选项的值] 用户名称 选项说明：<br />
          -g ：修改用户所属的主组的编号<br />
          - l：修改用户的名称<br />
          -s ：修改用户可以使用的Shell类型，如/bin/bash => /sbin/nologin<br />
          扩展：<br />
          -L：锁定用户，锁定后用户无法登陆系统lock<br />
          -U：解锁用户unlock<br />
          了解：<br />
          -G ：修改用户附属组的编号信息<br />
          -d ：修改用户的家目录<br />
          -c ：修改用户的备注信息 <br />
        </td>
        <td>
          usermod -g test51 root<br />
          usermod -d /home/lisi zhangsan<br />
          禁止linuxuser账号登录Linux操作系统<br />
          usermod -s /sbin/nologin linuxuser<br />
        </td>
      </tr>
      <tr height="90">
        <td>passwd</td>
        <td>修改用户的密码</td>
        <td></td>
        <td>
          passwd zhangsan<br />
          备注：如果忘记root密码，可以在开机时按下e进入grub编辑模式，移到kernel所在行，在最后的rhgb
          quiet后输入 single。<br />
          按回车确定后，按下b进入single模式。然后输入passwd修改密码。
        </td>
      </tr>
      <tr height="36">
        <td>chsh</td>
        <td>修改用户的默认SHELL<br />查看SHELL</td>
        <td>-l<br />-s</td>
        <td>chsh -l 查看shell<br />chsh root 修改root的默认shell</td>
      </tr>
      <tr>
        <td>chfn</td>
        <td>更改注释字段</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>userconf</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td height="324" rowspan="9">目录与路径</td>
        <td>cd</td>
        <td>进入到某个目录下</td>
        <td>~ 进入指定用户的主目录<br />- 返回之前进入的目录</td>
        <td>cd ~zhangsan<br />cd ~<br />cd<br />cd -</td>
      </tr>
      <tr>
        <td>pwd</td>
        <td>显示当前目录的全路径</td>
        <td></td>
        <td>pwd</td>
      </tr>
      <tr height="126" style="height:94.50pt;">
        <td>ls</td>
        <td>列出当前目录下的文件和目录</td>
        <td>
          -l 详细信息<br />
          -m 以逗号分割<br />
          -a 显示隐藏文件<br />
          -r<br />
          -t<br />
          -R 递归显示包含子目录<br />
          -d 显示指定目录<br />
          -x<br />
          -h 人性化显示<br />
        </td>
        <td>ls -lrt<br />ls -la<br />ls -R</td>
      </tr>
      <tr>
        <td>ll</td>
        <td>列出当前目录下的文件和目录</td>
        <td>
          linux一共有7种文件类型,分别如下:<br />
          -：普通文件<br />
          d：目录文件<br />
          l： 软链接（类似Windows的快捷方式）<br />
          (下面四种是特殊文件)<br />
          b：块设备文件（例如硬盘、光驱等）<br />
          p：管道文件<br />
          c：字符设备文件（例如猫等串口设备）<br />
          s：套接口文件/数据接口文件（例如启动一个MySql服务器时会产生一个mysql.sock文件）<br />
        </td>
        <td>
          等价于ls -l --color=tty （有颜色） <br />
          -rw-r--r--. 1 root root 331270 Jul 7 08:25 a <br />
          文件类型， 权限， 链接数， 属主，属组
          ，文件大下，最后修改时间，文件名<br />
          权限： 自己，组，其他人 <br />
        </td>
      </tr>
      <tr>
        <td>vdir</td>
        <td>列出当前目录下的文件和目录</td>
        <td></td>
        <td>等价于ls -l （无颜色）</td>
      </tr>
      <tr>
        <td>mkdir</td>
        <td>新建目录</td>
        <td>-p 递归创建</td>
        <td>
          mkdir -p /dir1/dir2/dir3/dir4 <br />
          mkdir dir1 dir2
        </td>
      </tr>
      <tr>
        <td>rmdir</td>
        <td>删除空目录</td>
        <td>-p 递归删除</td>
        <td>
          rmdir dir-path 从右侧向左侧递归删除 空目录<br />
          rmdir dir1 dir2
        </td>
      </tr>
      <tr>
        <td>basename</td>
        <td>获取文件名</td>
        <td></td>
        <td>basename $0</td>
      </tr>
      <tr>
        <td>dirname</td>
        <td>获取目录名</td>
        <td></td>
        <td>dirname $0</td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td height="252" rowspan="10">文件的查看</td>
        <td>cat</td>
        <td>显示文件内容</td>
        <td>
          -n 对输出行编号<br />-v 显示控制字符<br />
          -b和-n类似，但空白行不编号<br />
          合并文件
        </td>
        <td>
          cat /etc/profile<br />cat ~/.bash_profile<br />
          cat -b file1 file2 file3<br />
          cat -v file1 DOS下的换行符会以^M显示<br />
          cat a.txt b.txt > d.txt 合并文件
        </td>
      </tr>
      <tr>
        <td>tac</td>
        <td>逆向输出文件内容</td>
        <td></td>
        <td>tac myfile</td>
      </tr>
      <tr>
        <td>nl</td>
        <td>显示文件内容</td>
        <td></td>
        <td>nl myfile</td>
      </tr>
      <tr>
        <td>od</td>
        <td>以八进制显示文件内容</td>
        <td></td>
        <td>od myfile</td>
      </tr>
      <tr>
        <td>more</td>
        <td>分页显示内容</td>
        <td>
          b 向上 <br />
          d 向下 <br />
          文件整个加载在内存
        </td>
        <td>more myfile</td>
      </tr>
      <tr>
        <td>less</td>
        <td>分页显示内容（可以上下翻页）</td>
        <td>
          部分加载在内存 More Actions按键功能回车键向下移动一行<br />
          d向下移动半页<br />
          空格键向下移动一页<br />
          b向上移动一页<br />
          上下方向键向上与向下移动，less命令特有功能键<br />
          less -N 文件名称显示行号/ <br />
          字符串搜索指定的字符串<br />
        </td>
        <td>less myfile</td>
      </tr>
      <tr>
        <td>head</td>
        <td>显示文件前面几行的内容</td>
        <td>
          -n 行 <br />
          -c 字节数 <br />
        </td>
        <td>head -n 10 /etc/passwd</td>
      </tr>
      <tr>
        <td>tail</td>
        <td>显示文件后面几行的内容</td>
        <td>
          -n 行 <br />
          -c 字节数 <br />
          -f 动态查看 <br />
        </td>
        <td>tail -n 20 /etc/passwd</td>
      </tr>
      <tr>
        <td>strings</td>
        <td>查看二进制文件中的可打印字符</td>
        <td></td>
        <td>strings /bin/ls</td>
      </tr>
      <tr height="36">
        <td>touch</td>
        <td>新建文件<br />更新文件时间</td>
        <td></td>
        <td>
          touch myfile1 myfile2<br />
          touch aa{3..8}_test.js 批量创建 <br />
        </td>
      </tr>
      <tr height="90">
        <td height="90">文件的编辑</td>
        <td>vi/vim</td>
        <td>编辑文件内容</td>
        <td>
          esc 切换模式 <br />
          编辑模式：a/i/o/A/I/O<br />
          末行模式：冒号或者斜杠或者问号<br />
          命令模式：定位，删剪<br />
          可视化模式： v<br />
          可视化模式 下 ，y 复制 p 粘贴 <br />
          开启着色显示：`:syntax on` <br />
          关闭着色显示：`:syntax off`<br />
        </td>
        <td>
          编辑器 保存退出：<br />
          :wq 保存并退出 zz ， :x<br />
          :w 文件名 保存到文件名 <br />
          :q! 强制退出 不保存<br />
          :! 暂时离开vi 执行其他命令<br />
          <br />
          编辑器操作：<br />
          【[n]x】删除光标位置后面n个字符<br />
          【[n]X】删除光标位置前面n个字符<br />
          【D】删除光标所在位置后面到行尾的所有字符<br />
          【[n]dd】删除光标所在行及下面n行 剪切<br />
          【p|P】在光标【下|上】一行粘贴<br />
          【[n]yy】复制光标所在行及下面n行 <br />
          【dG】删除光标所在行到文件结尾<br />
          【J】合并光标所在行和下一行 中间用空格连接<br />
          【.】执行上一次命令行操作<br />
          【u】撤销 【ctrl +r】 取消撤销<br /><br />
          编辑器定位：<br />
          【ctrl+[b|u]】上翻页 行号减小<br />
          【ctrl+[f|d]】下翻页 行号增加<br />
          【gg】定位在文件第一行行首<br />
          【G】定位在文件最后一行行首<br />
          【$ 】定位行尾 【n +$】 向下 跳过 n行<br />
          【[n]G | [n]gg】定位在n行<br />
          【[n]L】 定位在倒数第n行<br />
          注意：在查找一些特殊含义的字符时，需要加上转义字符<br />
          【/内容】查找<br />
          【n】查找下一个<br />
          【N】查找上一个<br />
          【?】查找上一次的所搜内容<br />
          【/^word】 查找以word开头的内容<br />
          【/word$】 查找以word结尾的内容<br />
          【/.】查找任意一个字符<br />
          【/*】查找任意多个字符<br /><br />
          编辑器替换：<br />
          【r】替换光标所在位置的字符<br />
          【:r 文件名】在光标当前行的下一行插入一个文件<br />
          【:s/a/b/g】将光标所在行的a替换为b<br />
          【:g/a/s//b/g】将文件中所有a替换为b<br />
          【:%s/a/b/g】将文件中所有a替换为b<br />
          【:%s#/bin/bash#we666#g】将文件中所有/bin/bash替换为we666<br />
          【:n1,n2 s/a/b/g】将行区间n1到n2的行中所有的a替换为b<br /><br />
          编辑器设置：<br />
          【:set ic】搜索时不区分大小写<br />
          【:set noic】搜索时区分大小写 <br />
          【:set nu | nonu】 [不]设置 行号 <br />
          【::set paste | nopaste】 [不]设置 粘贴模式 <br />
          【:noh】 不高亮 <br /><br />
          可视化模式：<br />
          可视化模式下复制<br />
          按键：ctrl + v（可视块）或V（可视行）或v（可视），然后按下↑ ↓ ←
          →方向键来选中需要<br />
          复制的区块，按下y 键进行复制（不要按下yy），最后按下p 键粘贴<br />
          退出可视模式按下Esc<br />
          1）.添加多行注释：（重点）<br />
          步骤1：首先按esc进入命令行模式下，按下Ctrl +
          v，进入列（也叫区块）模式;<br />
          步骤2：在行首使用上下键选择需要注释的多行;<br />
          步骤3：按下键盘（大写）“I”键，进入插入模式；<br />
          步骤4：然后输入注释符（“#”）;<br />
          步骤5：最后按 两下“Esc”键。<br />
          2）.删除多行注释：（重点）<br />
          步骤1：首先按esc进入命令行模式下，按下Ctrl + v, 进入列模式;<br />
          步骤2：选定要取消注释的多行的第一列<br />
          步骤3：按del键即可<br />
        </td>
      </tr>
      <tr>
        <td rowspan="3">文件的复制、移动和删除</td>
        <td>cp</td>
        <td>拷贝</td>
        <td>
          -R 递归 <br />
          -r 复制文件夹
        </td>
        <td>
          cp hello.txt /opt/test/hello.cp <br />
          cp -r test1 test2
        </td>
      </tr>
      <tr height="36">
        <td>mv</td>
        <td>
          移动<br />重命名<br />
          文件文件夹都可以
        </td>
        <td>-f 连同子目录一起<br />-i<br />-t 目标目录</td>
        <td>
          mv hello.txt /opt/test/ok.txt
          <br />
          mv -t d a b c
        </td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>rm</td>
        <td>删除</td>
        <td>
          -r 目录 ,递归删除<br />
          -f 强制删除，不提示 <br />
          -i <br />
        </td>
        <td>rm -rf /* 此命令慎用！</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td height="54" style="height:40.50pt;">链接文件</td>
        <td>ln</td>
        <td>连接</td>
        <td>-s 建立软链接<br />-d 建立硬链接（默认，可以不写）</td>
        <td>ln -s /root/myfile /s_myfile<br />ln -d hello.txt dhello</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td height="90" rowspan="2">挂载设备</td>
        <td>mount</td>
        <td></td>
        <td>-t</td>
        <td>
          文件系统有vfat/iso9660，装优盘前先用fdisk -l查看<br />mount -t vfat
          /dev/sdb1 /mnt/udisk<br />mount -a
        </td>
      </tr>
      <tr height="36">
        <td>umount</td>
        <td></td>
        <td>-f 强制将该文件系统退出</td>
        <td>umount -a<br />umount /home</td>
      </tr>
      <tr height="36">
        <td height="162" rowspan="4">修改文件权限</td>
        <td>chgrp</td>
        <td>切换组改变文件的所属组</td>
        <td>-R 递归</td>
        <td>
          chgrp 组名 文件1 文件2 目录1 目录2 <br />
          chgrp mary /opt/test <br />
          chgrp -R mary /opt/test
        </td>
      </tr>
      <tr>
        <td>chown</td>
        <td>改变文件的所有者</td>
        <td>-R 递归</td>
        <td>
          chown 用户名 文件1 文件2 目录1 目录2<br />
          chown -R mary /opt/test
        </td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>chmod</td>
        <td colspan="2">
          修改权限 <br />
          -R 递归批量修改 <br />
          拥有者-所属组-其他人<br />
          chmod -u|g|o|a +|-|= rwc 文件1 文件2<br />
          chmod u + x <br />
          r=4 w=2 x=1 <br />
          chmod u=rwx,og=rx .bashrc<br />
          chmod a+w .bashrc<br />
          chmod a-x .bashrc<br />
          chmod -R 777 /home/test<br />
          chmod 372 文件名1 文件名2<br />
        </td>
        <td>
          特殊设置位，S位权限 <br />
          作用：为了让一般使用者临时具有该文件所属主/组的执行权限。 <br />
          主要针对二进制文件（命令） <br />
          chmod 0755 文件名1 文件名2 <br />
          去除S位权限 <br />
          # chmod u-s /usr/bin/passwd <br />
          或者 <br />
          # chmod 0755 /usr/bin/passwd <br />
          添加S位权限 # chmod u+s /usr/bin/passwd 或者 <br />
          # chmod 4755 /usr/bin/passwd <br />
          <br />
          沾滞位T（针对文件夹） <br />
          主要功能：只允许文件的创建者和root用户删除文件（防止误删除权限位）==
          <br />
          移除粘滞位 <br />
          # chmod -R o-t /tmp <br />
          或 <br />
          # chmod -R 0777 /tmp <br />
          添加粘滞位 <br />
          # chmod -R o+t /tmp <br />
          或 <br />
          # chmod -R 1777 /tmp <br />
        </td>
      </tr>
      <tr height="36">
        <td>chattr</td>
        <td>改变文件的特殊属性</td>
        <td>+i 属性不可更改<br />-i 属性可以更改</td>
        <td>chattr +i myfile 文件删不掉</td>
      </tr>
      <tr>
        <td rowspan="2">ACL访问控制</td>
        <td>getfacl</td>
        <td>获取某个文件的ACL权限</td>
        <td></td>
        <td>getfacl 文件或目录名称</td>
      </tr>
      <tr>
        <td>setfacl</td>
        <td>给某个文件设置ACL权限</td>
        <td>
          # setfacl [选项] 文件或目录名称 <br />
          选项说明： <br />
          <br />
          -m ： 修改acl策略 <br />
          -x ： 去掉某个用户或者某个组的权限 <br />
          -b ： 删除所有的acl策略 <br />
          -R ：递归,通常用在文件夹 <br />
        </td>
        <td>
          案例：针对readme.txt文件给linuxuser设置一个权限=>可读 <br />
          # setfacl -m u:linuxuser:r readme.txt => 针对某个用户开通ACL权限
          <br />
          案例：针对shop文件夹给itheima组设置一个权限=>可读可写权限rw <br />
          # setfacl -R -m g:itheima:rw shop => 针对某个用户组开通ACL权限 <br />
          案例：把linuxuser用户权限从readme.txt中移除掉 <br />
          # setfacl -x u:linuxuser readme.txt <br />
          案例：把itheima用户组权限从shop中移除掉 <br />
          # setfacl -x -R g:itheima shop <br />
          案例：把readme.txt文件中的所有ACL权限全部移除 <br />
          # setfacl -b readme.txt
        </td>
      </tr>
      <tr>
        <td>默认权限</td>
        <td>umask</td>
        <td>umask</td>
        <td colspan="2">
          umask表示创建文件时的默认权限（即创建文件时不需要设置而天生的权限）
          <br />
          root用户下，touch a ，文件a的默认权限是644 <br />
          普通用户下，touch b ，文件b的默认权限是664 <br />
          注：0022中第一位0代表特殊权限位，可以不设置。<br />
          umask的默认值，在root和普通用户下是不一样的，分别是022和002<br />
          root : 666 - 022 = 644<br />
        </td>
      </tr>
      <tr>
        <td height="414" rowspan="4">搜索文件或目录</td>
        <td>which</td>
        <td>查看可执行文件的位置</td>
        <td></td>
        <td>which ls</td>
      </tr>
      <tr>
        <td>whereis</td>
        <td>查看文件位置</td>
        <td></td>
        <td>whereis ls</td>
      </tr>
      <tr height="36">
        <td>locate</td>
        <td>配合数据库查看文件位置</td>
        <td></td>
        <td>locate ls<br />首次先要用updatedb初始化一下数据库</td>
      </tr>
      <tr height="342" style="height:256.50pt;">
        <td>find</td>
        <td>搜索硬盘上的文件</td>
        <td>
          -name<br />-type d f<br />-size<br />-newer<br />-user<br />-group<br />-amin<br />-atime<br />-cmin<br />-ctime<br />-perm
        </td>
        <td>
          find / -name man<br />
          find /home -amin -10 十分钟内访问过的文件<br />
          find /home -atime -10 十天内访问过的文件<br />
          find /home -cmin -10 十分中内修改过的文件<br />
          find /home -ctime +10 十天内被改过、新增的文件<br />
          find /home -size +1000c 大于1000bytes的文件<br />
          find /var/log -name "*.log" -mtime +10 |rm -rf <br />
          find /var/log -name "*.log" -mtime +10 |xargs rm -rf<br />
          find . -perm 777 权限是777的所有文件<br />
          find . -path "./test" -prune -o -name "*hello*"<br />
          find . -user mary<br />
          find . -group dev<br />
          find . -newer hello.txt 比hello还要新的文件<br />
          find . ! -newer hello.txt<br />
          find . -type d 找目录<br />
          find . -perm 764 -exec rm {} \;<br />
          find . -perm 764 -ok rm {} \;<br />
          find . -perm 764 | xargs rm -f <br />
          find . -name '*a*' -prune 文件名包含a，目录名不包含a<br />
          find . -size +1000c | xargs touch<br />
          find /var -name "boot.log" -type f<br />
          find / -name "ssh" -type d <br />
          find /var/log -name "*.log" -type f<br />
        </td>
      </tr>
      <tr>
        <td>命令扩展</td>
        <td>xargs</td>
        <td>
          简单来说，xargs命令就相当于对管道命令进行了一个扩展，让所有命令都支持管道
        </td>
        <td></td>
        <td>
          搜索/etc目录下的所有".conf"结尾的文件信息，然后以详细列表形式显示
          <br />
          find /etc -name "*.conf" | xargs ls -l <br />
        </td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td rowspan="3" style="height:81.00pt;">查找字符串</td>
        <td>grep</td>
        <td>reGulaR ExPression</td>
        <td>-i 忽略大小写<br />-n 显示行号<br />-v 取反<br /></td>
        <td>
          grep 要搜索的关键词 多个文件的名称<br />
          grep "^ma" /etc/passwd<br />
          grep "bash$" /etc/passwd<br />
          grep "^[r|d]" /etc/passwd<br />
          cat redis.conf | grep -v "#" | grep -v "^$"<br />
          grep -n word a.txt | wc -l <br />
          ll -R | grep -n a | wc -l <br />
        </td>
      </tr>
      <tr>
        <td>egrep</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>fgrep</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr height="36">
        <td height="36">显示</td>
        <td>echo</td>
        <td>显示、打印</td>
        <td>-e 使转义符生效</td>
        <td>
          echo -e &quot;hello\tworld&quot;<br />echo -e
          &quot;\&quot;\&quot;&quot;
        </td>
      </tr>
      <tr>
        <td height="72" rowspan="3" style="height:54.00pt;">用户切换</td>
        <td>su</td>
        <td>切换用户</td>
        <td>- 同时切换目录到用户的家</td>
        <td></td>
      </tr>
      <tr>
        <td>sudo</td>
        <td>以其他用户的身份执行命令</td>
        <td></td>
        <td>只有/etc/sudoers内的用户才有权限执行。用visudo编辑</td>
      </tr>
      <tr height="36">
        <td>visudo</td>
        <td>用vi编辑/etc/sudoers文件</td>
        <td></td>
        <td>
          在文件中的 root<span style="mso-spacerun:yes;">&nbsp; </span
          >ALL=(ALL)<span style="mso-spacerun:yes;">&nbsp; </span
          >ALL下面加一行：<br />zhangsan<span style="mso-spacerun:yes;"
            >&nbsp; </span
          >ALL=(ALL)<span style="mso-spacerun:yes;">&nbsp; </span>ALL
        </td>
      </tr>
      <tr height="36">
        <td height="378" rowspan="7" style="height:283.50pt;">进程管理</td>
        <td>ps</td>
        <td>查看进程（静态）</td>
        <td>-e 显示所有进程<br />-f 全格式</td>
        <td>ps -ef</td>
      </tr>
      <tr>
        <td>pgrep</td>
        <td></td>
        <td></td>
        <td>类似于ps -ef | grep</td>
      </tr>
      <tr height="198" style="height:148.50pt;">
        <td>top</td>
        <td>查看进程（动态）</td>
        <td>
          -d 指定刷新频率（秒）<br />
          -n 输出n次后退出<br />
          u 显示指定用户进程<br />
          k 杀掉进程<br />
          M（大写）：表示将结果按照内存（MEM）从高到低进行降序排列；<br />

P（大写）：，表示将结果按照CPU 使用率从高到低进行降序排列；<br />

1 ：当服务器拥有多个cpu 的时候可以使用“1”快捷键来切换是否展示显示各个cpu 的详细信息；<br />
  
q：退出<br />
          
        </td>
        <td>
           具体参看 07进程检测与控制.pdf  <br>
          第一行的项目依次为当前时间、系统启动时间、当前系统登录用户数目、平均负载（小于0.6较妥,和系统CPU核数相关）。<br />
          第二行为进程情况，依次为进程总数、休眠进程数、运行进程数、僵尸进程数、终止进程数。<br />
          第三行为CPU状态，依次为用户占用、系统占用、优先进程占用、闲置进程占用。<br />
          第四行为内存状态，依次为平均可用内存、已用内存、空闲内存、共享内存、缓存使用内存。<br />
          第五行为交换状态，依次为平均可用交换容量、已用容量、闲置容量、高速缓存容量。<br />top
          -d 1
        </td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>kill</td>
        <td>杀掉进程</td>
        <td>-9 强行杀掉进程<br />-2 中断进程<br />-15 停止进程（默认）</td>
        <td>kill -9 %1</td>
      </tr>
      <tr>
        <td>free</td>
        <td>查看内存使用情况</td>
        <td></td>
        <td>free</td>
      </tr>
      <tr>
        <td>nice</td>
        <td>调整程序的执行优先级</td>
        <td></td>
        <td>nice -n -5 find / -name core &gt; /tmp/core</td>
      </tr>
      <tr>
        <td>renice</td>
        <td>调整程序的执行优先级</td>
        <td></td>
        <td>通常和ps配合使用</td>
      </tr>
      <tr>
        <td>网络</td>
        <td>ss</td>
        <td>用于调查套接字的实用程序</td>
        <td></td>
        <td>
          查看ssh 服务运行 的 网络 端口 <br />
          ss -alt | grep ssh
        </td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td height="162" rowspan="5">硬盘管理</td>
        <td>df</td>
        <td>查看磁盘使用情况<br />查看目录在哪个分区下</td>
        <td>-h 以易读方式显示<br />-l</td>
        <td>df<br />df /boot/<br />df -h</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>du</td>
        <td>查看文件(夹)已有容量</td>
        <td>
          -k 以KB输出<br />-m 以MB输出<br />-s 只列出总量 <br />
          -h ：高可读性
        </td>
        <td>du -m /home<br />du -s <br />du -sk hello.txt</td>
      </tr>
      <tr height="36">
        <td>fdisk</td>
        <td>分区<br />查看分区的具体情况</td>
        <td>-l</td>
        <td></td>
      </tr>
      <tr>
        <td>lsblk</td>
        <td>列出磁盘的使用情况</td>
        <td>&nbsp;-f 显示系统信息</td>
        <td></td>
      </tr>
      <tr>
        <td>mke2fs</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr height="90">
        <td height="90">打包</td>
        <td>tar</td>
        <td>打包<br />解包</td>
        <td>
          -z，压缩为.gz格式<br />
          ​ -j，压缩为.bz2格式<br />
          ​ -J，压缩为.xz格式<br />
          ​ -c，create 创建的意思<br />
          ​ -x，解压缩<br />
          ​ -v，显示打包文件过程<br />
          ​ -f，file指定打包的文件名。<br />
          ​ -u，追加更新原打包文件中的文件<br />
          ​ -t，查看打包的文件内容<br />
          ​ -C，指定解压目录<br />
          ​
        </td>
        <td>
          tar -c mydir &gt; mydir.tar<br />tar -cvf test.tar /opt/test<br />
          tar -xvf test.tar<br />
          tar -zcvf hello.tar.gz hello.txt 使用gzip 压缩tar包<br />
          tar -zxvf hello.tar.gz 解压文件<br />
          tar -tf aa.gz 查看aa.gz 内的文件 <br />
          tar -uf aa.gz a.js 追加 文件 <br />
        </td>
      </tr>
      <tr height="36">
        <td height="234" rowspan="9">压缩</td>
        <td>gzip</td>
        <td>压缩</td>
        <td>-d 解压缩</td>
        <td>gzip hello.tar<br />gzip -d hello.tar.gz</td>
      </tr>
      <tr>
        <td>gunzip</td>
        <td>解压缩</td>
        <td></td>
        <td>gunzip hello.tar.gz</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>zip</td>
        <td>压缩</td>
        <td>-r 文件夹，递归</td>
        <td>
          zip file.zip *<br />zip m file.zip to.txt<br />zip -r file.zip *
        </td>
      </tr>
      <tr height="36">
        <td>unzip</td>
        <td>解压</td>
        <td>-d 指定解压目录</td>
        <td>unzip hello.zip -d /usr/local/aa/zz<br />unzip -v hello.zip</td>
      </tr>
      <tr>
        <td>zcat</td>
        <td>显示压缩文件的内容</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>zmore</td>
        <td>显示压缩文件的内容</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>zless</td>
        <td>显示压缩文件的内容</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>zgrep</td>
        <td>查找压缩文件的内容</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>zdiff</td>
        <td>比较压缩文件的不同</td>
        <td></td>
        <td></td>
      </tr>
      <tr height="36">
        <td height="306" rowspan="5" style="height:229.50pt;">安装</td>
        <td>gcc</td>
        <td>编译</td>
        <td>-o 指定目标文件</td>
        <td>gcc hello.c<br />gcc -o hello.o *.c</td>
      </tr>
      <tr height="36">
        <td>configure</td>
        <td>生成makefile文件</td>
        <td>--help<br />-h 帮助说明</td>
        <td>./configure --help</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>make</td>
        <td>编译</td>
        <td></td>
        <td>
          make 编译生成目标文件、可执行文件<br />make install 安装程序<br />make
          clean 去除目标文件
        </td>
      </tr>
      <tr style="height:81.00pt;">
        <td>rpm</td>
        <td>软件包管理器</td>
        <td>
          -ivh 安装<br />
          -Uvh 升级<br />
          -e 卸载<br />
          -a 所有 <br />
          -e --nodeps强卸<br />
          -q 查询<br />
          -i：install，安装<br />
          -v：显示进度条<br />
          -h：表示以"#"形式显示进度条<br />
          -V 验证
        </td>
        <td>
          <a
            href="http://rpm.pbone.net"
            target="_blank"
            rel="noopener noreferrer"
            >http://rpm.pbone.net</a
          >
          <br />
          rpm -qa 列出所有安装过的套件和版本<br />
          rpm -qi 列出这个套件的详细信息<br />
          rpm -ql 列出这个套件安装后的文件和路径<br />
          rpm -qf 查询某文件属于那一个套件
        </td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>yum</td>
        <td></td>
        <td></td>
        <td>
          yum search raid<br />yum info mdadm<br />yum list aa*<br />yum -y
          install pam-devel<br />
        </td>
      </tr>
      <tr>
        <td>
          系统控制 <br />
          服务管理
        </td>
        <td>systemctl</td>
        <td colspan="2">
          systemctl list-units --type service --all<br />
          systemctl list-units --type service | grep sshd<br />
        </td>
        <td>
          systemctl status network <br />
          systemctl start network <br />
          systemctl stop network <br />
          systemctl restart network <br />
          systemctl reload crond <br />
          systemctl enable crond <br />
          systemctl disable crond <br />
        </td>
      </tr>
      <tr>
        <td height="180" rowspan="2" style="height:135.00pt;">系统服务</td>
        <td>chkconfig</td>
        <td>开机自动启停服务</td>
        <td>--list 列出所有服务<br />--add 添加服务<br />--del 删除服务</td>
        <td>
          chkconfig vsftpd on<br />chkconfig sshd on<br />chkconfig iptables
          off<br />chkconfig --add httpd<br />chkconfig --del httpd<br />chkconfig
          --level 35 httpd on
        </td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>service</td>
        <td>立即启停服务</td>
        <td>start 启动<br />stop 停止<br />restart 重启<br />status 查看</td>
        <td>
          service network restart<br />service iptables stop<br />service vsftpd
          start<br />service iptables status
        </td>
      </tr>
      <tr>
        <td rowspan="3">常用自有服务</td>
        <td>ntp</td>
        <td>用于同步计算机的系统时间的服务</td>
        <td>
          ntpd服务配置文件位置 /etc/ntp.conf <br />
          NTP授时网站： <br />
          http://www.ntp.org.cn/pool.php <br />
        </td>
        <td>
          ntpdate NTP服务器的IP地址或域名 <br />
          自动同步 启动ntpd服务 <br />
          #systemctl start ntpd <br />
          #systemctl enable ntpd <br />
        </td>
      </tr>
      <tr>
        <td>firewalld</td>
        <td>防火墙服务</td>
        <td>
          区域概念 <br />
          block dmz drop external home internal public trusted work
        </td>
        <td>
          firewall-cmd 选项<br />
          #firewall-cmd --get-zones<br />
          含义：查看所有可用区域<br />
          #firewall-cmd --get-default-zone<br />
          含义：查看默认使用区域，当前默认使用区域为public<br />
          #firewall-cmd --list-all<br />
          含义：查看所有可用区域<br />
          #firewall-cmd --list-all-zones<br />
          含义：查看所有可用区域<br />
          #firewall-cmd --zone=public --add-port=1024/tcp<br />
          含义:在public区域，添加允许tcp协议的1024端口通过的规则<br />
          #firewall-cmd --zone=public --add-service=ftp<br />
          含义:在public区域，添加允许ftp服务通过的规则<br />
          #firewall-cmd --zone=public --remove-port=1024/tcp<br />
          含义:在public区域，去掉允许tcp协议的1024端口通过的规则<br />
          #firewall-cmd --zone=public --remove-service=ftp<br />
          含义:在public区域，去掉允许ftp服务通过的规则<br />
          #firewall-cmd --permanent --zone=public --add-port=1024/tcp<br />
          含义:在public区域，使用permanent参数，永久添加允许1024端口通过的规则<br />
          #firewall-cmd --reload<br />
          含义:重新加载配置<br />
        </td>
      </tr>
      <tr>
        <td>crond</td>
        <td>计划任务服务</td>
        <td></td>
        <td></td>
      </tr>
      <tr height="36">
        <td height="270" rowspan="9" style="height:202.50pt;">任务计划</td>
        <td>tab键</td>
        <td>命令自动补全</td>
        <td></td>
        <td>按一下会自动展开；<br />按两下会列出所有命令</td>
      </tr>
      <tr>
        <td>nohup</td>
        <td>不挂断的运行</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>&amp;</td>
        <td>后台运行</td>
        <td></td>
        <td>command &amp;</td>
      </tr>
      <tr>
        <td>Ctrl+Z</td>
        <td>后台运行</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>jobs</td>
        <td>列出作业</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>fg</td>
        <td>前台</td>
        <td>%number 表示jobs的<span style="">工作代号</span></td>
        <td>fg %2 后台程序切到前台</td>
      </tr>
      <tr>
        <td>bg</td>
        <td>后台</td>
        <td>%number 表示jobs的<span style="">工作代号</span></td>
        <td>bg %1 将Stopped状态的后台程序改为Running状态</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>at</td>
        <td>一次性运行的任务计划</td>
        <td>
          systemctl start atd  <br />
          -f 要提交的脚本<br />
        -r 清除<br />
        -l 罗列<br />
         atq 查看没有执行的计划任务<br />
         atrm 任务号 删除指定的计划任务<br />
         </td>
        <td>
          at 3:00pm tomorrow -f /home/wuxh/hello.sh<br />
          at now + 5 minutes
        </td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>crontab</td>
        <td>循环运行的任务计划</td>
        <td>
          -l：list，列出指定用户的计划任务列表 <br />
          -e：edit，编辑指定用户的计划任务列表 <br />
          -u：user，指定的用户名，如果不指定，则表示当前用户 <br />
          -r：remove，删除指定用户的计划任务列表 <br />
          黑名单==配置文件位于：`/etc/cron.deny <br />
          白名单==配置文件位于：/etc/cron.allow  <br />
          日志文件位于`/var/log/cron` <br />
        </td>
        <td>
          格式： <br />
          四个符号：<br />
          *：表示取值范围中的每一个数字<br />
          -：做连续区间表达式的，要想表示1~7，则可以写成：1-7<br />
          /：表示每多少个，例如：想每 10 分钟一次，则可以在分的位置写：*/10<br />
          ,：表示多个取值，比如想在 1 点，2 点 6
          点执行，则可以在时的位置写：1,2,6<br />
          分 时 日 月 周 需要执行的命令<br />
          问题1：每月1、10、22 日的4:45 重启network 服务<br />
          问题1：45 4 1,10,22 * * service network restart<br />
          问题2：每周六、周日的1:10 重启network 服务<br />
          问题2：10 1 * * 6,7 service network restart<br />
          问题3：每天18:00 至23:00 之间每隔30 分钟重启network 服务<br />
          问题3：*/30 18-23 * * * service network restart<br />
          问题4：每隔两天的上午8 点到11 点的第3 和第15 分钟执行一次重启<br />
          问题4：3,15 8-11 */2 * * reboot<br />
        </td>
      </tr>
      <tr height="36">
        <td height="1945" rowspan="45" style="height:1458.75pt;">
          Bash
        </td>
        <td>bash</td>
        <td>执行脚本</td>
        <td></td>
        <td>bash helloworld.sh<br />./w.sh</td>
      </tr>
      <tr height="36">
        <td>重定向符 &gt;</td>
        <td>标准输出</td>
        <td></td>
        <td>
          command &gt; out.file 2&gt;&amp;1 &amp;<br />command 2&gt; err.txt
          &gt;&amp;2
        </td>
      </tr>
      <tr>
        <td>重定向符 &gt;&gt;</td>
        <td>追加</td>
        <td></td>
        <td>cal &gt;&gt; c.txt</td>
      </tr>
      <tr>
        <td>重定向符 2&gt;</td>
        <td>标准错误</td>
        <td></td>
        <td>ls ddd 2&gt; /dev/null</td>
      </tr>
      <tr>
        <td>重定向符 &lt;</td>
        <td></td>
        <td></td>
        <td>sort &lt; name.txt &gt; name.out</td>
      </tr>
      <tr>
        <td>重定向符 &lt;&lt;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr height="90">
        <td>正则表达式</td>
        <td colspan="2" style="">
          . 匹配任意字符<br />^ 匹配行首<br />$ 匹配文件尾<br />[]
          匹配字符组之一<br />* 匹配0到n个字符<br />\{min,max\}<br />\(…\)
        </td>
        <td>
          XXX* 匹配至少两个连续的X<br />X\{1,10\} 匹配1到10个连续的X<br />^\(.\)
          匹配行首的第一个字符（不管是什么）<br />^\(.\).*\1$
          匹配一行中的头一个字符和最后一个字符相同的行
        </td>
      </tr>
      <tr>
        <td>管道符 |</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr height="36">
        <td>双引号</td>
        <td>引用字符串,但对$,`,\敏感</td>
        <td>&quot;&quot;</td>
        <td>echo &quot;$$&quot;<br />echo &quot;\$$&quot;</td>
      </tr>
      <tr>
        <td>单引号</td>
        <td>引用字符串，对特殊字符不敏感</td>
        <td>''</td>
        <td>echo '$$'</td>
      </tr>
      <tr>
        <td>反引号</td>
        <td>将反引号内的字符串作为命令</td>
        <td>``</td>
        <td>echo `date`</td>
      </tr>
      <tr height="90">
        <td>命令集</td>
        <td>一行中执行多个命令</td>
        <td>
          ; 顺序执行<br />&amp;&amp; 前面成功后续才执行<br />||
          前面失败后续才执行
        </td>
        <td>ls;ls<br />ls&amp;&amp;ls<br />ls||ls</td>
      </tr>
      <tr height="180" style="height:135.00pt;">
        <td>变量</td>
        <td colspan="2" style="">
          位置变量<br />$$ 脚本当前进程ID<br />$! 后台运行的最后一个进程的ID<br />$?
          命令的退出状态（0表示成功，1表示失败）<br />$# 传递到脚本的参数个数<br />$*
          以一个单字符串的形式显示所有向脚本传递的参数<br />$@
          与$*相同，但是使用时加引号，并在引号中返回每个参数<br />$_ 就是set命令
        </td>
        <td>
          观察$*和$@的不同：<br />for i in &quot;$*&quot;<br />do<br /><span
            style="mso-spacerun:yes;"
            >&nbsp;&nbsp;</span
          >echo $i<br />done<br /><br />for i in &quot;$@&quot;<br />do<br /><span
            style="mso-spacerun:yes;"
            >&nbsp;&nbsp;</span
          >echo $i<br />done
        </td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>wc</td>
        <td>统计字数</td>
        <td>
          -l：表示lines，行数<br />
          -w：表示words，单词数 量<br />
          -c：表示bytes，字节数 <br />
        </td>
        <td>
          cat /etc/passwd | wc -l <br />
          wc -lwc ./* <br />
          wc -l a.txt
        </td>
      </tr>
      <tr height="36">
        <td>sleep</td>
        <td>等待</td>
        <td></td>
        <td>sleep 5 暂停5秒<br />usleep 500 这个单位是纳秒</td>
      </tr>
      <tr>
        <td>read</td>
        <td>从键盘读入信息到变量中</td>
        <td></td>
        <td>read name</td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td></td>
        <td>变量赋值</td>
        <td></td>
        <td>
          PATH=&quot;$PATH&quot;:/root<br />LANG=C<br />LANG=zh_CN.gb2312<br />PS1='[\u@\h
          \W]\$ '
        </td>
      </tr>
      <tr height="36">
        <td>set</td>
        <td>显示当前shell的变量，包括当前用户的变量（即环境变量）</td>
        <td></td>
        <td>set</td>
      </tr>
      <tr>
        <td>unset</td>
        <td>删除变量</td>
        <td></td>
        <td>unset i</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>export</td>
        <td>
          把变量即刻导入到当前的用户环境中（被export的变量叫环境变量），这时可以在env中看到
        </td>
        <td>环境变量相当可以被子进程使用，其他变量不行。</td>
        <td>export LANG=C<br />export LC_ALL=en</td>
      </tr>
      <tr height="54" style="height:40.50pt;">
        <td>env</td>
        <td>显示当前用户环境的变量（被export的变量可以用env查看到）</td>
        <td></td>
        <td>env</td>
      </tr>
      <tr height="36">
        <td>alias</td>
        <td>命令别名</td>
        <td></td>
        <td>alias ll<br />alias l=ls -la</td>
      </tr>
      <tr>
        <td>unalias</td>
        <td>取消命令别名</td>
        <td></td>
        <td>unlias l</td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>sort</td>
        <td>对文件内容做排序</td>
        <td>-n 以数字排序<br />-r 反向排序<br />-u 同样的只出现一次</td>
        <td>sort -n name.txt</td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>cut</td>
        <td>提取字符串</td>
        <td>-c 字符<br />-d 分隔符<br />-f 字段</td>
        <td>
          cat /etc/passwd | cut -d &quot;:&quot; -f1<br />last | cut -d &quot;
          &quot; -f1 列出第一个区块<br />who | cut -c1-8,18-
          每行的1-8个字符和第18行到行尾<br />cut -d: -f1,6 /etc/passwd
        </td>
      </tr>
      <tr height="72" style="height:54.00pt;">
        <td>paste</td>
        <td>和cut相反的命令，合并行</td>
        <td>-d 指定合并的分隔符<br />-s 把文件内的所有行合并为一行</td>
        <td>
          paste names numbers 把两个文件的每行都分别合起来<br />paste -d'+'
          names addresses numbers<br />paste -s names<br />ls | paste -d' ' -s
        </td>
      </tr>
      <tr height="36">
        <td>join</td>
        <td>把两个文件中相同的行连起来</td>
        <td></td>
        <td>
          join -t ':' /etc/passwd /etc/shadow<br />join -t ':' -1 4 /etc/passwd
          -2 3 /etc/group
        </td>
      </tr>
      <tr height="198" style="height:148.50pt;">
        <td>sed</td>
        <td>Stream Editor流编辑器</td>
        <td>-n</td>
        <td>
          sed 's/Unix/UNIX/' myFile
          把Unix换成UNIX（没改原文件），但只改动每行的第一个改掉<br />sed
          's/Unix/UNIX/g' myfile &gt; temp.txt 把每行的所有Unix都换成UNIX<br />sed
          '1,2d' myfile 删除第1、2行<br />sed '/[Tt]est/d'
          删除含test或Test的行<br />sed '/jan/s/fds/abc/'
          将所有包含了jan的行中第1个fds改为abc<br />sed -n '20,25p' text
          只显示第20到25行<br />sed 's/…//' data 删除文件中每行的前3个字符<br />sed
          's/…$//' data 删除文件中每行的最后3个字符
        </td>
      </tr>
      <tr>
        <td>awk</td>
        <td></td>
        <td></td>
        <td>
          <span style="mso-spacerun:yes;"></span
          >通过正则匹配，切割，提取需要的值<span style="mso-spacerun:yes;"
            >&nbsp;&nbsp;</span
          >
        </td>
      </tr>
      <tr>
        <td>diff</td>
        <td>比较两个文件的不同</td>
        <td></td>
        <td>diff file1 file2</td>
      </tr>
      <tr height="36">
        <td>uniq</td>
        <td>删除重复行从而只显示一个</td>
        <td></td>
        <td>
          last | cut -d &quot; &quot; -f1 | sort | uniq<br />查看这个月登录主机的用户都有谁
        </td>
      </tr>
      <tr>
        <td>source</td>
        <td>执行脚本</td>
        <td></td>
        <td>source helloworld.sh</td>
      </tr>
      <tr>
        <td>tee</td>
        <td>输出到文件的同时显示在屏幕上</td>
        <td>-a 追加到末尾</td>
        <td></td>
      </tr>
      <tr height="36">
        <td>tr</td>
        <td>替换指定内容</td>
        <td>-d 删除指定串<br />-s 替换重复字符</td>
        <td>
          cat dostxt | tr -d '\r' &gt; dostxt-noM <br />去掉文件中的DOS下的 ^M
          断行符
        </td>
      </tr>
      <tr height="36">
        <td>split</td>
        <td>分割文件</td>
        <td>-b 以文件size分<br />-l 以行数分</td>
        <td>split -l 5 /etc/passwd test</td>
      </tr>
      <tr>
        <td rowspan="3" style="">test</td>
        <td>测试文件</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>测试字符串</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>测试数值</td>
        <td></td>
        <td></td>
      </tr>
      <tr height="36">
        <td>expr</td>
        <td></td>
        <td></td>
        <td>
          expr 10 + 10 只算整数，真正的计算要用bc（计算器）<br />expr 3 \* 7
          乘号要转义
        </td>
      </tr>
      <tr height="144" style="height:108.00pt;">
        <td>函数</td>
        <td></td>
        <td></td>
        <td>
          下例可以看出$*和$@的区别：<br />function testargs<br />{<br /><span
            style="mso-spacerun:yes;"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >echo &quot;There is $# args&quot;<br /><span
            style="mso-spacerun:yes;"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >echo $10<br />}<br />testargs &quot;$*&quot;<br />testargs
          &quot;$@&quot;
        </td>
      </tr>
      <tr>
        <td rowspan="2" style="">条件判断</td>
        <td>if</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>case</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="3">循环</td>
        <td>while … do … done</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>until … do … done</td>
        <td></td>
        <td></td>
      </tr>
      <tr height="19" style="height:14.25pt;">
        <td>for … do … done</td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
td {
  padding: 5px;
  word-wrap: normal;
  // white-space:nowrap;
}
</style>

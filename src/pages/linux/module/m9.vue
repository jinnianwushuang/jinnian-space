<!--
 * @Date           : 2021-01-30 01:10:55
 * @FilePath       : /jinnian-space/src/pages/linux/module/m9.vue
 * @Description    : 
-->
<template>
    <div>
<pre>
 <code>     
一、查看日志和机器相关信息常用命令

1、cat
cat 命令连接文件并打印到标准输出设备上，cat经常用来显示文件的内容，类似于下的type命令
注意：当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。因此，一般用more等命令分屏显示。为了控制滚屏，可以按Ctrl+S键，停止滚屏；按Ctrl+Q键可以恢复滚屏。按Ctrl+C（中断）键可以终止该命令的执行，并且返回Shell提示符状态。

2、tail 

tail命令  用于输入文件中的尾部内容。tail命令默认在屏幕上显示指定文件的末尾10行。如果给定的文件不止一个，则在显示的每个文件前面加一个文件名标题。如果没有指定文件或者文件名为“-”，则读取标准输入。

常用参数：

-f&lt;name/descriptor&gt;或；--follow&lt;nameldescript&gt;：显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。“-f”与“-fdescriptor”等效；
-n&lt;N&gt;或——line=&lt;N&gt;：输出文件的尾部N（N位数字）行内容。
-s&lt;秒数&gt;或——sleep-interal=&lt;秒数&gt;：与“-f”选项连用，指定监视文件变化时间隔的秒数；　　


二、实际操作须知

1、日志文件说明

/var/log/message     //系统启动后的信息和错误日志，是Red Hat Linux中最常用的日志之一
/var/log/secure      //与安全相关的日志信息
/var/log/maillog    //与邮件相关的日志信息
/var/log/cron       //与定时任务相关的日志信息
/var/log/spooler    //与UUCP和news设备相关的日志信息
/var/log/boot.log   //守护进程启动和停止相关的日志消息
2、查看系统信息

# uname -a                # 查看内核/操作系统/CPU信息
# cat /etc/issue
# cat /etc/redhat-release # 查看操作系统版本
# cat /proc/cpuinfo       # 查看CPU信息
# hostname                # 查看计算机名
# lspci -tv               # 列出所有PCI设备
# lsusb -tv               # 列出所有USB设备
# lsmod                   # 列出加载的内核模块
# env                     # 查看环境变量
3、查看系统运行资源　　

# free -m                     # 查看内存使用量和交换区使用量
# df -h                       # 查看各分区使用情况
# du -sh &lt;目录名&gt;             # 查看指定目录的大小
# grep MemTotal /proc/meminfo # 查看内存总量
# grep MemFree /proc/meminfo  # 查看空闲内存量
# uptime                      # 查看系统运行时间、用户数、负载
# cat /proc/loadavg           # 查看系统负载
4、查看系统磁盘和分区信息

# mount | column -t  # 查看挂接的分区状态
# fdisk -l                  # 查看所有分区
# swapon -s             # 查看所有交换分区
# hdparm -i /dev/hda  # 查看磁盘参数(仅适用于IDE设备)
# dmesg | grep IDE  # 查看启动时IDE设备检测状况
5、查看网络信息　　

# ifconfig        # 查看所有网络接口的属性
# iptables -L     # 查看防火墙设置
# route -n        # 查看路由表
# netstat -lntp   # 查看所有监听端口
# netstat -antp   # 查看所有已经建立的连接
# netstat -s      # 查看网络统计信息
6、查看进程　　

# ps -ef   # 查看所有进程
# top      # 实时显示进程状态
7、查看用户信息

# w                       # 查看活动用户
# id &lt;用户名&gt;             # 查看指定用户信息
# last                    # 查看用户登录日志
# cut -d: -f1 /etc/passwd # 查看系统所有用户
# cut -d: -f1 /etc/group  # 查看系统所有组
# crontab -l              # 查看当前用户的计划任务
8、查看服务

# chkconfig –list           # 列出所有系统服务
# chkconfig –list | grep on # 列出所有启动的系统服务
9、查看系统安装程序　　

# rpm -qa   # 查看所有安装的软件包　　


 </code>
</pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
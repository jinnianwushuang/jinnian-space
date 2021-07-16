<!--
 * @Date           : 2021-07-15 00:12:03
 * @FilePath       : /jinnian-space/src/pages/linux/md/linux-yum+LAMP开源部署.md
 * @Description    : 
-->

# YUM+LAMP开源部署 Discuz 论坛

# YUM

## 1、什么是YUM

在CentOS系统中，软件管理方式通常有三种方式：`rpm安装`、`yum安装`以及`编译安装`。

```powershell
编译安装，从过程上来讲比较麻烦，包需要用户自行下载，下载的是源码包，需要进行编译操作，编译好了才能进行安装，这个过程对于刚接触Linux的人来说比较麻烦，而且还容易出错。好处在于是源码包，对于有需要自定义模块的用户来说非常方便。(就业班会着重讲解)
```

难度：编译安装 > rpm安装 > yum安装（有网络 + yum源支持）

Yum（全称为 `Yellow dog Updater, Modified`）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。

基于rpm包管理，能够从**指定的服务器**(yum源）自动下载RPM包并且安装，可以==自动处理依赖性关系==，并且==一次安装所有依赖的软件包==，无须繁琐地一次次下载、安装。

> rpm和yum区别？答：① yum底层也是基于rpm进行安装的（yum安装的软件，可以通过rpm -qa进行查询） ② yum相对于rpm最大的优势，可以解决依赖关系。
>
> A => B => C

## 2、YUM源配置

![image-20200326115612781](media/image-20200326115612781.png)

YUM源配置文件所在路径 => /etc/yum.repos.d文件夹

-rw-r--r--. 1 root root 1991 Mar 28  2017 CentOS-Base.repo            网络yum源配置文件
-rw-r--r--. 1 root root  647 Mar 28  2017 CentOS-Debuginfo.repo    内核相关的更新包
-rw-r--r--. 1 root root  289 Mar 28  2017 CentOS-fasttrack.repo       快速通道
-rw-r--r--. 1 root root  630 Mar 28  2017 CentOS-Media.repo           本地yum源配置文件
-rw-r--r--. 1 root root 7989 Mar 28  2017 CentOS-Vault.repo          最近版本加入老本的YUM配置   

扩展：在YUM镜像源中添加阿里云镜像源

```powershell
第一步：备份CentOS-Base.repo这个源（更改后缀名.repo => .repo.bak）
# mv CentOS-Base.repo CentOS-Base.repo.bak

第二步：使用wget命令下载阿里云的镜像文件
# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

选项说明：
-O ：指定文件下载的位置以及名称
第三步：清理YUM缓存
# yum clean all

第四步：重新建立缓存（让新YUM源生效）
# yum makecache
```

## 3、yum命令详解

### ☆ 搜索要安装的软件

```powershell
# yum search 软件名称的关键词
```

案例：搜索阿里云仓库中的vim软件

```powershell
# yum search vim
```

案例：搜索firefox火狐浏览器

```powershell
# yum search firefox
```

### ☆ 使用yum安装软件

基本语法：

```powershell
# yum install 软件名称关键词 [选项]
选项：
-y ：yes缩写，确认安装，不提示。
```

案例：使用yum命令安装vim编辑器

```powershell
# yum install vim -y
```

案例：使用yum命令安装firefox浏览器

```powershell
# yum install firefox -y
```

### ☆ 使用yum卸载软件

```powershell
# yum remove 软件名称关键词 [选项]
选项：
-y ：yes缩写，确认卸载，不提示。
```

案例：把firefox火狐浏览器进行卸载操作

```powershell
# yum remove firefox -y
```

案例：把httpd软件进行强制卸载

```powershell
# yum remove httpd -y
```

### ☆ 使用yum更新软件

基本语法：

```powershell
# yum update 软件名称关键词 [选项]
选项：
-y ：yes缩写，确认更新，不提示
```

案例：把vim编辑器进行更新操作

```powershell
# yum update vim -y
```

案例：把firefox火狐浏览器进行更新操作

```powershell
# yum update firefox -y
```

# 三、LAMP概述

## 1、什么是LAMP

LAMP：==L==inux + ==A==pache + ==M==ySQL + ==P==HP                        LAMP 架构（组合）

LNMP：Linux + Nginx + MySQL + php-fpm                             LNMP 架构（组合）

LNMPA：Linux + Nginx(80) + MySQL + PHP + Apache           Nginx 代理方式

![image-20200326152052773](media/image-20200326152052773.png)

Apache：Apache是世界使用排名第一的Web服务器软件。

PHP：一种专门用于Web开发的编程语言。

MySQL：MySQL是一个关系型数据库管理系统，主要用于永久存储项目数据。

## 2、AMP三者之间的关系

![image-20200326152231295](media/image-20200326152231295.png)

Apache：用于接收用户的请求（输入网址，返回网页=>结果）

PHP：注册、登录、加入购物车、下单、支付等动态功能（有编程语言的支持）

MySQL：永久保存数据，比如你在网站上注册的用户和密码、你加入购物车的产品、你的产品订单

LAMP = Linux + APache + PHP + MySQL

# 四、阿里云详解

要想部署一个互联网上可以访问到的环境，必须先具备以下内容 ：

服务器（IP、帐号密码、终端）、相应的软件、域名（备案、解析）、代码等。

![image-20200326154214921](media/image-20200326154214921.png)

代码：前端工程师 + 后端工程师进行开发提供的！

## 1、注册阿里云账号

阿里云官网：https://www.aliyun.com/

![image-20200326154527903](media/image-20200326154527903.png)

> 特别说明：云服务器的厂商特别多，你可以进行任意选择 => 阿里云、百度云、腾讯云、华为云...

注册时建议使用支付宝，方便快捷。最重要：付款方便

## 2、实名认证（上传身份证照片）

第一步：单击账号下方的实名认证（选择个人认证）

![image-20200326155133047](media/image-20200326155133047.png)

![image-20200326155146301](media/image-20200326155146301.png)

第二步：选择支付宝授权认证（及时开通，无需等待）

![image-20200326155223066](media/image-20200326155223066.png)

第三步：勾选同意，点击提交

![image-20200326155308208](media/image-20200326155308208.png)

第四步：使用手机支付宝扫描二维码，进行授权

![image-20200326155339781](media/image-20200326155339781.png)

第五步：填写相关信息（住址）

![image-20200326155358292](media/image-20200326155358292.png)

填写完毕，即可完成认证。

![image-20200326155428202](media/image-20200326155428202.png)

## 3、购买阿里云的ECS云服务器

第一步：回到阿里云首页，找到弹性计算 => ECS云服务器

![image-20200326161759062](media/image-20200326161759062.png)

第二步：单击立即购买，购买ECS服务器（选区域、选配置）

![image-20200326161916781](media/image-20200326161916781.png)

第三步：选择付费模式、选择CPU与内存的配置

![image-20200326162659403](media/image-20200326162659403.png)

第四步：选择镜像（CentOS7.6）与云盘（硬盘）

![image-20200326162845467](media/image-20200326162845467.png)

第四步：设置网络、公网IP以及安全组（重要）

![image-20200326163143681](media/image-20200326163143681.png)

> 用户 =>  阿里云安全组  =>  firewalld防火墙  => Linux服务器

第五步：设置root账号密码（一定要选择自定义密码）

![image-20200326163533492](media/image-20200326163533492.png)

> 8 - 30 个字符，必须同时包含三项（大写字母、小写字母、数字、 ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ 中的特殊符号），其中 Windows 实例不能以斜线号（/）为首字符

第六步：设置释放时间 => 什么时候删除这台服务器（不收钱）

![image-20200326163830484](media/image-20200326163830484.png)

> 特别说明：只有个人购买的ECS服务器可以设置释放时间，生产环境一定不要设置释放时间，否则后果自负！！！

第七步：进入管理控制台，找到我们刚才购买的ECS服务器，如下图所示：

![image-20200326164148544](media/image-20200326164148544.png)

> 使用MX软件，直接连接公网IP + root账号 + 自定义的密码即可连接

## 4、使用MX连接ECS服务器

![image-20200326164519379](media/image-20200326164519379.png)

## 5、使用yum安装sl小工具

安装过程：

```powershell
# yum install sl -y
```

使用sl命令：

```powershell
# sl
```

# LAMP项目部署实战

# 一、LAMP环境部署

## 1、回顾LAMP

LAMP = Linux + Apache + MySQL + PHP

![image-20200327093726255](media/image-20200327093726255.png)

Apache：主要用于接收用户的请求，处理业务逻辑，返回结果给客户端（浏览器）

PHP：编程语言的一种，主要应用于Web开发。主要实现注册、登录、加入购物车、下单、支付等功能

MySQL：数据库，删库到跑路，这里的"库"就是指数据库。永久保存数据

## 2、LAMP部署前期准备

### ☆ 关闭防火墙

```powershell
# systemctl stop firewalld
# systemctl disable firewalld
```

### ☆ 关闭SELinux

*SELinux*(Security-Enhanced Linux) 是美国国家安全局（NSA）对于强制访问控制的实现，是 Linux历史上最杰出的新安全子系统。

获取SELinux的状态：

```powershell
# getenforce
```

临时关闭SElinux：重启后SELinux还会自动启动

```powershell
# setenforce 0
```

永久关闭SELinux：编辑SELinux的配置文件

```powershell
# vim /etc/selinux/config
SELINUX=disabled
```

### ☆ 检查系统中是否已安装Apache

```powershell
# rpm -qa |grep httpd

# rpm -e httpd-2.4.6-90.el7.centos.x86_64
# rpm -e httpd-tools-2.4.6-90.el7.centos.x86_64
```

### ☆ 检查系统中是否已安装MySQL

```powershell
# rpm -qa |grep mysql
```

### ☆ 检查系统中是否已安装PHP

```powershell
# rpm -qa |grep php
```

> AMP安装指南：在Linux中安装AMP必须先安装Apache，在安装MySQL，最后安装PHP

## 3、LAMP环境之Apache安装

Apache：阿帕奇，Apache基金会

httpd软件 => 前身apache，随着时间的推移以及互联网行业的发展，越来越多的软件加入到了Apache的基金会。

第一步：安装httpd软件

```powershell
# yum install httpd -y
```

第二步：配置/etc/httpd/conf/httpd.conf文件

```powershell
# vim /etc/httpd/conf/httpd.conf
/ServerName => 搜索
96 ServerName localhost:80
```

> localhost ： 代表本机，对应的IP地址可以使127.0.0.1或本机的公网IP

第三步：启动httpd服务

```powershell
# systemctl start httpd
```

第四步：把httpd服务添加到开机启动项中

```powershell
# systemctl enable httpd
```

第五步：使用ss或netstat命令查询httpd占用的端口

```powershell
# netstat -tnlp |grep httpd
或
# ss -naltp |grep httpd
```

第六步：在浏览器中，使用公网IP访问阿里云服务器

![image-20200327104156113](media/image-20200327104156113.png)

## 4、LAMP环境之MySQL安装

### ☆ 下载MySQL的官网yum源

由于yum源上默认没有mysql-server。所以必须去官网下载后在安装

```powershell
# wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
```

### ☆ 安装MySQL的官网镜像源

```powershell
# rpm -ivh mysql-community-release-el7-5.noarch.rpm
```

### ☆ 使用yum安装mysql最新版软件

```powershell
# yum install mysql-community-server -y
```

> MySQL软件是一个C/S架构的软件，拥有客户端与服务器端。mysql-server服务器端（内部也包含了客户端），community代表社区版（免费开源）

### ☆ 启动mysql，查看端口占用情况

```powershell
# systemctl start mysqld
# netstat -tnlp |grep mysqld
```

### ☆ MySQL数据库初始化（重要）

默认情况下，数据库没有密码，也没有任何数据，必须要初始化

#### ① 初始化数据，设置root密码（MySQL管理员）

```powershell
# mysql_secure_installation
```

![image-20200327114309107](media/image-20200327114309107.png)

> 扩展：以上说的root和Linux中的root不是同一个用户，这个root代表MySQL数据库的管理员，只不过这个管理员也叫root。

![image-20200327114444955](media/image-20200327114444955.png)

![image-20200327114530976](media/image-20200327114530976.png)

> 学习环境下，密码越简单越好。生产环境下越复杂越好。

![image-20200327114717525](media/image-20200327114717525.png)

![image-20200327114820459](media/image-20200327114820459.png)

![image-20200327114907975](media/image-20200327114907975.png)

![image-20200327114951007](media/image-20200327114951007.png)

#### ② 把mysqld服务添加到开机启动项

```powershell
# systemctl enable mysqld
```

默认已经开机启动，这里可以跳过

#### ③ 连接MySQL数据库，测试

```powershell
# mysql -u root -p 回车
Enter password:输入刚才设置的密码，如123，回车
mysql> show databases;    =>   代表显示所有数据库
mysql> exit
```

## 5、LAMP环境之PHP安装

### ☆ 使用yum命令安装php软件

```powershell
# yum install php -y
```

### ☆ 使用systemctl启动php软件（重启Apache）

```powershell
# systemctl restart httpd
```

> 为什么启动php就是重启Apache呢？答：因为LAMP架构中，PHP是以模块的形式追加到Apache的内核中，所以启动php就相当于重置Apache软件

![image-20200327142246747](media/image-20200327142246747.png)

### ☆ 测试LAMP环境是否可以使用

第一步：使用cd命令进入/var/www/html目录

```powershell
# cd /var/www/html
Apache的项目目录 => /var/www/html，以后程序员开发的代码都是放置于此目录
```

第二步：使用vim命令创建demo.php文件

```powershell
# vim demo.php
```

第三步：编写php代码

```php
<?php
	echo 'hello world';
?>
```

编写完成后，保存退出，然后在浏览器中使用http://公网IP/demo.php

![image-20200327142839268](media/image-20200327142839268.png)

# 二、部署Discuz!论坛

## 1、Discuz!论坛概述

Discuz！论坛是基于PHP + MySQL进行开发的一套开源的论坛系统。

![image-20200327151556113](media/image-20200327151556113.png)

## 2、下载源代码

下载地址：https://gitee.com/ComsenzDiscuz/DiscuzX  （码云）

![image-20200327151754516](media/image-20200327151754516.png)

## 3、使用MX软件把Discuz源代码上传

阿里云：

![image-20200327152029513](media/image-20200327152029513.png)

本地Linux类似

## 4、安装unzip解压缩软件

```powershell
# yum install unzip -y
```

## 5、使用unzip对discuz.zip压缩包进行解压

```powershell
# unzip discuz.zip
```

## 6、复制discuz中的文件到/var/www/html目录

```powershell
# mv discuz/* /var/www/html/
或
# cp -vRp disczu/* /var/www/html/
```

## 7、打开浏览器，输入公网IP地址

![image-20200327153135696](media/image-20200327153135696.png)

## 8、单击同意许可，继续安装

![image-20200327154443886](media/image-20200327154443886.png)

## 9、给/var/www/html目录设置可写权限

```powershell
# chmod -R a+w /var/www/html
```

> 注意：以上操作是给所有文件添加一个w权限，但是生产环境尽量针对指定文件添加权限。

## 10、解决PHP扩展问题

![image-20200327154906078](media/image-20200327154906078.png)

以上提示代表，安装PHP时没有安装php-mysqli扩展，所以会出现以上问题。

```powershell
# yum install php-mysqli -y
# systemctl restart httpd
```

## 11、设置运行环境

![image-20200327155142197](media/image-20200327155142197.png)

## 12、设置MySQL数据库的相关信息

![image-20200327155441330](media/image-20200327155441330.png)

## 13、设置管理员账号和密码

![image-20200327155536618](media/image-20200327155536618.png)

## 14、安装完成后，访问论坛首页

![image-20200327155648008](media/image-20200327155648008.png)

部署后，访问论坛首页，如下图所示：

![image-20200327155712092](media/image-20200327155712092.png)

# 三、域名与解析

## 1、为什么需要域名

我们现在访问论坛是通过IP地址实现的，但是IP地址比较复杂，更重要的是不方便用户记忆。

域名 => 代替公网IP地址

## 2、购买域名

![image-20200327162641419](media/image-20200327162641419.png)

登录控制台，然后选择域名菜单：

![image-20200327162742162](media/image-20200327162742162.png)

找到域名注册菜单：

![image-20200327162831242](media/image-20200327162831242.png)

找到想要注册的域名，然后加入清单，然后进行立即结算：

![image-20200327163458795](media/image-20200327163458795.png)

购买完成后，进入域名控制台：

![image-20200327163713347](media/image-20200327163713347.png)

## 3、把域名解析到公网IP

![image-20200327163913091](media/image-20200327163913091.png)

进入解析菜单，然后添加记录：

![image-20200327164010354](media/image-20200327164010354.png)

① 把www.itcast.top解析到公网IP

![image-20200327164144887](media/image-20200327164144887.png)

② 把itcast.top解析到公网IP

![image-20200327164318781](media/image-20200327164318781.png)

以上记录添加完成后，等待10分钟左右，即可使用域名访问论坛项目了！

## 4、域名备案

如果在国内运行项目，我们使用的域名必须要进行备案操作。

备案就是向工信部提交网站运行的相关资料，比如域名的证书、持有者的身份证号码，以及真人手持身份证照片（背景图）

由于现在监管比较严格，提交资料后，大概5-7个工作日进行审核，完全备案完成大概2周左右。

> https://beian.aliyun.com/



如果不想进行域名备案，可以购买中国香港、中国台湾以及国外的服务器，可以免备案。但是其运行速度略慢一些。
| 目录       | 应放置文件内容                                               |
| ---------- | ------------------------------------------------------------ |
| bin        | 二进制文件的目录（就是可执行程序的目录）                     |
| boot       | 系统启动时需要读取的目录                                     |
| dev        | 存放设备文件的目录（device） Linux中，设备分为两种：块设备（block）、字符设备（character）。 硬盘、软驱、光驱都属于“块设备”， 鼠标、键盘都属于“字符设备”。 |
| etc        | 系统的配置文件（系统的信息存放在这里，比如我们的帐号以及密码） |
| home       | 普通用户的主目录，类似于Windows的C:\Documents and Settings下的目录 |
| root       | 超级用户的主目录，也就是root的主目录，类似于C:\Documents and Settings\Administrator |
| initrd     | 初始化的目录，比如我们希望系统开机的时候配置一下IP           |
| lib        | 库函数的目录（Library），类似“外挂”目录                      |
| lost+found | 系统出错时，会存放一些丢失的文件在这个目录里                 |
| media      | 存放一些可删除的设备文件                                     |
| mnt        | 存放一些临时需要挂载（mount）的设备                          |
| opt        | 类似于windows的Programfiles目录，一般是用来安装程序的。optional（可选） |
| proc       | 特殊目录。这里的所有文件都不是在硬盘里的，而是在内存里的。也就是这个目录的文件都是内存的真实映射。 |
| sbin       | 类似于bin目录。区别在于sbin目录的东西都是给superuser的，即superuser'sbin |
| selinux    | SecureLinux关于安全策略的配置                                |
| srv        | 服务需要取的数据目录                                         |
| sys        | 跟proc类似，也是记录和内核相关的信息。同样不占硬盘空间       |
| tmp        | 临时目录temporary                                            |
| usr        | 类似于前面的opt目录，但是存放在这个地方的软件都是很重要的。相当于windows里C:\WINDOWS和C:\Program Files的综合体。Usr=Unix Software Resource. |
| var        | 常态性变动的文件，比如缓存、mysql文件、mail的数据            |

| Linux7个运行级别： |                                       |
| ------------------ | ------------------------------------- |
| 0                  | 表示关机                              |
| 1                  | 单用户模式，就是Windows中的“安全模式” |
| 2                  | 断网状态下的多用户模式                |
| 3                  | 纯命令行模式（强烈推荐使用此模式）    |
| 4                  | 还没想好做什么用的模式（保留模式）    |
| 5                  | 图形用户界面（X-Window）              |
| 6                  | 表示重启（一开机就会重启）            |
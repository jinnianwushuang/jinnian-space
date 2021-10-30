```
      在mac下npm install的错误处理
sudo －s      权限问题

command+shift+G，前往文件夹
command+shift+. 显示隐藏文件
open ~/.bash_profile .  打开文件
source ~/.bash_profile   立即生效
PATH=$PATH:~/.composer/vendor/bin  添加 path


mac 终端 一些命令

sudo －s      权限问题
cd downloads
mkdir  生成文件夹
cd    进入 
cd ../server
ls    列出当前文件夹下的文件夹
touch js/class/test.js   创建test 文件，并 初始化
touch views/index.ejs  初始化创建 入口 模板文件

clear   清空 
    
        mac退出bash-32
        https://blog.csdn.net/qingtian12138/article/details/68065272

今天准备学Scala，配环境的时候，不知道怎么弄得，晕晕乎乎把终端root了，打开就显示bash-32，不显示当前工作路径了，输入exit也没用，打开还是bash, 搜了一下午解决方案，都不好使，咨询了大神，终于弄好了，下面记录下来。
出现这种情况的原因是进了shell环境，我们首先检查终端是不是一打开就默认进shell环境，
左上角打开终端的偏好设置，将shell的打开方式那一栏选命令


然后重启终端，看看问题是不是解决了，如果还是不行，接着下一步
输入vi ~/.bash_profile
打开配置文件，输入i进入编辑页面，在最后一行加入
export PS1='[\u@\h \w]\$'

然后按Esc退出编辑模式，输入大写ZZ保存退出。
然后执行
source ~/.bash_profile
重启终端，问题解决！


其实呢，加进去的那一行是bash可识别的转义序列
bash可识别的转义序列有下面这些：
\u 用户名
\h 主机名第一部分
\H 主机名全称
\w 当前工作目录（如 “/home/username/mywork”）
\W 当前工作目录的“基名 (basename)”（如 “mywork”)
\t 24 小时制时间
\T 12 小时制时间
\@ 带有 am/pm 的 12 小时制时间
\d “Sat Dec 18″ 格式的日期
\s shell 的名称（如 “bash”)
\v bash 的版本（如 2.04）
\V Bash 版本（包括补丁级别）
\n 换行符
\r 回车符
\\ 反斜杠
\a ASCII 响铃字符（也可以键入 07）
\e ASCII 转义字符（也可以键入 33)
这个序列应该出现在不移动光标的字符序列（如颜色转义序列）之前。它使bash能够正确计算自动换行。
这个序列应该出现在非打印字符序列之后。
知道了全部的转义序列，就可以对自己的终端提示符进行定制了。


    
```
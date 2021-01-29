<!--
 * @Date           : 2021-01-29 00:52:36
 * @FilePath       : /jinnian-space/src/pages/linux/md/shell.md
 * @Description    : 
-->
## shell
​	***\*S\*******\*hell程序设计\****	

一、 什么是shell?

​	Shell是一个作为用户与Linux系统间接口的程序，它允许用户向操作系统输入需要执行的命令。在一个linux系统中可以安装多个shell，这些shell和其他程序一起环绕在linux内核四周。默认安装的标准是/bin/sh，它是GNU工具集中的bash。使用/bin/bash –version可以查看版本。

Shell 历史版本：sh  csh,、tcsh、 zsh  ksh、pdksh  bash

二、 shell脚本编写、运行、调试

\1. 脚本均以 #!/bin/bash开头。

\2. 脚本中的 ‘#’为注释符。

\3. 使用exit为脚本设置返回一个退出码，注意 0 表示的是执行成功。

示例：

 \#!/bin/bash

 \# this is my first shell! 

 echo  “helloword!”

 exit 0

 

\4. 设置脚本为可执行： chmod u+x filename.sh

\5. 执行：./filename.sh

\6. sh –x ./filename.sh

三、 shell语法

**1、** ***\*变量\****：无需事先声明，直接使用，在访问时要加$在变量前。

例如：

Str=hello

echo  $Str 

a.这两行语句将在屏幕输出一个“hello”，shell区别大小写，定义变量时应该注意。

b.如果为变量所赋的字符串中含有空格，table或换行符应使用“”标示，例如 “hello  word!”

c.变量在引号中依然有效如echo “this  is  $Str！”依然会输出：this  is  hello！

练习示例：(注:后续的示例中只有关键部分，练习时补全)

echo “input  password:”

read pasd

echo “the password is $pasd”

d.如果需要输出字符$Str可以用单引号 和 \来处理：

 ‘$Str’ 和\$Str 输出的都是 $Str不是变量表示的值，shell中的变量一般都是字符串形式。

e: 环境变量，介绍几种：

$HOME  当前用户的家目录 

$PATH   搜索命令的目录列表

$0			shell脚本的名字

$#			传递给脚本的参数个数

$$			脚本的进程号

f:参数变量：

$1,$2脚本的程序参数

$*   列出所有参数

$@   S*的一种变体，它参数不会挤在一块。

g:变量做整形数字使用：

a=123

let “a +=1”

echo “a = $a”

**2、** ***\*条件\****

1) 使用 test 或 [ ]

如  if test –f file.c

then

…..

fi

​    以上代码也可写成如下形式(尽量使用这种形式)

​     if [ -f file.c ]  (注意:if语句和[之间有个空格]

​    then

​     ….

​     fi

完整示例：

\#!/bin/bash

echo  “is  it  morning? Please  answer  yes  or  no”

read  timeofday

if [ $timeofday = “yes” ] ;then

  echo  “good morning”

else

  echo  “good afternoon”

fi

exit 0

2) elif语句，在if，else语句中增加分支判断。如下示例：

  \#!/bin/bash

echo  “is  it  morning? Please  answer  yes  or  no”

read  timeofday

if [ $timeofday = “yes” ] ;then

   echo  “good morning”

elif [ $timeofday = “no” ]

then

  echo “Good afternoon”

else

  echo “sorry ,$timeofday not recognized. Enter yes or no”

  exit 1

fi

exit 0

**3、** ***\*一个与变量有关的问题。\****

如上程序，如果没有输入Yes和no直接按回车键，会出现什么结果呢？程序会有出错信息。原因是。。。避免该问题产生的方法对变量使用双引号“$Str”

**4、** ***\*for语句\****

使用for语句可以循环处理一组值，这组值可以是任意字符串的集合。 它的语法形式如下：

***\*for\**** variable  ***\*in\**** values

***\*do\****

  something

***\*done\****

 示例：

  \#!/bin/bash

  For foo in hello myname 129

  do

   echo $foo

  done

  exit 0

使用通配符扩展for循环

\#!/bin/sh

for file in $(ls  *.sh);do

 echo $file

done

exit 0

***\*5、while语句\****

语法结构：

***\*while\**** condition ***\*do\****

Dosometing

***\*done\****

示例：一个简陋的密码检查程序

\#!/bin/bash

echo  “Enter password”

read  paword

while  [ “$paword” != “secret” ] 

do

  echo “sorry, try again ”

  read paword 

done

exit 0

字符串比较:

string = string  

string != string

-n string

-z string 

 算数比较

 num1 –eq  num2 

 num1 –ne  num2

 

***\*6、until语句,与while循环类似，只是把测试条件反过来了。\****

语法形式如下：

***\*until\**** condition

***\*do\****

  Dosomething

***\*done\****

***\*7、case语句\****

***\*语法结构:\****

***\*case\****  variable ***\*in\****

pattern1 [ ***\*|\**** pattern] …***\*)\****  dosomething ***\*;;\****

pattern2 [ ***\*|\**** pattern] …***\*)\****  dosomething ***\*;;\****

***\*esac\****

该语句 执行 vairable与第一个pattern匹配上的语句。

例如：

\#!/bin/bash

echo “is it morning? Please answer yes or no”

read  timeofday

case “$timeofday” in

   yes ) echo “good moring”;;

   no ) echo “good afternoon”;;

y) echo “good morning”;;

n) echo “good afternoon”;;

*)echo “sorry,answer not recognized” ;;

 esac

 exit 0

 匹配部分语句也可改写为：

 case  “$timeofday” in

​    yes | y | Yes | YES ) echo “good morning”;;

​    n* | N* )     echo “good afternoon”;;

​    *)        echo “sorry, answer not recognized”;;

 esac

也可以将匹配行改为; [yY]|[Yy][Ee][Ss]

***\*8、命令列表\****

 有时需要将好几条命令连接成一个序列。如下

 if [ -f this_file ]; then

   if [ -f that_file ]; then

​     if [ -f the_other_file ]; then

​       echo “all  files present, and correct”

​     fi

   fi

fi

 

***\*9、AND列表\****

  只有在前一条命令执行成功返回true才执行下一条。语法结构：

 Statement1  ***\*&&\**** Statement1  ***\*&&\**** Statement1  ***\*&&\**** ***\*…\****

示例:

\#!/bin/bash

touch file_one	

rm –f file_two

if [ -f file_one ] && echo “hello” && [ -f file_two ] && echo “there”

then

  echo “in if”

else

  echo “in else”

fi

exit 0

***\*10、OR列表 ，直到有一条命令执行成功为止。\****

 语法结构：

 Statement1 ***\*||\**** Statement2 ***\*||\**** Statement3 ***\*||\**** ***\*…\****

示例：

if [ -f file_one ] || echo “hello” || echo “there”

then

  echo “in if”

else

echo “in else”

fi

***\*11、语句块\****

如果想在只允许使用单个语句的地方（如 AND，OR）使用多条语句，可以是花括号{}来构造一个块。如下：

  Get_confirm && {

​    echo “hello”

​    cat $tmp_file > $tracks_file

add_record_tracks

}

***\*12、函数\****

要定义一个shell函数，只需写出它的名字，加上括弧，再把函数要实现的语句放在一对花括号中，如下所示：

function_name ***\*() {\****

   Statements

***\*}\****

示例：

\#!/bin/bash

foo(){

  echo  “function foo is executing”

}

echo  “ this is foo… ”

foo

echo “foo end!”

exit 0

如果在函数中没有return命令指定一个返回值，则函数返回的就是执行的最后一条命令的退出码。

示例 

\#!/bin/bash

\# 函数部分

Yes_or_no(){

  Echo “is your name $* ?”

 while true

do

  echo –n “Enter yes or no: ”

  read x

 case “$x” in

  y | yes ) return 0;;

  n | no ) return 1;;

  *) echo “please input yes or no”

 esac

done

\#主程序部分

echo  “original parameters are $*”

if  yes_or_no “$1”

then

  echo “HI  $1,nice name”

else

  echo “never mind”

fi

exit 0

在函数内部定义的变量，在函数运行后，变量依然有效，如果只想在本函数内使用临时变量，可在变量前加上 ***\*local\****

\#!/bin/bash

foo()

{

 local  str=aaaa ***\*#\*******\*如果此处无local 则 最后的语句是可以输出aaaa\*******\*的\****

echo "in foo $str"

}

foo

echo "over $str"

 

$# 表示参数个数，$1为第一个参数依次类推。（$*,$@）

脚本中无函数的声明，调用某个函数前，该函数需要先被定义，所以函数的定义可以写在脚本的开始。

 

***\*13、一些命令\****

1）break 命令

 在控制条件为满足之前，可以跳出 for，while，until循环，后面可带参数值，来表明要跳出的循环层数，但我们不建议这么做。

2) :命令

冒号（：）命令是一个空命令。偶尔被运用简化逻辑，相当于true。

3) continue命令

类似C语言中的同名语句。可使for，while，until循环跳到下一次循环继续执行，循环变量取循环列表中的下一个。

如 for x in 1 2 3

do 

 echo before $x

 continue 1

 echo after $x

done

**4)** ***\*.\****命令

默认情况下，shell脚本程序会在一个新创建的环境中执行，所以当脚本对环境变量所做的任何修改都会丢失，而点(***\*.\****)命令允许执行的脚本程序改变当前的环境。

5) echo命令

输出一行字符内容并换行，若要使其不换行linux有两种解决方法：echo –n “string to output”

echo –e “string to output\c”

(注：-e是确保启用了反斜杠转义字符，\c代表去掉换行符，\t代表制表符，\n代表回车 )

6) eval命令

eval允许对参数进行求值，如下：

foo=10

x=foo

y=’$’$x

echo $y  #输出为foo

当使用 eval命令时，如下

foo=10

x=foo

eval  y=’$’$x

echo $y  #输出为 10

7) exec命令

将当前shell替换为一个不同的程序

如：exec wall “Thanks for the fish”

脚本中的这个命令会用wall命令替换当前的shell。

第二种用法是修改当前文件描述符：

exec 3< afile

修改文件描述符。

  

8) exit n命令

一般使脚本程序以退出码n结束运行。

0表示成功，1~125是脚本可以使用的错误代码。

126表示文件不可执行，127表示命令未找到

128及以上 出现一个信号

9) export 命令

export 命令可以将变量参数导出到子shell中，子shell中即可访问该变量。如 TESTA=testa；export TESTA

10)  expr命令

  expr命令将它的参数当做一个表达式来求值。

11) printf命令

  printf “format  string” parameter1 parameter2 

12)return 命令

   return命令作用是使函数返回，后面可带返回值，如果没有返回值则默认返回最后一条命令的退出码。

  13)set命令

示例：从系统提供的参数date中提取出月份。

\#!/bin/bash

echo the date is $(date)

set $(date)

echo The month is $2

exit 0

14)shift命令

shift命令把所有参数变量左移一个位置，使$2变成$1,$3变成$2,$1被丢弃，$0保持不变。

while [ “$1” != “” ];do

  echo “$1”

  shift

done

exit 0

15)trap命令

  Trap命令用于指定在接收信号后将要采取的行动。

语法结构：***\*trap\**** command signal

第一个参数是收到指定信号要采取的行动。

第二个参数是要处理的信号名称。

如果要忽略一个信号，则将第一个参数设为空字符串。

\#!/bin/bash

trap 'rm -f /home/sufeng/my_shell/my_tmp_file_$$' INT

echo creating file /home/sufeng/my_shell/my_tmp_file_$$

date > /home/sufeng/my_shell/my_tmp_file_$$

 

echo "press interrupt (ctrl-c) to interrupt ...."

while [ -f /home/sufeng/my_shell/my_tmp_file_$$ ];do

  echo File exists

  sleep 1

done

 

echo the file no longer exists

 

trap INT

 

echo creating file /home/sufeng/my_shell/my_tmp_file_$$

date > /home/sufeng/my_shell/my_tmp_file_$$

echo "press interrupt (control-c) to interrupt ...."

while [ -f /home/sufeng/my_shell/my_tmp_file_$$ ];do

  echo File exists

  sleep 1

done

echo we never get here

16)unset命令

  unset命令的作用是从环境中删除变量或函数。但不能删除shell本身定义的只读变量。

  \#!/bin/bash

foo="hello world"

echo $foo

unset foo

echo $foo

17)find命令

find语法结构：

find  [path]  [options]  [tests]  [actions]

***\*path\**** 是要搜索的路径。

***\*O\*******\*ptions\**** 选项:

-depth   在查看目录本身之前先搜素目录的内容

-follow   跟随符号链接

-maxdepths N  最多搜索N层目录

-mount(或-xdev)  不搜索其他文件系统中的目录

***\*T\*******\*ests选项\****：

-atime N  文件在N天之前被访问过

-mtime N  文件在N天之前被修改过

-name  “pattern” 按文件名称匹配

-newer otherfile 文件比otherfile要新

-type  c 文件类型为c

-user username  文件的拥有者是指定用户。

***\*对tests部分的组合\****：

！  (-not)   测试取反

-a   (-and)   两个测试都必须为真

-o   (-or)   两个测试必须有一个为真 

 

***\*动作\****：

-exec  command  执行一条命令

-ok  command    同上，只是处理时回头提示

-print   打印文件名

-ls     对当前文件使用命令 ls-dils

***\*一个find的示例：\****

***\*sufeng@linux-ecmc:~/my_shell> find \( -name "\*1.sh" -o -atime 2 \) -type f -exec ls -l {} \;\****

***\*结果如下：\****

-rwxrwxrwx 1 sufeng users 91 Sep  5 18:54 ./bb1.sh

-rwxr--r-- 1 sufeng users 258 Sep  4 20:41 ./t_fun1.sh

-rwxr--r-- 1 sufeng users 174 Sep  4 18:11 ./tm_case1.sh

-rwxrwxrwx 1 sufeng users 39 Sep  5 18:35 ./cc1.sh

-rwxrwxrwx 1 sufeng users 167 Sep  1 11:43 ./tm1.sh

 

18)grep命令

grep语法如下:

grep  [options]  PATTERN  [FILES]

选项            含义

 -c      输出匹配行的数目，而不是输出匹配行

 -i       忽略大小写

 -v       对匹配模式取反

 -l      只列出匹配行的文件名

 -E      启用扩展表达式

 -h      取消输出行普通前缀。

 示例：

 grep -c -v in bb.sh cc.sh

 grep -c in bb.sh cc.sh

19)正则表达式

 字符            含义

  ^           指向一行的开头

  $           指向一行的结尾

  .            任意单个字符

  []      方括号包含一个字符范围，其中任何一个字符都可以匹配，如a~e，在字符范围前面加^，即不在指定范围内。

 匹配模式              含义

 [:alnum:]            字母与数字字符

 [:alpha:]            字母

 [:ascii:]             ASCII 字符

 [:blank:]             空格或制表符

 [:cntrl:]             ASCII控制字符

 [:digit:]             数字

 [:graph:]            非控制、非空格字符

 [:lower:]            小写字母

[:print:]               可打印字符

[:punct:]              标点符号字符

[:space:]            空白字符，包括垂直制表符

[:upper:]               大写字母

[:xdigit:]               十六进制数字

 

选项                含义

 ？            匹配是可选的，但最多匹配一次

​    \*             必须匹配0次或多次

​    \+             必须匹配1次或多次

   {n}             必须匹配n次

   {n,}            必须匹配n次或n次以上

   {n，m}         必须匹配n到m之间，包括n和m

以上使用的时候需要加’\’.

示例：

grep  e$  bb.sh      以e结尾

grep  a[[:blank:]] bb.sh   以a结尾

grep  Th.[[:blank:]] bb.sh  匹配以Th开头的3个字符组成的单词

grep  -E [a-z]\{10\} bb.sh  匹配只有10个字符常的全由小写字母组成的单词。

 

 

20)命令的执行

  $(command)

 \#!/bin/bash

 whoisthere=$(who)  将who显示的内容给变量

 echo $whoisthere  

 exit 0 

***\*算数扩展\****

 \#!/bin/bash

  X=0

  while [ “$X” –ne 10 ]; do

   echo  $X

   x=$(($x+1))

 done

exit 0

注意 使用$时，后面有两个括弧和一个括弧是有区别的，一个是赋只给变量，两个是进行算数运算。

***\*参数扩展\****

示例：

如果有两个文件 1_tmp和2_tmp

\#！/bin/bash

for i in 1 2

do

  my_secret_process ***\*$i_tmp\****

done

此时，又有错误信息，应该为my_secret_process ***\*${i}_tmp\****

 

***\*参数扩展              说明\****

 ${param:-default}        若param为空，则值为default

 ${#param}          给出param的长度

 ${param%word}  从尾部开始删除与word匹配的最小部分

 ${param%%word} 从尾部开始删除与word匹配的最长部分

 ${param#word}   从param的头部开始删除匹配的最小部分

${param##word}  从param的头部开始删除匹配的最小部分

21)here文档

 可以将部分字符内容存储在脚本中，以特定的字符标示起始和结尾。

示例;

\#!/bin/bash

cat  <<!FUNKY!

hello

this is a here

document

!FUNKY!

示例2:  使用ed编辑器

\#!/bin/bash

ed  a_text_file  <<!FunkyStuff!

3

d

.,\$s/is/was/

w

q

!FunkyStuff!

exit 0

 

其中 a_text_file 文件中内容如下

That is line 1

That is line 2

That is line 3

That is line 4

 
<!--
 * @Date           : 2020-11-05 21:36:01
 * @FilePath       : /jinnian-space/src/pages/linux/md/runoob-shell.md
 * @Description    : 
-->
# Shell
## shell程序的种类
### Bourne Shell（/usr/bin/sh或/bin/sh）
### Bourne Again Shell（/bin/bash）
- 大多数Linux 系统默认
### C Shell（/usr/bin/csh）
### K Shell（/usr/bin/ksh）
### Shell for Root（/sbin/sh）
## 运行脚本的方法
### 作为可执行程序
- chmod +x ./test.sh
	- #使脚本具有执行权限
- ./test.sh
	- #执行脚本
### 作为解释器参数
- /bin/sh test.sh
## 基本语法
### #!
#!/bin/bash
- 指定解析脚本的程序
### 变量
- 定义变量
	- 变量名 = 变量值
	  your_name="runoob.com"
	- 命名规范
		- 变量名和等号之间不能有空格
		- 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头
		- 不能使用bash里的关键字（可用help命令查看保留关键字）
- 使用变量
	- 在变量名前面加美元符号（花括号是为了区分变量的边界）
		- echo $your_name
		- echo ${your_name}
- 只读变量
	-  readonly 命令
	  myUrl="http://www.google.com"
	  readonly myUrl
	  myUrl="http://www.runoob.com"
- 删除变量
	- unset 命令
	  #!/bin/sh
	  myUrl="http://www.runoob.com"
	  unset myUrl
	  echo $myUrl
- 变量的类型
	- 局部变量
		- 在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量
	- 环境变量
		- 所有的程序，包括shell启动的程序，都能访问环境变量
			- 可用export定义
	- shell变量 
		- 是由shell程序设置的特殊变量
### 数据类型
- 字符串
	- 单引号
		- 任何字符都会原样输出，单引号字符串中的变量是无效的
		- 不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用
	- 双引号
	  your_name='runoob'
	  str="Hello, I know you are \"$your_name\"! \n"
	  echo -e $str
		- 可以有变量，可以出现转义字符
	- 拼接字符串
	  your_name="runoob"
	  # 使用双引号拼接
	  greeting="hello, "$your_name" !"
	  greeting_1="hello, ${your_name} !"
	  echo $greeting  $greeting_1
	  # 使用单引号拼接
	  greeting_2='hello, '$your_name' !'
	  greeting_3='hello, ${your_name} !'
	  echo $greeting_2  $greeting_3
	  输出结果：
	  hello, runoob ! hello, runoob !
	  hello, runoob ! hello, ${your_name} !
	- 字符串处理
		- 获取字符串长度
		  string="abcd"
		  echo ${#string} #输出 4
			- ${#变量名}
		- 提取子字符串
		  #第 2 个字符开始截取 4 个字符
		  string="runoob is a great site"
		  echo ${string:1:4} # 输出 unoo
			- ${变量名：开始位置：截取长度}
		- 查找子字符串
		  #查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
		  string="runoob is a great site"
		  echo `expr index "$string" io`  # 输出 4
			- expr index "$s变量名"  查找规则
- 数组
	- 定义数组
		- 数组名=(值1 值2 ... 值n)
		  array_name=(value0 value1 value2 value3)
		  or
		  array_name=(
		  value0
		  value1
		  value2
		  value3
		  )
		  or
		  array_name[0]=value0
		  array_name[1]=value1
		  array_name[n]=valuen
	- 读取数组
		- 获取数组单个元素
			- ${数组名[下标]}
			  valuen=${array_name[n]}
		- 获取数组中的所有元素
			-  ${数组名[@]}
	- 获取数组长度
	  # 取得数组元素的个数
	  length=${#array_name[@]}
	  # 或者
	  length=${#array_name[*]}
	  # 取得数组单个元素的长度
	  lengthn=${#array_name[n]}
		- ${#数组名[@]}
		- ${#数组名[*]}
### 注释
- 单行注释
	- #
- 多行注释
	- :<<注释标记符     要注释的内容。。。    注释标记符
	  :<<'
	  注释内容...
	  注释内容...
	  注释内容...
	  '
	  or
	  :<<!
	  注释内容...
	  注释内容...
	  注释内容...
	  !
	  or
	  :<<EOF
	  注释内容...
	  注释内容...
	  注释内容...
	  EOF
### 给脚本传递参数
test.sh脚本
echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
传递参数
sh test.sh 1 2 3
输出
执行的文件名：test.sh
第一个参数为：1
第二个参数为：2
第三个参数为：3
- 传递方式
	- sh test.sh 1 2 3
- 脚本中获取传递参数
	- $#
		- 传递到脚本的参数个数
	- $*、$@
		- 显示所有向脚本传递的参数
			- 如"$*"，以"$1 $2 … $n"的形式输出所有参数。
			- 如"$@"，以"$1" "$2" … "$n" 的形式输出所有参数。
	- $$
		- 脚本运行的当前进程ID号
- $*和$@的区别
  echo "-- \$* 演示 ---"
  for i in "$*"; do
      echo $i
  done
  echo "-- \$@ 演示 ---"
  for i in "$@"; do
      echo $i
  done
	-  " * " 等价于 "1 2 3"（传递了一个参数），而 "@" 等价于 "1" "2" "3"（传递了三个参数）
- read 命令
  read firstStr secondStr
  echo "第一个参数:$firstStr; 第二个参数:$secondStr"
  运行：
  sh test.sh  一 二 三 四
  输出：
  第一个参数:一; 第二个参数:二 三 四
	- 接收并定义传递的参数
### 运算符
- 概述：原生bash不支持简单的数学运算，要借助表达式计算工具完成运算
  #!/bin/bash
  val=`expr 2 + 2`
  echo "两数之和为 : $val"
- 算术运算符
	- +	加法	`expr $a + $b` 结果为 30。
	- -	减法	`expr $a - $b` 结果为 -10。
	- *	乘法	`expr $a \* $b` 结果为  200。
	- /	除法	`expr $b / $a` 结果为 2。
	- %	取余	`expr $b % $a` 结果为 0。
	- =	赋值	a=$b 将把变量 b 的值赋给 a。
	- ==	相等。用于比较两个数字，相同则返回 true。	[ $a == $b ] 返回 false。
	- !=	不相等。用于比较两个数字，不相同则返回 true。	[ $a != $b ] 返回 true。
- 关系运算符
  if [ $a -eq $b ]
  then
     echo "$a -eq $b : a 等于 b"
  else
     echo "$a -eq $b: a 不等于 b"
  fi
	- -eq	检测两个数是否相等，相等返回 true。	[ $a -eq $b ] 返回 false。
	- -ne	检测两个数是否不相等，不相等返回 true。	[ $a -ne $b ] 返回 true。
	- -gt	检测左边的数是否大于右边的，如果是，则返回 true。	[ $a -gt $b ] 返回 false。
	- -lt	检测左边的数是否小于右边的，如果是，则返回 true。	[ $a -lt $b ] 返回 true。
	- -ge	检测左边的数是否大于等于右边的，如果是，则返回 true。	[ $a -ge $b ] 返回 false。
	- -le	检测左边的数是否小于等于右边的，如果是，则返回 true。	[ $a -le $b ] 返回 true。
- 布尔运算符
	- !	非运算，表达式为 true 则返回 false，否则返回 true。	[ ! false ] 返回 true。
	- -o	或运算，有一个表达式为 true 则返回 true。	[ $a -lt 20 -o $b -gt 100 ] 返回 true。
	- -a	与运算，两个表达式都为 true 才返回 true。	[ $a -lt 20 -a $b -gt 100 ] 返回 false。
- 逻辑运算符
	- &&	逻辑的 AND	[[ $a -lt 100 && $b -gt 100 ]] 返回 false
	- ||	逻辑的 OR	[[ $a -lt 100 || $b -gt 100 ]] 返回 true
- 字符串运算符
	- =	检测两个字符串是否相等，相等返回 true。	[ $a = $b ] 返回 false。
	- !=	检测两个字符串是否相等，不相等返回 true。	[ $a != $b ] 返回 true。
	- -z	检测字符串长度是否为0，为0返回 true。	[ -z $a ] 返回 false。
	- -n	检测字符串长度是否为0，不为0返回 true。	[ -n "$a" ] 返回 true。
	- $	检测字符串是否为空，不为空返回 true。	[ $a ] 返回 true。
- 文件测试运算符
	- -b file	检测文件是否是块设备文件，如果是，则返回 true。	[ -b $file ] 返回 false。
	- -c file	检测文件是否是字符设备文件，如果是，则返回 true。	[ -c $file ] 返回 false。
	- -d file	检测文件是否是目录，如果是，则返回 true。	[ -d $file ] 返回 false。
	- -f file	检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。	[ -f $file ] 返回 true。
	- -g file	检测文件是否设置了 SGID 位，如果是，则返回 true。	[ -g $file ] 返回 false。
	- -k file	检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。	[ -k $file ] 返回 false。
	- -p file	检测文件是否是有名管道，如果是，则返回 true。	[ -p $file ] 返回 false。
	- -u file	检测文件是否设置了 SUID 位，如果是，则返回 true。	[ -u $file ] 返回 false。
	- -r file	检测文件是否可读，如果是，则返回 true。	[ -r $file ] 返回 true。
	- -w file	检测文件是否可写，如果是，则返回 true。	[ -w $file ] 返回 true。
	- -x file	检测文件是否可执行，如果是，则返回 true。	[ -x $file ] 返回 true。
	- -s file	检测文件是否为空（文件大小是否大于0），不为空返回 true。	[ -s $file ] 返回 true。
	- -e file	检测文件（包括目录）是否存在，如果是，则返回 true。	[ -e $file ] 返回 true。
- 使用[]执行基本运算
  #!/bin/bash
  a=5
  b=6
  result=$[a+b] # 注意等号两边不能有空格
  echo "result 为： $result"
### 输出命令
- echo命令
	- echo
		- 普通输出
	- echo -e
	  echo -e "OK! \n" # -e 开启转义
	  echo "It is a test"
		- 接受转义字符输出
	- 输出类型
		- 单引号
		- 双引号
		- 反单引号
		  echo `date`
		  输出：
		  Thu Jul 24 10:08:46 CST 2014
		- 无符号
- printf命令
	- 语法结构：printf  format-string  [arguments...]
	  printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  
	  printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234 
	  printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543 
	  printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876 
	  输出：
	  姓名     性别   体重kg
	  郭靖     男      66.12
	  杨过     男      48.65
	  郭芙     女      47.99
		- format-string: 为格式控制字符串
		- arguments: 为参数列表
	- 格式替换符
		- %d
			- 十进制整数
		- %s
			- 字符串或者字符型
		- %c
			- 字符串或者字符型
		- %f
			- 数字型、浮点型
- 转义字符
	- \a	警告字符，通常为ASCII的BEL字符
	- \b	后退
	- \c	抑制（不显示）输出结果中任何结尾的换行字符（只在%b格式指示符控制下的参数字符串中有效），而且，任何留在参数里的字符、任何接下来的参数以及任何留在格式字符串中的字符，都被忽略
	- \f	换页（formfeed）
	- \n	换行
	- \r	回车（Carriage return）
	- \t	水平制表符
	- \v	垂直制表符
	- \\	一个字面上的反斜杠字符
	- \ddd	表示1到3位数八进制值的字符。仅在格式字符串中有效
	- \0ddd	表示1到3位的八进制值字符
### test命令
- 概述：用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试
- 数值测试
  num1=100
  num2=100
  if test $[num1] -eq $[num2]
  then
      echo '两个数相等！'
  else
      echo '两个数不相等！'
  fi
	- -eq	等于则为真
	- -ne	不等于则为真
	- -gt	大于则为真
	- -ge	大于等于则为真
	- -lt	小于则为真
	- -le	小于等于则为真
- 字符串测试
  num1="ru1noob"
  num2="runoob"
  if test $num1 = $num2
  then
      echo '两个字符串相等!'
  else
      echo '两个字符串不相等!'
  fi
	- =	等于则为真
	- !=	不相等则为真
	- -z 字符串	字符串的长度为零则为真
	- -n 字符串	字符串的长度不为零则为真
- 文件测试
  cd /bin
  if test -e ./bash
  then
      echo '文件已存在!'
  else
      echo '文件不存在!'
  fi
	- -e 文件名	如果文件存在则为真
	- -r 文件名	如果文件存在且可读则为真
	- -w 文件名	如果文件存在且可写则为真
	- -x 文件名	如果文件存在且可执行则为真
	- -s 文件名	如果文件存在且至少有一个字符则为真
	- -d 文件名	如果文件存在且为目录则为真
	- -f 文件名	如果文件存在且为普通文件则为真
	- -c 文件名	如果文件存在且为字符型特殊文件则为真
	- -b 文件名	如果文件存在且为块特殊文件则为真
- 结合布尔运算符
  cd /bin
  if test -e ./notFile -o -e ./bash
  then
      echo '至少有一个文件存在!'
  else
      echo '两个文件都不存在'
  fi
	- ( -a )、或( -o )、非( ! )
### 流程控制
- if
  a=10
  b=20
  if [ $a == $b ]
  then
     echo "a 等于 b"
  elif [ $a -gt $b ]
  then
     echo "a 大于 b"
  elif [ $a -lt $b ]
  then
     echo "a 小于 b"
  else
     echo "没有符合的条件"
  fi
	- 语法格式
	  if condition1
	  then
	      command1
	  elif condition2 
	  then 
	      command2
	  else
	      commandN
	  fi
		- if then、elif then、else、fi
- case
  echo '输入 1 到 4 之间的数字:'
  echo '你输入的数字为:'
  read aNum
  case $aNum in
      1)  echo '你选择了 1'
      ;;
      2)  echo '你选择了 2'
      ;;
      3)  echo '你选择了 3'
      ;;
      4)  echo '你选择了 4'
      ;;
      *)  echo '你没有输入 1 到 4 之间的数字'
      ;;
  esac
	- 语法格式
	  case 值 in
	  模式1)
	      command1
	      command2
	      ...
	      commandN
	      ;;
	  模式2）
	      command1
	      command2
	      ...
	      commandN
	      ;;
	  esac	
		- case in、;;、csac
### 循环
- for
  for loop in 1 2 3 4 5
  do
      echo "The value is: $loop"
  done
	- 语法结构
	  for var in item1 item2 ... itemN
	  do
	      command1
	      command2
	      ...
	      commandN
	  done
		- for in、do、done
- while
  #!/bin/bash
  int=1
  while(( $int<=5 ))
  do
      echo $int
      let "int++"
  done
	- 语法结构
	  while condition
	  do
	      command
	  done	
		- while、do、done
- until
	- 与while相反，循环执行一系列命令直至条件为 true 时停止
	- 语法格式
	  until condition
	  do
	      command
	  done
		- until、do、done
- 跳出循环
	- break命令
	  #!/bin/bash
	  while :
	  do
	      echo -n "输入 1 到 5 之间的数字:"
	      read aNum
	      case $aNum in
	          1|2|3|4|5) echo "你输入的数字为 $aNum!"
	          ;;
	          *) echo "你输入的数字不是 1 到 5 之间的! 游戏结束"
	              break
	          ;;
	      esac
	  done
- 进入下一轮循环
	- continue命令
	  #!/bin/bash
	  while :
	  do
	      echo -n "输入 1 到 5 之间的数字: "
	      read aNum
	      case $aNum in
	          1|2|3|4|5) echo "你输入的数字为 $aNum!"
	          ;;
	          *) echo "你输入的数字不是 1 到 5 之间的!"
	              continue
	              echo "游戏结束"
	          ;;
	      esac
	  done
### 函数
- 语法格式
  [ function ] funname [()]
  {
      action;
      [return int;]
  }
- 不带参数函数
  funWithReturn(){
      echo "这个函数会对输入的两个数字进行相加运算..."
      echo "输入第一个数字: "
      read aNum
      echo "输入第二个数字: "
      read anotherNum
      echo "两个数字分别为 $aNum 和 $anotherNum !"
      return $(($aNum+$anotherNum))
  }
  funWithReturn
  echo "输入的两个数字之和为 $? !"
- 带参数函数
  funWithParam(){
      echo "第一个参数为 $1 !"
      echo "第二个参数为 $2 !"
      echo "第十个参数为 $10 !"
      echo "第十个参数为 ${10} !"
      echo "第十一个参数为 ${11} !"
      echo "参数总数有 $# 个!"
      echo "作为一个字符串输出所有参数 $* !"
  }
  funWithParam 1 2 3 4 5 6 7 8 9 34 73
  输出：
  第一个参数为 1 !
  第二个参数为 2 !
  第十个参数为 10 !
  第十个参数为 34 !
  第十一个参数为 73 !
  参数总数有 11 个!
  作为一个字符串输出所有参数 1 2 3 4 5 6 7 8 9 34 73 !
- 参数的获取
	- $#	传递到脚本的参数个数
	- $*	以一个单字符串显示所有向脚本传递的参数
	- $$	脚本运行的当前进程ID号
	- $!	后台运行的最后一个进程的ID号
	- $@	与$*相同，但是使用时加引号，并在引号中返回每个参数。
	- $-	显示Shell使用的当前选项，与set命令功能相同。
	- $?	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。
### 文件包含
- . filename   或者   source filename
  test1.sh：
  url="http://www.runoob.com"
  test2.sh：
  . ./test1.sh
 或者使用以下包含文件代码
   source ./test1.sh
  echo "菜鸟教程官网地址：$url"


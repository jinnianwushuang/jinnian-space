###
 # @Date           : 2020-10-09 23:49:39
 # @FilePath       : /SHELL/d1009.sh
 # @Description    : 
### 
#!/bin/bash
echo 学习shell编程---2020-10-09
echo 字符串操作

today_y="2020-1009" 
myUrl="https://www.google.com/123.html"
longstr="类似于 C 语言，数组元素的下标由 0 开始编号。获取数组中的元素要利用下标，下标可以是整数或算术表达式，其值应大于或等于 0。"

echo 长度： ` expr length ${myUrl}`
echo "myUrl 的 长度为 ${#myUrl} ,截取说明 ${myUrl:8:32} "
huo_qu_index=`expr index "${longstr}" 获取`

echo huo_qu_index:${huo_qu_index}

# echo  截取-删左： ${myUrl#*//}
# echo  截取-删左： ${myUrl##*/}
# echo  截取-删左： ${myUrl:8:14}
# echo  截取-删右： ${myUrl%/*}
# echo  截取-删右： ${myUrl%%/*}
# echo  截取-删右： ${myUrl:0-8:3}





echo 数组操作

arr_1=(1 2 3 88 99 456 22 'cccccc'  "${huo_qu_index}")

echo 数组arr_1第六个元素 ${arr_1[5]} 
echo  数组arr_1长度 ${#arr_1[@]} ${#arr_1[*]}

# echo 
# echo 

# for i in ${arr_1[*]} ;do 

# echo  当前元素${i} --haha
# done


# for i in `ls  /d ` ;
# do 
# echo  当前${i} --6666
# done


# echo  数学运算
# expr 5 + 9
# expr 8 \* 9687

# echo  读取键盘输入
# read -p "ssssssssss：    " r_a 
# read -p "ssssssssss：    " r_b 
# r_r=$[r_a+r_b]

# echo ${r_r}

# # ./test.sh 1 2 3
# echo "-- \$@ 演示 ---"
# for i in "$@"; do
#     echo $i
# done

# 比较运算符
#  != ==  -eq -ne -gt -lt -ge -le  


if [ 5 != 3 ]  
then 
echo "5 不等于 3"
fi
# 布尔运算符 
# !  -o  -a

b_a=10
b_b=20

if [ $b_a -lt 100 -o $b_b -gt 0 ] 
 then 
  echo  " $b_a 小于 100 或 $b_b 大于 0 : 返回 true  "
  else
  echo  " $b_a 小于 100 或 $b_b 大于 0 : 返回 false "
  fi
# 字符串运算符     =  != -z  -n $  
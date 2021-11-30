<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/module/m3.vue
 * @Description    : 
-->

<template>
  <div class="">

    <div>SHELL</div>
    <pre>
       shell 中 变量赋值 单引号是 字符 双引号是可以解析变量的  $() 是代表可执行命令 或者 模板插值符号反引号也一样
       shell 中 0 为 真  1 为假 
       readonly  只读变量
       unset 删除变量
       数组： 
          定义：arr=(1 2  3  4  8) 
          赋值: arr[0]=99
          获取：${arr[1]}
          获取长度：${#arr[*]}   ${#arr[@]}
      num1= `expr 2 + 2`  数学运算表达式  expr
       自增：  e=1  ;  ((e++))  
       字符串比较 返回布尔值  0 为真 1 为假的: 前后带空格  中间带空格
          [ $a = $b ]  [ $a != $b ]  是否为0  [ -z $a ]   是否非0  [ -n "$a" ]  是否为空 [ $a ] 
          [ "${a}" = "${b}" ]  [ $a != $b ]  是否为0  [ -z "${a}" ]   是否非0  [ -n "${a}" ]  是否为空 [ $"{$a}" ] 
       $? 获取 上一条 语句的 执行结果   
       字符串长度  ${#a}
       关系运算符 只支持数字 ，不支持字符串，除非字符串的值是数字：
        
        [ $a -eq $b]   等于 -eq  不等于  -ne  大于 -gt 小于 -lt 大于等于 -ge  小于等于 -le  
      shell 布尔运算：
          ! 求反 [ !false]     [ !  $a -lt 20 ]        返回 true    
          -o or   或运算  [ $a -lt 20 -o $b -gt 100]
          -a and  与运算  [ $a -lt 20 -a $b -gt 100]
          &&  逻辑and    [[ true && true ]]   [[ "${a}" -lt 100 && "${b}" -gt 100 ]]
          ||  逻辑或者    [[ true || true ]]
      if[条件];then;语句体；fi       ,,,,  if[] then fi  ,,,,if[] then  elif[] else fi 

      if [ $(ps -ef | grep -c "ssh") -gt 1] 


    </pre>
    
     <q-separator />
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/shell-基础.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>

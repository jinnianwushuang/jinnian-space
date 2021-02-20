<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/module/m2.vue
 * @Description    : 
-->
<template>
    <div>
        <div class="text-h5">JAVA 基础</div>
          <div class="text-h6"> 基本环境 </div>
       <pre>
        java SE ME  EE 
        跨平台  -- jvm 虚拟机  jvm 虚拟机本身 不能跨平台 java 程序在 不同平台的不同的 jvm 虚拟机  运行
        JRE JDK JVM 作用 
        开发java : 编写代码 编译代码  运行代码 
        JRE : JAVA  Runtime Enviroment   包含 JVM 虚拟机 和 JAVA 核心 类库  
        类= java 文件 ，每个 java 文件是一个 Java 类 
        核心类库：  java 已写好的 非常核心的 代码仓库  ，很多个java  核心 类 文件 
        代码中 会用到 java 存放在 JRE 中 写好的 核心 java 文件 比如： System   String Number 
        java 文件的 编译 是使用 java JDK 中的  编译工具 进行编译 ，编译为 jvm 能够识别运行的 程序文件 
        JDK : JAVA development Kit  Java 语言的 软件开发工具包 ，内部包含了 代码的 编译工具和 运行工具 
        流程：1.使用JDK中的编译工具编译 .java  文件到      .class 字节码文件，
              2.使用JDK中的运行工具 将  .class 文件运行在  JVM 虚拟机当中  
        总结：1. 编写代码 需要使用 JRE 中 java 已经写好的 代码 （核心类库）
              2. 编译代码 需要使用 JDK 中 的 编译工具
              3. 运行代码 需要使用 JDK 中 的  运行工具
              4. 代码运行在  JVM 虚拟机当中  

         JDK=( JRE=(JVM 虚拟机 + 核心类库)  + 开发工具=（编译工具 + 运行工具） )    

         系统环境变量 添加变量 Java_Home  D:\Program Files\Java\jdk1.8.0_91
                       path 编辑 新建    %Java_Home%\bin    %Java_Home%\jre\bin           
        
        javac  AAA.java  执行生成 AAA.class 文件 
        java  AAA    执行 AAA.class 文件 
        main 方法 程序的 入口点
        public static void main(String[] args ){

        }
        public 确保 文件名称和 类名 必须 同名         
        java 关键字  基本  都是小写的

       </pre>
       <div class="text-h6"> 数据类型 </div>
       <pre>
           java 有字符串 和 字符 区别  字符串 双引号 任意个字符    字符 单引号 且只能1个字符 
          不同数据类型  占用内存空间
          byte 1 short 2 int 4 long 8     float 4 double 8  char 2 boolean 1 
          引用数据类型： class interface  array
          基本数据类型  整数 浮点数 字符  布尔 
          int a = 1;
          float b = 1.36F; float 类型 不加 F 标识， 则默认 double 类型转换 会报错 丢失精度
          long c = 556188L; long 类型  后面加 L 标识
        数据范围关系 从小到大
        byte, (short=char) , int ,long ,float ,double 
        隐式转换 小的直接变大的
        运算过程中，小的会先提升为大的，当类型统一之后，再进行运算 。 同类型 运算
        byte short char 三种数据类型在运算的时候，不管是否有更高的数据类型，都会提升为 int 然后再运算
        也就是 最低隐士转换为 int 类型 ， 结果 最低是 int 类型
        强制转换  大的转小的 强转格式 ： int a=10; byte b= (byte)a;   强转可能丢失精度
        byte d =3+4 ; java 中存在常量优化机制：
         根据常量计算的结果 判定是否在类型范围内，在就编译通过，不在就报错
            java 变量作用域： 只在 变量所在的大括号内有用 
         java 整数相除 结果是整数  10/3 = 3    10/3.0 = 3.333333...
         	 char b = 'a';	 int c= b +20;  结果  c = 117 ; 字节 a 对应的 ASCII 码表 97 
              1+99+“年” = "100年"
	

       </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
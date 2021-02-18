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
       </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
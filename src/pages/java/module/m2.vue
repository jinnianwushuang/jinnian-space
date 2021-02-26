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
               &  并且 |  或者 ！ 非 ^ 异或      && || 短路 效果
               &  |无论如何 左右都会执行 && || 有短路效果 左边值能确定结果 则 右边不执行
        break continue 只能跳出自己所在的那一层关系。
        如果想要跳出跳过置顶一层，可以加入标号。
        IDEA 目录层级关系： project - module - package - class 
        快捷键：
        ctrl+shirt+a    ctrl+alt+v
        psvm ，sout , alt+1，alt+4 ,ctrl+alt+l ,alt+enter
        数组 int[] arr= new int[30]  初始化定义一个长度是30的数组
             int arr[] =new int[30]
        sout 输出 数组 变量 输出的是 数组的 内存地址 
        java 内存分配： 
        栈内存 ： 方法运行时，进入的内存，局部变量都存放于这块内存中，
        堆内存 ： new 出来的内容都会进入堆内存，并且会有对应的地址值
        方法区 ： 字节码文件 .class 加载时进入的内存 
        本地方法栈 ：调用操作系统相关的资源
        寄存器： 交给CPU 去使用
        类的加载过程：
        1.类的字节码文件加载进方法区 main 方法存放在自己吗文件中
        2.main方法被jvm 自动调用进入栈内存中执行
        3. 因为main 方法在 栈内存 ，创建变量 也在 栈内存
        4.new 方法创建的实例放在堆内存中 ， 有 内存地址，并且有默认初始化值。
          把地址值给到 变量。（因此打印数组，打印出来的是内存地址）
        java 数组默认值
        整数型 0  浮点数 0.0 布尔 false 字符  空字符  引用数据类型 null  
        int[] arr=new int[]{5,7,8,999};    
        int[] arr={5,7,8,999};     arr[0]   
        方法定义：
        格式：
         public static void aaa(int num){  //方法体 }
         public static int aaa(int num){   return 100; //方法体 }  int bb = aaa(30);
         public static int[] aaa(int[] arr){   int[] b={1,2,3}    return b //方法体 }  int[] cc = aaa(arr) 
        方法和方法之间 是平级 关系 ，不能嵌套定义
        栈内存： 手枪弹夹  先进后出
        方法参数类型 和个数 必须匹配 
        方法的形参，相当于一个局部变量
        方法重载： java 允许 多个个相同方法名，但是形参不同的方法存在。（个数，类型，顺序）
                   Java jvm 会通过 参数去匹配调用哪个方法  
        方法参数传递：
                基本数据类型 ，传递的是值本身，改变传入值，是改变的这个值 ，对其他无影响。不影响原始值
                引用数据类型 ，传递的是 内存地址 。 改变的是堆内存内的数据。会改变传入的数据本身
         原码 反码 补码
         计算机中的数据都是以二进制补码的形式在运算，而补码则是通过反码和原码推算出来的。 
         原码： 看数据 ，反码：转数据 ，补码：运算数据
         原码 ：
         二进制的定点表示法。最高位是符号位。 0 代表正 1代表负值 其余位数表示值的大小
         一个字节等于8个比特位 ，也就是 8个二进制位
         byte b1 = 7  ;   0(符号位)0000111    byte b2 = -7 ; 1(符号位) 0000111
         反码：
         正数的反码与其原码相同 ； 负数的反码与其原码逐位取反（0变1 ， 1 变 0），符号位除外
         补码：
         正数的补码与其原码相同 ； 负数的补码是在其 反码  的末位 加 1 得到的 
         二维数组
         int[][] arr 或者   int arr[][]   或者    int[] arr[]  
          int[][] arr = mew int[30][10];  30个一维数组 ，每个一维数组有10个元素
        </pre>
        <div class="text-red">
            方法执行完成 弹栈消失
        </div>
        <pre>
           类文件在方法区 ，对象实例在堆内存 ， 
           对象实例的方法地址指向方法区的类文件内的方法
          变量在栈内存，地址指向堆内存中的类的实例对象
           方法的调用， 类的实例对象的方法的调用 会进栈 
          类的主方法 main 方法 会被 jvm 主动调用 ，然后 main 方法 进栈
           代码由上往下执行， 方法顺序进栈  ， 栈内 方法 先进后出。
           最后调用的方法完成执行后 最先消失 
           当方法 执行完成 弹栈 消失
           </pre>
     
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="scss" scoped>
</style>
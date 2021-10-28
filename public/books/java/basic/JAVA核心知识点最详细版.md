# JAVA核心知识点最详细版（面试必备）

- 
  \1. JVM、JRE及JDK的关系 ＊＊

- \2. JAVA语言特点　＊＊

- \3. JAVA和C++的区别　＊＊

- \4. Java的基本数据类型 　＊＊

- \5. 隐式(自动)类型转换和显示(强制)类型转换　＊＊

- \6. 自动装箱与拆箱 ＊＊

- - String(不是基本数据类型)
  - \7. String的不可变性  ＊＊＊
  - \8. 字符型常量和字符串常量的区别 ＊
  - \9. 什么是字符串常量池？＊
  - \10. String 类的常用方法都有哪些？＊＊
  - \11. String和StringBuffer、StringBuilder的区别是什么？＊＊＊

- \12. switch 是否能作用在 byte 上，是否能作用在 long 上，是否能作用在 String 上 ＊

- \13. Java语言采用何种编码方案？有何特点？＊

- \14. 访问修饰符 ＊＊

- \15. 运算符　＊

- - 关键字
  - \16. static关键字　＊＊＊
  - \17. final 关键字　＊＊＊
  - \18. final finally finalize区别　＊＊＊
  - \19. this关键字　＊＊
  - \20. super关键字 ＊＊
  - \21. this与super的区别　＊＊
  - \22. break ,continue ,return 的区别及作用　＊＊

- \23. 面向对象和面向过程的区别　＊＊

- \24. 面向对象三大特性(封装、继承、多态)　＊＊＊

- \25. 面向对象五大基本原则是什么　＊＊

- \26. 抽象类和接口的对比　＊＊＊

- \27. 在Java中定义一个不做事且没有参数的构造方法的作用　＊

- \28. 在调用子类构造方法之前会先调用父类没有参数的构造方法，其目的是 ＊

- \29. 一个类的构造方法的作用是什么？若一个类没有声明构造方法，改程序能正确执行吗？为什么？ ＊

- \30. 构造方法有哪些特性？　＊＊

- \31. 变量　＊＊

- \32. 内部类　＊＊

- 重写与重载　＊＊＊

- - \33. 重载和重写的区别
  - \34. 构造器（constructor）是否可被重写（override）
  - \35. 重载的方法能否根据返回类型进行区分？为什么？

- \36. == 和 equals 的区别　＊＊＊

- \37. hashCode 与 equals（为什么重写equals方法后，hashCode方法也必须重写）　＊＊＊

- \38. Java 中是值传递还是引用传递，还是两者共存　＊＊

- \39. IO流　＊

- \40. BIO,NIO,AIO 有什么区别?　＊＊

- \41. 反射　＊＊＊

- \42. JAVA异常　＊＊＊

- \43. JAVA注解　＊＊

- \44. JAVA泛型　＊＊＊

- \45. JAVA序列化　＊＊

- \46. 深拷贝与浅拷贝　＊＊＊

- \47. 常见的Object方法　＊＊＊

往期内容：

- [面试官：请用五种方法来实现多线程交替打印问题](http://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&mid=2647724685&idx=1&sn=0c4d54e897753b6ff2b67c4e214c28ba&chksm=87e34a07b094c311e5ed6d1d791d5d8e30ecd6c0975dbcdb1dfeab24b7c24614e6f6c119e365&scene=21#wechat_redirect)
- [并发编程高频面试题第一弹](http://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&mid=2647724650&idx=1&sn=361a6102991e5123a5a94727143aaca3&chksm=87e34ae0b094c3f6ec01c245b38312163af096c2b019e1dd89961279980655f49eb890bb9307&scene=21#wechat_redirect)
- [技术岗面试中的一些常见问题](http://mp.weixin.qq.com/s?__biz=MzA4NjU1MzA2MQ==&mid=2647724575&idx=1&sn=1cb6f9974485a4fee9faaf6f12612132&chksm=87e34a95b094c383b055b18360f75df627aa2d8fa19678b2ae5386134af641ec5c2c06a49378&scene=21#wechat_redirect)

## 1. JVM、JRE及JDK的关系 ＊＊

JDK（Java Development Kit）是针对Java开发员的产品，是整个Java的核心，包括了Java运行环境JRE、Java工具和Java基础类库。

Java Runtime Environment（JRE）是运行JAVA程序所必须的环境的集合，包含JVM标准实现及Java核心类库。

JVM是Java Virtual Machine（Java虚拟机）的缩写，是整个java实现跨平台的最核心的部分，能够运行以Java语言写作的软件程序。

**简单来说就是JDK是Java的开发工具，JRE是Java程序运行所需的环境，JVM是Java虚拟机．它们之间的关系是JDK包含JRE和JVM，JRE包含JVM．**

## 2. JAVA语言特点　＊＊

- Java是一种面向对象的语言
- Java通过Java虚拟机实现了平台无关性，一次编译，到处运行
- 支持多线程
- 支持网络编程
- 具有较高的安全性和可靠性

## 3. JAVA和C++的区别　＊＊

> 面试时记住前四个就行了

- Java 通过虚拟机从而实现跨平台特性，但是 C++ 依赖于特定的平台。
- Java 没有指针，它的引用可以理解为安全指针，而 C++ 具有和 C 一样的指针。
- Java 支持自动垃圾回收，而 C++ 需要手动回收。
- Java 不支持多重继承，只能通过实现多个接口来达到相同目的，而 C++ 支持多重继承。
- Java 不支持操作符重载，虽然可以对两个 String 对象执行加法运算，但是这是语言内置支持的操作，不属于操 作符重载，而 C++ 可以。
- Java 的 goto 是保留字，但是不可用，C++ 可以使用 goto。

## 4. Java的基本数据类型 　＊＊

> 注意`String`不是基本数据类型

|     类型     | 关键字  | 包装器类型 | 占用内存(字节)(**重要**) |         取值范围          |  默认值  |
| :----------: | :-----: | :--------: | :----------------------: | :-----------------------: | :------: |
|    字节型    |  byte   |    Byte    |            1             | -128(-2^7)  ~  127(2^7-1) |    0     |
|    短整型    |  short  |   Short    |            2             |     -2^15  ~  2^15-1      |    0     |
|     整型     |   int   |  Integer   |            4             |     -2^31  ~  2^31-1      |    0     |
|    长整型    |  long   |    Long    |            8             |     -2^63  ~  2^63-1      |    0L    |
| 单精度浮点型 |  float  |   Float    |            4             |    3.4e-45  ~  1.4e38     |   0.0F   |
| 双精度浮点型 | double  |   Double   |            8             |   4.9e-324  ~  1.8e308    |   0.0D   |
|    字符型    |  char   | Character  |            2             |                           | '\u0000' |
|    布尔型    | boolean |  Boolean   |            1             |        true/flase         |  flase   |

## 5. 隐式(自动)类型转换和显示(强制)类型转换　＊＊

- 隐式(自动)类型转换：从存储范围小的类型到存储范围大的类型。`byte`→`short(char)`→`int`→`long`→`float`→`double`
- 显示(强制)类型转换：从存储范围大的类型到存储范围小的类型。`double`→`float`→`long`→`int`→`short(char)`→`byte`。该类类型转换很可能存在精度的损失。

看一个经典的代码

```
short s = 1;
s = s + 1;
```

这是会报错的，因为1是`int`型，`s+1`会自动转换为`int`型，将`int`型直接赋值给`short`型会报错。

做一下修改即可避免报错

```
short s = 1;
s = (short)(s + 1);
```

或这样写，因为`s += 1`会自动进行强制类型转换

```
short s = 1;
s += 1;
```

## 6. 自动装箱与拆箱 ＊＊

- 装箱：将基本类型用包装器类型包装起来

- 拆箱：将包装器类型转换为基本类型

  > 这个地方有很多易混淆的地方，但在面试中问到的频率一般，笔试的选择题中经常出现，还有一个`String`创建对象和这个比较像，很容易混淆，在下文可以看到

- 下面这段代码的输出结果是什么？

  ```
  public class Main {
      public static void main(String[] args) {
          
              Integer a = 100;
              Integer b = 100;
              Integer c = 128;
              Integer d = 128;
  
              System.out.println(a==b);
              System.out.println(c==d);
      }
  }
  ```

  ```
  true
  false
  ```

  很多人看到这个结果会很疑惑，为什么会是一个`true`一个`flase`．其实从源码中可以很容易找到原因．首先找到`Integer`方法中的`valueOf`方法

  ```
  public static Integer valueOf(int i) {
        if (i >= IntegerCache.low && i <= IntegerCache.high)
          return IntegerCache.cache[i + (-IntegerCache.low)];
        return new Integer(i);
    }
  ```

  可以看到当不满足`if`语句中的条件，就会重新创建一个对象返回，那结果必然不相等。继续打开`IntegerCache`可以看到

  ```
      private static class IntegerCache {
            static final int low = -128;
          static final int high;
            static final Integer cache[];
    
            static {
                // high value may be configured by property
                int h = 127;
                String integerCacheHighPropValue =
                    sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
                if (integerCacheHighPropValue != null) {
                    try {
                        int i = parseInt(integerCacheHighPropValue);
                        i = Math.max(i, 127);
                        // Maximum array size is Integer.MAX_VALUE
                        h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                    } catch( NumberFormatException nfe) {
                        // If the property cannot be parsed into an int, ignore it.
                    }
                }
                high = h;
    
                cache = new Integer[(high - low) + 1];
                int j = low;
                for(int k = 0; k < cache.length; k++)
                    cache[k] = new Integer(j++);
    
                // range [-128, 127] must be interned (JLS7 5.1.7)
                assert IntegerCache.high >= 127;
            }
    
            private IntegerCache() {}
        }
  ```

  代码挺长，大概说的就是在通过`valueOf`方法创建`Integer`对象的时候，如果数值在[-128,127]之间，便返回指向`IntegerCache.cache`中已经存在的对象的引用；否则创建一个新的`Integer`对象。所以上面代码中`a`与`b`相等，`c`与`d`不相等。

- 再看下面的代码会输出什么

  ```
  public class Main {
      public static void main(String[] args) {
  
              Double a = 1.0;
              Double b = 1.0;
              Double c = 2.0;
              Double d = 2.0;
  
              System.out.println(a==b);
              System.out.println(c==d);
  
      }
  }
  ```

  ```
  flase
  flase
  ```

  采用同样的方法，可以看到`Double`的`valueOf`方法，每次返回都是重新`new`一个新的对象，所以上面代码中的结果都不想等。

  ```
  public static Double valueOf(double d) {
            return new Double(d);
  }
  ```

- 最后再看这段代码的输出结果

  ```
  public class Main {
      public static void main(String[] args) {
  
          Boolean a = false;
          Boolean b = false;
          Boolean c = true;
          Boolean d = true;
  
          System.out.println(a==b);
          System.out.println(c==d);
      }
  }
  ```

  ```
  true
  true
  ```

  老方法继续看`valueOf`方法

  ```
  public static Boolean valueOf(boolean b) {
          return (b ? TRUE : FALSE);
      }
  ```

  再看看`TRUE`和`FALSE`是个什么东西，是两个静态成员属性。

  ```
  public static final Boolean TRUE = new Boolean(true);
  public static final Boolean FALSE = new Boolean(false);
  ```

**说下结论 **：`Integer`、`Short`、`Byte`、`Character`、`Long`这几个类的`valueOf`方法的实现是类似的。`Double`、`Float`的`valueOf`方法的实现是类似的。然后是`Boolean`的`valueOf`方法是单独一组的。

- `Integer i = new Integer(xxx)`和`Integer i =xxx`的区别

  这两者的区别主要是第一种会触发自动装箱，第二者不会

  最后看看下面这段程序的输出结果

  ```
  public class Main {
      public static void main(String[] args) {
          Integer a = 1;
          Integer b = 2;
          Integer c = 3;
          Long g = 3L;
          int int1 = 12;
          int int2 = 12;
          Integer integer1 = new Integer(12);
          Integer integer2 = new Integer(12);
          Integer integer3 = new Integer(1);
  
          System.out.println("c==(a+b) ->"+ (c==(a+b)));
          System.out.println("g==(a+b) ->" + (g==(a+b)));
          System.out.println( "c.equals(a+b) ->" + (c.equals(a+b)));
          System.out.println( "g.equals(a+b) ->" + (g.equals(a+b)));
          System.out.println("int1 == int2 -> " + (int1 == int2));
          System.out.println("int1 == integer1 -> " + (int1 == integer1));
          System.out.println("integer1 == integer2 -> " + (integer1 == integer2));
          System.out.println("integer3 == a1 -> " + (integer3 == a));
      }
  }
  ```

  ```
  c==(a+b) ->true
  g==(a+b) ->true
  c.equals(a+b) ->true
  g.equals(a+b) ->false
  int1 == int2 -> true
  int1 == integer1 -> true
  integer1 == integer2 -> false
  integer3 == a1 -> false
  ```

  下面简单解释这些结果。

  1.当 "=="运算符的两个操作数都是包装器类型的引用，则是比较指向的是否是同一个对象，而如果其中有一个操作数是表达式（即包含算术运算）则比较的是数值（即会触发自动拆箱的过程）。所以`c==a+b`，`g==a+b`为`true`。

  2.而对于`equals`方法会先触发自动拆箱过程，再触发自动装箱过程。也就是说a+b，会先各自调用`intValue`方法，得到了加法运算后的数值之后，便调用`Integer.valueOf`方法，再进行`equals`比较。所以`c.equals(a+b)`为`true`。而对于`g.equals(a+b)`，`a+b`会先拆箱进行相加运算，在装箱进行`equals`比较，但是装箱后为`Integer`，`g`为`Long`，所以`g.equals(a+b)`为`false`。

  3.`int1 == int2`为`true`无需解释，`int1 == integer1`，在进行比较时，`integer1`会先进行一个拆箱操作变成`int`型在进行比较，所以`int1 == integer1`为`true`。

  4.`integer1 == integer2`->`false`。`integer1`和`integer2`都是通过`new`关键字创建的，可以看成两个对象，所以`integer1 == integer2` 为`false`。`integer3 == a1` -> `false` , `integer3`是一个对象类型，而`a1`是一个常量它们存放内存的位置不一样，所以`integer3 == a1`为`false`，具体原因可学习下java的内存模型。

### String(不是基本数据类型)

### 7. String的不可变性  ＊＊＊

在 Java 8 中，`String` 内部使用 `char` 数组存储数据。并且被声明为`final`，因此它不可被继承。

```
public final class String implements java.io.Serializable, Comparable<String>, CharSequence { 
 private final char value[];
}
```

为什么`Strin`g`要设计成不可变的呢（不可变性的好处）:

1.可以缓存 `hash` 值（）

因为 `String` 的`hash`值经常被使用，例如`String` 用做 `HashMap` 的 `key`。不可变的特性可以使得 `hash`值也不可变， 因此只需要进行一次计算。

2.常量池优化

`String` 对象创建之后，会在字符串常量池中进行缓存，如果下次创建同样的对象时，会直接返回缓存的引用。

3.线程安全

`String` 不可变性天生具备线程安全，可以在多个线程中安全地使用。

### 8. 字符型常量和字符串常量的区别 ＊

1. 形式上: 字符常量是单引号引起的一个字符 字符串常量是双引号引起的若干个字符
2. 含义上: 字符常量相当于一个整形值(ASCII值),可以参加表达式运算 字符串常量代表一个地址值(该字符串在内存中存放位置)
3. 占内存大小 字符常量占两个字节 字符串常量占若干个字节(至少一个字符结束标志)

### 9. 什么是字符串常量池？＊

字符串常量池位于堆内存中，专门用来存储字符串常量，可以提高内存的使用率，避免开辟多块空间存储相同的字符串，在创建字符串时 JVM 会首先检查字符串常量池，如果该字符串已经存在池中，则返回它的引用，如果不存在，则实例化一个字符串放到池中，并返回其引用。

### 10. String 类的常用方法都有哪些？＊＊

> 面试时一般不会问，但面试或笔试写字符串相关的算法题经常会涉及到，还是得背一背（以下大致是按使用频率优先级排序）

- `length()`：返回字符串长度
- `charAt()`：返回指定索引处的字符
- `substring()`：截取字符串
- `trim()`：去除字符串两端空白
- `split()`：分割字符串，返回一个分割后的字符串数组。
- `replace()`：字符串替换。
- `indexOf()`：返回指定字符的索引。
- `toLowerCase()`：将字符串转成小写字母。
- `toUpperCase()`：将字符串转成大写字符。

### 11. String和StringBuffer、StringBuilder的区别是什么？＊＊＊

1.可变性

`String`不可变，`StringBuilder`和`StringBuffer`是可变的

2.线程安全性

`String`由于是不可变的，所以线程安全。`StringBuffer`对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。 `StringBuilder`并没有对方法进行加同步锁，所以是非线程安全的。

3.性能

```
StringBuilder` > `StringBuffer` > `String
```

> 为了方便记忆，总结如下

|               | 是否可变 | 是否安全 | 性能 |
| :-----------: | :------: | :------: | :--: |
|    String     |  不可变  |   安全   |  低  |
| StringBuilder |   可变   |  不安全  |  高  |
| StringBuffer  |   可变   |   安全   | 较高 |

## 12. switch 是否能作用在 byte 上，是否能作用在 long 上，是否能作用在 String 上 ＊

`switch`可以作用于`char` `byte` `short` `int`及它们对应的包装类型，`switch`不可作用于`long` `double` `float` `boolean`及他们的包装类型。在 JDK1.5之后可以作用于枚举类型，在JDK1.7之后可作用于`String`类型。

## 13. Java语言采用何种编码方案？有何特点？＊

Java语言采用Unicode编码标准，它为每个字符制订了一个唯一的数值，因此在任何的语言，平台，程序都可以放心的使用。

## 14. 访问修饰符 ＊＊

在Java编程语言中有四种权限访问控制符，这四种访问权限的控制符能够控制类中成员的可见性。其中类有两种`public`、`default`。而方法和变量有 4 种：`public`、`default`、`protected`、`private`。

- **public** : 对所有类可见。使用对象：类、接口、变量、方法

- **protected** : 对同一包内的类和所有子类可见。使用对象：变量、方法。**注意：不能修饰类（外部类）**。

- **default** : 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。

- **private** : 在同一类内可见。使用对象：变量、方法。**注意：不能修饰类（外部类）**

  |  修饰符   | 当前类 | 同包内 | 子类(同包) | 其他包 |
  | :-------: | :----: | :----: | :--------: | :----: |
  |  public   |   Y    |   Y    |     Y      |   Y    |
  | protected |   Y    |   Y    |     Y      |   N    |
  |  default  |   Y    |   Y    |     Y      |   N    |
  |  private  |   Y    |   N    |     N      |   N    |

## 15. 运算符　＊

- **&&和&**

  `&&`和`&`都可以表示逻辑与，但他们是有区别的，共同点是他们两边的条件都成立的时候最终结果才是`true`；不同点是`&&`只要是第一个条件不成立为`false`，就不会再去判断第二个条件，最终结果直接为`false`，而`&`判断的是所有的条件。

- **||和|**

  `||`和`|`都表示逻辑或，共同点是只要两个判断条件其中有一个成立最终的结果就是`true`，区别是`||`只要满足第一个条件，后面的条件就不再判断，而`|`要对所有的条件进行判断。

### 关键字

### 16. static关键字　＊＊＊

`static`关键字的主要用途**就是方便在没有创建对象时调用方法和变量和优化程序性能**

**1.static变量（静态变量）**

用`static`修饰的变量被称为静态变量，也被称为类变量，可以直接通过类名来访问它。静态变量被所有的对象共享，在内存中只有一个副本，仅当在类初次加载时会被初始化，而非静态变量在创建对象的时候被初始化，并且存在多个副本，各个对象拥有的副本互不影响。

**2.static方法(静态方法)**

`static`方法不依赖于任何对象就可以进行访问，在`static`方法中不能访问类的非静态成员变量和非静态成员方法，因为非静态成员方法/变量都是必须依赖具体的对象才能够被调用，但是在非静态成员方法中是可以访问静态成员方法/变量的。

```
public class Main {
    public static String s1 = "s1";//静态变量
    String s2  = "s2";
    public void fun1(){
        System.out.println(s1);
        System.out.println(s2);
    }
    
    public static void fun2(){
        System.out.println(s1);
        System.out.println(s2);//此处报错，静态方法不能调用非静态变量
    }
}
```

**3.static代码块（静态代码块）**

静态代码块的主要用途是可以用来优化程序的性能，因为它只会在类加载时加载一次，很多时候会将一些只需要进行一次的初始化操作都放在`static`代码块中进行。如果程序中有多个`static`块，在类初次被加载的时候，会按照`static`块的顺序来执行每个`static`块。

```
public class Main {
    static {
        System.out.println("hello,word");
    }
    public static void main(String[] args) {
        Main m = new Main();
    }
}
```

**4.可以通过this访问静态成员变量吗？（可以）**

`this`代表当前对象，可以访问静态变量，而静态方法中是不能访问非静态变量,也不能使用`this`引用。

**5.初始化顺序**

静态变量和静态语句块优先于实例变量和普通语句块，静态变量和静态语句块的初始化顺序取决于它们在代码中的顺序。如果存在继承关系的话，初始化顺序为**父类中的静态变量和静态代码块——子类中的静态变量和静态代码块——父类中的实例变量和普通代码块——父类的构造函数——子类的实例变量和普通代码块——子类的构造函数**

### 17. final 关键字　＊＊＊

`final`关键字主要用于修饰类，变量，方法。

1. 类：被`final`修饰的类不可以被继承
2. 方法：被`final`修饰的方法不可以被重写
3. 变量：被`final`修饰的变量是基本类型，变量的数值不能改变；被修饰的变量是引用类型，变量便不能在引用其他对象，但是变量所引用的对象本身是可以改变的。

```
public class Main {
    int a = 1;
    public static void main(String[] args) {
        final int b = 1;
        b = 2;//报错
        final Main m = new Main();
        m.a = 2;//不报错,可以改变引用类型变量所指向的对象
    }
} 
```

### 18. final finally finalize区别　＊＊＊

- `final`主要用于修饰类，变量，方法
- `finally`一般作用在`try-catch`代码块中，在处理异常的时候，通常我们将一定要执行的代码方法`finally`代码块 中，表示不管是否出现异常，该代码块都会执行，一般用来存放一些关闭资源的代码。
- `finalize`是一个属于`Object`类的一个方法，该方法一般由垃圾回收器来调用，当我们调用`System.gc()`方法的时候，由垃圾回收器调用`finalize()`，回收垃圾，但Java语言规范并不保证`inalize`方法会被及时地执行、而且根本不会保证它们会被执行。

### 19. this关键字　＊＊

> 重点掌握前三种即可

1.`this`关键字可用来引用当前类的实例变量。主要用于形参与成员名字重名，用`this`来区分。

```
public Person(String name, int age) {
    this.name = name;
    this.age = age;
}
```

2.`this`关键字可用于调用当前类方法。

```
public class Main {
    public void fun1(){
        System.out.println("hello,word");
    }
    public void fun2(){
        this.fun1();//this可省略
    }

    public static void main(String[] args) {
        Main m = new Main();
        m.fun2();
    }
}
```

3.`this()`可以用来调用当前类的构造函数。(注意：`this()`一定要放在构造函数的第一行，否则编译不通过)

```
class Person{
    private String name;
    private int age;
    
    public Person() {
    }
 
    public Person(String name) {
        this.name = name;
    }
    public Person(String name, int age) {
        this(name);
        this.age = age;
    }
}
```

4.`this`关键字可作为调用方法中的参数传递。

5.`this`关键字可作为参数在构造函数调用中传递。

6.`this`关键字可用于从方法返回当前类的实例。super

### 20. super关键字 ＊＊

1.`super`可以用来引用直接父类的实例变量。和`this`类似，主要用于区分父类和子类中相同的字段

2.`super`可以用来调用直接父类构造函数。(注意：`super()`一定要放在构造函数的第一行，否则编译不通过)

3.`super`可以用来调用直接父类方法。

```
public class Main {
    public static void main(String[] args) {
        Child child = new Child("Father","Child");
        child.test();
    }
}

class Father{
    protected String name;

    public Father(String name) {
        this.name = name;
    }

    public void Say(){
        System.out.println("hello,child");
    }

}

class Child extends Father{
    private String name;

    public Child(String name1, String name2) {
        super(name1);      //调用直接父类构造函数
        this.name = name2;
    }

    public void test(){
        System.out.println(this.name);
        System.out.println(super.name);  //引用直接父类的实例变量
        super.Say();      //调用直接父类方法
    }
}
```

### 21. this与super的区别　＊＊

- 相同点：

- 1. `super()`和`this()`都必须在构造函数的第一行进行调用，否则就是错误的
  2. `this()`和`super()`都指的是对象，所以，均不可以在`static`环境中使用。

- 不同点：

- 1. `super()`主要是对父类构造函数的调用，`this()`是对重载构造函数的调用
  2. `super()`主要是在继承了父类的子类的构造函数中使用，是在不同类中的使用；`this()`主要是在同一类的不同构造函数中的使用

### 22. break ,continue ,return 的区别及作用　＊＊

- `break`结束当前的循环体
- `continue`结束本次循环,进入下一次循环
- `return`结束当前方法

## 23. 面向对象和面向过程的区别　＊＊

- 面向过程

  优点：性能比面向对象高，因为类调用时需要实例化，开销比较大，比较消耗资源。

  缺点：没有面向对象易维护、易复用、易扩展

- 面向对象

  优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护

  缺点：性能比面向过程低

## 24. 面向对象三大特性(封装、继承、多态)　＊＊＊

- 封装

  **封装就是隐藏对象的属性和实现细节，仅对外公开接口**，控制在程序中属性的读和修改的访问级别。

- 继承

  **继承就是子类继承父类的特征和行为**，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。

- 多态（重要）

  多态是同一个行为具有多个不同表现形式或形态的能力。这句话不是很好理解，可以看这个解释，在Java语言中，多态就是指程序中定义的引用变量所指向的具体类型和通过该引用变量发出的方法调用在编程时并不确定，而是在程序运行期间才确定，即一个引用变量到底会指向哪个类的实例对象，该引用变量发出的方法调用到底是哪个类中实现的方法，必须在由程序运行期间才能决定。

  在Java中实现多态的三个必要条件：继承、重写、向上转型。继承和重写很好理解，向上转型是指在多态中需要将子类的引用赋给父类对象。

  ```
  public class Main {
      public static void main(String[] args) {
            Person person = new Student(); //向上转型
            person.run();
      }
  }
  
  class Person {
      public void run() {
          System.out.println("Person");
      }
  }
  
  class Student extends Person {   //继承
      @Override 
      public void run() {         //重载
          System.out.println("Student");
      }
  }
  ```

  运行结果为

  ```
  Student
  ```

## 25. 面向对象五大基本原则是什么　＊＊

- **单一职责原则（Single-Resposibility Principle）**

  **一个类，最好只做一件事，只有一个引起它的变化。**单一职责原则可以看做是低耦合、高内聚在面向对象原则上的引申，将职责定义为引起变化的原因，以提高内聚性来减少引起变化的原因。

- **开放封闭原则（Open-Closed principle）**

  **软件实体应该是可扩展的，而不可修改的。也就是，对扩展开放，对修改封闭的。**

- **里氏替换原则** **（Liskov-Substituion Principle）**

  **子类必须能够替换其基类。**这一思想体现为对继承机制的约束规范，只有子类能够替换基类时，才能保证系统在运行期内识别子类，这是保证继承复用的基础。在父类和子类的具体行为中，必须严格把握继承层次中的关系和特征，将基类替换为子类，程序的行为不会发生任何变化。同时，这一约束反过来则是不成立的，子类可以替换基类，但是基类不一定能替换子类。

- **依赖倒置原则（Dependecy-Inversion Principle）**

  **依赖于抽象。**具体而言就是高层模块不依赖于底层模块，二者都同依赖于抽象；抽象不依赖于具体，具体依赖于抽象。

- **接口隔离原则（Interface-Segregation Principle）**

  **使用多个小的专门的接口，而不要使用一个大的总接口。**

## 26. 抽象类和接口的对比　＊＊＊

在Java语言中，`abstract class`和`interface`是支持抽象类定义的两种机制。抽象类：用来捕捉子类的通用特性的。接口：抽象方法的集合。

**相同点：**

- 接口和抽象类都不能实例化
- 都包含抽象方法，其子类都必须覆写这些抽象方法

**不同点：**

|    类型    |                            抽象类                            |                          接口                          |
| :--------: | :----------------------------------------------------------: | :----------------------------------------------------: |
|    定义    |                        abstract class                        |                       Interface                        |
|    实现    |        extends(需要提供抽象类中所有声明的方法的实现)         |    implements（需要提供接口中所有声明的方法的实现）    |
|    继承    | 抽象类可以继承一个类和实现多个接口；子类只可以继承一个抽象类 | 接口只可以继承接口（一个或多个）；子类可以实现多个接口 |
| 访问修饰符 |      抽象方法可以有public、protected和default这些修饰符      |   接口方法默认修饰符是public。你不可以使用其它修饰符   |
|   构造器   |                      抽象类可以有构造器                      |                    接口不能有构造器                    |
|  字段声明  |                 抽象类的字段声明可以是任意的                 |         接口的字段默认都是 static 和 final 的          |

## 27. 在Java中定义一个不做事且没有参数的构造方法的作用　＊

Java程序存在继承，在执行子类的构造方法时，如果没有用`super()`来调用父类特定的构造方法，则会调用父类中“没有参数的构造方法”。如果父类只定义了有参数的构造函数，而子类的构造函数没有用`super`调用父类那个特定的构造函数，就会出错。

## 28. 在调用子类构造方法之前会先调用父类没有参数的构造方法，其目的是 ＊

帮助子类做初始化工作。

## 29. 一个类的构造方法的作用是什么？若一个类没有声明构造方法，改程序能正确执行吗？为什么？ ＊

主要作用是完成对类对象的初始化工作。可以执行。因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法。

## 30. 构造方法有哪些特性？　＊＊

- 方法名称和类同名
- 不用定义返回值类型
- 不可以写`retrun`语句
- 构造方法可以被重载

## 31. 变量　＊＊

- 类变量：独立于方法之外的变量，用`static`修饰。

- 实例变量：独立于方法之外的变量，不过没有 `static` 修饰。

- 局部变量：类的方法中的变量。

- 成员变量：成员变量又称全局变量，可分为类变量和实例变量，有`static`修饰为类变量，没有`static`修饰为实例变量。

  |          |       类变量       |       实例变量       |         局部变量         |
  | :------: | :----------------: | :------------------: | :----------------------: |
  | 定义位置 |    类中，方法外    |     类中，方法外     |          方法中          |
  |  初始值  |    有默认初始值    |     有默认初始值     |       无默认初始值       |
  | 存储位置 |       方法区       |          堆          |            栈            |
  | 生命周期 | 类何时被加载和卸载 | 实例何时被创建及销毁 | 方法何时被调用及结束调用 |

## 32. 内部类　＊＊

内部类包括这四种：成员内部类、局部内部类、匿名内部类和静态内部类

- 成员内部类

  1.成员内部类定义为位于另一个类的内部，成员内部类可以无条件访问外部类的所有成员属性和成员方法（包括`private`成员和静态成员）。

  ```
  class Outer{
      private double a = 0;
      public static int b =1;
      public Outer(double a) {
          this.a = a;
      }
  
      class Inner {     //内部类
          public void fun() {
              System.out.println(a);
              System.out.println(b);
          }
      }
  }
  ```

  2.当成员内部类拥有和外部类同名的成员变量或者方法时，即默认情况下访问的是成员内部类的成员。如果要访问外部类的同名成员，需要以下面的形式进行访问：外部类.`this`.成员变量

  3.在外部类中如果要访问成员内部类的成员，必须先创建一个成员内部类的对象，再通过指向这个对象的引用来访问。

  4.成员内部类是依附外部类而存在的，如果要创建成员内部类的对象，前提是必须存在一个外部类的对象。创建成员内部类对象的一般方式如下：

  ```
  class Outter{
      private double a = 0;
      public static int b =1;
      public Outter(){}
      public Outter(double a) {
          this.a = a;
          Inner inner = new Inner();
          inner.fun();     //调用内部类的方法
      }
  
  
      class Inner {     //内部类
          int b = 2;
          public void fun() {
              System.out.println(a);
              System.out.println(b);            //访问内部类的b
              System.out.println(Outter.this.b);//访问外部类的b
          }
      }
  }
  public class Main{
      public static void main(String[] args) {
          Outter outter = new Outter();
          Outter.Inner inner = outter.new Inner(); //创建内部类的对象
      }
  }
  ```

- 局部内部类

  局部内部类是定义在一个方法或者一个作用域里面的类，它和成员内部类的区别在于局部内部类的访问仅限于方法内或者该作用域内。定义在实例方法中的局部类可以访问外部类的所有变量和方法，定义在静态方法中的局部类只能访问外部类的静态变量和方法。

  ```
  class Outter {
  
      private int outter_a = 1;
      private static int static_b = 2;
  
      public void test1(){
          int inner_c =3;
          class Inner {
              private void fun(){
                  System.out.println(outter_a);
                  System.out.println(static_b);
                  System.out.println(inner_c);
              }
          }
          Inner  inner = new Inner(); //创建局部内部类
          inner.fun();
      }
      public static void test2(){
          int inner_d =3;
          class Inner {
              private void fun(){
                   System.out.println(outter_a); //编译错误，定义在静态方法中的局部类不可以访问外部类的实例变量
                  System.out.println(static_b);
                  System.out.println(inner_d);
              }
          }
          Inner  inner = new Inner();
          inner.fun();
      }
  }
  ```

- 匿名内部类

  匿名内部类只没有名字的内部类，在日常开发中使用较多。使用匿名内部类的前提条件：必须继承一个父类或实现一个接口。

  ```
  interface Person {
      public void fun();
  }
  class Demo {
      public static void main(String[] args) {
           new Person() {
              public void fun() {
                  System.out.println("hello,word");
              }
          }.fun();
      }
  }
  ```

- 静态内部类

  静态内部类也是定义在另一个类里面的类，只不过在类的前面多了一个关键字`static`。静态内部类是不需要依赖于外部类的，并且它不能使用外部类的非`static`成员变量或者方法，这点很好理解，因为在没有外部类的对象的情况下，可以创建静态内部类的对象，如果允许访问外部类的非`static`成员就会产生矛盾，因为外部类的非static成员必须依附于具体的对象。

  ```
  class Outter {
      int a = 1;
      static int b = 2;
      public Outter() {
  
      }
  
      static class Inner {
          public Inner() {
              System.out.println(a);//报错，静态内部类不能访问非静态变量
              System.out.println(b);
          }
      }
  
  }
  public class Main{
      public static void main(String[] args) {
          Outter.Inner inner = new Outter.Inner();
      }
  }
  ```

- 内部类的优点：

- 1. 内部类不为同一包的其他类所见，具有很好的封装性；
  2. 匿名内部类可以很方便的定义回调。
  3. 每个内部类都能独立的继承一个接口的实现，所以无论外部类是否已经继承了某个(接口的)实现，对于内部类都没有影响。
  4. 内部类有效实现了“多重继承”，优化 java 单继承的缺陷。

- 局部内部类和匿名内部类访问局部变量的时候，为什么变量必须要加上`final`？

  ```
  public class Main {
      public static void main(String[] args)  {
           
      }
       
      public void fun(final int b) {
          final int a = 10;
          new Thread(){
              public void run() {
                  System.out.println(a);
                  System.out.println(b);
              };
          }.start();
      }
  }
  ```

  对于变量`a`可以从生命周期的角度理解，局部变量直接存储在栈中，当方法执行结束后，非`final`的局部变量就被销毁，而局部内部类对局部变量的引用依然存在，如果局部内部类要调用没有`final`修饰的局部变量时，就会造成生命周期不一致出错。

  对于变量`b`，其实是将`fun`方法中的变量`b`以参数的形式对匿名内部类中的拷贝（变量`b`的拷贝）进行赋值初始化。在`run`方法中访问的变量`b`根本就不是`test`方法中的局部变量`b`，而是一个拷贝值，所以不存在生命周期不一致的问题，但如果在`run`方法中修改变量`b`的值会导致数据不一致，所以需要加`final`修饰。

## 重写与重载　＊＊＊

### 33. 重载和重写的区别

- 重载：发生在同一个类中，方法名相同参数列表不同（参数类型不同、个数不同、顺序不同），与方法返回值和访问修饰符无关，即重载的方法不能根据返回类型进行区分。
- 重写：发生在父子类中，方法名、参数列表必须相同，返回值小于等于父类，抛出的异常小于等于父类，访问修饰符大于等于父类（里氏代换原则）；如果父类方法访问修饰符为`private`则子类中就不是重写。

### 34. 构造器（constructor）是否可被重写（override）

构造器可以被重载，不能被重写

### 35. 重载的方法能否根据返回类型进行区分？为什么？

不能，因为调用时不能指定类型信息，编译器不知道你要调用哪个函数。

## 36. == 和 equals 的区别　＊＊＊

- ==

  对于基本数据类型，`==`比较的是值；对于引用数据类型，`==`比较的是内存地址。

- eauals

  对于没有重写`equals`方法的类，`equals`方法和`==`作用类似；对于重写过`equals`方法的类，`equals`比较的是值。

## 37. hashCode 与 equals（为什么重写equals方法后，hashCode方法也必须重写）　＊＊＊

- equals

  先看下`String`类中重写的`equals`方法。

  ```
      public boolean equals(Object anObject) {
          if (this == anObject) {
              return true;
          }
          if (anObject instanceof String) {
              String anotherString = (String)anObject;
              int n = value.length;
              if (n == anotherString.value.length) {
                  char v1[] = value;
                  char v2[] = anotherString.value;
                  int i = 0;
                  while (n-- != 0) {
                      if (v1[i] != v2[i])
                          return false;
                      i++;
                  }
                  return true;
              }
          }
          return false;
      }
  ```

  从源码中可以看到：

- 1. `equals`方法首先比较的是内存地址，如果内存地址相同，直接返回`true`；如果内存地址不同，再比较对象的类型，类型不同直接返回`false`；类型相同，再比较值是否相同；值相同返回`true`，值不同返回`false`。总结一下，`equals`会比较**内存地址、对象类型、以及值**，内存地址相同，`equals`一定返回`true`；对象类型和值相同，`equals`方法一定返回`true`。
  2. 如果没有重写`equals`方法，那么`equals`和`==`的作用相同，比较的是对象的地址值。

- `hashCode`

  `hashCode`方法返回对象的散列码，返回值是`int`类型的散列码。散列码的作用是确定该对象在哈希表中的索引位置。

  关于`hashCode`有一些约定：

- 1. 两个对象相等，则`hashCode`一定相同。
  2. 两个对象有相同的`hashCode`值，它们不一定相等。
  3. `hashCode()`方法默认是对堆上的对象产生独特值，如果没有重写`hashCode()`方法，则该类的两个对象的`hashCode`值肯定不同

- 为什么重写`equals`方法后，`hashCode`方法也必须重写

- 1. 根据规定，两个对象相等，`hashCode`值也许相同，所以重写`equals`方法后，`hashCode`方法也必须重写（面试官肯定不是想听这个答案）
  2. `hashCode`在具有哈希机制的集合中起着非常关键的作用，比如`HashMap`、`HashSet`等。以`HashSet`为例，`HashSet`的特点是存储元素时无序且唯一，在向`HashSet`中添加对象时，首先会计算对象的`HashCode`值来确定对象的存储位置，如果该位置没有其他对象，直接将该对象添加到该位置；如果该存储位置有存储其他对象（新添加的对象和该存储位置的对象的`HashCode`值相同），调用`equals`方法判断两个对象是否相同，如果相同，则添加对象失败，如果不相同，则会将该对象重新散列到其他位置。所以重写`equals`方法后，`hashCode`方法不重写的话，会导致所有对象的`HashCode`值都不相同，都能添加成功，那么`HashSet`中会出现很多重复元素，`HashMap`也是同理（因为`HashSet`的底层就是通过`HashMap`实现的），会出现大量相同的`Key`（`HashMap`中的`key`是唯一的，但不同的`key`可以对应相同的`value`）。所以重写`equals`方法后，`hashCode`方法也必须重写。同时因为两个对象的`hashCode`值不同，则它们一定不相等，所以先计算对象的`hashCode`值可以在一定程度上判断两个对象是否相等，提高了集合的效率。总结一下，一共两点：**第一，在`HashSet`等集合中，不重写`hashCode`方法会导致其功能出现问题；第二，可以提高集合效率。**

## 38. Java 中是值传递还是引用传递，还是两者共存　＊＊

> 这是一个很容易搞混又很难解释清楚的问题，先说结论，Java中只有值传递

先看这样一段代码

```
public class Main{
    public static void main(String[] args) {
        int a = 1;
        printValue(a);
        System.out.println("a:" + a);
    }
    public static void printValue(int b){
        b = 2;
        System.out.println("b:"+ b);
    }
}
```

输出

```
b:2
a:1
```

可以看到将`a`的值传到`printValue`方法中，并将其值改为2。但方法调用结束后，`a`的值还是1，并未发生改变，所以这种情况下为值传递。

再看这段代码

```
public class Main{
    public static void main(String[] args) {
        Preson p = new Preson();
        p.name = "zhangsan";
        printValue(p);
        System.out.println("p.name: " + p.name);
    }
    public static void printValue(Preson q){
        q.name = "lisi";
        System.out.println("q.name: "+ q.name);
    }
}
class Preson{
    public String name;
}
```

输出结果

```
q.name: lisi
p.name: lisi
```

在将`p`传入`printValue`方法后，方法调用结束，`p`的`name`属性竟然被改变了！所以得出结论，参数为基本类型为值传递，参数为引用类型为时为引用传递。这个结论是错误的，下面来看看判断是值传递还是值传递的关键是什么，先看定义

- 值传递：是指在调用函数时将实际参数**复制一份**传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。
- 引用传递：是指在调用函数时将实际参数的**地址**直接传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。

从定义中可以明显看出，区分是值传递还是引用传递主要是看**向方法中传递的是实际参数的副本还是实际参数的地址**。上面第一个例子很明显是值传递，其实第二个例子中向`printValue`方法中传递的是一个引用的副本，只是这个**副本引用和原始的引用指向的同一个对象**，所以副本引用修改过对象属性后，通过原始引用查看对象属性肯定也是被修改过的。换句话说，`printValue`方法中修改的是副本引用指向的对象的属性，不是引用本身，如果修改的是引用本身，那么原始引用肯定不受影响。看下面这个例子

```
public class Main{
    public static void main(String[] args) {
        Preson p = new Preson();
        p.name = "zhangsan";
        printValue(p);
        System.out.println("p.name: " + p.name);
    }
    public static void printValue(Preson q){
        q = new Preson();
        q.name = "lisi";
        System.out.println("q.name: "+ q.name);
    }
}
class Preson{
    public String name;
}
```

输出结果

```
q.name: lisi
p.name: zhangsan
```

可以看到将`p`传入`printValue`方法后，`printValue`方法调用结束后，`p`的属性`name`没有改变，这是因为**在`printValue`方法中并没有改变副本引用`q`所指向的对象，而是改变了副本引用`q`本身，将副本引用`q`指向了另一个对象并对这个对象的属性进行修改**，所以原始引用`p`所指向的对象不受影响。所以证明Java中只存在值传递。

## 39. IO流　＊

Java IO流主要可以分为输入流和输出流。按照照操作单元划分，可以划分为字节流和字符流。按照流的角色划分为节点流和处理流。

Java I0流的40多个类都是从4个抽象类基类中派生出来的。

- InputStream：字节输入流
- Reader：字符输入流
- OutputStream：字节输出流
- Writer：字符输出流

## 40. BIO,NIO,AIO 有什么区别?　＊＊

- **BIO (Blocking I/O)：**服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销，可以通过线程池机制来改善。BIO方式适用于连接数目比较小且固定的架构，这种方式对服务端资源要求比较高，并发局限于应用中，在jdk1.4以前是唯一的io

- **NIO (New I/O)：**服务器实现模式为一个请求一个线程，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有IO请求时才启动一个线程进行处理。NIO方式适用于连接数目多且连接比较短（轻操作）的架构，比如聊天服务器，并发局限于应用中，编程比较复杂，jdk1,4开始支持

- **AIO (Asynchronous I/O)：**服务器实现模式为一个有效请求一个线程，客户端的IO请求都是由操作系统先完成了再通知服务器用其启动线程进行处理。AIO方式适用于连接数目多且连接比较长（重操作）的架构，比如相册服务器，充分调用OS参与并发操作，编程比较复杂，jdk1.7开始支持。

  这些概念看着比较枯燥，可以从这个经典的烧开水的例子去理解

  **BIO ：**来到厨房，开始烧水，并坐在水壶面前一直等着水烧开。

  **NIO**：来到厨房，开始烧水，但是我们不一直坐在水壶前面等，而是做些其他事，然后每隔几分钟到厨房看一下水有没有烧开。

  **AIO**：来到厨房，开始烧水，我们不一直坐在水壶前面等，而是在水壶上面装个开关，水烧开之后它会通知我。

## 41. 反射　＊＊＊

JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。

Java获取Class对象的三种方式

```
class Person {
    public String name = "zhangsan";
    public Person() {
    }
}
public class Main{
    public static void main(String[] args) throws ClassNotFoundException {
 //方式1
     Person p1 = new Person();
     Class c1 = p1.getClass();
     //方式2
    Class c2 = Person.class;
    //方式3可能会抛出ClassNotFoundException异常
    Class c3 = Class.forName("com.company");
    }
}
```

因为在一个类在 JVM 中只会有一个 `Class` 实例，所以对`c1`、`c2`、`c3`进行`equals`比较时返回的都是`true`。

**反射优缺点：**

- 优点：运行期类型的判断，动态加载类，提高代码灵活度。
- 缺点：性能比直接的java代码要慢很多。

**反射应用场景：**

1. Java的很多框架都用到了反射，例如`Spring`中的xml的配置模式等
2. 动态代理设计模式也采用了反射机制

## 42. JAVA异常　＊＊＊

异常主要分为`Error`和`Exception`两种

- Error：`Error`类以及他的子类的实例，代表了JVM本身的错误。错误不能被程序员通过代码处理。
- EXception：`Exception`以及他的子类，代表程序运行时发送的各种不期望发生的事件。可以被Java异常处理机制使用，是异常处理的核心。

异常框图

![image](\JAVA核心知识点最详细版.assets\66.png)

除了以上的分类，异常还能分为非检查异常和检查异常

- **非检查异常**（unckecked exception）：**该类异常包括运行时异常（RuntimeException及其子类）和错误（Error）。**编译器不会进行检查并且不要求必须处理的异常，也就说当程序中出现此类异常时，即使我们没有`try-catch`捕获它，也没有使用`throws`抛出该异常，编译也会正常通过。因为这样的异常发生的原因很可能是代码写的有问题。
- **检查异常**（checked exception）：**除了`Error`和 `RuntimeException`的其它异常。**这是编译器要求必须处理的异常。这样的异常一般是由程序的运行环境导致的。因为程序可能被运行在各种未知的环境下，而程序员无法干预用户如何使用他编写的程序，所以必须处理这些异常。

> 下面来看下`try{}catch(){}finally{}`和`return`之间的“恩恩怨怨”，这里有些乱，面试时问的也不是很多，实在记不住就算啦。还是先看代码猜结果。

```
public class Main{
    public static void main(String[] args) {
        int a = test1();
        System.out.println(a);
        int b = test2();
        System.out.println(b);
        int c = test3();
        System.out.println(c);
        int d = test4();
        System.out.println(d);
        int e = test5();
        System.out.println(e);
    }
    public static int test1(){
        int a = 1;
        try{
            a = 2;
            return a;
        }catch(Exception e){
            System.out.println("hello,test1");
            a = 3;
        }finally{
            a = 4;
        }
        return a;
    }
    //输出 2
    
    
    public static int test2(){
        int a = 1;
        try{
            a = 2;
            return a;
        }catch(Exception e){
            System.out.println("hello,test2");
            a = 3;
            return a;
        }finally{
            a = 4;
        }
    }
    //输出 2
    
    
    public static int test3(){
        int a = 1;
        try{
            a = 2/0;
            return a;
        }catch(Exception e){
            System.out.println("hello,test3");
            a = 3;
        }finally{
            a = 4;
        }
        return a;
    }
    //输出 hello,test3 
    // 4
    
    
    public static int test4(){
        int a = 1;
        try{
            a = 2/0;
            return a;
        }catch(Exception e){
            System.out.println("hello,test4");
            a = 3;
            return a;
        }finally{
            a = 4;
        }
    }
    //输出 hello,test4
    // 3
    
    public static int test5(){
        int a = 1;
        try{
            a = 2/0;
            return a;
        }catch(Exception e){
            a = 3;
            return a;
        }finally{
            a = 4;
            return a;
        }
    }
    
    //输出 4
}
```

如果没有仔细的研究过，应该好多会猜错，下面总结下规律。

1. 从前三个例子可以看出如果`try{}`中的代码没有异常，`catch(){}`代码块中的代码不会执行。所以如果`try{}`和`catch(){}`都含有`return`时，无异常执行`try{}`中的`return`，存在异常执行`catch(){}`的`return`。
2. 不管任何情况，就算`try{}`或`catch(){}`中含有`return`，`finally{}`中的代码一定会执行，那么为什么`test1`、`test2`、`test3`中的结果不是4呢，因为虽然`finally`是在`return`后面的表达式运算之后执行的，但此时并没有返回运算之后的值，而是把值保存起来，不管`finally`对该值做任何的改变，返回的值都不会改变，依然返回保存起来的值。也就是说方法的返回值是在`finally`运算之前就确定了的。
3. 如果`return`的数据是引用数据类型，而在`finally`中对该引用数据类型的属性值的改变起作用，`try`中的`return`语句返回的就是在`finally`中改变后的该属性的值。这个不理解可以看看上面提到的Java的值传递的问题。
4. 如果`finally{}`中含有`return`，会导致程序提前退出，不在执行`try{}`或`catch(){}`中的`return`。所以`test5`返回的值是4。

最后总计一下`try{}catch(){}finally{}`的执行顺序。

1. 先执行`try`中的语句，包括`return`后面的表达式；
2. 有异常时,执行`catch`中的语句，包括`return`后面的表达式，无异常跳过`catch`语句；
3. 然后执行`finally`中的语句，如果`finally`里面有`return`语句，执行`return`语句，程序结束；
4. `finally{}`中没有`return`时，无异常执行`try`中的`return`，如果有异常时则执行`catch`中的`return`。前两步执行的`return`只是确定返回的值，程序并未结束，`finally{}`执行之后，最后将前两步确定的`return`的返回值返回。

## 43. JAVA注解　＊＊

> 面试问的不多，但是在使用框架开发时会经常使用，但东西太多了，这里只是简单介绍下概念。

`Annotation`注解可以看成是java中的一种标记记号，用来给java中的类，成员，方法，参数等任何程序元素添加一些额外的说明信息，同时不改变程序语义。注解可以分为三类：基本注解，元注解，自定义注解

- 标准注解

- 1. @Deprecated：该注解用来说明程序中的某个元素（类，方法，成员变量等）已经不再使用，如果使用的话的编译器会给出警告。
  2. @SuppressWarnings(value=“”)：用来抑制各种可能出现的警告。
  3. @Override：用来说明子类方法覆盖了父类的方法，保护覆盖方法的正确使用

- 元注解（元注解也称为元数据注解，是对注解进行标注的注解，元注解更像是一种对注解的规范说明，用来对定义的注解进行行为的限定。例如说明注解的生存周期，注解的作用范围等）

- 1. @Target(value=“ ”)：该注解是用来限制注解的使用范围的，即该注解可以用于哪些程序元素。
  2. @Retention(value=“ ”)：用于说明注解的生存周期
  3. @Documnent：用来说明指定被修饰的注解可以被javadoc.exe工具提取进入文档中，所有使用了该注解进行标注的类在生成API文档时都在包含该注解的说明。
  4. @Inherited：用来说明使用了该注解的父类，其子类会自动继承该注解。
  5. @Repeatable：java1.8新出的元注解，如果需要在给程序元素使用相同类型的注解，则需将该注解标注上。

- 自定义注解：用@Interface来声明注解。

## 44. JAVA泛型　＊＊＊

Java 泛型是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。

- 泛型擦除（这是面试考察泛型时经常问到的问题）

  Java的泛型基本上都是在编译器这个层次上实现的，在生成的字节码中是不包含泛型中的类型信息的，使用泛型的时候加上类型参数，在编译器编译的时候会去掉，这个过程成为类型擦除。看下面代码

  ```
  public class Main{
      public static void main(String[] args) {
          ArrayList<Integer> arrayList1 = new ArrayList<>();
          ArrayList<String> arrayList2 = new ArrayList<>();
  
          System.out.println(arrayList1.getClass() == arrayList2.getClass());
      }
  }
  ```

  输出结果

  ```
  true
  ```

  可以看到`ArrayList<Integer>`和`ArrayList<String>`的原始类型是相同，在编译成字节码文件后都会变成`List`，JVM看到的只有`List`，看不到泛型信息，这就是泛型的类型擦除。再看下面这段代码

  ```
  public class Main{
      public static void main(String[] args) throws Exception {
          ArrayList<Integer> arrayList = new ArrayList<>();
          arrayList.add(1);
          arrayList.getClass().getMethod("add", Object.class).invoke(arrayList, "a");
          System.out.println(arrayList.get(0));
          System.out.println(arrayList.get(1));
      }
  }
  ```

  输出

  ```
  1
  a
  ```

  可以看到通过反射进行`add`操作，`ArrayList<Integer>`竟然可以存储字符串，这是因为在反射就是在运行期调用的`add`方法，在运行期泛型信息已经被擦除。

- 既然存在类型擦除，那么Java是如何保证在`ArrayList<Integer>`添加字符串会报错呢？

  Java编译器是通过先检查代码中泛型的类型，然后在进行类型擦除，再进行编译。

## 45. JAVA序列化　＊＊

- 序列化：将对象写入到IO流中

- 反序列化：从IO流中恢复对象

- 序列化的意义：将Java对象转换成字节序列，这些字节序列更加便于通过网络传输或存储在磁盘上，在需要时可以通过反序列化恢复成原来的对象。

- 实现方式：

- 1. 实现**Serializable**接口
  2. 实现**Externalizable**接口

- 序列化的注意事项：

- 1. 对象的类名、实例变量会被序列化；方法、类变量、`transient`实例变量都不会被序列化。
  2. 某个变量不被序列化，可以使用`transient`修饰。
  3. 序列化对象的引用类型成员变量，也必须是可序列化的，否则，会报错。
  4. 反序列化时必须有序列化对象的`class`文件。

## 46. 深拷贝与浅拷贝　＊＊＊

- 深拷贝：对基本数据类型进行值传递，对引用数据类型，创建一个新的对象，并复制其内容，两个引用指向两个对象，但对象内容相同。

- 浅拷贝：对基本数据类型进行值传递，对引用数据类型复制一个引用指向原始引用的对象，就是复制的引用和原始引用指向同一个对象。

  具体区别看下图

  ![image](\JAVA核心知识点最详细版.assets\67.png)

- 深拷贝的实现方式

- 1. 重载`clone`方法

     ```
      public class Main{
         public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException, CloneNotSupportedException {
             Address s = new Address("天津");
             Person p = new Person("张三", 23, s);
             System.out.println("克隆前的地址：" + p.getAddress().getName());
             Person cloneP = (Person) p.clone();
             cloneP.getAddress().setName("北京");
             System.out.println("克隆后的地址：" + cloneP.getAddress().getName());
         }
     }
     
     class Address implements Cloneable {
         private String city;
         public Address(String name){
             this.city = name;
     }
         @Override
         protected Object clone() throws CloneNotSupportedException {
                 return super.clone();
         }
         public String getName() {
             return city;
     
         }
         public void setName(String name) {
             this.city = name;
     
         }
     }
     class Person implements Cloneable{
         private String name;
         private int age;
         private Address address;
         public Person(String name, int age, Address address){
             this.name = name;
             this.age = age;
             this.address = address;
     
         }
         @Override
         public Object clone() throws CloneNotSupportedException {
               Person  person = (Person) super.clone();
               person.address = (Address)address.clone();
             return person;
         }
         public String getName() {
             return name;
         }
         public void setName(String name) {
             this.name = name;
         }
         public int getAge() {
             return age;
         }
         public void setAge(int age) {
             this.age = age;
         }
         public Address getAddress() {
             return address;
         }
         public void setAddress(Address address) {
             this.address = address;
         }
     }
     ```

     输出

     ```
     克隆前的地址：天津
     克隆后的地址：北京
     ```

     其实就是`Person`类和`Address`类都要重写`clone`方法，这里面需要注意的一点是`super.clone()`为浅克隆，所以在在`Person`类中重写`clone`方法时，`address`对象需要调用`address.clone()`重新赋值，因为`address`类型为引用类型。

  2. 序列化

     ```
     public class Main{
         public static void main(String[] args) throws IOException, ClassNotFoundException {
             Address s = new Address("天津");
             Person p = new Person("张三", 23, s);
             System.out.println("克隆前的地址：" + p.getAddress().getName());
             Person cloneP = (Person) p.deepClone();
             cloneP.getAddress().setName("北京");
             System.out.println("克隆后的地址：" + cloneP.getAddress().getName());
         }
     }
     
     class Address implements Serializable{
         private String city;
         public Address(String name){
             this.city = name;
         }
     
         public String getName() {
             return city;
     
         }
         public void setName(String name) {
             this.city = name;
     
         }
     }
     class Person implements Serializable{
         private String name;
         private int age;
         private Address address;
         public Person(String name, int age, Address address){
             this.name = name;
             this.age = age;
             this.address = address;
     
         }
     
         public Object deepClone() throws IOException, ClassNotFoundException {        
             ByteArrayOutputStream bos = new ByteArrayOutputStream();
             ObjectOutputStream oos = new ObjectOutputStream(bos);
             oos.writeObject(this);        
             ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
             ObjectInputStream ois = new ObjectInputStream(bis);
             return ois.readObject();
         }
     
         public String getName() {
             return name;
         }
         public void setName(String name) {
             this.name = name;
         }
         public int getAge() {
             return age;
         }
         public void setAge(int age) {
             this.age = age;
         }
         public Address getAddress() {
             return address;
         }
         public void setAddress(Address address) {
             this.address = address;
         }
     }
     ```

     输出

     ```
     克隆前的地址：天津
     克隆后的地址：北京
     ```

## 47. 常见的Object方法　＊＊＊

> 这些方法都很重要，面试经常会问到，要结合其他知识将这些方法理解透彻

- `Object clone()`：创建与该对象的类相同的新对象
- `boolean equals(Object)`：比较两对象是否相等
- `void finalize()`：当垃圾回收器确定不存在对该对象的更多引用时，对象垃圾回收器调用该方法
- `Class getClass()`：返回一个对象运行时的实例类
- `int hashCode()`：返回该对象的散列码值
- `void notify()`：唤醒等待在该对象的监视器上的一个线程
- `void notifyAll()`：唤醒等待在该对象的监视器上的全部线程
- `String toString()`：返回该对象的字符串表示
- `void wait()`：在其他线程调用此对象的 `notify()` 方法或 `notifyAll()`方法前，导致当前线程等待
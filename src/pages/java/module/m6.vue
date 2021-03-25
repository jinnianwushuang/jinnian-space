<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/module/m6.vue
 * @Description    : 
-->
<template>
    <div>
        <div>IO</div>
        <pre>
            字节流 写 各种文件类型 
            字符流 写  记事本 txt 文件 
            释放资 源 close     捕获错误
            FileOutputStream   FileInputStream 
            字节缓冲流  BufferedOutputStream   BufferedInputStream
            字符输出流   FileWriter   
            字符缓冲流  BufferedWriter   BufferedReader
            转换流
            对象操作流   ObjectOutputStream   ObjectInputStream  
                           对象需要实现 可序列化接口 ，需要抛出各种异常  需要看 demo
                           transient  路过的  序列化跳过字段  例如密码
            properties  
                        MAP       双列集合的操作流  
                        put   setProperty 
                        load  加载.property 文件
                        store  存储.property 文件      
                        等号 形式 ，键值对 ，一般作为配置文件  .property 文件
                        搜索  .property 文件 读取   需要关闭 IO 流 
                        
            apche-commons-io
            
            
        </pre>
        <div> 多线程</div>
        <pre>
            cpu 在 多个 进程中 高速切换， 表征是 同时运行 ，例如电脑 同时 执行很多个软件
            并行： 同一时刻，有多个指令 在多个 CPU 上 同时执行    三个人同时做三件事
            并发： 在同一时刻， 有多个指令 在单个CPU 上交替执行   一个人同时做三件事

            进程 线程
            进程： 正在 运行的 软件   ，独立 动态 并发
            线程： 单个进程中的单个顺序控制流 ，一条执行 路径
                   单线程： 一个进程  只有一条执行路径
                   多线程： 一个进程  有多条执行路径 
            多线程的 实现方案
             1.继承 Thread 类   2.实现 Runable 接口 ，调用 Thread 类  3. 利用 callable 和 future 接口实现  ，调用 Thread 类 
             继承 Thread 类   
             继承 线程类 重写 run 方法  创建一个线程对象 ，开启多个线程  t1.start()
             run 方法 没有开启线程 ，只是一般的方法 ， start 方法 开启线程
             实现 Runable 接口
             定义xx类 实现 Runable 接口  重写 run 方法  创建对象 xxa
             创建 Thread 类对象 把  xxa对象 作为构造方法的参数 启动线程
             类 可执行 run 方法      线程 可执行 start 方法   
             琼东一个线程 去 执行 可执行类的 run 方法 
             利用 callable 和 future 接口实现 
             定义一个类 实现 callable 接口  重写 call 方法  创建 aa 对象
             创建 future 接口 的 实现类 ff对象  把aa对象 作为 ff构造方法的参数  FutureTask
             创建 Thread 类对象 ，把 ff对象 作为 构造方法的参数  启动线程
             这种 方式 可以有返回值

            传递给 thread 的 参数 必须 实现了  runable 接口
            线程的  get 方法 可以 获取 线程执行完的 返回结果 
            线程 可以自定义  线程名字   setName  getName
            线程   可以  sleep  休眠  时常  

            线程调度
            计算机中的 CPU  在任意时刻只能执行一条机器命令。每个线程只有在 获得CPU 的使用权才能执行代码
            各个线程轮流获得CPU的 使用权 ，分别执行各自的任务 
            分时调度模型   ，抢占式调度模型 
            java 使用的是 抢占调度模式  ，每个线程可以 设置 优先级 (10-1)   setPriority
            
            后台线程  守护线程    普通线程执行完成后，守护线程不再执行
            setDaemon   设置为守护线程

            线程 安全问题
            三个窗口卖100张电影票 ， 相同票买了很多次 ，出现 负数票号
            执行每一行代码的时候 ，CPU  执行权力 都可能被别的线程 抢走。 
            多线程安全问题是因为多线程操作共享数据造成的
            加锁----------------加锁      
            十个人抢着上一个厕所，抢到的上厕所就立即锁门 ，免得别人进厕所  ，同步执行的代码块，只能单线程，别的只能等 
            多线程安全问题的解决方案基本思想： 让程序没有安全问题的环境
            解决方法：
                    把多条语句操作共享数据的代码给锁起来，让任意时刻只能有一个线程执行即可
                    java 提供了同步代码块的方式 来解决
            synchronized(任意锁对象（类的静态成员属性，全部类实例公用的）){多条线程操作的共享数据的代码块} 
                                  代码执行会去改变和还原这个锁对象， 锁对象 必须唯一
            synchronized 会自动上锁
                        好处： 线程安全
                        坏处： 线程很多的时候，每个线程都会去判断同步上的锁，很消耗资源，会降低程序的运行效率
            同步方法和同步代码块：
                    同步代码块可以锁住指定的代码，同步方法是锁住方法中的所有代码
                    同步代码块可以指定锁对象，同步方法不能指定锁对象
                    同步方法 的锁对象 是锁定的  this  对象本身
            Lock 锁接口       lock  unlock    自定义 锁定 和解锁方法 ， 方便
            死锁：是指两个或者多个线程相互之间持有对方所需要的 资源，相互等待，无法继续执行。 叉号
                 死锁是多个锁的 嵌套导致
             生产者，消费者     
            wait  notify  notifyAll    等待 通知 唤醒  ，使用 锁对象 去 等待和唤醒
                等待和唤醒机制，需要中间参照    厨师 ，餐桌，顾客
            阻塞队列    
            queue    BlockingQueue    一根管子  通道 ， 一头生产者一头消费者 ， 消息队列
            ArrayBlockingQueue   底层 数组 ，有界限
            LinkedBlockingQueue  底层 链表 ，无界限   最大为 int 的最大 值
            阻塞队列 设置最大值  while 循环 无线 添加  无线读取 ， 超限 报警
            线程池 volatile  threadpool  线程池    executor  
            线程 生命周期：创建 new： start---就绪 runnable： 有执行资格，无执行权限---运行：抢到执行权 run----结束 死亡 垃圾回收  
            线程  其他状态： 阻塞（有锁 lock blocked） ， 等待（wait） ，计时等待(sleep) ，唤起 就绪 notify  
            线程的每次创建，等待创建和销毁以及等待销毁 都消耗系统资源，因此 线程池 很重要， 就好比碗柜，吃饭拿碗，吃碗放回去
            线程池 执行原理 和 100人食堂吃饭，使用可循环的碗筷一样 ，只不过 这个放碗的碗柜 可以自己制造碗 
            Executors 可以创建 线程池  ，  
            ExecutorService 可以管理线程池 定量或者不限量   poll-1-thread-1  线程池子内的线程的 getName 返回的 样子
            Thread.currentThread().getName()
            
            

             


            
        </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
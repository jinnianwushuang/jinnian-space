## [TimeOut()](https://www.cnblogs.com/yelongsan/p/6296700.html)

setTimeout,前端工程师必定会打交道的一个函数.它看上去非常的简单,朴实.有着一个很不平凡的名字--定时器.让年少的我天真的以为自己可以操纵未来.却不知朴实之中隐含着惊天大密.我还记得我第一次用这个函数的时候,我天真的以为它就是js实现多线程的工具.当时用它实现了一个坦克大战的小游戏,玩儿不亦乐乎.可是随着在前端这条路上越走越远,对它理解开始产生了变化.它似乎开始蒙上了面纱,时常有一些奇怪的表现让我捉摸不透.终于,我的耐心耗尽,下定决心,要撕开它的面具,一探究竟.

要说setTimeout的渊源,就得从它的官方定义说起.w3c是这么定义的

***setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。\***

看到这样一个说明,我们明白了它就是一个定时器,我们设定的函数就是一个"闹钟",时间到了它就会去执行.然而聪明的你不禁有这样一个疑问,如果是settimeout(fn,0)呢?按照定义的说明,它是否会立马执行?实践是检验真理的唯一标准,让我们来看看下面的实验

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    
    <script>
        alert(1); 
        setTimeout("alert(2)", 0); 
        alert(3); 
    </script>
</body>
</html>
```

![复制代码](https://common.cnblogs.com/images/copycode.gif)

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

这是一个很简单的实验,如果settimeout(0)会立即执行,那么这里的执行结果就应该是1->2>3 . 然而实际的结果却是1->3->2. 这说明了settimeout(0)并不是立即执行.同时让我们对settimeout的行为感到很诡异.

 

## js引擎是单线程执行的

 

我们先把上面的问题放一放.从js语言的设计上来看看是否能找到蛛丝马迹.

我们发现js语言设计的一个很重要的点是,js是没有多线程的.js引擎的执行是单线程执行.这个特性曾经困扰我很久,我想不明白既然js是单线程的,那么是谁来为定时器计时的?是谁来发送ajax请求的?我陷入了一个盲区.即将js等同于浏览器.我们习惯了在浏览器里面执行代码,却忽略了浏览器本身.js引擎是单线程的,可是浏览器却可以是多线程的,js引擎只是浏览器的一个线程而已.定时器计时,网络请求,浏览器渲染等等.都是由不同的线程去完成的. 口说无凭,咱们依然看一个例子

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    
</body>
<script>
    var isEnd = true;
    window.setTimeout(function () {
        isEnd = false;//1s后，改变isEnd的值
    }, 1000);
    while (isEnd);
    alert('end');
</script>
</html>
```

![复制代码](https://common.cnblogs.com/images/copycode.gif)

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

isEnd默认是true的,在while中是死循环的.最后的alert是不会执行的. 我添加了一个定时器,1秒后将isEnd改为false. 如果说js引擎是多线程的,那么在1秒后,alert就会被执行.然而实际情况是,页面会永远死循环下去.alert并没有执行.这很好的证明了,settimeout并不能作为多线程使用.js引擎执行是单线程的.

 

## event loop

 

从上面的实验中,我们更加疑惑了,settimeout到底做了什么事情呢?

原来还是得从js语言的设计上寻找答案.

![img](https://images2015.cnblogs.com/blog/596947/201604/596947-20160424200428195-1086416163.jpg)

js引擎单线程执行的,它是基于事件驱动的语言.它的执行顺序是遵循一个叫做事件队列的机制.从图中我们可以看出,浏览器有各种各样的线程,比如事件触发器,网络请求,定时器等等.线程的联系都是基于事件的.js引擎处理到与其他线程相关的代码,就会分发给其他线程,他们处理完之后,需要js引擎计算时就是在事件队列里面添加一个任务. 这个过程中,js并不会阻塞代码等待其他线程执行完毕,而且其他线程执行完毕后添加事件任务告诉js引擎执行相关操作.这就是js的异步编程模型.

如此我们再回过头来看settimeout(0)就会恍然大悟.js代码执行到这里时,会开启一个定时器线程,然后继续执行下面的代码.该线程会在指定时间后往事件队列里面插入一个任务.由此可知settimeout(0)里面的操作会放在所有主线程任务之后. 这也就解释了为什么第一个实验结果是1->3-2 .

由此可见官方对于settimeout的定义是有迷惑性的.应该给一个新的定义:

***在指定时间内, 将任务放入事件队列,等待js引擎空闲后被执行.***



## js引擎与GUI引擎是互斥的

 

谈到这里,就不得不说浏览器的另外一个引擎---GUI渲染引擎. 在js中渲染操作也是异步的.比如dom操作的代码会在事件队列中生成一个任务,js执行到这个任务时就会去调用GUI引擎渲染.

js语言设定js引擎与GUI引擎是互斥的,也就是说GUI引擎在渲染时会阻塞js引擎计算.原因很简单,如果在GUI渲染的时候,js改变了dom,那么就会造成渲染不同步. 我们需要深刻理解js引擎与GUI引擎的关系,因为这与我们平时开发息息相关,我们时长会遇到一些很奇葩的渲染问题.看这个例子

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <table border=1>
        <tr><td><button id='do'>Do long calc - bad status!</button></td>
            <td><div id='status'>Not Calculating yet.</div></td>
        </tr>
        <tr><td><button id='do_ok'>Do long calc - good status!</button></td>
            <td><div id='status_ok'>Not Calculating yet.</div></td>
        </tr>
    </table>    
<script>

function long_running(status_div) {

    var result = 0;
    for (var i = 0; i < 1000; i++) {
        for (var j = 0; j < 700; j++) {
            for (var k = 0; k < 300; k++) {
                result = result + i + j + k;
            }
        }
    }
    document.querySelector(status_div).innerHTML = 'calclation done' ;
}

document.querySelector('#do').onclick = function () {
    document.querySelector('#status').innerHTML = 'calculating....';
    long_running('#status');
};

document.querySelector('#do_ok').onclick = function () {
    document.querySelector('#status_ok').innerHTML = 'calculating....';
    window.setTimeout(function (){ long_running('#status_ok') }, 0);
};

</script>
</body>
</html>
```

![复制代码](https://common.cnblogs.com/images/copycode.gif)

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 我们希望能看到计算的每一个过程,我们在程序开始,计算,结束时,都执行了一个dom操作,插入了代表当前状态的字符串,Not Calculating yet.和calculating....和calclation done.计算中是一个耗时的3重for循环. 在没有使用settimeout的时候,执行结果是由Not Calculating yet 直接跳到了calclation done.这显然不是我们希望的.而造成这样结果的原因正是js的事件循环单线程机制.dom操作是异步的,for循环计算是同步的.异步操作都会被延迟到同步计算之后执行.也就是代码的执行顺序变了.calculating....和calclation done的dom操作都被放到事件队列后面而且紧跟在一起,造成了丢帧.无法实时的反应.这个例子也告诉了我们,在需要实时反馈的操作,如渲染等,和其他相关同步的代码,要么一起同步,要么一起异步才能保证代码的执行顺序.在js中,就只能让同步代码也异步.即给for计算加上settimeout.

 

## settimeout(0)的作用

 

不同浏览器的实现情况不同,HTML5定义的最小时间间隔是4毫秒. 使用settimeout(0)会使用浏览器支持的最小时间间隔.所以当我们需要把一些操作放到下一帧处理的时候,我们通常使用settimeout(0)来hack.

 

## requestAnimationFrame

 

这个函数与settimeout很相似,但它是专门为动画而生的.settimeout经常被用来做动画.我们知道动画达到60帧,用户就无法感知画面间隔.每一帧大约16毫秒.而requestAnimationFrame的帧率刚好是这个频率.除此之外相比于settimeout,还有以下的一些优点:

 

- requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧,每帧大约16毫秒.
- 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。
- 但它优于setTimeout/setInterval的地方在于它是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销。

 

 

## 总结:

 

1. 浏览器的内核是多线程的，它们在内核制控下相互配合以保持同步，一个浏览器至少实现三个常驻线程：javascript引擎线程，GUI渲染线程，浏览器事件触发线程。
2. javascript引擎是基于事件驱动单线程执行的.JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序。
3. 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行。但需要注意 GUI渲染线程与JS引擎是互斥的，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。
4. 当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。这些事件可来自JavaScript引擎当前执行的代码块如setTimeOut、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，但由于JS的单线程关系所有这些事件都得排队等待JS引擎处理。
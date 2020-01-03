<template>
  <div>
    <article class="post">
      <header class="post-header">
        <h4 class="post-title">
          什么是Event Loop？
        </h4>
      </header>
      <div class="post-body">

        <h4 >
    
          为什么JavaScript是单线程？
        </h4>
        <p>
          JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。
        </p>
        <p>
          JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？
        </p>
        <p>
          所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。
        </p>
        <p>
          为了利用多核CPU的计算能力，HTML5提出Web
          Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。
        </p>
        <h4 id="任务队列">
          <a href="#任务队列" class="headerlink" title="任务队列"></a>任务队列
        </h4>
        <p>
          单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。
        </p>
        <p>
          如果排队是因为计算量大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行。
        </p>
        <p>
          JavaScript语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去。
        </p>
        <p>
          于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入”任务队列”（task
          queue）的任务，只有”任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。
        </p>
        <p>
          具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）
        </p>
        <ol>
          <li>
            所有同步任务都在主线程上执行，形成一个执行栈（execution context
            stack）。
          </li>
          <li>
            主线程之外，还存在一个”任务队列”（task
            queue）。只要异步任务有了运行结果，就在”任务队列”之中放置一个事件。
          </li>
          <li>
            一旦”执行栈”中的所有同步任务执行完毕，系统就会读取”任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
          </li>
          <li>主线程不断重复上面的第三步。</li>
        </ol>
        <p>下图就是主线程和任务队列的示意图。</p>
        <p>任务队列</p>
        <p>
          只要主线程空了，就会去读取”任务队列”，这就是JavaScript的运行机制。
        </p>
        <p>这个过程会不断重复。</p>
        <h4 id="事件和回调函数">
          <a
            href="#事件和回调函数"
            class="headerlink"
            title="事件和回调函数"
          ></a
          >事件和回调函数
        </h4>
        <p>
          “任务队列”是一个事件的队列（也可以理解成消息的队列），IO设备完成一项任务，就在”任务队列”中添加一个事件，表示相关的异步任务可以进入”执行栈”了。主线程读取”任务队列”，就是读取里面有哪些事件。
        </p>
        <p>
          “任务队列”中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入”任务队列”，等待主线程读取。
        </p>
        <p>
          所谓”回调函数”（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。
        </p>
        <p>
          “任务队列”是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，”任务队列”上第一位的事件就自动进入主线程。但是，由于存在后文提到的”定时器”功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。
        </p>
        <h4 id="Event-Loop">
          <a href="#Event-Loop" class="headerlink" title="Event Loop"></a>Event
          Loop
        </h4>
        <p>
          主线程从”任务队列”中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event
          Loop（事件循环）。
        </p>
        <p>
          为了更好地理解Event Loop，请看下图（转引自Philip Roberts的演讲《Help,
          I’m stuck in an event-loop》）。
        </p>
        <p>
          上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在”任务队列”中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取”任务队列”，依次执行那些事件所对应的回调函数。
        </p>
        <p>
          执行栈中的代码（同步任务），总是在读取”任务队列”（异步任务）之前执行。请看下面这个例子。
        </p>
        <pre><code>var req = new XMLHttpRequest();
req.open('GET', url);    
req.onload = function (){};    
req.onerror = function (){};    
req.send();
</code></pre>
        <p>
          上面代码中的req.send方法是Ajax操作向服务器发送数据，它是一个异步任务，意味着只有当前脚本的所有代码执行完，系统才会去读取”任务队列”。所以，它与下面的写法等价。
        </p>
        <pre><code>var req = new XMLHttpRequest();
req.open('GET', url);
req.send();
req.onload = function (){};    
req.onerror = function (){};   
</code></pre>
        <p>
          也就是说，指定回调函数的部分（onload和onerror），在send()方法的前面或后面无关紧要，因为它们属于执行栈的一部分，系统总是执行完它们，才会去读取”任务队列”。
        </p>
        <h4 id="定时器">
          <a href="#定时器" class="headerlink" title="定时器"></a>定时器
        </h4>
        <p>
          除了放置异步任务的事件，”任务队列”还可以放置定时事件，即指定某些代码在多少时间之后执行。这叫做”定时器”（timer）功能，也就是定时执行的代码。
        </p>
        <p>
          定时器功能主要由setTimeout()和setInterval()这两个函数来完成，它们的内部运行机制完全一样，区别在于前者指定的代码是一次性执行，后者则为反复执行。以下主要讨论setTimeout()。
        </p>
        <p>
          setTimeout()接受两个参数，第一个是回调函数，第二个是推迟执行的毫秒数。
        </p>
        <pre><code>console.log(1);
setTimeout(function(){console.log(2);},1000);
console.log(3);
</code></pre>
        <p>
          上面代码的执行结果是1，3，2，因为setTimeout()将第二行推迟到1000毫秒之后执行。
        </p>
        <p>
          如果将setTimeout()的第二个参数设为0，就表示当前代码执行完（执行栈清空）以后，立即执行（0毫秒间隔）指定的回调函数。
        </p>
        <pre><code>setTimeout(function(){console.log(1);}, 0);
console.log(2);
</code></pre>
        <p>
          上面代码的执行结果总是2，1，因为只有在执行完第二行以后，系统才会去执行”任务队列”中的回调函数。
        </p>
        <p>
          总之，setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在”任务队列”的尾部添加一个事件，因此要等到同步任务和”任务队列”现有的事件都处理完，才会得到执行。<br />HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加。在此之前，老版本的浏览器都将最短间隔设为10毫秒。另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每16毫秒执行一次。这时使用requestAnimationFrame()的效果要好于setTimeout()。
        </p>
        <p>
          需要注意的是，setTimeout()只是将事件插入了”任务队列”，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在setTimeout()指定的时间执行。
        </p>
        <h4 id="Node-js的Event-Loop">
          <a
            href="#Node-js的Event-Loop"
            class="headerlink"
            title="Node.js的Event Loop"
          ></a
          >Node.js的Event Loop
        </h4>
        <p>
          Node.js也是单线程的Event Loop，但是它的运行机制不同于浏览器环境。<br />请看下面的示意图（作者@BusyRich）。
        </p>
        <p>Node.js</p>
        <p>根据上图，Node.js的运行机制如下。</p>
        <ol>
          <li>V8引擎解析JavaScript脚本。</li>
          <li>解析后的代码，调用Node API。</li>
          <li>
            libuv库负责Node
            API的执行。它将不同的任务分配给不同的线程，形成一个Event
            Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。
          </li>
          <li>V8引擎再将结果返回给用户。</li>
        </ol>
        <p>
          除了setTimeout和setInterval这两个方法，Node.js还提供了另外两个与”任务队列”有关的方法：process.nextTick和setImmediate。它们可以帮助我们加深对”任务队列”的理解。
        </p>
        <p>
          process.nextTick方法可以在当前”执行栈”的尾部—-下一次Event
          Loop（主线程读取”任务队列”）之前—-触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。setImmediate方法则是在当前”任务队列”的尾部添加事件，也就是说，它指定的任务总是在下一次Event
          Loop时执行，这与setTimeout(fn, 0)很像。请看下面的例子（via
          StackOverflow）。
        </p>
        <pre><code>process.nextTick(function A() {
    console.log(1);
    process.nextTick(function B(){console.log(2);});
});

setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0)
// 1
// 2
// TIMEOUT FIRED
</code></pre>
        <p>
          上面代码中，由于process.nextTick方法指定的回调函数，总是在当前”执行栈”的尾部触发，所以不仅函数A比setTimeout指定的回调函数timeout先执行，而且函数B也比timeout先执行。这说明，如果有多个process.nextTick语句（不管它们是否嵌套），将全部在当前”执行栈”执行。
        </p>
        <p>现在，再看setImmediate。</p>
        <pre><code>setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
});

setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0);
</code></pre>
        <p>
          上面代码中，setImmediate与setTimeout(fn,0)各自添加了一个回调函数A和timeout，都是在下一次Event
          Loop触发。那么，哪个回调函数先执行呢？答案是不确定。运行结果可能是1–TIMEOUT
          FIRED–2，也可能是TIMEOUT FIRED–1–2。
        </p>
        <p>
          令人困惑的是，Node.js文档中称，setImmediate指定的回调函数，总是排在setTimeout前面。实际上，这种情况只发生在递归调用的时候。
        </p>
        <pre><code>setImmediate(function (){
    setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
});

setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0);
});
// 1
// TIMEOUT FIRED
// 2
</code></pre>
        <p>
          上面代码中，setImmediate和setTimeout被封装在一个setImmediate里面，它的运行结果总是1–TIMEOUT
          FIRED–2，这时函数A一定在timeout前面触发。至于2排在TIMEOUT
          FIRED的后面（即函数B在timeout后面触发），是因为setImmediate总是将事件注册到下一轮Event
          Loop，所以函数A和timeout是在同一轮Loop执行，而函数B在下一轮Loop执行。
        </p>
        <p>
          我们由此得到了process.nextTick和setImmediate的一个重要区别：多个process.nextTick语句总是在当前”执行栈”一次执行完，多个setImmediate可能则需要多次loop才能执行完。事实上，这正是Node.js
          10.0版添加setImmediate方法的原因，否则像下面这样的递归调用process.nextTick，将会没完没了，主线程根本不会去读取”事件队列”！
        </p>
        <pre><code>process.nextTick(function foo() {
    process.nextTick(foo);
});
</code></pre>
        <p>
          事实上，现在要是你写出递归的process.nextTick，Node.js会抛出一个警告，要求你改成setImmediate。
        </p>
        <p>
          另外，由于process.nextTick指定的回调函数是在本次”事件循环”触发，而setImmediate指定的是在下次”事件循环”触发，所以很显然，前者总是比后者发生得早，而且执行效率也高（因为不用检查”任务队列”）。
        </p>
      </div>
      <footer class="post-footer">
        <div class="post-tags"></div>
        <div class="post-nav">
          <div class="post-nav-next post-nav-item">
            <i class="fa fa-chevron-left"></i>
            <a
              href="https://www.dazhuanlan.com/2019/11/06/5dc2c545b1c36/"
              rel="next"
              >笔记23</a
            >
          </div>
          <div class="post-nav-prev post-nav-item">
            <a
              href="https://www.dazhuanlan.com/2019/11/06/5dc2c4f9a8f83/"
              rel="prev"
              >Hexo Build</a
            >
            <i class="fa fa-chevron-right"></i>
          </div>
        </div>
      </footer>
      <div class="crp_related ">
        <h4>相关文章</h4>
        <ul>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/04/98fb83cd7703/"
              target="_blank"
              ><span class="crp_title"
                >[Javascript] for loop vs for-in loop 与性能改善</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/30/5d914e8611fc2/"
              target="_blank"
              ><span class="crp_title"
                >for loop vs for-in loop 與效能改善</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/02/ed62ffaa05bc/"
              target="_blank"
              ><span class="crp_title">[ASP.NET] for loop 与 foreach</span></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/04/2cdae5cc2626/"
              target="_blank"
              ><span class="crp_title"
                >Self referencing loop detected for property</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/04/1c1dc87e826f/"
              target="_blank"
              ><span class="crp_title">[cmd命令学习心得]循环(for loop)</span></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/04/da5085d3ca0f/"
              target="_blank"
              ><span class="crp_title"
                >Flex Multi-URLLoader with For Loop</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/05/ca322d7f295d/"
              target="_blank"
              ><span class="crp_title">[MSSQL][PLSQL]FOR LOOP</span></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/09/12/cdaa76e25a15/"
              target="_blank"
              ><span class="crp_title"
                >[Sass][Visual Studio] SASS 进阶使用 (Media, color…</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/07/03/vb6vbavb-net-%e5%86%8d%e8%b0%88-timer-%e6%8e%a7%e4%bb%b6-%e6%97%b6%e9%97%b4%e5%88%86%e8%be%a8%e7%8e%87%e8%bf%87%e4%bd%8e%e7%9a%84%e8%a7%a3%e5%86%b3%e6%96%b9%e6%b3%95%ef%bc%88%e4%ba%8c%ef%bc%89/"
              target="_blank"
              ><span class="crp_title"
                >[VB6][VBA][VB.net] 再谈 Timer 控件 -
                时间分辨率过低的解决方法（二）用…</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/07/03/teaching-silverlight-30%e7%a7%92%e5%bf%ab%e9%80%9f%e5%bb%ba%e7%ab%8b%e6%b8%b8%e6%88%8f%e5%be%aa%e7%8e%af-game-loop/"
              target="_blank"
              ><span class="crp_title"
                >[Teaching] [Silverlight] 30秒快速建立游戏循环 (Game Loop)</span
              ></a
            >
          </li>
        </ul>
        <div class="crp_clear"></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

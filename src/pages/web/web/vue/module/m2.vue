<template>
    <div>
  <h2>【Vue】双向数据绑定原理</h2>
<h3>单向绑定与双向绑定</h3>
<ul>
<li>单向绑定非常简单，就是把Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新。</li>
<li>如果用户更新了View，Model的数据也自动被更新了，这种情况就是双向绑定</li>
</ul>
<h3>几种实现双向绑定的做法</h3>
<ul>
<li><p>发布者-订阅者模式（backbone.js）</p>
</li>
<li><p>脏值检查（angular.js）</p>
<ul>
<li><p>通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下</p>
<ul>
<li>DOM事件，譬如用户输入文本，点击按钮等。( ng-click )</li>
<li>XHR响应事件 ( $http )</li>
<li>浏览器Location变更事件 ( $location )</li>
<li>Timer事件( $timeout , $interval )</li>
<li>执行 $digest() 或 $apply()</li>
</ul>
</li>
</ul>
</li>
<li><p>数据劫持（vue.js）</p>
<ul>
<li>vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。</li>
</ul>
</li>
</ul>
<h3>Vue双向数据绑定实现思路</h3>
<ul>
<li><p>1、实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者 </p>
</li>
<li><p>2、实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数 </p>
</li>
<li><p>3、实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图 </p>
</li>
<li><p>4、mvvm入口函数，整合以上三者</p>
</li>
<li><p>另一种解释</p>
<ul>
<li>首先，需要利用Object.defineProperty，将要观察的对象，转化成getter/setter，以便拦截对象赋值与取值操作，称之为Observer；</li>
<li>需要将DOM解析，提取其中的指令与占位符，并赋与不同的操作，称之为Compiler；</li>
<li>需要将Compile的解析结果，与Observer所观察的对象连接起来，建立关系，在Observer观察到对象数据变化时，接收通知，同时更新DOM，称之为Watcher；</li>
<li>最后，需要一个公共入口对象，接收配置，协调上述三者，称为Vue;</li>
</ul>
</li>
<li><p>条件</p>
<ul>
<li>把一个普通对象传给 Vue 实例作为它的 data 选项，Vue.js 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。这是 ES5 特性，不能打补丁实现，这便是为什么 Vue.js 不支持 IE8 及更低版本。</li>
</ul>
</li>
</ul>
<h3>具体实现</h3>
<ul>
<li><p>（1）实现Observer</p>
<p>利用Obeject.defineProperty()来监听属性变动 那么将需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上	setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化。</p>
<ul>
<li>（1）将需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter，这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化。</li>
<li>（2）监听到变化之后就是怎么通知订阅者了，所以接下来我们需要实现一个消息订阅器，很简单，维护一个数组，用来收集订阅者，数据变动触发notify，再调用订阅者的update方法，</li>
<li>（3）那么问题来了，谁是订阅者？怎么往订阅器添加订阅者？ 没错，上面的思路整理中我们已经明确订阅者应该是Watcher, 而且var dep = new Dep();是在 defineReactive方法内部定义的，所以想通过dep添加订阅者，就必须要在闭包内操作，所以我们可以在getter里面动手脚</li>
</ul>
</li>
<li><p>（2）实现Compile</p>
<p>compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图，</p>
<p>&nbsp;</p>
<ul>
<li><p>思路</p>
<ul>
<li>compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图，</li>
</ul>
</li>
<li><p>（1）因为遍历解析的过程有多次操作dom节点，为提高性能和效率，会先将跟节点el转换成文档碎片fragment进行解析编译操作，解析完成，再将fragment添加回原来的真实dom节点中</p>
</li>
<li><p>（2）compileElement方法将遍历所有节点及其子节点，进行扫描解析编译，调用对应的指令渲染函数进行数据渲染，并调用对应的指令更新函数进行绑定</p>
</li>
<li><p>这里通过递归遍历保证了每个节点及子节点都会解析编译到，包括了{{}}表达式声明的文本节点。指令的声明规定是通过特定前缀的节点属性来标记，如&lt;span v-text=&quot;content&quot; other-attr中v-text便是指令，而other-attr不是指令，只是普通的属性。 监听数据、绑定更新函数的处理是在compileUtil.bind()这个方法中，通过new Watcher()添加回调来接收数据变化的通知</p>
</li>
</ul>
</li>
<li><p>（3）实现Watcher</p>
<ul>
<li><p>Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是</p>
<ul>
<li>1、在自身实例化时往属性订阅器(dep)里面添加自己 </li>
<li>2、自身必须有一个update()方法 </li>
<li>3、待属性变动dep.notify()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。 </li>
</ul>
</li>
<li><p>实例化Watcher的时候，调用get()方法，通过Dep.target = watcherInstance标记订阅者是当前watcher实例，强行触发属性定义的getter方法，getter方法执行的时候，就会在属性的订阅器dep添加当前watcher实例，从而在属性值有变化的时候，watcherInstance就能收到更新通知。</p>
</li>
</ul>
</li>
<li><p>（4）实现MVVM</p>
<ul>
<li>MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -&gt; 视图更新；视图交互变化(input) -&gt; 数据model变更的双向绑定效果。</li>
<li>一个简单的MVVM构造器是这样子</li>
</ul>
</li>
</ul>
<h3>用Object.defineProperty()简易实现一个双向绑定</h3>
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="scss" scoped>
</style>
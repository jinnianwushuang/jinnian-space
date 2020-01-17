<template>
    <div>

<h3>nextTick</h3>
<ul>
<li><p>（1）为什么要有nextTick？</p>
<ul>
<li><p>现象</p>
<ul>
<li>这段脚本执行我们猜测会依次打印：1、2、3。但是实际效果中，只会输出一次：3。</li>

</ul>
</li>
<li><p>原因</p>
<ul>
<li>现在有这样的一种情况，mounted的时候test的值会被++循环执行1000次。 每次++时，都会根据响应式触发setter-&gt;Dep-&gt;Watcher-&gt;update-&gt;run。 如果这时候没有异步更新视图，那么每次++都会直接操作DOM更新视图，这是非常消耗性能的。</li>
<li>所以Vue实现了一个queue队列，在下一个Tick（或者是当前Tick的微任务阶段）的时候会统一执行queue中Watcher的run。同时，拥有相同id的Watcher不会被重复加入到该queue中去，所以不会执行1000次Watcher的run。最终更新视图只会直接将test对应的DOM的0变成1000。 保证更新视图操作DOM的动作是在当前栈执行完以后下一个Tick（或者是当前Tick的微任务阶段）的时候调用，大大优化了性能。</li>

</ul>
</li>

</ul>
</li>
<li><p>（2）nextTick用法示例</p>
<ul>
<li>模板</li>
<li>Vue实例</li>
<li>结果</li>
<li>msg1和msg3显示的内容还是变换之前的，而msg2显示的内容是变换之后的。其根本原因是因为Vue中DOM更新是异步的</li>

</ul>
</li>
<li><p>（3）nextTick的应用场景</p>
<ul>
<li><p>1.在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中</p>
<ul>
<li>在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。</li>

</ul>
</li>
<li><p>2.在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。</p>
</li>

</ul>
</li>
<li><p>（4）nextTick的版本区别</p>
<ul>
<li>在 Vue 2.4 之前的版本，nextTick 几乎都是基于 micro task 实现的，但由于 micro task 的执行优先级非常高，在某些场景下它甚至要比事件冒泡还要快，就会导致一些诡异的问题，如 issue #4521、#6690、#6566；但是如果全部都改成 macro task，对一些有重绘和动画的场景也会有性能影响，如 issue #6813。所以最终 nextTick 采取的策略是默认走 micro task，对于一些 DOM 交互事件，如 v-on 绑定的事件回调函数的处理，会强制走 macro task。</li>

</ul>
</li>

</ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
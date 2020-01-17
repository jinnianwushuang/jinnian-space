<template>
    <div>
    <h2>【Vue】对于Virtual Dom的理解</h2>
<h3>虚拟DOM与真实DOM的区别</h3>
<ul>
<li><p>1.虚拟DOM不会进行排版与重绘操作</p>
</li>
<li><p>2.虚拟DOM进行频繁修改，然后一次性比较并修改真实DOM中需要改的部分（注意！），最后并在真实DOM中进行排版与重绘，减少过多DOM节点排版与重绘损耗</p>
</li>
<li><p>3.真实DOM频繁排版与重绘的效率是相当低的</p>
</li>
<li><p>4.虚拟DOM有效降低大面积（真实DOM节点）的重绘与排版，因为最终与真实DOM比较差异，可以只渲染局部（同2）</p>
</li>
<li><p>损耗计算</p>
<ul>
<li><p>使用虚拟DOM的损耗计算：</p>
<ul>
<li>总损耗 = 虚拟DOM增删改 + （与Diff算法效率有关）真实DOM差异增删改 + （较少的节点）排版与重绘</li>
</ul>
</li>
<li><p>直接使用真实DOM的损耗计算：</p>
<ul>
<li>总损耗 = 真实DOM完全增删改 + （可能较多的节点）排版与重绘</li>
</ul>
</li>
</ul>
</li>
<li><p>总之，一切为了减弱频繁的大面积重绘引发的性能问题，不同框架不一定需要虚拟DOM，关键看框架是否频繁会引发大面积的DOM操作</p>
</li>
</ul>
<h3>Virtual DOM算法</h3>
<ul>
<li><p>初步了解</p>
<ul>
<li><p>（1）真实DOM是很慢的</p>
<ul>
<li>如果我们把一个简单的div元素的属性都打印出来，你会看到：</li>
<li>而这仅仅是第一层。真正的 DOM 元素非常庞大，这是因为标准就是这么设计的。而且操作它们的时候你要小心翼翼，轻微的触碰可能就会导致页面重排，这可是杀死性能的罪魁祸首。</li>
</ul>
</li>
<li><p>（2）相对于 DOM 对象，原生的 JavaScript 对象处理起来更快，而且更简单。DOM 树上的结构、属性信息我们都可以很容易地用 JavaScript 对象表示出来：</p>
</li>
</ul>
</li>
<li><p>Virtual DOM 算法几个步骤</p>
<ul>
<li><p>（1）用 JavaScript 对象结构表示 DOM 树的结构；然后用这个对象树构建一个真正的 DOM 树，插到文档当中</p>
</li>
<li><p>（2）当状态变更的时候，重新构造一棵新的对象树。然后用新的对象树和旧的对象树进行比较，记录两棵对象树差异</p>
</li>
<li><p>（3）把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了</p>
</li>
<li><p>总结理解</p>
<ul>
<li>Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。可以类比 CPU 和硬盘，既然硬盘这么慢，我们就在它们之间加个缓存：既然 DOM 这么慢，我们就在它们 JS 和 DOM 之间加个缓存。CPU（JS）只操作内存（Virtual DOM），最后的时候再把变更写入硬盘（DOM）。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>【diff算法】Virtual Dom以及Diff算法</h3>
<ul>
<li><p>（1）创建真实Dom的代价很大</p>
<ul>
<li>使用document.CreateElement 和 document.CreateTextNode创建的就是真实节点。</li>
<li>我们可以做个试验。打印出一个空元素的第一层属性，可以看到标准让元素实现的东西太多了。如果每次都重新生成新的元素，对性能是巨大的浪费。</li>
</ul>
</li>
<li><p>（2）Virtual Dom的解决思路</p>
<ul>
<li><p>通俗易懂的来说就是用一个简单的对象去代替复杂的dom对象。</p>
</li>
<li><p>举例</p>
<ul>
<li>我们在body里插入一个class为a的div。</li>
<li>对于这个div我们可以用一个简单的对象mydivVirtual代表它，它存储了对应dom的一些重要参数，在改变dom之前，会先比较相应虚拟dom的数据，如果需要改变，才会将改变应用到真实dom上。</li>
</ul>
</li>
</ul>
</li>
<li><p>（3）为什么不直接修改Dom而需要加一层Virtual Dom呢？</p>
<ul>
<li>很多时候手工优化dom确实会比virtual dom效率高，对于比较简单的dom结构用手工优化没有问题，但当页面结构很庞大，结构很复杂时，手工优化会花去大量时间，而且可维护性也不高，不能保证每个人都有手工优化的能力。至此，virtual dom的解决方案应运而生，</li>
<li>virtual dom很多时候都不是最优的操作，但它具有普适性，在效率、可维护性之间达平衡。</li>
<li>virtual dom 另一个重大意义就是提供一个中间层，js去写ui，ios安卓之类的负责渲染，就像reactNative一样。</li>
</ul>
</li>
<li><p>（4）分析Diff</p>
<ul>
<li><p>Vue和React的虚拟DOM的Diff算法大致相同，其核心是基于两个简单的假设：</p>
<ul>
<li><ol start='' >
<li>两个相同的组件产生类似的DOM结构，不同的组件产生不同的DOM结构。</li>
</ol>
</li>
<li><ol start='2' >
<li>同一层级的一组节点，他们可以通过唯一的id进行区分。</li>
</ol>
</li>
</ul>
</li>
<li><p>Diff算法特点：当页面的数据发生变化时，Diff算法只会比较同一层级的节点：</p>
<ul>
<li>1.如果节点类型不同，直接干掉前面的节点，再创建并插入新的节点，不会再比较这个节点以后的子节点了。</li>
<li>2.如果节点类型相同，则会重新设置该节点的属性，从而实现节点的更新。</li>
</ul>
</li>
</ul>
</li>
<li><p>（5）传统Diff算法与Vue中的Diff算法</p>
<ul>
<li><p>传统的Diff算法</p>
<ul>
<li>传统算法就是对每个节点一一对比，循环遍历所有的子节点，然后判断子节点的更新状态，分别为remove、add、change。如果before的子节点仍有子节点依旧顺次执行。</li>
</ul>
</li>
<li><p>Vue中的Diff算法</p>
<ul>
<li>传统 diff 算法的复杂度为 O(n^3)，单纯从demo看，复杂度不到n3，但实际上。React 通过制定大胆的策略，将 O(n^3) 复杂度的问题转换成 O(n) 复杂度的问题。</li>
</ul>
</li>
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
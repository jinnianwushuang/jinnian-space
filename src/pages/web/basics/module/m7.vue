<template>
    <div>
     <h2>重排和重绘</h2>
<h3>（1）写在前面：</h3>
<ul>
<li>浏览器使用流式布局模型 (Flow Based Layout)。</li>
<li>浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree。</li>
<li>有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。</li>
<li>由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一。</li>
<li>重排（CPU）必将引起重绘（GPU），重绘不一定会引起重排。</li>

</ul>
<h3>（2）重排（reflow）</h3>
<ul>
<li><p>定义</p>
<ul>
<li>当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为重排。</li>

</ul>
</li>
<li><p>会导致重排的操作：</p>
<ul>
<li>页面首次渲染</li>
<li>浏览器窗口大小发生改变</li>
<li>元素尺寸或位置发生改变</li>
<li>元素内容变化（文字数量或图片大小等等）</li>
<li>元素字体大小变化</li>
<li>添加或者删除可见的DOM元素</li>
<li>激活CSS伪类（例如：:hover）</li>
<li>查询某些属性或调用某些方法</li>

</ul>
</li>
<li><p>一些常用且会导致重排的属性和方法：</p>
<ul>
<li>clientWidth、clientHeight、clientTop、clientLeft</li>
<li>offsetWidth、offsetHeight、offsetTop、offsetLeft</li>
<li>scrollWidth、scrollHeight、scrollTop、scrollLeft</li>
<li>scrollIntoView()、scrollIntoViewIfNeeded()</li>
<li>getComputedStyle()</li>
<li>getBoundingClientRect()</li>
<li>scrollTo()</li>

</ul>
</li>

</ul>
<h3>（3）重绘 (Repaint)</h3>
<ul>
<li>当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。</li>

</ul>
<h3>（4）什么情况会触发重排和重绘？</h3>
<ul>
<li>添加、删除、更新 DOM 节点</li>
<li>通过 display: none 隐藏一个 DOM 节点-触发重排和重绘</li>
<li>通过 visibility: hidden 隐藏一个 DOM 节点-只触发重绘，因为没有几何变化</li>
<li>移动或者给页面中的 DOM 节点添加动画</li>
<li>添加一个样式表，调整样式属性</li>
<li>用户行为，例如调整窗口大小，改变字号，或者滚动。</li>

</ul>
<h3>（5）性能影响</h3>
<ul>
<li><p>重排比重绘的代价要更高。</p>
</li>
<li><p>现代浏览器对频繁的重排和重绘进行了优化</p>
<ul>
<li>有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。</li>
<li>浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。</li>

</ul>
</li>
<li><p>获取布局的操作，会导致队列刷新，浏览器的优化效果也就没有了。要避免在布局信息改变时，获取下列属性</p>
<ul>
<li>clientWidth、clientHeight、clientTop、clientLeft</li>
<li>offsetWidth、offsetHeight、offsetTop、offsetLeft</li>
<li>scrollWidth、scrollHeight、scrollTop、scrollLeft</li>
<li>width、height</li>
<li>getComputedStyle()</li>
<li>getBoundingClientRect()</li>

</ul>
</li>

</ul>
<h3>（6）如何避免</h3>
<ul>
<li><p>CSS</p>
<ul>
<li>（1）避免使用table布局。</li>
<li>（2）尽可能在DOM树的最末端改变class。</li>
<li>（3）避免设置多层内联样式。</li>
<li>（4）将动画效果应用到position属性为absolute或fixed的元素上。</li>
<li>（5）避免使用CSS表达式（例如：calc()）。</li>

</ul>
</li>
<li><p>JavaScript</p>
<ul>
<li><ol start='' >
<li>合并多次的DOM操作为单次的DOM操作</li>

</ol>
<ul>
<li><p>（1）避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。</p>
<ul>
<li>方案2比方案1稍微有一些性能上的损耗，因为它需要查询CSS类。但方案2的维护性最好，</li>
<li>类似的操作还有通过innerHTML接口修改DOM元素的内容。不要直接通过此接口来拼接HTML代码，而是以字符串方式拼接好代码后，一次性赋值给DOM元素的innerHTML接口。</li>

</ul>
</li>

</ul>
</li>
<li><ol start='2' >
<li>把DOM元素离线或隐藏后修改</li>

</ol>
<p>把DOM元素从页面流中脱离或隐藏，这样处理后，只会在DOM元素脱离和添加时，或者是隐藏和显示时才会造成页面的重绘或回流，对脱离了页面布局流的DOM元素操作就不会导致页面的性能问题。这种方式适合那些需要大批量修改DOM元素的情况。具体的方式主要有三种：</p>
<ul>
<li><p>（2）避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。</p>
<ul>
<li>文档片段是一个轻量级的document对象，并不会和特定的页面关联。通过在文档片段上进行DOM操作，可以降低DOM操作对页面性能的影响，这 种方式是创建一个文档片段，并在此片段上进行必要的DOM操作，操作完成后将它附加在页面中。对页面性能的影响只存在于最后把文档片段附加到页面的这一步 操作上。</li>

</ul>
</li>
<li><p>（3）也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。</p>
<ul>
<li>这种方式是通过隐藏页面的DOM元素，达到在页面中移除元素的效果，经过大量的DOM操作后恢复元素原来的display样式。对于这类会引起页面重绘或回流的操作，就只有隐藏和显示DOM元素这两个步骤了。</li>

</ul>
</li>
<li><p>（4）避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。</p>
<ul>
<li>这种方式是把页面上的DOM元素克隆一份到内存中，然后再在内存中操作克隆的元素，操作完成后使用此克隆元素替换页面中原来的DOM元素。这样一来，影响性能的操作就只是最后替换元素的这一步操作了，在内存中操作克隆元素不会引起页面上的性能损耗。</li>

</ul>
</li>

</ul>
</li>
<li><ol start='3' >
<li>设置具有动画效果的DOM元素的position属性为fixed或absolute</li>

</ol>
<ul>
<li><p>（5）对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。</p>
<ul>
<li>把页面中具有动画效果的元素设置为绝对定位，使得元素脱离页面布局流，从而避免了页面频繁的回流，只涉及动画元素自身的回流了。这种做法可以提高动 画效果的展示性能。如果把动画元素设置为绝对定位并不符合设计的要求，则可以在动画开始时将其设置为绝对定位，等动画结束后恢复原始的定位设置。在很多的 网站中，页面的顶部会有大幅的广告展示，一般会动画展开和折叠显示。如果不做性能的优化，这个效果的性能损耗是很明显的。使用这里提到的优化方案，则可以 提高性能。</li>

</ul>
</li>

</ul>
</li>
<li><ol start='4' >
<li>谨慎取得DOM元素的布局信息</li>

</ol>
<ul>
<li><p>获取DOM的布局信息会有性能的损耗，所以如果存在重复调用，最佳的做法是尽量把这些值缓存在局部变量中。</p>
</li>
<li><p>示例</p>
<ul>
<li>如上的代码中，会在一个循环中反复取得一个元素的offsetTop值，事实上，在此代码中该元素的offsetTop值并不会变更，所以会存在不必要的性能损耗。优化的方案是在循环外部取得元素的offsetTop值，相比较之前的方案，此方案只是调用了一遍元素的offsetTop值。</li>

</ul>
</li>
<li><p>浏览器会优化连续的DOM操作</p>
<ul>
<li>因为取得DOM元素的布局信息会强制浏览器刷新渲染树，并且可能会导致页面的重绘或回流，所以在有大批量DOM操作时，应避免获取DOM元素 的布局信息，使得浏览器针对大批量DOM操作的优化不被破坏。如果需要这些布局信息，最好是在DOM操作之前就取得。</li>
<li>如果把取得DOM元素的布局信息提前，因为浏览器会优化连续的DOM操作，所以实际上只会有一次的页面回流出现</li>

</ul>
</li>

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
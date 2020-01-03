<template>
  <div>
    <section class="ouvJEz">
      <h4 class="_1RuRku">浏览器渲染原理与过程</h4>

      <article class="_2rhmJa">
        <h4>浏览器如何渲染网页</h4>
        <p>
          要了解浏览器渲染页面的过程，首先得知道一个名词——关键渲染路径。关键渲染路径是指浏览器从最初接收请求来的HTML、CSS、javascript等资源，然后解析、构建树、渲染布局、绘制，最后呈现给客户能看到的界面这整个过程。<br />
          用户看到页面实际上可以分为两个阶段：页面内容加载完成和页面资源加载完成，分别对应于<code>DOMContentLoaded</code>和<code>Load</code>。
        </p>
        <ul>
          <li>
            <code>DOMContentLoaded</code
            >事件触发时，仅当DOM加载完成，不包括样式表，图片等
          </li>
          <li>
            <code>load</code
            >事件触发时，页面上所有的DOM，样式表，脚本，图片都已加载完成
          </li>
        </ul>
        <p>浏览器渲染的过程主要包括以下五步：</p>
        <ol>
          <li>浏览器将获取的HTML文档解析成DOM树。</li>
          <li>处理CSS标记，构成层叠样式表模型CSSOM(CSS Object Model)。</li>
          <li>
            将DOM和CSSOM合并为渲染树(<code>rendering tree</code
            >)将会被创建，代表一系列将被渲染的对象。
          </li>
          <li>
            渲染树的每个元素包含的内容都是计算过的，它被称之为布局<code>layout</code>。浏览器使用一种流式处理的方法，只需要一次绘制操作就可以布局所有的元素。
          </li>
          <li>
            将渲染树的各个节点绘制到屏幕上，这一步被称为绘制<code>painting</code>。
          </li>
        </ol>
        <p>
          需要注意的是，以上五个步骤并不一定一次性顺序完成，比如DOM或CSSOM被修改时，亦或是哪个过程会重复执行，这样才能计算出哪些像素需要在屏幕上进行重新渲染。而在实际情况中，JavaScript和CSS的某些操作往往会多次修改DOM或者CSSOM。
        </p>

        <div class="image-view" data-width="624" data-height="289">
          <img src="statics/web/web/basic/m5/1.webp" alt="" />
        </div>

        <h4>浏览器渲染网页的具体流程</h4>
        <h4>构建DOM树</h4>
        <p>
          当浏览器接收到服务器响应来的HTML文档后，会遍历文档节点，生成DOM树。<br />
          需要注意以下几点：
        </p>
        <ul>
          <li>DOM树在构建的过程中可能会被CSS和JS的加载而执行阻塞</li>
          <li><code>display:none</code>的元素也会在DOM树中</li>
          <li>注释也会在DOM树中</li>
          <li><code>script</code>标签会在DOM树中</li>
        </ul>
        <p>
          无论是DOM还是CSSOM，都是要经过<code>Bytes→characters→tokens→nodes→objectmodel</code>这个过程。
        </p>

        <div class="image-view" data-width="800" data-height="443">
          <img src="statics/web/web/basic/m5/2.webp" alt="" />
        </div>

        <p>
          当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。
        </p>
        <h4>构建CSSOM规则树</h4>
        <p>
          浏览器解析CSS文件并生成CSSOM，每个CSS文件都被分析成一个StyleSheet对象，每个对象都包含CSS规则。CSS规则对象包含对应于CSS语法的选择器和声明对象以及其他对象。<br />
          在这个过程需要注意的是：
        </p>
        <ul>
          <li>CSS解析可以与DOM解析同时进行。</li>
          <li>CSS解析与<code>script</code>的执行互斥 。</li>
          <li>
            在Webkit内核中进行了<code>script</code>执行优化，只有在JS访问CSS时才会发生互斥。
          </li>
        </ul>
        <h4>构建渲染树（Render Tree）</h4>
        <p>
          通过DOM树和CSS规则树，浏览器就可以通过它两构建渲染树了。浏览器会先从DOM树的根节点开始遍历每个可见节点，然后对每个可见节点找到适配的CSS样式规则并应用。<br />
          有以下几点需要注意：
        </p>
        <ul>
          <li>Render Tree和DOM Tree不完全对应</li>
          <li><code>display: none</code>的元素不在Render Tree中</li>
          <li><code>visibility: hidden</code>的元素在Render Tree中</li>
        </ul>

        <div class="image-view" data-width="711" data-height="415">
          <img src="statics/web/web/basic/m5/3.webp" alt="" />
        </div>

        <p>
          渲染树生成后，还是没有办法渲染到屏幕上，渲染到屏幕需要得到各个节点的位置信息，这就需要布局（Layout）的处理了。
        </p>
        <h4>渲染树布局(layout of the render tree)</h4>
        <p>
          布局阶段会从渲染树的根节点开始遍历，由于渲染树的每个节点都是一个Render
          Object对象，包含宽高，位置，背景色等样式信息。所以浏览器就可以通过这些样式信息来确定每个节点对象在页面上的确切大小和位置，布局阶段的输出就是我们常说的盒子模型，它会精确地捕获每个元素在屏幕内的确切位置与大小。需要注意的是：
        </p>
        <ul>
          <li>
            <code>float</code
            >元素，<code>absoulte</code>元素，<code>fixed</code>元素会发生位置偏移。
          </li>
          <li>我们常说的脱离文档流，其实就是脱离Render Tree。</li>
        </ul>
        <h4>渲染树绘制（Painting the render tree）</h4>
        <p>
          在绘制阶段，浏览器会遍历渲染树，调用渲染器的<code>paint()</code>方法在屏幕上显示其内容。渲染树的绘制工作是由浏览器的UI后端组件完成的。
        </p>
        <h4>浏览器渲染网页的那些事儿</h4>
        <h4>浏览器主要组件结构</h4>

        <div class="image-view" data-width="400" data-height="271">
          <img src="statics/web/web/basic/m5/4.webp" alt="" />
        </div>
        <p>
          渲染引擎主要有两个：webkit和Gecko<br />
          Firefox使用Geoko，Mozilla自主研发的渲染引擎。Safari和Chrome都使用webkit。Webkit是一款开源渲染引擎，它本来是为linux平台研发的，后来由Apple移植到Mac及Windows上。<br />
          虽然主流浏览器渲染过程叫法有区别，但是主要流程还是相同的。
        </p>
        <h4>渲染阻塞</h4>
        <p>
          JS可以操作DOM来修改DOM结构，可以操作CSSOM来修改节点样式，这就导致了浏览器在遇到<code>&lt;script&gt;</code>标签时，DOM构建将暂停，直至脚本完成执行，然后继续构建DOM。如果脚本是外部的，会等待脚本下载完毕，再继续解析文档。现在可以在<code>script</code>标签上增加属性<code>defer</code>或者<code>async</code>。脚本解析会将脚本中改变DOM和CSS的地方分别解析出来，追加到DOM树和CSSOM规则树上。
        </p>
        <p>
          每次去执行JavaScript脚本都会严重地阻塞DOM树的构建，如果JavaScript脚本还操作了CSSOM，而正好这个CSSOM还没有下载和构建，浏览器甚至会延迟脚本执行和构建DOM，直至完成其CSSOM的下载和构建。所以，<code>script</code>标签的位置很重要。
        </p>
        <p>
          JS阻塞了构建DOM树，也阻塞了其后的构建CSSOM规则树，整个解析进程必须等待JS的执行完成才能够继续，这就是所谓的JS阻塞页面。
        </p>
        <p>
          由于CSSOM负责存储渲染信息，浏览器就必须保证在合成渲染树之前，CSSOM是完备的，这种完备是指所有的CSS（内联、内部和外部）都已经下载完，并解析完，只有CSSOM和DOM的解析完全结束，浏览器才会进入下一步的渲染，这就是CSS阻塞渲染。
        </p>
        <p>
          CSS阻塞渲染意味着，在CSSOM完备前，页面将一直处理白屏状态，这就是为什么样式放在<code>head</code>中，仅仅是为了更快的解析CSS，保证更快的首次渲染。
        </p>
        <p>
          需要注意的是，即便你没有给页面任何的样式声明，CSSOM依然会生成，默认生成的CSSOM自带浏览器默认样式。
        </p>
        <p>
          当解析HTML的时候，会把新来的元素插入DOM树里面，同时去查找CSS，然后把对应的样式规则应用到元素上，查找样式表是按照从右到左的顺序去匹配的。
        </p>
        <p>
          例如：<code>div p {font-size: 16px}</code
          >，会先寻找所有<code>p</code>标签并判断它的父标签是否为<code>div</code>之后才会决定要不要采用这个样式进行渲染）。<br />
          所以，我们平时写CSS时，尽量用<code>id</code>和<code>class</code>，千万不要过渡层叠。
        </p>
        <h4>回流和重绘（reflow和repaint）</h4>
        <p>
          我们都知道HTML默认是流式布局的，但CSS和JS会打破这种布局，改变DOM的外观样式以及大小和位置。因此我们就需要知道两个概念：<code>replaint</code>和<code>reflow</code>。
        </p>
        <h5>reflow（回流）</h5>
        <p>
          当浏览器发现布局发生了变化，这个时候就需要倒回去重新渲染，大家称这个回退的过程叫<code>reflow</code>。<code>reflow</code>会从<code>html</code>这个<code
            >root frame</code
          >开始递归往下，依次计算所有的结点几何尺寸和位置，以确认是渲染树的一部分发生变化还是整个渲染树。<code>reflow</code>几乎是无法避免的，因为只要用户进行交互操作，就势必会发生页面的一部分的重新渲染，且通常我们也无法预估浏览器到底会<code>reflow</code>哪一部分的代码，因为他们会相互影响。
        </p>
        <h5>repaint（重绘）</h5>
        <p>
          <code>repaint</code
          >则是当我们改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸和位置没有发生改变。
        </p>
        <p>
          需要注意的是，<code>display:none</code>会触发<code>reflow</code>，而<code
            >visibility: hidden</code
          >属性则并不算是不可见属性，它的语义是隐藏元素，但元素仍然占据着布局空间，它会被渲染成一个空框。所以<code>visibility:hidden</code>只会触发<code>repaint</code>，因为没有发生位置变化。
        </p>
        <p>
          另外有些情况下，比如修改了元素的样式，浏览器并不会立刻<code>reflow</code>或<code>repaint</code>一次，而是会把这样的操作积攒一批，然后做一次<code>reflow</code>，这又叫异步<code>reflow</code>或增量异步<code>reflow</code>。但是在有些情况下，比如<code>resize</code>窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行<code>reflow</code>。
        </p>
        <h5>引起reflow</h5>
        <p>
          现代浏览器会对回流做优化，它会等到足够数量的变化发生，再做一次批处理回流。
        </p>
        <ul>
          <li>页面第一次渲染（初始化）</li>
          <li>DOM树变化（如：增删节点）</li>
          <li>Render树变化（如：<code>padding</code>改变）</li>
          <li>浏览器窗口<code>resize</code></li>
          <li>获取元素的某些属性</li>
        </ul>
        <p>
          浏览器为了获得正确的值也会提前触发回流，这样就使得浏览器的优化失效了，这些属性包括<code
            >offsetLeft、offsetTop、offsetWidth、offsetHeight、
            scrollTop/Left/Width/Height、clientTop/Left/Width/Height</code
          >、调用了<code>getComputedStyle()</code>。
        </p>
        <h5>引起repaint</h5>
        <p>
          <code>reflow</code
          >回流必定引起<code>repaint</code>重绘，重绘可以单独触发。<br />
          背景色、颜色、字体改变（注意：字体大小发生变化时，会触发回流）
        </p>
        <h5>减少reflow、repaint触发次数</h5>
        <ul>
          <li>
            用<code>transform</code>做形变和位移可以减少<code>reflow</code>
          </li>
          <li>避免逐个修改节点样式，尽量一次性修改</li>
          <li>
            使用<code>DocumentFragment</code>将需要多次修改的DOM元素缓存，最后一次性<code>append</code>到真实DOM中渲染
          </li>
          <li>
            可以将需要多次修改的DOM元素设置<code>display:none</code>，操作完再显示。（因为隐藏元素不在<code>render</code>树内，因此修改隐藏元素不会触发回流重绘）
          </li>
          <li>避免多次读取某些属性</li>
          <li>
            通过绝对位移将复杂的节点元素脱离文档流，形成新的Render
            Layer，降低回流成本
          </li>
        </ul>
        <h4>几条关于优化渲染效率的建议</h4>
        <p>结合上文有以下几点可以优化渲染效率。</p>
        <ul>
          <li>合法地去书写HTML和CSS ，且不要忘了文档编码类型。</li>
          <li>
            样式文件应当在<code>head</code>标签中，而脚本文件在<code>body</code>结束前，这样可以防止阻塞的方式。
          </li>
          <li>简化并优化CSS选择器，尽量将嵌套层减少到最小。</li>
          <li>
            DOM
            的多个读操作（或多个写操作），应该放在一起。不要两个读操作之间，加入一个写操作。
          </li>
          <li>
            如果某个样式是通过重排得到的，那么最好缓存结果。避免下一次用到的时候，浏览器又要重排。
          </li>
          <li>
            不要一条条地改变样式，而要通过改变<code>class</code>，或者<code>csstext</code>属性，一次性地改变样式。
          </li>
          <li>尽量用<code>transform</code>来做形变和位移</li>
          <li>
            尽量使用离线DOM，而不是真实的网面DOM，来改变元素样式。比如，操作<code
              >Document Fragment</code
            >对象，完成后再把这个对象加入DOM。再比如，使用<code>cloneNode()</code>方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点。
          </li>
          <li>
            先将元素设为<code>display: none</code
            >（需要1次重排和重绘），然后对这个节点进行100次操作，最后再恢复显示（需要1次重排和重绘）。这样一来，你就用两次重新渲染，取代了可能高达100次的重新渲染。
          </li>
          <li>
            <code>position</code
            >属性为<code>absolute</code>或<code>fixed</code>的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。
          </li>
          <li>
            只在必要的时候，才将元素的<code>display</code>属性为可见，因为不可见的元素不影响重排和重绘。另外，<code
              >visibility : hidden</code
            >的元素只对重绘有影响，不影响重排。<br />
            使用<code>window.requestAnimationFrame()</code>、<code>window.requestIdleCallback()</code>这两个方法调节重新渲染。
          </li>
        </ul>
      </article>
      <div></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

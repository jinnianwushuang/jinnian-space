<template>
    <div>
      <h2>前后端路由及前端路由的实现</h2>
<h3>前后端路由</h3>
<ul>
<li><p>传统的服务端路由</p>
<ul>
<li><p>根据客户端请求的不同网址，返回不同的网页内容</p>
</li>
<li><p>现象</p>
<ul>
<li>1、会造成服务器压力增加</li>
<li>2、每次都重新请求，响应较慢、用户体验下降</li>
</ul>
</li>
</ul>
</li>
<li><p>前端路由</p>
<ul>
<li>在URL地址改变的过程中，通过JS来实现不同UI之间的切换（JS对DOM的操作），而不再向服务器重新请求页面，只通过AJAX向服务端请求数据，对用户来说这种无刷新的、即时响应是更好的体验。</li>
<li>路由是映射关系，URL与处理函数的对应关系</li>
</ul>
</li>
</ul>
<h3>前端路由的实现方式</h3>
<ul>
<li><p>方法一：基于hash（location.hash+hashchange事件）</p>
<ul>
<li><p>（1）hash满足以下几个特性，才使得其可以实现前端路由</p>
<ul>
<li>（1）url中hash值的变化并不会重新加载页面，因为hash是用来指导浏览器行为的，对服务端是无用的，所以不会包括在http请求中。</li>
<li>（2）hash值的改变，都会在浏览器的访问历史中增加一个记录，也就是能通过浏览器的回退、前进按钮控制hash的切换</li>
<li>（3）我们可以通过hashchange事件，监听到hash值的变化，从而响应不同路径的逻辑处理。</li>
<li>如此一来，我们就可以在hashchange事件里，根据hash值来更新对应的视图，但不会去重新请求页面，同时呢，也在history里增加了一条访问记录，用户也仍然可以通过前进后退键实现UI的切换。</li>
</ul>
</li>
<li><p>（2）触发hash值的变化有两种方法</p>
<ul>
<li><p>1、通过a标签，设置href属性，当标签点击之后，地址栏会改变，同时会触发hashchange事件</p>
<ul>
<li><a href="#kaola">to KAOLA</a></li>
</ul>
</li>
<li><p>2、通过JS直接赋值给location.hash，也会改变URL，触发hashchange事件</p>
<ul>
<li>location.hash=&quot;#kaola&quot;</li>
</ul>
</li>
</ul>
</li>
<li><p>（3）hash实现简易Router代码</p>
<ul>
<li><p>route</p>
<ul>
<li>route是一条路由，是将一个URL路径和一个处理函数相关联，是一条url和函数的映射规则，如上面代码中通过原型上的route可以设置一条路由规则，将一个path和其callback关联起来。</li>
</ul>
</li>
<li><p>routes</p>
<ul>
<li>router则更像是一个容器，或者说一种机制，它管理了一组route。简单来说，route只是进行了URL和函数的映射，而在当接收到一个URL之后，去路由映射表中查找相应的函数，这个过程是由router来处理的，如上面代码，Router管理传入的route，并且在hash改变的时候，根据当前的url响应其对应的函数。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>方法二：基于History新API（history.pushState()+popState事件）</p>
<ul>
<li><p>History对象</p>
<ul>
<li><p>history.pushState</p>
<ul>
<li><p>用于在浏览历史中添加历史记录,但是并不触发跳转,此方法接受三个参数</p>
<ul>
<li>state:一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，可以填null。</li>
<li>title：新页面的标题，但是所有浏览器目前都忽略这个值，填空字符串l。</li>
<li>url：新的URL不一定是绝对路径；如果是相对路径，它将以当前URL为基准；传入的URL与当前URL应该是同源的，否则，pushState()会抛出异常。</li>
</ul>
</li>
</ul>
</li>
<li><p>history.replaceState</p>
<ul>
<li>方法的参数与pushState方法一模一样，区别是它修改浏览历史中当前纪录,而非添加记录,同样不触发跳转。</li>
</ul>
</li>
<li><p>popstate事件</p>
<ul>
<li>每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。</li>
<li>注意，仅仅调用pushState()方法或replaceState()方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用History.back()、History.forward()、History.go()方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。</li>
</ul>
</li>
</ul>
</li>
<li><p>代码</p>
<ul>
<li>当我们在历史记录中切换时就会触发 popstate 事件，可以在事件中还原当前state对应的UI。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>监听浏览器的后退按钮事件</h3>
<ul>
<li><p>（1）如果后退是跳转到另一个全新的页面</p>
<ul>
<li>实际上有很多事件都会触发 onbeforeunload，比如刷新、点击链接前往新的页面等。这里应该还是在页面加载完成比如 window.onload 事件里使用 history.pushState 推一条记录进栈，同时监听 window.onpopstate 事件</li>
</ul>
</li>
<li><p>（2）如果整个页面是一个SPA，History API模式</p>
<ul>
<li>使用的是 pushState/replaceState 来实现的导航，那么当浏览器回退的时候会触发 window 上的 popstate 事件。这时需要监听 window.onpopstate 事件;</li>
</ul>
</li>
<li><p>（3）如果整个页面是一个SPA，Hash模式</p>
<ul>
<li><p>使用的是基于 hashChange 实现的导航，那么这个时候就比较麻烦。因为页面根据 hash 正常变化跳转（导航）的时候也会触发 popstate 事件，所以不能简单的监听 popstate 事件来做出判断。</p>
</li>
<li><p>思路</p>
<ul>
<li>因为后退按钮属于浏览器的UI，并不属于任何一个页面，所以如果当鼠标在当前页面外时，监听的 popstate 事件被触发，那么认为用户点击了浏览器的后退按钮 (这里的判断鼠标是否在当前页面里是通过监听 document.onmouseleave 和 document.onmouseenter事件)；另外答案里还绑定了对 Backspace 键的监听，因为某些浏览器默认当页面焦点不属于输入域时触发的是后退操作。这个方法基本可以满足大多数情况，但是如果用户是通过鼠标侧键 (常见于游戏鼠标) 来实现的后退操作，那么可能就无法监听了。</li>
</ul>
</li>
<li><p>Location对象</p>
<ul>
<li><p>Location.reload([bForceGet]) - 刷新当前页面</p>
<ul>
<li>bForceGet为可选参数， 默认为 false，从浏览器的缓存里取当前页。true，从服务端取最新的页面, 相当于客户端点击 F5(&quot;刷新&quot;) 。</li>
</ul>
</li>
<li><p>Location.replace(url) - 当前页面跳转到指定的URL</p>
<ul>
<li>并且用该URL替换当前的历史纪录，这样浏览历史记录中就只有一个页面，后退按钮永远处于失效状态，用户也就无法进行后退了。</li>
</ul>
</li>
<li><p>Location.assign(url) - 当前页面跳转到指定的URL</p>
<ul>
<li>和使用location.href=URL是一样的。会产生历史记录。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>考虑前进/后退的差别</p>
<ul>
<li>其实前进按钮也会触发 popstate 事件。如果是使用了 HTML5 的 history api 的单页应用，可以在 pushState 的时候给要入栈的状态对象加上一个字段来区分历史栈中每个状态的先后顺序，比如 pushState({s: &#39;a.html&#39;, index: 0}, &#39;&#39;, &#39;a.html&#39;) 和 pushState({s: &#39;b.html&#39;, index: 1}, &#39;&#39;, &#39;b.html&#39;)，这样当点击浏览器前进后退按钮的时候我们可以通过比较 e.state.index 和当前 history.state.index 的值来判断具体是入栈还是出栈</li>
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
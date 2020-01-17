<template>
    <div>
     <h1>跨域</h1>
<h2>常见浏览器跨域的解决方式大概6种</h2>
<h3>跨域请求</h3>
<ul>
<li>1.jsonp 需要目标服务器配合一个callback函数。</li>
<li>2.CORS  需要服务器设置header ：Access-Control-Allow-Origin。</li>
<li>3.nginx反向代理 这个方法一般很少有人提及，但是他可以不用目标服务器配合，不过需要你搭建一个中转nginx服务器，用于转发请求。</li>

</ul>
<h3>访问跨域的页面</h3>
<ul>
<li>4.window.name+iframe 需要目标服务器响应window.name。</li>
<li>5.window.location.hash+iframe 同样需要目标服务器作处理。</li>
<li>6.html5的 postMessage+iframe 这个也是需要目标服务器或者说是目标页面写一个postMessage，主要侧重于前端通讯。</li>

</ul>
<h2>浏览器同源政策及其规避方法</h2>
<h3>同源策略限制范围</h3>
<ul>
<li>（1） Cookie、LocalStorage 和 IndexDB 无法读取。</li>
<li>（2） DOM 无法获得。</li>
<li>（3） AJAX 请求不能发送。</li>

</ul>
<h3>Cookie</h3>
<ul>
<li><p>解决</p>
<ul>
<li>两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置document.domain共享 Cookie。</li>
<li>举例来说，A网页是<a href='http://w1.example.com/a.html' target='_blank' class='url'>http://w1.example.com/a.html</a>，B网页是<a href='http://w2.example.com/b.html' target='_blank' class='url'>http://w2.example.com/b.html</a>，那么只要设置相同的document.domain，两个网页就可以共享Cookie。</li>
<li>document.domain = &#39;example.com&#39;;
----&gt;现在，A网页通过脚本设置一个 Cookie。document.cookie = &quot;test1=hello&quot;;
----&gt;B网页就可以读到这个 Cookie。var allCookie = document.cookie;</li>

</ul>
</li>
<li><p>注意</p>
<ul>
<li>注意，这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexDB 无法通过这种方法，规避同源政策，而要使用下文介绍的PostMessage API。</li>

</ul>
</li>

</ul>
<h3>iframe</h3>
<ul>
<li><p>问题</p>
<ul>
<li>如果两个网页不同源，就无法拿到对方的DOM。典型的例子是iframe窗口和window.open方法打开的窗口，它们与父窗口无法通信。</li>

</ul>
</li>
<li><p>解决</p>
<ul>
<li><p>同源的情况</p>
<ul>
<li>如果两个窗口一级域名相同，只是二级域名不同，那么设置上一节介绍的document.domain属性，就可以规避同源政策，拿到DOM。</li>
<li>iframe访问父页面可通过window.parent得到父窗口的window对象，通过open打开的可以用window.opener，进而得到父窗口的任何东西；父窗口如果和iframe同源的，那么可通过iframe.contentWindow得到iframe的window对象</li>

</ul>
</li>
<li><p>对于完全不同源的网站，目前有三种方法，可以解决跨域窗口的通信问题。</p>
<ul>
<li><p>片段识别符（fragment identifier）</p>
<ul>
<li><p>定义</p>
<ul>
<li>片段标识符（fragment identifier）指的是，URL的#号后面的部分，比如<a href='http://example.com/x.html#fragment' target='_blank' class='url'>http://example.com/x.html#fragment</a>的#fragment。如果只是改变片段标识符，页面不会重新刷新。</li>

</ul>
</li>
<li><p>用法</p>
</li>

</ul>
</li>
<li><p>window.name</p>
<ul>
<li><p>定义</p>
<ul>
<li>浏览器窗口有window.name属性。这个属性的最大特点是，无论是否同源，只要在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它。</li>

</ul>
</li>
<li><p>用法</p>
</li>
<li><p>优缺点</p>
<ul>
<li>这种方法的优点是，window.name容量很大，可以放置非常长的字符串；缺点是必须监听子窗口window.name属性的变化，影响网页性能</li>

</ul>
</li>

</ul>
</li>
<li><p>跨文档通信API（Cross-document messaging）</p>
<ul>
<li><p>定义</p>
<ul>
<li>这个API为window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。</li>
<li>举例来说，父窗口<a href='http://aaa.com' target='_blank' class='url'>http://aaa.com</a>向子窗口<a href='http://bbb.com' target='_blank' class='url'>http://bbb.com</a>发消息，调用postMessage方法就可以了。</li>

</ul>
</li>
<li><p>语法</p>
<ul>
<li>otherWindow.postMessage(message, targetOrigin);</li>

</ul>
</li>
<li><p>基本使用</p>
<ul>
<li><p>postMessage方法的第一个参数是具体的信息内容，第二个参数是接收消息的窗口的源（origin），即&quot;协议 + 域名 + 端口&quot;。也可以设为*，表示不限制域名，向所有窗口发送。</p>
</li>
<li><p>父窗口和子窗口都可以通过message事件，监听对方的消息。</p>
</li>
<li><p>message事件的事件对象event，提供以下三个属性。</p>
<ul>
<li>event.source：发送消息的窗口</li>
<li>event.origin: 消息发向的网址</li>
<li>event.data: 消息内容</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
<h3>AJAX</h3>
<ul>
<li><p>除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。</p>
</li>
<li><p>JSONP</p>
<ul>
<li><p>基本思想</p>
<ul>
<li>它的基本思想是，网页通过添加一个&lt;script&gt;元素，向服务器请求JSON数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。</li>

</ul>
</li>
<li><p>应用</p>
<ul>
<li>首先，网页动态插入&lt;script&gt;元素，由它向跨源网址发出请求。</li>
<li>上面代码通过动态添加&lt;script&gt;元素，向服务器example.com发出请求。注意，该请求的查询字符串有一个callback参数，用来指定回调函数的名字，这对于JSONP是必需的。</li>
<li>服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。</li>
<li>由于&lt;script&gt;元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了foo函数，该函数就会立即调用。作为参数的JSON数据被视为JavaScript对象，而不是字符串，因此避免了使用JSON.parse的步骤。</li>

</ul>
</li>
<li><p>优缺点</p>
<ul>
<li><p>优点</p>
<ul>
<li>兼容性好，可以在更古老的浏览器中运行</li>

</ul>
</li>
<li><p>缺点</p>
<ul>
<li>只支持GET</li>

</ul>
</li>

</ul>
</li>
<li><p>总结</p>
</li>

</ul>
</li>
<li><p>WebSocket</p>
<ul>
<li><p>基本思想</p>
<ul>
<li>WebSocket是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。</li>

</ul>
</li>

</ul>
</li>
<li><p>CORS</p>
<ul>
<li><p>简单请求（simple request）</p>
<ul>
<li><p>满足条件</p>
<ul>
<li><p>（1) 请求方法是以下三种方法之一：</p>
<ul>
<li>HEAD</li>
<li>GET</li>
<li>POST</li>

</ul>
</li>
<li><p>（2）HTTP的头信息不超出以下几种字段：</p>
<ul>
<li>Accept</li>
<li>Accept-Language</li>
<li>Content-Language</li>
<li>Last-Event-ID</li>
<li>Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain</li>

</ul>
</li>

</ul>
</li>
<li><p>基本流程</p>
<ul>
<li><p>（1）对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。</p>
<ul>
<li>上面的头信息中，Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。</li>

</ul>
</li>
<li><p>（2）如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段（详见下文），就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。</p>
</li>
<li><p>（3）如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。</p>
<ul>
<li><p>上面的头信息之中，有三个与CORS请求相关的字段，都以Access-Control-开头。</p>
<ul>
<li><p>（1）Access-Control-Allow-Origin</p>
<ul>
<li>该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。</li>

</ul>
</li>
<li><p>（2）Access-Control-Allow-Credentials</p>
<ul>
<li>该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。</li>

</ul>
</li>
<li><p>（3）Access-Control-Expose-Headers</p>
</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>
<li><p>非简单请求（not-so-simple request）</p>
<ul>
<li><p>满足条件</p>
<ul>
<li>非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。</li>

</ul>
</li>
<li><p>基本流程</p>
<ul>
<li>（1）非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为&quot;预检&quot;请求（preflight）。要求服务器确认可以这样请求。</li>
<li>（2）浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。</li>
<li>&quot;预检&quot;请求用的请求方法是OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是Origin，表示请求来自哪个源。</li>

</ul>
</li>

</ul>
</li>
<li><p>关于Node.js对于CORS的后端配置</p>
</li>
<li><p>实例</p>
<ul>
<li>请注意，代码与之前的区别就在于相对路径换成了其他域的绝对路径，也就是你要跨域访问的接口地址。</li>

</ul>
</li>
<li><p>总结</p>
</li>

</ul>
</li>
<li><p>正常的AJAX请求</p>
</li>

</ul>
<h2>跨域与安全</h2>
<h3>1.两个误区</h3>
<ul>
<li>1.并不是动态请求就会有跨域的问题，跨域只存在于浏览器端，不存在于安卓/ios/Node.js/python/ java等其它环境</li>
<li>2.跨域并不是请求发不出去了，跨域请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了</li>

</ul>
<h3>2.同源策略具体限制些什么呢？</h3>
<ul>
<li><ol start='' >
<li>不能向工作在不同源的的服务请求数据（client to server）</li>

</ol>
</li>
<li><ol start='2' >
<li>无法获取不同源的document/cookie等BOM和DOM，可以说任何有关另外一个源的信息都无法得到 （client to client）</li>

</ol>
</li>

</ul>
<h3>3.为什么会有同源策略呢？</h3>
<ul>
<li><ol start='' >
<li>为什么要限制不同源发请求？</li>

</ol>
<ul>
<li>假设用户登陆了bank.com，同时打开了evil.com，如果没有任何限制，evil.com可以向bank.com请求到任何信息，进而就可以在evil.com向bank.com发转账请求等。</li>

</ul>
</li>
<li><ol start='2' >
<li>为什么限制跨域的DOM读取？</li>

</ol>
<ul>
<li>如果不限制的话，那么很容易就可以伪装其它的网站，如套一个iframe或者通过window.open的方法，从而得到用户的操作和输入，如账户、密码。</li>

</ul>
</li>

</ul>
<h3>4.跨域常用方法【CORS】</h3>
<ul>
<li><p>定义</p>
<ul>
<li>只要浏览器检测到响应头带上了CORS，并且允许的源包括了本网站，那么就不会拦截请求响应。</li>

</ul>
</li>
<li><p>CORS把请求分为两种</p>
<ul>
<li><p>一种是简单请求</p>
</li>
<li><p>一种是需要触发预检请求</p>
<ul>
<li><p>条件</p>
<ul>
<li>（1）使用了除GET/POST/HEAD之外的请求方式，如PUT/DELETE</li>
<li>（2）使用了除Content-Type/Accept等几个常用的http头</li>

</ul>
</li>
<li><p>预检请求使用OPTIONS方式去检查当前请求是否安全</p>
<ul>
<li>代码里面只发了一个请求，但在控制台看到了两个请求，第一个是OPTIONS，服务端返回：</li>
<li>返回头里面包含了允许的请求头、请求方式、源，以及预检请求的有效期，上图是设置了20天，在这个有效期内就不用再发一个options的请求，实际上浏览器有一个最长时间，如Chrome是5分钟。如果在预检请求检测到当前请求不符合服务端设定的要求，则不会发出去了直接抛异常，这个时候就不用去发“复杂”的请求了。</li>
<li>如本源不在允许的源范围内，则会抛异常，无法获取返回结果：</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>
<li><p>为了支持CORS，nginx可以这么配</p>
</li>

</ul>
<h3>5.跨域常用的方法【JSONP】</h3>
<ul>
<li><p>原理</p>
<p>当需要通讯时，本站脚本创建一个&lt;script&gt;元素，地址指向第三方的API网址，形如：    script src="http://www.example.net/api?param1=1" /script      并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。     第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如：     callback({&quot;name&quot;:&quot;hax&quot;,&quot;gender&quot;:&quot;Male&quot;})     这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。</p>
<p>&nbsp;</p>
<ul>
<li>JSONP是利用了script标签能够跨域， jsonp本身就是一个get请求，而script节点本身也是一个get请求</li>
<li>凡是拥有&quot;src&quot;这个属性的标签都拥有跨域的能力，比如&lt;script&gt;、<img>、&lt;iframe&gt;</li>
<li>代码先定义一个全局函数，然后把这个函数名通过callback参数添加到script标签的src，script的src就是需要跨域的请求，然后这个请求返回可执行的JS文本：</li>
<li>由于它是一个js，并且已经定义了upldateList函数，所以能正常执行，并且跨域的数据通过传参得到。这就是JSONP的原理。</li>

</ul>
</li>
<li><p>跨站请求伪造（CSRF）</p>
<ul>
<li><p>原理</p>
<ul>
<li>由于script/iframe/img等标签的请求默认是能带上cookie（cookie里面带上了登陆验证的票token），用这些标签发请求是能够绕过同源策略的，因此就可以利用这些标签做跨站请求伪造（CSRF）</li>
<li>如果相应的网站支持GET请求，或者没有做进一步的防护措施，那么如果用户在另外一个页面登陆过了，再打开一个“有毒”的网站就中招了</li>

</ul>
</li>

</ul>
</li>

</ul>
<h3>6.总结及注意</h3>
<ul>
<li><p>注意</p>
<ul>
<li><p>1.子域如mail.hello.com要跨hello.com的时候，可以显式地设置子域的document.domain值为父域的domain（或多个子域互相读取cookie）：</p>
<ul>
<li>这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexDB 无法通过这种方法，规避同源政策，而要使用下文介绍的PostMessage API。</li>

</ul>
</li>
<li><p>2.websocket是不受同源策略限制的，没有跨域的问题。</p>
</li>
<li><p>3.CSS的字体文件是会有跨域问题，指定CORS就能加载其它源的字体文件（通常是放在cdn上的）。</p>
</li>
<li><p>4.canvas动态加载的外部image，也是需要指定CORS头才能进行图片处理，否则只能画不能读取。</p>
</li>
<li><p>5.还可以通过window.name来实现跨域</p>
<ul>
<li>在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。</li>

</ul>
</li>

</ul>
</li>
<li><p>总结</p>
<ul>
<li>跨域分为两种，一种是跨域请求，另一种访问跨域的页面，跨域请求可以通过CORS/JSONP等方法进行访问，跨域的页面主要通过postMesssage的方式。由于跨域请求不但能发出去还能带上cookie，所以要规避跨站请求伪造攻击的风险，特别是涉及到钱的那种请求。</li>

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
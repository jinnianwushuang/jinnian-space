<template>
    <div>
  <h2>从输入URL到页面加载的过程</h2>
<h3>多进程的浏览器</h3>
<ul>
<li>浏览器是多进程的，有一个主控进程，以及每一个tab页面都会新开一个进程（某些情况下多个tab会合并进程）</li>

</ul>
<p>进程可能包括主控进程，插件进程，GPU，tab页（浏览器内核）等等</p>
<pre><code>- Browser进程：浏览器的主进程（负责协调、主控），只有一个
- 第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建
- GPU进程：最多一个，用于3D绘制
- 浏览器渲染进程（内核）：默认每个Tab页面一个进程，互不影响，控制页面渲染，脚本执行，事件处理等（有时候会优化，如多个空白tab会合并成一个进程）
</code></pre>
<ul>
<li><p>多线程的浏览器内核</p>
<ul>
<li><p>每一个tab页面可以看作是浏览器内核进程，然后这个进程是多线程的，它有几大类子线程</p>
<ul>
<li>GUI线程</li>
<li>JS引擎线程</li>
<li>事件触发线程</li>
<li>定时器线程</li>
<li>网络请求线程</li>

</ul>
</li>

</ul>
</li>

</ul>
<h3>解析URL</h3>
<ul>
<li><p>输入URL后，会进行解析（URL的本质就是统一资源定位符）</p>
<ul>
<li><p>URL一般包括几大部分：</p>
<ul>
<li>protocol，协议头，譬如有http，ftp等</li>
<li>host，主机域名或IP地址</li>
<li>port，端口号</li>
<li>path，目录路径</li>
<li>query，即查询参数</li>
<li>fragment，即#后的hash值，一般用来定位到某个位置</li>

</ul>
</li>
<li><p>网络请求都是单独的线程</p>
<ul>
<li>每次网络请求时都需要开辟单独的线程进行，譬如如果URL解析到http协议，就会新建一个网络线程去处理资源下载</li>

</ul>
</li>

</ul>
</li>

</ul>
<p>因此浏览器会根据解析出得协议，开辟一个网络线程，前往请求资源（这里，暂时理解为是浏览器内核开辟的，如有错误，后续修复）</p>
<h3>开启网络线程到发出一个完整的http请求</h3>
<ul>
<li><p>DNS查询得到IP</p>
<ul>
<li><p>如果输入的是域名，需要进行dns解析成IP，大致流程：</p>
<ul>
<li>如果浏览器有缓存，直接使用浏览器缓存，否则使用本机缓存，再没有的话就是用host</li>
<li>如果本地没有，就向dns域名服务器查询（当然，中间可能还会经过路由，也有缓存等），查询到对应的IP</li>

</ul>
</li>

</ul>
</li>
<li><p>tcp/ip请求</p>
<ul>
<li><p>http的本质就是tcp/ip请求</p>
<ul>
<li><p>tcp将http长报文划分为短报文，通过三次握手与服务端建立连接，进行可靠传输</p>
<ul>
<li><p>三次握手的步骤：（抽象派）</p>
<ul>
<li>客户端：hello，你是server么？
服务端：hello，我是server，你是client么
客户端：yes，我是client</li>
<li>建立连接成功后，接下来就正式传输数据</li>

</ul>
</li>

</ul>
</li>
<li><p>待到断开连接时，需要进行四次挥手（因为是全双工的，所以需要四次挥手）</p>
<ul>
<li><p>四次挥手的步骤：（抽象派）</p>
<ul>
<li>主动方：我已经关闭了向你那边的主动通道了，只能被动接收了
被动方：收到通道关闭的信息
被动方：那我也告诉你，我这边向你的主动通道也关闭了
主动方：最后收到数据，之后双方无法通信</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>
<li><p>tcp/ip的并发限制</p>
<ul>
<li>浏览器对同一域名下并发的tcp连接是有限制的（2-10个不等）</li>

</ul>
</li>

</ul>
</li>

</ul>
<p>而且在http1.0中往往一个资源下载就需要对应一个tcp/ip请求</p>
<p>所以针对这个瓶颈，又出现了很多的资源优化方案</p>
<pre><code>- get和post的区别

	- get和post虽然本质都是tcp/ip，但两者除了在http层面外，在tcp/ip层面也有区别。
</code></pre>
<p>get会产生一个tcp数据包，post两个</p>
<pre><code>		- get请求时，浏览器会把headers和data一起发送出去，服务器响应200（返回数据），
		- post请求时，浏览器先发送headers，服务器响应100 continue，
		- 浏览器再发送data，服务器响应200（返回数据）。
</code></pre>
<ul>
<li><p>五层因特网协议栈</p>
<ul>
<li><p>一个概念： 从客户端发出http请求到服务器接收，中间会经过一系列的流程。</p>
<ul>
<li>从应用层的发送http请求，到传输层通过三次握手建立tcp/ip连接，再到网络层的ip寻址，再到数据链路层的封装成帧，最后到物理层的利用物理介质传输。</li>

</ul>
</li>

</ul>
</li>

</ul>
<p>当然，服务端的接收就是反过来的步骤</p>
<pre><code>- 1.应用层(dns,http) DNS解析成IP并发送http请求
</code></pre>
<p>2.传输层(tcp,udp) 建立tcp连接（三次握手）</p>
<p>3.网络层(IP,ARP) IP寻址</p>
<p>4.数据链路层(PPP) 封装成帧</p>
<p>5.物理层(利用物理介质传输比特流) 物理传输（然后传输的时候通过双绞线，电磁波等各种介质）</p>
<h3>从服务器接收到请求到对应后台接收到请求</h3>
<ul>
<li><p>负载均衡</p>
<ul>
<li>用户发起的请求都指向调度服务器（反向代理服务器，譬如安装了nginx控制负载均衡），
然后调度服务器根据实际的调度算法，分配不同的请求给对应集群中的服务器执行，然后调度器等待实际服务器的HTTP响应，并将它反馈给用户</li>

</ul>
</li>
<li><p>后台的处理</p>
<ul>
<li><p>一般后台都是部署到容器中的，所以一般为：</p>
<ul>
<li>先是容器接受到请求（如tomcat容器）</li>
<li>然后对应容器中的后台程序接收到请求（如java程序）</li>
<li>然后就是后台会有自己的统一处理，处理完后响应响应结果</li>

</ul>
</li>
<li><p>概括下：</p>
<ul>
<li>一般有的后端是有统一的验证的，如安全拦截，跨域验证</li>
<li>如果这一步不符合规则，就直接返回了相应的http报文（如拒绝请求等）</li>
<li>然后当验证通过后，才会进入实际的后台代码，此时是程序接收到请求，然后执行（譬如查询数据库，大量计算等等）</li>
<li>等程序执行完毕后，就会返回一个http响应包（一般这一步也会经过多层封装）</li>
<li>然后就是将这个包从后端发送到前端，完成交互</li>

</ul>
</li>

</ul>
</li>
<li><p>后台和前台的http交互</p>
<ul>
<li><p>http报文结构</p>
<ul>
<li><p>报文一般包括了：通用头部，请求/响应头部，请求/响应体</p>
<ul>
<li><p>通用头部</p>
<ul>
<li><p>这也是开发人员见过的最多的信息，包括如下：</p>
<ul>
<li><p>Request Url: 请求的web服务器地址</p>
</li>
<li><p>Request Method: 请求方式（Get、POST、OPTIONS、PUT、HEAD、DELETE、CONNECT、TRACE）</p>
<ul>
<li>HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。</li>
<li>HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。</li>

</ul>
</li>
<li><p>Status Code: 请求的返回状态码，如200代表成功</p>
<ul>
<li>200——表明该请求被成功地完成，所请求的资源发送回客户端</li>
<li>304——自从上次请求后，请求的网页未修改过，请客户端使用本地缓存</li>
<li>400——客户端请求有错（譬如可以是安全模块拦截）</li>
<li>401——请求未经授权</li>
<li>403——禁止访问（譬如可以是未登录时禁止）</li>
<li>404——资源未找到</li>
<li>500——服务器内部错误</li>
<li>503——服务不可用</li>
<li>1xx——指示信息，表示请求已接收，继续处理</li>
<li>2xx——成功，表示请求已被成功接收、理解、接受</li>
<li>3xx——重定向，要完成请求必须进行更进一步的操作</li>
<li>4xx——客户端错误，请求有语法错误或请求无法实现</li>
<li>5xx——服务器端错误，服务器未能实现合法的请求</li>

</ul>
</li>
<li><p>Remote Address: 请求的远程服务器地址（会转为IP）</p>
</li>

</ul>
</li>

</ul>
</li>
<li><p>请求/响应头部</p>
<ul>
<li><p>常用的请求头部（部分）：</p>
<ul>
<li>Accept: 接收类型，表示浏览器支持的MIME类型
（对标服务端返回的Content-Type）
Accept-Encoding：浏览器支持的压缩类型,如gzip等,超出类型不能接收
Content-Type：客户端发送出去实体内容的类型
Cache-Control: 指定请求和响应遵循的缓存机制，如no-cache
If-Modified-Since：对应服务端的Last-Modified，用来匹配看文件是否变动，只能精确到1s之内，http1.0中
Expires：缓存控制，在这个时间内不会请求，直接使用缓存，http1.0，而且是服务端时间
Max-age：代表资源在本地缓存多少秒，有效时间内不会请求，而是使用缓存，http1.1中
If-None-Match：对应服务端的ETag，用来匹配文件内容是否改变（非常精确），http1.1中
Cookie: 有cookie并且同域访问时会自动带上
Connection: 当浏览器与服务器通信时对于长连接如何进行处理,如keep-alive
Host：请求的服务器URL
Origin：最初的请求是从哪里发起的（只会精确到端口）,Origin比Referer更尊重隐私
Referer：该页面的来源URL(适用于所有类型的请求，会精确到详细页面地址，csrf拦截常用到这个字段)
User-Agent：用户客户端的一些必要信息，如UA头部等</li>

</ul>
</li>
<li><p>常用的响应头部（部分）：</p>
<ul>
<li>Access-Control-Allow-Headers: 服务器端允许的请求Headers
Access-Control-Allow-Methods: 服务器端允许的请求方法
Access-Control-Allow-Origin: 服务器端允许的请求Origin头部（譬如为*）
Content-Type：服务端返回的实体内容的类型
Date：数据从服务器发送的时间
Cache-Control：告诉浏览器或其他客户，什么环境可以安全的缓存文档
Last-Modified：请求资源的最后修改时间
Expires：应该在什么时候认为文档已经过期,从而不再缓存它
Max-age：客户端的本地资源应该缓存多少秒，开启了Cache-Control后有效
ETag：请求变量的实体标签的当前值
Set-Cookie：设置和页面关联的cookie，服务器通过这个头部把cookie传给客户端
Keep-Alive：如果客户端有keep-alive，服务端也会有响应（如timeout=38）
Server：服务器的一些相关信息</li>

</ul>
</li>

</ul>
</li>
<li><p>请求/响应实体</p>
<ul>
<li>http请求时，除了头部，还有消息实体，一般来说</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
<p>请求实体中会将一些需要的参数都放入进入（用于post请求）。</p>
<p>譬如实体中可以放参数的序列化形式（a=1&amp;b=2这种），或者直接放表单对象（Form Data对象，上传时可以夹杂参数以及文件），等等</p>
<p>而一般响应实体中，就是放服务端需要传给客户端的内容</p>
<p>一般现在的接口请求时，实体中就是对于的信息的json格式，而像页面请求这种，里面就是直接放了一个html字符串，然后浏览器自己解析并渲染。</p>
<pre><code>		- CRLF

			- CRLF（Carriage-Return Line-Feed），意思是回车换行，一般作为分隔符存在
</code></pre>
<p>请求头和实体消息之间有一个CRLF分隔，响应头部和响应实体之间用一个CRLF分隔</p>
<p>一般来说（分隔符类别）：</p>
<p>CRLF-&gt;Windows-style
LF-&gt;Unix Style
CR-&gt;Mac Style</p>
<ul>
<li><p>cookie以及优化</p>
<ul>
<li><p>cookie是浏览器的一种本地存储方式，一般用来帮助客户端和服务端通信的，常用来进行身份校验，结合服务端的session使用。</p>
<ul>
<li><p>场景如下（简述）：</p>
<ul>
<li>在登陆页面，用户登陆了</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
<p>此时，服务端会生成一个session，session中有对于用户的信息（如用户名、密码等）</p>
<p>然后会有一个sessionid（相当于是服务端的这个session对应的key）</p>
<p>然后服务端在登录页面中写入cookie，值就是:jsessionid=xxx</p>
<p>然后浏览器本地就有这个cookie了，以后访问同域名下的页面时，自动带上cookie，自动检验，在有效时间内无需二次登陆。</p>
<ul>
<li><p>gzip压缩</p>
<ul>
<li>首先，明确gzip是一种压缩格式，需要浏览器支持才有效（不过一般现在浏览器都支持），
而且gzip压缩效率很好（高达70%左右）</li>

</ul>
</li>

</ul>
<p>然后gzip一般是由apache、tomcat等web服务器开启</p>
<p>当然服务器除了gzip外，也还会有其它压缩格式（如deflate，没有gzip高效，且不流行）</p>
<p>所以一般只需要在服务器上开启了gzip压缩，然后之后的请求就都是基于gzip压缩格式的，
非常方便。</p>
<ul>
<li><p>长连接与短连接</p>
<ul>
<li><p>首先看tcp/ip层面的定义：</p>
<ul>
<li>长连接：一个tcp/ip连接上可以连续发送多个数据包，在tcp连接保持期间，如果没有数据包发送，需要双方发检测包以维持此连接，一般需要自己做在线维持（类似于心跳包）</li>
<li>短连接：通信双方有数据交互时，就建立一个tcp连接，数据发送完成后，则断开此tcp连接</li>

</ul>
</li>
<li><p>然后在http层面：</p>
<ul>
<li>http1.0中，默认使用的是短连接，也就是说，浏览器没进行一次http操作，就建立一次连接，任务结束就中断连接，譬如每一个静态资源请求时都是一个单独的连接</li>
<li>http1.1起，默认使用长连接，使用长连接会有这一行Connection: keep-alive，在长连接的情况下，当一个网页打开完成后，客户端和服务端之间用于传输http的tcp连接不会关闭，如果客户端再次访问这个服务器的页面，会继续使用这一条已经建立的连接</li>

</ul>
</li>
<li><p>keep-alive不会永远保持，它有一个持续时间，一般在服务器中配置（如apache），另外长连接需要客户端和服务器都支持时才有效</p>
</li>

</ul>
</li>
<li><p>http 2.0</p>
<ul>
<li><p>http2.0不是https，它相当于是http的下一代规范（譬如https的请求可以是http2.0规范的）</p>
</li>
<li><p>然后简述下http2.0与http1.1的显著不同点：</p>
<ul>
<li>http1.1中，每请求一个资源，都是需要开启一个tcp/ip连接的，所以对应的结果是，每一个资源对应一个tcp/ip请求，由于tcp/ip本身有并发数限制，所以当资源一多，速度就显著慢下来</li>
<li>http2.0中，一个tcp/ip请求可以请求多个资源，也就是说，只要一次tcp/ip请求，就可以请求若干个资源，分割成更小的帧请求，速度明显提升。</li>

</ul>
</li>
<li><p>http2.0的一些特性：</p>
<ul>
<li>多路复用（即一个tcp/ip连接可以请求多个资源）</li>
<li>首部压缩（http头部压缩，减少体积）</li>
<li>二进制分帧（在应用层跟传送层之间增加了一个二进制分帧层，改进传输性能，实现低延迟和高吞吐量）</li>
<li>服务器端推送（服务端可以对客户端的一个请求发出多个响应，可以主动通知客户端）</li>
<li>请求优先级（如果流被赋予了优先级，它就会基于这个优先级来处理，由服务器决定需要多少资源来处理该请求。）</li>

</ul>
</li>

</ul>
</li>
<li><p>https</p>
<ul>
<li><p>https就是安全版本的http，譬如一些支付等操作基本都是基于https的，因为http请求的安全系数太低了。</p>
<ul>
<li>简单来看，https与http的区别就是： 在请求前，会建立ssl链接，确保接下来的通信都是加密的，无法被轻易截取分析</li>

</ul>
</li>
<li><p>SSL/TLS的握手流程，如下（简述）：</p>
<ul>
<li><ol start='' >
<li>浏览器请求建立SSL链接，并向服务端发送一个随机数–Client random和客户端支持的加密方法，比如RSA加密，此时是明文传输。 </li>

</ol>
</li>
<li><ol start='2' >
<li>服务端从中选出一组加密算法与Hash算法，回复一个随机数–Server random，并将自己的身份信息以证书的形式发回给浏览器
（证书里包含了网站地址，非对称加密的公钥，以及证书颁发机构等信息）</li>

</ol>
</li>
<li><ol start='3' >
<li>浏览器收到服务端的证书后</li>

</ol>
<ul>
<li><ul>
<li>验证证书的合法性（颁发机构是否合法，证书中包含的网址是否和正在访问的一样），如果证书信任，则浏览器会显示一个小锁头，否则会有提示</li>

</ul>
</li>
<li><ul>
<li>用户接收证书后（不管信不信任），浏览会生产新的随机数–Premaster secret，然后证书中的公钥以及指定的加密方法加密<code>Premaster secret</code>，发送给服务器。</li>

</ul>
</li>
<li><ul>
<li>利用Client random、Server random和Premaster secret通过一定的算法生成HTTP链接数据传输的对称加密key-<code>session key</code></li>

</ul>
</li>
<li><ul>
<li>使用约定好的HASH算法计算握手消息，并使用生成的<code>session key</code>对消息进行加密，最后将之前生成的所有信息发送给服务端。</li>

</ul>
</li>

</ul>
</li>
<li><ol start='4' >
<li>服务端收到浏览器的回复</li>

</ol>
<ul>
<li><ul>
<li>利用已知的加解密方式与自己的私钥进行解密，获取<code>Premaster secret</code></li>

</ul>
</li>
<li><ul>
<li>和浏览器相同规则生成<code>session key</code></li>

</ul>
</li>
<li><ul>
<li>使用<code>session key</code>解密浏览器发来的握手消息，并验证Hash是否与浏览器发来的一致</li>

</ul>
</li>
<li><ul>
<li>使用<code>session key</code>加密一段握手消息，发送给浏览器</li>

</ul>
</li>

</ul>
</li>
<li><ol start='5' >
<li>浏览器解密并计算握手消息的HASH，如果与服务端发来的HASH一致，此时握手过程结束，</li>

</ol>
</li>

</ul>
</li>

</ul>
</li>
<li><p>单独拎出来的缓存问题，http的缓存</p>
<ul>
<li><p>强缓存与弱缓存</p>
<ul>
<li><p>缓存可以简单的划分成两种类型：强缓存（200 from cache）与协商缓存（304）</p>
<ul>
<li><p>区别简述如下：</p>
<ul>
<li><p>强缓存（200 from cache）时，浏览器如果判断本地缓存未过期，就直接使用，无需发起http请求</p>
<ul>
<li>但是对于强缓存，在未过期时，必须更新资源路径才能发起新的请求（更改了路径相当于是另一个资源了，这也是前端工程化中常用到的技巧）</li>

</ul>
</li>
<li><p>协商缓存（304）时，浏览器会向服务端发起http请求，然后服务端告诉浏览器文件未改变，让浏览器使用本地缓存</p>
<ul>
<li>对于协商缓存，使用Ctrl + F5强制刷新可以使得缓存无效</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>

</ul>
</li>
<li><p>缓存头部简述</p>
<ul>
<li><p>属于强缓存控制的：</p>
<ul>
<li>（http1.1）Cache-Control/Max-Age</li>
<li>（http1.0）Pragma/Expires</li>

</ul>
</li>
<li><p>属于协商缓存控制的：</p>
<ul>
<li>（http1.1）If-None-Match/E-tag</li>
<li>（http1.0）If-Modified-Since/Last-Modified</li>

</ul>
</li>
<li><p>头部的区别</p>
<ul>
<li><p>http1.0中的缓存控制：</p>
<ul>
<li>Pragma：严格来说，它不属于专门的缓存控制头部，但是它设置no-cache时可以让本地强缓存失效（属于编译控制，来实现特定的指令，主要是因为兼容http1.0，所以以前又被大量应用）</li>
<li>Expires：服务端配置的，属于强缓存，用来控制在规定的时间之前，浏览器不会发出请求，而是直接使用本地缓存，注意，Expires一般对应服务器端时间，如Expires：Fri, 30 Oct 1998 14:19:41</li>
<li>If-Modified-Since/Last-Modified：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-Modified-Since，而服务端的是Last-Modified，它的作用是，在发起请求时，如果If-Modified-Since和Last-Modified匹配，那么代表服务器资源并未改变，因此服务端不会返回资源实体，而是只返回头部，通知浏览器可以使用本地缓存。Last-Modified，顾名思义，指的是文件最后的修改时间，而且只能精确到1s以内</li>

</ul>
</li>
<li><p>http1.1中的缓存控制：</p>
<ul>
<li>Cache-Control：缓存控制头部，有no-cache、max-age等多种取值</li>
<li>Max-Age：服务端配置的，用来控制强缓存，在规定的时间之内，浏览器无需发出请求，直接使用本地缓存，注意，Max-Age是Cache-Control头部的值，不是独立的头部，譬如Cache-Control: max-age=3600，而且它值得是绝对时间，由浏览器自己计算</li>
<li>If-None-Match/E-tag：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-None-Match，而服务端的是E-tag，同样，发出请求后，如果If-None-Match和E-tag匹配，则代表内容未变，通知浏览器使用本地缓存，和Last-Modified不同，E-tag更精确，它是类似于指纹一样的东西，基于FileEtag INode Mtime Size生成，也就是说，只要文件变，指纹就会变，而且没有1s精确度的限制。</li>

</ul>
</li>
<li><p>Max-Age相比Expires？</p>
<ul>
<li><p>Expires使用的是服务器端的时间</p>
<ul>
<li>客户端时间和服务端不同步</li>

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
<p>那这样，可能就会出问题了，造成了浏览器本地的缓存无用或者一直无法过期</p>
<p>所以一般http1.1后不推荐使用Expires</p>
<pre><code>			- 而Max-Age使用的是客户端本地时间的计算，因此不会有这个问题
			- 注意，如果同时启用了Cache-Control与Expires，Cache-Control优先级高。

		- E-tag相比Last-Modified？

			- Last-Modified：

				- 表明服务端的文件最后何时改变的
				- 它有一个缺陷就是只能精确到1s，
				- 然后还有一个问题就是有的服务端的文件会周期性的改变，导致缓存失效

			- E-tag：

				- 是一种指纹机制，代表文件相关指纹
				- 只有文件变才会变，也只要文件变就会变，
				- 也没有精确时间的限制，只要文件一遍，立马E-tag就不一样了

			- 如果同时带有E-tag和Last-Modified，服务端会优先检查E-tag
</code></pre>
<h3>解析页面流程</h3>
<ul>
<li><p>流程简述</p>
<ul>
<li><p>浏览器内核拿到内容后，渲染步骤大致可以分为以下几步：</p>
<ul>
<li><ol start='' >
<li>解析HTML，构建DOM树</li>

</ol>
<ul>
<li><p>解析HTML到构建出DOM当然过程可以简述如下：</p>
<ul>
<li><p>Bytes → characters → tokens → nodes → DOM</p>
<ul>
<li><p>譬如假设有这样一个HTML页面：</p>
<ul>
<li></li> 

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

 

 
  <p>Hello <span>web performance</span> students!</p>
  <div><img src="awesome-photo.jpg"></div>
 
 
<pre><code>				- 列举其中的一些重点过程：

					- 1. Conversion转换：浏览器将获得的HTML内容（Bytes）基于他的编码转换为单个字符
					- 2. Tokenizing分词：浏览器按照HTML规范标准将这些字符转换为不同的标记token。每个token都有自己独特的含义以及规则集
					- 3. Lexing词法分析：分词的结果是得到一堆的token，此时把他们转换为对象，这些对象分别定义他们的属性和规则
					- 4. DOM构建：因为HTML标记定义的就是不同标签之间的关系，这个关系就像是一个树形结构一样
					- 例如：body对象的父节点就是HTML对象，然后段略p对象的父节点就是body对象

				- 最后的DOM树如下：

- 2. 解析CSS，生成CSS规则树

	- CSS规则树的生成也是类似。简述为：

		- Bytes → characters → tokens → nodes → CSSOM

			- style.css内容如下：

				- body { font-size: 16px }
</code></pre>
<p>p { font-weight: bold }
span { color: red }
p span { display: none }
img { float: right }</p>
<pre><code>					- 最终的CSSOM树就是：

- 3. 合并DOM树和CSS规则，生成render树

	- 当DOM树和CSSOM都有了后，就要开始构建渲染树了
</code></pre>
</li>

</ul>
<p>一般来说，渲染树和DOM树相对应的，但不是严格意义上的一一对应</p>
<p>因为有一些不可见的DOM元素不会插入到渲染树中，如head这种不可见的标签或者display: none等</p>
<pre><code>	- 4. 布局render树（Layout/reflow），负责各元素尺寸、位置的计算

		- 有了render树，接下来就是开始渲染，基本流程如下：

			- 重要的四个步骤就是：

				- 1. 计算CSS样式
				- 2. 构建渲染树
				- 3. 布局，主要定位坐标和大小，是否换行，各种position overflow z-index属性
				- 4. 绘制，将图像绘制出来

			- 图中的线与箭头代表通过js动态修改了DOM或CSS，导致了重新布局（Layout）或渲染（Repaint）
			- Layout和Repaint的概念是有区别的：

				- Layout，也称为Reflow，即回流。一般意味着元素的内容、结构、位置或尺寸发生了变化，需要重新计算样式和渲染树
				- Repaint，即重绘。意味着元素发生的改变只是影响了元素的一些外观之类的时候（例如，背景色，边框颜色，文字颜色等），此时只需要应用新样式绘制这个元素就可以了

			- 什么会引起回流？

				- 1.页面渲染初始化
				- 2.DOM结构改变，比如删除了某个节点
				- 3.render树变化，比如减少了padding
				- 4.窗口resize
				- 5.最复杂的一种：获取某些属性，引发回流，
</code></pre>
<p>很多浏览器会对回流做优化，会等到数量足够时做一次批处理回流，
但是除了render树的直接变化，当获取一些属性时，浏览器为了获得正确的值也会触发回流，这样使得浏览器优化无效，包括</p>
<pre><code>					-     （1）offset(Top/Left/Width/Height)
					-      (2) scroll(Top/Left/Width/Height)
					-      (3) cilent(Top/Left/Width/Height)
					-      (4) width,height
					-      (5) 调用了getComputedStyle()或者IE的currentStyle

			- 回流优化方案

				- 减少逐项更改样式，最好一次性更改style，或者将样式定义为class并一次性更新
				- 避免循环操作dom，创建一个documentFragment或div，在它上面应用所有DOM操作，最后再把它添加到window.document
				- 避免多次读取offset等属性。无法避免则将它们缓存到变量
				- 将复杂的元素绝对定位或固定定位，使得它脱离文档流，否则回流代价会很高

	- 5. 绘制render树（paint），绘制页面像素信息
	- 6. 浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上
</code></pre>
 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
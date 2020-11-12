<template>
  <div>
    <h4 class="post">
      <header class="post-header">
        <h4 class="post-title">
          从输入 URL 到获取页面的过程 
        </h4>
      </header>
      <div class="post-body">
        <h4 id="正文之前">正文之前</h4>

        <blockquote>
          <p>
            最近正好在学习计算机网络，先整理个最入门，但是包含很多知识点的问题
            —— 从输入域名或 URL
            到获取页面，究竟经历了什么。把这个问题弄懂，也就代表着我们可以初步地明白<strong>网上冲浪</strong>是如何进行的的
          </p>

          <p>
            这个过程，如果要概括，也就几句话的事，但是其中包含的知识点还是比较多的：
          </p>
          <ol>
            <li>域名、URL 和 URI</li>
            <li>域名 和 IP 地址</li>
            <li>DNS 查询</li>
            <li>TCP 连接建立</li>
            <li>HTTP 请求与响应</li>
            <li>TCP 连接关闭</li>
            <li>服务器渲染页面</li>
          </ol>

          <p>
            这篇文章讲述 1、2、3、5 四个部分，关于 TCP
            的部分，由于篇幅较大，需要另起一篇文章
          </p>
        </blockquote>

        <h4 id="正文">正文</h4>

        <h4 id="1-域名url-和-uri">1. 域名、URL 和 URI</h4>

        <p>
          首先要搞清楚这两个概念，<strong>域名</strong>，是一台计算机，或一组计算机在<strong>网络上</strong>的名称。<strong
            >Domain Name</strong
          >，顾名思义，Domain 代表着你的计算机，或者你的计算机组，<strong
            >Name</strong
          >
          就代表着名称
        </p>

        <p>
          关于 URL(Uniform Resource Locator) 和 URI(Uniform Resource
          Identifier)，这两者都是用于定位资源的，区别就是：URI
          是统一资源标志符，单凭 URI
          就能够精准定位某个资源（比如用身份证号就能够识别中国的每一个居民），而
          URL，是统一资源定位符，就是有考虑范围的资源（比如身份证号的前六位，就是根据地区来分的）
        </p>

        <p>
          举个例子：据说全中国有 29
          万个张伟，那么，除了用身份证号来确定是哪一个张伟，还能怎么判断呢？这时候就需要划分地区了，比如福建省福州市的张伟，这时候可能还是有好多个张伟，那就加上比如
          xxxx 年 xx 月 xx
          日出生的张伟，如果这时候还能有重复，那就再加上一些其他条件（学历，政治面貌等等），就能够定位到具体的某一个张伟了，这些条件组合在一起，就是一条
          URL
        </p>

        <p>
          URL 是 URI 的一个子集，每条 URL 都能够定位到一个独一无二的资源，它符合
          URI 的定义，但是 URL != URI，这一点需要记清楚
        </p>

        <p>
          现在回到网页上，域名只是网站的入口（比如说主页），如果你要在这主页上点击一个链接，进行页面跳转，就需要靠
          URL 来指定资源的位置，这样才能获取，如果 URL 无效，就会弹出
          <strong>404 Not Found</strong>，比如你进入
          https://cn.bing.com/，这时候就是依据域名来找到主页，然后你搜索张伟，就会有一条挺长的
          URL 来跳转到搜索结果页面
        </p>

        <h4 id="2-域名-和-ip-地址">2. 域名 和 IP 地址</h4>

        <p>
          前面说到，域名是计算机或计算机组在网络上的名称，但是并不是每一台计算机都有绑定了域名，但是，每一台<strong>接入网络</strong>的计算机都有一个
          IP 地址 (Internet Protocol address)，用这个 IP
          地址就能够定位到一台服务器，或一组服务器，如果服务器没有绑定域名，只要有它的
          IP 地址，还是可以进行访问的
        </p>

        <p>
          我们在上网时，如果要直接访问某个网站，都是输入域名就可以了，但是在定位服务器时，都是要靠
          IP 地址来进行的，从域名到 IP 地址，这二者的转换就引出了一个新的概念 ——
          DNS(Domain Name System)
        </p>

        <p>
          当我们输入域名时，浏览器会根据这个域名在浏览去缓存的 IP
          地址中去查找，如果找不到，就到 OS 中去查找缓存的 IP
          地址，如果还是找不到，就会去 ISP（Internet service
          provider），也就是运营商（电信，铁通之类的）的服务器里查找，如果还是找不到，就要去根域名服务器查找
        </p>

        <p>
          关于运营商域名服务器以及根域名服务器的 IP
          地址，在你电脑的网络设置里可以看到：
        </p>

        <p>
          <img
            src="https://upload-images.jianshu.io/upload_images/3426615-e50598f8b81b8412.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
            alt=""
          />
        </p>

        <p>
          DNS 服务器里有两个 IP 地址，一个是中国电信的
          (ISP)，一个是位于美国的服务器（根域名服务器）
        </p>

        <p>
          <img
            src="https://upload-images.jianshu.io/upload_images/3426615-1a759f618a4f90ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
            alt=""
          />
        </p>

        <p>
          <img
            src="https://upload-images.jianshu.io/upload_images/3426615-bfa0361e4e4e43f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
            alt=""
          />
        </p>

        <p>
          另外，关于 DNS
          缓存，每一次的查询，都会缓存下来，先说浏览器缓存，这里以 Chrome
          为例，输入 <strong>chrome://net-internals/#dns</strong> 就会得到
          Chrome 的 DNS 缓存。然后是 OS 的缓存，在命令行中输入
          <strong>ipconfig /displaydns</strong> 就会得到 OS 中的缓存：
        </p>

        <p>
          <img
            src="https://upload-images.jianshu.io/upload_images/3426615-9f839dd421780b02.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
            alt=""
          />
        </p>

        <h4 id="3-dns-查询">3. DNS 查询</h4>

        <p>
          在说 DNS
          查询之前，需要先说一下域名服务器的种类，有根服务器、顶级域名服务器、权威域名服务器和本地域名服务器
        </p>

        <p>
          在 DNS 查询的时候，首先查询本地域名服务器，也就是 ISP 提供的 DNS
          服务器，如果找不到，这时候就有两种查询方式：
        </p>

        <ol>
          <li>
            递归查询 客户端发出请求，本地 DNS 服务器代替客户端去查询其它 DNS
            服务器，然后由本地 DNS 返回最终结果给客户端
          </li>
          <li>
            迭代查询 本地 DNS
            服务器并不能返回完整的结果，它只能给你一部分信息（比如它只知道要去
            yyy 服务器上才找得到 xxx），然后又带着这个信息去 yyy 服务器上查找
          </li>
        </ol>

        <p>手绘一张草图，意思一下：</p>

        <p>
          <img
            src="https://upload-images.jianshu.io/upload_images/3426615-ba4ea5930ea9512e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
            alt=""
          />
        </p>

        <p>
          至于 DNS 解析，上面介绍的只是最基本的知识，关于
          DNS，还会另起一篇文章来说明
        </p>

        <h4 id="4-tcp-连接建立">4. TCP 连接建立</h4>

        <p>
          在找到目标服务器的 IP
          地址之后，就要开始通信了，既然是通信，就要双方消息同步（如果双方说话都不在一个频道，这不能叫通信），这里就要引出另一个应用层协议
          —— TCP(Transmission Control Protocol)，传输控制协议
        </p>

        <p>TCP 是基于连接的 —— 在通信开始之前建立连接，结束时断开连接</p>

        <h4 id="5-http-请求与响应">5. HTTP 请求与响应</h4>

        <p>
          连接建立之后，就可以开始传输了，采用 Http 协议，这里简单分析一下 Http
          请求和响应的报文：
        </p>

        <p>Http 请求报文，一共有 4 个部分（包含一个空行）：</p>

        <p><strong>1. 请求行 (request-line)</strong></p>

        <p>请求行包含了请求的方法，资源的位置，以及协议的版本，举个例子：</p>

        <p><code class="highlighter-rouge">GET /index.html HTTP/1.1</code></p>

        <p>
          采用 GET 的方式，请求得到 index.html 这个页面，采用 HTTP/1.1
          版本的协议
        </p>

        <p><strong>2. 请求头部 (headers)</strong></p>

        <p>头部是有多个 Key-Value 组成的，常见的有：</p>

        <div class="highlighter-rouge">
          <div class="highlight">
            <pre class="highlight"><code>Accept:xxx （接受的数据类型）
Accept-Charset:xxx （接受的编码格式）
Accept-Language:xxx （接受的语言）
User-Agent:xxx （浏览器类型）
Cookie:xxx=yyy （所使用的 Cookie）
Connection:close/keep-alive （连接状态：关闭/保持连接）
......
</code></pre>
          </div>
        </div>

        <p><strong>3. 空行 (blank line)</strong></p>

        <p>
          这个空行是一定要有的，它是用来区分请求头部和请求数据的，它代表着不再有头部的
          Key-Value 键值对，接下来是请求数据了
        </p>

        <p><strong>4. 请求数据 (request-body)</strong></p>

        <p>
          请求主体一般是用于 POST
          方法提交数据，例如最常见的表单提交，就是在请求主体写入
          <code class="highlighter-rouge"
            >Content-Type= multipart/form-data</code
          >`
        </p>

        <p>Http 响应报文，也是分为 4 个部分（包含一个空行）：</p>

        <p><strong>1. 状态行 (status-line)</strong></p>

        <p>
          状态行中包含着协议版本，状态码以及文本描述，状态码和文本描述就代表了服务器所返回的响应结果是怎样的，这里给出大致的描述：
        </p>

        <div class="highlighter-rouge">
          <div class="highlight">
            <pre class="highlight"><code>2XX：成功
3XX：重定向
4XX：客户端错误
5XX：服务器错误
</code></pre>
          </div>
        </div>

        <p>最常见的就是：200 (OK) 和 404 (Not Found) 了</p>

        <p><strong>2. 响应头部 (headers)</strong></p>

        <p>与请求头部类似，也是 Key-Value 键值对的组合</p>

        <p><strong>3. 空行 (blank line)</strong></p>

        <p>用来分隔响应头部和响应正文</p>

        <p><strong>4. 响应正文</strong></p>

        <p>
          响应正文中，如果之前请求的是数据，就返回数据，如果请求的是网页，就返回
          HTML 代码
        </p>

        <h4 id="6-tcp-连接关闭">6. TCP 连接关闭</h4>

        <p>在通信结束之后，需要将连接关闭，这时候就是 TCP 四次挥手的场景了</p>

        <p>
          从输入 URL
          到获取页面的过程，看上去就短短几个步骤，其中涵盖的知识点还是挺多的，接下来就是
          TCP 的三握四挥以及状态转换图的文章了
        </p>

        <hr />
      </div>
      <footer class="post-footer">
        <div class="post-tags"></div>
        <div class="post-nav">
          <div class="post-nav-next post-nav-item">
            <i class="fa fa-chevron-left"></i>
            <a
              href="https://www.dazhuanlan.com/2020/01/03/5e0f18011ae36/"
              rel="next"
              >本站粒子背景的嵌入心得(暂)｜XiongQi’s Blog</a
            >
          </div>
          <div class="post-nav-prev post-nav-item">
            <a
              href="https://www.dazhuanlan.com/2020/01/03/5e0f17fd24664/"
              rel="prev"
              >Git强制删除提交到远程版本库的数据或版本记录</a
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
              href="https://www.dazhuanlan.com/2019/11/22/5dd75eb724dc5/"
              target="_blank"
              ><span class="crp_title"
                >从输入 URL 到页面加载完成的过程中都发生了什么事情？</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/11/19/5dd3896ac6f2b/"
              target="_blank"
              ><span class="crp_title"
                >从输入 URL 到页面展示到底发生了什么</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/12/05/5de8a3d9ec83d/"
              target="_blank"
              ><span class="crp_title">从输入 URL 到页面加载</span></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/12/06/5de9efdd9515e/"
              target="_blank"
              ><span class="crp_title"
                >TODO 从输入 URL 到页面加载完成的过程中都发生了什么事情？</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/12/30/5e09d77a65fe7/"
              target="_blank"
              ><span class="crp_title"
                >从输入 URL 到页面加载完成的过程中都发生了什么(转自知乎)</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2020/01/02/5e0db9a320de4/"
              target="_blank"
              ><span class="crp_title"
                >「转」从输入 URL 到页面加载的过程 ·
                心有多大，舞台就有多大</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/10/07/5d9a9ef2138b5/"
              target="_blank"
              ><span class="crp_title">TCP 的三握四挥 - 李汉祥的博客</span></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/12/27/5e05c078b330b/"
              target="_blank"
              ><span class="crp_title"
                >二叉树的几种遍历方式（附 LeetCode 水题） - 李汉祥的博客</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2019/12/30/5e09815a1218d/"
              target="_blank"
              ><span class="crp_title"
                >Java基础知识梳理（六）—— 初识 HashMap - 李汉祥的博客</span
              ></a
            >
          </li>
          <li>
            <a
              href="https://www.dazhuanlan.com/2020/01/03/5e0ec33826c6c/"
              target="_blank"
              ><span class="crp_title"
                >Java基础知识梳理（五）从源码了解字符串 - 李汉祥的博客</span
              ></a
            >
          </li>
        </ul>
        <div class="crp_clear"></div>
      </div>
    </h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

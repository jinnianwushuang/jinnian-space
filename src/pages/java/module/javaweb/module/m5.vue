<!--
 * @Date           : 2021-04-12 18:33:22
 * @FilePath       : /jinnian-space/src/pages/java/module/javaweb/module/m5.vue
 * @Description    : 
-->
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/module/m3.vue
 * @Description    : 
-->
<template>
  <div>
    <div>JSP</div>
    <pre>
            jsp
            java 表达式 % %   %-%  %@%  %!%
            jsp 表达式 %= %
            四大域对象： 页面域 pageContext ，请求域 ServletRequest ，会话域 HttpSession，应用域 ServletContext
            EL 表达式 ${} 直接从 各域对象找值 ,只要域对象中有就可以

        </pre
    >
    <div style="width:100%;float:left;" class="article-content">
      <input type="hidden" name="article_id" id="article_id" value="12156" />
      <input type="hidden" name="catid" id="catid" value="0" />

      <p>
        在本章中，我们将讨论和学习JSP中的隐式对象。这些对象是JSP容器为每个页面中的开发人员提供的Java对象，开发人员可以直接调用它们而不用显式地声明它们再调用。
        JSP隐式对象也称为预定义变量。
      </p>
      <p>下表列出了JSP支持的九个隐式对象 -</p>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>对象</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><code>request</code></td>
            <td>这是与请求相关联的<code>HttpServletRequest</code>对象。</td>
          </tr>
          <tr>
            <td>2</td>
            <td><code>response</code></td>
            <td>
              这是与客户端的响应关联的<code>HttpServletResponse</code>对象。
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td><code>out</code></td>
            <td>这是用于将输出发送到客户端的<code>PrintWriter</code>对象。</td>
          </tr>
          <tr>
            <td>4</td>
            <td><code>session</code></td>
            <td>这是与请求相关联的<code>HttpSession</code>对象。</td>
          </tr>
          <tr>
            <td>5</td>
            <td><code>application</code></td>
            <td>
              这是与应用程序上下文相关联的<code>ServletContext</code>对象。
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td><code>config</code></td>
            <td>这是与该页面相关联的<code>ServletConfig</code>对象。</td>
          </tr>
          <tr>
            <td>7</td>
            <td><code>pageContext</code></td>
            <td>
              这封装了使用服务器特定的功能，如更高性能的<code>JspWriter</code>。
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td><code>page</code></td>
            <td>这只是一个同义词，用于调用由翻译的servlet类定义的方法。</td>
          </tr>
          <tr>
            <td>9</td>
            <td><code>Exception</code></td>
            <td><code>Exception</code>对象允许指定的JSP访问异常数据。</td>
          </tr>
        </tbody>
      </table>

         <div class="table-wrapper">
      <table style="height: 230px; width: 486px" border="0">
        <tbody>
          <tr>
            <td style="text-align: center">编号</td>
            <td style="text-align: center">对象</td>
            <td style="text-align: center">所属作用域</td>
            <td style="text-align: center">作用域描述</td>
          </tr>
          <tr>
            <td style="text-align: center">1</td>
            <td style="text-align: center"><strong>request</strong></td>
            <td style="text-align: center"><strong>request</strong></td>
            <td style="text-align: center">
              在当前<strong>请求</strong>中有效
            </td>
          </tr>
          <tr>
            <td style="text-align: center">2</td>
            <td style="text-align: center"><strong>response</strong></td>
            <td style="text-align: center"><strong>page</strong></td>
            <td style="text-align: center">在当前<strong>页面</strong>有效</td>
          </tr>
          <tr>
            <td style="text-align: center">3</td>
            <td style="text-align: center"><strong>out</strong></td>
            <td style="text-align: center"><strong>page</strong></td>
            <td style="text-align: center">在当前<strong>页面</strong>有效</td>
          </tr>
          <tr>
            <td style="text-align: center">4</td>
            <td style="text-align: center"><strong>session</strong></td>
            <td style="text-align: center"><strong>session</strong></td>
            <td style="text-align: center">
              在当前<strong>会话</strong>中有效
            </td>
          </tr>
          <tr>
            <td style="text-align: center">5</td>
            <td style="text-align: center"><strong>application</strong></td>
            <td style="text-align: center"><strong>application</strong></td>
            <td style="text-align: center">
              在所有<strong>应用程序</strong>中有效
            </td>
          </tr>
          <tr>
            <td style="text-align: center">6</td>
            <td style="text-align: center"><strong>config</strong></td>
            <td style="text-align: center"><strong>page</strong></td>
            <td style="text-align: center">在当前<strong>页面</strong>有效</td>
          </tr>
          <tr>
            <td style="text-align: center">7</td>
            <td style="text-align: center"><strong>pageContext</strong></td>
            <td style="text-align: center"><strong>page</strong></td>
            <td style="text-align: center">在当前<strong>页面</strong>有效</td>
          </tr>
          <tr>
            <td style="text-align: center">8</td>
            <td style="text-align: center"><strong>page</strong></td>
            <td style="text-align: center"><strong>page</strong></td>
            <td style="text-align: center">在当前<strong>页面</strong>有效</td>
          </tr>
          <tr>
            <td style="text-align: center">9</td>
            <td style="text-align: center"><strong>Exception</strong></td>
            <td style="text-align: center"><strong>page</strong></td>
            <td style="text-align: center">在当前<strong>页面</strong>有效</td>
          </tr>
        </tbody>
      </table>
    </div>
      <h2 id="h2-1-request-">
        <a name="1. request对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>1. request对象
      </h2>
      <p>
        <code>request</code
        >对象是<code>javax.servlet.http.HttpServletRequest</code>对象的一个实例。每当客户端请求页面时，JSP引擎将创建一个新对象来表示该请求。
      </p>
      <p>
        <code>request</code
        >对象提供了获取包括表单数据，Cookie，HTTP方法等HTTP头信息的方法。
      </p>
   
      <h2 id="h2-2-response-">
        <a name="2. response对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>2. response对象
      </h2>
      <p>
        <code>response</code
        >对象是<code>javax.servlet.http.HttpServletResponse</code>对象的一个实例。就像服务器创建<code>request</code>对象一样，它还创建一个对象来表示对客户端的响应。
      </p>
      <p>
        <code>response</code
        >对象还定义了处理创建新HTTP头的接口。通过此对象，JSP程序员可以添加新的Cookie或日期戳，HTTP状态代码等。
      </p>
 
      <h2 id="h2-3-out-">
        <a name="3. out对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>3. out对象
      </h2>
      <p>
        <code>out</code
        >隐式对象是<code>javax.servlet.jsp.JspWriter</code>对象的一个实例，用于在响应中发送内容。
      </p>
      <p>
        初始化<code>JspWriter</code>对象根据页面是否缓存而不同地实例化。缓冲可以通过使用<code>page</code>指令的<code
          >buffered ='false'</code
        >属性来关闭。
      </p>
      <p>
        <code>JspWriter</code
        >对象包含与<code>java.io.PrintWriter</code>类大部分相同的方法。但是，<code>JspWriter</code>还有一些额外的方法用来处理缓冲。与<code>PrintWriter</code>对象不同，<code>JspWriter</code>会抛出<code>IOExceptions</code>异常。
      </p>
      <p>
        下表列出了用于写入<code>boolean</code>，<code>char</code>，<code>int</code>，<code>double</code>，<code>object</code>，<code>String</code>等类型数据的重要方法。
      </p>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>方法</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><code>out.print(dataType dt)</code></td>
            <td>打印数据类型值</td>
          </tr>
          <tr>
            <td>2</td>
            <td><code>out.println(dataType dt)</code></td>
            <td>打印数据类型值，然后用新行(换行)字符终止行。</td>
          </tr>
          <tr>
            <td>3</td>
            <td><code>out.flush()</code></td>
            <td>刷新流</td>
          </tr>
        </tbody>
      </table>
      <h2 id="h2-4-session-">
        <a name="4. session对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>4. session对象
      </h2>
      <p>
        <code>session</code
        >对象是<code>javax.servlet.http.HttpSession</code>的一个实例，其行为与Java
        Servlet下的会话对象行为完全相同。<br /><code>session</code
        >对象用于跟踪客户端请求之间的客户端会话。 
      </p>
      <h2 id="h2-5-application-">
        <a name="5. application对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>5.
        application对象
      </h2>
      <p>
        <code>application</code
        >对象是生成的<code>Servlet</code>的<code>ServletContext</code>对象的直接包装，实际上是<code>javax.servlet.ServletContext</code>对象的一个实例。
      </p>
      <p>
        <code>application</code>对象是JSP页面在其整个生命周期中的表示。
        当JSP页面被初始化时，将创建此对象，并且在JSP页面被<code>jspDestroy()</code>方法删除时<code>application</code>对象也将被删除。
      </p>
      <p>
        通过向<code>application</code>对象添加属性值，可以确保组成Web应用程序的所有JSP文件都可以访问它。
      </p>
  
      <h2 id="h2-6-config-">
        <a name="6. config对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>6. config对象
      </h2>
      <p>
        <code>config</code
        >对象是<code>javax.servlet.ServletConfig</code>的实例化，是生成的servlet的<code>ServletConfig</code>对象周围的直接包装。
      </p>
      <p>
        该对象允许JSP程序员访问Servlet或JSP引擎初始化参数，例如：路径或文件位置等。<br />以下配置方法是唯一可以使用的配置方法，它的用法是非常简单的
        -
      </p>
      <pre
        class="language-java code-toolbar"
      ><code class=" language-java">config<span class="token punctuation">.</span><span class="token function">getServletName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code><div class="toolbar"><div class="toolbar-item"><span>Java</span></div></div></pre>
      <p>
        这将返回当前<code>servlet</code>名称，它是包含在<code>WEB-INF\web.xml</code>文件中定义的<code>&lt;servlet-name&gt;</code>元素中的字符串。
      </p>
      <h2 id="h2-7-pagecontext-">
        <a name="7. pageContext对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>7.
        pageContext对象
      </h2>
      <p>
        <code>pageContext</code
        >对象是<code>javax.servlet.jsp.PageContext</code>对象的一个实例。<code>pageContext</code>对象用于表示整个JSP页面。
      </p>
      <p>
        <code>pageContext</code
        >对象旨在作为访问有关页面的信息的一种手段，同时避免大部分实现细节。<br />该对象存储对每个请求的请求和响应对象的引用。应用程序，配置，会话和输出对象是通过访问此对象的属性导出的。
      </p>
      <p>
        <code>pageContext</code
        >对象还包含有关发布到JSP页面的指令的信息，包括缓冲信息，<code>errorPageURL</code>和页面范围。
      </p>
      <p>
        <code>PageContext</code
        >类定义了几个字段，包括：<code>PAGE_SCOPE</code>，<code>REQUEST_SCOPE</code>，<code>SESSION_SCOPE</code>和<code>APPLICATION_SCOPE</code>，它们标识了四个范围。它还支持超过<code>40</code>种方法，其中约一半是从<code>javax.servlet.jsp.JspContext</code>类继承的。
      </p>
      <p>
        其中一个重要的方法是<code>removeAttribute</code>。
        此方法接受一个或两个参数。
        例如，<code>pageContext.removeAttribute("attrName")</code>从所有作用域中删除属性，而以下代码仅将其从页面范围中删除
        -
      </p>
      <pre
        class="language-java code-toolbar"
      ><code class=" language-java">pageContext<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">"attrName"</span><span class="token punctuation">,</span> PAGE_SCOPE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code><div class="toolbar"><div class="toolbar-item"><span>Java</span></div></div></pre>
 
      <h2 id="h2-8-page-">
        <a name="8. page对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>8. page对象
      </h2>
      <p>
        <code>page</code
        >对象是对该页面实例的实际引用。可以认为它是表示整个JSP页面的对象。
      </p>
      <p><code>page</code>对象是<code>this</code>对象的直接同义词。</p>
      <h2 id="h2-9-exception-">
        <a name="9. exception对象" class="reference-link"></a
        ><span class="header-link octicon octicon-link"></span>9. exception对象
      </h2>
      <p>
        <code>exception</code
        >对象是一个包含上一页抛出的异常的包装器。它通常用于生成对错误条件的适当响应。
      </p>
   

      <br />
    </div>
    <h4>JSP 标准标签库（JSTL）</h4>
    <div> <a href="https://www.runoob.com/jsp/jsp-jstl.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/jsp/jsp-jstl.html</a> </div>
 
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

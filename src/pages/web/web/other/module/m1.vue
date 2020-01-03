<template>
  <div>
    <article class="post">
      <header class="post-header">
        <h4 class="post-title">
          前端测试、性能监测、自动化集成方案
        </h4>
      </header>
      <div class="post-body">
        <h5 id="一、前端性能监测方案">
          <a
            href="#一、前端性能监测方案"
            class="headerlink"
            title="一、前端性能监测方案"
          ></a
          >一、前端性能监测方案
        </h5>
        <p><strong>性能监测：</strong></p>
        <ol>
          <li>
            <p>
              <strong>chrome 的 performance：</strong><br />DNS 查询耗时
              ：domainLookupEnd - domainLookupStart<br />TCP 链接耗时
              ：connectEnd - connectStart
            </p>

            <p>
              request 请求耗时 ：responseEnd - responseStart<br />解析 dom
              树耗时 ： domComplete - domInteractive<br />白屏时间
              ：responseStart - navigationStart<br />domready
              时间(用户可操作时间节点) ：domContentLoadedEventEnd -
              navigationStart<br />onload 时间(总下载时间) ：loadEventEnd -
              navigationStart<br />获取所有资源请求的时间数据,这个函数返回一个按
              startTime 排序的对象数组 getEntries: ƒ getEntries()
            </p>
          </li>
          <li>
            <p><strong>Google 的 Lighthouse 插件</strong></p>
          </li>
          <li>
            <p>
              <strong
                >网页性能测试分析工具-PageSpeed Insights （插件）、Page Speed
                Online（网页）</strong
              ><br />Pagespeed 测试工具出自
              google，通过分析网页的内容来提供网站加载速度优化建议。PageSpeed
              Insights 是一款可以分析网页打开速度的谷歌浏览器插件，通过
              PageSpeed Insights
              插件的分析并给出相应的优化建议，网站开发人员可以找出网站速度的瓶颈所在，并相应的网站优化，带给用户更好的用户体验。
            </p>
          </li>
          <li>
            <p><strong>Yslow</strong></p>
          </li>
          <li>
            <p>
              <strong>Pingdom：</strong
              >测试网站所有对象的加载时间（HTML，images，JavaScript，CSS，嵌入式框架等）。
              您还可以检查网站每个元素的加载速度并改善加载缓慢的项目。
              在测试结果中，可以看到网站每个元素的加载时间报告，元素的大小和元素的总数量。
            </p>
          </li>
          <li>
            <p>
              <strong>GTmetrix：</strong>结合了最流行的 Firefox 性能组件 YSlow
              的和谷歌网页速度测试工具。 Gtmetrix
              给你提供改进网站速度的建议，虽然 YSlow
              的和谷歌网页的速度测试的建议是针对 Firefox
              的，也可以适用于其他浏览器。
            </p>
          </li>
          <li>
            <p>
              <strong>Light Speed Now</strong
              ><br />测试你的网站的速度性能，并把测试报告发送给到你的邮箱。
            </p>
          </li>
          <li>
            <p>
              <strong>Load Impact</strong><br />Loadimpact
              对于一个每天有成千上万的游客访问的大型网站来说是个非常重要的工具。
              一个免费帐户允许你模拟 50
              个用户访问的压力测试，还要更多的话你就必须升级高级账号。
            </p>
          </li>
          <li>
            <p>
              <strong>Site-Perf</strong><br />它模拟浏览器下载图片，CSS，JS
              和其他文件，在报告中你可以看到先加载网站的哪些页以及加载时间。
              这是十分有用的性能报告，可以用来查找到提高你的网站的载入速度需要改善的元素。
            </p>
          </li>
        </ol>
        <h5 id="二、前端单元测试和持续集成">
          <a
            href="#二、前端单元测试和持续集成"
            class="headerlink"
            title="二、前端单元测试和持续集成"
          ></a
          >二、前端单元测试和持续集成
        </h5>
        <p>一个测试体系大体应该包含四部分</p>
        <ul>
          <li>测试运行器 Test Runner: edp-test karma</li>
          <li>测试框架 Testing Framework: jasmine mocha qunit Jest</li>
          <li>断言库 Assertion library: expect.js should chai</li>
          <li>覆盖率 Coverage library: istanbul</li>
        </ul>
        <p><strong>Mocha/Karma+Travis.CI 的前端测试工作流</strong></p>
        <ol>
          <li>
            <strong>mocha</strong>
            是一个功能丰富的前端测试框架。所谓”测试框架”，就是运行测试的工具。通过它，可以为
            JavaScript 应用添加测试，从而保证代码的质量。mocha 既可以基于
            Node.js 环境运行
            也可以在浏览器环境运行。欲了解更多可去官方网站进行学习。
          </li>
          <li>
            <strong>Karma</strong>：一个基于 Node.js 的 JavaScript
            测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流 Web
            浏览器，也可集成到 CI（Continuous
            integration）工具，也可和其他代码编辑器一起使用。这个测试工具的一个强大特性就是，它可以监控文件的变化，然后自行执行，通过
            console.log 显示测试结果。Karma
            的一个强大特性就是，它可以监控一套文件的变换，并立即开始测试已保存的文件，用户无需离开文本编辑器。测试结果通常显示在命令行中，而非代码编辑器。这也就让
            Karma 基本可以和任何 JS 编辑器一起使用。
          </li>
          <li>
            <strong>Travis.CI:</strong> 提供的是持续集成服务（Continuous
            Integration，简称 CI）。它绑定 Github
            上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。
          </li>
        </ol>
      </div>
      <footer class="post-footer">
        <div class="post-tags"></div>
        <div class="post-nav">
          <div class="post-nav-next post-nav-item">
            <i class="fa fa-chevron-left"></i>
            <a
              href="https://www.dazhuanlan.com/2019/11/03/5dbe6b5ecbdd4/"
              rel="next"
              >Hexo</a
            >
          </div>
          <div class="post-nav-prev post-nav-item">
            <a
              href="https://www.dazhuanlan.com/2019/11/03/5dbe6b271cc66/"
              rel="prev"
              >源码看JAVA【二十九】AtomicLong</a
            >
            <i class="fa fa-chevron-right"></i>
          </div>
        </div>
      </footer>
      <div id="crp_related"></div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

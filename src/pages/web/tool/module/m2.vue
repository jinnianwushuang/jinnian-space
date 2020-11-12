<template>
    <div>
<h1>webpack</h1>
<h2>Webpack4.0</h2>
<h3>Webpack初探</h3>
<ul>
<li><p>webpack安装方式</p>
<ul>
<li>全局安装：npm install webpack -g</li>
<li>局部安装：npm instatll webpack -D</li>
<li>安装指定版本：npm intatll webpack@版本号</li>
</ul>
</li>
<li><p>webpack配置</p>
<ul>
<li><p>默认配置文件webpack.config.js</p>
<ul>
<li>node核心模块path</li>
<li>局部安装运行打包，npx webpack</li>
<li>// 文件内容
const path = require(&#39;path&#39;);
module.exports = {
entry: &#39;./index.js&#39;,
output: {
    filename: &#39;bundle.js&#39;,
    path: path.resolve(__dirname, &#39;bundle&#39;)
}
}</li>
</ul>
</li>
<li><p>以webpackconfig.js为配置文件进行打包： npx webpack --config webpackconfig.js</p>
</li>
<li><p>运行webpack</p>
<ul>
<li>全局安装时，webpack index.js</li>
<li>局部安装时，npx webpack index.js</li>
<li>在package.json的scripts中简化打包命令后，npm run bundle -&gt; webpack</li>
</ul>
</li>
<li><p>webpack-cli作用：在命令行中使用webpack</p>
</li>
</ul>
</li>
<li><p>浅析webpack打包输出内容</p>
<ul>
<li><p>在配置文件中，增加mode配置</p>
<ul>
<li>mode为production时，打包文件压缩</li>
<li>mode为development时，打包文件不压缩</li>
<li>mode默认为production，配置文件中没有mode配置，打包代码时会出现警告</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>Webpack的核心概念</h3>
<ul>
<li><p>loader预处理文件，可以打包除js之外的任何静态资源</p>
<ul>
<li><p>打包图片资源</p>
<ul>
<li><p>file-loader</p>
<ul>
<li><p>配置项：options</p>
<ul>
<li>name</li>
<li>outputPath</li>
</ul>
</li>
<li><p>占位符：placeholders</p>
<ul>
<li>文件名称：[name]</li>
<li>文件后缀：[ext]</li>
<li>hash值：[hash]</li>
</ul>
</li>
</ul>
</li>
<li><p>url-loader</p>
<ul>
<li>与file-loader功能类似</li>
<li>比file-loader多一个limit配置项，大于limit值，与file-loader功能一样单独打包；小于limit值，以base64形式打包进js文件</li>
</ul>
</li>
</ul>
</li>
<li><p>打包样式资源</p>
<ul>
<li><p>style-loader</p>
<ul>
<li>将JS字符串生成为style节点</li>
</ul>
</li>
<li><p>css-loader</p>
<ul>
<li><p>作用：将CSS转化成CommonJS模块</p>
</li>
<li><p>options</p>
<ul>
<li>局部作用域css：modules</li>
<li>在css-loader前应用的loader的数量：importLoaders</li>
</ul>
</li>
</ul>
</li>
<li><p>postcss-loader</p>
</li>
<li><p>sass-loader</p>
<ul>
<li>将Sass编译成CSS</li>
</ul>
</li>
<li><p>less-loader</p>
<ul>
<li>将Less编译成CSS</li>
</ul>
</li>
</ul>
</li>
<li><p>打包字体资源</p>
<ul>
<li>file-loader</li>
</ul>
</li>
</ul>
</li>
<li><p>plugins可以在webpack运行到某个时刻的时候，帮你做一些事情</p>
<ul>
<li>htmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中</li>
<li>cleanWebpackPlugin在打包之前删除打包输出文件夹（dist）</li>
<li>学习plugin：谷歌或百度所需功能需要使用plugin，查找相关api学习使用</li>
</ul>
</li>
<li><p>entry与output</p>
<ul>
<li><p>entry</p>
<ul>
<li>{
main: &#39;./src/index.js&#39;,
sub: &#39;./src/index.js&#39;
}</li>
</ul>
</li>
<li><p>output</p>
<ul>
<li>filename：&#39;[name].js&#39;，占位符[name]表示输出文件名称与entry的key值一致</li>
<li>publicPath：指定在浏览器中引用时输出目录的公共url，如<a href='http://www.cdn.com/main.js' target='_blank' class='url'>http://www.cdn.com/main.js</a>，<a href='http://www.cdn.com/sub.js' target='_blank' class='url'>http://www.cdn.com/sub.js</a></li>
</ul>
</li>
</ul>
</li>
<li><p>sourceMap映射打包文件与原始文件关系</p>
<ul>
<li>devtool: &#39;none&#39;，有错误信息时显示在dist文件夹下文件中的报错位置</li>
<li>devtool: &#39;source-map&#39;，生成映射关系文件，有错误信息时显示在源文件中的报错位置</li>
<li>devtool: &#39;inline-source-map&#39;，在打包文件最后生成映射关系字符串</li>
<li>devtool: &#39;cheap-module-eval-source-map&#39;（devlopment环境使用）</li>
<li>devtool: &#39;cheap-module-source-map&#39;（production环境使用）</li>
</ul>
</li>
<li><p>WebpackDevServer提升开发效率</p>
<ul>
<li><p>webpack --watch   监控到webpack打包代码变化，自动执行打包过程，不会起一个服务器，不能进行ajax调试，不能自动打开浏览器</p>
</li>
<li><p>安装webpack-dev-server模块</p>
</li>
<li><p>webpack-dev-server --open     启动服务器，监听代码变化，自动刷新浏览器</p>
</li>
<li><p>不用WebpackDevServer，使用webpack-dev-middleware配合express自己写WebpackDevServer</p>
</li>
<li><p>使用webpack的两种方式</p>
<ul>
<li>在node中使用webpack</li>
<li>在命令行中使用webpack</li>
</ul>
</li>
</ul>
</li>
<li><p>Hot Module Replacement</p>
<ul>
<li>在devServer中设置hot，hotOnly</li>
<li>在plugins中引入HotModuleReplacementPlugin</li>
<li>要通过import引入文件，通过require引入文件HMR失效</li>
<li>module.hot.accept</li>
</ul>
</li>
<li><p>使用Babel处理ES6语法</p>
<ul>
<li><p>babel官网：<a href='https://babeljs.io' target='_blank' class='url'>https://babeljs.io</a></p>
</li>
<li><p>Setup中查找webpack，参照文档在webpack中使用babel</p>
</li>
<li><p>将ES6转成ES5</p>
<ul>
<li><p>业务代码引入polyfill</p>
<ul>
<li>在Docs中找到polyfill，参照文档引入polyfill</li>
<li>在presets中使用配置useBuiltIns: &#39;usage&#39;，根据需要引入polyfill内容</li>
</ul>
</li>
<li><p>在库项目代码/类库中使用transform-runtime，避免polyfill问题，polyfill污染全局环境，plugin-transform-runtime以闭包形式注入/间接帮助组件引入对应内容，不存在全局污染概念</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>Webpack的高级概念</h3>
<ul>
<li><p>Tree Shaking</p>
<ul>
<li><p>引入模块时，不引入所有代码，只引入需要代码</p>
</li>
<li><p>只支持ES Module引入</p>
</li>
<li><p>模式</p>
<ul>
<li><p>development</p>
<ul>
<li>// webpack.config.js中配置
optimization: {
usedExports: true
}</li>
<li>// pacakge.js中配置
&quot;sideEffects&quot;: false</li>
</ul>
</li>
<li><p>production</p>
<ul>
<li>// webpack.config.js中修改配置
devtool: &#39;cheap-module-source-map&#39;</li>
<li>// pacakge.js中配置
&quot;sideEffects&quot;: false</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>Development和Production模式的区分打包</p>
<ul>
<li>根据开发环境与生产环境创建不同配置文件，提取公共文件</li>
<li>webpack-merge模块合并公共配置文件与不同模式文件</li>
</ul>
</li>
<li><p>Webpack 和Code Splitting</p>
<ul>
<li><p>同步代码分割：optimization配置</p>
</li>
<li><p>异步代码分割</p>
<ul>
<li>安装模块：babel-plugin-dynamic-import-webpack</li>
<li>.babelrc中配置：plugins: [&quot;dynamic-import-webpack&quot;]</li>
</ul>
</li>
</ul>
</li>
<li><p>SplitChunksPlugin配置参数详解</p>
</li>
<li><p>Lazy Loading懒加载</p>
</li>
</ul>
<h2>Webpack 4.0基本配置</h2>
<h3>entry</h3>
<ul>
<li><p>作用：指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始</p>
</li>
<li><p>配置</p>
<ul>
<li><p>单入口</p>
</li>
<li><p>多入口</p>
<ul>
<li>entry</li>
<li>new HtmlWebpackPlugin()</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>output</h3>
<ul>
<li><p>作用：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件</p>
</li>
<li><p>配置</p>
<ul>
<li><p>path : 想要bundle生成到哪里</p>
<ul>
<li>原理：path模块是一个Node.js核心模块，用于操作文件路径</li>
</ul>
</li>
<li><p>filename:告诉webpack bundle的名称</p>
</li>
</ul>
</li>
<li><p>常见使用场景</p>
<ul>
<li><p>自动生成引用所有打包完的output JS的HTML入口文件</p>
<ul>
<li>html-webpack-plugin</li>
</ul>
</li>
<li><p>清除打包文件</p>
<ul>
<li>clean-webpack-plugin</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>loader</h3>
<ul>
<li><p>作用：让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）</p>
</li>
<li><p>配置</p>
<ul>
<li>test：用于标识出应该被对应的 loader 进行转换的某个或某些文件</li>
<li>use : 表示进行转换时，应该使用哪个 loader</li>
</ul>
</li>
<li><p>常见使用场景</p>
<ul>
<li><p>加载 CSS</p>
<ul>
<li><p>style-loader</p>
<ul>
<li>将所有的样式嵌入到dom的style属性当中</li>
</ul>
</li>
<li><p>css-loader</p>
<ul>
<li>将css当中的 @import 和 url(...) 解析成 import / require 引入</li>
</ul>
</li>
<li><p>sass-loader</p>
<ul>
<li>将代码sass编译成css</li>
</ul>
</li>
</ul>
</li>
<li><p>加载图片/字体</p>
<ul>
<li>file-loader</li>
</ul>
</li>
<li><p>加载数据文件（(JSON, CSV, TSV, XML）</p>
<ul>
<li>csv-loader（csv|tsv）</li>
<li>xml-loader（xml）</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>plugins</h3>
<ul>
<li><p>作用：插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。</p>
</li>
<li><p>配置</p>
<ul>
<li><p>plugins：想使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中</p>
<ul>
<li>new : 通过new操作符来创建一个插件的实例  如 ： new HtmlWebpackPlugin({template: &#39;./src/index.html&#39;})</li>
<li>option : 多数插件可以通过选项(option)来自定义   如：new webpack.optimize.UglifyJsPlugin()</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>mode</h3>
<ul>
<li><p>作用：设置mode参数，来启用相应模式下的webpack内置的优化</p>
</li>
<li><p>配置</p>
<ul>
<li>development</li>
<li>production</li>
</ul>
</li>
</ul>
<h3>devtool</h3>
<ul>
<li><p>常见使用场景</p>
<ul>
<li><p>找到报错源文件的位置</p>
<ul>
<li>inline-source-map</li>
</ul>
</li>
<li><p>webpack自动重新编译修改后的模块,但是要手动刷新页面</p>
<ul>
<li>webpack --watch</li>
</ul>
</li>
<li><p>实时重新加载(live reloading)</p>
<ul>
<li>webpack-dev-server</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>devServer</h3>
<h2>Webpack核心概念</h2>
<h3>核心概念</h3>
<ul>
<li><p>Webpack 启动后会从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。 每找到一个 Module， 就会根据配置的Loader去找出对应的转换规则，对 Module 进行转换后，再解析出当前 Module 依赖的 Module。 这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。最后 Webpack 会把所有 Chunk 转换成文件输出。 在整个流程中 Webpack 会在恰当的时机执行 Plugin 里定义的逻辑。</p>
</li>
<li><p>Entry</p>
<ul>
<li>入口，webpack执行构建的第一步将从Entry开始，可抽象理解为输入</li>
</ul>
</li>
<li><p>Module</p>
<ul>
<li>模块，在webpacl中一切皆为模块，一个模块对应一个文件，webpack会从配置的Entry开始递归找出所有依赖的模块</li>
</ul>
</li>
<li><p>Chunk</p>
<ul>
<li>代码块，一个chunk由多个模块组合而成，用于将代码合并和分割</li>
</ul>
</li>
<li><p>Loader</p>
<ul>
<li>模块转换器，用于把模块原内容按照需求转换为需要的新内容</li>
</ul>
</li>
<li><p>Plugin</p>
<ul>
<li>扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果和想要做的事情</li>
</ul>
</li>
<li><p>Output</p>
<ul>
<li>输入结果，在webpack经过一系列处理并得到最终想要的代码然后输出结果</li>
</ul>
</li>
</ul>
<h3>详细拆分</h3>
<ul>
<li><p>1.Entry</p>
<ul>
<li><p>context</p>
<ul>
<li>用来解决配置文件和入口文件不再同一层结构，列如我们配置文件在config，入口文件在根目录，则如下配置</li>
</ul>
</li>
<li><p>单页面(SPA)Entry入口</p>
<ul>
<li>最简单的单页面(SPA)Entry入口，将main.js引入，并根据main.js中引用和依赖的模块开始解析</li>
</ul>
</li>
<li><p>多页面(MPA)Entry入口</p>
<ul>
<li>多页面(MPA)Entry入口，将多个文件引入，当然一般是读取指定文件夹内的入口文件，然后引入</li>
<li>如果是单页面(传入的是字符串或字符串数组)，则chunk会被命名为main，如果是多页面(传入一个对象)，则每个键(key)会是chunk的名称，描述了chunk的入口起点</li>
</ul>
</li>
</ul>
</li>
<li><p>2.Output</p>
<ul>
<li><p>初步了解</p>
<ul>
<li>Object类型， 指示webpack如何去输出，以及在哪里输出你的bundle、asset 和其他你所打包或使用 webpack 载入的任何内容</li>
</ul>
</li>
<li><p>path</p>
<ul>
<li>输出目录对应一个绝对路径</li>
</ul>
</li>
<li><p>pathinfo</p>
<ul>
<li>boolean类型， 默认false，作用是告诉webpack在bundle中引入所包含模块信息的相关注释，不应用于生产环境(production)，对开发环境(development)极其有用</li>
</ul>
</li>
<li><p>publicPath</p>
<ul>
<li>主要作用是针对打包后的文件里面的静态文件路径处理</li>
</ul>
</li>
<li><p>filename</p>
<ul>
<li><p>定义每个输出bundle的名称，这些bundle将写入output.path选项指定的目录下</p>
</li>
<li><p>（1）单入口</p>
<ul>
<li>对于单入口Entry，filename是一个静态名称</li>
</ul>
</li>
<li><p>（2）多入口</p>
<ul>
<li>但是在webpack中我们会用到代码拆分、各种插件plugin或多入口Entry创建多个bundle，这样我们就应该给每个bundle一个唯一的名称</li>
</ul>
</li>
<li><p>（3）使用内部chunk id</p>
</li>
<li><p>（4）唯一hash生成</p>
</li>
<li><p>（5）使用基于每个 chunk 内容的 hash</p>
</li>
</ul>
</li>
</ul>
</li>
<li><p>3.Module模块</p>
<ul>
<li><p>初步了解</p>
<ul>
<li>处理项目中应用的不同模块，主要配置皆在Rules中，匹配到请求的规则数组，这些规则能够对模块应用loader，或者修改解析器parser</li>
</ul>
</li>
<li><p>Module.noParse</p>
<ul>
<li>防止webpack解析的时候，将规则匹配成功的文件进行解析和忽略大型的library来对性能的优化，在被忽略的文件中不应该含有import、require和define的调用</li>
</ul>
</li>
<li><p>Rules</p>
<ul>
<li><p>创建模块时，匹配请求的规则数组</p>
</li>
<li><p>Rule条件</p>
<ul>
<li><p>resource(请求文件的绝对路径)、issuer(被请求资源的模块文件的绝对路径，导入时的位置)，比如一个文件A导入文件B，resource是/B，issuer是/A是导入文件时的位置，而不是真正的位置，在规则中，test/include/exclude/resource对resource匹配，而issuer只对issuer匹配</p>
</li>
<li><p>Test/include/exclude/resource/issuer的用法和区别</p>
<ul>
<li>代码</li>
<li>test：一般是提供一个正则表达式或正则表达式的数组，绝对路径符合这个正则的则意味着满足这个条件</li>
<li>include：是一个字符串或者字符串数组，指定目录中的文件需要走这个规则</li>
<li>exclude：同样是一个字符串或者字符串数组，指定目录中的文件不需要走这个规则</li>
<li>resource：就是对text/include/exclude的一个对象包装，和他们单独写没有区别</li>
<li>issuer：和resource有异曲同工的作用，不过区别在于它是将这个rule应用于哪个文件以及这个文件所导入的所有依赖文件</li>
</ul>
</li>
</ul>
</li>
<li><p>额外选项</p>
<ul>
<li><p>resourceQuery</p>
<ul>
<li>和resource用法一样，不过针对的是匹配结果&#39;?&#39;后面的路径参数，可以调用resource中的text等</li>
</ul>
</li>
<li><p>oneOf</p>
<ul>
<li>表示对该资源只应用第一个匹配的规则，一般结合resourceQuery</li>
<li>path/to/foo.png?inline: 会匹配url-loader</li>
<li>path/to/foo.png?other:会匹配file-loader</li>
<li>path/to/foo.png: 会匹配file-loader</li>
</ul>
</li>
<li><p>useEntry</p>
<ul>
<li>object类型，包含着每一个loader并且对应loader的配置文件</li>
<li>options会传入loader，可以理解为loader的选项</li>
</ul>
</li>
<li><p>use</p>
<ul>
<li>是对useEntry的集合，并且对每一个入口指定使用一个loader</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>4.Resolve解析</p>
<ul>
<li><p>初步了解</p>
<ul>
<li>主要用来模块如何被解析，给webpack提供默认值</li>
</ul>
</li>
<li><p>alias</p>
<ul>
<li>object类型，主要用来让import和require调用更方便，设置初始路径</li>
</ul>
</li>
<li><p>enforceExtension</p>
<ul>
<li>Boolean类型， 默认false，表示引用不需要扩展名，为true时，import、require中引用必须加扩展名</li>
</ul>
</li>
<li><p>extensions</p>
<ul>
<li>Array 自动解析不需要扩展名</li>
</ul>
</li>
<li><p>modules</p>
<ul>
<li>Array webpack解析模块的时候需要搜索的目录，一般用于优先搜索和非node_modules文件中的自定义模块</li>
</ul>
</li>
</ul>
</li>
<li><p>5.Loader</p>
<ul>
<li><p>概述</p>
<ul>
<li>通过使用不同的Loader，Webpack可以要把不同的文件都转成JS文件,比如CSS、ES6/7、JSX等，一般用于module的use中</li>
</ul>
</li>
</ul>
</li>
<li><p>6.Plugin插件</p>
<ul>
<li>Array 扩展webpack，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果和想要做的事情</li>
</ul>
</li>
<li><p>7.webpack-dev-server</p>
<ul>
<li>开发中的server，webpack-dev-server可以快速搭建起本地服务，具体使用查看 webpack-dev-server</li>
</ul>
</li>
<li><p>8.Devtool</p>
<ul>
<li>此选项控制是否生成，以及如何生成，官方推荐 SourceMapDevToolPlugin 和 source-map-loader 建议看官方文档 Devtool 主要用来控制打包品质和在dev环境的调试便捷度和编译的快慢</li>
</ul>
</li>
<li><p>9.Watch</p>
<ul>
<li>webpack 可以监听文件变化，当它们修改后会重新编译和 HotModuleReplacementPlugin 有相似之处，监听文件变动热启动</li>
</ul>
</li>
</ul>
<h2>Webpack深入执行原理</h2>
<h3>（1）Webpack运行机制</h3>
<ul>
<li><p>运行过程</p>
<ul>
<li>初始化配置参数 -&gt; 绑定事件钩子回调 -&gt; 确定Entry逐一遍历 -&gt; 使用loader编译文件 -&gt; 输出文件</li>
</ul>
</li>
<li><p>Webpack事件流</p>
<ul>
<li><p>生产线</p>
<ul>
<li>Webpack 通过 Tapable 来组织这条复杂的生产线。 Webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 Webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。</li>
<li>Webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。</li>
</ul>
</li>
<li><p>事件流</p>
<ul>
<li>我们将webpack事件流理解为webpack构建过程中的一系列事件，他们分别表示着不同的构建周期和状态，我们可以像在浏览器上监听click事件一样监听事件流上的事件，并且为它们挂载事件回调。我们也可以自定义事件并在合适时机进行广播，这一切都是使用了webpack自带的模块 Tapable 进行管理的。我们不需要自行安装 Tapable ，在webpack被安装的同时它也会一并被安装，如需使用，我们只需要在文件里直接 require 即可。</li>
</ul>
</li>
<li><p>Tapable</p>
<ul>
<li>Tapable的原理其实就是我们在前端进阶过程中都会经历的EventEmit，通过发布者-订阅者模式实现</li>
</ul>
</li>
</ul>
</li>
<li><p>Webpack运行流程详解</p>
<ul>
<li><p>总结图</p>
</li>
<li><p>（1）初始化参数，绑定回调</p>
<ul>
<li>首先，webpack会读取你在命令行传入的配置以及项目里的 webpack.config.js 文件，初始化本次构建的配置参数，并且执行配置文件中的插件实例化语句，生成Compiler传入plugin的apply方法，为webpack事件流挂上自定义钩子。</li>
</ul>
</li>
<li><p>（2）遍历入口</p>
<ul>
<li>webpack开始读取配置的Entries，递归遍历所有的入口文件</li>
</ul>
</li>
<li><p>（3）使用loader编译文件</p>
<ul>
<li>Webpack进入其中一个入口文件，开始compilation过程。先使用用户配置好的loader对文件内容进行编译（buildModule），我们可以从传入事件回调的compilation上拿到module的resource（资源路径）、loaders（经过的loaders）等信息；之后，再将编译好的文件内容使用acorn解析生成AST静态语法树（normalModuleLoader），分析文件的依赖关系逐个拉取依赖模块并重复上述过程，最后将所有模块中的require语法替换成<strong>webpack_require</strong>来模拟模块化操作。</li>
</ul>
</li>
<li><p>（4）输出文件</p>
<ul>
<li>emit阶段，所有文件的编译及转化都已经完成，包含了最终输出的资源，我们可以在传入事件回调的compilation.assets 上拿到所需数据，其中包括即将输出的资源、代码块Chunk等等信息。</li>
</ul>
</li>
<li><p>【AST】什么是AST？</p>
<ul>
<li><p>定义</p>
<ul>
<li>是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。比如，嵌套括号被隐含在树的结构中，并没有以节点的形式呈现；而类似于 if-condition-then 这样的条件跳转语句，可以使用带有两个分支的节点来表示。</li>
</ul>
</li>
<li><p>例子</p>
</li>
<li><p>目的</p>
<ul>
<li>转换成AST的目的就是将我们书写的字符串文件转换成计算机更容易识别的数据结构，这样更容易提取其中的关键信息，而这棵树在计算机上的表现形式，其实就是一个单纯的Object。</li>
</ul>
</li>
<li><p>计算机眼中的语句</p>
<ul>
<li>示例是一个简单的声明赋值语句，经过AST转化后各部分内容的含义就更为清晰明了了。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>webpack输出结果解析</p>
<ul>
<li><p>未设置splitChuck</p>
<ul>
<li>如果我们没有设置splitChunk，我们只会在dist目录下看到一个main.js输出文件，过滤掉没用的注释还有一些目前不需要去考虑的Funciton，得到的代码大概是这样</li>
<li>我们都知道其实webpack在浏览器实现模块化的本质就是将所有的代码都注入到同一个JS文件里，现在我们可以清晰明了地看出webpack最后生成的也不过只是一个IIFE，我们引入的所有模块都被一个function给包起来组装成一个对象，这个对象作为IIFE的实参被传递进去。</li>
</ul>
</li>
<li><p>设置splitChuck</p>
<ul>
<li>如果我们配置了splitChunk，这时候输出的文件就和你的Chunk挂钩了</li>
<li>这时候，IIFE的形参也变成了摆设，所有我们的模块都被放在了一个名为 webpackJsonp 的全局数组上，通过IIFE里的 webpackJsonpCallback 来处理数据。</li>
</ul>
</li>
</ul>
</li>
<li><p>总结</p>
<ul>
<li>纵观webpack构建流程，我们可以发现整个构建过程主要花费时间的部分也就是递归遍历各个entry然后寻找依赖逐个编译的过程，每次递归都需要经历 String-&gt;AST-&gt;String 的流程，经过loader还需要处理一些字符串或者执行一些JS脚本，介于node.js单线程的壁垒，webpack构建慢一直成为它饱受诟病的原因。</li>
<li>利用了node.js原生的cluster模块去开辟多进程执行构建，不过在4之后大家就可以不用去纠结这一问题了，多进程构建已经被集成在webpack本身上了，除了增量编译，这也是4之所以能大幅度提升构建效率的原因之一。</li>
</ul>
</li>
</ul>
<h3>（2）编写自定义webpack loader</h3>
<ul>
<li><p>在Webpack中起编译作用的是loader</p>
<ul>
<li>在你不知道loader的本质之前你一定会觉得这是个很高大上的东西，正如计算机学科里的编译原理一样，里面一定有许多繁杂的操作。但实际上，loader只是一个普通的funciton，他会传入匹配到的文件内容(String)，你只需要对这些字符串做些处理就好了。</li>
</ul>
</li>
<li><p>一个最简单的loader实例</p>
<ul>
<li><p>代码</p>
</li>
<li><p>使用</p>
<ul>
<li>使用它的方式和babel-loader一样，只需要在webpack.config.js的module.rules数组里加上这么一个对象就好了</li>
</ul>
</li>
<li><p>效果</p>
<ul>
<li>这样，loader会去匹配所有以.js后缀结尾的文件并在内容前追加{};这样一段代码，我们可以在输出文件中看到效果</li>
<li>所以，拿到了文件内容，你想对字符串进行怎样得处理都由你自定义～你可以引入babel库加个 babel(content) ，这样就实现了编译，也可以引入uglifyjs对文件内容进行字符串压缩，一切工作都由你自己定义。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>（3）编写自定义webpack plugin</h3>
<ul>
<li><p>Webpack plugin起到的作用，就是为Webpack Hook事件挂载回调，或者执行指定脚本。它实际上和webpack loader一样简单，其实它只是一个带有apply方法的class。</p>
</li>
<li><p>一个简单的plugin实例</p>
<ul>
<li><p>代码</p>
</li>
<li><p>使用</p>
<ul>
<li>只需要在webpack.config.js 里 require 并实例化就可以了</li>
</ul>
</li>
<li><p>理解</p>
<ul>
<li>每次我们需要使用某个plugin的时候都需要new一下实例化，自然，实例过程中传递的参数，也就成为了我们的构造函数里拿到的options了</li>
<li>而实例化所有plugin的时机，便是在webpack初始化所有参数的时候，也就是事件流开始的时候。所以，如果配合 shell.js 等工具库，我们就可以在这时候执行文件操作等相关脚本，这就是webpack plugin所做的事情。</li>
<li>如果你想在指定时机执行某些脚本，自然可以使用在webpack事件流上挂载回调的方法，在回调里执行你所需的操作。</li>
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
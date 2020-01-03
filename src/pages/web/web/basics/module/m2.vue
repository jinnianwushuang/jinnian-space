<template>
    <div>
     <article class="post">
	<header class="post-header">
		<h4 class="post-title">
			分析比较opacity:0、visibility:hidden、display:none的区别、优劣及适用场景		</h4>
 
	</header>
	<div class="post-body">
		<hr>
<h4 id="三个属性分别是什么？"><a href="#三个属性分别是什么？" class="headerlink" title="三个属性分别是什么？"></a>三个属性分别是什么？</h4><ol class="ui list">
<li><h4 id="opacity-（filter-alpha（opacity-0-100））–-MDN详细讲解"><a href="#opacity-（filter-alpha（opacity-0-100））–-MDN详细讲解" class="headerlink" title="opacity （filter: alpha（opacity = 0-100））–  MDN详细讲解"></a>opacity （filter: alpha（opacity = 0-100））–  <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity" target="_blank" rel="external noopener noreferrer">MDN详细讲解</a></h4><ol>
<li>定义：指定了一个元素的透明度</li>
<li>值：number类型的值，0~1，如果超过范围，则按最接近的范围值展示，如值为999的时候，是按1展示。默认为1，同样，值为-999时，是按0展示</li>
<li>兼容性：很好。除了IE9之前（详细到各浏览器版本号就看文档</li>
<li>关注点：什么是透明，是否还存在文档流中，对子元素影响呢？</li>
</ol>
</li>
<li><h4 id="visibility-–-MDN详细讲解"><a href="#visibility-–-MDN详细讲解" class="headerlink" title="visibility – MDN详细讲解"></a>visibility – <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility" target="_blank" rel="external noopener noreferrer">MDN详细讲解</a></h4><ol>
<li>定义：显示或隐藏元素而不更改文档的布局。其中collapse值，还可以隐藏table中的行或列。</li>
<li>值：关键值有三个，分别如下。<ol>
<li>___visible，默认值，正常展示</li>
<li>___hidden，隐藏元素，不改变布局，但子元素如果设置为visibility: visible，则该子元素可见（很有意思的一个属性）</li>
<li>___collapse，应用于table表格。</li>
</ol>
</li>
<li>兼容性：css2的属性，应该都能兼容吧（没Windows</li>
<li>关注点：和opacity的透明度有什么区别？</li>
</ol>
</li>
<li><h4 id="display-–-MDN详细讲解"><a href="#display-–-MDN详细讲解" class="headerlink" title="display –  MDN详细讲解"></a>display –  <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#display_none" target="_blank" rel="external noopener noreferrer">MDN详细讲解</a></h4><ol>
<li>定义：指定了元素的显示类型，包含两类基础特征，<strong>用于指定元素怎样生成盒模型。</strong> <strong>外部显示类型</strong>定义了元素怎么参与流式布局的处理。<strong>内部显示类型</strong>定义了子元素的布局方式， 详细可以看看<a href="[https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#%E8%AF%AD%E6%B3%95](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#语法">语法部分</a>)</li>
<li>值：很多值，其中 none 属于 display-box。被设置成none的元素，将从可访问性树中移除，包括其子元素在内。</li>
<li>兼容性：基本支持</li>
<li>关注点：对页面重绘有没性能影响？是否可与别的属性连用？</li>
</ol>
</li>
<li><h4 id="表格对比"><a href="#表格对比" class="headerlink" title="表格对比"></a>表格对比</h4></li>
</ol>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">opacity: 0</th>
<th style="text-align:center">visibility: hidden</th>
<th style="text-align:center">display:none</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">是否存在页面中</td>
<td style="text-align:center">存在</td>
<td style="text-align:center">存在</td>
<td style="text-align:center">不存在</td>
</tr>
<tr>
<td style="text-align:center">子元素设置该属性其他值是否还能展示</td>
<td style="text-align:center">不可以</td>
<td style="text-align:center">可以</td>
<td style="text-align:center">不可以</td>
</tr>
<tr>
<td style="text-align:center">自身绑定的事件是否能触发</td>
<td style="text-align:center">能</td>
<td style="text-align:center">不能</td>
<td style="text-align:center">不能</td>
</tr>
<tr>
<td style="text-align:center">是否影响遮挡元素的事件触发</td>
<td style="text-align:center">影响</td>
<td style="text-align:center">不影响</td>
<td style="text-align:center">不影响</td>
</tr>
<tr>
<td style="text-align:center">改变属性值是否影响页面重绘</td>
<td style="text-align:center">不一定</td>
<td style="text-align:center">一定</td>
<td style="text-align:center">一定</td>
</tr>
<tr>
<td style="text-align:center">改变属性值是否影响回流</td>
<td style="text-align:center">不会</td>
<td style="text-align:center">会</td>
<td style="text-align:center">会</td>
</tr>
<tr>
<td style="text-align:center">该属性是否支持transition</td>
<td style="text-align:center">支持</td>
<td style="text-align:center">支持</td>
<td style="text-align:center">不支持</td>
</tr>
</tbody>
</table>
<h4 id="三者的优劣和应用场景"><a href="#三者的优劣和应用场景" class="headerlink" title="三者的优劣和应用场景"></a>三者的优劣和应用场景</h4><ol class="ui list">
<li><h4 id="绑定事件"><a href="#绑定事件" class="headerlink" title="绑定事件"></a>绑定事件</h4><ol>
<li>opacity：从表格可得知，opacity的隐藏，只是透明度100%，看不见了，但还在页面中且可以通过z-index等方式遮挡其他元素，同时绑在在该元素上的事件依旧能触发。应用场景可以有：移动端使用input、select加div，自定义样式，其中input、select层级在div上面，并设置opacity为0</li>
<li>visibility：这个属性是隐藏，意味着不能聚焦了还占据页面空间。但其子元素可以设置属性值为visible，就能正常显示。应用场景：父元素隐藏，子元素根据一定条件某些展示某些隐藏。可以做一个闪闪发光的星空？</li>
<li>display none就不存在页面中了，可以理解为完全的消失。优点即应用场景，如果是流式布局，让一个元素隐藏且不占据空间，就使用这个属性值了。</li>
</ol>
</li>
<li><h4 id="性能方面"><a href="#性能方面" class="headerlink" title="性能方面"></a>性能方面</h4><ol>
<li>opacity由于只是透明度变化，就还好，visibility是元素隐藏，需要重绘，disable是元素消失，也是需要。</li>
<li>应用方面，需要频繁切换状态时，在display和opacity中，可以选择后者，不频繁时，none也可以。</li>
</ol>
</li>
</ol>
<hr>
<p>遇到新的理解再补充</p>	</div>
	<footer class="post-footer">
		<div class="post-tags">
					</div>
		<div class="post-nav">
			<div class="post-nav-next post-nav-item"><i class="fa fa-chevron-left"></i> <a href="https://www.dazhuanlan.com/2019/10/16/5da67f4fa356d/" rel="next">Python编程快速上手 学习笔记(二) 电话号码和 E-mail 地址提取程序</a></div>
			<div class="post-nav-prev post-nav-item"><a href="https://www.dazhuanlan.com/2019/10/16/5da67f420626e/" rel="prev">使用 Navicate 建库建表</a> <i class="fa fa-chevron-right"></i></div>
		</div>
</footer>
		<div class="crp_related "><h4>相关文章</h4><ul><li><a href="https://www.dazhuanlan.com/2019/09/21/c43af3906bad/" target="_blank"><span class="crp_title">Display:none 与 Visibility:hidden 的不同</span></a></li><li><a href="https://www.dazhuanlan.com/2019/09/02/ef068fe32f45/" target="_blank"><span class="crp_title">CSS visibility Property</span></a></li><li><a href="https://www.dazhuanlan.com/2019/09/18/4c6e1210668e/" target="_blank"><span class="crp_title">如何用 Boolean 属性进行 控件的 Visibility DataBinding -…</span></a></li><li><a href="https://www.dazhuanlan.com/2019/10/19/5daa7cb4e1751/" target="_blank"><span class="crp_title">Page Visibility API</span></a></li><li><a href="https://www.dazhuanlan.com/2019/09/02/06af71905ee4/" target="_blank"><span class="crp_title">jquery validate ":hidden"</span></a></li><li><a href="https://www.dazhuanlan.com/2019/09/13/170787d58f89/" target="_blank"><span class="crp_title">[SQL SERVER]SQL2016-hidden memory consumer</span></a></li><li><a href="https://www.dazhuanlan.com/2019/09/16/04b790e62594/" target="_blank"><span class="crp_title">DIV Show &amp;amp; Hidden</span></a></li><li><a href="https://www.dazhuanlan.com/2019/09/21/0cbe607d8d39/" target="_blank"><span class="crp_title">GridView Hidden Column Problem</span></a></li><li><a href="https://www.dazhuanlan.com/2019/10/04/5d976896087c0/" target="_blank"><span class="crp_title">Hidden Persuasion Chapter01 承认拒绝技术</span></a></li><li><a href="https://www.dazhuanlan.com/2019/10/09/5d9d7021e85a3/" target="_blank"><span class="crp_title">透過 IIS 來設定 Hidden Segments</span></a></li></ul><div class="crp_clear"></div></div>	
</article>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <div class="post">
      <h4 class="postTitle">
       javascript中的12种循环遍历方法1
      </h4>
      <div class="clear"></div>
      <div class="postBody">
        <div id="cnblogs_post_body" class="blogpost-body ">
          <p>1：for循环</p>
          <p>let arr = [1,2,3];</p>
          <p>for(let i =0;i&lt;arr.length;i++){</p>
          <p>console.log(i,arr[i])</p>
          <p>}</p>
          <p>//for循环是js中最常用的一个循环工具，经常用来数组的循环遍历，</p>
          <p>2：for in循环</p>
          <p>let obj = {name: 'xiao' ,age:'24'}</p>
          <p>for(let i in obj){</p>
          <p>console.log(i,obj[i]);</p>
          <p>}</p>
          <p>
            //for in 循环主要用于遍历普通对象，i 代表对象的 key 值，obj[i]
            代表对应的
            value,当用它来遍历数组时候，多数情况下也能达到同样的效果，但是你不要这么做，这是有风险的，因为
            i
            输出为字符串形式，而不是数组需要的数字下标，这意味着在某些情况下，会发生字符串运算，导致数据错误，比如：'52'+1
            = '521' 而不是我们需要的 53。另外 for in
            循环的时候，不仅遍历自身的属性，还会找到 prototype
            上去，所以最好在循环体内加一个判断，就用
            obj[i].hasOwnProperty(i)，这样就避免遍历出太多不需要的属性。
          </p>
          <p>3：while循环</p>
          <div class="line number1 index0 alt2">
            <code class="js plain">let cars=[</code
            ><code class="js string">"BMW"</code><code class="js plain">,</code
            ><code class="js string">"Volvo"</code
            ><code class="js plain">,</code><code class="js string">"Saab"</code
            ><code class="js plain">,</code><code class="js string">"Ford"</code
            ><code class="js plain">];</code>
          </div>
          <div class="line number2 index1 alt1">
            <span style="font-family: monospace;">let</span>&nbsp;<code
              class="js plain"
              >i=0;</code
            >
          </div>
          <div class="line number3 index2 alt2">
            <code class="js keyword">while</code>
            <code class="js plain">(cars[i])</code>
          </div>
          <div class="line number4 index3 alt1">
            <code class="js plain">{</code>
          </div>
          <div class="line number5 index4 alt2">
            <code class="js plain">console.log(cars[i] + </code
            ><code class="js string">"&lt;br&gt;"</code
            ><code class="js plain">)</code>
          </div>
          <div class="line number6 index5 alt1">
            <code class="js plain">i++;</code>
          </div>
          <div class="line number7 index6 alt2">
            <code class="js plain">};</code>
          </div>
          <div class="line number7 index6 alt2">4：do while循环</div>
          <div class="line number7 index6 alt2">
            <div class="line number1 index0 alt2">
              <code class="js plain">let i = 3;</code>
            </div>
            <div class="line number2 index1 alt1">
              <code class="js keyword">do</code><code class="js plain">{</code>
            </div>
            <div class="line number3 index2 alt2">
              <code class="js spaces">&nbsp;</code
              ><code class="js plain">console.log(i)</code>
            </div>
            <div class="line number4 index3 alt1">
              <code class="js spaces">&nbsp;</code
              ><code class="js plain">i--;</code>
            </div>
            <div class="line number5 index4 alt2">
              <code class="js plain">}</code>
            </div>
            <div class="line number6 index5 alt1">
              <code class="js keyword">while</code
              ><code class="js plain">(i&gt;0)</code>
            </div>
            <div class="line number6 index5 alt1">
              //do while 循环是 while
              循环的一个变体，它首先执行一次操作，然后才进行条件判断，是 true
              的话再继续执行操作，是 false 的话循环结束。
            </div>
            <div class="line number6 index5 alt1">5：Array forEach循环</div>
            <div class="line number6 index5 alt1">
              <div class="line number1 index0 alt2">
                <code class="js plain">let arr = [1,2,3];</code>
              </div>
              <div class="line number2 index1 alt1">
                <code class="js plain">arr.forEach(</code
                ><code class="js keyword">function</code
                ><code class="js plain">(i,index){</code>
              </div>
              <div class="line number3 index2 alt2">
                <code class="js spaces">&nbsp;</code
                ><code class="js plain">console.log(i,index)</code>
              </div>
              <div class="line number4 index3 alt1">
                <code class="js plain">})</code>
              </div>
              <div class="line number4 index3 alt1">
                //forEach循环，循环数组中每一个元素并采取操作， 没有返回值，
                可以不用知道数组长度,他有三个参数，只有第一个是必需的，代表当前下标下的
                value。
                <p>
                  另外请注意，forEach
                  循环在所有元素调用完毕之前是不能停止的，它没有 break
                  语句，如果你必须要停止，可以尝试 try catch
                  语句，就是在要强制退出的时候，抛出一个 error 给 catch
                  捕捉到，然后在 catch 里面
                  return，这样就能中止循环了，如果你经常用这个方法，最好自定义一个这样的
                  forEach 函数在你的库里。
                </p>
                <p>6：Array map（)方法</p>
                <p>let&nbsp; arr = [1,2,3];</p>
                <p>let tt = arr.map(function(i){</p>
                <p>console.log(i);</p>
                <p>return i*2;</p>
                <p>})</p>
                <p>
                  //map()
                  方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。<br />注意：map
                  和 forEach 方法都是只能用来遍历数组，不能用来遍历普通对象。
                </p>
                <p>7:Array filter()方法</p>
                <p>let arr = [1,2,3];</p>
                <p>let tt= arr.filter(function(i){</p>
                <p>return i &gt; 1;</p>
                <p>})</p>
                <p>
                  //filter 方法是 Array
                  对象内置方法，它会返回通过过滤的元素，不改变原来的数组。
                </p>
                <p>8:Array some()方法</p>
                <p>let arr =[1,2,3];</p>
                <p>let tt = arr.some(function(i){</p>
                <p>return i &gt; 1;</p>
                <p>})</p>
                <p>
                  //some()
                  方法用于检测数组中的元素是否满足指定条件（函数提供）,返回
                  boolean 值，不改变原数组。
                </p>
                <p>9:Array every()方法</p>
                <p>let arr = [1,2,3];</p>
                <p>let tt = arr.some(function(i){</p>
                <p>return i &gt; 1;</p>
                <p>})</p>
                <p>
                  //every()
                  方法用于检测数组所有元素是否都符合指定条件（通过函数提供），返回
                  boolean 值，不改变原数组。
                </p>
                <p>10:Array reduce()方法</p>
                <p>let arr = [1,2,3];</p>
                <p>let ad = arr.reduce(function(i,j){</p>
                <p>return i + j;</p>
                <p>})</p>
                <p>
                  //reduce()
                  方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
                </p>
                <p>11:Array reduceRight()方法</p>
                <p>let arr = [1,2,3];</p>
                <p>let ad = arr.reduceRight(function(i,j){</p>
                <p>return i + j;</p>
                <p>})</p>
                <p>
                  //reduceRight()方法,和 reduce()
                  功能是一样的，它是从数组的末尾处向前开始计算。
                </p>
                <p>12:for of 循环</p>
                <p>let arr = ['name','age'];</p>
                <p>for(let i of arr){</p>
                <p>console.log(i);</p>
                <p>}</p>
                <p>
                  //for of 循环是 Es6 中新增的语句，用来替代 for in 和
                  forEach，它允许你遍历 Arrays（数组）, Strings（字符串）,
                  Maps（映射）, Sets（集合）等可迭代(Iterable
                  data)的数据结构,注意它的兼容性。
                </p>
              </div>
            </div>
          </div>
   
      </div>
      </div>
 
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

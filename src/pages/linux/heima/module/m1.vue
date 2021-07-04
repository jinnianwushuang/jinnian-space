<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/linux/heima/module/m1.vue
 * @Description    : 
-->

<template>
  <div class="">
    <q-markdown :extend="extendMarkdown" :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "public/img/linux/heima-Linux云计算/讲义/01运维概述与Linux系统安装.md";
export default {
  data() {
    return {
      MainComponent,
      n: 1
    };
  },
  methods: {
    extendMarkdown(md) {
      

      console.log(md.renderer.rules);
   const defaultRender = md.renderer.rules.html_block
      md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        console.log("1");
        if( token.content.includes('<img')){
 console.log("token-- ", token);
 let str=`"<img src="media\block03.jpg" style="width:960px" />"`
 str= token.content
 let arr= str.split('src="')
 let str2= arr[0]+" src=\"./img/linux/heima-Linux云计算/讲义/"+arr[1]

  token.content=str2
        }
       
        token.attrSet("class", "q-markdown--token jinnian-test-1");
        return  defaultRender(tokens, idx, options, env, self);
      };


      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        // console.log('tokens--- ',tokens);
        const token = tokens[idx];
        console.log("3");
        token.attrSet("class", "q-markdown--image");
        console.log("token--- " + idx + "-----", token);
        // 改变 图片路径 增加前缀 拼接
        let raw_src = token.attrGet("src");
        console.log(raw_src);
        token.attrSet("src", "./img/linux/heima-Linux云计算/讲义/" + raw_src);

        return self.renderToken(tokens, idx, options);
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

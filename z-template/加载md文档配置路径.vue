<!--
 * @Date           : 2021-07-04 03:32:48
 * @FilePath       : /jinnian-space/z-template/加载md文档配置路径.vue
 * @Description    : 
-->
 
 
<template>
  <div class="">
    <q-markdown :extend="extendMarkdown" :src="MainComponent1" />
 
  </div>
</template>

<script>
import MainComponent from "../md/react基础Day01-React概述&脚手架搭建&JSX&组件.md";
 
export default {
  data() {
    return {
      MainComponent,
  
    };
  },
  methods: {
    extendMarkdown (md) {
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    // console.log('tokens--- ',tokens);
   const token = tokens[idx]

    token.attrSet('class', 'q-markdown--image')
    // 改变 图片路径 增加前缀 拼接 
    // let raw_src=  token. attrGet('src')
    // console.log(raw_src);
    // token.attrSet("src", 'q-markdown--image-6666666666666')

    return self.renderToken(tokens, idx, options)
  }
  }
  },
};
</script>

<style lang="scss" scoped></style>




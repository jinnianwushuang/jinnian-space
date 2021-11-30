<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/react/module/m2.vue
 * @Description    : 
-->
 
 
<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :extend="extendMarkdown" :src="MainComponent1" />
     <q-markdown no-heading-anchor-links   :src="MainComponent2" />
  </div>
</template>

<script>
import MainComponent1 from "../md/react基础Day01-React概述&脚手架搭建&JSX&组件.md";
import MainComponent2 from "../md/react基础Day02-受控组件&评论案例&props&context.md";
export default {
  data() {
    return {
      MainComponent1,
      MainComponent2
    };
  },
  methods: {
    extendMarkdown (md) {
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    // console.log('tokens--- ',tokens);
    // console.log('idx--- ',idx);
    // console.log(' options--- ',options);
    // console.log(' env ---',env);
    // console.log(' self ----',self);
 
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




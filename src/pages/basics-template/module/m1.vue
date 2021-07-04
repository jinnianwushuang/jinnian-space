<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/basics-template/module/m1.vue
 * @Description    : 
-->

 
<template>
  <div class="">
    <q-markdown :src="MainComponent" :extend="extendMarkdown" />
  </div>
</template>

<script>
import MainComponent from "../md/demo.md";
export default {
  data() {
    return {
      MainComponent
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



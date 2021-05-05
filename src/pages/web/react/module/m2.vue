<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/react/module/m2.vue
 * @Description    : 
-->
 
 
<template>
  <div class="">
    <q-markdown :src="MainComponent1" />
    <q-markdown :src="MainComponent2" />
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
  }
};
</script>

<style lang="scss" scoped></style>




<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/maven/module/m1.vue
 * @Description    : 
-->

<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/POM文件帮助文档.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



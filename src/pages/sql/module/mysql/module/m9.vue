<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/sql/module/m8.vue
 * @Description    : 
-->

 
<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/MySQL高级-03-授课笔记.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/basics/module/m11.vue
 * @Description    : 
-->

 
<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/渲染原理2.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



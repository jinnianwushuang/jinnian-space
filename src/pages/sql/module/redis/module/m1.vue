<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/redis/module/m1.vue
 * @Description    : 
-->

 
<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/第一章 Redis基础.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



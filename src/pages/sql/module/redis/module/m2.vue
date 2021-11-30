<!--
 * @Date           : 2021-04-19 01:01:21
 * @FilePath       : /jinnian-space/src/pages/sql/module/redis/module/m2.vue
 * @Description    : 
-->

 
<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/redis.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



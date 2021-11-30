<!--
 * @Date           : 2021-03-30 09:29:10
 * @FilePath       : /jinnian-space/src/pages/linux/module/m13.vue
 * @Description    : 
-->
<template>
    <div>
          <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
    </div>
</template>
<script>
import MainComponent from "../md/linux-目录.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
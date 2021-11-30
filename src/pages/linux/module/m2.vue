<!--
 * @Date           : 2020-11-05 21:36:01
 * @FilePath       : /jinnian-space/src/pages/linux/module/m2.vue
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
import MainComponent from "../md/linux-其他.md";
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
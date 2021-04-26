<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/basics/module/m9.vue
 * @Description    : 
-->

 
<template>
  <div class="">
    <q-markdown :src="MainComponent1" />
    <q-markdown :src="MainComponent2" />
  </div>
</template>

<script>
import MainComponent1 from "../md/day19-IO流01.md";
import MainComponent2 from "../md/day20-IO流02.md";
export default {
  data() {
    return {
      MainComponent1,
      MainComponent2,
    };
  }
};
</script>

<style lang="scss" scoped></style>



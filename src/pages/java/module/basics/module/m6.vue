<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/basics/module/m2.vue
 * @Description    : 
-->

 
<template>
  <div class="">
    <q-markdown :src="MainComponent1" />
    <q-markdown :src="MainComponent2" />
    <q-markdown :src="MainComponent3" />
  </div>
</template>

<script>
import MainComponent1 from "../md/day11-分类和static.md";
import MainComponent2 from "../md/day12-继承.md";
import MainComponent3 from "../md/day13-接口和内部类.md";
export default {
  data() {
    return {
      MainComponent1,
      MainComponent2,
      MainComponent3,
    };
  }
};
</script>

<style lang="scss" scoped></style>



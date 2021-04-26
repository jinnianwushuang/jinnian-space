<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/basics/module/m8.vue
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
import MainComponent1 from "../md/day16-集合01.md";
import MainComponent2 from "../md/day17-集合02.md";
import MainComponent3 from "../md/day18-集合03.md";
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



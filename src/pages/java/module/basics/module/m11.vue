<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/basics/module/m11.vue
 * @Description    : 
-->

 
<template>
  <div class="">
    <q-markdown :src="MainComponent1" />
    <q-markdown :src="MainComponent2" />
  </div>
</template>

<script>
import MainComponent1 from "../md/day23-网络编程01.md";
import MainComponent2 from "../md/day24-网络编程02.md";
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



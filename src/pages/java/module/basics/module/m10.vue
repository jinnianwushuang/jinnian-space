<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/basics/module/m2.vue
 * @Description    : 
-->

 
<template>
  <div class="">
    <q-markdown :src="MainComponent1" />
    <q-markdown :src="MainComponent2" />
  </div>
</template>

<script>
import MainComponent1 from "../md/day21-多线程01.md";
import MainComponent2 from "../md/day22-多线程02.md";
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



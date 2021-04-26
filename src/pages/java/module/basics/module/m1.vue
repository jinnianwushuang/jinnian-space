<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/basics/module/m1.vue
 * @Description    : 
-->

 
<template>
  <div class="">
    <q-markdown :src="MainComponent1" />
    <q-markdown :src="MainComponent2" />
    <q-markdown :src="MainComponent3" />
    <q-markdown :src="MainComponent4" />
    <q-markdown :src="MainComponent5" />
    <q-markdown :src="MainComponent6" />
  </div>
</template>

<script>
import MainComponent1 from "../md/day01-java基础语法.md";
import MainComponent2 from "../md/day02-Java基础语法.md";
import MainComponent3 from "../md/day03-switch&循环语句.md";
import MainComponent4 from "../md/day04-IDEA&数组.md";
import MainComponent5 from "../md/day05-方法.md";
import MainComponent6 from "../md/day06-Debug&基础练习.md";


export default {
  data() {
    return {
      MainComponent1,
      MainComponent2,
      MainComponent3,
      MainComponent4,
      MainComponent5,
      MainComponent6,
    };
  }
};
</script>

<style lang="scss" scoped></style>



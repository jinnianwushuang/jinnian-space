<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/java/module/springmvc/module/m7.vue
 * @Description    : 
-->

 
<template>
  <div class="">
    <q-markdown :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/SpringMVC-day03.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



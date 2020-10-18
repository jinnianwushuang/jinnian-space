<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/module/m5.vue
 * @Description    : 
-->
 
 
<template>
  <div class="">
    <q-markdown :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/runoob-shell.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



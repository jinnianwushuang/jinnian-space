<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/web/ts/module/m4.vue
 * @Description    : 
-->

 
<template>
  <div class="">
  <q-markdown no-heading-anchor-links   :src="MainComponent1" />
 <q-markdown no-heading-anchor-links   :src="MainComponent2" />
 
 

  </div>
</template>

<script>
import MainComponent1 from "../md/other/template-literal-types.md"
import MainComponent2 from "../md/other/type-checking-javascript-files.md"
 
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



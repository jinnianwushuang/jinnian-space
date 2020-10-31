<!--
 * @Date           : 2020-10-19 00:35:21
 * @FilePath       : /jinnian-space/src/pages/temp/module/m3.vue
 * @Description    : 
-->

<style lang="scss" scoped></style>
<template>
  <div class="container q-pa-lg">
    <q-pdfviewer
      v-model="show"
      :src="src"
      type="html5"
      content-class="fit container"
      inner-content-class="fit container"
    />
  </div>
</template>

<script>
 import  util from "src/util/index.js"
// util.compute_book_src()
export default {
  name: "Container",

  data() {
    return {
      show: true,
       src:util.compute_book_src("linux/pdf/Linux学习笔记.pdf") 
    };
  }
};
</script>

<style>
.container {
  max-width: 80vw;
  max-height: 100vh;
  min-width: 70vw;
  min-height: 70vh;
  width: 100%;
  height: 100%;
}
</style>

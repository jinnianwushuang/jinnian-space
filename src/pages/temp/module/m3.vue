<!--
 * @Date           : 2020-10-19 00:35:21
 * @FilePath       : /jinnian-space/src/pages/temp/module/m3.vue
 * @Description    : 
-->

<style lang="scss" scoped></style>
<template>
  <div class="q-pdfviewer-container   ">
    <q-pdfviewer
      v-model="show"
      :src="src"
      type="html5"
      content-class=" fit   q-pdfviewer-container"
      inner-content-class=" fit   q-pdfviewer-container"
    />
  </div>
</template>

<script>
 
export default {
  name: "Container",

  data() {
    return {
      show: true,
       src:this.$utils.compute_book_src("linux/pdf/Linux学习笔记.pdf") 
    };
  }
};
</script>

<style>

</style>

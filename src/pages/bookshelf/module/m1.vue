<template>
  <div>
    <div v-for="(item,index) in books" :key="index">
      <a :href="compute_book_path(item)" target="_blank" rel="noopener noreferrer">{{compute_book_name(item)}}</a>
    </div>
 
 

 
  </div>
</template>

<script>
import bookshelf_mixin from "src/pages/bookshelf/mixin/index.js"
export default {
  mixins:[bookshelf_mixin],
  data() {
    return {
      books: [
         "doc/web/jinnian-web-2020-01-13.xmind",
         "doc/web/阮一峰JavaScript基础总结.xmind"
      ]
    }
  },
};
</script>

<style lang="scss" scoped></style>

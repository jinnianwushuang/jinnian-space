<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/bookshelf/module/m1.vue
 * @Description    : 
-->
<template>
  <div>
    <div v-for="(item, index) in books" :key="index">
      <a
        :href="util.compute_book_src(item)"
        target="_blank"
        rel="noopener noreferrer"
        >{{ util.compute_book_name(item) }}</a
      >
    </div>
  </div>
</template>

<script>
import util from "src/util/index.js";

export default {
  data() {
    return {
      util,
      books: [
        "web/jinnian-web-2020-01-13.xmind",
        "web/阮一峰JavaScript基础总结.xmind",
        "web/React 全家桶.xmind",
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

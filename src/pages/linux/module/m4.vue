<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/module/m4.vue
 * @Description    : 
-->

<template>
  <div>
    <div class="row   q-my-md">
      <q-select
        v-model="book"
        @input="change_book()"
        :options="book_arr"
     ><template slot="before">
       <div>
         选择书籍
       </div>
     </template> </q-select>
    </div>
    <div class="q-pdfviewer-container   q-pa-md">
      <q-pdfviewer
        v-model="show"
        :src="src"
        type="html5"
        content-class=" fit   q-pdfviewer-container"
        inner-content-class=" fit   q-pdfviewer-container"
      />
    </div>
  </div>
</template>
<script>
const book_arr = [
        "CDN排坑指南.pdf",
        "DTS控制台一本通.pdf",
        "ECS运维指南-linux诊断.pdf",
        "ECS运维指南-windows诊断.pdf",
        "Linux学习笔记.pdf",
        "OSS运维-进阶手册.pdf",
        "OSS运维u-基础书册.pdf",
        "RDS数据库一本通.pdf",
        "Rocket MQ 使用排查指南.pdf",
        "VOD问题排查与实战手册.pdf",
        "深入浅出K8S.pdf",
        "深入浅出玩转物联网平台.pdf"
];
const prefix = "linux/pdf/";
import {select_pdf_mixin} from "src/mixins/index.js"
export default {
  mixins:[select_pdf_mixin],
  data() {
    return {
      prefix,
      book_arr,
      show: true,
      book: book_arr[0],
      src: ""
    };
  },
};
</script>
<style></style>

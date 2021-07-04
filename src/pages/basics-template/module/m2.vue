<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/basics-template/module/m2.vue
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
  "/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf",
  "/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf", 
];
const prefix = "linux/heima-Linux云计算";
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

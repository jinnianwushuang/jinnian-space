<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/basics-template/module/m2.vue
 * @Description    : 
-->
<template>
  <div>
    <div class="row  ">
      <q-select
        v-model="book"
              use-input
        input-debounce="0"
        clearable
        @filter="filterFn"
        :options="book_options"
     ><template slot="before">
       <div>
          
       </div>
     </template> </q-select>
    </div>
    <div class="q-pdfviewer-container   ">
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
const book_options = [
  "/020_尚硅谷-Linux云计算-网络服务-Nginx-合并PDF.pdf",
 
];
const prefix = "linux/nginx/pdf";
import {select_pdf_mixin} from "src/mixins/index.js"
export default {
  mixins:[select_pdf_mixin],
  data() {
    return {
      prefix,
      book_options,
      show: true,
      book: book_options[0],
      src: ""
    };
  },
};
</script>
<style></style>

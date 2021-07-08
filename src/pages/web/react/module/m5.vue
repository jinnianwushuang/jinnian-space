<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/react/module/m5.vue
 * @Description    : 
-->

<template>
  <div>
    <div class="row   q-my-md">
      <q-select v-model="book" @input="change_book()" :options="book_arr"
        ><template slot="before">
          <div>
             
          </div>
        </template>
      </q-select>
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
  "01_.pdf",
  "02_03_04_JSX核心语法.pdf",
  "05_React脚手架.pdf",
  "06_07_08__09_10_React组件化开发.pdf",
  "11_React的CSS.pdf",
  "12_AntDesignUI库.pdf",
  "13_axios的使用.pdf",
  "14_React过渡动画.pdf",
  "15_16_17_Redux的使用.pdf",
  "18_19_React-router的使用.pdf",
  "20_21_22_React-Hooks.pdf",
  "23_24_网易云项目实战.pdf",
  "30_React-SSR.pdf",
  "项目自动化部署.pdf"
];
const prefix = "react/react核心精讲/";
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

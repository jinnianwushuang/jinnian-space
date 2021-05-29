<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/react/module/m5.vue
 * @Description    : 
-->

<style lang="scss" scoped></style>
<template>
  <div>
    <div class="row q-gutter-md q-my-md">
      <q-btn
        color="primary"
        v-for="(item, index) in book_arr"
        :key="`book_arr_${index}`"
        :label="item"
        @click="change_book(item)"
      />
    </div>

    <div class="container q-pa-lg">
      <!-- type="pdfjs"     type="html5" -->
      <q-pdfviewer
        v-model="show"
        :src="src"
        type="html5"
        content-class="fit container"
        inner-content-class="fit container"
      />
    </div>
  </div>
</template>

<script>
import  util from "src/util/index.js"
export default {
  name: "Container",

  data() {
    return {
      show: true,
      src:   util.compute_book_src("react/react核心精讲/02_03_04_JSX核心语法.pdf") ,
      book_arr: [
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
"项目自动化部署.pdf",
      ]
    };
  },
  methods: {
    change_book(item) {
      this.src =   util.compute_book_src("react/react核心精讲/" + item) ;
    },
    fetchPDF (payload) {
  this.$axios.post('/my/url/to/pdf', payload, { responseType: 'blob' }).then(res => {
    // create the blob
    const blob = new Blob([res.data], { type: res.data.type })
    // set reactive variable
    this.src = window.URL.createObjectURL(blob)
  }).catch(err => {
    this.$q.notify({
      message: 'Error downloading PDF',
      type: 'negative',
      textColor: 'white',
      color: 'negative',
      icon: 'error',
      closeBtn: 'close',
      position: 'top'
    })
  })
}
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

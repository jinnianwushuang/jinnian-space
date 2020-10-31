<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/module/m4.vue
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
      src:   util.compute_book_src("linux/pdf/Linux学习笔记.pdf") ,
      book_arr: [
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
      ]
    };
  },
  methods: {
    change_book(item) {
      this.src =   util.compute_book_src("linux/pdf/" + item) ;
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

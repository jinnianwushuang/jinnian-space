/*
 * @Date           : 2021-07-05 00:13:12
 * @FilePath       : /jinnian-space/src/mixins/module/select_pdf.mixin.js
 * @Description    : 
 */

const book_arr = [
    "/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf",
    "/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf", 
  ];
  const prefix = "linux/heima-Linux云计算";
  export default {
    name: "Container",
    data() {
      return {
        prefix,
        book_arr,
        show: true,
        book: book_arr[0],
        src: ""
      };
    },
    created() {
      this.src = this.$utils.compute_book_src(this.prefix + this.book);
    },
    methods: {
      change_book() {
        console.log("this.book", this.book);
        this.src = this.$utils.compute_book_src(this.prefix + this.book);
      }
    }
  };

/*
 * @Date           : 2021-07-05 00:13:12
 * @FilePath       : /jinnian-space/src/mixins/module/select_pdf.mixin.js
 * @Description    : 
 */

const book_options = [
    "/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf",
    "/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf", 
  ];
  const prefix = "linux/heima-Linux云计算";
  export default {
    name: "Container",
    data() {
      return {
        prefix,
        book_options,
        book_options_all:[],
        show: true,
        book: book_options[0],
        src: ""
      };
    },
    created() {
      this.book_options_all = [... this.book_options]
      this.src = this.$utils.compute_book_src(this.prefix + this.book);
    },
    watch: {
      book(newValue, oldValue) {
         if(newValue){
            this.change_book()
         }
      }
    },
    methods: {
      change_book() {
        console.log("this.book", this.book);
        this.src = this.$utils.compute_book_src(this.prefix + this.book);
      },
      filterFn (val, update) {
        if (val === '') {
          update(() => {
            this.book_options = this.book_options_all
  
            // with Quasar v1.7.4+
            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          })
          return
        }
  
        update(() => {
          const needle = val.toLowerCase()
          this.book_options  = this.book_options_all.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  };

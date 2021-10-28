<!--
 * @Date           : 2021-04-12 16:09:51
 * @FilePath       : /jinnian-space/src/pages/java/module/basics/index.vue
 * @Description    : 
-->
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/index.vue
 * @Description    : 
-->
<template>
  <div>
 

     <q-markdown  v-if="MainComponent"  :extend="extendMarkdown" :src="MainComponent" />
       <component v-else :is="`${tab}`"></component>
  </div>
</template>

<script>
import m99 from "./module/m99.vue";
import m1 from "./module/m1.vue";
import m2 from "./module/m2.vue";
import m3 from "./module/m3.vue";
import m4 from "./module/m4.vue";
import m5 from "./module/m5.vue";
import m6 from "./module/m6.vue";
import m7 from "./module/m7.vue";
import m8 from "./module/m8.vue";
import m9 from "./module/m9.vue";
import m10 from "./module/m10.vue";
import m11 from "./module/m11.vue";
import m12 from "./module/m12.vue";

  import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('public/books/java/basic', false, /\.md$/),'md',true)

 
 
import {menu_tab_mixin,markdown_mixin } from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin,markdown_mixin ],

  components: {
    m99,
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m11,
    m12
  },
  data() {
    return {
      img_prefix:'./books/java/basic/',
      tab: "m1",
      tab_level: 2,
      tabs: [
        { label: "基础笔记", value: "m99" },
        { label: "Java基础语法", value: "m1" },
        { label: "面向对象基础", value: "m2" },
        { label: "API基础", value: "m3" },
        { label: "集合基础", value: "m4" },
        { label: "Git", value: "m5" },
        { label: "面向对象进阶", value: "m6" },
        { label: "常用API&异常", value: "m7" },
        { label: "集合", value: "m8" },
        { label: "IO流", value: "m9" },
        { label: "多线程", value: "m10" },
        { label: "网络编程", value: "m11" },
        { label: "基础加强", value: "m12" },
          ...all_modules
      ]
    };
  },
   watch: {
    tab(newValue, oldValue) {
      this.  MainComponent=all_components[this.tab]
    }
  },
};
</script>

<style lang="scss" scoped></style>

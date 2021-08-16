<!--
 * @Date           : 2021-04-12 16:09:51
 * @FilePath       : /jinnian-space/src/pages/basics-template/index.vue
 * @Description    : 
-->
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/index.vue
 * @Description    : 
-->
<template>
  <div>
 

 
    <div ><component :is="`${tab}`"></component></div>
  </div>
</template>

<script>

import m1 from "./module/m1.vue";
import m2 from "./module/m2.vue";
import m3 from "./module/m3.vue";
import m4 from "./module/m4.vue";
import m5 from "./module/m5.vue";
import m6 from "./module/m6.vue";
import m7 from "./module/m7.vue";
import m8 from "./module/m8.vue";

import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,



  },
  data() {
    return {
      tab: "m1",
       tab_level: 1, // 右侧 菜单 一级 为 1  二级为 2
      tabs: [
        { label: "配置参考", value: "m1" },
        { label: "vue2.x-vue.config.js", value: "m2" },
        { label: "vue.package.json", value: "m3" },
        { label: "quasar.v1.package.json", value: "m4" },
        { label: "quasar.app.package.json", value: "m5" },
        { label: "node-quasar全栈", value: "m6" },
        { label: "material-kit-pro-react", value: "m7" },
        { label: "笔记项目模板", value: "m8" },


      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>


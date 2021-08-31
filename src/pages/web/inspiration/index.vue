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

import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    m2,



  },
  data() {
    return {
      tab: "m1",
       tab_level:2, // 右侧 菜单 一级 为 1  二级为 2
      tabs: [
        { label: "感悟", value: "m1" },
          { label: "NPM包", value: "m2" },


      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>


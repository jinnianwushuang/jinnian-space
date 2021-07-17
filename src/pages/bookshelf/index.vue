<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/bookshelf/index.vue
 * @Description    : 
-->
<template>
  <div>
 

    <component :is="`${tab}`"></component>
  </div>
</template>

<script>

import m1 from "src/pages/bookshelf/module/m1.vue";
import m2 from "src/pages/bookshelf/module/m2.vue";
import m3 from "src/pages/bookshelf/module/m3.vue";
import m4 from "src/pages/bookshelf/module/m4.vue";
import m5 from "src/pages/bookshelf/module/m5.vue";
import m6 from "src/pages/bookshelf/module/m6.vue";
import m7 from "src/pages/bookshelf/module/m7.vue";
import m8 from "src/pages/bookshelf/module/m8.vue";
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
    m8
  },
 
  data() {
    return {
      tab: 'm1',
  tab_level: 1,
      tabs: [
        { label: "web" ,value:'m1'},
        { label: "书架书单" ,value:'m2'},
        { label: "未开发" ,value:'m3'},
        { label: "未开发" ,value:'m4'},
        { label: "未开发" ,value:'m5'},
        { label: "未开发" ,value:'m6'},
        { label: "未开发" ,value:'m7'},
        { label: "未开发" ,value:'m8'}
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

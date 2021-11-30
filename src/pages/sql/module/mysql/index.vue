<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/sql/module/mysql/index.vue
 * @Description    : 
-->
<template>
  <div>
 

  
      <q-markdown no-heading-anchor-links    v-if="MainComponent"  :extend="extendMarkdown" :src="MainComponent" />
       <component v-else :is="`${tab}`"></component>
  </div>
</template>

<script>

import m1 from "./module/m1.vue";
import m2 from "./module/m2.vue";
import m3 from "./module/m3.vue";
// import m4 from "./module/m4.vue";
import m5 from "./module/m5.vue";
import m6 from "./module/m6.vue";
import m7 from "./module/m7.vue";
import m8 from "./module/m8.vue";
import m9 from "./module/m9.vue";
import m10 from "./module/m10.vue";
// 
  import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('public/books/sql/mysql/', false, /\.md$/),'md',true)

// console.log('sql----------------', all_modules);
 
import {menu_tab_mixin,markdown_mixin } from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin,markdown_mixin ],
  components: {
    m1,
    m2,
    m3,
    // m4,
    m5,
    m6,
    m7,
    m8,m9,m10
  },

 
  data() {
    return {
            // tab: all_modules[0].value,
       tab_level: 1, // 右侧 菜单 一级 为 1  二级为 2
       MainComponent:'',
      // tabs:all_modules,
          img_prefix:'./books/sql/mysql/',
      tab: 'm1',
          tab_level: 2,
      tabs: [
          { label: "基本" ,value:'m1'},
          { label: "常见错误" ,value:'m2'},
          { label: "常规语句" ,value:'m3'},
          // { label: "redis" ,value:'m4'},
          { label: "LINUX 安装 5.7 mysql" ,value:'m5'},
                { label: "MySQL数据类型" ,value:'m7'},
          { label: "MySQL基础" ,value:'m6'},
    
          { label: "MySQL进阶" ,value:'m8'},
          { label: "MySQL高级1" ,value:'m9'},
          { label: "MySQL高级2" ,value:'m10'},
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

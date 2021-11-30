<!--
 * @Date           : 2021-04-12 16:09:51
 * @FilePath       : /jinnian-space/src/pages/sql/module/redis/index.vue
 * @Description    : 
-->
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/index.vue
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
 
  import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('public/books/sql/redis/', false, /\.md$/),'md',true)

// console.log('sql----------------', all_modules);
 
import {menu_tab_mixin,markdown_mixin } from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin,markdown_mixin ],
  components: {
    m1,
    m2
     

  },
  data() {
    return {
             MainComponent:'',
      // tabs:all_modules,
          img_prefix:'./books/sql/redis/',
      tab: "m1",
           tab_level: 2,
      tabs: [
        { label: "Redis基础", value: "m1" },
        { label: "Redis", value: "m2" },
      
  ...all_modules
      ],
 
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


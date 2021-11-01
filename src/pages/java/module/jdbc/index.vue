<template>
  <div>
 <q-markdown  :extend="extendMarkdown"  :src="MainComponent" />
  </div>
</template>
<script>
/** 
 * 特点是 东西全部打进来 了 针对 markdown   , 同步
*/
let  relative_path='/books/java/jdbc/'
 import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('public/books/java/jdbc/', false, /\.md$/),'md',true)
import {menu_tab_mixin,markdown_mixin } from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin,markdown_mixin ],
  data() {
    return {
       relative_path,
       img_prefix:'.'+relative_path,
       tab: all_modules[0].value,
       tab_level: 2, // 右侧 菜单 一级 为 1  二级为 2
       MainComponent:all_components[all_modules[0].value],
      tabs:all_modules
    };
  },
    watch: {
    tab(newValue, oldValue) {
      this. MainComponent=all_components[this.tab]
        this. compute_img_prefix()
    }
  },
};
</script>
<style lang="scss" scoped></style>

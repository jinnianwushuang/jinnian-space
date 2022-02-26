<!--
 * @Date           : 2021-08-16 22:05:21
 * @FilePath       : /jinnian-space/src/pages/flutter/index.vue
 * @Description    :
-->
<template>
  <div>
  <q-markdown no-heading-anchor-links   :extend="extendMarkdown"    :src="MainComponent" />
  </div>
</template>
<script>
let  relative_path='/books/flutter/'
 import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('public/books/flutter/', false, /\.md$/),'md',false)
import {menu_tab_mixin,markdown_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin,markdown_mixin],
  data() {
    return {
       relative_path,
       img_prefix:'.'+relative_path,
       tab: all_modules[0].value,
       tab_level: 1, // 右侧 菜单 一级 为 1  二级为 2
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

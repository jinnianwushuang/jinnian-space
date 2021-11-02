<template>
  <div>
 <!-- <q-markdown  :extend="extendMarkdown"  :src="MainComponent" /> -->
 <div v-html="MainComponent"> </div>
  </div>
</template>
<script>
/** 
 * 特点是 东西全部打进来 了 针对 配置文件之类的 conf  . type 等 任何文件   , 同步  linux/nginx-conf
*/
let  relative_path='/books/linux/nginx-conf/'
 import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('public/books/linux/nginx-conf/', false, /\.conf$/),'conf',true,true,true)
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
        // this. compute_img_prefix()
    }
  },
};
</script>
<style lang="scss" scoped></style>

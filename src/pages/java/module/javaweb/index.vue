<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/sql/module/mysql/index.vue
 * @Description    : 
-->
<template>
  <div>
    <q-markdown
      v-if="MainComponent"
      :extend="extendMarkdown"
      :src="MainComponent"
    />
    <component v-else :is="`${tab}`"></component>
  </div>
</template>
<script>
 
//
let relative_path = "/books/java/javaweb/";
import { compute_config_base_on_require_context } from "src/boot/require-utils.js";
let { all_components, all_modules } = compute_config_base_on_require_context(
  require.context("public/books/java/javaweb/"  , true, /\.md$/),
  "md",
  true
);
import { menu_tab_mixin, markdown_mixin } from "src/mixins/index.js";
export default {
  mixins: [menu_tab_mixin, markdown_mixin],
  components: {
   
  },
  data() {
    return {
      relative_path,
      img_prefix: "." + relative_path,
      tab: all_modules[0].value,
      MainComponent: all_components[all_modules[0].value],
      tab_level: 2, // 右侧 菜单 一级 为 1  二级为 2
      tabs: [
        
        ...all_modules
      ]
    };
  },
  watch: {
    tab(newValue, oldValue) {
      this.MainComponent = all_components[this.tab];
      this.compute_img_prefix();
    }
  }
};
</script>
<style lang="scss" scoped></style>

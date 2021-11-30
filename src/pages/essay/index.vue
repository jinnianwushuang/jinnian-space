<template>
  <div>
  <q-markdown no-heading-anchor-links     :src="MainComponent" />
  </div>
</template>
<script>
 import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('./md/', false, /\.md$/),'md',false)
import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  data() {
    return {
      tab: all_modules[0].value,
       tab_level: 1, // 右侧 菜单 一级 为 1  二级为 2
       MainComponent:all_components[all_modules[0].value],
      tabs:all_modules
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

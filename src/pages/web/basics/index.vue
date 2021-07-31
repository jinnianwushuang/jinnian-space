<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/basics/index.vue
 * @Description    : 
-->
<template>
  <div>
    <div class="q-mx-lg">
      <component :is="`${tab}`"></component>
    </div>
  </div>
</template>
<script>
import m1 from "src/pages/web/basics/module/m1.vue";
import m2 from "src/pages/web/basics/module/m2.vue";
import m3 from "src/pages/web/basics/module/m3.vue";
import m4 from "src/pages/web/basics/module/m4.vue";
import m5 from "src/pages/web/basics/module/m5.vue";
// import m6 from "src/pages/web/basics/module/m6.vue";
import m7 from "src/pages/web/basics/module/m7.vue";
import m8 from "src/pages/web/basics/module/m8.vue";
import m9 from "src/pages/web/basics/module/m9.vue";
import m10 from "src/pages/web/basics/module/m10.vue";
import m11 from "src/pages/web/basics/module/m11.vue";
import { menu_tab_mixin } from "src/mixins/index.js";
export default {
  mixins: [menu_tab_mixin],
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
    // m6,
    m7,
    m8,
    m9,
    m10,
    m11
  },
  data() {
    return {
      tab: "m1",
      tab_level: 2,
      tabs: [
        { label: "基本", value: "m1" },
        { label: "存储", value: "m2" },
        { label: "渲染原理", value: "m3" },
        { label: "渲染原理2", value: "m11" },
     
       
        { label: "重排和重绘 ", value: "m7" },
        { label: "跨域", value: "m8" },
        { label: "bom", value: "m9" },
        { label: "dom", value: "m10" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

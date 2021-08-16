<!--
 * @Date           : 2020-11-05 21:36:01
 * @FilePath       : /jinnian-space/src/pages/web/js/index.vue
 * @Description    : 
-->
<template>
  <div>
   

    <div >
      <component :is="`${tab}`"></component>
    </div>
  </div>
</template>
<script>
import m1 from "src/pages/web/js/module/m1.vue";
import m2 from "src/pages/web/js/module/m2.vue";
import m3 from "src/pages/web/js/module/m3.vue";
import m4 from "src/pages/web/js/module/m4.vue";
import m5 from "src/pages/web/js/module/m5.vue";
import m6 from "src/pages/web/js/module/m6.vue";
import m7 from "src/pages/web/js/module/m7.vue";
import m8 from "src/pages/web/js/module/m8.vue";
import m9 from "src/pages/web/js/module/m9.vue";


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
    m8,
    m9,
 
  },

  data() {
    return {
      tab: "m1",
 tab_level: 2, 
      tabs: [
        { label: "循环遍历", value: "m1" },
        { label: "Event Loop", value: "m2" },
        { label: "js基础", value: "m3" },
        { label: "js高阶", value: "m4" },
        { label: "es6归纳1", value: "m5" },
        { label: "es6归纳2", value: "m6" },

        { label: "阮一峰JS总结", value: "m9" },
        { label: "jquery", value: "m8" },

        { label: "正则", value: "m7" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

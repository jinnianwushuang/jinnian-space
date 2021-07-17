<!--
 * @Date           : 2021-07-09 01:11:11
 * @FilePath       : /jinnian-space/src/pages/web/vue/index.vue
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
import m1 from "src/pages/web/vue/module/m1.vue";
import m2 from "src/pages/web/vue/module/m2.vue";
import m3 from "src/pages/web/vue/module/m3.vue";
import m4 from "src/pages/web/vue/module/m4.vue";
import m5 from "src/pages/web/vue/module/m5.vue";
import m6 from "src/pages/web/vue/module/m6.vue";
import m7 from "src/pages/web/vue/module/m7.vue";
import m8 from "src/pages/web/vue/module/m8.vue";
import m9 from "src/pages/web/vue/module/m9.vue";
import m10 from "src/pages/web/vue/module/m10.vue";
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
    m10
  },
  data() {
    return {
      tab: "m1",
  tab_level: 2, 
      tabs: [
         { label: "mv*", value: "m10" },
        { label: "基本", value: "m1" },
        { label: "双向绑定原理", value: "m2" },
        { label: "监听缺陷", value: "m3" },
        { label: "Virtual Dom", value: "m4" },
        { label: "vue-router", value: "m5" },
        { label: "前后端路由", value: "m6" },
        { label: "diff算法", value: "m7" },
         { label: "nextTick", value: "m9" },

        { label: "面试", value: "m8" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

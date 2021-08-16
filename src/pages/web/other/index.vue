<template>
  <div>
 

 <div > 
  <component :is="`${tab}`"></component>

</div>
  
  </div>
</template>
<script>


import m1 from "src/pages/web/other/module/m1.vue";
import m2 from "src/pages/web/other/module/m2.vue";
import m3 from "src/pages/web/other/module/m3.vue";
import m4 from "src/pages/web/other/module/m4.vue";
import m5 from "src/pages/web/other/module/m5.vue";
import m6 from "src/pages/web/other/module/m6.vue";
import m7 from "src/pages/web/other/module/m7.vue";
import m8 from "src/pages/web/other/module/m8.vue";
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
    m8
  },

  data() {
    return {
      tab: 'm1',
      tab_level: 2, 
      tabs: [
          { label: "前端性能监测方案" ,value:'m1'},
          { label: "算法" ,value:'m2'},
          { label: "调试" ,value:'m3'},
          { label: "性能" ,value:'m4'},
          { label: "现代前端技术解析" ,value:'m5'},
          { label: "安全" ,value:'m6'},
          { label: "缓存" ,value:'m7'},
          // { label: "基本" ,value:'m8'},
    
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

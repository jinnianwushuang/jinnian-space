<template>
  <div>
 
<div class="q-mx-lg"> 
  <component :is="`${tab}`"></component>

</div>
  
  </div>
</template>
<script>


import m1 from "src/pages/web/css/module/m1.vue";
import m2 from "src/pages/web/css/module/m2.vue";
import m3 from "src/pages/web/css/module/m3.vue";
import m4 from "src/pages/web/css/module/m4.vue";
import m5 from "src/pages/web/css/module/m5.vue";
import m6 from "src/pages/web/css/module/m6.vue";
import m7 from "src/pages/web/css/module/m7.vue";
import m8 from "src/pages/web/css/module/m8.vue";
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
          { label: "显隐" ,value:'m1'},
          { label: "全面梳理" ,value:'m2'},
          { label: "display" ,value:'m3'},
          { label: "var()" ,value:'m4'},
          { label: "SASS总结" ,value:'m5'},
          // { label: "基本" ,value:'m6'},
          // { label: "基本" ,value:'m7'},
          // { label: "基本" ,value:'m8'},
    
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

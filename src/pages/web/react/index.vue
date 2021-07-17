
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/react/index.vue
 * @Description    : 
-->
<template>
  <div>
 

    <component :is="`${tab}`"></component>
  </div>
</template>

<script>

import m1 from "./module/m1.vue";
import m2 from "./module/m2.vue";
import m3 from "./module/m3.vue";
import m4 from "./module/m4.vue";
import m5 from "./module/m5.vue";


import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    m2,
    m3,
    m4,
    m5



  },
  data() {
    return {
      tab: "m3",
       tab_level: 2, 
      tabs: [
        { label: "react", value: "m1" },
        { label: "基础", value: "m2" },
        { label: "基础", value: "m3" },
        { label: "基础demo", value: "m4" },
        { label: "核心精讲", value: "m5" },


      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>


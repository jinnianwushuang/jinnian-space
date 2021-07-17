<!--
 * @Date           : 2021-04-12 16:09:51
 * @FilePath       : /jinnian-space/src/pages/sql/module/redis/index.vue
 * @Description    : 
-->
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/index.vue
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
 
import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    m2
     

  },
  data() {
    return {
      tab: "m1",
           tab_level: 2,
      tabs: [
        { label: "Redis基础", value: "m1" },
        { label: "Redis", value: "m2" },
      

      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>


<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/sql/index.vue
 * @Description    : 
-->
<template>
  <div>
 

    <component :is="`${tab}`"></component>
  </div>
</template>

<script>

import m1 from "./module/mysql/index.vue";
import m2 from "./module/redis/index.vue";
 
 
import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    m2,
 
  
  },
  data() {
    return {
      tab: "m1",
       tab_level: 1,
      tabs: [
        { label: "mysql", value: "m1" },
        { label: "redis", value: "m2" },
   
      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>

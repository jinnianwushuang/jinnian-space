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
import m1 from "src/pages/java/module/basics/index.vue";
 
import m3 from "src/pages/java/module/javaweb/index.vue";
import m5 from "src/pages/java/module/mybatis/index.vue";
import m6 from "src/pages/java/module/maven/index.vue";
import m7 from "src/pages/java/module/springmvc/index.vue";
import m70 from "src/pages/java/module/system-design/index.vue";

 import m14 from "src/pages/java/module/m4.vue";
 import m15 from "src/pages/java/module/m4.vue";
 import m16 from "src/pages/java/module/m4.vue";
 import m88 from "src/pages/java/module/m88.vue";
 import m10 from "src/pages/java/module/m10.vue";
 import m12 from "src/pages/java/module/m12.vue";
 import m21 from "src/pages/java/module/m99.vue";

 import m99 from "src/pages/java/module/basic/index.vue";

import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    // m2,
    m3,
   
    m5,
    m6,
    m7,
    // m8,
    // m9,
    m10,
    m12,
        m14,
    m15,
    m16,
    m21,
    m70,
    m88,
    m99,
  },
  data() {
    return {
      tab: "m1",
       tab_level: 1,
      tabs: [
          { label: "JAVA-参照", value: "m10" },
        { label: "JAVA基础-黑马", value: "m1" },
        { label: "JAVA基础", value: "m99" },
        { label: "javaweb", value: "m3" },
                { label: "spring系列", value: "m7" },
                { label: "传智健康", value: "m21" },
        { label: "collection", value: "m14" },
        { label: "jvm", value: "m15" },
        { label: "multi-thread", value: "m16" },
      
        { label: "mybatis", value: "m5" },
        { label: "maven", value: "m6" },
        { label: "其他框架", value: "m12" },
        { label: "系统设计", value: "m70" },
        { label: "其他", value: "m88" },

      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>

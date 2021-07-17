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
// import m2 from "src/pages/java/module/m2.vue";
import m4 from "src/pages/java/module/jdbc/index.vue";
import m3 from "src/pages/java/module/javaweb/index.vue";
import m5 from "src/pages/java/module/mybatis/index.vue";
import m6 from "src/pages/java/module/maven/index.vue";
import m7 from "src/pages/java/module/springmvc/index.vue";
import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    // m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    // m8,
    // m9,
    // m10,
  },
  data() {
    return {
      tab: "m1",
       tab_level: 1,
      tabs: [
        { label: "JAVA基础", value: "m1" },
        { label: "javaweb", value: "m3" },
        { label: "JDBC", value: "m4" },
        { label: "mybatis", value: "m5" },
        { label: "maven", value: "m6" },
        { label: "springmvc", value: "m7" },
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>

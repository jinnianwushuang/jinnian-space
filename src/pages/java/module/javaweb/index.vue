<!--
 * @Date           : 2021-04-12 16:09:51
 * @FilePath       : /jinnian-space/src/pages/java/module/javaweb/index.vue
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
import m3 from "./module/m3.vue";
import m4 from "./module/m4.vue";
import m5 from "./module/m5.vue";
import m6 from "./module/m6.vue";

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



  },
  data() {
    return {
      tab: "m6",
      tab_level: 2,
      tabs: [
        { label: "Tomcat&Http协议", value: "m6" },
        { label: "Servlet", value: "m1" },
        { label: "Request&Response", value: "m2" },
        { label: "Cookie&SessionJsp", value: "m3" },
        { label: "EL&Filter&Listener", value: "m4" },
        { label: "JSP", value: "m5" },

      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>


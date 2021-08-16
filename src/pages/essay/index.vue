<!--
 * @Date           : 2021-04-12 16:09:51
 * @FilePath       : /jinnian-space/src/pages/basics-template/index.vue
 * @Description    : 
-->
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/index.vue
 * @Description    : 
-->
<template>
  <div>

    <div ><component :is="`${tab}`"></component></div>
  
  </div>
</template>

<script>

import m1 from "./module/m1.vue";
import m2 from "./module/m2.vue";
import m3 from "./module/m3.vue";
import m4 from "./module/m4.vue";
import m5 from "./module/m5.vue";
import m6 from "./module/m6.vue";
import m7 from "./module/m7.vue";

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



  },
  data() {
    return {
      tab: "m4",
       tab_level: 1, // 右侧 菜单 一级 为 1  二级为 2
      tabs: [
      { label: "essential_questions_to_ask_your_future_self", value: "m4" },
      { label: "7-things-you-should-know-reach-your-dreams",   value: "m1" },
      { label: "goal-oriented", value: "m5" },
      { label: "how-reach-your-dreams-5-simple-steps", value: "m2" },
      { label: "priceless-advice", value: "m6" },
      { label: "thinking-outside-box", value: "m3" },
      { label: "why_30_is_not_the_new_20", value: "m7" },


      ],
  
 
    };
  }
};
</script>

<style lang="scss" scoped></style>


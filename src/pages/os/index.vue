<!--
 * @Date           : 2021-07-09 01:11:11
 * @FilePath       : /jinnian-space/src/pages/os/index.vue
 * @Description    : 
-->
<template>
  <div>
 

    <component :is="`${tab}`"></component>
  </div>
</template>

<script>
 import win from "src/pages/os/win/index.vue"
 import mac from "src/pages/os/mac/index.vue"
import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
   win,
    mac

  },
  data() {
    return {
       tab_level: 1,
      tab: "win",
      tabs: [
           { label: "win", value: "win" },
        { label: "mac", value: "mac" },
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

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
    <q-tabs v-model="tab" align="left" inline-label dense class="text-teal">
      <q-tab
        v-for="(item, index) in tabs"
        :key="`tabs_${index}`"
        :name="`${item.value}`"
        :label="`${index + 1}.${item.label}`"
      />
    </q-tabs>

    <component :is="`${tab}`"></component>
  </div>
</template>

<script>

import m1 from "../diary/module/m1.vue";
import m2 from "../diary/module/m2.vue";

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
        tab_level: 2,
      tabs: [
        { label: "note-202108", value: "m1" },
        // { label: "m2", value: "m2" },


      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>


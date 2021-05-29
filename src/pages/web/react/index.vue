
<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/react/index.vue
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

import m1 from "./module/m1.vue";
import m2 from "./module/m2.vue";
import m3 from "./module/m3.vue";
import m4 from "./module/m4.vue";
import m5 from "./module/m5.vue";


export default {
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


<template>
  <div>
    <q-tabs v-model="tab" align="left" inline-label dense class="text-teal">
      <q-tab
        v-for="(item, index) in tabs"
        :key="`tabs_${index}`"
        :name="`${index + 1}`"
        :label="`${index + 1}.${item.text}`"
      />
    </q-tabs>

    <component :is="`m${tab}`"></component>
  </div>
</template>

<script>

import m1 from "src/pages/c/module/m1.vue";
import m2 from "src/pages/c/module/m2.vue";
import m3 from "src/pages/c/module/m3.vue";
import m4 from "src/pages/c/module/m4.vue";
import m5 from "src/pages/c/module/m5.vue";
import m6 from "src/pages/c/module/m6.vue";
import m7 from "src/pages/c/module/m7.vue";
import m8 from "src/pages/c/module/m8.vue";
export default {
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8
  },
  data() {
    return {
      tab: 1,
      tabs: [1, 2, 3, 4, 5, 6, 7, 8],
      tabs: [
        { text: "未开发" },
        { text: "未开发" },
        { text: "未开发" },
        { text: "未开发" },
        { text: "未开发" },
        { text: "未开发" },
        { text: "未开发" },
        { text: "未开发" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

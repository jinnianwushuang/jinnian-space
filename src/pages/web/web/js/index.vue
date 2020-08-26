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

    <div class="q-mx-lg">
      <component :is="`${tab}`"></component>
    </div>
  </div>
</template>
<script>
import m1 from "src/pages/web/web/js/module/m1.vue";
import m2 from "src/pages/web/web/js/module/m2.vue";
import m3 from "src/pages/web/web/js/module/m3.vue";
import m4 from "src/pages/web/web/js/module/m4.vue";
import m5 from "src/pages/web/web/js/module/m5.vue";
import m6 from "src/pages/web/web/js/module/m6.vue";
import m7 from "src/pages/web/web/js/module/m7.vue";
import m8 from "src/pages/web/web/js/module/m8.vue";
import m9 from "src/pages/web/web/js/module/m9.vue";
import m10 from "src/pages/web/web/js/module/m10.vue";


export default {
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10
  },

  data() {
    return {
      tab: "m1",

      tabs: [
        { label: "循环遍历", value: "m1" },
        { label: "Event Loop", value: "m2" },
        { label: "js基础", value: "m3" },
        { label: "js高阶", value: "m4" },
        { label: "es6归纳1", value: "m5" },
        { label: "es6归纳2", value: "m6" },

        { label: "阮一峰JavaScript基础总结", value: "m9" },
        { label: "jquery", value: "m8" },
        { label: "ts", value: "m10" },
        { label: "正则", value: "m7" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

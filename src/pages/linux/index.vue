<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/index.vue
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

<div class="q-mx-lg">     <component :is="`${tab}`"></component></div>
  </div>
</template>

<script>

import m1 from "src/pages/linux/module/m1.vue";
import m2 from "src/pages/linux/module/m2.vue";
import m3 from "src/pages/linux/module/m3.vue";
import m4 from "src/pages/linux/module/m4.vue";
import m5 from "src/pages/linux/module/m5.vue";
import m6 from "src/pages/linux/module/m6.vue";
import m7 from "src/pages/linux/module/m7.vue";
import m8 from "src/pages/linux/module/m8.vue";
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
      tab: 'm1',
      
      tabs: [
   
            { label: "基础", value: "m1" },
        { label: "vim", value: "m2" },
        { label: "实际", value: "m3" },
        { label: "运维书籍", value: "m4" },
        { label: "shell基础", value: "m5" },
        { label: "未开发", value: "m6" },
        { label: "未开发", value: "m7" },
        { label: "未开发", value: "m8" },
   
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

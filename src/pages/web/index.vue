<!--
 * @Date           : 2020-11-05 21:36:01
 * @FilePath       : /jinnian-space/src/pages/web/index.vue
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
import basics from "src/pages/web/basics/index.vue";
import css from "src/pages/web/css/index.vue";
import js from "src/pages/web/js/index.vue";
import http from "src/pages/web/http/index.vue";
import vue from "src/pages/web/vue/index.vue";
import react from "src/pages/web/react/index.vue";

import other from "src/pages/web/other/index.vue";
import tool from "src/pages/web/tool/index.vue";
import ts from "src/pages/web/ts/index.vue";
export default {
  components: {
    basics,
    css,
    js,
    http,
    vue,
    other,
    tool,
    react,
    ts
  },
  data() {
    return {
      tab: "basics",
      tabs: [
        { label: "basics", value: "basics" },
        { label: "css", value: "css" },
        { label: "js", value: "js" },
        { label: "http", value: "http" },
        { label: "vue", value: "vue" },
        { label: "react", value: "react" },
        { label: "ts", value: "ts" },

        { label: "other", value: "other" },
        { label: "tool", value: "tool" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

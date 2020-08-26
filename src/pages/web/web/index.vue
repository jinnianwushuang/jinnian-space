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
import basics from "src/pages/web/web/basics/index.vue";
import css from "src/pages/web/web/css/index.vue";
import js from "src/pages/web/web/js/index.vue";
import http from "src/pages/web/web/http/index.vue";
import vue from "src/pages/web/web/vue/index.vue";
import react from "src/pages/web/web/react/index.vue";

import other from "src/pages/web/web/other/index.vue";
import tool from "src/pages/web/web/tool/index.vue";
export default {
  components: {
    basics,
    css,
    js,
    http,
    vue,
    other,
    tool,
    react
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

        { label: "other", value: "other" },
        { label: "tool", value: "tool" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

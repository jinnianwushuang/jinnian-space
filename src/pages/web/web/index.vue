<template>
  <div>
    <q-tabs v-model="tab" align="left" inline-label dense  class="text-teal">
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
export default {
  components: {
    basics: () => import("src/pages/web/web/basics/index.vue"),
    js: () => import("src/pages/web/web/js/index.vue"),
    http: () => import("src/pages/web/web/http/index.vue"),
    vue: () => import("src/pages/web/web/vue/index.vue"),
    other: () => import("src/pages/web/web/other/index.vue"),
    tool: () => import("src/pages/web/web/tool/index.vue"),

  },
  data() {
    return {
      tab: 'basics',
      tabs: [
        { label: "basics" ,value:'basics'},
        { label: "js" ,value:'js'},
        { label: "http" ,value:'http'},
        { label: "vue" ,value:'vue'},
        { label: "other" ,value:'other'},
        { label: "tool" ,value:'tool'},
      
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

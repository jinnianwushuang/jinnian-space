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

  import  basics from  "src/pages/web/web/basics/index.vue"
  import  js from  "src/pages/web/web/js/index.vue"
  import  http from "src/pages/web/web/http/index.vue"
  import  vue from "src/pages/web/web/vue/index.vue"
  import  other from "src/pages/web/web/other/index.vue"
  import  tool from "src/pages/web/web/tool/index.vue"
export default {
  components: {
    basics,
    js,
    http,
    vue,
    other,
    tool,

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

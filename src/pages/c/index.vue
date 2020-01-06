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

  import C3 from  "src/pages/c/C#/index.vue"
  import other from  "src/pages/c/other/index.vue"
  import tool from  "src/pages/c/tool/index.vue"

export default {
  components: {
   C3,
   other,
   tool


  },
  data() {
    return {
      tab: 'C3',
      tabs: [
        { label: "C#" ,value:'C3'},
        { label: "其他" ,value:'other'},
        { label: "工具" ,value:'tool'},
      
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

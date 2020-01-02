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
    m1: () => import("src/pages/sql/module/m1.vue"),
    m2: () => import("src/pages/sql/module/m2.vue"),
    m3: () => import("src/pages/sql/module/m3.vue"),
    m4: () => import("src/pages/sql/module/m4.vue"),
    m5: () => import("src/pages/sql/module/m5.vue"),
    m6: () => import("src/pages/sql/module/m6.vue"),
    m7: () => import("src/pages/sql/module/m7.vue"),
    m8: () => import("src/pages/sql/module/m8.vue")
  },
  data() {
    return {
      tab: 'm1',
     
      tabs: [
          { label: "g" ,value:'m1'},
          { label: "基本" ,value:'m2'},
          { label: "基本" ,value:'m3'},
          { label: "基本" ,value:'m4'},
          { label: "基本" ,value:'m5'},
          { label: "基本" ,value:'m6'},
          { label: "基本" ,value:'m7'},
          { label: "基本" ,value:'m8'},
    
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

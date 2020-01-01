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
export default {
  components: {
    m1: () => import("src/pages/python/module/m1.vue"),
    m2: () => import("src/pages/python/module/m2.vue"),
    m3: () => import("src/pages/python/module/m3.vue"),
    m4: () => import("src/pages/python/module/m4.vue"),
    m5: () => import("src/pages/python/module/m5.vue"),
    m6: () => import("src/pages/python/module/m6.vue"),
    m7: () => import("src/pages/python/module/m7.vue"),
    m8: () => import("src/pages/python/module/m8.vue")
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

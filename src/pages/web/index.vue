<template>
  <div>
    <q-tabs v-model="tab" align="left" inline-label dense class="text-teal">
      <q-tab
        v-for="(item, index) in tabs"
        :key="`tabs_${index}`"
        :name="`${item}`"
        :label="`${index + 1}.${item}`"
      />
    </q-tabs>

    <component :is="`${tab}`"></component>
  </div>
</template>

<script>
export default {
  components: {
    web: () => import("src/pages/web/web/index.vue"),
    ios: () => import("src/pages/web/ios/index.vue"),
    android: () => import("src/pages/web/android/index.vue")
  },
  data() {
    return {
      tab: "web",
      tabs: ["web", "ios", "android"]
    };
  }
};
</script>

<style lang="scss" scoped></style>

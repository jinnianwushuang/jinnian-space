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
   win: () => import("src/pages/os/win/index.vue"),
    mac: () => import("src/pages/os/mac/index.vue"),

  },
  data() {
    return {
      tab: "win",
      tabs: ["win", "mac"]
    };
  }
};
</script>

<style lang="scss" scoped></style>

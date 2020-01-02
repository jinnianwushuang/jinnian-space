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
 import win from "src/pages/os/win/index.vue"
 import mac from "src/pages/os/mac/index.vue"
export default {
  components: {
   win,
    mac

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

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
import ios from "src/pages/web/ios/index.vue";
import web from "src/pages/web/web/index.vue";
import android from "src/pages/web/android/index.vue";

export default {
  components: {
    web,
    ios,
    android
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

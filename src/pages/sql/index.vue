<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/sql/index.vue
 * @Description    : 
-->
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

import m1 from "./module/mysql/index.vue";
import m2 from "./module/redis/index.vue";
 
 

export default {
  components: {
    m1,
    m2,
 
  
  },
  data() {
    return {
      tab: "m1",
      tabs: [
        { label: "mysql", value: "m1" },
        { label: "redis", value: "m2" },
   
      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>

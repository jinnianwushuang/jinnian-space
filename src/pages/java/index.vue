<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/index.vue
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

import m1 from "src/pages/java/module/m1.vue";
import m2 from "src/pages/java/module/m2.vue";
import m4 from "src/pages/java/module/jdbc/index.vue";
import m3 from "src/pages/java/module/javaweb/index.vue";
import m5 from "src/pages/java/module/mybatis/index.vue";

 

export default {
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
  
    // m7,
    // m8,
    // m9,
    // m10,
  },
  data() {
    return {
      tab: "m1",
      tabs: [
        { label: "笔记", value: "m1" },
        { label: "JAVA基础", value: "m2" },
        // { label: "JSP", value: "m3" },
        // { label: "MYSQL", value: "m4" },
        // { label: "笔记", value: "m5" },
        // { label: "笔记", value: "m6" },
        // { label: "笔记", value: "m7" },
        // { label: "笔记", value: "m8" },
              { label: "javaweb", value: "m3" },
        { label: "JDBC", value: "m4" },
  
        { label: "mybatis", value: "m5" },
       
      ],
 
    };
  }
};
</script>

<style lang="scss" scoped></style>

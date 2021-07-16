<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/index.vue
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

   <!-- <div class="q-gutter-sm">
     
         
      <q-btn
      dense
        v-for="(item, index) in tabs"
        :key="`tabs_${index}`"
        :name="`${item.value}`"
        :label="`${index + 1}.${item.label}`"
      />
 

     </div>  -->

    <div class="q-mx-lg"><component :is="`${tab}`"></component></div>
  </div>
</template>

<script>
import m1 from "src/pages/linux/module/m1.vue";
import m2 from "src/pages/linux/module/m2.vue";
import m3 from "src/pages/linux/module/m3.vue";
import m4 from "src/pages/linux/module/m4.vue";
import m5 from "src/pages/linux/module/m5.vue";
import m6 from "src/pages/linux/module/m6.vue";
import m7 from "src/pages/linux/module/m7.vue";
import m8 from "src/pages/linux/module/m8.vue";
import m9 from "src/pages/linux/module/m9.vue";
import m10 from "src/pages/linux/module/m10.vue";
import m13 from "src/pages/linux/module/m13.vue";
import m14 from "src/pages/linux/module/m14.vue";
import m15 from "src/pages/linux/module/m15.vue";
import m19 from "src/pages/linux/module/m16.vue";
import m16 from "src/pages/linux/heima/index.vue";
import m18 from "src/pages/linux/module/java-linux/index.vue";


export default {
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m13,
    m14,
    m15,
    m16,
    m18,
    m19,
  },

  data() {
    return {
      tab: "m1",

      tabs: [
        { label: "笔记", value: "m6" },
        { label: "linux-目录", value: "m13" },
        { label: "linux命令", value: "m1" },
        { label: "调度+进程", value: "m7" },
        { label: "YUM+LAMP", value: "m19" },
        { label: "黑马云计算", value: "m16" },
        { label: "linux-备忘", value: "m2" },
        { label: "shell-基础", value: "m3" },
        { label: "运维书籍", value: "m4" },
     
        { label: "Linux—前端", value: "m5" },
        { label: "Linux—java", value: "m18" },

      
        { label: "前端运维", value: "m8" },
        { label: "日常运维", value: "m9" },
     
        { label: "Nginx", value: "m14" },
        { label: "Nginx 配置", value: "m15" },
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

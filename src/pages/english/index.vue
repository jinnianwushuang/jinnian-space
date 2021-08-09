<template>
  <div>
  <component :is="`${tab}`"></component>
  </div>
</template>

<script>

import m1 from "src/pages/english/module/m1.vue";
import m2 from "src/pages/english/module/m2.vue";
import m3 from "src/pages/english/module/m3.vue";
import m4 from "src/pages/english/module/m4.vue";
import m5 from "src/pages/english/module/m5.vue";
import m6 from "src/pages/english/module/m6.vue";
import m7 from "src/pages/english/module/m7.vue";
import m8 from "src/pages/english/module/m8.vue";
import m9 from "src/pages/english/diary/index.vue";
import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9
  },
  data() {
    return {
      tab: "m9",
        tab_level: 1, 
      tabs: [
       { label: "phonetic", value: "m1" },
       { label: "word", value: "m2" },
       { label: "phrase", value: "m3" },
       { label: "sentence", value: "m4" },
       { label: "irregular-verb", value: "m5" },
       { label: "verb-tense", value: "m6" },
       { label: "parts-of-speech", value: "m7" },
       { label: "roots-prefixes-suffixes", value: "m8" },
   
       { label: "diary", value: "m9" },
      
 
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
  <component :is="`${tab}`"></component>
  </div>
</template>

<script>

import m1 from "src/pages/english/module/m1.vue";
// import m2 from "src/pages/english/module/m2.vue";
import m3 from "src/pages/english/module/m3.vue";
import m4 from "src/pages/english/module/m4.vue";
import m5 from "src/pages/english/module/m5.vue";
import m6 from "src/pages/english/module/m6.vue";
import m7 from "src/pages/english/module/m7.vue";
import m8 from "src/pages/english/module/m8.vue";
// import m9 from "src/pages/english/module/m9.vue";
import m10 from "src/pages/english/module/m10.vue";
import m11 from "src/pages/english/module/m11.vue";
// import m99 from "src/pages/english/diary/index.vue";
import {menu_tab_mixin} from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin],
  components: {
    m1,
    // m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9:()=>import("src/pages/english/module/m9.vue"),
    m10,
    m11,
    m12:()=>import("src/pages/english/module/m12.vue"),
    m13:()=>import("src/pages/english/module/m13.vue"),
    m14:()=>import("src/pages/english/module/m14.vue"),
    m15:()=>import("src/pages/english/module/m15.vue"),
    m16:()=>import("src/pages/english/module/m16.vue"),
    m17:()=>import("src/pages/english/module/m17.vue"),
    m18:()=>import("src/pages/english/module/m18.vue"),
    m99:()=>import("src/pages/english/diary/index.vue")
  },
  data() {
    return {
      tab: "m18",
        tab_level: 1, 
      tabs: [
               { label: "word-review", value: "m11" },
       { label: "level-phonetic", value: "m1" },
              { label: "parts-of-speech", value: "m7" },
              { label: "ket-vocabulary-list", value: "m15" },
              { label: "pet-vocabulary-list", value: "m16" },
              { label: "New-Concept-English ", value: "m17" },
              { label: "category words", value: "m18" },
      //  { label: "excel测试", value: "m11" },

       { label: "phrase", value: "m3" },
       { label: "sentence", value: "m4" },
       { label: "irregular-verb", value: "m5" },
       { label: "verb-tense", value: "m6" },

       { label: "roots-prefixes-suffixes", value: "m8" },
       { label: "idioms", value: "m9" },
       { label: "proverbs", value: "m10" },
       { label: "gerunds-and-infinitives", value: "m12" },
       { label: "commom-phrasal-verbs-list", value: "m13" },
       { label: "phrasal-verbs-list", value: "m14" },
   
       { label: "diary", value: "m99" },
      
 
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

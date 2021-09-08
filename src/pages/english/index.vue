<template>
  <div>
    <component :is="main_data"></component>
  </div>
</template>
<script>
let field_components = require.context("./module/", false, /\.vue$/, "lazy");
let all_keys = field_components.keys();
console.log("all_keys-----", all_keys);
import { menu_tab_mixin } from "src/mixins/index.js";
export default {
  mixins: [menu_tab_mixin],
  data() {
    return {
      tab: "m18",
      tab_level: 1,
      main_data: {
        render: () => {}
      },
      tabs: [
        { label: "pdf books", value: "m20" },
        { label: "word-review", value: "m11" },
        { label: "category words", value: "m18" },
        { label: "New-Concept-English ", value: "m17" },
        { label: "level-phonetic", value: "m1" },
        { label: "parts-of-speech", value: "m7" },
        { label: "ket-vocabulary-list", value: "m15" },
        { label: "pet-vocabulary-list", value: "m16" },
      
       
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
        { label: "diary", value: "m19" }
      ]
    };
  },
  created() {
    this.compute_main_data();
  },
  watch: {
    tab(newValue, oldValue) {
      this.compute_main_data();
    }
  },
  methods: {
    compute_main_data() {
      let path = all_keys.find(x => `./${this.tab}.vue` == x);
      console.log("-----------", this.tab, path);
      field_components(path).then(module_data => {
        // console.log("module_data========", module_data);
        this.main_data = module_data.default;
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>

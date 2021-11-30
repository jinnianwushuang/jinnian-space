<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/web/ts/module/m2.vue
 * @Description    : 
-->

 
<template>
  <div class="">
  <q-markdown no-heading-anchor-links   :src="MainComponent1" />
 <q-markdown no-heading-anchor-links   :src="MainComponent2" />
 <q-markdown no-heading-anchor-links   :src="MainComponent3" />
 <q-markdown no-heading-anchor-links   :src="MainComponent4" />
 <q-markdown no-heading-anchor-links   :src="MainComponent5" />
 <q-markdown no-heading-anchor-links   :src="MainComponent6" />
 <q-markdown no-heading-anchor-links   :src="MainComponent7" />
 

  </div>
</template>

<script>
import MainComponent1 from "../md/templates/global-modifying-module.d.ts.md"
import MainComponent2 from "../md/templates/global-plugin.d.ts.md"
import MainComponent3 from "../md/templates/global.d.ts.md"
import MainComponent4 from "../md/templates/module-class.d.ts.md"
import MainComponent5 from "../md/templates/module-function.d.ts.md"
import MainComponent6 from "../md/templates/module-plugin.d.ts.md"
import MainComponent7 from "../md/templates/module.d.ts.md"
export default {
  data() {
    return {
    MainComponent1,
MainComponent2,
MainComponent3,
MainComponent4,
MainComponent5,
MainComponent6,
MainComponent7,
 
    };
  }
};
</script>

<style lang="scss" scoped></style>



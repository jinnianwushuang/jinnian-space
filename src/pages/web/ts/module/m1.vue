<!--
 * @Date           : 2021-04-12 16:02:15
 * @FilePath       : /jinnian-space/src/pages/web/ts/module/m1.vue
 * @Description    : 
-->

 
<template>
  <div class="">
  <q-markdown :src="MainComponent1" />
<q-markdown :src="MainComponent2" />
<q-markdown :src="MainComponent3" />
<q-markdown :src="MainComponent4" />
<q-markdown :src="MainComponent5" />
<q-markdown :src="MainComponent6" />
<q-markdown :src="MainComponent7" />
 
  </div>
</template>

<script>
import MainComponent1 from "../md/handbook/basic-types.md"
import MainComponent2 from "../md/handbook/classes.md"
import MainComponent3 from "../md/handbook/enums.md"
import MainComponent4 from "../md/handbook/functions.md"
import MainComponent5 from "../md/handbook/generics.md"
import MainComponent6 from "../md/handbook/interfaces.md"
import MainComponent7 from "../md/handbook/literal-types.md"
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



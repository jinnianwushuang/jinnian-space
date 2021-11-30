<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/web/react/module/m3.vue
 * @Description    : 
-->
 
 
<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
     <q-markdown no-heading-anchor-links   :src="MainComponent1" />
  </div>
</template>

<script>
import MainComponent from "../md/react基础Day03-生命周期&render props模式&高阶组件&原理揭秘.md";
import MainComponent1 from "../md/react基础Day04-React原理揭秘&React路由基础.md";
export default {
  data() {
    return {
      MainComponent,
      MainComponent1,
    };
  }
};
</script>

<style lang="scss" scoped></style>




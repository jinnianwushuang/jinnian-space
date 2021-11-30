 
 
<template>
  <div class="">
     <q-markdown no-heading-anchor-links   :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/js2.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>


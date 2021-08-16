
 
<template>
  <div class="">
    <q-markdown :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/基本词汇.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



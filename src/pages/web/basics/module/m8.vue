
 
<template>
  <div class="">
    <q-markdown :src="MainComponent" />
  </div>
</template>

<script>
import MainComponent from "../md/跨域.md";
export default {
  data() {
    return {
      MainComponent
    };
  }
};
</script>

<style lang="scss" scoped></style>



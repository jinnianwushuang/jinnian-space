<template>
  <div class="">
     <q-markdown no-heading-anchor-links     :src="MainComponent" />
  </div>
</template>
<script>
import MainComponent from "../md/循环.md";
export default {
  data() {
    return {
      MainComponent,
 
    };
  },
  methods: {
    
  }
};
</script>
<style lang="scss" scoped></style>
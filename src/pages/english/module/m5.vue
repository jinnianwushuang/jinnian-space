<template>
  <div class="q-my-md q-mx-sm">
     <q-markdown no-heading-anchor-links     :src="MainComponent" />
  </div>
</template>
<script>
import MainComponent from "../md/regular-irregular-verb.md";
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

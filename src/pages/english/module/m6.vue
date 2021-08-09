<template>
  <div class="q-my-md q-mx-sm">
    <q-markdown   :src="MainComponent" />
  </div>
</template>
<script>
import MainComponent from "../md/verb-tense.md";
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

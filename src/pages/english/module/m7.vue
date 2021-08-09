<template>
  <div class="q-my-md q-mx-sm">
    <q-markdown   :src="MainComponent" />
  </div>
</template>
<script>
import MainComponent from "../md/parts-of-speech.md";
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

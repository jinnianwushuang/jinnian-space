<template>
  <div class="q-my-md q-mx-sm">
   
    <q-markdown   :src="MainComponent2" />
  </div>
</template>
<script>

import MainComponent2 from "../md/parts-of-speech.md";
export default {
  data() {
    return {
     
      MainComponent2
   
    };
  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped></style>

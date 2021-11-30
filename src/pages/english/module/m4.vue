<template>
  <div class="q-my-md q-mx-sm">
     <q-markdown no-heading-anchor-links     :src="MainComponent" />
  </div>
</template>
<script>
import MainComponent from "../md/daily-sentence.md";
export default {
  data() {
    return {
      MainComponent,
      img_prefix:'./img/linux/heima-Linux云计算/讲义/'
    };
  },
  methods: {
     
  }
};
</script>
<style lang="scss" scoped></style>

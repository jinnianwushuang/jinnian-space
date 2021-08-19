<template>
  <div class="q-my-md q-mx-sm">
     <div v-html="maindocx"></div>
  </div>
</template>
<script>

import maindocx from "../md/22105-ket-vocabulary-list.docx";
console.log(  'maindocx-------------', maindocx); 
export default {
  data() {
    return {
      maindocx
   
    };
  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped></style>

<template>
    <div>
         <json-api-viewer
      title="QPdfviewer API"
      :json="json"
    />
    </div>
</template>

<script>
import json from '@quasar/quasar-app-extension-qpdfviewer/src/component/QPdfviewer.json'
    export default {
      data () {
    return {
     
      json: json
    }
  },
    
    }
</script>

<style lang="scss" scoped>

</style>
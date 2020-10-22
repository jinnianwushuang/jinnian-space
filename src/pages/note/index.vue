<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/note/index.vue
 * @Description    : 
-->
<template>
    <div class="q-mx-lg">
<div class="text-h5 q-my-md">路在脚下</div>

    <q-timeline color="secondary">
      <!-- <q-timeline-entry heading>
       路在脚下
      </q-timeline-entry> -->

      <q-timeline-entry
      v-for="(item,index) in record" :key="`record_note__tmleline${index}`"
   
        :title="item.date"
      >
        <div>
         {{item.note}}
        </div>
      </q-timeline-entry>

 
    </q-timeline>

    </div>
</template>

<script>
import record from "src/config/note/record.js"
    export default {
        data() {
            return {
                record,
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>
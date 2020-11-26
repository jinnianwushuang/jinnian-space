<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/note/index.vue
 * @Description    : 
-->
<template>
    <div class="q-mx-lg">
             <q-page-sticky position="top" expand class="bg-primary text-white z-max">
            <q-toolbar>
              <q-btn flat round dense icon="map" />
              <q-toolbar-title>林肯领航员，星舟一号，环游中国。旅居。180W 预算 加油！人生不打折！</q-toolbar-title>
            </q-toolbar>
          </q-page-sticky>       
<div class="text-h5 q-my-md " style="">路在脚下</div>

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
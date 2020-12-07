<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/note/index.vue
 * @Description    : 
-->
<template>
  <div class="q-mx-lg q-gutter-y-md">
    <!-- <q-page-sticky position="top" expand class="bg-primary text-white z-max">
      <q-toolbar>
        <q-btn flat round dense icon="map" />
        <q-toolbar-title
          >林肯飞行员（75W），星舟一号(32W)，大疆，索尼，环游中国。旅居。130W
          预算 加油！人生不打折！</q-toolbar-title
        >
      </q-toolbar> 
    </q-page-sticky> -->

    <div class="text-h5  " style="">路在脚下</div>
    <div>林肯飞行员顶配（75W），星舟一号(32W)，大疆，索尼。130W </div>
         
              <div>林肯领航员顶配（130W），十万多的拖挂，大疆，索尼。170W </div>
         
     <q-scroll-area style="height: calc(100vh - 200px); max-width: 400px;">

    <q-timeline color="secondary">
      <!-- <q-timeline-entry heading>
       路在脚下
      </q-timeline-entry> -->
      <q-timeline-entry
        v-for="(item, index) in record"
        :key="`record_note__tmleline${index}`"
        :title="item.date"
      >
        <div>
          {{ item.note }}
        </div>
      </q-timeline-entry>
    </q-timeline>
         </q-scroll-area>
  </div>
</template>
<script>
import record from "src/config/note/record.js";
export default {
  data() {
    return {
      record
    };
  }
};
</script>
<style lang="scss" scoped></style>

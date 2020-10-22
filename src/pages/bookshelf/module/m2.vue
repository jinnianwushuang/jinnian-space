<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/bookshelf/module/m2.vue
 * @Description    : 
-->
<template>
  <div class="q-pa-md">
    <div class="q-mb-md  ">数量：        {{ book_to_buy.length+23}}</div>
 
    <q-markup-table >
      <thead>
        <tr class="text-left">
          <th class="">分类</th>
           <th class="">语种</th>
          <th class="">名字</th>
          <th class="">是否套装</th>
          <th class="">本数</th>
          <th class="">是否已购买</th>
          

        </tr>
      </thead>
        
      <tbody>
        <tr v-for="(item,index) in book_to_buy" :key="index">
          <td class="">{{ item.type}}</td>
           <td class="">{{ item.lang=='en'?'英文':'中文'}}</td>
          <td class=""> {{item.name}}</td>
          <td class=""> {{item.taozhuang?'是':'否'}}</td>
          <td class=""> {{item.num}}</td>
          <td class=""> {{item.buy==1?'是':'否'}}</td>

        </tr>
   
      </tbody>
    </q-markup-table>
 
  </div>
</template>

<script>
import bookshelf_mixin from "src/pages/bookshelf/mixin/index.js"
import  book_to_buy from "src/pages/bookshelf/config/book_to_buy.js"
export default {
  mixins:[bookshelf_mixin],
  data() {
    return {
      book_to_buy 
    }
  },
};
</script>

<style lang="scss" scoped></style>

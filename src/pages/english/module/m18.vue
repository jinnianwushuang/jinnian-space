<template>
  <div class="q-my-md q-mx-sm">
    <q-markup-table dense>
      <thead>
        <tr>
          <th class="text-left text-weight-bolder  " :colspan="column">
            英语单词复习----当前词条数量：{{ word_total }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template    v-for="(item1, key1) in table_data">

        <tr
          v-if="compute_if_show(item1)"
          :key="key1"
          :class="item1.length == 1 ? 'bg-teal-4' : ''"
        >
          <td class="text-left" v-for="i in column" :key="i">
            {{ item1[i - 1] }}
          </td>
        </tr>

          
        </template>
        <!-- <tr
          v-for="(item1, key1) in table_data"
          :key="key1"
          :class="item1.length == 1 ? 'bg-teal-4' : ''"
        >
          <td class="text-left" v-for="i in column" :key="i">
            {{ item1[i - 1] }}
          </td>
        </tr> -->
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
import { forEach } from "shelljs/commands";
import workSheetsFromFile from "../md/英语词汇分类记忆表格版.xlsx";
import template from 'src/pages/login/template.vue';
export default {
  components: { template },
  data() {
    return {
      column: 8,
      word_total: 0,
      table_data: []
    };
  },
  created() {
    console.log("workSheetsFromFile --------", workSheetsFromFile);
        if(this.$q.platform.is.mobile){
      this.column=2
    }else{
        this.column=8
    }
    this.init_data2();
  },
  methods: {
 compute_if_show(item){
let arr= item.filter(x=>x)
   return  arr.length>0
 },
    init_data2() {
      let table_data = [];
      workSheetsFromFile.map(x => {
        table_data = table_data.concat(x["data"]);
      });
      let word_total = 0;
      let column = 0;
      table_data.map(x => {
        let len = x.filter(y => y).length;
        column = len > column ? len : column;
        word_total += len;
      });
      // this.column = 8;
      this.word_total = word_total;
      let klen = table_data[0].filter(x => x);
      // console.log(' table_data table_data table_data---', table_data);
      let final_obj = {};
      klen.map((x, i) => {
        final_obj[`key_` + i] = {
          title: x,
          words_raw: []
        };
      });
      table_data.map((x, i) => {
        x.map((y, yi) => {
          final_obj["key_" + yi]["words_raw"].push(y);
        });
      });
      console.log("final_obj------------", final_obj);
      let final_arr = [];
      for (let i in final_obj) {
        final_arr.push([final_obj[i]["title"]]);
        final_arr = final_arr.concat(
          this.$lodash.chunk(final_obj[i]["words_raw"], 8)
        );
      }
      this.table_data = final_arr;
      console.log(" final_arr", final_arr);
    }
  }
};
</script>
<style lang="scss" scoped></style>

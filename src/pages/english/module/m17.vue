<template>
  <div class="q-my-md q-mx-sm">
    <q-markup-table dense style="width:100%">
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
          :class="item1.length == 1 ? 'bg-teal-4' : ''">
          <td class="text-left" v-for="i in column" :key="i">
            {{ item1[i - 1] || "" }}
          </td>
        </tr>
           </template>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
import template from "src/pages/login/template.vue";
import workSheetsFromFile from "../md/新概念1-4词汇分类汇总(全)2.xlsx";
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
      let alla_to_z_obj = {};
      workSheetsFromFile.map(x => {
        table_data = table_data.concat(x["data"]);
      });
      let word_total = 0;
      let column = 0;
      table_data.map(x => {
        let fa = x.filter(y => y);
        let len = fa.length;
        column = len > column ? len : column;
        word_total += len;
        fa.map(z => {
          z = z.trim();
          let fl = z.slice(0, 1).toUpperCase();
          if (!alla_to_z_obj[`K_${fl}`]) {
            alla_to_z_obj[`K_${fl}`] = {
              key: fl,
              words: []
            };
          } else {
            alla_to_z_obj[`K_${fl}`]["words"].push(z);
          }
        });
      });
      // this.column = 8;
      this.word_total = word_total;
      let az_arr = Object.values(alla_to_z_obj);
      let final_arr = [];
      az_arr.map(x => {
        final_arr.push([x["key"]]);
        let words = this.$lodash.chunk(x["words"], 8);
        final_arr = final_arr.concat(words);
      });
      this.table_data = final_arr;
      console.log("alla_to_z_obj", alla_to_z_obj);
      console.log("final_arr", final_arr);
    }
  }
};
</script>
<style lang="scss" scoped></style>

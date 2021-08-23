<template>
  <div class="q-my-md q-mx-sm">
    <div class="q-mb-md">
      <q-select
        dense
        filled
        v-model="column"
        @input="handle_column_change"
        :options="column_options"
        style="max-width:200px"
      >
        <template v-slot:before>
          列数
        </template>
      </q-select>
    </div>
    <q-markup-table dense>
      <thead>
        <tr>
          <th class="text-left text-weight-bolder  " :colspan="column">
            {{ table_title ? table_title + "------" : "" }} {{ word_total }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(item1, key1) in table_data" :key="key1">
          <td class="text-left" v-for="i in column" :key="i">{{ item1[i-1] }}</td>
        </tr> -->
        <template v-for="(item1, key1) in table_data">
          <tr
          
            :key="key1"
            :class="compute_thead_data_style(item1)"
          >
            <td class="text-left" v-for="i in column" :key="i">
              {{ item1[i - 1] }}
            </td>
          </tr>
        </template>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
import workSheetsFromFile from "../md/word-review.xlsx";
import { excel_mixin } from "src/mixins/index.js";
export default {
  mixins: [excel_mixin],
  data() {
    return {
      table_title: "英语词汇分类"
    };
  },
  created() {},
  methods: {
    init_workSheetsFromFile() {
      this.workSheetsFromFile = workSheetsFromFile;
    },
        compute_thead_data_style(item) {
      let str = "";
      let check = item.length == 1 &&   item[0].includes('第') &&   item[0].includes('天');
      str = check ? "bg-teal-4" : "";
      return str;
    },
    chuck_arr_by_false_value(arr) {
      let res_arr = [[]];
      arr.map(x => {
        if (x) {
          res_arr[res_arr.length - 1].push(x);
        } else {
          // null underfind
          let lal = res_arr[res_arr.length - 1].length;
          lal ? res_arr.push([]) : "";
        }
      });
      //末尾追加空数组
      res_arr[res_arr.length - 1].length ? res_arr.push([]) : "";
      return res_arr;
    },
    init_data() {
      console.log("workSheetsFromFile --------", this.workSheetsFromFile);
      let table_data = []; // 原始数据的接收容器
      let word_total = 0; // 总词条数
      let final_obj = {}; // 中间过度对象
      let final_arr = []; // 接收算好的数组数据
      //原始数据初步加工提取
      this.workSheetsFromFile.map(x => {
        table_data = table_data.concat(x["data"]);
      });
      //原始列表列数
      let excel_column = table_data[0].filter(y => y).length;
      // 计算总词条数
      table_data.map(x => {
        let len = x.filter(y => y).length;
        word_total += len;
      });
      //每一列的切块的 长度的数组
      let col_chunk_len_arr = [];
      // 转换 横向数据为 纵向数据
  
      for (let i = 0; i < excel_column; i++) {
        final_obj["col_" + i] = {};
        let col_data = [];
        table_data.map(x => {
          col_data.push(x[i]);
        });
        let words = this.chuck_arr_by_false_value(col_data);
        col_chunk_len_arr.push(words.length);
        final_obj["col_" + i] = {
          title: "",
          words_raw: col_data,
          words
        };
      }
      console.log("final_obj--------", final_obj);
      // 计算 列 天数最多的 ，分块最多的
      let cl_chunk_max = this.$lodash.max(col_chunk_len_arr);
      //循环 最大 天数 ， 对 每一列数据 进行  横向 按天 取值 并且切块
      for (let i = 0; i < cl_chunk_max; i++) {
        for (let n = 0; n < excel_column; n++) {
          let words_col_n = final_obj["col_" + n]["words"];
          //
          final_arr.push([final_obj["col_" + n]["title"]]);
          if (words_col_n[i]) {
            final_arr = final_arr.concat(
              this.$lodash.chunk(words_col_n[i], this.column)
            );
          }
        }
      }
      // 循环中间对象
      // 赋值
      this.table_data =    this. add_title( this.rebuild_arr_reduce_empty_line(final_arr) )  ;
      this.word_total = word_total;
      console.log("   this.table_data  ",  this.table_data);
    },

    add_title(res_arr){
      let day=1
      res_arr.map((x,i)=>{
        if(x.length==1 &&x[0]==''){
          x[0]=`第${day}天`
          day++
        }

      })
res_arr.splice(res_arr.length-1,1)
      return res_arr
    }


  }
};
</script>
<style lang="scss" scoped></style>

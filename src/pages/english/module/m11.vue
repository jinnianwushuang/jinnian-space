<template>
  <div class="q-my-md q-mx-sm">
   <excel-table  
        :table_title='table_title' 
        :topic_options="topic_options"
        :column_options="column_options"
        :table_data ='table_data' 
        :thead_data='thead_data'
        :word_total='word_total'
        :show_empty_line ="show_empty_line"
         @handle_column_change="handle_column_change"
         @handle_topic_change="handle_topic_change"
></excel-table>
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
      let check =
        item.length == 1 && item[0].includes("第") && item[0].includes("天");
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
      //列表数据 所有
      this.table_data_all = this.add_title(
        this.rebuild_arr_reduce_empty_line(final_arr)
      );
      // 计算 视图显示 所用 数据 和 总数 计数
      this.compute_table_data_show_and_word_total();
      console.log("   this.table_data  ", this.table_data);
    },
    add_title(res_arr) {
      let day = 1;
      let topic_options = [];
      res_arr.map((x, i) => {
        if (x.length == 1 && x[0] == "") {
          let str = `第${day}天`;
          x[0] = str;
          topic_options.push(str);
          day++;
        }
      });
      topic_options.pop();
      // 赋值
      //相当于表头
      this.thead_data = [...topic_options];
      //主题列表
      this.topic_options = [...topic_options];
      res_arr.splice(res_arr.length - 1, 1);
      return res_arr;
    }
  }
};
</script>
<style lang="scss" scoped></style>

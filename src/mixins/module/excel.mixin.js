import   excelTable  from "src/components/excel-table/excel-table.vue"
export default {
  components: {
    excelTable,
  },
  data() {
    return {
      workSheetsFromFile: [[{ data: [] }]],
      table_title: "", //表格 标题
      column: 8, //列数
      word_total: 0, // 总词数
      table_data: [], //列表数据  显示
      table_data_all: [], // 列表数据 所有
      thead_data: [], //表格表头数据
      column_options: [2, 3, 4, 5, 6, 7, 8], // 列数选项
      exclude_thead_data: true, //默认 列表数据 排除表头
      show_empty_line: false, //显示空行
      topic: "", //主题
      topic_options: [] //主题选项列表
    };
  },
  created() {
    this.init_workSheetsFromFile();
   
 
  },
  methods: {
    //初始化 excel 表 数据
    init_workSheetsFromFile() {
      // this.workSheetsFromFile= workSheetsFromFile
    },

 
    //列数手动选择改变
    handle_column_change(column) {
      this.column = column;
      this.init_data();
    },
    //主题选项改变
    handle_topic_change(topic) {
     
      this.topic=topic
      console.log("this.topic----", this.topic);
      if (!this.topic) {
        return;
      } else {
        // 计算 视图显示 所用 数据 和 总数 计数
        this.compute_table_data_show_and_word_total();
      }
    },
 
    //重构数据 减少空行 ，方便视图渲染
    rebuild_arr_reduce_empty_line(arr) {
      let res_arr = [[""]];
      arr.map(x => {
        let xf = x.filter(y => y);
        let xfl = xf.length;
        if (xfl) {
          res_arr.push(x);
        } else {
          let res_arr_l_f_l = res_arr[res_arr.length - 1].filter(z => z).length;
          let res_arr_l_l = res_arr[res_arr.length - 1].length;
          if (res_arr_l_l > 0 && res_arr_l_f_l > 0) res_arr.push([""]);
        }
      });
      return res_arr;
    },
    // 初始化表格数据
    init_data() {
      console.log("workSheetsFromFile --------", this.workSheetsFromFile);
      let table_data = []; // 原始数据的接收容器
      let final_obj = {}; // 中间过度对象
      let final_arr = []; // 接收算好的数组数据
      //原始数据初步加工提取
      this.workSheetsFromFile.map(x => {
        table_data = table_data.concat(x["data"]);
      });
      //  提取 主键 表头
      let thead_data = this.$lodash.cloneDeep(table_data[0].filter(x => x));
      // console.log(' table_data table_data table_data---', table_data);
      //初始化  final_obj 结构
      thead_data.map((x, i) => {
        final_obj[`key_` + i] = {
          title: x,
          words_raw: []
        };
      });
      //填充  final_obj 数据
      if (this.exclude_thead_data) {
        table_data.splice(0, 1);
      }
      table_data.map((x, i) => {
        x.map((y, yi) => {
          final_obj["key_" + yi]["words_raw"].push(y);
        });
      });
      console.log("final_obj------------", final_obj);
      // 循环中间对象
      let values_arr = Object.values(final_obj);
      values_arr.map((x, i) => {
        final_arr.push([x["title"]]);
        final_arr = final_arr.concat(
          this.$lodash.chunk(x["words_raw"], this.column)
        );
        final_arr = final_arr.concat([[""]]);
      });
      // 赋值
      //相当于表头
      this.thead_data = [...thead_data];
      //主题列表
      this.topic_options = [...thead_data];
      //列表数据 所有
      this.table_data_all = this.rebuild_arr_reduce_empty_line(final_arr);
      // 计算 视图显示 所用 数据 和 总数 计数
      this.compute_table_data_show_and_word_total();
      console.log("  this.table_data  ", this.table_data);
    },
    // 计算 视图显示 所用 数据 和 总数 计数
    compute_table_data_show_and_word_total() {
      let table_data_show = []; //视图显示的数据
      let table_data = []; // 原始数据的接收容器
      let word_total = 0; // 总词条数
      table_data = this.$lodash.cloneDeep(this.table_data_all);
      console.log(" table_data--------", table_data);
      //计算  table_data_show
      if (!this.topic) {
        table_data_show = table_data;
      } else {
        // 找到 当前选择的 topic 和下个topic 之间的 数据
        let cti = this.topic_options.indexOf(this.topic);
        let is_last = cti == this.topic_options.length - 1;
        let next_topic = is_last ? "" : this.topic_options[cti + 1];
        // 找当前 topic 和 下个 topic 在  table_data   里的索引
        let cur_topic_index = this.find_topic_index(this.topic);
        let next_topic_index =  next_topic? this.find_topic_index(next_topic): table_data.length;
        // console.log(' cur_topic_index ', cur_topic_index );
        // console.log(' next_topic_index ', next_topic_index );
        table_data_show = table_data.slice(
          cur_topic_index,
          next_topic_index  
        );
      }
      // 计算总词条数
      table_data_show.map(x => {
        let len = x.filter(y => y).length;
        word_total += len;
      });
      //总数计数
      this.word_total = word_total;
      //列表显示数据
      this.table_data = table_data_show;
      // console.log('table_data_show-------',table_data_show);
    },
    //找到 topic 在 列表 全部数据的索引
    find_topic_index(str) {
      let index = 0;
      for (let i = 0; i < this.table_data_all.length; i++) {
        let x = this.table_data_all[i];
        if (x.length == 1 && x[0] && x[0] == str) {
          index = i;
          break;
        }
      }
      return index;
    }
  }
};

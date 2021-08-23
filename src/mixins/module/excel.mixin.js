export default {
  data() {
    return {
      workSheetsFromFile: [[{ data: [] }]],
      table_title: "", //表格 标题
      column: 8, //列数
      word_total: 0, // 总词数
      table_data: [], //列表数据
      thead_data: [], //表格表头数据
      column_options: [2, 3, 4, 5, 6, 7, 8],// 列数选项 
      exclude_thead_data: true, //默认 列表数据 排除表头
      show_empty_line:false,//显示空行
    };
  },
  created() {
    this.init_workSheetsFromFile();
    this.init_column();
    this.init_data();
  },
  methods: {
    init_workSheetsFromFile() {
      // this.workSheetsFromFile= workSheetsFromFile
    },
    init_column() {
        let isd= this.$q.platform.is.desktop
      let ww = window.innerWidth;
      ww=  isd? ww-200 :ww
      ww= ww<370?370:ww
      console.log("ww", ww);
      let column = Math.ceil(ww / 350);
       column = column == 1 ? 2 : column;
       column=column>8?8:column
      this.column = column
    },
    compute_thead_data_style(item) {
      let str = "";
      let check = item.length == 1 && this.thead_data.includes(item[0]);
      str = check ? "bg-teal-4" : "";
      return str;
    },
    handle_column_change() {
      this.init_data();
    },
    compute_if_show(item) {
        // return true
        if(this.show_empty_line){
             return true
            }else{
            let arr = item.filter(x => x);
            return arr.length > 0;

        }


    },
     
    rebuild_arr_reduce_empty_line(arr){
        let res_arr=[['']]
        arr.map(x=>{
          let xf= x.filter(y=>y)
          let xfl = xf.length
  
          if(xfl){
             res_arr.push(x)
          }else{
          let res_arr_l_f_l=  res_arr[res_arr.length-1].filter(z=>z).length
          let res_arr_l_l = res_arr[res_arr.length-1].length
  
       if(res_arr_l_l>0&&res_arr_l_f_l>0 )
        res_arr.push([''])
          }
        })
    return res_arr
  
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
      // 计算总词条数
      table_data.map(x => {
        let len = x.filter(y => y).length;
        word_total += len;
      });
      //  提取 主键 表头
      let thead_data =  this.$lodash.cloneDeep(table_data[0].filter(x => x)) ;
      // console.log(' table_data table_data table_data---', table_data);
      //初始化  final_obj 结构
      thead_data.map((x, i) => {
        final_obj[`key_` + i] = {
          title: x,
          words_raw: []
        };
      });
      //填充  final_obj 数据
      if(this.exclude_thead_data){
        table_data.splice(0,1) 
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
        final_arr = final_arr.concat([['']])
      });
      // 赋值
      this.thead_data = thead_data;
 
      this.table_data =   this.rebuild_arr_reduce_empty_line(final_arr) ;
      this.word_total = word_total;
      console.log("  this.table_data  ",   this.table_data);
    }

    // 模板
    //     init_data() {
    //         console.log("workSheetsFromFile --------", workSheetsFromFile);
    //      let table_data = []; // 原始数据的接收容器
    //      let word_total = 0; // 总词条数
    //      let final_obj = {}; // 中间过度对象
    //      let final_arr = []; // 接收算好的数组数据
    //      //原始数据初步加工提取
    //      workSheetsFromFile.map(x => {
    //        table_data = table_data.concat(x["data"]);
    //      });
    //      // 计算总词条数
    //      table_data.map(x => {
    //        let len = x.filter(y => y).length;
    //        word_total += len;
    //      });
    //      //  提取 主键 表头
    //      let thead_data = table_data[0].filter(x => x);
    //      // console.log(' table_data table_data table_data---', table_data);
    //      //初始化  final_obj 结构
    //      thead_data.map((x, i) => {
    //        final_obj[`key_` + i] = {
    //          title: x,
    //          words_raw: []
    //        };
    //      });
    //      //填充  final_obj 数据
    //      table_data.map((x, i) => {
    //        x.map((y, yi) => {
    //          final_obj["key_" + yi]["words_raw"].push(y);
    //        });
    //      });
    //      console.log("final_obj------------", final_obj);
    //      // 循环中间对象
    //      let values_arr = Object.values(final_obj);
    //      values_arr.map((x, i) => {
    //        final_arr.push([x["title"]]);
    //        final_arr = final_arr.concat(
    //          this.$lodash.chunk(x["words_raw"], this.column)
    //        );
    //      });
    //      // 赋值
    //      this.thead_data = thead_data;
    //      this.table_data = final_arr;
    //      this.word_total = word_total;
    //      console.log(" final_arr", final_arr);
    //    }
  }
};

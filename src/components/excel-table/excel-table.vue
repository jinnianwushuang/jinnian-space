<template>
  <div class="q-my-md q-mx-sm">
    <div class="q-mb-md row q-gutter-x-md">
      <q-select
        dense
        filled
        v-model="column"
        @input="handle_column_change"
        :options="column_options"
        style="width:200px"
      >
        <template v-slot:before>
          列数
        </template>
      </q-select>
            <q-select
        dense
        filled
        v-model="topic"
        @input="handle_topic_change"
        :options="topic_options"
        style="width:300px"
      >
        <template v-slot:before>
        主题
        </template>
      </q-select>
    </div>
    <q-markup-table dense>
      <thead>
        <tr>
          <th class="text-left text-weight-bolder  " :colspan="column">
            {{ table_title ? table_title + "------" : "" }}当前词条数量：{{
              word_total
            }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item1, key1) in table_data">
          <tr
            v-if="compute_if_show(item1)"
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
export default {
 
  data() {
    return {
        topic:'',
        column:2,
  
  

    };
  },
  props: {
        table_title:{
            type:String,
            default:''
        },
        word_total:{
            type:Number,
            default:0
        },
        topic_options:{
            type:Array,
            default:()=>[]
        },
        column_options:{
            type:Array,
            default:()=>[]
        },
        table_data:{
            type:Array,
            default:()=>[]
        },
        thead_data:{
            type:Array,
            default:()=>[]
        },
        show_empty_line:false
       

       
  },
  created() {
 this.init_column();
 this.handle_column_change()
 this. handle_topic_change()
  },
  methods: {
          //列数手动选择改变
    handle_column_change() {
        // 向外 传递  this.column
        this.$emit("handle_column_change",this.column)
       
    },
    //主题选项改变
    handle_topic_change() {
  // 向外 传递  this. topic
       this.$emit('handle_topic_change',this.topic)
    },
        // 初始化计算 列数
    init_column() {
      let isd = this.$q.platform.is.desktop;
      let ww = window.innerWidth;
      ww = isd ? ww - 200 : ww;
      ww = ww < 370 ? 370 : ww;
      console.log("ww", ww);
      let column = Math.ceil(ww / 350);
      column = column == 1 ? 2 : column;
      column = column > 8 ? 8 : column;
      this.column = column;
    },
      //计算主题头样式
    compute_thead_data_style(item) {
      let str = "";
      let check = item.length == 1 && this.thead_data.includes(item[0]);
      str = check ? "bg-teal-4" : "";
      return str;
    },
        //计算是否显示空行
    compute_if_show(item) {
      // return true
      if (this.show_empty_line) {
        return true;
      } else {
        let arr = item.filter(x => x);
        return arr.length > 0;
      }
    },
  }
};
</script>
<style lang="scss" scoped></style>

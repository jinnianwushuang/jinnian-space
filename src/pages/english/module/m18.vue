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
import workSheetsFromFile from "../md/英语词汇分类记忆表格版.xlsx";
import { excel_mixin } from "src/mixins/index.js";
export default {
  mixins: [excel_mixin],
  data() {
    return {
      table_title: "英语词汇分类",

    };
  },
  created() {},
  methods: {
    init_workSheetsFromFile() {
      this.workSheetsFromFile = workSheetsFromFile;
    }
  }
};
</script>
<style lang="scss" scoped></style>

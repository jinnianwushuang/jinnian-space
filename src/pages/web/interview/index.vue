<template>
  <div class="q-my-md q-mx-sm">
    <q-markup-table dense>
      <thead>
        <tr>
          <th class="text-left text-weight-bolder text ">
            <div class="text-weight-bolder">
              当前面试题目主题： {{ table_title }}---------- 总条目数：
              {{ totol }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item1, key1) in table_data">
          <tr :key="`${tab}---${key1}`">
            <td class="text-left ">
              <div>{{ key1 }}. &nbsp; {{ item1[0] || "" }}</div>
            </td>
          </tr>
        </template>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
import workSheetsFromFile from "./md/interview.xlsx";
import { menu_tab_mixin } from "src/mixins/index.js";
export default {
  mixins: [menu_tab_mixin],
  data() {
    return {
      tab: "js",
      tab_level: 2, // 右侧 菜单 一级 为 1  二级为 2
      tabs: [
        { label: "html", value: "html" },
        { label: "css", value: "css" },
        { label: "js", value: "js" },
        { label: "jquery", value: "jquery" },
        { label: "vue", value: "vue" },
        { label: "react", value: "react" },
        { label: "nodejs", value: "nodejs" },
        { label: "webpack", value: "webpack" },
        { label: "微信小程序", value: "wxxcx" },
        { label: "软技能", value: "other" }
      ],
      table_title: "",
      table_data: [],
      column: 1,
      totol: "",
      workSheetsFromFile: [[{ data: [] }]],
      all_data: []
    };
  },
  created() {
    this.init_workSheetsFromFile();
    this.init_data();
  },
  watch: {
    tab(newValue, oldValue) {
      this.init_data();
      console.log(" table_data: [],", this.table_data);
    }
  },
  methods: {
    init_workSheetsFromFile() {
      console.log(
        " this.workSheetsFromFile = workSheetsFromFile; ",
        workSheetsFromFile
      );
      this.workSheetsFromFile = workSheetsFromFile;
    },
    compute_width(i) {
      let w = 250;
      w = i == 1 ? 60 : w;
      w = i == 2 ? 100 : w;
      let str = `min-width: ${w}px`;
      if (i == 2) {
        str = `min-width: ${w}px`;
      }
      return str;
    },
    init_data() {
      console.log("workSheetsFromFile --------", this.workSheetsFromFile);
      let table_data = []; // 原始数据的接收容器
      let column = 0; //列数
      let obj = this.workSheetsFromFile.find(x => x.name == this.tab) || {};
      this.table_data = obj["data"] || [];
      this.totol = this.table_data.length;
      let obj_title = this.tabs.find(x => x.value == this.tab) || {};
      this.table_title = obj_title.value;
    }
  }
};
</script>
<style lang="scss" scoped>
.sss-length {
  height: auto;
  // word-break: break-all;
  white-space: break-spaces;
  text-align: left;
}
</style>

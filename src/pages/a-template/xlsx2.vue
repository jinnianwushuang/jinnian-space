<template>
  <div class="q-my-md q-mx-sm">
    <q-markup-table dense>
      <thead>
        <tr>
          <th class="text-left text-weight-bolder  " :colspan="column">
            {{ table_title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item1, key1) in table_data">
          <tr v-if="item1.filter(x => x).length == 1" :key="key1">
            <td class="text-left " :colspan="column">
              <div>
                {{ item1[0] || "" }}
              </div>
            </td>
          </tr>
          <tr v-else :key="key1">
            <td class="text-left " v-for="i in column" :key="i">
              <div :style="compute_width(i)" class="sss-length">
                {{ item1[i - 1] || "" }}
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
import workSheetsFromFile from "../md/EXCEL函数公式实例大全(含用途、语法、实例).xlsx";
export default {
  data() {
    return {
      table_title: "EXCEL函数公式实例大全(含用途、语法、实例)",
      table_data: [],
      column: 8,
      workSheetsFromFile: [[{ data: [] }]]
    };
  },
  created() {
    this.init_workSheetsFromFile();
    this.init_data();
  },
  methods: {
    init_workSheetsFromFile() {
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
      //原始数据初步加工提取
      this.workSheetsFromFile.map(x => {
        table_data = table_data.concat(x["data"]);
      });
      table_data = table_data.filter(x => {
        let len = x.filter(y => y).length;
        return len > 0;
      });
      table_data.map(x => {
        let len = x.filter(y => y).length;
        if (len > column) {
          column = len;
        }
      });
      this.column = column;
      this.table_data = table_data;
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

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
import workSheetsFromFile from "../md/英语词汇分类记忆表格版.xlsx";
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
    }
  }
};
</script>
<style lang="scss" scoped></style>

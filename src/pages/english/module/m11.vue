<template>
  <div class="q-my-md q-mx-sm">
    <q-markup-table dense>
      <thead>
        <tr>
          <th class="text-left text-weight-bolder  " :colspan="column">
            英语单词复习----当前词条数量：{{ word_total }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item1, key1) in table_data" :key="key1">
          <td class="text-left" v-for="i in column" :key="i">{{ item1[i-1] }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
import workSheetsFromFile from "../md/word-review.xlsx";
export default {
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
    this.init_data();
  },
  methods: {
    init_data() {
      let sheet0_data = workSheetsFromFile[0]["data"];
      let word_total = 0;
      let column = 0;
      sheet0_data.map(x => {
        let len = x.filter(y => y).length;
        column = len > column ? len : column;
        word_total += len;
      });
      // this.column = column;
      this.word_total = word_total;
      this.table_data = sheet0_data;
    }
  }
};
</script>
<style lang="scss" scoped></style>

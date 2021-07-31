/*
 * @Date           : 2021-07-17 17:36:31
 * @FilePath       : /jinnian-space/src/mixins/module/menu_tab.mixin.js
 * @Description    : 右边  菜单  tab 的数据集成插件
 */
// import {menu_tab_mixin} from "src/mixins/index.js"
// export default {
//   mixins:[menu_tab_mixin],
// tab_level: 1,
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      tab: "",
      tab_level: 1, // 第一级 1     第二级  2
      is_active: false //当前 模块容器 是否激活 显示
    };
  },
  computed: {
    ...mapGetters(["get_current_selected_right_menu"])
  },
  created() {
    this.is_active = true;
    this.fix_right_menu_config();
  },
  watch: {
    tab(){
      if(!this.tab){
        this. fix_right_menu_config()
      }
    },
    get_current_selected_right_menu(newValue, oldValue) {
      this.tab = this.get_current_selected_right_menu["t" + this.tab_level];
    }
  },
  methods: {
    ...mapActions([
      "set_right_menu_fix_config"
      //also supports payload `this.nameOfAction(amount)`
    ]),
    // 写入挂载当前代码内的 tabs  配置项到 right_menu  ，
    fix_right_menu_config() {
      this.set_right_menu_fix_config({
        tl: this.tab_level, // tab 级别
        tabs: this.tabs || [], //tabs 配置
        tv: this.tab || this.tabs[0]['value']//  tab 值
      });
    }
  },
  beforeDestroy() {
    this.is_active = false;
  }
};

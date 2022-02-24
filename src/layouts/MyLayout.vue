<!--
 * @Date           : Mon Aug 31 2020 16:40:04
 * @FilePath       : /jinnian-space/src/layouts/MyLayout.vue
 * @Description    :
-->
<template>
  <!-- <q-layout     :view="$q.platform.is.mobile?'lHh Lpr lFf':'hHh Lpr lFf' ">  bg-white text-black -->
  <q-layout view="hHh LpR lFf">
    <q-header
      style="border-bottom:1px solid #ccc"
      class="bg-primary text-white"
    >
      <q-bar
        v-if="current_mode === 'electron'"
        style="height:36px; line-height:36px;"
        class="q-electron-drag "
      >
        <!-- reference from /public: -->
        <q-icon name="img:logo.png" size="30px" />
        <q-btn
          flat
          @click="drawer = !drawer"
          style="font-size: 14px;"
          label="菜单"
        />
        <div class="fsz12 " style="font-size: 14px;">
          --------- {{ title }} ---------{{ last_update_time }}
        </div>
        <q-space />
        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="crop_square" @click="maximize" />
        <q-btn dense flat icon="close" @click="closeApp" />
        <q-btn
          flat
          @click="drawerRight = !drawerRight"
          round
          dense
          icon="menu"
        />
      </q-bar>
      <q-toolbar v-if="current_mode !== 'electron'">
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <!-- <q-toolbar-title>{{ title }}</q-toolbar-title> -->
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <div class="text-uppercase text-h6">{{ mid_text }}</div>
        <q-space />
        <div class="desktop-only">{{ last_update_time }}</div>
        <q-btn
          flat
          @click="drawerRight = !drawerRight"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      class="hide-scrollbar"
      v-model="drawerLeft"
      show-if-above
      :width="160"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3 hide-scrollbar "
    >
      <q-scroll-area class="fit hide-scrollbar">
        <q-list
          v-for="(item, index) in menu"
          :key="index"
          class="hide-scrollbar"
        >
          <q-item
            clickable
            :class="
              item.name == current_menu
                ? 'bg-primary text-white'
                : 'bg=white text-black'
            "
            v-ripple
            @click="go_to_router(item)"
          >
            <!-- <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section> -->
            <q-item-section>
              {{ `${index + 1}.${item.name}` }}
            </q-item-section>
          </q-item>
        </q-list>
        <!--左侧收展按钮-->

      </q-scroll-area>

    </q-drawer>
    <!-- 右侧菜单组件 -->
    <q-drawer
      side="right"
      v-model="drawerRight"
      bordered
      dense
      :width="250"
      :breakpoint="500"
      content-class="bg-grey-3 hide-scrollbar "
    >
      <q-scroll-area class="fit hide-scrollbar">
        <q-list
          v-for="(item, index) in flat_right_menu"
          :key="index"
          class="hide-scrollbar"
        >
          <q-item
            clickable
            :class="compute_right_menu_item_class(item)"
            v-ripple
            @click="right_menu_item_click(item)"
          >
            <!-- { label: "笔记", value: "m6" }, -->
            <!-- <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section> -->
            <q-item-section>
              <div :class="item.tl == 1 ? '' : 'q-pl-md'">
                <span v-if="item.tl == 2">-</span> {{ ` ${item.label}` }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!-- :class="$q.platform.is.desktop ? 'q-px-md' : 'q-px-md'" -->
    <q-page-container :style="q_page_container_style" class="q-pb-sm">
      <router-view :class="$q.platform.is.desktop ? 'q-pa-md' : 'q-pa-sm'" />

   <!-- 右侧菜单 -->
                  <q-page-sticky
        position="bottom-right"
        :offset="[5, 70]"
        @click="drawerRight=!drawerRight"
      >
        <q-btn dense color="primary"  size="sm" icon="expand_more"  class="rotate-270" />
      </q-page-sticky>
      <!-- 左侧菜单 -->
            <q-page-sticky
        position="bottom-right"
        :offset="[35, 70]"
        @click="drawerLeft=!drawerLeft"
      >
        <q-btn dense color="primary"  size="sm" icon="expand_more"  class="rotate-90"/>
      </q-page-sticky>

      <!-- 向上位移 -->
      <q-page-sticky
        position="bottom-right"
        :offset="[35, 40]"
        @click="handle_scroll_towards('up', 1)"
        @mousedown="handle_scroll_towards('up', 2)"
        @mouseup="handle_scroll_towards('up', 3)"
      >
        <q-btn dense color="primary"  size="sm" icon="arrow_upward" />
      </q-page-sticky>
      <!-- 向下位移 -->
      <q-page-sticky
        position="bottom-right"
        :offset="[5, 40]"
        @click="handle_scroll_towards('down', 1)"
        @mousedown="handle_scroll_towards('down', 2)"
        @mouseup="handle_scroll_towards('down', 3)"
        >
        <q-btn dense color="primary"  size="sm" icon="arrow_downward" />
      </q-page-sticky>
 <!-- 直达底部 -->
      <q-page-sticky
        position="bottom-right"
        :offset="[35, 10]"
        @click="handle_scroll_towards('down', 100)"
      >
        <q-btn dense color="primary"  size="sm" icon="expand_more" />
      </q-page-sticky>
      <!-- 直达顶部 -->
      <q-page-sticky
        position="bottom-right"
        :offset="[5, 10]"
        @click="handle_scroll_towards('down', 1000)"
      >
        <q-btn dense color="primary"  size="sm" icon="expand_less" />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>
<script>
import menu from "src/config/menu.js";
import { date } from "quasar";
import { mapGetters, mapActions } from "vuex";
import Template from "src/pages/login/template.vue";
let timeStamp = process.env.last_update_time;
let last_update_time = date.formatDate(timeStamp, "YYYY-MM-DD     HH:mm:ss");
// YYYY-MM-DD  HH:mm:ss.SSSZ
export default {
  name: "MyLayout",
  data() {
    return {
      title: "锦绣年华",
      mid_text: "熵增定律",
      last_update_time,
      drawerLeft: false,
      menu,
      current_menu: "note",
      tab: "note",
      tabs: [1, 2, 3, 4, 5, 6, 7, 8],
      drawerRight: true,
      current_mode: process.env.MODE,
      flat_right_menu: [],
      timer_move_step: null // 屏幕按钮触发的滚动事件的 计时器
    };
  },
  computed: {
    ...mapGetters({
      right_menu: "get_right_menu",
      current_selected_right_menu: "get_current_selected_right_menu"
    }),
    q_page_container_style() {
      let width = "";
      if (this.$q.platform.is.desktop) {
        width = "calc( 100vw - 16px)";
      } else {
        width = " 100vw ";
      }
      let obj = {
        width
      };
      return obj;
    }
  },
  created() {
    // console.log('this.$route',this.$route);
    if (!this.$route.name) {
      this.$router.push(menu[0]);
    }
    this.current_menu = this.$route.name;
  },
  watch: {
    $route(newValue, oldValue) {
      // console.log('this.$route',this.$route);
      this.current_menu = this.$route.name;
    },
    right_menu: {
      handler: function() {
        console.log("right_menu---------------right_menu", this.right_menu);
        this.compute_flat_right_menu();
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(["set_current_selected_right_menu"]),
    compute_flat_right_menu() {
      let arr = [];
      this.right_menu.map(x => {
        let obj = {
          ...x,
          tl: 1
        };
        arr.push(obj);
        if (Array.isArray(x.children)) {
          x.children.map(y => {
            let obj2 = {
              ...y,
              tl: 2,
              parent: {
                ...x
              }
            };
            arr.push(obj2);
          });
        }
      });
      this.flat_right_menu = arr;
      console.log("flat_right_menuflat_right_menu ", this.flat_right_menu);
      this.$forceUpdate();
    },
    go_to_router(item) {
      this.current_menu = item.name;
      if (this.$route.name != item.name) {
        this.$router.push({
          name: item.name
        });
      }
    },
    // 上下滚动 按钮
    handle_scroll_towards(towards, type) {
      // type   1 点击  2. 鼠标按下 3. 鼠标抬起+ ,100 滚动到底部 ， 1000是滚动到顶部
      console.log(
        "  // type   1 点击  2. 鼠标按下 3. 鼠标抬起+----------",
        type
      );
      let move_step = () => {
        let sy = window.scrollY;
        if (towards == "up") {
          //向上
          window.scrollTo(0, sy - 150);
        } else {
          //向下
          window.scrollTo(0, sy + 150);
        }
      };
      // if (type == 1) {
      //   move_step();
      // } else
      if (type == 2) {
        move_step();
        this.timer_move_step = setInterval(() => {
          move_step();
        }, 200);
      } else if (type == 3) {
        clearInterval(this.timer_move_step);
      } else if (type == 100) {
        window.scrollTo(0, 1000000);
      } else if (type == 1000) {
        window.scrollTo(0, 0);
      }
    },
    right_menu_item_click(item) {
      console.log("右侧菜单点击 ", item);
      this.set_current_selected_right_menu(item);
      this.$q.cookies.get("last_nemu", {
        right_menu: item,
        current_menu: this.current_menu
      });
      window.scrollTo(0, 0);
      this.$nextTick(this.compute_flat_right_menu());
    },
    compute_right_menu_item_class(item) {
      let check = false;
      let { t1, t2, right_menu_info } = this.current_selected_right_menu;
      // console.log(
      //   " this.current_selected_right_menu",
      //   this.current_selected_right_menu
      // );
      // if (t2 && item.parent) {
      //   check = item.value == t2 && item.parent.value == t1;
      // }
      // if (!t2) {
      //   check = item.value == t1;
      // }
      check =
        right_menu_info.label == item.label &&
        right_menu_info.value == item.value;
      return check ? "bg-primary text-white" : "bg=white text-black";
    },
    minimize() {
      if (process.env.MODE === "electron") {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize();
      }
    },
    maximize() {
      if (process.env.MODE === "electron") {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow();
        if (win.isMaximized()) {
          win.unmaximize();
        } else {
          win.maximize();
        }
      }
    },
    closeApp() {
      if (process.env.MODE === "electron") {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close();
      }
    }
  }
};
</script>

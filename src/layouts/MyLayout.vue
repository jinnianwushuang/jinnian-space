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
        <q-toolbar-title>{{ title }}</q-toolbar-title>
        <q-space class="desktop-only" />
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
      </q-scroll-area>
    </q-drawer>
    <!-- 右侧菜单组件 -->
    <q-drawer
      side="right"
      v-model="drawerRight"
      bordered
      dense
      show-if-above
      :width="160"
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
            dense
            v-ripple
            @click="right_menu_item_click(item)"
          >
            <!-- { label: "笔记", value: "m6" }, -->
            <!-- <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section> -->
            <q-item-section>
              <div :class="item.tl == 1 ? '' : 'q-pl-md'">
               <span v-if="item.tl == 2">--></span>  {{ ` ${item.label}` }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container :class="$q.platform.is.desktop ? 'q-pl-md' : ''">
      <router-view class="q-pl-md" />
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn dense    icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
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
      title: "我生待明日，万事成蹉跎。",
      title: "锦绣年华",
      // title:"锦年成长空间",
      // title:"I dreamed a dream",
      last_update_time,
      drawerLeft: false,
      menu,
      current_menu: "note",
      tab: "note",
      tabs: [1, 2, 3, 4, 5, 6, 7, 8],
      drawerRight: false,
      current_mode: process.env.MODE,
      flat_right_menu: []
    };
  },
  computed: {
    ...mapGetters({
      right_menu: "get_right_menu",
      current_selected_right_menu: "get_current_selected_right_menu"
    })
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
    right_menu_item_click(item) {
      console.log("右侧菜单点击 ", item);
      this.set_current_selected_right_menu(item);
      this.$nextTick(this.compute_flat_right_menu());
    },
    compute_right_menu_item_class(item) {
      let check = false;
      let { t1, t2 } = this.current_selected_right_menu;
      if (t2 && item.parent) {
        check = item.value == t2 && item.parent.value == t1;
      }
      if (!t2) {
        check = item.value == t1;
      }
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

<!--
 * @Date           : Mon Aug 31 2020 16:40:04
 * @FilePath       : /jinnian-space/src/layouts/MyLayout.vue
 * @Description    : 
-->
<template>
 <!-- <q-layout     :view="$q.platform.is.mobile?'lHh Lpr lFf':'hHh Lpr lFf' ">  bg-white text-black -->
  <q-layout    view="hHh Lpr lFf">
    <q-header   style="border-bottom:1px solid #ccc" class="bg-primary text-white">
      <q-bar  v-if='current_mode === "electron"' style="height:36px; line-height:36px;" class="q-electron-drag ">
        <!-- reference from /public: -->
        <q-icon name="img:logo.png" size="30px" />
        <q-btn flat @click="drawer = !drawer"   style="font-size: 14px;" label="菜单" />
        <div class="fsz12 " style="font-size: 14px;">---------          {{ title }} ---------{{ last_update_time }}</div>
        <q-space />
        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="crop_square" @click="maximize" />
        <q-btn dense flat icon="close" @click="closeApp" />
      </q-bar>
      <q-toolbar   v-if='current_mode !== "electron"'>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>{{ title }}</q-toolbar-title>
        <q-space class="desktop-only" />
        <div class="desktop-only">{{ last_update_time }}</div>
      </q-toolbar>

    </q-header>


    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list v-for="(item, index) in menu" :key="index">
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


    <q-page-container class="q-px-lg">
      <router-view />
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>
<script>
import menu from "src/config/menu.js";
import { date } from "quasar";
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
      last_update_time,
      drawer: false,
      menu,
      current_menu: "note",
      tab: "note",
      tabs: [1, 2, 3, 4, 5, 6, 7, 8],
      leftDrawerOpen: false,
      current_mode:process.env.MODE
    };
  },
  created() {
 
    // console.log('this.$route',this.$route);
    if( !this.$route.name){
      this.$router.push(menu[0])
    }
    this.current_menu =this.$route.name
  },
  watch: {
    $route(newValue, oldValue) {
      // console.log('this.$route',this.$route);
        this.current_menu =this.$route.name
    }
  },
  methods: {
    go_to_router(item) {
      this.current_menu = item.name;
      if(  this.$route.name!= item.name){
           this.$router.push({
        name: item.name
      }); 
      }
  
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

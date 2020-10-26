<!--
 * @Date           : Mon Aug 31 2020 16:40:04
 * @FilePath       : /jinnian-space/src/layouts/MyLayout.vue
 * @Description    : 
-->
<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <div class="row">
        <div class="col-12">
          <q-tabs
            v-model="tab"
            align="left"
            inline-label
            class="bg-primary text-white"
          >
            <q-tab
              v-for="(item, index) in menu"
              :key="index"
              :name="item.name"
              :label="`${index + 1}.${item.name}`"
              @click="go_to_router(item)"
            />
          </q-tabs>
        </div>

      </div>

    </q-header> -->


      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>{{title}}</q-toolbar-title>
          <q-space/>
          <div> 当前版本构建时间： {{ last_update_time}}</div>
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

            <q-item clickable 
            :class="item.name == current_menu?'bg-primary text-white':'bg=white text-black'"
            
    
             v-ripple @click="go_to_router(item)">
              <!-- <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section> -->
              <q-item-section>
                {{  `${index + 1}.${item.name}` }}
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

 
import { date } from 'quasar'

let timeStamp = process.env.last_update_time
let last_update_time = date.formatDate(timeStamp, 'YYYY-MM-DD     HH:mm:ss')
// YYYY-MM-DD  HH:mm:ss.SSSZ
export default {
  name: "MyLayout",
  data() {
    return {
      title:"我生待明日，万事成蹉跎。",
      // title:"锦年成长空间",
     last_update_time,


      drawer: false,
      menu,
      current_menu:"note",
      tab: "note",
      tabs: [1, 2, 3, 4, 5, 6, 7, 8],
      leftDrawerOpen: false
    };
  },
  created() {
    this.go_to_router({ name: "note" });
  },
  methods: {
    go_to_router(item) {
      this.current_menu=item.name
      this.$router.push({
        name: item.name
      });
    }
  }
};
</script>

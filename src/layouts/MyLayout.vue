<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
        <!-- <div class="col-1 q-pr-lg text-h5 text-right vertical-middle" style="line-height: 48px;">
锦年空间
        </div> -->
      </div>
      <!-- <q-toolbar>
        <q-space />
        <div class="text-h5">
          锦年空间
        </div>
      </q-toolbar> -->
    </q-header>
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
export default {
  name: "MyLayout",
  data() {
    return {
      menu,
      tab: "web",
      tabs: [1, 2, 3, 4, 5, 6, 7, 8],
      leftDrawerOpen: false
    };
  },
  created() {
    this.go_to_router({ name: "web" });
  },
  methods: {
    go_to_router(item) {
      this.$router.push({
        name: item.name
      });
    }
  }
};
</script>

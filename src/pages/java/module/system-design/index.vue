<template>
  <div>
 <q-markdown  :extend="extendMarkdown"  :src="MainComponent" />
  </div>
</template>
<script>
/** 
 * 特点是 东西全部打进来 了 针对 markdown   , 同步
*/
 import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
let { all_components, all_modules } =compute_config_base_on_require_context(require.context('public/books/java/system-design/', true, /\.md$/),'md',true)
import {menu_tab_mixin,markdown_mixin } from "src/mixins/index.js"
export default {
  mixins:[menu_tab_mixin,markdown_mixin ],
  data() {
    return {
       img_prefix:'./books/java/system-design/',
       tab: all_modules[0].value,
       tab_level: 2, // 右侧 菜单 一级 为 1  二级为 2
       MainComponent:all_components[all_modules[0].value],
      tabs:all_modules
    };
  },
    watch: {
    tab(newValue, oldValue) {
      this. MainComponent=all_components[this.tab]
      if(this. MainComponent ){
        let tab_obj=  this.tabs.find(x=>x['value']==this.tab)
        if(tab_obj['modules_obj']){
//  this.img_prefix = this.img_prefix + this.tabs[this.tab]['modules_obj']['relative_folder']
 this.img_prefix = './books/java/system-design/'  + tab_obj['modules_obj']['relative_folder']
        }else{
         this.img_prefix = './books/java/system-design/'
  
        }


      }
     
    }
  },

};
</script>
<style lang="scss" scoped></style>

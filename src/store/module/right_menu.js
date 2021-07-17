/*
 * @Date           : 2021-07-09 01:11:11
 * @FilePath       : /jinnian-space/src/store/module/right_menu.js
 * @Description    : 
 */
import leftmenu from "src/config/menu.js";
export default {
  //生明、状态
  state: {
    right_menu: [],
   
    t1:'',// 当前的 第一级别tab 的值
    t2:'',//  当前的 第二级别tab 的值
  },
  //获得
  getters: {
    get_right_menu(state) {
      return state.right_menu;
    },
    get_current_selected_right_menu(state){
      return {
        t1:state.t1,
        t2:state.t2
      }
    }
  },
  //行动
  actions: {
    set_right_menu({ context,commit }, right_menu) {
      commit("set_right_menu", right_menu);
    },
 
    set_right_menu_fix_config({ context,commit }, params) {
      commit("set_right_menu_fix_config", params );
    },
    set_current_selected_right_menu({ context,commit }, params) {
      commit("set_current_selected_right_menu", params );
    },
    
  },

  //变化
  mutations: {
    set_right_menu(state, right_menu) {
      state.right_menu = right_menu;
    },
 
    // 通过 参数设置  menu 的children  state 的 t1 t2  的值
    set_right_menu_fix_config(state, params){
      // 代码内 模块的 tabs 配置 
      // params ={ tl: '',tabs:"" }
      // { label: "笔记", value: "m6" },
      console.log('通过参数 设置 修正set_right_menu_fix_config ');
      console.log('',params);
  
      let {tl='',tabs=[],tv=''} =params
      if(tl==1){
        state.t2=''
        state. right_menu=tabs
        state['t'+tl] = tv
      }
      if(tl==2){
        state['t'+tl] = tv
        let t1obj= state. right_menu.find(x=>x.value== state.t1)
        t1obj['children']=tabs
      }
      console.log('计算后的---------t1', state.t1);
      console.log('计算后的---------t2',state.t2);
      state. right_menu=[...state. right_menu]
    },
      //按钮点击右侧菜单 ，设置 右侧菜单信息 ，回显显示 相对应的模块
    set_current_selected_right_menu(state,params){
      if(params.tl==1){
        state.t2=''
        state.t1 =params.value
      }
      if(params.tl==2){
        state.t1= params. parent.value
       state.t2= params.value
      }
    }
  }
};

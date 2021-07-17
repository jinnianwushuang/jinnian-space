/*
 * @Date           : 2021-07-09 01:11:11
 * @FilePath       : /jinnian-space/src/store/module/account.js
 * @Description    : 
 */
export default {
  //生明、状态
  state: {
    account: ""
  },
  //获得
  getters: {
    get_account() {
      return state.account;
    }
  },
  //行动
  actions: {
    set_account({ context }, account) {
      commit("set_account", account);
    }
  },

  //变化
  mutations: {
    set_account(state, account) {
      state.account = account;
    }
  }
};

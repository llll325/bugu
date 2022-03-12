import { createStore } from "vuex";
import userInfo from './modules/userInfo';
// 定义页面变量
export default createStore({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    userInfo
  },
  getters: {
    isLogined: state => {
      return state.userInfo.isLogined
    }
  },

});

import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
  },
  mutations: {
    login(state) {
      state.login = true;
      localStorage.login = 'login';
    },
    logout(state) {
      const confirm: boolean = window.confirm('ログアウトしますか？');
      if ( confirm === true ) {
        state.login = false;
        localStorage.login = '';
        router.push('/');
      }
    },
    backParentPage(state) {
      router.push('/');
    },
  },
  actions: {
  },
});

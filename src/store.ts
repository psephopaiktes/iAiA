import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    user: '',
  },
  mutations: {
    init(state) {
      if ( localStorage.user ) {
        state.login = true;
        state.user = localStorage.user;
      }
    },
    login(state) {
      state.login = true;
      // TODO fetch USERID from firebase
      state.user = 'USERID';
      localStorage.user = state.user;
      router.go(-1);
    },
    logout(state) {
      const confirm: boolean = window.confirm('ログアウトしますか？');
      if ( confirm !== true ) { return; }
      state.login = false;
      state.user = '';
      localStorage.user = state.user;
      router.push('/');
    },
  },
  actions: {
  },
});

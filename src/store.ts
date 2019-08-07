import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    login() {
      // TODO fetch USERID from firebase
      localStorage.user = 'USERID';
      router.go(-1);
    },
    logout() {
      const confirm: boolean = window.confirm('ログアウトしますか？');
      if ( confirm === true ) {
        localStorage.user = '';
        router.push('/');
      }
    },
  },
  actions: {
  },
});

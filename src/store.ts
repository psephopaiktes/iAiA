import Vue from 'vue';
import Vuex from 'vuex';

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
      state.login = false;
      localStorage.login = '';
    },
  },
  actions: {

  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
  },
  mutations: {
    init(state) {
      firebase.auth().onAuthStateChanged((user) => {
        window.console.log('auth state changed');
        if (user) {
          state.login = true;
        } else {
          state.login = false;
        }
      });
    },

    logout(state) {
      firebase.auth().signOut().catch((err) => window.console.log(err));
      state.login = false;
      router.push('/');
    },
  },
  actions: {
  },
});

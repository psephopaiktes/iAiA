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

    checkLocalStorageLogin(state) {
      if ( localStorage.uid ) {
        state.login = true;
      }
    },

    checkFirebaseLogin(state) {
      firebase.auth().onAuthStateChanged((user) => {
        window.console.log(user);
        if (user) {
          state.login = true;
          localStorage.uid = user.uid;
        } else {
          state.login = false;
          localStorage.removeItem('uid');
        }
      });
    },

    logout(state) {
      const confirm: boolean = window.confirm('ログアウトしますか？');
      if ( confirm !== true ) { return; }
      firebase.auth().signOut().catch((err) => window.console.log(err));
      state.login = false;
      localStorage.removeItem('uid');
      router.push('/');
    },
  },

  actions: {
  },

});

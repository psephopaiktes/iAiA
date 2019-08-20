import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import firebase from './firebase';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    login: false,
  },

  mutations: {
    checkLocalStorageLogin(state) {
      if (localStorage.uid) {
        state.login = true;
      }
    },

    checkFirebaseLogin(state) {
      window.console.log('checkFirebaseLogin called');
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.console.log('login:' + user.displayName);
          state.login = true;

          window.console.log('set ' + user.uid);
          const db = firebase.firestore();
          db.collection('users').doc(user.uid).set({
              uid: user.uid,
              displayName: user.displayName,
            },
          ).then(() => {
            window.console.log('Document successfully written!');
          }).catch((error) => {
            window.console.log('failed to write document: ', error);
            window.console.error('Error writing document: ', error);
          });
        } else {
          state.login = false;
        }
      });
    },

    logout(state) {
      const confirm: boolean = window.confirm('ログアウトしますか？');
      if (!confirm) {
        return;
      }
      firebase.auth().signOut().catch((err) => window.console.log(err));
      state.login = false;
      window.console.log('logout');
      router.push('/');
    },
  },

  actions: {},

});

import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import firebaseApp from './firebase';

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
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          window.console.log('login:' + user.displayName);
          state.login = true;
          localStorage.uid = user.uid;

          window.console.log('set ' + user.uid);
          firebaseApp.firestore().collection('users').doc(user.uid).set({
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
      firebaseApp.auth().signOut().catch((err) => window.console.log(err));
      state.login = false;
      localStorage.removeItem('uid');
      window.console.log('logout');
      router.push('/');
    },
  },

  actions: {},

});

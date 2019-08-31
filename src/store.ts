import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import firebaseApp from './firebase';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    login: false,
    loading: true,
    user: {},
  },

  mutations: {
    checkLocalStorageLogin(state) {
      if (localStorage.uid) {
        state.login = true;
      }
    },

    checkFirebaseLogin(state) {
      firebaseApp.auth().onAuthStateChanged((user) => {
        state.loading = false;
        if (user) {
          state.login = true;
          state.user = Object.assign({}, user);
          localStorage.uid = user.uid;
          const docRef = firebaseApp.firestore().collection('users').doc(user.uid);
          docRef.get().then((doc) => {
            if (!doc.exists) {
              docRef.set({
                uid: user.uid,
                displayName: user.displayName,
              }).catch((error) => {
                throw error;
              });
            }
          }).catch((error) => {
            throw error;
          });
        } else {
          state.login = false;
        }
      });
    },

    logout(state) {
      firebaseApp.auth().signOut().catch((err) => window.console.log(err));
      state.login = false;
      localStorage.removeItem('uid');
      window.console.log('logout');
      router.push('/');
    },

    startLoading(state) {
      state.loading = true;
    },
  },

  actions: {},
});

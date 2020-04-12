import Vue from "vue";
import Vuex from "vuex";
import firebaseApp from "@/firebase";
import { throwDice } from "@/lib/dice";
import { DiceItem } from "@/types/DiceItem";
import { RootState } from "@/types/RootState";
import { UserInfo } from "@/types/UserInfo";

Vue.use(Vuex);

let rootState: RootState = {
  login: false,
  loading: true,
  user: null,
  dice: {
    showModal: false,
    result: 0,
    n: 0,
    ub: 0,
    add: 0,
    log: []
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: rootState,

  mutations: {
    checkLocalStorageLogin(state) {
      if (localStorage.uid) {
        state.login = true;
      }
    },

    checkFirebaseLogin(state) {
      firebaseApp.auth().onAuthStateChanged(user => {
        state.loading = false;
        if (user) {
          state.login = true;
          const userInfo: UserInfo = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerId,
            uid: user.uid
          };
          state.user = Object.assign({}, userInfo);
          localStorage.uid = user.uid;
          const docRef = firebaseApp
            .firestore()
            .collection("users")
            .doc(user.uid);
          docRef
            .get()
            .then(doc => {
              if (!doc.exists) {
                docRef
                  .set({
                    uid: user.uid,
                    displayName: user.displayName
                  })
                  .catch(error => {
                    throw error;
                  });
              }
            })
            .catch(error => {
              throw error;
            });
        } else {
          state.login = false;
        }
      });
    },

    logout(state) {
      firebaseApp
        .auth()
        .signOut()
        .catch(err => window.console.log(err));
      state.login = false;
      localStorage.removeItem("uid");
      window.console.log("logout");
      location.href = "/";
    },

    startLoading(state) {
      state.loading = true;
    },

    diceRoll(state, arg) {
      state.dice.n = arg.n;
      state.dice.ub = arg.ub;
      if (arg.add) {
        state.dice.add = arg.add;
      } else {
        state.dice.add = 0;
      }
      state.dice.result =
        throwDice(state.dice.n, state.dice.ub) + state.dice.add;
      state.dice.showModal = true;
      const logTextDice =
        state.dice.add === 0
          ? state.dice.n + "D" + state.dice.ub
          : state.dice.n + "D" + state.dice.ub + "+" + state.dice.add;
      const format = {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      const logTextDate = Intl.DateTimeFormat("ja-JP", format).format(
        new Date()
      );
      const logItem: DiceItem = {
        dice: logTextDice,
        date: logTextDate
      };
      state.dice.log.unshift(logItem);
      if (state.dice.log.length > 10) {
        state.dice.log.pop();
      }
      localStorage.diceLog = JSON.stringify(state.dice.log);
    },

    restoreDiceLog(state) {
      state.dice.log = JSON.parse(localStorage.diceLog);
    },

    clearDiceLog(state) {
      state.dice.log = [];
      localStorage.removeItem("diceLog");
    },

    diceClose(state) {
      state.dice.showModal = false;
    }
  },

  actions: {}
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { firestorePlugin } from "vuefire";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// router.afterEach(to => {
//   gtag("config", "UA-50842673-7", { page_path: to.path });
// });

Vue.use(firestorePlugin);

window.console.log(
  "%c iAiA 🐙 %c\nhttps://github.com/psephopaiktes/iAiA",
  `
    background: #023;
    padding: 20px 40px;
    letter-spacing: .5em;
    color: #0fe;
    font-size: large;
    font-weight: bold;
    font-style: italic;
    text-align: center;
  `,
  `
    padding: 20px 0 40px;
  `
);

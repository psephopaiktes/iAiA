import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/dice"
    },
    {
      path: "/term",
      component: () => import("./views/Term.vue")
    },
    {
      path: "/help",
      component: () => import("./views/Help.vue")
    },
    {
      path: "/share",
      component: () => import("./views/Share.vue")
    },
    {
      path: "/account",
      component: () => import("./views/Account.vue")
    },
    {
      path: "/dice",
      component: () => import("./views/Dice.vue")
    },
    {
      path: "/character",
      component: () => import("./views/Character.vue")
    },
    {
      path: "/character/:charId",
      component: () => import("./views/CharacterDetail.vue")
    },
    {
      path: "/room",
      component: () => import("./views/Room.vue")
    },
    {
      path: "/other",
      component: () => import("./views/Other.vue")
    },
    {
      path: "/login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/*",
      component: () => import("./views/Error.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/"
    },
    {
      path: "/login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/dice",
      component: () => import("./views/Dice.vue")
    },
    {
      path: "/character",
      component: () => import("./views/Character/Index.vue")
    },
    {
      path: "/character/edit",
      component: () => import("./views/Character/Edit.vue")
    },
    {
      path: "/character/detail/:charId",
      component: () => import("./views/Character/Detail.vue")
    },
    {
      path: "/room",
      component: () => import("./views/Room.vue")
    },
    {
      path: "/other",
      component: () => import("./views/Other/Index.vue")
    },
    {
      path: "/app.html",
      redirect: "/other"
    },
    {
      path: "/other/help",
      component: () => import("./views/Other/Help.vue")
    },
    {
      path: "/other/account",
      component: () => import("./views/Other/Account.vue")
    },
    {
      path: "/other/term",
      component: () => import("./views/Other/Term.vue")
    },
    {
      path: "/other/share",
      component: () => import("./views/Other/Share.vue")
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

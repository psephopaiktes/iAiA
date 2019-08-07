import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/LP.vue'),
    },
    {
      path: '/dice',
      component: () => import('./views/Dice.vue'),
    },
    {
      path: '/character',
      component: () => import('./views/Character.vue'),
    },
    {
      path: '/room',
      component: () => import('./views/Room.vue'),
    },
    {
      path: '/other',
      component: () => import('./views/Other.vue'),
      // children: [
      //   {
      //     path: '/other/term',
      //     component: () => import('./views/other/Term.vue'),
      //   },
      // ],
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/*',
      component: () => import('./views/404.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

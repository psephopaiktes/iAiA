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
      path: '/term',
      component: () => import('./views/other/Term.vue'),
    },
    {
      path: '/app',
      redirect: '/app/dice',
    },
    {
      path: '/app/dice',
      component: () => import('./views/Dice.vue'),
    },
    {
      path: '/app/character',
      component: () => import('./views/Character.vue'),
    },
    {
      path: '/app/room',
      component: () => import('./views/Room.vue'),
    },
    {
      path: '/app/other',
      component: () => import('./views/Other.vue'),
      children: [
        {
          path: '/app/other/term',
          component: () => import('./views/other/Term.vue'),
        },
      ],
    },
    {
      path: '/app/login',
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

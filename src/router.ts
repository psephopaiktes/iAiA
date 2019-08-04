import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app',
      component: () => import('./views/Dice.vue'),
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
    },
    {
      path: '/app/login',
      component: () => import('./views/Login.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

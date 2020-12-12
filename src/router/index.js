import Vue from 'vue';
import VueRouter from 'vue-router';
import render from '@/helpers/renderRouterView';
import dashboard from './dashboard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: {
      render,
    },
    children: [
      {
        path: '',
        redirect: '/dashboard',
      },
      ...dashboard,
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

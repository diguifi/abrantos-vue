import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const authenticated = store.getters['auth/isAuthenticated'];

      if (!authenticated) {
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      } else {
        const axiosAuthHeader = 'Authorization';
        if (!axios.defaults.headers.common[axiosAuthHeader]) {
          const token = store.getters['auth/getToken'];
          axios.defaults.headers.common[axiosAuthHeader] = `Bearer ${token}`;
        }

        next();
      }
    } else {
      next();
    }
  });

  return Router;
}

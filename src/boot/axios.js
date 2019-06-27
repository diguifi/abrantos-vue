import axios from 'axios';

export default async ({ Vue, store }) => {
  axios.interceptors.response.use(response => response,
    async (error) => {
      if (error.response.status === 401) {
        await store.dispatch('auth/AUTH_LOGOUT');
        error.response.data = 'Sua sessão expirou, parça';
      }
      return Promise.reject(error);
    });

  Vue.prototype.$axios = axios;
};

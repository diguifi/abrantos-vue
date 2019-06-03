
const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '',
    component: () => import('layouts/AccountLayout.vue'),
    children: [
      { path: '/login', name: 'login', component: () => import('pages/account/Login.vue') },
      { path: '/register', name: 'register', component: () => import('pages/account/Register.vue') },
      { path: '/confirm', name: 'confirm', component: () => import('pages/account/Confirmation.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;

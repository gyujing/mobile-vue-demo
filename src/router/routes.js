

export default [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: () => import("@/viewa/home/index.vue") },
]

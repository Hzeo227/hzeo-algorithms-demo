import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Home.vue")
    },
    {
      path: '/int-print-32bit',
      name: 'int-print-32bit',
      component: () => import("../test/int-print-32bit.vue")
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import("../test/sort.vue")
    },
  ]
})

export default router

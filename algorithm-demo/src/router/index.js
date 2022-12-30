import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: '/range-sum',
      name: 'rangeSum',
      component: () => import("../test/rangeSum.vue")
    },
    {
      path: '/random',
      name: 'random',
      component: () => import("../test/random.vue")
    },
  ]
})

export default router

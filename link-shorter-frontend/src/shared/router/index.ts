import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/main-page/main-page.vue'),
      children: [
        {
          path: '',
          name: '_',
          redirect: { name: 'links' },
        },
        {
          path: 'links',
          name: 'links',
          component: () => import('@/pages/links-page/links-page.vue'),
        },
        {
          path: 'analytics',
          name: 'analytics',
          component: () => import('@/pages/analytics-page/analytics-page.vue'),
        },
      ],
    },
  ],
})

export default router

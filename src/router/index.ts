import { createRouter, createWebHistory } from 'vue-router'
import { homeRoutes } from './homeView'
import { aboutRoutes } from '@/router/aboutView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...homeRoutes,
    ...aboutRoutes,
  ]
})

export default router

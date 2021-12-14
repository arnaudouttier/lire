import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Single from '@/pages/Single.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:name',
    name: 'Post',
    component: Single
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

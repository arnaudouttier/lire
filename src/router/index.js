import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: ':/single/:category/:id/:slug',
        name: 'SingleridPost',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/SingleridPost.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/single/:category/:id/:slug',
    name: 'Single',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/Single.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: ':relatedpostSlug',
        name: 'RelatedPostShow',
        component: () => import(/* webpackChunkName: "about" */ '@/components/RelatedPostShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

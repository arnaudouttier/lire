import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:category/:id/:slug',
    name: 'Single',
    component: () => import('@/pages/Single.vue'),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: '/post/:category/:id/:slug/:relatedPostSlug',
        name: 'RelatedPostShow',
        component: () => import('@/components/RelatedPostShow.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  },

  // Rid Version
  {
    path: '/omerid',
    name: 'omerid',
    component: () => import('@/pages/omerid.vue'),
    children: [
      {
        path: '/post/:category/:id/:slug',
        name: 'Singlerid',
        component: () => import('@/pages/Singlerid.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
        children: [
          {
            path: '/post/:category/:id/:slug/:relatedPostSlug',
            name: 'RelatedPostShowrid',
            component: () => import('@/components/RelatedPostShowrid.vue'),
            props: (route) => ({
              ...route.params,
              id: parseInt(route.params.id)
            })
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (
      to.name === 'RelatedPostShowrid' ||
      to.name === 'RelatedPostShow'
    ) {
      return {
        selector: to.name
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router

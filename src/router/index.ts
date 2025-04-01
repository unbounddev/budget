import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PocketBase from 'pocketbase'
import LoginView from '@/views/LoginView.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const pb = new PocketBase('http://127.0.0.1:8090')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: AppLayout },
      component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/login',
      name: 'login',
      meta: { layout: AuthLayout },
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  if (!pb.authStore.isValid && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router

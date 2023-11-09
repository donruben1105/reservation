import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/pages/SignIn.vue'
import SignUp from '@/pages/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
  ]
})

export default router

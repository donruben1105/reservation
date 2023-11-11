import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/pages/SignIn.vue'
import SignUp from '@/pages/SignUp.vue'
import UserDashboard from '@/pages/UserDashboard.vue'
import AllRoom from '@/pages/AllRoom.vue'
import ContactUs from '@/pages/ContactUs.vue'
import RestoBar from '@/pages/RestoBar.vue'
import SingleListing from '@/components/SingleListing.vue'

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
    {
      path: '/',
      name: 'UserDashboard',
      component: UserDashboard
    },
    {
      path: '/rooms',
      name: 'AllRoom',
      component: AllRoom
    },
    {
      path: '/contact/us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/resto',
      name: 'RestoBar',
      component: RestoBar
    },
    {
      path: '/single/listing',
      name: 'SingleListing',
      component: SingleListing
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import CityGuide from '../views/pages/CityGuide.vue'
import Service from '../views/pages/Service.vue'
import Contact from '../views/pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city-guide',
    name: 'CityGuide',
    component: CityGuide
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

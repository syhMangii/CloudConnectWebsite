import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/solutions/big-data-flux',
    name: 'BigDataFlux',
    component: () => import('../views/BigDataFluxView.vue')
  },
  {
    path: '/solutions/realtime-api-usc',
    name: 'RealtimeApiUsc',
    component: () => import('../views/RealtimeApiUscView.vue')
  },
  {
    path: '/solutions/baku-binary-artificial-key-unit',
    name: 'Baku',
    component: () => import('../views/BakuView.vue')
  },
  {
    path: '/solutions/siti-intelligent-customer-service',
    name: 'Siti',
    component: () => import('../views/SitiView.vue')
  },
  
  {
    path: '/rd',
    name: 'RD',
    component: () => import('../views/RDView.vue')
  },
  {
    path: '/ipms',
    name: 'IPMS',
    component: () => import('../views/IPMSView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
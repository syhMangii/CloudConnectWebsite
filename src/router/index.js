import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/services/flux-big-data',
    name: 'FluxBigData',
    component: () => import('../views/ServiceDetailView.vue'),
    props: { serviceName: 'flux-big-data' }
  },
  {
    path: '/services/usc-realtime-api',
    name: 'UscRealtimeApi',
    component: () => import('../views/ServiceDetailView.vue'),
    props: { serviceName: 'usc-realtime-api' }
  },
  {
    path: '/services/virtual-cloud-provider',
    name: 'VirtualCloudProvider',
    component: () => import('../views/ServiceDetailView.vue'),
    props: { serviceName: 'virtual-cloud-provider' }
  },
  {
    path: '/services/iaas-paas-platform',
    name: 'IaasPaasPlatform',
    component: () => import('../views/ServiceDetailView.vue'),
    props: { serviceName: 'iaas-paas-platform' }
  },
  {
    path: '/services/saas-onboarding',
    name: 'SaaSOnboarding',
    component: () => import('../views/ServiceDetailView.vue'),
    props: { serviceName: 'saas-onboarding' }
  },
  {
    path: '/services/saas-marketplace',
    name: 'SaaSMarketplace',
    component: () => import('../views/ServiceDetailView.vue'),
    props: { serviceName: 'saas-marketplace' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

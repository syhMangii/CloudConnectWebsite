<template>
  <Navbar />
  <HeroSection />

  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- <h2 class="text-3xl font-bold text-center text-accent mb-12">Our Services</h2> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :link="service.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
import HeroSection from '../components/specific/HeroSection.vue'
import ServiceCard from '../components/common/ServiceCard.vue'

const services = [
  {
    title: 'FLUX – Big Data Solution',
    description: 'Big data analytics is the key to unlocking the insights from your customer behavior data – structured and unstructured to generate the insights needed to drive customer acquisition and loyalty.',
    link: '/solutions/big-data-flux'
  },
  {
    title: 'USC – Realtime API Platform',
    description: 'CloudConnect solution – Universal Service Connector (USC) is based on the new modern application delivery architecture known as a Realtime API Platform.',
    link: '/solutions/realtime-api-usc'
  },
  {
    title: 'Virtual Cloud Provider',
    description: 'Learn More on how to become a Virtual Cloud Provider with zero hardware cost, hassle free, scalable on demand servers, and pay as you go pricing.',
    link: '/solutions/virtual-cloud-provider'
  },
  {
    title: 'IaaS and PaaS Platform',
    description: 'Learn more on how CLOUDCONNECTR3 provides complete visibility and control across physical, virtual and cloud resources for today’s multi-vendor and cross-platform solutions',
    link: '/solutions/iaas-paas-platform'
  },
  {
    title: 'SaaS Onboarding',
    description: 'Learn more on how to onboard your application in 7 days through our proven SaaS enablement program.',
    link: '/solutions/saas-onboarding'
  },
  {
    title: 'SaaS Marketplace',
    description: 'Learn more on how to assist SaaS providers to market their application through our SaaS Marketplace.',
    link: '/solutions/saas-marketplace'
  }
];
</script>

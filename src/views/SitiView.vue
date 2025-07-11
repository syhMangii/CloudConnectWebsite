<template>
  <div class="rd-view">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-64 bg-cover bg-center" style="background-image: url('/src/images/landingPage/hero1.png');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h1 class="text-white text-4xl font-bold">SITI - Intelligent Customer Service</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
// No specific script logic needed for this static content view
</script>

<style scoped>
/* Add any specific styles if needed, though Tailwind should handle most */
</style>
<template>
  <div class="rd-view">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-64 bg-cover bg-center" style="background-image: url('/src/images/landingPage/hero1.png');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h1 class="text-white text-4xl font-bold">Research & Development</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <!-- Intellectual Property -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p class="text-gray-700 leading-relaxed">
            Cloud Connect is a specialised bespoke software development house. We develop most of our solutions internally, maintaining a very high degree of control over the quality of our products and services, at the same time giving us and our customers the competitive advantages sought in today’s market environments. It also gives us the autonomy to decide which modifications and enhancements are most valued and when they are best implemented.

Cloud Connect’s success is based on our ability to create new and compelling products, services and experiences for our users, initiate and embrace disruptive technology trends in order to enter new markets, and to drive broad adoption of our products and services. We actively engage ourselves in emerging technologies and breakthroughs as they offer significant opportunities in delivering value to our customers and generating growth for the company. We maintain a long-term commitment towards research and development across a wide spectrum of technologies, tools and platforms.
          </p>
        </div>

        <!-- Investing in the IR4.0 & Publications -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Investing in the IR4.0</h2>
          <p class="text-gray-700 leading-relaxed mb-8">
          We walk the talk by consistently channelling a portion of our profit into research and development activities. Cloud Connect works on a number of meaningful research collaborations and partnerships with education institutions to produce marketable products, such as with the University of Malaya (UM) in the following fields:
          <ul>
            <li>Artificial Intelligence (AI) – Malay Natural Language Processing (NLP)</li>
            <li>BAKU</li>
            <li>SITI</li>
            <li>Robotic designs</li>
            <li>IoT solutions</li>            
          </ul>
          </p>
          <br>
          <h3 class="text-xl font-semibold mb-4">Publications</h3>
          <ul>
            <li><a href="#" class="text-blue-600 hover:underline">Research Paper 1 (PDF)</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Research Paper 2 (PDF)</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Research Paper 3 (PDF)</a></li>
          </ul>
        </div>

        <!-- R&D Partners -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">3. R&D Partners</h2>
          <div class="flex flex-wrap justify-center items-center h-full">
            <img src="/src/images/landingPage/UM.png" alt="Partner Logo 1" class="h-24 w-auto mx-4 my-2">
          </div>
        </div>
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
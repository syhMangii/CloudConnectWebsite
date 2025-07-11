<template>
  <div class="rd-view">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-64 bg-cover bg-center" style="background-image: url('/src/images/landingPage/hero1.png');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h1 class="text-white text-4xl font-bold">Virtual Cloud Provider</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <!-- Column 1: What Is VCP? -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">What Is VCP?</h2>
          <p class="text-gray-700 leading-relaxed">
            The Virtual Cloud Provider Program (VCP) is designed for businesses looking to offer cloud services to their clients without the overhead of managing their own infrastructure. It allows you to white-label our robust cloud platform, providing a seamless experience for your customers under your own brand.
          </p>
        </div>

        <!-- Column 2: An on-demand cloud services or white-labeled cloud service -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4"><b>An on-demand cloud services or white-labeled cloud service</b></h2>
          <p class="text-gray-700 leading-relaxed mb-8">
            With VCP, you can provide a wide range of cloud services, including virtual machines, storage, networking, and more, all on an on-demand basis. This flexibility allows your clients to scale their resources up or down as needed, ensuring they only pay for what they use. Our white-label solution means your customers interact with your brand, strengthening your market presence.
          </p>
        </div>

        <!-- Column 3: The Program -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">The Program</h2>
          <p class="text-gray-700 leading-relaxed">
            The VCP program offers comprehensive support, training, and resources to help you succeed. We provide you with the tools and knowledge to effectively market, sell, and manage cloud services. Our partnership model ensures that you have access to our expertise and infrastructure, allowing you to focus on your core business and customer relationships.
          </p>
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
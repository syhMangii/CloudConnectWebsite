<template>
  <div class="rd-view">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-64 bg-cover bg-center" style="background-image: url('/src/images/landingPage/hero1.png');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h1 class="text-white text-4xl font-bold">Iaas and Paas Platform</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <!-- Intellectual Property -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">1. Intellectual Property</h2>
          <p class="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <!-- Investing in the IR4.0 & Publications -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">2. Investing in the IR4.0</h2>
          <p class="text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
            <!-- Dummy Logos - Replace with actual images -->
            <img src="/src/images/landingPage/logo.png" alt="Partner Logo 1" class="h-24 w-auto mx-4 my-2">
            <img src="/src/images/landingPage/logo.png" alt="Partner Logo 2" class="h-24 w-auto mx-4 my-2">
            <img src="/src/images/landingPage/logo.png" alt="Partner Logo 3" class="h-24 w-auto mx-4 my-2">
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
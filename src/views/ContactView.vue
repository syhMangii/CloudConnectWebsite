<template>
  <div class="contact-view">
    <Navbar />
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-64 bg-cover bg-center" style="background-image: url('/src/images/landingPage/hero1.png');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h1 class="text-white text-4xl font-bold">Contact Us</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <!-- Company Info -->
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Cloud Connect Sdn Bhd (883038-K)</h2>
          <p class="text-gray-700 leading-relaxed">
            Level 11, Tower 2A, Avenue 5, Bangsar South City,
            No. 8 Jalan Kerinchi, 59200 Kuala Lumpur, Malaysia.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            Email: info@cloudconnect.com.my
          </p>
          <p class="text-gray-700 leading-relaxed">
            Phone: +603 5033 4848
          </p>
        </div>

        <!-- Contact Form -->
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Send us a message</h2>
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div>
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
              <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div>
              <label for="subject" class="block text-gray-700 text-sm font-bold mb-2">Subject</label>
              <input type="text" id="subject" name="subject" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div>
              <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" class="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Contact Us
            </button>
          </form>
        </div>
      </div>

      <!-- Call Us Section -->
      <div class="text-center mt-12">
        <h2 class="text-3xl font-bold text-gray-800">Prefer a personal touch? Call (+603) 5033 4848</h2>
        <p class="text-gray-600 text-lg mt-2">Give us a shout and let's have a chat</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
</script>

<style scoped>
/* Add any specific styles if needed, though Tailwind should handle most */
</style>

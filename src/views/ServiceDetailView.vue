<template>
  <Navbar />
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">{{ serviceName }} Details</h1>
    <p class="text-gray-700 text-lg">More details about {{ serviceName }} will be displayed here.</p>
    <router-link to="/" class="text-accent hover:text-accent mt-8 inline-block">Back to Home</router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Navbar from '../components/layout/Navbar.vue';

const props = defineProps({
  serviceName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>

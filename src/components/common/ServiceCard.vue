<template>
  <div class="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
    <h3 class="text-xl font-semibold text-accent mb-3">{{ title }}</h3>
    <p class="text-gray-600 mb-4 flex-grow">{{ description }}</p>
    <router-link
      :to="link"
      class="text-blue-500 hover:text-blue-600 font-medium self-start"
    >
      See More
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add any specific styles here if needed, but prefer Tailwind utilities */
</style>

<template>
  <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white shadow-lg rounded-lg">
    <div class="flex">
      <!-- Left Panel: Categories -->
      <div class="w-1/4 bg-gray-50 p-6 rounded-l-lg">
        <h3 class="font-bold text-lg text-gray-800 mb-4">Solutions</h3>
        <ul>
          <li
            v-for="category in categories"
            :key="category.name"
            @mouseover="activeCategory = category"
            class="p-2 rounded-md cursor-pointer"
            :class="{ 'bg-blue-100 text-blue-600': activeCategory.name === category.name }"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
      <!-- Right Panel: Content -->
      <div class="w-3/4 p-6">
        <h3 class="font-bold text-lg text-gray-800 mb-4">{{ activeCategory.name }}</h3>
        <ul class="space-y-2">
          <li v-for="item in activeCategory.items" :key="item">
            <a href="#" class="text-gray-600 hover:text-blue-500">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    name: 'Big Data Solutions',
    items: ['Big Data - FLUX'],
  },
  {
    name: 'API Solutions',
    items: ['Realtime API - USC'],
  },
  {
    name: 'AI Solutions',
    items: ['BAKU - Binary Artificial Key Unit', 'SITI - Intelligent Customer Service'],
  },
  {
    name: 'Cloud Solutions',
    items: ['Virtual Cloud Provider', 'Iaas and Paas Platform', 'SaaS Onboarding', 'Saas Marketplace'],
  },
]);

const activeCategory = ref(categories.value[0]);
</script>
  
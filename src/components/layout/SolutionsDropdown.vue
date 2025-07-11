<template>
  <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-[#1c1c1c] shadow-lg rounded-lg">
    <div class="flex">
      <!-- Left Panel: Categories -->
      <div class="w-1/4 bg-[#1c1c1c] p-6 rounded-l-lg">
        <h3 class="font-bold text-lg text-white mb-4">Solutions</h3>
        <ul>
          <li
            v-for="category in categories"
            :key="category.name"
            @mouseover="activeCategory = category"
            class="p-2 rounded-md cursor-pointer text-white hover:bg-accent"
            :class="{ 'bg-accent text-white': activeCategory.name === category.name }"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
      <!-- Right Panel: Content -->
      <div class="w-3/4 p-6 bg-[#1c1c1c]">
        <h3 class="font-bold text-lg text-white mb-4">{{ activeCategory.name }}</h3>
        <ul class="space-y-2">
          <li v-for="item in activeCategory.items" :key="item">
            <router-link :to="getSolutionRoute(item)" class="text-white hover:text-accent">{{ item }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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

const getSolutionRoute = (itemName) => {
  const formattedItemName = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return `/solutions/${formattedItemName}`;
};
</script>
  
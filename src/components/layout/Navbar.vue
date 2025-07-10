<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <a href="#">
            <img src="../../images/logo.png" alt="Cloud Connect" class="h-8 mr-4">
          </a>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" class="text-gray-700 hover:text-blue-500">MyDIGITAL</a>
          <div
            class="relative"
            @mouseover="openSolutions"
            @mouseleave="closeSolutions"
          >
            <a href="#" class="text-gray-700 hover:text-blue-500">Solutions</a>
            <SolutionsDropdown v-if="solutionsOpen" @mouseover="openSolutions" @mouseleave="closeSolutions" />
          </div>
          <div
            class="relative"
            @mouseover="openProducts"
            @mouseleave="closeProducts"
          >
            <a href="#" class="text-gray-700 hover:text-blue-500">Products</a>
            <ProductDropdown v-if="productsOpen" @mouseover="openProducts" @mouseleave="closeProducts" />
          </div>
          <a href="#" class="text-gray-700 hover:text-blue-500">R&D</a>
          <a href="#" class="text-gray-700 hover:text-blue-500">About Us</a>
          <a href="#" class="text-gray-700 hover:text-blue-500">Contact Us</a>
        </div>
        <div class="md:hidden flex items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-blue-500 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-if="mobileMenuOpen" class="md:hidden">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Home</a>
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">MyDIGITAL</a>
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Solutions</a>
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Products</a>
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">R&D</a>
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import SolutionsDropdown from './SolutionsDropdown.vue'
import ProductDropdown from './ProductDropdown.vue'

const solutionsOpen = ref(false)
const productsOpen = ref(false)
const mobileMenuOpen = ref(false)

let solutionsTimeout = null;
let productsTimeout = null;

const openSolutions = () => {
  clearTimeout(solutionsTimeout);
  solutionsOpen.value = true;
};

const closeSolutions = () => {
  solutionsTimeout = setTimeout(() => {
    solutionsOpen.value = false;
  }, 100); // 100ms delay
};

const openProducts = () => {
  clearTimeout(productsTimeout);
  productsOpen.value = true;
};

const closeProducts = () => {
  productsTimeout = setTimeout(() => {
    productsOpen.value = false;
  }, 100); // 100ms delay
};
</script>

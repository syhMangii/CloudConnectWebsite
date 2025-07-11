<template>
  <nav :class="{'bg-[#47425d] shadow-lg': scrolled, 'bg-transparent': !scrolled}" class="fixed w-full top-0 z-50 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <a href="#">
            <img src="../../images/landingPage/logo.png" alt="Cloud Connect" class="h-8 mr-4">
          </a>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-white hover:text-accent" active-class="text-accent">Home</router-link>
          <a href="#" class="text-white hover:text-accent">MyDIGITAL</a>
          <div
            class="relative"
            @mouseover="openSolutions"
            @mouseleave="closeSolutions"
          >
            <a href="#" class="text-white hover:text-accent">Solutions</a>
            <SolutionsDropdown v-if="solutionsOpen" @mouseover="openSolutions" @mouseleave="closeSolutions" />
          </div>
          <div
            class="relative"
            @mouseover="openProducts"
            @mouseleave="closeProducts"
          >
            <router-link to="#" class="text-white hover:text-accent" active-class="text-accent">Products</router-link>
            <ProductDropdown v-if="productsOpen" @mouseover="openProducts" @mouseleave="closeProducts" />
          </div>
          <router-link to="/rd" class="text-white hover:text-accent" active-class="text-accent">R&D</router-link>
          <router-link to="/about" class="text-white hover:text-accent" active-class="text-accent">About Us</router-link>
          <router-link to="/contact" class="text-white hover:text-accent" active-class="text-accent">Contact Us</router-link>
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
      <router-link to="/" class="block py-2 px-4 text-sm text-white hover:bg-gray-700 hover:text-accent" active-class="text-accent">Home</router-link>
      <router-link to="/" class="block py-2 px-4 text-sm text-white hover:bg-accent hover:text-white" active-class="text-accent">Home</router-link>
      <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-accent hover:text-white">Solutions</a>
      <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-accent hover:text-white">Products</a>
      <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-accent hover:text-white">R&D</a>
      <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-accent hover:text-accent">About Us</a>
      <router-link to="/contact" class="block py-2 px-4 text-sm text-white hover:bg-accent hover:text-white" active-class="text-accent">Contact Us</router-link>
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
const scrolled = ref(false)

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

<template>
  <section class="relative h-screen overflow-hidden">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="['absolute inset-0 transition-opacity duration-1000 ease-in-out', { 'opacity-100': activeSlide === index, 'opacity-0': activeSlide !== index }]"
      :style="{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {{ slide.title }}
        </h1>
        <button class="bg-accent hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          MYDIGITAL
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import hero1 from '@/images/landingPage/hero1.png';
import hero2 from '@/images/landingPage/hero2.jpg';
import hero3 from '@/images/landingPage/hero3.png';

const slides = ref([
  { image: hero1, title: 'Connect Your Business to the Cloud' },
  { image: hero2, title: 'Seamless Integration, Powerful Solutions' },
  { image: hero3, title: 'Innovate and Grow with Cloud Connect' },
]);

const activeSlide = ref(0);
let slideInterval;

onMounted(() => {
  slideInterval = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.value.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>

<style scoped>
/* No custom CSS needed here, Tailwind handles transitions */
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import bannerImage from '@/assets/belyo/comfort-banner.png'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="relative py-20 md:py-28">
    <div class="absolute inset-0">
      <img :src="bannerImage" alt="Комфорт, который ощущается" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div
        :class="[
          'max-w-lg transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
          Комфорт, который ощущается
        </h2>
        <p class="text-white/90 text-lg leading-relaxed">
          Мы уделяем внимание каждой детали — от посадки до качества материалов, 
          чтобы бельё было не только красивым, но и удобным в носке.
        </p>
      </div>
    </div>
  </section>
</template>

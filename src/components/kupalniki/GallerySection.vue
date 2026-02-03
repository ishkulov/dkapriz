<script setup lang="ts">
import { ref, onMounted } from 'vue'

import coralBikiniImg from '@/assets/coral_bikini_product_photo.png'
import navyBikiniImg from '@/assets/navy_sporty_bikini_photo.png'
import greenSwimwearImg from '@/assets/green_tropical_swimsuit_photo.png'
import stylishSwimwearImg from '@/assets/stylish_swimsuit_fashion_photo.png'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const galleryImages = [
  { src: coralBikiniImg, alt: 'Коралловый бикини' },
  { src: navyBikiniImg, alt: 'Спортивный бикини' },
  { src: greenSwimwearImg, alt: 'Тропический купальник' },
  { src: stylishSwimwearImg, alt: 'Стильный купальник' },
]
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div
        :class="[
          'transition-all duration-700 delay-200',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4 text-center">
          Галерея купальников
        </h2>
        <p class="text-muted text-center max-w-2xl mx-auto mb-12">
          Примеры моделей из нашего ассортимента
        </p>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            class="aspect-[3/4] rounded-2xl overflow-hidden group"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import heroImage1 from '@/assets/hero_swimwear_lifestyle_photo.png'
import heroImage2 from '@/assets/elegant_lingerie_fashion_photo.png'
import heroImage3 from '@/assets/stylish_swimsuit_fashion_photo.png'

const isVisible = ref(false)
const currentImageIndex = ref(0)
let intervalId: number | null = null

const heroImages = [heroImage1, heroImage2, heroImage3]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  intervalId = window.setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
  }, 10000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const scrollToAssortment = () => {
  document.getElementById('assortment')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContacts = () => {
  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="min-h-screen flex items-center pt-20 pb-16 bg-primary-bg">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16 w-full">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div
          :class="[
            'order-2 lg:order-1 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h1 class="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium text-heading leading-tight mb-6">
            Нижнее белье и&nbsp;купальники
            <br />
            <span class="italic text-primary">для всей семьи</span>
          </h1>
          <p class="text-body text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Магазин с широким ассортиментом качественного нижнего белья и купальников.
            Профессиональная консультация и возможность примерки в уютной атмосфере.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <button
              @click="scrollToAssortment"
              class="bg-primary text-white rounded-full px-8 py-4 text-base font-medium hover:bg-primary/90 transition-colors"
            >
              Смотреть ассортимент
            </button>
            <button
              @click="scrollToContacts"
              class="border border-primary/30 text-body rounded-full px-8 py-4 text-base hover:border-primary hover:text-primary transition-colors"
            >
              Как нас найти
            </button>
          </div>
        </div>

        <div
          :class="[
            'order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="relative animate-float w-full max-w-sm lg:max-w-md">
            <div class="relative w-full" style="padding-bottom: 133.33%;">
              <img
                v-for="(image, index) in heroImages"
                :key="index"
                :src="image"
                alt="Модель в стильном купальнике"
                :class="[
                  'absolute inset-0 w-full h-full rounded-[32px] shadow-2xl object-cover transition-opacity duration-1000',
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                ]"
              />
            </div>
            <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg hidden md:block z-10">
              <div class="text-2xl font-serif text-primary">500+</div>
              <div class="text-sm text-muted">моделей в наличии</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

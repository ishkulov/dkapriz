<script setup lang="ts">
import { ref, onMounted } from 'vue'
import heroImage from '@/assets/belyo/hero.png'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="relative min-h-[600px] md:min-h-[700px] flex items-center">
    <div class="absolute inset-0">
      <img :src="heroImage" alt="Нижнее бельё" class="w-full h-full object-cover object-top" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-10 lg:px-16 py-32">
      <div class="max-w-xl">
        <h1
          :class="[
            'font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          Нижнее бельё
        </h1>
        <p
          :class="[
            'text-white/90 text-lg md:text-xl leading-relaxed mb-8 transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          Индивидуальный подбор нижнего белья с учётом фигуры, посадки и комфорта. 
          Поможем выбрать модель, в которой вы будете чувствовать себя уверенно.
        </p>
        <div
          :class="[
            'flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <a
            href="tel:+79218924860"
            class="bg-primary text-white rounded-full px-8 py-4 text-base font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить и подобрать бельё
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

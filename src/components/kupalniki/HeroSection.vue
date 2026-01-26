<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import imageSrc from '@/assets/hero_swimwear_fashion_photo.png?w=665&format=webp'
import imageSrcset from '@/assets/hero_swimwear_fashion_photo.png?w=450;665;896&format=webp;avif&as=srcset'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

</script>

<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-20 bg-primary-bg">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div :class="[
          'transition-all duration-700',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        ]">
          <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <img :src="imageSrc" :srcset="imageSrcset" sizes="(max-width: 768px) 100vw, 665px"
              alt="Модель в стильном купальнике" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-[56px] font-medium text-heading leading-tight mb-6">
            Женские купальники в&nbsp;Санкт-Петербурге
          </h1>
          <p class="text-body text-lg md:text-xl leading-relaxed mb-8">
            Планируете отпуск у моря, поездку к солнцу или просто ищете удобный и красивый купальник для бассейна?
            В бутике «Дамский Каприз» вы сможете подобрать женский купальник, в котором будете чувствовать себя уверенно
            и комфортно.
          </p>
          <a href="tel:+79218924860"
            class="bg-primary text-white rounded-full px-8 py-4 text-base font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
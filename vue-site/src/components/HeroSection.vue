<script setup lang="ts">
import { ref, onMounted } from 'vue'
import heroImage from '@/assets/hero_swimwear_lifestyle_photo.png'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
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
            Нижнее бельё
            <br />
            и купальники
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
          <div class="relative animate-float">
            <img
              :src="heroImage"
              alt="Модель в стильном купальнике"
              class="w-full max-w-sm lg:max-w-md rounded-[32px] shadow-2xl object-cover"
            />
            <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg hidden md:block">
              <div class="text-2xl font-serif text-primary">500+</div>
              <div class="text-sm text-muted">моделей в наличии</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

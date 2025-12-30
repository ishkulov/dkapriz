<script setup lang="ts">
const benefits = [
  {
    icon: 'shirt',
    title: 'Примерка в магазине',
    description: 'Удобные примерочные кабины для комфортного подбора белья и купальников',
  },
  {
    icon: 'message',
    title: 'Профессиональная консультация',
    description: 'Опытные консультанты помогут подобрать идеальную модель и размер',
  },
  {
    icon: 'ruler',
    title: 'Широкий размерный ряд',
    description: 'От XS до 6XL — найдём подходящий вариант для любой фигуры',
  },
  {
    icon: 'award',
    title: 'Качество и комфорт',
    description: 'Только проверенные бренды с гарантией качества материалов',
  },
]
</script>

<template>
  <section id="benefits" class="py-16 md:py-20 lg:py-24 bg-primary-light">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div class="text-center mb-12">
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
          Почему выбирают нас
        </h2>
        <p class="text-muted text-base md:text-lg max-w-2xl mx-auto">
          Мы создаём комфортные условия для выбора идеального белья
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div v-for="(benefit, index) in benefits" :key="index" class="bg-white rounded-2xl p-6 text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-light text-primary mb-4">
            <svg v-if="benefit.icon === 'shirt'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else-if="benefit.icon === 'message'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <svg v-else-if="benefit.icon === 'ruler'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-heading mb-2">
            {{ benefit.title }}
          </h3>
          <p class="text-muted text-sm leading-relaxed">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

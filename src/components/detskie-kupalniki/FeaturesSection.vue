<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const benefits = [
  {
    icon: 'uv',
    title: 'UV-защита',
    description: 'Ткань с ультрафиолетовым фильтром защищает нежную кожу ребёнка от солнца во время купания'
  },
  {
    icon: 'sizes',
    title: 'Все размеры и возрасты',
    description: 'Полный размерный ряд: от одежды для малышей до моделей для подростков'
  },
  {
    icon: 'comfort',
    title: 'Комфортный крой',
    description: 'Модели не сковывают движения и надёжно держатся во время активного отдыха'
  },
  {
    icon: 'help',
    title: 'Помощь с выбором',
    description: 'Если сомневаетесь — наши консультанты подберут оптимальную модель по возрасту и фигуре'
  }
]
</script>

<template>
  <section class="py-16 md:py-20 bg-primary-bg">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div
        :class="[
          'text-center mb-6 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4" data-testid="text-features-title">
          Почему выбирают нас
        </h2>
        <p class="text-body max-w-2xl mx-auto mb-4">
          Мы подбираем коллекцию с заботой о комфорте и безопасности вашего ребёнка. Каждая модель проверена на качество материалов и удобство посадки.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          :class="[
            'bg-white rounded-2xl p-6 text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
          :data-testid="`card-benefit-${index}`"
        >
          <div class="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <svg v-if="benefit.icon === 'uv'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else-if="benefit.icon === 'sizes'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4h18M3 8h18M3 12h12M3 16h8" />
            </svg>
            <svg v-else-if="benefit.icon === 'comfort'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg v-else-if="benefit.icon === 'help'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-serif text-lg font-medium text-heading mb-2">{{ benefit.title }}</h3>
          <p class="text-muted text-sm">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

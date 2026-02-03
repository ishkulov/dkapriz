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
    icon: 'user',
    title: 'Индивидуальный подбор',
    description: 'Помогаем подобрать модель и размер по фигуре'
  },
  {
    icon: 'fabric',
    title: 'Качество материалов',
    description: 'Мягкие, износостойкие и приятные к телу ткани'
  },
  {
    icon: 'consultant',
    title: 'Опытные консультанты',
    description: 'Подскажем и ответим на все вопросы'
  },
  {
    icon: 'comfort',
    title: 'Комфорт без компромиссов',
    description: 'Бельё для повседневной жизни и особых случаев'
  }
]
</script>

<template>
  <section class="py-16 md:py-20 bg-primary-bg">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div
        :class="[
          'text-center mb-12 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
          Почему выбирают нас
        </h2>
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
        >
          <div class="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <svg v-if="benefit.icon === 'user'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <svg v-else-if="benefit.icon === 'fabric'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <svg v-else-if="benefit.icon === 'consultant'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <svg v-else-if="benefit.icon === 'comfort'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="font-serif text-lg font-medium text-heading mb-2">{{ benefit.title }}</h3>
          <p class="text-muted text-sm">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

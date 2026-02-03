<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const swimwearStyles = [
  { name: 'Триангл', description: 'Классическая форма для стройной фигуры' },
  { name: 'Бандо', description: 'Без бретелей для ровного загара' },
  { name: 'Пуш-ап', description: 'Дополнительный объём и поддержка' },
  { name: 'Бикини', description: 'Раздельные модели разных фасонов' },
  { name: 'Слитные', description: 'Элегантность и комфорт' },
  { name: 'С поддержкой', description: 'Для большого размера груди' },
]
</script>

<template>
  <section class="py-16 md:py-20 bg-primary-bg">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div
        :class="[
          'transition-all duration-700 delay-200',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4 text-center">
          Модели и фасоны
        </h2>
        <p class="text-muted text-center max-w-2xl mx-auto mb-12">
          В ассортименте вы найдёте разнообразные модели купальников на любой вкус
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="style in swimwearStyles"
            :key="style.name"
            class="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-semibold text-heading mb-2">{{ style.name }}</h3>
            <p class="text-muted text-sm">{{ style.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

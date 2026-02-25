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
    icon: 'quality',
    title: 'Контроль качества',
    description: 'Каждая позиция проходит проверку перед продажей'
  },
  {
    icon: 'comfort',
    title: 'Комфортные материалы',
    description: 'Ткани, подходящие для активного отдыха и плавания'
  },
  {
    icon: 'fit',
    title: 'Продуманная посадка',
    description: 'Удобство в движении и уверенная посадка по фигуре'
  },
  {
    icon: 'variety',
    title: 'Разнообразие фасонов',
    description: 'Модели на любой вкус — от классики до ярких принтов'
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
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4" data-testid="text-whyus-title">
          Почему стоит выбрать нашу коллекцию
        </h2>
        <p class="text-body max-w-2xl mx-auto mb-4">
          Мы уделяем внимание не только внешнему виду моделей, но и их практичности. Пляжные шорты и плавки выполнены из комфортных материалов, которые подходят для активного отдыха и плавания. Продуманная посадка обеспечивает удобство в движении, а разнообразие фасонов позволяет подобрать модель под любой вкус и ситуацию.
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
            <svg v-if="benefit.icon === 'quality'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else-if="benefit.icon === 'comfort'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg v-else-if="benefit.icon === 'fit'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <svg v-else-if="benefit.icon === 'variety'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 class="font-serif text-lg font-medium text-heading mb-2">{{ benefit.title }}</h3>
          <p class="text-muted text-sm">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

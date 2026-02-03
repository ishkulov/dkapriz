<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const brands = ['Lady Lux', 'Трибуна', 'Laguna', 'Allegro', 'Lauma', 'Lengy']
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
          Наши бренды
        </h2>
        <p class="text-muted text-center mb-10">
          Проверенные производители с качественными материалами и продуманными моделями
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="brand in brands"
            :key="brand"
            class="px-5 py-2.5 bg-primary-bg rounded-full text-body text-sm font-medium border border-gray-100 hover:border-primary/30 transition-colors"
          >
            {{ brand }}
          </span>
        </div>
        <p class="text-muted text-sm text-center mt-8">
          * Ассортимент брендов может меняться в зависимости от поставок
        </p>
      </div>
    </div>
  </section>
</template>

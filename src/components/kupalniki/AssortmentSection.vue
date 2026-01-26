<script setup lang="ts">
import { ref, onMounted } from 'vue'
import swimwearCategoryImg from '@/assets/swimwear_category_photo.png'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div :class="[
          'order-2 lg:order-1 transition-all duration-700 delay-100',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        ]">
          <div class="aspect-[4/5] rounded-3xl overflow-hidden">
            <img :src="swimwearCategoryImg" alt="Ассортимент купальников" class="w-full h-full object-cover" />
          </div>
        </div>
        <div :class="[
          'order-1 lg:order-2 transition-all duration-700 delay-100',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]">
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6">
            Широкий выбор женских купальников
          </h2>
          <div class="text-body space-y-4">
            <p class="leading-relaxed">
              В нашем магазине представлен широкий ассортимент женских купальников для разных типов фигуры
              и стилей.
              Мы тщательно подбираем коллекции, обращая внимание на посадку, качество пошива и актуальные
              модные тенденции.
            </p>
            <p class="leading-relaxed">
              Каждый купальник создан так, чтобы подчёркивать достоинства и дарить уверенность.
              Разнообразие дизайнов и цветовых решений позволяет выбрать как яркий и выразительный
              купальник, так и более сдержанную, элегантную модель.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
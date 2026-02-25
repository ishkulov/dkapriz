<script setup lang="ts">
import { ref, onMounted } from 'vue'
import descriptionImage from '@/assets/image_1772058020361.png'

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
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div
          :class="[
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          ]"
        >
          <div class="aspect-square rounded-3xl overflow-hidden shadow-lg">
            <img :src="descriptionImage" alt="Мужские пляжные шорты" class="w-full h-full object-cover" data-testid="img-description" />
          </div>
        </div>
        <div
          :class="[
            'transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6" data-testid="text-description-title">
            Мужская пляжная мода для уверенного лета
          </h2>
          <p class="text-body text-lg leading-relaxed mb-4">
            Готовы к летнему отдыху на пляже или у бассейна? В нашем магазине вы найдёте мужские плавки и пляжные шорты, которые сочетают комфорт, современный дизайн и свободу движений.
          </p>
          <p class="text-body text-lg leading-relaxed mb-4">
            В коллекции представлены как классические модели, так и яркие варианты с выразительными принтами. Мы следим за актуальными тенденциями и предлагаем качественные изделия, которые хорошо сидят на фигуре и сохраняют форму.
          </p>
          <p class="text-body text-lg leading-relaxed">
            Наша цель — чтобы вы чувствовали себя уверенно и стильно в любой летней ситуации. Выберите идеальную модель и создайте образ, который подчеркнёт вашу индивидуальность.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

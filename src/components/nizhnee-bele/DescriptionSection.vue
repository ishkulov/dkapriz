<script setup lang="ts">
import { ref, onMounted } from 'vue'
import categoryImage from '@/assets/belyo/category-description.png'

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
            <img :src="categoryImage" alt="Ассортимент нижнего белья" class="w-full h-full object-cover" />
          </div>
        </div>
        <div
          :class="[
            'transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6">
            Женское нижнее бельё
          </h2>
          <p class="text-body text-lg leading-relaxed mb-4">
            Женское нижнее бельё — это не только часть гардероба, но и основа комфорта и уверенности в себе. 
            Мы подбираем бельё так, чтобы оно подчёркивало фигуру, обеспечивало правильную поддержку и было 
            приятным к телу.
          </p>
          <p class="text-body text-lg leading-relaxed">
            В ассортименте представлены модели из качественных материалов, продуманные по посадке и деталям. 
            Мы помогаем подобрать бельё для повседневной носки, особых случаев и индивидуальных задач — 
            с учётом особенностей фигуры и предпочтений.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

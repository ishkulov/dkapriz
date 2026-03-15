<script setup lang="ts">
import { ref, onMounted } from 'vue'
import descriptionImage from '@/assets/image_1773567606818.png'

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
            <img :src="descriptionImage" alt="Коллекция детских купальников" class="w-full h-full object-cover" data-testid="img-description" />
          </div>
        </div>
        <div
          :class="[
            'transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6" data-testid="text-description-title">
            Купальники и плавки для детей любого возраста
          </h2>
          <p class="text-body text-lg leading-relaxed mb-4">
            Плавание — один из лучших видов отдыха для детей: оно укрепляет здоровье, развивает физически и дарит незабываемые впечатления. Чтобы каждое купание было безопасным и радостным, важно подобрать правильную одежду для воды.
          </p>
          <p class="text-body text-lg leading-relaxed mb-4">
            В «Дамском Капризе» представлены купальники для девочек и плавки для мальчиков на любой возраст — от малышей до подростков. Все модели выполнены из качественных материалов с UV-защитой: ткань приятна к телу и бережёт кожу от солнца даже при длительном купании.
          </p>
          <p class="text-body text-lg leading-relaxed">
            В коллекции — пастельные оттенки и яркие принты, а разнообразие кроя позволяет найти подходящую модель для любой фигуры.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
      <div
        :class="[
          'max-w-3xl mx-auto transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6 text-center" data-testid="text-guide-title">
          Как выбрать мужские плавки и пляжные шорты
        </h2>
        <p class="text-body text-lg leading-relaxed text-center">
          При выборе пляжной одежды важно учитывать посадку, длину и стиль модели. Классические плавки подойдут для активного плавания, а пляжные шорты — для универсального летнего образа. Обратите внимание на комфорт ткани, эластичность и качество пошива. Правильно подобранная модель обеспечит максимальный комфорт и уверенность.
        </p>
      </div>
    </div>
  </section>
</template>

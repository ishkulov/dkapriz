<script setup lang="ts">
import { ref, onMounted } from 'vue'
import stylishSwimwearImg from '@/assets/stylish_swimsuit_fashion_photo.png'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="py-16 md:py-20 bg-primary-bg">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div
          :class="[
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6">
            Размеры и посадка
          </h2>
          <div class="text-body space-y-4">
            <p class="leading-relaxed">
              Мы понимаем, насколько важно правильно подобрать размер. В «Дамском Капризе» представлен широкий размерный ряд, 
              включая модели для пышных форм.
            </p>
            <p class="leading-relaxed">
              Разные варианты посадки и кроя помогают выгодно подчеркнуть фигуру и чувствовать себя комфортно на пляже или у бассейна.
            </p>
          </div>

          <h3 class="font-serif text-2xl font-medium text-heading mt-10 mb-4">
            Качественные материалы
          </h3>
          <p class="text-body leading-relaxed">
            Мы сотрудничаем с надёжными брендами, которые используют качественные материалы и уделяют внимание деталям. 
            Купальники хорошо держат форму, приятны к телу и подходят для активного отдыха у воды.
          </p>
        </div>
        <div
          :class="[
            'transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          ]"
        >
          <div class="aspect-square rounded-3xl overflow-hidden">
            <img :src="stylishSwimwearImg" alt="Купальники разных размеров" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

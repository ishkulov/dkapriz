<script setup lang="ts">
import { ref, onMounted } from 'vue'
import coralBikiniImg from '@/assets/coral_bikini_product_photo.png'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const benefits = [
  'Комфортные примерочные',
  'Помощь опытного консультанта',
  'Индивидуальный подбор по фигуре',
]
</script>

<template>
  <section class="py-16 md:py-20 bg-primary-bg">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div
        :class="[
          'transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div class="text-center lg:text-left">
            <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6">
              Примерка и помощь в выборе
            </h2>
            <p class="text-body leading-relaxed mb-6">
              В нашем магазине вы можете спокойно примерить купальники и получить консультацию специалиста. 
              Мы поможем подобрать модель с учётом фигуры, пожеланий и формата отдыха.
            </p>
            <ul class="space-y-3 text-body">
              <li
                v-for="benefit in benefits"
                :key="benefit"
                class="flex items-center gap-3"
              >
                <span class="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {{ benefit }}
              </li>
            </ul>
          </div>
          <div class="aspect-[4/3] rounded-3xl overflow-hidden">
            <img :src="coralBikiniImg" alt="Примерка купальников" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

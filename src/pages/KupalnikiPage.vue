<script setup lang="ts">
import { ref, onMounted } from 'vue'

import coralBikiniImg from '@/assets/coral_bikini_product_photo.png'
import navyBikiniImg from '@/assets/navy_sporty_bikini_photo.png'
import greenSwimwearImg from '@/assets/green_tropical_swimsuit_photo.png'
import stylishSwimwearImg from '@/assets/stylish_swimsuit_fashion_photo.png'
import swimwearCategoryImg from '@/assets/swimwear_category_photo.png'

import HeroSection from '../components/kupalniki/HeroSection.vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const brands = [
  'Bahama', 'Ysabel Mora', 'Feba', 'Allegro', 'Emdi', 'V.O.V.A.',
  'Rosme', 'Selmark', 'Calao', 'Naturana', 'Amarea', 'BluBay',
  'Charmante', 'Milavitsa', 'David', 'Трибуна', 'Gabbiano'
]

const swimwearStyles = [
  { name: 'Триангл', description: 'Классическая форма для стройной фигуры' },
  { name: 'Бандо', description: 'Без бретелей для ровного загара' },
  { name: 'Пуш-ап', description: 'Дополнительный объём и поддержка' },
  { name: 'Бикини', description: 'Раздельные модели разных фасонов' },
  { name: 'Слитные', description: 'Элегантность и комфорт' },
  { name: 'С поддержкой', description: 'Для большого размера груди' },
]

const galleryImages = [
  { src: coralBikiniImg, alt: 'Коралловый бикини' },
  { src: navyBikiniImg, alt: 'Спортивный бикини' },
  { src: greenSwimwearImg, alt: 'Тропический купальник' },
  { src: stylishSwimwearImg, alt: 'Стильный купальник' },
]
</script>

<template>
  <div class="min-h-screen">
    <HeroSection />

    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div
            :class="[
              'order-2 lg:order-1 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            ]"
          >
            <div class="aspect-[4/5] rounded-3xl overflow-hidden">
              <img :src="swimwearCategoryImg" alt="Ассортимент купальников" class="w-full h-full object-cover" />
            </div>
          </div>
          <div
            :class="[
              'order-1 lg:order-2 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
          >
            <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-6">
              Широкий выбор женских купальников
            </h2>
            <div class="text-body space-y-4">
              <p class="leading-relaxed">
                В нашем магазине представлен широкий ассортимент женских купальников для разных типов фигуры и стилей. 
                Мы тщательно подбираем коллекции, обращая внимание на посадку, качество пошива и актуальные модные тенденции.
              </p>
              <p class="leading-relaxed">
                Каждый купальник создан так, чтобы подчёркивать достоинства и дарить уверенность. 
                Разнообразие дизайнов и цветовых решений позволяет выбрать как яркий и выразительный купальник, так и более сдержанную, элегантную модель.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4 text-center">
            Галерея купальников
          </h2>
          <p class="text-muted text-center max-w-2xl mx-auto mb-12">
            Примеры моделей из нашего ассортимента
          </p>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div
              v-for="(image, index) in galleryImages"
              :key="index"
              class="aspect-[3/4] rounded-2xl overflow-hidden group"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4 text-center">
            Бренды купальников
          </h2>
          <p class="text-muted text-center mb-10">
            В нашем магазине представлены проверенные бренды с качественными материалами
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
            * Ассортимент брендов может меняться в зависимости от сезона и поставок
          </p>
        </div>
      </div>
    </section>

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
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Комфортные примерочные
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Помощь опытного консультанта
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Индивидуальный подбор по фигуре
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

    <section id="page-contacts" class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-400',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="bg-primary-bg rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
              Приглашаем в бутик «Дамский Каприз»
            </h2>
            <p class="text-body mb-8">
              Приходите в «Дамский Каприз», чтобы без спешки выбрать идеальный купальник. 
              Наслаждайтесь солнцем, морем и отдыхом с комфортом и стилем — в купальнике, который подходит именно вам.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="tel:+79218924860"
                class="bg-primary text-white rounded-full px-8 py-4 text-base font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
              <a
                href="https://wa.me/79218924860"
                target="_blank"
                rel="noopener noreferrer"
                class="border border-primary/30 text-body rounded-full px-8 py-4 text-base hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
            <div class="text-muted">
              <p class="font-medium text-heading mb-1">Санкт-Петербург, ул. Наличная, 49</p>
              <p>Пн - Пт: 11:00 - 20:00 | Сб - Вс: 11:00 - 19:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

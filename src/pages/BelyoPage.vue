<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'

import heroImage from '@/assets/belyo/hero.png'
import categoryImage from '@/assets/belyo/category-description.png'
import bannerImage from '@/assets/belyo/comfort-banner.png'

const pageTitle = 'Нижнее бельё — магазин «Дамский Каприз» в СПб'
const pageDescription = 'Индивидуальный подбор женского нижнего белья в Санкт-Петербурге. Качественные материалы, примерочные кабины, консультация по размеру и посадке.'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dkapriz.ru/nizhnee-bele/' },
    { property: 'og:image', content: 'https://dkapriz.ru/assets/belyo/hero.png' },
    { property: 'og:locale', content: 'ru_RU' }
  ]
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const brands = ['Lady Lux', 'Трибуна', 'Laguna', 'Allegro', 'Lauma', 'Lengy']

const benefits = [
  {
    icon: 'user',
    title: 'Индивидуальный подбор',
    description: 'Помогаем подобрать модель и размер по фигуре'
  },
  {
    icon: 'fabric',
    title: 'Качество материалов',
    description: 'Мягкие, износостойкие и приятные к телу ткани'
  },
  {
    icon: 'consultant',
    title: 'Опытные консультанты',
    description: 'Подскажем и ответим на все вопросы'
  },
  {
    icon: 'comfort',
    title: 'Комфорт без компромиссов',
    description: 'Бельё для повседневной жизни и особых случаев'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <section class="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div class="absolute inset-0">
        <img :src="heroImage" alt="Нижнее бельё" class="w-full h-full object-cover object-top" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-10 lg:px-16 py-32">
        <div class="max-w-xl">
          <h1
            :class="[
              'font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
          >
            Нижнее бельё
          </h1>
          <p
            :class="[
              'text-white/90 text-lg md:text-xl leading-relaxed mb-8 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
          >
            Индивидуальный подбор нижнего белья с учётом фигуры, посадки и комфорта. 
            Поможем выбрать модель, в которой вы будете чувствовать себя уверенно.
          </p>
          <div
            :class="[
              'flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
          >
            <a
              href="tel:+79218924860"
              class="bg-primary text-white rounded-full px-8 py-4 text-base font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить и подобрать бельё
            </a>
            <a
              href="https://wa.me/79218924860"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-white/50 text-white rounded-full px-8 py-4 text-base hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </section>

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

    <section class="relative py-20 md:py-28">
      <div class="absolute inset-0">
        <img :src="bannerImage" alt="Комфорт, который ощущается" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'max-w-lg transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Комфорт, который ощущается
          </h2>
          <p class="text-white/90 text-lg leading-relaxed">
            Мы уделяем внимание каждой детали — от посадки до качества материалов, 
            чтобы бельё было не только красивым, но и удобным в носке.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20 bg-primary-bg">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
            Почему выбирают нас
          </h2>
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
          >
            <div class="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg v-if="benefit.icon === 'user'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <svg v-else-if="benefit.icon === 'fabric'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <svg v-else-if="benefit.icon === 'consultant'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <svg v-else-if="benefit.icon === 'comfort'" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="font-serif text-lg font-medium text-heading mb-2">{{ benefit.title }}</h3>
            <p class="text-muted text-sm">{{ benefit.description }}</p>
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

    <section class="py-16 md:py-20 bg-primary-bg">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-400',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="bg-white rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-sm">
            <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
              Нужна помощь с выбором?
            </h2>
            <p class="text-body mb-8">
              Не уверены в размере или модели? Наши консультанты помогут подобрать бельё, 
              которое подойдёт именно вам.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="tel:+79218924860"
                class="bg-primary text-white rounded-full px-8 py-4 text-base font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить консультанту
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

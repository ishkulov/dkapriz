<script setup lang="ts">
import { useHead } from '@unhead/vue'
import HeroSection from '@/components/plavki-i-shorty/HeroSection.vue'
import DescriptionSection from '@/components/plavki-i-shorty/DescriptionSection.vue'
import WhyUsSection from '@/components/plavki-i-shorty/WhyUsSection.vue'
import GuideSection from '@/components/plavki-i-shorty/GuideSection.vue'
import BrandsSection from '@/components/plavki-i-shorty/BrandsSection.vue'
import CtaSection from '@/components/plavki-i-shorty/CtaSection.vue'

const pageTitle = 'Мужские плавки и шорты — магазин «Дамский Каприз» в СПб'
const pageDescription = 'Мужские плавки и пляжные шорты в Санкт-Петербурге. Бренды Keano, Emdi, Scuba. Комфортные модели для пляжа и бассейна. Магазин «Дамский Каприз».'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'мужские плавки, пляжные шорты, Keano, Emdi, Scuba' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dkapriz.ru/plavki-i-shorty/' },
    { property: 'og:locale', content: 'ru_RU' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <HeroSection />
    <DescriptionSection />
    <WhyUsSection />
    <GuideSection />
    <BrandsSection />
    <CtaSection />
  </div>
</template>

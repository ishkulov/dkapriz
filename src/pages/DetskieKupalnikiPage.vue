<script setup lang="ts">
import { useHead } from '@unhead/vue'
import HeroSection from '@/components/detskie-kupalniki/HeroSection.vue'
import DescriptionSection from '@/components/detskie-kupalniki/DescriptionSection.vue'
import FeaturesSection from '@/components/detskie-kupalniki/FeaturesSection.vue'
import BrandsSection from '@/components/detskie-kupalniki/BrandsSection.vue'
import CtaSection from '@/components/detskie-kupalniki/CtaSection.vue'

const pageTitle = 'Детские купальники — магазин «Дамский Каприз» в СПб'
const pageDescription = 'Детские купальники и плавки в Санкт-Петербурге. Бренды Charmante, Emdi. Модели с UV-защитой для мальчиков и девочек всех возрастов. Магазин «Дамский Каприз».'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'детские купальники, купальник для девочки, плавки для мальчика, Charmante, Emdi' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dkapriz.ru/detskie-kupalniki/' },
    { property: 'og:locale', content: 'ru_RU' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <HeroSection />
    <DescriptionSection />
    <FeaturesSection />
    <BrandsSection />
    <CtaSection />
  </div>
</template>

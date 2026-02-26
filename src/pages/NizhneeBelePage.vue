<script setup lang="ts">
import { useHead } from '@unhead/vue'
import HeroSection from '@/components/nizhnee-bele/HeroSection.vue'
import DescriptionSection from '@/components/nizhnee-bele/DescriptionSection.vue'
import ComfortBanner from '@/components/nizhnee-bele/ComfortBanner.vue'
import BenefitsSection from '@/components/nizhnee-bele/BenefitsSection.vue'
import BrandsSection from '@/components/nizhnee-bele/BrandsSection.vue'
import CtaSection from '@/components/nizhnee-bele/CtaSection.vue'

const pageTitle = 'Нижнее бельё — магазин «Дамский Каприз» в СПб'
const pageDescription = 'Индивидуальный подбор женского нижнего белья в Санкт-Петербурге. Качественные материалы, примерочные кабины, консультация по размеру и посадке.'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'женское бельё, Lady Lux, Lauma, индивидуальный подбор' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dkapriz.ru/nizhnee-bele/' },
    { property: 'og:image', content: 'https://dkapriz.ru/assets/belyo/hero.png' },
    { property: 'og:locale', content: 'ru_RU' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <HeroSection />
    <DescriptionSection />
    <ComfortBanner />
    <BenefitsSection />
    <BrandsSection />
    <CtaSection />
  </div>
</template>

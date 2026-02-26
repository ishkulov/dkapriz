<script setup lang="ts">
import { useHead } from '@unhead/vue'
import HeroSection from '../components/kupalniki/HeroSection.vue'
import AssortmentSection from '../components/kupalniki/AssortmentSection.vue'
import StylesSection from '../components/kupalniki/StylesSection.vue'
import GallerySection from '../components/kupalniki/GallerySection.vue'
import SizingSection from '../components/kupalniki/SizingSection.vue'
import BrandsSection from '../components/kupalniki/BrandsSection.vue'
import FittingSection from '../components/kupalniki/FittingSection.vue'
import CtaSection from '../components/kupalniki/CtaSection.vue'

useHead({
  meta: [
    { name: 'keywords', content: 'бикини, слитный купальник, купальники для пышных форм, Bahama, Ysabel Mora' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <HeroSection />
    <AssortmentSection />
    <StylesSection />
    <GallerySection />
    <SizingSection />
    <BrandsSection />
    <FittingSection />
    <CtaSection />
  </div>
</template>

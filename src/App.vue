<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AssortmentSection from './components/AssortmentSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const activeSection = ref('home')

const handleScroll = () => {
  const sections = ['home', 'assortment', 'benefits', 'contacts']
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navigation :activeSection="activeSection" @navigate="activeSection = $event" />
    <main>
      <HeroSection />
      <AssortmentSection />
      <BenefitsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

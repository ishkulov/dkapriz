<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

import Navigation from './components/Navigation.vue'
import FooterSection from './components/FooterSection.vue'
import CookieConsent from './components/CookieConsent.vue'

const route = useRoute()

useHead(() => {
  const path = route.path.endsWith('/')
    ? route.path
    : route.path + '/'

  return {
    link: [
      {
        rel: 'canonical',
        href: 'https://dkapriz.ru' + path
      }
    ]
  }
})
  
const activeSection = ref('home')

const handleScroll = () => {
  if (route.path !== '/') return
  
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

watch(() => route.path, (newPath) => {
  if (newPath !== '/') {
    activeSection.value = ''
  }
})

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
      <router-view />
    </main>
    <FooterSection />
    <CookieConsent />
  </div>
</template>

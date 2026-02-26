<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import logoImage from '@/assets/logo.png'

defineProps<{
  activeSection: string
}>()

const emit = defineEmits<{
  navigate: [section: string]
}>()

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'assortment', label: 'Ассортимент' },
  { id: 'benefits', label: 'Преимущества' },
  { id: 'contacts', label: 'Контакты' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleNavClick = async (sectionId: string) => {
  isMobileMenuOpen.value = false
  
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      emit('navigate', sectionId)
    }, 100)
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    emit('navigate', sectionId)
  }
}

const goHome = async () => {
  isMobileMenuOpen.value = false
  if (route.path !== '/') {
    await router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-100 shadow-sm' : 'bg-transparent border-transparent shadow-none'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex-shrink-0 cursor-pointer" @click="goHome">
          <img :src="logoImage" alt="Дамский Каприз" class="h-10 md:h-12 w-auto" />
        </div>

        <div class="hidden lg:flex items-center gap-6">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="handleNavClick(item.id)"
            :class="[
              'text-sm transition-colors whitespace-nowrap',
              activeSection === item.id ? 'text-primary font-medium' : 'text-body hover:text-primary'
            ]"
          >
            {{ item.label }}
          </button>
        </div>

        <div class="hidden lg:flex items-center gap-4">
          <a href="tel:+79218924860" class="flex items-center gap-2 text-sm text-body hover:text-primary transition-colors whitespace-nowrap">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+7 (921) 892-48-60</span>
          </a>
        </div>

        <button class="lg:hidden p-2" @click="isMobileMenuOpen = true">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <Teleport to="body">
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 bg-white">
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
          <img :src="logoImage" alt="Дамский Каприз" class="h-10 w-auto" />
          <button class="p-2" @click="isMobileMenuOpen = false">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-col items-center justify-center flex-1 gap-8">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="handleNavClick(item.id)"
            :class="[
              'text-xl transition-colors',
              activeSection === item.id ? 'text-primary font-medium' : 'text-body hover:text-primary'
            ]"
          >
            {{ item.label }}
          </button>
        </div>
        <div class="p-6 text-center border-t border-gray-100">
          <a href="tel:+79218924860" class="flex items-center justify-center gap-2 text-lg text-body">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+7 (921) 892-48-60</span>
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

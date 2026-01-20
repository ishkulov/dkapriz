<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const CONSENT_KEY = 'ym_consent'

const initYandexMetrika = () => {
  if (typeof window !== 'undefined' && !(window as any).ym) {
    (function(m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
      m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments) }
      m[i].l = 1 * (new Date() as any)
      for (let j = 0; j < e.scripts.length; j++) {
        if (e.scripts[j].src === r) return
      }
      k = e.createElement(t)
      a = e.getElementsByTagName(t)[0]
      k.async = 1
      k.src = r
      a.parentNode.insertBefore(k, a)
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
    (window as any).ym(106242383, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      accurateTrackBounce: true,
      trackLinks: true
    })
  }
}

const acceptConsent = () => {
  localStorage.setItem(CONSENT_KEY, 'accepted')
  isVisible.value = false
  initYandexMetrika()
}

const declineConsent = () => {
  localStorage.setItem(CONSENT_KEY, 'declined')
  isVisible.value = false
}

onMounted(() => {
  const consent = localStorage.getItem(CONSENT_KEY)
  if (!consent) {
    isVisible.value = true
  } else if (consent === 'accepted') {
    initYandexMetrika()
  }
})
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 class="font-serif text-lg font-semibold text-heading">Использование аналитики</h3>
            </div>
            <p class="text-body text-sm md:text-base leading-relaxed">
              На этом сайте используется Яндекс.Метрика для сбора аналитических данных. 
              Продолжая использовать сайт, вы соглашаетесь с этим.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0">
            <button
              @click="declineConsent"
              class="px-6 py-3 text-sm font-medium text-body border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              Отказаться
            </button>
            <button
              @click="acceptConsent"
              class="px-6 py-3 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              Согласен
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>

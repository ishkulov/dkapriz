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

onMounted(() => {
  const consent = localStorage.getItem(CONSENT_KEY)
  if (consent === 'accepted') {
    initYandexMetrika()
  } else {
    if (consent === 'declined') {
      localStorage.removeItem(CONSENT_KEY)
    }
    isVisible.value = true
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
            <p class="text-body text-sm md:text-base leading-relaxed">
              Мы используем cookie и сервис аналитики Яндекс Метрика для анализа посещаемости сайта. Продолжая пользоваться сайтом, вы соглашаетесь с обработкой данных.
            </p>
          </div>
          <div class="flex-shrink-0">
            <button
              @click="acceptConsent"
              data-testid="button-cookie-accept"
              class="px-6 py-3 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              Понятно
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

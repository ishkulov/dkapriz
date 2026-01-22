<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

const route = useRoute()

useHead({
  title: '404 — Страница не найдена',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content: 'Запрашиваемая страница не найдена. Перейдите на главную страницу сайта.'
    }
  ]
})
</script>

<template>
  <section class="not-found">
    <div class="not-found__content">
      <h1>404</h1>
      <p>Страница <strong>{{ route.fullPath }}</strong> не найдена</p>

      <RouterLink to="/" class="not-found__btn">
        На главную
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found__content h1 {
  font-size: 96px;
  margin-bottom: 16px;
}

.not-found__content p {
  margin-bottom: 24px;
  font-size: 18px;
}

.not-found__btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  background: #000;
  color: #fff;
  text-decoration: none;
}
</style>

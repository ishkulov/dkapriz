import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import KupalnikyPage from '../pages/KupalnikyPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Дамский Каприз - Магазин нижнего белья и купальников',
      description: 'Магазин нижнего белья и купальников в Санкт-Петербурге. Широкий размерный ряд, профессиональная консультация и примерка.'
    }
  },
  {
    path: '/kupalniky',
    name: 'kupalniky',
    component: KupalnikyPage,
    meta: {
      title: 'Женские купальники — бутик «Дамский Каприз», Санкт-Петербург',
      description: 'Широкий выбор женских купальников в Санкт-Петербурге. Примерка, консультация специалиста, большой размерный ряд.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  const meta = to.meta as { title?: string; description?: string }
  if (meta.title) {
    document.title = meta.title
  }
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta && meta.description) {
    descriptionMeta.setAttribute('content', meta.description)
  }
  next()
})

export default router

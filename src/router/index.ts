import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import KupalnikyPage from '../pages/KupalnikyPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Дамский Каприз – Магазин нижнего белья и купальников в СПб',
      description: 'Бутик нижнего белья и купальников в Санкт-Петербурге. Примерочные кабины, консультация стилиста, размеры от XS до 6XL. Приходите на примерку!'
    }
  },
  {
    path: '/kupalniky',
    name: 'kupalniky',
    component: KupalnikyPage,
    meta: {
      title: 'Женские купальники в СПб – бутик Дамский Каприз | Примерка',
      description: 'Более 500 моделей женских купальников в Санкт-Петербурге: бикини, слитные, танкини. Бренды Bahama, Ysabel Mora, Feba. Примерка и подбор по фигуре.'
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

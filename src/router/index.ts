import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import KupalnikyPage from '../pages/KupalnikyPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Дамский Каприз - Нижнее белье и купальники для всей семьи',
      description: 'Бутик нижнего белья и купальников в Санкт-Петербурге. Примерочные кабины, консультация стилиста, размеры от XS до 6XL. Приходите на примерку!'
    }
  },
  {
    path: '/kupalniky',
    name: 'kupalniky',
    component: KupalnikyPage,
    meta: {
      title: 'Дамский Каприз - Женские купальники в СПб',
      description: 'Более 500 моделей женских купальников в Санкт-Петербурге: бикини, слитные, танкини. Бренды Bahama, Ysabel Mora, Feba. Примерка и подбор по фигуре.'
    }
  }
]

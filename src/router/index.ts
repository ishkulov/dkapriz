import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import KupalnikyPage from '../pages/KupalnikyPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Нижнее белье и купальники для всей семьи — магазин «Дамский Каприз»',
      description: 'Магазин «Дамский Каприз» в Санкт-Петербурге — нижнее белье и купальники для всей семьи. Примерочные кабины, размеры от XS до 6XL.'
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

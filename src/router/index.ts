import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import KupalnikiPage from '../pages/KupalnikiPage.vue'
import NizhneeBelePage from '../pages/NizhneeBelePage.vue'
import PlavkiShortyPage from '../pages/PlavkiShortyPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Купальники и нижнее белье для всей семьи — магазин «Дамский Каприз»',
      description: 'Магазин «Дамский Каприз» в Санкт-Петербурге — нижнее белье и купальники для всей семьи. Примерочные кабины, размеры от XS до 6XL.'
    }
  },
  {
    path: '/kupalniki/',
    name: 'kupalniki',
    component: KupalnikiPage,
    meta: {
      title: 'Купальники женские в СПб — магазин «Дамский Каприз»',
      description: 'Более 500 моделей женских купальников в Санкт-Петербурге: бикини, слитные, танкини. Бренды Bahama, Ysabel Mora, Feba. Примерка и подбор по фигуре.'
    }
  },
  {
    path: '/nizhnee-bele/',
    name: 'nizhnee-bele',
    component: NizhneeBelePage,
    meta: {
      title: 'Нижнее бельё — магазин «Дамский Каприз» в СПб',
      description: 'Индивидуальный подбор женского нижнего белья в Санкт-Петербурге. Качественные материалы, примерочные кабины, консультация по размеру и посадке.'
    }
  },
  {
    path: '/plavki-i-shorty/',
    name: 'plavki-i-shorty',
    component: PlavkiShortyPage,
    meta: {
      title: 'Мужские плавки и шорты — магазин «Дамский Каприз» в СПб',
      description: 'Мужские плавки и пляжные шорты в Санкт-Петербурге. Бренды Keano, Emdi, Scuba. Комфортные модели для пляжа и бассейна. Магазин «Дамский Каприз».'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Страница не найдена — магазин «Дамский Каприз»',
      description: 'Запрашиваемая страница не существует. Вернитесь на главную или выберите раздел.'
    }
  }
]

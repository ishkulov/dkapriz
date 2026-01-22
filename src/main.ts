import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './style.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      return { top: 0, behavior: 'smooth' }
    },
  },
  ({ router, isClient }) => {

    // 1️⃣ Trailing slash normalization
    router.beforeEach((to, from, next) => {
      if (
        isClient &&
        !to.path.endsWith('/') &&
        !to.path.includes('.')
      ) {
        next({
          path: to.path + '/',
          query: to.query,
          hash: to.hash,
          replace: true,
        })
        return
      }
      next()
    })

    // 2️⃣ Meta handling
    router.beforeEach((to, from, next) => {
      const meta = to.meta as {
        title?: string
        description?: string
      }

      if (isClient && meta.title) {
        document.title = meta.title
      }

      if (isClient && meta.description) {
        let descriptionMeta = document.querySelector(
          'meta[name="description"]'
        )

        if (!descriptionMeta) {
          descriptionMeta = document.createElement('meta')
          descriptionMeta.setAttribute('name', 'description')
          document.head.appendChild(descriptionMeta)
        }

        descriptionMeta.setAttribute('content', meta.description)
      }

      next()
    })
  }
)

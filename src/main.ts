import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './style.css'

export const createApp = ViteSSG(
  App,
  {
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
  },
  ({ router, isClient }) => {
    router.beforeEach((to, from, next) => {
      const meta = to.meta as { title?: string; description?: string }
      if (isClient && meta.title) {
        document.title = meta.title
      }
      if (isClient) {
        const descriptionMeta = document.querySelector('meta[name="description"]')
        if (descriptionMeta && meta.description) {
          descriptionMeta.setAttribute('content', meta.description)
        }
      }
      next()
    })
  }
)

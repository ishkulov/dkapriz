import type { Router } from 'vue-router'
import type { App } from 'vue'

declare global {
  interface Window {
    ym?: (...args: any[]) => void
    __ymInited?: boolean
  }
}

interface YandexMetrikaOptions {
  id: number
  router: Router
  enabledByDefault?: boolean
}

export function createYandexMetrikaPlugin(options: YandexMetrikaOptions) {
  const { id, router, enabledByDefault = false } = options

  function loadScript() {
    if (window.ym) return

    ;(function (
      m: any,
      e: Document,
      t: string,
      r: string,
      i: string,
      k?: HTMLScriptElement,
      a?: HTMLElement
    ) {
      m[i] =
        m[i] ||
        function () {
          ;(m[i].a = m[i].a || []).push(arguments)
        }
      m[i].l = 1 * new Date()

      k = e.createElement(t) as HTMLScriptElement
      a = e.getElementsByTagName(t)[0] as HTMLElement
      k.async = true
      k.src = r
      a.parentNode?.insertBefore(k, a)
    })(
      window,
      document,
      'script',
      `https://mc.yandex.ru/metrika/tag.js?id=${id}`,
      'ym'
    )
  }

  function init(router: Router) {
    if (window.__ymInited) return
    if (!window.ym) return

    window.ym(id, 'init', {
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })

    // первый hit
    window.ym(id, 'hit', window.location.href)

    // SPA-навигация
    router.afterEach((to) => {
      window.ym?.(id, 'hit', to.fullPath)
    })

    window.__ymInited = true
  }

  return {
    install(app: App) {
      if (typeof window === 'undefined') return

      loadScript()

      // публичный API
      app.config.globalProperties.$ym = (
        ...args: any[]
      ) => {
        if (!window.__ymInited) return
        window.ym?.(id, ...args)
      }

      // включение по умолчанию (например, если согласие уже есть)
      if (enabledByDefault) {
        init(router)
      }

      // глобальная точка включения (для cookie-баннера)
      ;(window as any).enableMetrika = () => {
        init(router)
      }
    },
  }
}

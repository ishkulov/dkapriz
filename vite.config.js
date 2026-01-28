import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
import { imagetools } from 'vite-imagetools'
import { fileURLToPath } from 'node:url'
import { copyFileSync, existsSync } from 'node:fs'



export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    imagetools(), // поддержка ?meta, ?webp, ?avif и др.
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    onFinished() {
      const distDir = fileURLToPath(new URL('./dist', import.meta.url))
      const indexHtml = `${distDir}/index.html`
      const notFoundHtml = `${distDir}/404.html`
      
      if (existsSync(indexHtml)) {
        copyFileSync(indexHtml, notFoundHtml)
        console.log('404.html успешно создан')
      }
    },
  },
})

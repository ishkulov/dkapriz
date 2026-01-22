import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { imagetools } from 'vite-imagetools'
import viteImagemin from 'vite-plugin-imagemin'

// Если viteImagemin undefined (для ESM)
const ViteImagemin = viteImagemin.default || viteImagemin

export default defineConfig({
  plugins: [
    vue(),
    imagetools(), // поддержка ?meta, ?webp, ?avif и др.
    ViteImagemin({
      mozjpeg: { quality: 75 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.7, 0.9] },
      webp: { quality: 75 },
      svgo: {},
    }),
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
  },
})

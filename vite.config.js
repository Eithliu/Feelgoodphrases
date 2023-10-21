import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  manifest: {
    name: 'Feel Good Phrases',
    short_name: 'Feel Good',
    description: 'L\'application qui vous fait vous sentir mieux!',
    theme_color: '#fffff',
    background_color: '#fffff',
    display: 'standalone',
    icons: [
      {
        src: './assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: './assets/icons/icon-250x250.png',
        sizes: '256x256',
        type: 'image/png'
      },
      {
        src: './assets/icons/icon-375x375.png',
        sizes: '384x384',
        type: 'image/png'
      },
      {
        src: './assets/icons/icon-500x500.png',
        sizes: '512x512',
        type: 'image/png'
      },
    ]
  }
})

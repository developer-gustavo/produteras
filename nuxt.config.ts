import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'

const { PRODUCTION, SITE_URL } = process.env

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/seo', '@vueuse/nuxt'],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  css: ['~/assets/main.css'],
  site: {
    url: SITE_URL,
    name: 'Produteras',
    description: 'O portal com missão de ajudar mulheres na carreira de produto.',
    identity: { type: 'Organization' },
  },
  runtimeConfig: {
    production: PRODUCTION,
    url: SITE_URL,
  },

  compatibilityDate: '2025-08-01',
  nitro: { experimental: { asyncContext: true } },
  vite: { plugins: [tailwindcss()] },
  linkChecker: { enabled: false },
})

import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'

const { PRODUCTION, SITE_URL, DEV_URL, DEV_KEY, DEV_CERT } = process.env

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
  devServer: {
    host: DEV_URL,
    https: DEV_KEY && DEV_CERT ? { key: DEV_KEY, cert: DEV_CERT } : undefined,
  },
  compatibilityDate: '2025-08-01',
  nitro: { experimental: { asyncContext: true } },
  vite: { plugins: [tailwindcss()] },
  linkChecker: { enabled: false },
})

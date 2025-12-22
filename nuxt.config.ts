import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'

<<<<<<< Updated upstream
const { PRODUCTION, SITE_URL, NUXT_SESSION_PASSWORD, MAIL_PASSWORD, MAIL_URL, MAIL_PORT, MAIL_SSL, MAIL_USERNAME, DEV_URL, DEV_KEY, DEV_CERT } = process.env
=======
const { PRODUCTION, SITE_URL, NUXT_SESSION_PASSWORD, MAIL_PASSWORD, MAIL_URL, MAIL_PORT, MAIL_SSL, MAIL_USERNAME, DEV_URL, DEV_KEY, DEV_CERT, MP_ACCESS_TOKEN, GOOGLE_SHEETS_WEBHOOK_URL, MP_PUBLIC_KEY } = process.env
>>>>>>> Stashed changes

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/seo', '@vueuse/nuxt'],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' }, script: [
    { src: 'https://sdk.mercadopago.com/js/v2' },
  ] } },
  css: ['~/assets/main.css'],
  site: {
    url: SITE_URL,
    name: 'Produteras',
    description: 'O portal com missão de ajudar mulheres na carreira de produto.',
    identity: { type: 'Organization' },
  },
  runtimeConfig: {
    email: { url: MAIL_URL, port: MAIL_PORT, ssl: MAIL_SSL, username: MAIL_USERNAME, password: MAIL_PASSWORD },
    production: PRODUCTION,
    url: SITE_URL,
    sessionPassword: NUXT_SESSION_PASSWORD,
<<<<<<< Updated upstream
    mercadopagoAccessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN
=======
    mpAccessToken: MP_ACCESS_TOKEN,
    googleSheetsUrl: GOOGLE_SHEETS_WEBHOOK_URL,
    mpPublicKey: MP_PUBLIC_KEY,
    public: {
      mpPublicKey: MP_PUBLIC_KEY,
      baseUrl: SITE_URL,
    },
>>>>>>> Stashed changes
  },
  routeRules: {
    '/api/webhooks/**': { cors: true },
  },

  devServer: {
    host: 'https://localhost:3000',

    //host: DEV_URL,
   // https: DEV_KEY && DEV_CERT ? { key: DEV_KEY, cert: DEV_CERT } : undefined,
  },
  compatibilityDate: '2025-08-01',
  nitro: { experimental: { asyncContext: true } },
  vite: { plugins: [tailwindcss()], server: {
    allowedHosts: true, // Isso desativa a verificação de host no Vite 6+, permitindo o túnel
  } },
  linkChecker: { enabled: false },
})

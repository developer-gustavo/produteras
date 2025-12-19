// server/utils/mercadoPago.ts
import { MercadoPagoConfig, Preference } from 'mercadopago'

// O Nuxt 4 disponibiliza useRuntimeConfig() automaticamente no servidor
export const client = new MercadoPagoConfig({
  accessToken: useRuntimeConfig().mercadopagoAccessToken,
})

export const preference = new Preference(client)

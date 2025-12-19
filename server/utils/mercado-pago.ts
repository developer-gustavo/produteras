import { MercadoPagoConfig, Preference } from 'mercadopago'

export const getMPClient = () => {
  const config = useRuntimeConfig()
  return new MercadoPagoConfig({
    accessToken: config.mpAccessToken,
  })
}

export const getMPPreference = () => {
  return new Preference(getMPClient())
}
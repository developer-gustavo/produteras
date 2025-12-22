import { MercadoPagoConfig, Preference } from 'mercadopago'

export function getMPClient(){
  const config = useRuntimeConfig()
  return new MercadoPagoConfig({
    accessToken: config.mpAccessToken,
  })
}

export function getMPPreference(){
  return new Preference(getMPClient())
}

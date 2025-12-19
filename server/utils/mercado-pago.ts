import { MercadoPagoConfig, Preference } from 'mercadopago';

export const client = new MercadoPagoConfig({ 
 accessToken: useRuntimeConfig().mpAccessToken
});

export const preference = new Preference(client);
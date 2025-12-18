import { defineNuxtPlugin } from '#app'
import mercadopago from 'mercadopago'

export default defineNuxtPlugin((nuxtApp) => {
  // Configura token
  // @ts-ignore
  mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_ACCESS_TOKEN)

  const criarPreferencia = async ({
    nomeCurso,
    valorCurso,
    emailUsuario,
  }: {
    nomeCurso: string
    valorCurso: number
    emailUsuario?: string
  }): Promise<string> => {
    const preference = {
      items: [
        {
          title: nomeCurso,
          description: `Inscrição no curso ${nomeCurso}`,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: valorCurso,
        },
      ],
      payer: {
        email: emailUsuario,
      },
      back_urls: {
        success: 'https://seusite.com/sucesso',
        failure: 'https://seusite.com/falha',
        pending: 'https://seusite.com/pendente',
      },
      auto_return: 'approved',
    }

    // @ts-ignore
    const response = await mercadopago.preferences.create(preference)
    return response.body.init_point
  }

  nuxtApp.provide('criarPreferencia', criarPreferencia)
})

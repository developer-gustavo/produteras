// server/api/webhooks/mercadopago.post.ts

import { Payment } from 'mercadopago'
import { getMPClient } from '../../utils/mercado-pago'
import { salvarNoGoogleSheets } from '../../utils/sheets'

// 1. Criamos uma interface para estender o que o SDK não cobre
interface MPPayerExtended{
  first_name?: string,
  last_name?: string,
  email?: string,
}

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const body = await readBody(event)

  // 2. Garantimos o ID como string e validamos
  const paymentId = String(body.data?.id || query['data.id'] || query.id || body.id || '')
  const isPayment = body.type === 'payment' || query.type === 'payment' || body.action?.includes('payment')

  if(paymentId && isPayment && paymentId !== 'undefined' && paymentId !== ''){
    try {
      const client = getMPClient()
      const payment = new Payment(client)
      const data = await payment.get({ id: paymentId })

      const statusValidos = ['approved', 'rejected', 'pending']

      if(statusValidos.includes(data.status || '')){
        // 3. Tipagem segura em vez de 'any'
        const payerInfo = (data.additional_info?.payer || data.payer) as MPPayerExtended
        const itemsInfo = data.additional_info?.items?.[0]

        const infoPagamento = {
          data_pagamento: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
          id_transacao: String(data.id),
          nome: `${payerInfo?.first_name || ''} ${payerInfo?.last_name || ''}`.trim() || 'Comprador Desconhecido',
          email: payerInfo?.email || 'Sem e-mail',
          valor: data.transaction_amount || 0,
          titulo_curso: data.description || itemsInfo?.title || 'Curso Produteras',
          status: data.status || 'unknown',
        }

        await salvarNoGoogleSheets(infoPagamento)
      }
    }
    catch (error: unknown){
      if(error instanceof Error){
        console.error('Erro Webhook Mercado Pago:', error.message)
      }
    }
  }

  return { status: 'ok' }
})

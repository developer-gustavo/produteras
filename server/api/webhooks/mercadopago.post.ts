import { Payment } from 'mercadopago' 
import { getMPClient } from '../../utils/mercado-pago'
import { salvarNoGoogleSheets } from '../../utils/sheets'

export interface InfoPagamento {
  id_transacao: number | undefined
  email: string | undefined
  nome: string
  valor: number | undefined
  titulo_curso: string | undefined
  data_pagamento: string
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const body = await readBody(event)

  const paymentId = query['data.id'] || body.data?.id || body.id

  if (paymentId) {
    try {
      const client = getMPClient() 
      const payment = new Payment(client)
      
      const data = await payment.get({ id: String(paymentId) })

      if (data.status === 'approved') {
        const infoPagamento: InfoPagamento = {
          id_transacao: data.id,
          email: data.payer?.email,
          nome: `${data.payer?.first_name || ''} ${data.payer?.last_name || ''}`.trim() || 'Comprador Desconhecido',
          valor: data.transaction_amount,
          titulo_curso: data.description,
          data_pagamento: new Date().toLocaleString('pt-BR'),
        }

        // Se o VS Code reclamar do salvarNoGoogleSheets, importe-o também:
        // import { salvarNoGoogleSheets } from '~/server/utils/sheets'
        await salvarNoGoogleSheets(infoPagamento)
      }
    } catch (error) {
      console.error('❌ Erro no Webhook:', error)
    }
  }

  return { status: 'ok' }
})
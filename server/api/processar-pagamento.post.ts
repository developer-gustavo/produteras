import { Payment } from 'mercadopago'
import { getMPClient } from '../utils/mercado-pago'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const client = getMPClient()
  const payment = new Payment(client)

  // 1. Montagem dos dados de pagamento com fallbacks de segurança
  const paymentData = {
    transaction_amount: Number(body.transaction_amount),
    token: body.token,
    description: body.description || 'Inscrição Curso Produteras',
    installments: Number(body.installments) || 1,
    payment_method_id: body.payment_method_id,
    issuer_id: body.issuer_id,
    payer: {
      email: body.payer?.email || body.email || 'email-nao-informado@teste.com',
      identification: {
        type: body.payer?.identification?.type || 'CPF',
        number: body.payer?.identification?.number,
      },
    },
    // O additional_info é CRUCIAL para o Webhook não vir vazio
    additional_info: {
      items: [
        {
          id: body.course_id || '1',
          title: body.description || 'Curso Produteras',
          unit_price: Number(body.transaction_amount),
          quantity: 1,
        },
      ],
      payer: {
        first_name: body.payer?.first_name || 'Comprador',
      },
    },
  }

  try {
    // 2. Execução com Await (Satisfaz ESLint prefer-await-to-callbacks)
    const result = await payment.create({ body: paymentData })
    return {
      status: result.status,
      status_detail: result.status_detail,
      id: result.id,
      point_of_interaction: result.point_of_interaction,
    }
  }
  catch (error: unknown){
    // 3. Tratamento de erro tipado (Satisfaz ESLint no-explicit-any e handle-callback-err)

    let statusCode = 400
    let errorMessage = 'Falha ao processar pagamento'

    if(error instanceof Error){
      // Fazemos um type cast seguro apenas aqui
      const { message, status, cause } = error as {
        message: string,
        status?: number,
        cause?: unknown,
      }
      statusCode = status || 400
      errorMessage = message
      console.error(JSON.stringify(cause || error.message, null, 2))
    }

    throw createError({
      statusCode,
      statusMessage: errorMessage,
    })
  }
})

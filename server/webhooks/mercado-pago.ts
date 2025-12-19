import { Payment } from 'mercadopago';


export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const body = await readBody(event);
  
  const paymentId = query['data.id'] || body.data?.id || body.id;

  if (paymentId) {
    try {
      const payment = new Payment(client);
      const data = await payment.get({ id: String(paymentId) });

      if (data.status === 'approved') {
        const infoPagamento = {
          id_transacao: data.id,
          email: data.payer?.email,
          nome: `${data.payer?.first_name || ''} ${data.payer?.last_name || ''}`,
          valor: data.transaction_amount,
          titulo_curso: data.description,
          data_pagamento: new Date().toLocaleString('pt-BR'),
        };

        // Agora a função será encontrada!
        await salvarNoGoogleSheets(infoPagamento);
      }
    } catch (error) {
      console.error('Erro no Webhook:', error);
    }
  }

  return { status: 'ok' };
});
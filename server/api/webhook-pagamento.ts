import { google } from 'googleapis' // Certifique-se de ter instalado: npm install googleapis
// server/api/webhooks-pagamento.post.ts
import { Payment } from 'mercadopago'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const paymentId = body.data?.id || body.id

  if(paymentId){
    const payment = new Payment(client) // 'client' vem do server/utils
    const data = await payment.get({ id: String(paymentId) })

    if(data.status === 'approved'){
      // LÓGICA DO GOOGLE SHEETS QUE VOCÊ JÁ TEM
      const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })
      const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() })

      await sheets.spreadsheets.values.append({
        spreadsheetId: 'SEU_ID_DO_SHEET',
        range: 'inscricoes',
        valueInputOption: 'RAW',
        requestBody: {
          values: [[
            data.payer?.email,
            `${data.payer?.first_name} ${data.payer?.last_name}`,
            data.description,
            data.transaction_amount,
            new Date(),
            true,
          ]],
        },
      })
    }
  }
  return { status: 'ok' }
})


export default defineEventHandler(async (event) => {
  const { email, nome, curso, valor } = await readBody(event)

  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json', // JSON do Google Service Account
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const client = await auth.getClient()
  const sheets = google.sheets({ version: 'v4', auth: client })

  await sheets.spreadsheets.values.append({
    spreadsheetId: 'SEU_ID_DO_SHEET',
    range: 'inscricoes',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[email, nome, curso, valor, new Date(), true]],
    },
  })

  return { status: 'ok' }
})

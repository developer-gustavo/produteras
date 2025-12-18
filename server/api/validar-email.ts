export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)
  const sheet = SpreadsheetApp.openById('SEU_ID_SHEET').getSheetByName('inscricoes')
  const data = sheet.getDataRange().getValues()

  const pago = data.find(row => row[0] === email && row[5] === true)
  if (!pago) throw createError({ statusCode: 403, message: 'Pagamento não confirmado' })

  return { liberado: true }
})

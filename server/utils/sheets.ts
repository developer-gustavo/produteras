// Importamos o tipo do arquivo do webhook
import type { InfoPagamento } from '../api/webhooks/mercadopago.post'

export async function salvarNoGoogleSheets(dados: InfoPagamento): Promise<void>{
  const config = useRuntimeConfig()
  const url = config.googleSheetsUrl as string // 'as string' garante que não é undefined

  if(!url){
    console.warn('URL do Sheets não configurada')
    return
  }

  try {
    await $fetch(url, {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: { 'Content-Type': 'text/plain' },
    })
    console.log('🚀 Dados enviados para o Google Sheets com tipos seguros!')
  }
  catch (error){
    console.error('❌ Erro ao enviar para o Sheets:', error)
  }
}

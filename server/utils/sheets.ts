export async function salvarNoGoogleSheets(dados: any){
  const config = useRuntimeConfig()
  const url = config.googleSheetsUrl

  console.log('--- 🛡️ INICIANDO ENVIO PARA GOOGLE SHEETS ---')
  console.log('🔗 URL Alvo:', url)
  console.log('📦 Dados que estão sendo enviados:', JSON.stringify(dados, null, 2))

  if(!url){
    console.error('❌ ERRO: Variável GOOGLE_SHEETS_URL não encontrada no .env')
    return
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })

    // O Google Apps Script geralmente retorna um redirecionamento (302)
    // ou o texto que definimos no "ContentService"
    const textoResposta = await response.text()

    console.log('📡 Status da Resposta:', response.status)
    console.log('📄 Conteúdo retornado pelo Google:', textoResposta)

    if(response.ok && textoResposta.includes('Sucesso')){
      console.log('✅ O Google confirmou o recebimento!')
    }
    else {
      console.warn('⚠️ O Google recebeu, mas a resposta não foi "Sucesso". Verifique o código do Apps Script.')
    }
  }
  catch (error: any){
    console.error('❌ FALHA CRÍTICA na requisição ao Google:')
    console.error('Mensagem de erro:', error.message)
  }

  console.log('--- 🛡️ FIM DA TENTATIVA DE ENVIO ---')
}

export const salvarNoGoogleSheets = async (dados: any) => {
  const config = useRuntimeConfig();
  const url = config.googleSheetsUrl;
  
  if (!url) return console.warn("URL do Sheets não configurada");

  await $fetch(url, {
    method: 'POST',
    body: dados
  });
};
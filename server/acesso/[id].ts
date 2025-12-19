// server/api/acesso/[id].ts
import { defineEventHandler, readBody } from 'h3'

interface ValidarAcessoResponse{
  liberado: boolean,
  message?: string,
}

export default defineEventHandler(async event => {
  const { email } = await readBody(event)
  const cursoId = Number(event.context.params.id)

  if(!email || Number.isNaN(cursoId)){
    throw createError({ statusCode: 400, message: 'Email ou ID do curso ausente' })
  }

  const res = await $fetch<ValidarAcessoResponse>('URL_DO_WEBAPP_VALIDAR', {
    method: 'POST',
    body: { email, cursoId },
  })

  return res
})

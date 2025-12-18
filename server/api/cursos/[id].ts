import cursos from '~/utils/cursos'

export default defineEventHandler((event) => {
  const id = Number(event.context.params?.id)
  if (Number.isNaN(id)) throw createError({ statusCode: 400, message: 'ID inválido' })

  const curso = cursos.find(c => c.id === id)
  if (!curso) throw createError({ statusCode: 404, message: 'Curso não encontrado' })

  return curso
})

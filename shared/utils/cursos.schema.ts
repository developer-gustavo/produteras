import { z } from 'zod'

export const CursoSchema = z.object({
  id: z.number().int(),
  titulo: z.string().trim().min(1, { message: 'Título é obrigatório' }),
  descricao: z.string().trim().min(1, { message: 'Descrição é obrigatória' }),
  image: z.string().trim().min(1, { message: 'URL da imagem é obrigatória' }),
  categorias: z.array(z.string().trim()),
  aoVivo: z.boolean(),
  tempo: z.string().trim().min(1, { message: 'Informe a duração/tempo do curso' }),
  encontros: z.string().trim().min(1, { message: 'Informe o número de encontros' }),
  data: z.string().trim().min(1, { message: 'Informe a data do curso' }),
  preco: z.number().int().min(1, { message: 'Informe o preço' }),
  linkAula: z.string().trim().optional(),
  inscricaoHabilitada: z.boolean().optional(),
  iframe: z.boolean().optional(),

})

export type Curso = z.infer<typeof CursoSchema>

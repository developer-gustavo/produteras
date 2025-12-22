import { z } from 'zod'

export const InfoPagamentoSchema = z.object({
  id_transacao: z.number().optional(),
  email: z.string().email().optional(),
  nome: z.string().min(1, 'Nome é obrigatório'),
  valor: z.number().positive(),
  titulo_curso: z.string().optional().default('Curso Produteras'),
  data_pagamento: z.string(),
})

<<<<<<< Updated upstream
    email: z
      .string()
      .trim()
      .email('E-mail inválido'),

    telefone: z
      .string()
      .trim()
      .min(10, 'Telefone inválido'),

    experiencia: z
      .string()
      .min(1, 'Selecione seu nível de experiência'),

    areaAtuacao: z
      .string()
      .trim()
      .min(2, 'Informe sua área ou setor'),

    desafio: z
      .string()
      .trim()
      .min(10, 'Descreva melhor seu desafio'),

    objetivos: z
      .array(z.string())
      .min(1, 'Selecione ao menos um objetivo'),

    objetivoOutro: z
      .string()
      .optional(),

    motivacao: z
      .union([z.string(), z.number()])
      .transform(Number)
      .refine((v) => v >= 1 && v <= 10, {
        message: 'Motivação deve ser entre 1 e 10',
      }),

    origem: z
      .string()
      .min(1, 'Informe como conheceu a imersão'),

    satisfacao: z
      .union([z.string(), z.number()])
      .transform(Number)
      .refine((v) => v >= 1 && v <= 10, {
        message: 'Satisfação deve ser entre 1 e 10',
      }),
  })
  .superRefine((data, ctx) => {
    if (
      data.objetivos.includes('Outro') &&
      !data.objetivoOutro?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Especifique o objetivo',
        path: ['objetivoOutro'],
      })
    }
  })

export type Formulario = z.infer<typeof formularioSchema>
=======
export type InfoPagamento = z.infer<typeof InfoPagamentoSchema>
>>>>>>> Stashed changes

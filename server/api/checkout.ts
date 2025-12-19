import { preference } from '../utils/mercado-pago';
import cursos  from '~/utils/cursos'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { cursoId } = body;

  const cursoEncontrado = cursos.find(c => c.id === Number(cursoId));

  if (!cursoEncontrado) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Curso não encontrado no catálogo',
    });
  }

  try {
    const response = await preference.create({
      body: {
        items: [
          {
            id: String(cursoEncontrado.id),
            title: cursoEncontrado.titulo,
            unit_price: cursoEncontrado.preco, 
            quantity: 1,
            currency_id: 'BRL',
          }
        ],
        metadata: {
          course_id: cursoEncontrado.id,
        },
        back_urls: {
          success: `${process.env.BASE_URL}/sucesso`,
          failure: `${process.env.BASE_URL}/erro`,
        },
        auto_return: 'approved',
      }
    });

    return { url: response.init_point };
  } catch (error) {
    console.error('Erro MP:', error);
    throw createError({ statusCode: 500, statusMessage: 'Erro ao gerar checkout' });
  }
});
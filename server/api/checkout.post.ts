import { getMPPreference } from "../utils/mercado-pago"; 
import cursos from "~/utils/cursos";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { cursoId } = body;

  const curso = cursos.find(c => c.id === Number(cursoId));
  if (!curso) throw createError({ statusCode: 404, message: 'Curso não existe' });

  // CORREÇÃO AQUI: Use getMPPreference() em vez de getMPClient()
  const preference = getMPPreference();

  const response = await preference.create({
    body: {
      items: [
        {
          id: String(curso.id),
          title: curso.titulo,
          quantity: 1,
          unit_price: curso.preco,
          currency_id: 'BRL',
        }
      ],
      back_urls: {
        success: `${useRuntimeConfig().public.baseUrl}/confirmacao`,
        failure: `${useRuntimeConfig().public.baseUrl}/erro`,
      },
      auto_return: 'approved',
    }
  });

  return { url: response.init_point };
});
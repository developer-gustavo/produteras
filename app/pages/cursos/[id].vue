<script setup lang="ts">
// 1. O Nuxt já conhece 'cursos' porque está na pasta /utils
const route = useRoute()
const loading = ref(false)

// 2. BUSCA O CURSO: Usamos uma variável temporária para validar
const cursoEncontrado = cursos.find(c => c.id === Number(route.params.id))

// 3. VALIDAÇÃO: Se o curso não existir, ele para aqui e não dá erro de 'undefined' abaixo
if(!cursoEncontrado){
  throw createError({ statusCode: 404, message: 'Curso não encontrado' })
}

// 4. AGORA É SEGURO: O TS sabe que 'curso' existe
const curso = cursoEncontrado

async function pagar() {
  // 1. Pergunta ao nosso servidor: "Me dá o link para o curso X?"
  const res = await $fetch('/api/checkout', {
    method: 'POST',
    body: { cursoId: route.params.id }
  });

  // 2. Se o servidor der o link, a gente viaja para o Mercado Pago
  if (res.url) {
    window.location.href = res.url;
  }
}
const mostrarIframe = computed(() => curso.iframe === 'true')
</script>

<template>
  <main v-if="curso" class="mx-auto max-w-7xl px-6 py-20">
    <section class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
      <div>
        <h1 class="text-5xl leading-tight font-extrabold text-gray-900">
          {{ curso.titulo }}
        </h1>
        <p class="mt-6 text-xl leading-relaxed text-gray-600">
          {{ curso.descricao }}
        </p>

        <div class="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
          <div>
            <span class="block text-sm tracking-wider text-gray-400 uppercase">Duração</span>
            <span class="text-lg font-semibold text-gray-800">{{ curso.tempo }}</span>
          </div>
          <div>
            <span class="block text-sm tracking-wider text-gray-400 uppercase">Investimento</span>
            <span class="text-lg font-bold text-green-600">
              {{ Number(curso.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
            </span>
          </div>
        </div>

        <button
          :disabled="loading"
          class="mt-10 w-full rounded-2xl bg-blue-600 px-12 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 disabled:opacity-50 md:w-auto"
          @click="pagar"
        >
          {{ loading ? 'Redirecionando...' : 'Quero me inscrever' }}
        </button>
      </div>

      <div class="relative">
        <img :src="curso.image" :alt="curso.titulo" class="h-[450px] w-full rounded-3xl object-cover shadow-2xl">
      </div>
    </section>

    <section v-if="mostrarIframe" class="mt-20 border-t border-gray-100 pt-20">
      <div class="w-full overflow-hidden rounded-3xl bg-gray-50 shadow-inner">
        <iframe :src="curso.iframe" class="h-[600px] w-full" frameborder="0" />
      </div>
    </section>
  </main>
</template>

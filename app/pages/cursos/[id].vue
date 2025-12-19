<script setup lang="ts">
// 1. O Nuxt já conhece 'cursos' porque está na pasta /utils
const route = useRoute()
const loading = ref(false)

// 2. BUSCA O CURSO: Usamos uma variável temporária para validar
const cursoEncontrado = cursos.find(c => c.id === Number(route.params.id))

// 3. VALIDAÇÃO: Se o curso não existir, ele para aqui e não dá erro de 'undefined' abaixo
if (!cursoEncontrado) {
  throw createError({ statusCode: 404, message: 'Curso não encontrado' })
}

// 4. AGORA É SEGURO: O TS sabe que 'curso' existe
const curso = cursoEncontrado

async function irParaPagamento() {
  loading.value = true
  try {
    // 5. O FETCH: Dizemos que a resposta terá uma 'url' (string)
    const response = await $fetch<{ url: string }>('/api/checkout', {
      method: 'POST',
      body: { cursoId: curso.id }
    })
    
    // 6. REDIRECIONAR: Agora o erro 'Property url does not exist' some!
    if (response.url) {
      window.location.href = response.url
    }
  } catch (err) {
    alert('Erro ao chamar o Mercado Pago')
  } finally {
    loading.value = false
  }
}

const mostrarIframe = computed(() => curso.iframe === 'true')
</script>

<template>
  <main v-if="curso" class="max-w-7xl mx-auto px-6 py-20">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl font-extrabold text-gray-900 leading-tight">
          {{ curso.titulo }}
        </h1>
        <p class="mt-6 text-xl text-gray-600 leading-relaxed">
          {{ curso.descricao }}
        </p>
        
        <div class="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
          <div>
            <span class="block text-sm text-gray-400 uppercase tracking-wider">Duração</span>
            <span class="text-lg font-semibold text-gray-800">{{ curso.tempo }}</span>
          </div>
          <div>
            <span class="block text-sm text-gray-400 uppercase tracking-wider">Investimento</span>
            <span class="text-lg font-bold text-green-600">
              {{ Number(curso.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
            </span>
          </div>
        </div>

        <button 
          @click="irParaPagamento"
          :disabled="loading"
          class="mt-10 w-full md:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg disabled:opacity-50"
        >
          {{ loading ? 'Redirecionando...' : 'Quero me inscrever' }}
        </button>
      </div>

      <div class="relative">
        <img :src="curso.image" :alt="curso.titulo" class="rounded-3xl shadow-2xl w-full h-[450px] object-cover">
      </div>
    </section>

    <section v-if="mostrarIframe" class="mt-20 border-t border-gray-100 pt-20">
      <div class="w-full overflow-hidden rounded-3xl shadow-inner bg-gray-50">
        <iframe :src="curso.iframe" class="w-full h-[600px]" frameborder="0"></iframe>
      </div>
    </section>
  </main>
</template>

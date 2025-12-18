<script setup lang="ts">
import { useRoute, useNuxtApp } from '#imports'
import cursos from '~/utils/cursos'

const route = useRoute()
const nuxtApp = useNuxtApp()
const criarPreferencia = nuxtApp.$criarPreferencia as (params: { nomeCurso: string; valorCurso: number; emailUsuario?: string }) => Promise<string>

// Buscar curso pelo id
const curso = cursos.find(c => c.id === Number(route.params.id))
if (!curso) throw createError({ statusCode: 404, message: 'Curso não encontrado' })

const mostrarIframe = ref(false)
const usuarioEmail = ref('') // Pega do login ou formulário

// Iniciar pagamento
const iniciarPagamento = async () => {
  if (!curso || !curso.inscricaoHabilitada) return

  const valorNumero = Number(curso.preco.replace(/[^\d]/g, '')) / 100

  const initPoint = await criarPreferencia({
    nomeCurso: curso.titulo,
    valorCurso: valorNumero,
    emailUsuario: usuarioEmail.value || undefined
  })

  window.location.href = initPoint
}

// Validar pagamento via Apps Script
interface ValidarAcessoResponse {
  liberado: boolean
  message?: string
}

const validarAcesso = async () => {
  if(!usuarioEmail.value) return
  const res = await $fetch<ValidarAcessoResponse>('APPS_SCRIPT_VALIDAR_URL', {
    method: 'POST',
    body: { email: usuarioEmail.value }
  })
  mostrarIframe.value = res.liberado
}

// Checar pagamento ao montar página
onMounted(() => validarAcesso())
</script>

<template>
  <section class="px-40 py-40">
    <h1 class="text-4xl font-bold">{{ curso.titulo }}</h1>
    <p class="mt-4 text-xl text-gray-600">{{ curso.descricao }}</p>
    <img :src="curso.image" :alt="curso.titulo" class="mt-6 h-80 w-full rounded-2xl object-cover">

    <div class="mt-8 space-y-2 text-lg text-gray-700">
      <p><strong>Categorias:</strong> {{ curso.categorias.join(', ') }}</p>
      <p><strong>Tempo:</strong> {{ curso.tempo }}</p>
      <p><strong>Encontros:</strong> {{ curso.encontros }}</p>
      <p><strong>Data:</strong> {{ curso.data }}</p>
      <p><strong>Preço:</strong> {{ curso.preco }}</p>
    </div>

    <button
      class="mt-10 rounded-xl bg-orange-500 px-8 py-3 text-lg font-bold text-white transition hover:bg-orange-600"
      @click="iniciarPagamento"
      :disabled="!curso.inscricaoHabilitada"
    >
      Inscreva-se
    </button>
  </section>

  <section v-if="mostrarIframe">
    <iframe :src="curso.iframe" class="w-full h-[600px]"></iframe>
  </section>

  <section v-else>
    <p>Seu acesso será liberado após o pagamento.</p>
  </section>
</template>

<script setup lang="ts">
<<<<<<< Updated upstream
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
=======
import cursos from '~/utils/cursos'

interface MPPaymentResponse{
  status: string,
  id: string,
  point_of_interaction?: {
    transaction_data?: {
      qr_code?: string,
    },
  },
}
interface MercadoPagoConstructor {
  new (publicKey: string): {
    bricks: () => {
      create: (type: string, container: string, settings: object) => Promise<void>;
    };
  };
}

// Tipagem para o Brick do Mercado Pago para evitar 'any'
interface BrickSubmitData{
  formData: Record<string, unknown>,
}

const config = useRuntimeConfig()
const route = useRoute()
const loading = ref(false)
const checkoutIniciado = ref(false)
const pixCopiaCola = ref('') // Substitui o alert

const cursoEncontrado = cursos.find(c => c.id === Number(route.params.id))
if(!cursoEncontrado) throw createError({ statusCode: 404, message: 'Curso não encontrado' })
const curso = cursoEncontrado

async function lidarComRespostaPagamento(resultado: MPPaymentResponse){
  if(!resultado) return

  if(resultado.status === 'approved'){
    await navigateTo('/obrigado')
  }
  else if(resultado.point_of_interaction?.transaction_data?.qr_code){
    // Em vez de alert, salvamos no estado para mostrar na tela
    pixCopiaCola.value = resultado.point_of_interaction.transaction_data.qr_code
  }
}

async function renderizarPaymentBrick(){
  if(loading.value) return
  loading.value = true

  const res = await $fetch<{ id: string }>('/api/checkout', {
    method: 'POST',
    body: { cursoId: route.params.id },
  }).catch((error: Error) => {
    console.error('Erro ao buscar preferência:', error.message)
    loading.value = false
    return null
  })

  if(!res?.id) return

  checkoutIniciado.value = true
  await nextTick()

  // Uso de unknown para evitar o 'any' no objeto global
  const mpGlobal = globalThis as unknown as { MercadoPago: MercadoPagoConstructor }
  
  if (!mpGlobal.MercadoPago) {
    loading.value = false
    return
  }

  // 3. Agora o TS sabe que 'mp' tem o método 'bricks' e o linter fica feliz
  const mp = new mpGlobal.MercadoPago(config.public.mpPublicKey)
  const bricksBuilder = mp.bricks()

  await bricksBuilder.create('payment', 'paymentBrick_container', {
    initialization: {
      amount: curso.preco,
      preferenceId: res.id,
    },
    customization: {
      paymentMethods: {
        ticket: 'all',
        bankTransfer: 'all',
        creditCard: 'all',
      },
    },
    callbacks: {
      onReady: () => {
        loading.value = false
      },
      onError: (err: Error) => {
        console.error('Erro no Brick:', err.message)
        loading.value = false
      },
      onSubmit: async ({ formData }: BrickSubmitData) => {
        try {
          // ESLint fix: Usando async/await no lugar de .then()
          const resultado = await $fetch<MPPaymentResponse>('/api/processar-pagamento', {
            method: 'POST',
            body: formData,
          })
          await lidarComRespostaPagamento(resultado)
        }
        catch (error: unknown){
          if(error instanceof Error){
            console.error('Erro no processamento:', error.message)
          }
        }
      },
    },
  })
}

// Mock do time
const team = ref([
  { name: 'Professor 1', role: 'Especialista', image: '/prof1.png', linkedin: '#' },
])
</script>

<template>
  <main class="mx-auto max-w-7xl px-6 py-20">
    <section class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
      <div>
        <h1 class="text-5xl leading-tight font-extrabold text-gray-900">
          {{ curso.titulo }}
        </h1>
        <p class="mt-6 text-xl leading-relaxed text-gray-600">
          {{ curso.descricao }}
        </p>

        <div v-if="pixCopiaCola" class="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p class="text-sm font-bold text-amber-800">
            PIX Gerado com sucesso!
          </p>
          <p class="mt-2 font-mono text-xs break-all text-amber-900">
            {{ pixCopiaCola }}
          </p>
          <p class="mt-2 text-xs text-amber-700">
            Copie o código acima para pagar no seu banco.
          </p>
        </div>

        <div class="mt-8 border-t border-gray-100 pt-8">
          <span class="block text-sm tracking-wider text-gray-400 uppercase">Investimento</span>
          <span class="text-lg font-bold text-green-600">
            {{ Number(curso.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
          </span>
        </div>

        <button
          v-if="!checkoutIniciado"
          :disabled="loading"
          class="mt-10 w-full rounded-2xl bg-blue-600 px-12 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 disabled:opacity-50 md:w-auto"
          type="button"
          @click="renderizarPaymentBrick"
        >
          {{ loading ? 'Preparando...' : 'Quero me inscrever' }}
        </button>
      </div>

      <div class="relative min-h-[550px]">
        <img
          v-if="!checkoutIniciado"
          :src="curso.image"
          alt="Imagem de capa do curso"
          class="h-[450px] w-full rounded-3xl object-cover shadow-2xl"
        >

        <div
          v-show="checkoutIniciado"
          id="paymentBrick_container"
          class="min-h-[600px] w-full rounded-3xl border border-gray-100 bg-white p-4 shadow-xl"
        />
      </div>
      <section id="team" class="my-12">
        <p
          class="font-poppins mb-10 bg-black bg-clip-text text-center text-2xl  font-bold text-transparent md:text-4xl"
        >
          Conheça os Professores
        </p>

        <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="person in team"
            :key="person.name"
            class="flex min-h-[320px] flex-col items-center text-center"
          >
            <div class="flex size-40 items-center justify-center rounded-full bg-gradient-to-b from-orange-600/80 to-orange-300">
              <img
                :src="person.image"
                :alt="person.name"
                class="-mt-3 h-44 w-40 rounded-full object-cover"
              >
            </div>

            <div class="mt-4 rounded-md bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
              {{ person.name }}
            </div>

            <p class="mt-2 flex-1 text-sm whitespace-pre-line text-black">
              {{ person.role }}
            </p>

            <NuxtLink
              :href="person.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto flex justify-center"
            >
              <!-- ícone aqui se quiser -->
            </NuxtLink>
          </div>
        </div>
      </section>
    </section>
  </main>
>>>>>>> Stashed changes
</template>

<script setup lang="ts">
import { ref } from 'vue'

const state = ref<Formulario>({
  nome: '',
  email: '',
  telefone: '',

  experiencia: '',
  areaAtuacao: '',
  desafio: '',

  objetivos: [],
  objetivoOutro: '',

  motivacao: 5,
  origem: '',
  satisfacao: 5,
})

const opcoesExperiencia = [
  { label: 'Estudante', value: 'estudante' },
  { label: 'Recém-formado / Júnior (até 2 anos)', value: 'junior' },
  { label: 'Pleno (3 a 5 anos)', value: 'pleno' },
  { label: 'Sênior (mais de 5 anos)', value: 'senior' },
  { label: 'Liderança / Gestão', value: 'lideranca' },
]

const opcoesObjetivos = [
  'Conseguir uma promoção',
  'Mudar de área/setor',
  'Aumentar significativamente meu salário',
  'Abrir meu próprio negócio / ser freelancer',
  'Encontrar um propósito maior no trabalho',
  'Desenvolver habilidades de liderança',
  'Outro',
]

const opcoesOrigem = [
  'Indicação de amigo',
  'LinkedIn',
  'Instagram',
  'Google',
  'E-mail marketing',
  'Outro',
]
</script>

<template>
  <section class="relative  px-4 py-16">
    <div
      class="mx-auto max-w-4xl rounded-2xl bg-[#064e3b] px-8 py-12 shadow-2xl"
    >
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-1 block text-sm font-semibold text-emerald-100">
            Nome Completo
          </label>
          <input
            v-model="state.nome"
            type="text"
            placeholder="Seu nome"
            class="w-full rounded-lg bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          >
        </div>

        <div>
          <label class="mb-1 block text-sm font-semibold text-emerald-100">
            E-mail
          </label>
          <input
            v-model="state.email"
            type="email"
            placeholder="seu@email.com"
            class="w-full rounded-lg bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          >
        </div>

        <div>
          <label class="mb-1 block text-sm font-semibold text-emerald-100">
            Telefone com DDD
          </label>
          <input
            v-model="state.telefone"
            type="tel"
            placeholder="(xx) xxxxx-xxxx"
            class="w-full rounded-lg bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          >
        </div>

        <div class="md:col-span-2">
          <p class="mb-3 text-sm font-semibold text-emerald-100">
            Qual seu nível de experiência atual?
          </p>

          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label
              v-for="opcao in opcoesExperiencia"
              :key="opcao.value"
              class="flex cursor-pointer items-center gap-3 rounded-lg bg-emerald-950/40 px-4 py-3 text-emerald-50 hover:bg-emerald-900/60"
            >
              <input
                v-model="state.experiencia"
                type="radio"
                :value="opcao.value"
                class="accent-emerald-400"
              >
              {{ opcao.label }}
            </label>
          </div>
        </div>
        <!--
          <div class="md:col-span-2">
          <label class="mb-1 block text-sm font-semibold text-emerald-100">
          Área ou setor em que atua
          </label>
          <input
          v-model="state.areaAtuacao"
          type="text"
          placeholder="Ex: Tecnologia, Saúde, Educação"
          class="w-full rounded-lg bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          </div>

          <div class="md:col-span-2">
          <label class="mb-1 block text-sm font-semibold text-emerald-100">
          Principal desafio ou bloqueio
          </label>
          <textarea
          v-model="state.desafio"
          rows="4"
          placeholder="Ex: falta de clareza, medo de mudar de área..."
          class="w-full rounded-lg bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          </div>

          <div class="md:col-span-2">
          <p class="mb-3 text-sm font-semibold text-emerald-100">
          Objetivos de carreira (1–3 anos)
          </p>

          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
          v-for="opcao in opcoesObjetivos"
          :key="opcao"
          class="flex items-center gap-3 rounded-lg bg-emerald-950/40 px-4 py-3 text-emerald-50"
          >
          <input
          type="checkbox"
          :value="opcao"
          v-model="state.objetivos"
          class="accent-emerald-400"
          />
          {{ opcao }}
          </label>
          </div>

          <input
          v-if="state.objetivos.includes('Outro')"
          v-model="state.objetivoOutro"
          placeholder="Especifique"
          class="mt-4 w-full rounded-lg bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          </div>

          <div class="md:col-span-2">
          <label class="mb-2 block text-sm font-semibold text-emerald-100">
          Nível de motivação para mudar de carreira
          </label>
          <input
          type="range"
          min="1"
          max="10"
          v-model="state.motivacao"
          class="w-full accent-emerald-400"
          />
          </div>

          <div class="md:col-span-2">
          <label class="mb-1 block text-sm font-semibold text-emerald-100">
          Como soube da imersão?
          </label>
          <select
          v-model="state.origem"
          class="w-full rounded-lg bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
          <option value="">Selecione</option>
          <option v-for="opcao in opcoesOrigem" :key="opcao">
          {{ opcao }}
          </option>
          </select>
          </div>

          <div class="md:col-span-2">
          <label class="mb-2 block text-sm font-semibold text-emerald-100">
          Nível de satisfação com sua trajetória atual
          </label>
          <input
          type="range"
          min="1"
          max="10"
          v-model="state.satisfacao"
          class="w-full accent-emerald-400"
          />
          </div>
        -->

        <div class="flex justify-center pt-6 md:col-span-2">
          <button
            class="rounded-xl bg-emerald-500 px-10 py-3 text-lg font-bold text-emerald-950 transition hover:bg-emerald-600"
            @click=""
          >
            Validar Dados
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

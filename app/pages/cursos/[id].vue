<script setup lang="ts">
const route = useRoute()
const cursoEncontrado = cursos.find(c => c.id === Number(route.params.id))

if(!cursoEncontrado){
  throw createError({
    statusCode: 404,
    statusMessage: 'Curso não encontrado',
    fatal: true,
  })
}
const curso = cursoEncontrado
</script>

<template>
  <div class="bg-white font-sans text-slate-900">
    <header class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-white" />

      <div class="relative mx-auto max-w-7xl px-6 pt-40 pb-20">
        <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div class="max-w-2xl">
            <div
              v-if="curso.aoVivo"
              class="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-black tracking-widest text-emerald-700 uppercase"
            >
              <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Curso ao vivo
            </div>

            <h1 class="text-5xl leading-tight font-black tracking-tight md:text-6xl">
              {{ curso.titulo }}
            </h1>

            <p class="mt-8 text-xl leading-relaxed text-slate-600">
              {{ curso.subDescricao || curso.descricao }}
            </p>

            <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div
                v-for="(val, label) in {
                  Duração: curso.tempo,
                  Encontros: curso.encontros,
                  Data: curso.data,
                  Formato: curso.aoVivo ? 'Ao vivo' : 'Gravado'
                }"
                :key="label"
                class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <span class="block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  {{ label }}
                </span>
                <p class="mt-1 text-sm font-bold text-slate-800">
                  {{ val }}
                </p>
              </div>
            </div>

            <div class="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <NuxtLink
                v-if="curso.inscricaoHabilitada"
                :href="`/checkout/${curso.id}`"
                class="group relative w-full overflow-hidden rounded-2xl bg-emerald-600 p-5 text-center text-lg font-black text-white transition-all hover:bg-emerald-700 sm:w-auto"
              >
                <span class="relative z-10">Quero me inscrever</span>
                <span class="absolute inset-0 -translate-x-full bg-emerald-500 transition-transform group-hover:translate-x-0" />
              </NuxtLink>

              <div class="flex flex-col leading-tight">
                <span class="text-xl font-black text-slate-900">
                  {{ curso.preco }}
                </span>
                <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  em até 10x
                </span>
              </div>
            </div>
          </div>

          <div class="relative">
            <img
              :src="curso.image"
              :alt="curso.titulo"
              class="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-emerald-900/10"
            >
          </div>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-4xl space-y-28 px-6 py-28">
      <section
        v-for="(texto, label) in {
          'A dor real': curso.problema,
          'A solução': curso.solucao,
          'O que você vai aprender': curso.aprendizado,
          'Para quem é': curso.alvo
        }"
        :key="label"
      >
        <h2 class="mb-6 text-2xl font-black text-slate-900">
          {{ label }}
        </h2>
        <p class="max-w-3xl text-lg leading-relaxed text-slate-600">
          {{ texto }}
        </p>
      </section>

      <section v-if="curso.ementa?.length">
        <h2 class="mb-10 text-2xl font-black text-slate-900">
          Ementa do curso
        </h2>

        <div class="space-y-5">
          <div
            v-for="(item, index) in curso.ementa"
            :key="index"
            class="group rounded-3xl border border-slate-100 bg-white p-8 transition hover:shadow-md"
          >
            <div class="mb-2 flex items-center justify-between">
              <span class="text-xs font-black tracking-widest text-emerald-600 uppercase">
                Módulo {{ index + 1 }}
              </span>
              <span class="text-xs text-slate-400">
                {{ item.data }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-800">
              {{ item.tema }}
            </h3>

            <p class="mt-4 text-sm text-slate-500">
              <strong class="text-slate-700">Entrega:</strong>
              {{ item.entrega }}
            </p>
          </div>
        </div>
      </section>

      <section
        v-if="curso.instrutora?.nome"
        class="rounded-[2.5rem] bg-slate-900 p-14 text-white"
      >
        <div class="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div class="flex justify-center md:justify-start">
            <img
              v-if="curso.instrutora.foto"
              :src="curso.instrutora.foto"
              :alt="`Foto da instrutora ${curso.instrutora.nome}`"
              class="h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-emerald-500/20"
            >
            <div
              v-else
              class="h-28 w-28 rounded-full bg-slate-700"
            />
          </div>

          <div>
            <span class="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              Instrutora
            </span>

            <h2 class="mt-2 text-2xl font-black">
              {{ curso.instrutora.nome }}
            </h2>

            <p class="mt-1 font-medium text-emerald-300">
              {{ curso.instrutora.cargo }}
            </p>

            <p
              v-if="curso.instrutora.bio"
              class="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300"
            >
              {{ curso.instrutora.bio }}
            </p>

<div
  v-if="curso.instrutora.formacao || curso.instrutora.experiencia"
  class="mt-8 flex w-full flex-col gap-4"
>
  <div
    v-if="curso.instrutora.experiencia"
    class="w-full rounded-xl bg-slate-800 p-5"
  >
    <p class="text-xs font-bold tracking-widest text-slate-400 uppercase">
      Experiência
    </p>
    <p class="mt-2 text-sm leading-relaxed text-slate-200">
      {{ curso.instrutora.experiencia }}
    </p>
  </div>

  <div
    v-if="curso.instrutora.formacao"
    class="w-full rounded-xl bg-slate-800 p-5"
  >
    <p class="text-xs font-bold tracking-widest text-slate-400 uppercase">
      Formação
    </p>

    <ul
      v-if="Array.isArray(curso.instrutora.formacao)"
      class="mt-2 space-y-2 text-sm text-slate-200"
    >
      <li
        v-for="(item, index) in curso.instrutora.formacao"
        :key="index"
        class="flex items-start gap-2"
      >
        <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
        <span>{{ item }}</span>
      </li>
    </ul>

    <p
      v-else
      class="mt-2 text-sm text-slate-200"
    >
      {{ curso.instrutora.formacao }}
    </p>
  </div>
</div>


            <div
              v-if="curso.instrutora.especialidades?.length"
              class="mt-8 flex flex-wrap gap-2"
            >
              <span
                v-for="(tag, index) in curso.instrutora.especialidades"
                :key="index"
                class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="border-t border-slate-100 pt-24 text-center">
        <h2 class="text-4xl font-black text-slate-900">
          Pronta para começar?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg text-slate-500">
          Garanta sua vaga agora e comece a transformar sua carreira em Produto.
        </p>

        <NuxtLink
          v-if="curso.inscricaoHabilitada"
          :href="`/checkout/${curso.id}`"
          class="mt-12 inline-block rounded-2xl bg-emerald-600 px-14 py-5 text-lg font-black text-white transition hover:scale-105"
        >
          Quero me inscrever agora
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

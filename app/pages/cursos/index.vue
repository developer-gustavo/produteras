<script setup lang="ts">
import cursos from '~/utils/cursos'
</script>

<template>
<section id="cursos">
  <div class="h-full space-y-6 bg-white px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24 text-start">
    <p class="text-sm md:text-md font-bold text-amber-500 uppercase">
      Nossos Cursos
    </p>

    <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
      Cursos em Destaque
    </h1>

    <p class="text-base md:text-lg text-gray-500 max-w-3xl">
      Conheça nossos cursos e imersões mais populares, criados por especialistas do mercado.
    </p>

    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      <article
        v-for="curso in cursos"
        :key="curso.id"
        class="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
      >
        <div class="relative h-52 overflow-hidden">
          <img
            :src="curso.image"
            :alt="curso.titulo"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          >

          <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          <div class="absolute top-4 left-4 flex gap-2 flex-wrap">
            <span
              v-for="cat in curso.categorias"
              :key="cat"
              class="rounded-full border border-white/20 bg-white/70 px-2 py-1 text-xs font-semibold text-neutral-700 backdrop-blur-md dark:border-black/30 dark:bg-black/40 dark:text-neutral-200"
            >
              {{ cat }}
            </span>
          </div>

          <div v-if="curso.aoVivo" class="absolute top-4 right-4">
            <span class="flex items-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
              <span class="mr-1.5 h-2 w-2 animate-pulse rounded-full bg-white" />
              Ao vivo
            </span>
          </div>
        </div>

        <div class="p-4 md:p-6">
          <h3 class="line-clamp-2 text-lg md:text-xl font-bold text-neutral-900 transition-colors group-hover:text-emerald-600 dark:text-neutral-100">
            {{ curso.titulo }}
          </h3>

          <p class="mt-2 line-clamp-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            {{ curso.descricao }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
            <span class="flex items-center gap-1.5">⏰ {{ curso.tempo }}</span>
            <span class="flex items-center gap-1.5">👥 {{ curso.encontros }}</span>
          </div>

          <div class="mt-4 rounded-lg border border-neutral-300 bg-neutral-100 p-3 dark:border-neutral-700 dark:bg-neutral-800 text-xs md:text-sm">
            <div class="flex items-center gap-2">
              📅
              <span class="font-medium text-neutral-900 dark:text-neutral-100">Próxima turma:</span>
              <span class="text-neutral-600 dark:text-neutral-400">{{ curso.data }}</span>
            </div>
          </div>

          <div class="mt-4 flex flex-col gap-3 border-t border-neutral-200 pt-4 sm:flex-row sm:items-center dark:border-neutral-700">
            <div class="w-full sm:max-w-[65%]">
              <p class="text-sm md:text-md font-bold break-words text-neutral-900 dark:text-neutral-100">
                {{ curso.preco }}
              </p>
              <p class="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">ou em até 10x</p>
            </div>

            <NuxtLink
              :href="`/cursos/${curso.id}`"
              class="mt-2 sm:mt-0 sm:ml-auto flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 px-4 py-2 font-semibold text-white shadow-md transition-all hover:shadow-lg"
            >
              Ver detalhes →
            </NuxtLink>
          </div>
        </div>
      </article>
      <div class="text-center text-md text-red-500 font-bold space-y-2">
        <p>
          As aulas são ao vivo e não há possibilidade de troca de data. Todas as aulas serão gravadas e disponibilizadas posteriormente.
        </p>
        <p>
          Cancelamento permitido até 48h antes.
        </p>
      </div>

    </div>
  </div>
</section>

</template>

<script setup lang="ts">
import cursos from '~/utils/cursos'
</script>

<template>
  <section id="cursos">
    <div class="h-full space-y-2 bg-white px-40 py-40 text-start">
      <p class="text-md font-bold text-amber-500 uppercase">
        Nossos Cursos
      </p>

      <h1 class="text-5xl font-extrabold text-black">
        Cursos em Destaque
      </h1>

      <p class="max-auto items-center text-start text-xl text-gray-500">
        Conheça nossos cursos e imersões mais populares, criados por especialistas do mercado.
      </p>

      <div class="grid gap-8 md:grid-cols-2">
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

            <div class="absolute top-4 left-4 flex gap-2">
              <span
                v-for="cat in curso.categorias"
                :key="cat"
                class="rounded-full border border-white/20 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 backdrop-blur-md dark:border-black/30 dark:bg-black/40 dark:text-neutral-200"
              >
                {{ cat }}
              </span>
            </div>

            <div v-if="curso.aoVivo" class="absolute top-4 right-4">
              <span class="flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                <span class="mr-2 h-2 w-2 animate-pulse rounded-full bg-white" />
                Ao vivo
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="line-clamp-2 text-xl font-bold text-neutral-900 transition-colors group-hover:text-emerald-600 dark:text-neutral-100">
              {{ curso.titulo }}
            </h3>

            <p class="mt-2 line-clamp-2 text-neutral-600 dark:text-neutral-400">
              {{ curso.descricao }}
            </p>

            <div class="mt-4 flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <span class="flex items-center gap-1.5">⏰ {{ curso.tempo }}</span>
              <span class="flex items-center gap-1.5">👥 {{ curso.encontros }}</span>
            </div>

            <div class="mt-4 rounded-lg border border-neutral-300 bg-neutral-100 p-3 dark:border-neutral-700 dark:bg-neutral-800">
              <div class="flex items-center gap-2 text-sm">
                📅
                <span class="font-medium text-neutral-900 dark:text-neutral-100">Próxima turma:</span>
                <span class="text-neutral-600 dark:text-neutral-400">{{ curso.data }}</span>
              </div>
            </div>

            <div
              class="mt-6 flex flex-col gap-4 border-t border-neutral-200 pt-4
                    sm:flex-row sm:items-center
                    dark:border-neutral-700"
            >
              <div class="max-w-[65%] min-w-0 sm:max-w-none">
                <p
                  class="text-md font-bold break-words text-neutral-900
                        dark:text-neutral-100"
                >
                  {{ curso.preco }}
                </p>
                <p class="text-xs text-neutral-600 dark:text-neutral-400">
                  ou em até 10x
                </p>
              </div>

              <NuxtLink
                :href="`/cursos/${curso.id}`"
                class="ml-auto flex h-11 w-full shrink-0 items-center justify-center gap-2
                      rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700
                      px-6 py-2 font-semibold text-white shadow-md
                      transition-all hover:shadow-lg
                      sm:w-auto"
              >
                Ver detalhes →
              </NuxtLink>
            </div>s
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

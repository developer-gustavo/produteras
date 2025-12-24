<script setup lang="ts">
import cursos from '~/utils/cursos'

const funders = [
  {
    name: 'Fernanda Carvalho',
    role: 'Fundadora | Co-criadora da ProduterasBR',
    position: 'Fundadora da ProduterasBR | Head de Produto',
    about: {
      intro:
        'Apaixonada por impacto social e por Produtos Digitais, Fernanda idealizou a ProduterasBR a partir de uma necessidade real.',
      story:
        'Percebeu a falta de um espaço seguro de troca, aprendizado e apoio entre mulheres de produto.',
      vision:
        'Com experiência prática de mercado, acredita no poder da comunidade, na educação acessível e no protagonismo feminino como ferramentas de transformação de carreira.',
    },
    picture: '/Fernanda.jpeg',
    linkedin: 'https://www.linkedin.com/in/fernandapcarvalho/',
    badgeColor: 'amber-500',
  },
  {
    name: 'Djenane Santos',
    role: 'Co-fundadora | Co-criadora da ProduterasBR Academy',
    position: 'Co-fundadora | Co-criadora da ProduterasBR Academy',
    about: {
      intro:
        'Djenane chegou para somar, fortalecer e expandir o sonho.',
      story:
        'Abraçou a causa desde o início e foi peça-chave na evolução da comunidade para a criação da ProduterasBR Academy.',
      vision:
        'Com olhar estratégico e humano, atua para transformar conhecimento em ação e apoiar mulheres a se desenvolverem e ocuparem espaços de destaque no mercado de Produto.',
    },
    picture: 'Djenane.png',
    linkedin: 'https://www.linkedin.com/in/djenane/',
    badgeColor: 'emerald-500',
  },
]
</script>

<template>
  <!-- eslint-disable vue/no-restricted-v-bind -->
  <section id="principal" class="relative overflow-hidden">
    <div
      class="relative flex min-h-screen items-center justify-center text-center"
      :style="{
        backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.05) 1px, #0000 1px),
        linear-gradient(rgba(0,0,0,0.04) 1px, #0000 1px),
        linear-gradient(to bottom, #10B981, #164E63)
      `,
        backgroundSize: '60px 60px, 60px 60px, cover',
        backgroundRepeat: 'repeat'
      }"
    >
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-32 md:px-12 lg:px-24">
        <button class="rounded-full border bg-amber-500/10 px-6 py-2 text-sm font-bold text-amber-400">
          Cursos ao vivo com especialistas
        </button>

        <h1 class="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
          Destrave sua Carreira em Produto
        </h1>

        <p class="max-w-3xl text-lg text-white md:text-xl">
          Cursos e imersões ao vivo para mulheres que querem se destacar no mercado
          de tecnologia e produto
        </p>

        <div class="flex w-full max-w-xl flex-col gap-4 pt-6 sm:flex-row">
          <button
            class="w-full rounded-2xl bg-amber-500 px-6 py-3 text-lg font-extrabold text-white transition hover:bg-amber-600 hover:shadow-xl"
          >
            Quero me inscrever
          </button>

          <NuxtLink to="/cursos" class="w-full">
            <button
              class="w-full rounded-2xl border border-white bg-white/10 px-6 py-3 text-lg font-extrabold text-white transition hover:bg-white/20 hover:shadow-xl"
            >
              Ver todos os Cursos
            </button>
          </NuxtLink>
        </div>

        <div class="mt-12 flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div class="text-center text-white">
            <p class="text-4xl font-extrabold">
              500+
            </p>
            <span>Alunas formadas</span>
          </div>

          <div class="text-center text-white">
            <p class="text-4xl font-extrabold">
              4.9
            </p>
            <span>Avaliação média</span>
          </div>

          <div class="text-center text-white">
            <p class="text-4xl font-extrabold">
              15+
            </p>
            <span>Turmas realizadas</span>
          </div>
        </div>
      </div>

      <div class="pointer-events-none absolute right-0 bottom-0 left-0">
        <svg viewBox="0 0 1440 100" class="w-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 33.3C384 33.3 480 41.7 576 50C672 58.3 768 66.7 864 62.5C960 58.3 1056 41.7 1152 37.5C1248 33.3 1344 41.7 1392 45.8L1440 50V100H0V50Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  </section>

  <section id="sobre" class="bg-white px-6 py-16 md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl space-y-4 text-center">
      <p class="text-md font-bold text-amber-500 uppercase">
        Sobre Nós
      </p>
      <h1 class="text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
        Sobre a ProduterasBR Academy
      </h1>
      <p class="mx-auto max-w-3xl text-lg text-gray-500 md:text-xl">
        Somos uma comunidade de mulheres apaixonadas por produto e tecnologia. Nossa missão é
        fortalecer, conectar e desenvolver mulheres que atuam com Produtos Digitais, por meio
        de uma comunidade segura e uma formação prática, promovendo crescimento profissional,
        protagonismo e impacto no mercado.
      </p>
    </div>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div class="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-left backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-900 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-semibold text-black">
          Sororidade
        </h3>
        <p class="text-gray-400">
          Acreditamos na união entre mulheres como força de transformação.
        </p>
      </div>

      <div class="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-left backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-900 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-semibold text-black">
          Espaço Seguro
        </h3>
        <p class="text-gray-400">
          Incentivamos mulheres a ocuparem espaços de decisão e liderança.
        </p>
      </div>

      <div class="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-left backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-900 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-semibold text-black">
          Protagonismo Feminino
        </h3>
        <p class="text-gray-400">
          Faça parte de uma rede de mulheres em produto que se apoiam e crescem juntas.
        </p>
      </div>

      <div class="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-left backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-900 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-semibold text-black">
          Aprendizado Contínuo
        </h3>
        <p class="text-gray-400">
          A evolução faz parte da nossa essência. Aprender é um compromisso constante.
        </p>
      </div>

      <div class="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-left backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-900 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0 0a4 4 0 100-8 4 4 0 000 8zm8 0a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-semibold text-black">
          Trocas Reais
        </h3>
        <p class="text-gray-400">
          Valorizamos conversas honestas, experiências práticas e aprendizados compartilhados.
        </p>
      </div>

      <div class="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-left backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-900 transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18M9 17l3-5 4 4 5-9" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-semibold text-black">
          Impacto
        </h3>
        <p class="text-gray-400">
          Trabalhamos para gerar mudanças reais nas carreiras, nos produtos e na sociedade.
        </p>
      </div>
    </div>
  </section>

  <section id="cursos" class="bg-white px-6 py-16 md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl space-y-6">
      <p class="text-md font-bold text-amber-500 uppercase">
        Nossos Cursos
      </p>
      <h1 class="text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
        Próximos Encontros
      </h1>
      <div class="flex flex-col gap-4 pb-4 md:flex-row md:items-center md:justify-between">
        <p class="text-lg text-gray-500 md:max-w-2xl">
          Conheça nossos cursos e imersões mais populares, criados por especialistas do mercado.
        </p>
        <NuxtLink to="/cursos">
          <button class="bg-cyan border-cyan w-full rounded-2xl border-2 px-3 py-2 text-lg font-extrabold text-emerald-600 hover:bg-white/20 hover:shadow-xl sm:w-80">
            Ver todos os Cursos
          </button>
        </NuxtLink>
      </div>

      <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="curso in cursos"
          :key="curso.id"
          class="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl "
        >
          <div class="relative h-52 overflow-hidden">
            <img
              :src="curso.image"
              :alt="curso.titulo"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div class="absolute top-4 left-4 flex flex-wrap gap-2">
              <span
                v-for="cat in curso.categorias"
                :key="cat"
                class="rounded-full border border-white/20 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 backdrop-blur-md "
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
            <h3 class="line-clamp-2 text-xl font-bold text-neutral-900 transition-colors group-hover:text-emerald-600 ">
              {{ curso.titulo }}
            </h3>
            <p class="mt-2 line-clamp-2 text-neutral-600 ">
              {{ curso.descricao }}
            </p>
            <div class="mt-4 flex flex-wrap gap-4 text-sm text-neutral-600 ">
              <span class="flex items-center gap-1.5">⏰ {{ curso.tempo }}</span>
              <span class="flex items-center gap-1.5">👥 {{ curso.encontros }}</span>
            </div>
            <div class="mt-4 rounded-lg border border-neutral-300 bg-neutral-100 p-3  ">
              <div class="flex flex-wrap items-center gap-2 text-sm">
                📅
                <span class="font-medium text-neutral-900 ">Próxima turma:</span>
                <span class="text-neutral-600 ">{{ curso.data }}</span>
              </div>
            </div>
            <div class="mt-6 flex flex-col gap-4 border-t border-neutral-200 pt-4 sm:flex-row sm:items-center">
              <div class="max-w-full sm:max-w-[65%]">
                <p class="text-md font-bold break-words text-neutral-900 ">
                  {{ curso.preco }}
                </p>
                <p class="text-xs text-neutral-600 ">
                  em até 10x
                </p>
              </div>
              <NuxtLink
                :href="`/cursos/${curso.id}`"
                class="ml-auto flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 px-6 py-2 font-semibold text-white shadow-md transition-all hover:shadow-lg sm:w-auto"
              >
                Ver detalhes →
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="quem-somos" class="bg-white px-6 py-16 text-center md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl space-y-6">
      <p class="text-md font-bold text-amber-500 uppercase">
        Quem Somos
      </p>
      <h1 class="text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
        Conheça o Nosso Time
      </h1>
      <p class="mx-auto max-w-3xl text-lg text-gray-500 md:text-xl">
        Profissionais experientes e apaixonadas por desenvolver carreiras em produto.
      </p>

      <div class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div
          v-for="person in funders"
          :key="person.name"
          class="group relative flex flex-col overflow-hidden rounded-2xl text-left shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <div class="relative h-80 w-full overflow-hidden rounded-t-2xl">
            <img
              :src="person.picture"
              :alt="person.name"
              class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            >
          </div>

          <div class="flex flex-1 flex-col p-6">
            <div class="mb-2 flex flex-wrap gap-2">
              <span class="rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-500">
                {{ person.role }}
              </span>
            </div>

            <h3 class="text-foreground text-xl font-bold">
              {{ person.name }}
            </h3>
            <p class="mt-1 text-sm font-medium text-emerald-600">
              {{ person.position }}
            </p>

            <div class="text-muted-foreground mt-4 flex-1 space-y-3 text-sm leading-relaxed">
              <p class="font-medium">
                {{ person.about.intro }}
              </p>
              <p class="border-muted border-l-2 pl-3">
                {{ person.about.story }}
              </p>
              <p class="italic">
                {{ person.about.vision }}
              </p>
            </div>

            <div class="mt-6 flex gap-3">
              <NuxtLink
                :href="person.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-secondary flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-linkedin h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="final" class="relative overflow-hidden">
    <div class="inset-0 h-full space-y-8 bg-linear-to-br from-emerald-400 to-cyan-900 px-6 py-20 text-center md:px-12 lg:px-24">
      <button class="text-md w-full max-w-xs rounded-full border bg-amber-500/10 px-4 py-2 font-bold text-amber-500/90 md:w-50">
        Vagas Limitadas
      </button>

      <h1 class="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
        Pronta para dar o próximo passo na sua carreira?
      </h1>

      <p class="mx-auto max-w-2xl text-lg text-white md:text-xl">
        Junte-se a mais de 500 mulheres que já transformaram suas carreiras com a ProduterasBR Academy.
      </p>

      <div class="mt-6 flex justify-center">
        <button class="w-full max-w-xs rounded-2xl bg-amber-500 p-3 text-xl font-extrabold text-white hover:bg-amber-600 hover:shadow-xl md:w-80">
          Ver Cursos Disponíveis
        </button>
      </div>
    </div>
  </section>
</template>

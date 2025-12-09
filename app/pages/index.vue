<!-- eslint-disable vue/no-restricted-v-bind -->
<template>
  <section class="relative overflow-hidden">
    <div
      class="inset-0 h-full space-y-5 px-40 py-80 text-center"
      :style="{
        backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, #0000 1px),
      linear-gradient(rgba(0,0,0,0.04) 1px, #0000 1px),
      linear-gradient(to bottom, #10B981, #164E63)
    `,
        backgroundSize: '60px 60px, 60px 60px, cover',
        backgroundRepeat: 'repeat',
        backdropFilter: 'blur(1px)'
      }"
    >
      <button class="text-md w-80 rounded-full border bg-amber-500/10 p-1 font-bold text-amber-500/90 ">
        Cursos ao vivo com especialistas
      </button>
      <h1 class="text-5xl font-extrabold text-white">
        Destrave sua Carreira em Produto
      </h1>

      <p class="text-2xl text-white">
        Cursos e imersões ao vivo para mulheres que querem se destacar no mercado de tecnologia e produto
      </p>
      <div class="space-x-5">
        <button class="w-80 rounded-2xl bg-amber-500 p-3 text-xl font-extrabold text-white  hover:bg-amber-600 hover:shadow-xl">
          Quero me inscrever
        </button>
        <button class="w-80 rounded-2xl border border-white  bg-white/10 p-3 text-xl font-extrabold text-white  hover:bg-white/20 hover:shadow-xl">
          Ver todos os Cursos
        </button>
      </div>
      <div class="flex items-center justify-center space-x-10 pt-10">
        <div class="flex flex-col items-center  text-white">
          <p class="text-md text-5xl font-extrabold ">
            500+
          </p>
          <span class="">Alunas formadas </span>
        </div>
        <div class="flex flex-col items-center text-white">
          <p class="text-md text-5xl font-extrabold ">
            4.9
          </p>
          <span class="">Avaliação média </span>
        </div>
        <div class="flex flex-col items-center text-white">
          <p class="text-md text-5xl font-extrabold">
            15+
          </p>
          <span class="">Turmas realizadas </span>
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
  <section>
    <div class="h-full space-y-2 bg-white px-40 py-20 text-center">
      <p class="text-md font-bold text-amber-500 uppercase">
        Sobre Nós
      </p>
      <h1 class="text-5xl font-extrabold text-black">
        Sobre a ProduterasBR Academy
      </h1>
      <p class="max-auto items-center text-center text-xl text-gray-500">
        Somos uma comunidade de mulheres apaixonadas por produto e tecnologia. Nossa missão é capacitar e conectar profissionais, oferecendo conteúdo de qualidade, networking e oportunidades de crescimento. Acreditamos que juntas somos mais fortes e podemos transformar o mercado de produto no Brasil.
      </p>
      <div class=" mt-16 grid  gap-8 md:grid-cols-3">
        <div
          class="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-left
         backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl"
        >
          <div
            class="mb-6 flex h-14 w-14 items-center justify-center
              rounded-xl bg-linear-to-br from-emerald-400 to-cyan-900
              transition-transform duration-300 group-hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <h3 class="mb-3 text-xl font-semibold text-black">
            Comunidade Forte
          </h3>

          <p class="text-gray-400">
            Faça parte de uma rede de mulheres em produto que se apoiam e crescem juntas.
          </p>
        </div>

        <div
          class="group relative rounded-2xl border-2 border-gray-100 bg-white  p-8 text-left
         backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl"
        >
          <div
            class="mb-6 flex h-14 w-14 items-center justify-center
              rounded-xl bg-linear-to-br from-emerald-400 to-cyan-900
              transition-transform duration-300 group-hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>

          <h3 class="mb-3 text-xl font-semibold text-black">
            Foco Prático
          </h3>

          <p class="text-gray-400">
            Aprenda com cases reais e exercícios que você pode aplicar imediatamente.
          </p>
        </div>

        <div
          class="group relative rounded-2xl border-2 border-gray-100 bg-white  p-8 text-left
         backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl"
        >
          <div
            class="mb-6 flex h-14 w-14 items-center justify-center
              rounded-xl  bg-linear-to-br from-emerald-400 to-cyan-900
              transition-transform duration-300 group-hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>

          <h3 class="mb-3 text-xl font-semibold text-black">
            Ao Vivo
          </h3>

          <p class="text-gray-400">
            Interação direta com instrutoras experientes, tirando dúvidas em tempo real.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

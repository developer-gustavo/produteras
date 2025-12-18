<script setup lang="ts">
const cursos = [
  {
    id: 1,
    titulo: 'Imersão: Destrave sua Carreira em Produto',
    descricao:
      'Uma imersão prática de 3 dias para você que quer fazer a transição ou acelerar sua carreira em produto.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    categorias: ['carreira', 'produto'],
    aoVivo: true,
    tempo: '15h de conteúdo',
    encontros: '3 encontros',
    data: '14 de janeiro de 2026',
    preco: 'R$ 797,00',
    link: '/cursos/imersao-destrave-sua-carreira',
  },
  {
    id: 2,
    titulo: 'Discovery Avançado: Do Problema ao MVP',
    descricao:
      'Domine técnicas modernas de Product Discovery e valide suas ideias antes de construir.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    categorias: ['discovery', 'produto'],
    aoVivo: true,
    tempo: '20h de conteúdo',
    encontros: '5 encontros',
    data: '02 de março de 2026',
    preco: 'R$ 1.297,00',
    link: '/cursos/curso-discovery-avancado',
  },
]

const funders = [
  {
    name: 'Fernanda Carvalho',
    role: 'Fundadora | Co-criadora da ProduterasBR',
    position: 'Fundadora da ProduterasBR | Head de Produto',
    about:
      'Apaixonada por impacto social e por Produtos Digitais, Fernanda idealizou a ProduterasBR a partir de uma necessidade real: criar um espaço seguro de troca, aprendizado e apoio entre mulheres de produto. Com experiência prática de mercado, acredita no poder da comunidade, na educação acessível e no protagonismo feminino como ferramentas de transformação de carreira.',
    picture:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/anasilva',
    instagram: 'https://instagram.com/anasilva',
    badgeColor: 'amber-500',
  },

  {
    name: 'Djenane',
    role: 'Co-fundadora | Co-criadora da ProduterasBR Academy',
    position: 'Co-fundadora | Co-criadora da ProduterasBR Academy',
    about:
      'Djenane chegou para somar, fortalecer e expandir o sonho. Profissional incrível, abraçou a causa desde o início e foi peça-chave na evolução da comunidade para a criação da ProduterasBR Academy. Com olhar estratégico e humano, atua para transformar conhecimento em ação e apoiar mulheres a se desenvolverem e ocuparem espaços de destaque no mercado de Produto.',
    picture:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/marianacosta',
    instagram: 'https://instagram.com/marianacosta',
    badgeColor: 'emerald-500',
  },
]
const team = [
  {
    name: 'Marcelo Albuquerque',
    role: 'Tecnologista sênior do CBPF',
    image: '/professores/marcelo.png',
    linkedin: 'https://www.linkedin.com/in/marceloportesdealbuquerque',
  },
  {
    name: 'Mariana Bottino',
    role: `Doutora em Biologia Molecular
pela UFRJ e Assessora de
Inovação e Empreendedorismo
do NIT Rio`,
    image: '/professores/mariana.png',
    linkedin: 'https://www.linkedin.com/in/mariana-carnavale-bottino-b9797627',
  },
  {
    name: 'Patricia Coimbra',
    role: `Assessora de Propriedade Intelectual
do NIT Rio e mestre em
Propriedade Intelectual pelo
Instituto Nacional de Tecnologia`,
    image: '/professores/patriciaa.png',
    linkedin: 'https://www.linkedin.com/in/𝐏𝐚𝐭𝐫𝐢𝐜𝐢𝐚-𝐂𝐨𝐢𝐦𝐛𝐫𝐚-b0880b75',
  },
  {
    name: 'Neila Barbosa',
    role: `Mestre em Inovação e
Propriedade Intelectual pelo
Instituto Nacional da Propriedade
Industrial (INPI)`,
    image: '/professores/neila.png',
    linkedin: 'https://www.linkedin.com/in/neila-barbosa-a8243839',
  },
]
</script>

<template>
  <!-- eslint-disable vue/no-restricted-v-bind -->
  <section id="principal" class="relative overflow-hidden">
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
        <NuxtLink to="/cursos">
          <button class="w-80 rounded-2xl border border-white  bg-white/10 p-3 text-xl font-extrabold text-white  hover:bg-white/20 hover:shadow-xl">
            Ver todos os Cursos
          </button>
        </NuxtLink>
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
  <section id="sobre">
    <div class="h-full space-y-2 bg-white px-40 py-20 text-center">
      <p class="text-md font-bold text-amber-500 uppercase">
        Sobre Nós
      </p>
      <h1 class="text-5xl font-extrabold text-black">
        Sobre a ProduterasBR Academy
      </h1>
      <p class="max-auto items-center text-center text-xl text-gray-500">
        Somos uma comunidade de mulheres apaixonadas por produto e tecnologia. Nossa missão é fortalecer, conectar e desenvolver mulheres que atuam com Produtos Digitais, por meio de uma comunidade segura e uma formação prática, promovendo crescimento profissional, protagonismo e impacto no mercado.

      </p>
      <div class=" mt-16 grid  gap-8 md:grid-cols-3">
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
            Sororidade
          </h3>

          <p class="text-gray-400">
            Acreditamos na união entre mulheres como força de transformação.
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
            Espaço Seguro
          </h3>

          <p class="text-gray-400">
            Incentivamos mulheres a ocuparem espaços de decisão e liderança.
          </p>
        </div>
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
            Protagonismo Feminino

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
            Aprendizado Contínuo

          </h3>

          <p class="text-gray-400">
           A evolução faz parte da nossa essência. Aprender é um compromisso constante.
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
             Trocas Reais


          </h3>

          <p class="text-gray-400">
           Valorizamos conversas honestas, experiências práticas e aprendizados compartilhados.
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
             Impacto


          </h3>

          <p class="text-gray-400">
           Trabalhamos para gerar mudanças reais nas carreiras, nos produtos e na sociedade.
          </p>
        </div>
        
        
        
      </div>
    </div>
  </section>
  <section id="cursos">
    <div class="h-full space-y-2 bg-white px-40 py-20 text-start">
      <p class="text-md font-bold text-amber-500 uppercase">
        Nossos Cursos
      </p>

      <h1 class="text-5xl font-extrabold text-black">
        Próximos Encontros
      </h1>
      <div class="flex items-center  justify-between pb-4">
        <p class="max-auto items-center text-start text-xl text-gray-500">
          Conheça nossos cursos e imersões mais populares, criados por especialistas do mercado.
        </p>
        <NuxtLink to="/cursos">
          <button class="bg-cyan border-cyan w-80 rounded-2xl  border-2 px-3 py-1.5 text-xl font-extrabold text-emerald-600  hover:bg-white/20 hover:shadow-xl">
            Ver todos os Cursos
          </button>
        </NuxtLink>
      </div>

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

            <div class="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-700">
              <div>
                <p class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {{ curso.preco }}
                </p>
                <p class="text-xs text-neutral-600 dark:text-neutral-400">
                  ou em até 12x
                </p>
              </div>

              <NuxtLink
                :href="`/cursos/${curso.id}`"
                class="flex h-11 items-center gap-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 px-6 py-2 font-semibold text-white shadow-md transition-all hover:shadow-lg"
              >
                Ver detalhes →
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="quem-somos">
    <div class="h-full space-y-2 bg-white px-40 py-20 text-center">
      <p class="text-md font-bold text-amber-500 uppercase">
        Quem Somos
      </p>
      <h1 class="text-5xl font-extrabold text-black">
        Conheça as Fundadoras
      </h1>
      <p class="max-auto items-center text-center text-xl text-gray-500">
        Profissionais experientes e apaixonadas por desenvolver carreiras em produto.
      </p>

      <div class="mx-auto grid max-w-4xl gap-8 text-left md:grid-cols-2">
        <div
          v-for="person in funders"
          :key="person.name"
          class="group relative flex  flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md"
        >
         <div class="relative h-72 w-full overflow-hidden">
          <img
            :src="person.picture"
            :alt="person.name"
            class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          >
        </div>

          <div class="flex flex-1 flex-col p-6">
            <div class="mb-2 flex gap-2">
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

            <p class="text-muted-foreground mt-4 flex-1 text-sm leading-relaxed">
              {{ person.about }}
            </p>
            <div class="mt-6 flex gap-3">
              <NuxtLink
                :href="person.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-secondary flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-linkedin h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </NuxtLink>

              <NuxtLink
                :href="person.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-secondary flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-instagram h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="final" class="relative overflow-hidden">
    <div class="inset-0 h-full space-y-10 bg-linear-to-br  from-emerald-400  to-cyan-900 p-40 text-center">
      <button class="text-md w-50 rounded-full border bg-amber-500/10 px-2 py-1 font-bold text-amber-500/90 ">
        Vagas Limitadas
      </button>
      <h1 class="text-5xl font-extrabold text-white">
        Pronta para dar o próximo passo na sua carreira?
      </h1>
      <p class="text-xl text-white">
        Junte-se a mais de 500 mulheres que já transformaram suas carreiras com a ProduterasBR Academy.
      </p>
      <div class="space-x-5">
        <button class="w-80 rounded-2xl bg-amber-500 p-3 text-xl font-extrabold text-white  hover:bg-amber-600 hover:shadow-xl">
          Ver Cursos Disponíveis
        </button>
      </div>
    </div>
  </section>
<section id="team" class="my-12">
  <p
    class="font-poppins mb-10 text-2xl bg-black bg-clip-text text-center  font-bold text-transparent md:text-4xl"
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

      <p class="mt-2 flex-1 whitespace-pre-line text-sm text-black">
        {{ person.role }}
      </p>

      <a
        :href="person.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-auto flex justify-center"
      >
        <!-- ícone aqui se quiser -->
      </a>
    </div>
  </div>
</section>


</template>

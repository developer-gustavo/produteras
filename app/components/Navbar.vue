<script setup lang="ts">
const isOpen = ref(false)

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Cursos', to: '/cursos' },
  { name: 'Sobre', to: '/#sobre' },
  { name: 'Contato', to: '/#contato' },

]

const isScrolled = ref(false)

const { y } = useWindowScroll()
watch(y, scrollY => {
  isScrolled.value = scrollY > 10
})
</script>

<template>
  <nav
    class=" font-lato fixed  top-0 left-0 z-50 w-full  bg-white p-3 shadow-xl backdrop-blur-xs" :class="isScrolled
      ? 'bg-white/70 shadow-lg'
      : 'bg-transparent shadow-none'"
  >
    <div class="mx-auto flex  items-center justify-between px-6 py-3">
      <div class="flex items-center space-x-2 ">
        <img src="/produtera.png" alt="Logo" class="size-10">
      </div>
      <div class="flex items-center space-x-14">
        <ul class="font-italico hidden space-x-8 text-base text-gray-500 lg:flex">
          <li v-for="link in navLinks" :key="link.to" class="group relative">
            <NuxtLink :to="link.to" class="transition-transform duration-200 group-hover:scale-110">
              {{ link.name }}
            </NuxtLink>
            <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
        <NuxtLink to="/cursos" class="hidden rounded-lg bg-amber-500 px-5 py-1.5 font-bold text-white shadow transition hover:bg-amber-600 md:inline-block">
          Ver Cursos
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <button class="text-3xl text-orange-400 md:text-4xl" @click="isOpen = !isOpen">
          <span v-if="!isOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>
  </nav>

  <div v-if="isOpen" class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-sm md:hidden">
    <button type="button" class="absolute top-4 right-4 cursor-pointer border-none bg-transparent text-5xl text-orange-400 focus:outline-none" aria-label="Fechar menu" @click="isOpen = false">
      ×
    </button>
    <ul class="flex flex-col items-center gap-8 text-lg font-semibold text-amber-500">
      <li v-for="link in navLinks" :key="link.to" class="group relative">
        <NuxtLink :to="link.to" class="transition hover:text-orange-400" @click="isOpen = false">
          {{ link.name }}
        </NuxtLink>
        <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
      </li>
    </ul>
  </div>
</template>

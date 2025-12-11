<script setup lang="ts">
const route = useRoute()

const { data: curso, error } = await useFetch<Curso>(`/api/cursos/${route.params.id}`)

if(error.value){
  throw createError({ statusCode: 404, message: 'Curso não encontrado' })
}
</script>

<template>
  <section class="px-40 py-40">
    <h1 class="text-4xl font-bold">
      {{ curso!.titulo }}
    </h1>
    <p class="mt-4 text-xl text-gray-600">
      {{ curso!.descricao }}
    </p>

    <img :src="curso!.image" :alt="curso!.titulo" class="mt-6 h-80 w-full rounded-2xl object-cover">

    <div class="mt-8 space-y-2 text-lg text-gray-700">
      <p><strong>Categorias:</strong> {{ curso!.categorias.join(', ') }}</p>
      <p><strong>Tempo:</strong> {{ curso!.tempo }}</p>
      <p><strong>Encontros:</strong> {{ curso!.encontros }}</p>
      <p><strong>Data:</strong> {{ curso!.data }}</p>
      <p><strong>Preço:</strong> {{ curso!.preco }}</p>
    </div>
  </section>
</template>

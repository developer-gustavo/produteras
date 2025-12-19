<script setup lang="ts">
const route = useRoute()
const { email } = route.query
const cursoId = route.params.id

const { data: res } = await useFetch('/api/fetch/check-cadastro', {
  method: 'post',
  body: { mail: email, curso },
})

const liberado = res.value === 'cadastrado'
</script>

<template>
  <iframe
    v-if="liberado"
    :src="curso.iframe"
    class="h-[600px] w-full"
  />
  <p v-else>
    Acesso não liberado
  </p>
</template>

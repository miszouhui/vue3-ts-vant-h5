<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import { onMounted } from 'vue'
import { getList } from '@/api/homeView'
import type { IHomeView } from '@/types/homeView'

onMounted(() => {
  const params: IHomeView = {
    pageSize: 10,
    pageNumber: 1,
  }
  getList(params).then(res => {
    console.log('res', res)
  })
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

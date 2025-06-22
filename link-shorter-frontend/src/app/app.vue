<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './ui/app-header.vue'

onMounted(() => {
  console.warn('API URL:', import.meta.env.VITE_API_URL)
})
</script>

<template>
  <AppHeader />
  <main class="py-4">
    <RouterView />
  </main>
</template>

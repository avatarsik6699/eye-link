<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useLocalStorageTheme } from '../hooks/useLocalStorageTheme.ts'

const { theme, toggleTheme } = useLocalStorageTheme()
</script>

<template>
  <Button variant="outline" size="icon" @click="toggleTheme">
    <Sun v-if="theme === 'dark'" class="size-4" />
    <Moon v-else class="size-4" />
  </Button>
</template>

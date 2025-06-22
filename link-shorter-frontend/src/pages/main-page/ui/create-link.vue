<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCreateLink, useFindAllLinks } from '@/shared/api'

const INITIAL_INPUT_VALUE = ''

const client = useQueryClient()
const input = ref(INITIAL_INPUT_VALUE)
const create = useCreateLink()

function onCreateLink() {
  create.mutate({ url: input.value }, { onSuccess: async () => {
    await client.invalidateQueries({ queryKey: useFindAllLinks.getKey(), exact: false })
    input.value = INITIAL_INPUT_VALUE
  } })
}
</script>

<template>
  <Input v-model="input" type="text" placeholder="Enter link..." />
  <Button class="cursor-pointer hover:bg-neutral-200 hover-scale" variant="secondary" @click="onCreateLink">
    Create
  </Button>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

interface Props {
  initialText: string
  a?: number
}

interface Events {
  (e: 'update:modelValue', value: number): void // для v-model
  (e: 'change', value: number): void // кастомное событие
}

const props = defineProps<Props>()
const emit = defineEmits<Events>()
const kekModel = defineModel<number>({ required: true })
// eslint-disable-next-line unused-imports/no-unused-vars
function click(value: number) {
  emit('change', value)
}
</script>

<template>
  <div class="bla">
    {{ props.initialText || "fallback text" }}
  </div>

  <input v-model="kekModel" type="text">
  <Button>Click me</Button>
</template>

<style scoped>
.bla {
  color: red;
}
</style>

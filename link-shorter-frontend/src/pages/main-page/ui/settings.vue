<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { Edit, Edit2, EllipsisVertical, Trash2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useDeleteLink, useFindAllLinks } from '@/shared/api/index.ts'

type Props = {
  linkId: number
}

const props = defineProps<Props>()
const client = useQueryClient()
const remove = useDeleteLink()

function onRemove() {
  remove.mutate({ linkId: props.linkId }, { onSuccess: async () => {
    await client.invalidateQueries({ queryKey: useFindAllLinks.getKey(), exact: false })
  } })
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="p-1!" variant="ghost">
        <EllipsisVertical />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-0 min-w-0">
      <DropdownMenuItem class="p-1 min-w-0" @click="onRemove">
        <Trash2 class="shrink-0 size-4" />
        <span class="text-sm">Remove</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator class="m-0" />
      <DropdownMenuItem class="p-1 min-w-0">
        <Edit class="shrink-0 size-4" />
        <span class="text-sm">Edit</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped>

</style>

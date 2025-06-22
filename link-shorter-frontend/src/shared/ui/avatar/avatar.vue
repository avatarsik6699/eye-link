<script setup lang="ts">
import type { AvatarImageProps } from 'reka-ui'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  src: AvatarImageProps['src']
  alt?: AvatarImageProps['alt']
}

const props = defineProps<Props>()
</script>

<template>
  <Avatar>
    <AvatarFallback>
      <Skeleton class="rounded-full" />
    </AvatarFallback>
    <AvatarImage :src="props.src" :alt="props.alt" />
  </Avatar>
</template>

<style scoped></style>

<script setup lang="ts">
import { Calendar1, CornerDownRight } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Separator from '@/components/ui/separator/Separator.vue'
import Avatar from '@/shared/ui/avatar/avatar.vue'
import NavLink from '@/shared/ui/nav-link/nav-link.vue'
import Settings from './settings.vue'

type User = {
  avatar: string
  firstName: string
  secondName: string
  login: string
  email: string
}

type Props = {
  id: number
  icon?: string
  creator: User
  description?: string
  destinationURL: string
  shortURL: string
  createdAt: string
  updatedAt: string
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  icon: '',
})

export type { Props as LinkItemProps }
</script>

<template>
  <Card class="rounded-lg bg-card text-card-foreground shadow-sm">
    <CardHeader class="flex gap-2 items-start">
      <div class="flex items-center min-w-0 gap-x-2 grow">
        <Avatar :src="props.icon" alt="dest-url-icon" />
        <div class="min-w-0 flex-1">
          <NavLink as-external :to="`http://localhost:8081/link/goto/${props.shortURL}`">
            {{ props.shortURL }}
          </NavLink>
          <div class="flex items-center gap-x-1">
            <CornerDownRight class="flex-shrink-0 size-3" />
            <span class="truncate text-xs">{{ props.destinationURL }}</span>
          </div>
        </div>
      </div>
      <Settings :link-id="props.id" />
    </CardHeader>
    <CardContent class="text-xs">
      {{ props.description }}
    </CardContent>
    <CardFooter class="flex gap-2 text-xs items-center">
      <div class="flex items-center gap-1">
        <Calendar1 class="flex-shrink-0 size-3" />
        <time>{{ props.createdAt }}</time>
      </div>
      <Separator orientation="vertical" />
      <span class="text-xs">{{ props.creator.login }}</span>
    </CardFooter>
  </Card>
</template>

<style scoped></style>

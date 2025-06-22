<script setup lang="ts">
import { computed, toValue } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button/index.ts'
import { Input } from '@/components/ui/input/index.ts'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/index.ts'
import { useFindAllLinks } from '@/shared/api/index.ts'
import CreateLink from './ui/create-link.vue'
import LinkItem, { type LinkItemProps } from './ui/link-item.vue'

const route = useRoute()
const router = useRouter()
// eslint-disable-next-line no-console
console.log(toValue(route))
// Получаем текущий таб из URL
const currentTab = computed(() => {
  // Убираем начальный слеш и получаем первый сегмент пути
  return route.name?.toString() || 'links'
})

// Обработчик изменения таба
function handleTabChange(payload: string | number) {
  router.push({ name: String(payload) })
}

const { isPending, isError, error, data: links } = useFindAllLinks({
  select: ({ data }): LinkItemProps[] => data.items.map(item => ({
    id: item.id,
    destinationURL: item.url,
    shortURL: item.hash,
    createdAt: item.created_at || new Date().toISOString(),
    updatedAt: item.updated_at || new Date().toISOString(),
    description: 'Example link 1 Example link 1 Example link 1 Example link 1 Example link 1',
    icon: '', // Add if available from API
    creator: {
      avatar: 'https://example.com/avatar1.png',
      firstName: 'John',
      secondName: 'Doe',
      login: 'johndoe',
      email: 'john@example.com',
    },
  })),
})
</script>

<template>
  <div class="container-padding">
    <section class="flex justify-between mb-8">
      <Tabs :model-value="currentTab" @update:model-value="handleTabChange">
        <TabsList>
          <TabsTrigger value="links">
            links
          </TabsTrigger>

          <TabsTrigger value="analytics">
            analytics
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div class="flex gap-1 w-2/4">
        <CreateLink />
        <!-- <Input type="text" placeholder="Enter link..." />
        <Button class="cursor-pointer hover:bg-neutral-200 hover-scale" variant="secondary">
          Создать
        </Button> -->
      </div>
    </section>

    <span v-if="isPending">Loading...</span>
    <span v-else-if="isError">Error: {{ error }}</span>
    <section v-else class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LinkItem v-for="link in links" :key="link.id" v-bind="link" />
    </section>

    <!-- <RouterView /> -->
  </div>
</template>

<style scoped></style>

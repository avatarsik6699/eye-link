<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'

type ExternalUrl = `http://${string}` | `https://${string}` | `//${string}`
type InternalUrl = `/${string}` | Exclude<RouterLinkProps['to'], string>

type ExternalLinkProps = {
  asExternal?: true
  asChild?: never
  to: ExternalUrl // to для внешней ссылки
}

type InternalLinkProps = {
  asExternal?: false
  asChild?: boolean
  to: InternalUrl // to для роутер-линка
}

type Props = ExternalLinkProps | InternalLinkProps

const props = withDefaults(defineProps<Props>(), {
  asChild: false,
  asExternal: undefined,
})

const isExternalLink = computed(() => {
  return Boolean(props.asExternal)
})

const isInternalLink = computed(() => {
  return !isExternalLink.value
})

// Вычисляемое свойство для URL
const to = computed(() => {
  if (isExternalLink.value) {
    return props.to as ExternalUrl
  }
  return props.to as InternalUrl
})
</script>

<template>
  <!-- Роутер-линк -->
  <RouterLink
    v-if="isInternalLink && !props.asChild"
    :to="to"
    active-class="nav-link--active"
    class="nav-link"
  >
    <slot />
  </RouterLink>

  <!-- Роутер-линк с asChild -->
  <RouterLink
    v-else-if="isInternalLink && props.asChild"
    :to="to"
    v-bind="$attrs"
  >
    <slot />
  </RouterLink>

  <!-- Обычная ссылка -->
  <a
    v-else
    :href="to"
    :target="isExternalLink ? '_blank' : undefined"
    :rel="isExternalLink ? 'noopener noreferrer' : undefined"
    class="nav-link"
  >
    <slot />
  </a>
</template>

<style scoped>
@reference "#app.css";

.nav-link {
  @apply text-blue-400 hover:text-blue-500 active:text-blue-600;
  @apply focus:outline-none focus:underline focus:decoration-blue-400/20 focus:underline-offset-4;
}

.nav-link--active {
  @apply text-blue-600 font-semibold underline decoration-blue-400/20 underline-offset-4;
}
</style>

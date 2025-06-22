<script setup lang="ts">
import Avatar from '@/shared/ui/avatar/avatar.vue'
import NavLink from '@/shared/ui/nav-link/nav-link.vue'
import ThemeToggle from './theme-toggle.vue';
</script>

<template>
  <header class="header">
    <div class="header_container container-padding">
      <div class="flex items-center justify-between py-2">
        <NavLink as-child to="/">
          <h1 class="header_title">
            Short Linker
          </h1>
        </NavLink>

        <nav class="flex items-center space-x-4">
          <ThemeToggle />
          <Avatar src="" />
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference "#app.css";

.header {
  @apply sticky top-0 z-50 w-full shadow-xs;
}

.header_title {
  @apply hover:text-primary/90 transition-colors cursor-pointer;
}
</style>

import { ref, watch } from "vue";

type Theme = "light" | "dark";

export function useLocalStorageTheme() {
  // TODO: add safe ls/json util
  const theme = ref<Theme>(localStorage.getItem('theme') as Theme || 'light')

  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }, { immediate: true })

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme
  }
}
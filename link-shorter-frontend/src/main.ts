import { VueQueryPlugin } from '@tanstack/vue-query'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import router from '@/shared/router'
import App from './app/app.vue'
import './app/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')

import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import 'virtual:windi.css'

const routes = setupLayouts(generatedRoutes)
console.log(routes)

export const app = createApp(App)

app.use(createRouter({ 
    history: createWebHistory(),
    routes,
}))

app.use(createHead())

app.mount('#app')

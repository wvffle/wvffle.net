import vitedge from 'vitedge'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import 'virtual:windi.css'

// Workaround for Vite 2.6.x
// https://github.com/vitejs/vite/issues/5270
if (import.meta.hot) {
  globalThis.__hot = import.meta.hot
}

const routes = setupLayouts(generatedRoutes)
console.log(routes)

export default vitedge(
  App,
  { routes },
  ({ app, router, isClient, initialState }) => {
    // Custom setup hook.
    // E.g. set initialState in a store, install plugins, etc.
  }
)


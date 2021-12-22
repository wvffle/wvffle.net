import { defineConfig } from 'vite'
import vitedgePlugin from 'vitedge/plugin.js'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import windicss from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitedgePlugin(), 
    vue(), 
    pages(),
    layouts.default(),
    windicss()
  ]
})

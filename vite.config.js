
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  root: '.',

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: 'assets/dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        service: resolve(__dirname, 'service.html'),
        feature: resolve(__dirname, 'feature.html'),
        countries: resolve(__dirname, 'countries.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
})

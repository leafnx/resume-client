import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  resolve: {
    alias: [
      { find: 'styles', replacement: '/src/styles' },
      { find: 'components', replacement: '/src/components' },
      { find: 'pages', replacement: '/src/pages' }
    ],
  },
})

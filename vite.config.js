import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  })],
  build: {
    rollupOptions: {
      external: ['@emotion/react/jsx-runtime'],
    },
  },
})

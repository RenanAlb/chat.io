import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Diretório onde a build será gerada
    rollupOptions: {
      input: 'index.html', // Caminho para o arquivo de entrada
    },
    base: '/',
  },
})

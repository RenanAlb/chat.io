import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Diretório onde a build será gerada
    rollupOptions: {
      input: '/src/main.jsx', // Caminho para o arquivo de entrada
    },
  },
});

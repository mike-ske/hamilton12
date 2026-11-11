import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { proxy: { '/api': { target: process.env.LARAVEL_API_ORIGIN || 'http://127.0.0.1:8000', changeOrigin: true } } },
  build: { rollupOptions: { input: { index: resolve(process.cwd(), 'index.html') } } }
});

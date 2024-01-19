import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'axios',
            'immer',
            'dayjs',
            'zustand',
            'react',
            'react-dom',
            'react-top-loading-bar',
            'react-router-dom',
            'react-error-boundary',
            '@tanstack/react-query'
          ],
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    }
  }
})

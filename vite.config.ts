import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // CSS parçalamayı aktif et
    cssCodeSplit: true, 
    rollupOptions: {
      output: {
        // Ağır kütüphaneleri ayırarak ana CSS'in şişmesini önle
        manualChunks: {
          'motion': ['motion/react'],
          'vendor': ['react', 'react-dom'],
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})

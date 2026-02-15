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
    // Performans İyileştirmeleri
    cssCodeSplit: true, // CSS'i sayfalara göre böler (Privacy ve Terms sayfaları ana CSS'i yüklemez)
    cssMinify: 'lightningcss', // Daha hızlı ve verimli CSS sıkıştırma
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        terms: path.resolve(__dirname, 'terms.html'),
      },
      output: {
        // Dosya isimlerini daha düzenli hale getirir
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

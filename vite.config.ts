import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
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
    // 1. KRİTİK AYAR: 20KB altındaki CSS ve resimleri doğrudan JS içine gömer.
    // Bu sayede "render-blocking css" hatası tamamen kalkar.
    assetsInlineLimit: 25000, 
    
    // 2. CSS'i ayrı dosya yapma, ana JS dosyasına dahil et.
    cssCodeSplit: false, 

    // 3. Modern ve hızlı sıkıştırma.
    cssMinify: 'lightningcss',
    
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        terms: path.resolve(__dirname, 'terms.html'),
      },
      output: {
        // Dosya isimlerini hash'leyerek önbellek (cache) çakışmalarını önler
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        
        // Kütüphaneleri parçalayarak ana dosya yükünü dengeler
        manualChunks: {
          'vendor-ui': ['react', 'react-dom'],
          'vendor-animations': ['motion/react'],
        }
      },
    },
  },
  // SVG ve CSV dosyalarını tanımaya devam et
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

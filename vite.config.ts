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
    // 1. CSS'i sayfalara göre böler, ana dosya yükünü hafifletir
    cssCodeSplit: true,
    // 2. Daha agresif ve modern bir CSS sıkıştırma kullanır
    cssMinify: 'lightningcss',
    // 3. Küçük resimleri/fontları base64 yaparak istek sayısını azaltır (4kb altı)
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        terms: path.resolve(__dirname, 'terms.html'),
      },
      output: {
        // 4. Kütüphaneleri parçalara ayırarak ana (main) JS dosyasını küçültür
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion/react'],
          'vendor-icons': ['lucide-react'],
        },
        // 5. Dosya isimlerine hash ekleyerek cache (önbellek) sorunlarını çözer
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  // SVG ve CSV dosyalarını projeye dahil eder
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

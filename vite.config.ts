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
    target: 'esnext', // Modern tarayıcılar için optimize et
    cssCodeSplit: true, // CSS'i parçala (Lazy load ile uyumlu çalışır)
    rollupOptions: {
      output: {
        // Otomatik paketleme (Vendor splitting)
        manualChunks(id) {
          // React ve DOM kütüphanelerini ayrı bir dosyaya al
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Framer Motion çok büyükse onu ayır
          if (id.includes('node_modules/motion')) {
            return 'motion-vendor';
          }
        },
      },
    },
  },
})

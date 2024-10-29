// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/send-email': {
        target: 'http://localhost:3000',  // Remplace par le port où tourne Node.js
        changeOrigin: true,
      }
    }
  }
});

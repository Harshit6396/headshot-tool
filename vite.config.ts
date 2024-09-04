import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/sq-headshot-tool-app.min.js`,
        chunkFileNames: `assets/sq-headshot-tool-common.min.js`,
        assetFileNames: `assets/sq-headshot-tool-app.min.[ext]`,
      },
    },
  },
})

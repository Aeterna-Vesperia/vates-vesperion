import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist',
  },
  ssr: {
    // Inline react-slick in the SSR bundle to avoid CJS/ESM interop issues
    noExternal: ['react-slick', 'enquire.js'],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true,
  },
}))
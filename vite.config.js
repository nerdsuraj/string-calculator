import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    environment: 'jsdom',  // required for React-Testing-Library
    globals: true,         // lets you omit imports for describe/it/expect
    setupFiles: './src/setupTests.ts',
    css: true,            
  },
})

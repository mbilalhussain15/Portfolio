import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
   build: {
    outDir: 'build',  // Ensure the build output is directed to the right folder
  }
})

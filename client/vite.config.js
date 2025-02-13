import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ],
  base: process.env.VITE_CLIENT_APP_URL || 'http://localhost:5173', 
  server: {
    port: process.env.VITE_PORT || 5173, 
  },
})

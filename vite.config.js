import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-react-website',
  server: {
    origin: 'http://jaedynkeister.com',
  },
  plugins: [react()]
})

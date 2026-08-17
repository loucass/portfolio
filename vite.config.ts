import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at https://loucass.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})

import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const CSP =
  "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; style-src-elem 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'none'; connect-src 'self';"

/** Injects the CSP meta tag into production builds only (dev needs inline scripts). */
function cspMeta(): Plugin {
  return {
    name: 'portfolio-csp',
    apply: 'build',
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'meta',
            attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP },
            injectTo: 'head',
          },
        ],
      }
    },
  }
}

// Deployed at https://loucass.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), cspMeta()],
})

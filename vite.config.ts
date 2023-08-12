import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Shopify Favicon Changer',
  version: '0.0.1',
  action: {
    default_popup: 'index.html',
    default_icon: 'icon.png'
  },
  content_scripts: [
    {
      js: ['src/content.tsx'],
      matches: ['https://*.shopify.com/*', 'https://example.com/*']
    },
  ],
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })]
})

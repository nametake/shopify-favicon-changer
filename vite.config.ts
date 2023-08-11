import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Shopify Favicon Changer',
  version: '0.0.1',
  action: {
    default_popup: 'index.html',
  },
  content_scripts: [
    {
      js: ['src/content.tsx'],
      matches: ['https://github.com/*']
    },
  ],
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })]
})

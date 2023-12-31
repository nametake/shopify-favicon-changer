import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Shopify Favicon Changer',
  version: process.env.RELEASE_VERSION || '0.0.0',
  action: {
    default_popup: 'index.html',
    default_icon: 'icon.png',
  },
  permissions: ['storage'],
  content_scripts: [
    {
      js: ['src/contents/admin.ts'],
      matches: ['https://admin.shopify.com/*'],
      all_frames: true,
    },
    {
      js: ['src/contents/partners.ts'],
      matches: ['https://partners.shopify.com/*'],
      all_frames: true,
    },
    {
      js: ['src/contents/dev.ts'],
      matches: ['https://shopify.dev/*'],
      all_frames: true,
    },
  ],
  web_accessible_resources: [
    {
      resources: ['assets/*.png'],
      matches: [
        'https://admin.shopify.com/*',
        'https://partners.shopify.com/*',
        'https://shopify.dev/*',
      ],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

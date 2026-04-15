import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        pricing: 'pricing.html',
        faq: 'faq.html',
        order: 'order.html',
        admin: 'admin/index.html',
      },
    },
  },
});

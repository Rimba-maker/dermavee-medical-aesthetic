import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  trailingSlash: 'always',
  server: { port: 4321 },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: { strictPort: true },
  },
});

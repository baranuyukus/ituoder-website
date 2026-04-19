// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://baranuyukus.github.io',
  base: isGitHubPages ? '/ituoder-website' : '/',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

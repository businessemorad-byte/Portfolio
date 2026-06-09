import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://businessemorad.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://businessemorad.com/404/',
    }),
  ],
});

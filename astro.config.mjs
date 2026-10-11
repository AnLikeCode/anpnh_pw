// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeEditorial from './src/lib/rehype-editorial.mjs';

/**
 * Deployment settings
 * -------------------
 * The GitHub Actions workflow (.github/workflows/deploy.yml) sets SITE_URL and
 * BASE_PATH automatically from your repository, so it works for both:
 *   - user sites:    https://username.github.io/            (BASE_PATH = /)
 *   - project sites: https://username.github.io/repo-name/  (BASE_PATH = /repo-name)
 *
 * For local builds you can override them, e.g.
 *   SITE_URL=https://username.github.io BASE_PATH=/repo-name npm run build
 */
const site = process.env.SITE_URL || 'https://username.github.io';
const rawBase = process.env.BASE_PATH || '/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, [rehypeEditorial, { base }]],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
      wrap: false,
    },
  },
});

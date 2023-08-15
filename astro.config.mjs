import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import supersub from 'remark-supersub';
import remarkTextr from 'remark-textr';
import remarkToc from 'remark-toc';
import rehypeKatex from 'rehype-katex';
import rehypeMathJaxSvg from 'rehype-mathjax';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './remark-reading-time.mjs';
// import vercel from '@astrojs/vercel/serverless';

import netlify from '@astrojs/netlify/functions';
// import netlify from '@astrojs/netlify/edge-functions';

import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://yikeguo.github.io',
  baseUrl: '/about',
  integrations: [mdx({
    rehypePlugins: [rehypeKatex]
  }), sitemap(), vue()],
  // output: 'static',
  // adapter: netlify(),
  markdown: {
    remarkPlugins: [remarkMath, supersub, remarkTextr, remarkToc, remarkReadingTime],
    rehypePlugins: [rehypeMathJaxSvg]
  }
});

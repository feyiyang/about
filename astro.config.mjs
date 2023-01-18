import { defineConfig } from 'astro/config'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse/lib'
import remarkMath from 'remark-math'
import supersub from 'remark-supersub'
import { remarkExtendedTable } from 'remark-extended-table'
import remarkRehype from 'remark-rehype'
import rehypeResponsiveTables from "rehype-responsive-tables"
import rehypeKatex from 'rehype-katex'
import rehypeMathJaxSvg from 'rehype-mathjax'
import mdx from '@astrojs/mdx'
// import vercel from '@astrojs/vercel/serverless';

import netlify from '@astrojs/netlify/functions'; 
// import netlify from '@astrojs/netlify/edge-functions';

import sitemap from '@astrojs/sitemap';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // site: 'https://example.com',
  integrations: [mdx({
    remarkPlugins: [remarkGfm, remarkParse, remarkMath, supersub],
    rehypePlugins: [remarkRehype, rehypeKatex],
    extendPlugins: false
  }), sitemap(), vue()],
  output: 'server',
  adapter: netlify(),
  markdown: {
  //   // drafts: true,
    remarkPlugins: [remarkMath, supersub],
    rehypePlugins: [rehypeMathJaxSvg],
    extendDefaultPlugins: true,
    // remarkPlugins: [supersub]
  //   gfm: true
  }
});
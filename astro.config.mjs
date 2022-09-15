import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify/functions';
// import netlify from '@astrojs/netlify/edge-functions';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	output: 'server',
  adapter: netlify(),
});

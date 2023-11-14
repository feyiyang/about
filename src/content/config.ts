// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tag: z.array(z.string()),
    pubDate: z.string(),
    draft: z.boolean().default(false),
    blogs: z.array(z.object({link: z.string(), from: z.string()})).default([]),
    description: z.string().default(''),
    titlePre: z.array(z.string()).default([])
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};
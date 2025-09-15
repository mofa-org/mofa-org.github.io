import { z, defineCollection } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const prizeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.number().optional(),
    type: z.string().optional(),
    title: z.string(),
    title_zh: z.string(),
    category: z.string(),
    last_updated: z.string().optional(),
    repositories: z.array(z.string()).optional(),
    total_contributors: z.number().optional(),
  }),
});

export const collections = {
  'docs': docsCollection,
  'blog': blogCollection,
  'prize': prizeCollection,
}; 
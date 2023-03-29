import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    schema: z.object({
        hero: z.boolean().default(false), // applies hero styling
        hidden: z.boolean().default(false), // hides articles from view
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    articles,
};

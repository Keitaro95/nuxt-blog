import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                draft: z.boolean(),
                date: z.date(),
                tag: z.array(z.string())
            })
        })
    }
});
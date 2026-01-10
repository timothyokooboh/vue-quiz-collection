import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    quiz: defineCollection({
      type: "data",
      source: "quiz/*.md",
      schema: z.object({
        _id: z.string(),
        questionType: z.string(),
        explanationType: z.string(),
        category: z.enum(["Vue.js", "Vue router", "Pinia"]),
        difficulty: z.enum(["easy", "medium", "hard"]),
        topic: z.string(),
        options: z.array(
          z.object({
            id: z.string(),
            option: z.string(),
          }),
        ),
        correctOptionId: z.number(),
        referenceLink: z.string().url().optional(),
      }),
    }),
  },
});

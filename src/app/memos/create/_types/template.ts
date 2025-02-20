import { z } from 'zod'

export const templateSchema = z.object({
  templateId: z.number(),
  templateName: z.string(),
  content: z.string(),
  userId: z.string(),
  categories: z.array(z.string()),
  public: z.boolean(),
  preset: z.string(),
})

export const templateListSchema = z.array(templateSchema)

export type Template = z.infer<typeof templateSchema>
export type TemplateList = z.infer<typeof templateListSchema>

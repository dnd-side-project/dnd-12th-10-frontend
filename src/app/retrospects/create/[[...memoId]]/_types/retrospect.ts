import { z } from 'zod'

export const retrospectInfoForm = z.object({
  retrospectType: z.enum(['GROUP', 'PERSONAL']).nullable(),
  templateId: z.number().nullable(),
  groupId: z.string().nullish(),
})

export const retrospectCreateForm = z.object({
  groupId: z.number().optional(),
  title: z.string(),
  content: z.string(),
})

export const retrospectCreateResponse = z.object({
  retrospectId: z.number(),
})

export type RetrospectInfoForm = z.infer<typeof retrospectInfoForm>
export type RetrospectCreateForm = z.infer<typeof retrospectCreateForm>
export type RetrospectCreateResponse = z.infer<typeof retrospectCreateResponse>

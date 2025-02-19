import { z } from 'zod'

export const memoInfoForm = z.object({
  memoType: z.enum(['GROUP', 'PERSONAL']).nullable(),
  templateId: z.number().nullable(),
  group: z.string().optional(),
})

export const memoCreateForm = z.object({
  groupId: z.number().optional(),
  title: z.string(),
  content: z.string(),
})

export const memoCreateResponse = z.object({
  retrospectId: z.number(),
})

export type MemoInfoForm = z.infer<typeof memoInfoForm>
export type MemoCreateForm = z.infer<typeof memoCreateForm>
export type MemoCreateResponse = z.infer<typeof memoCreateResponse>

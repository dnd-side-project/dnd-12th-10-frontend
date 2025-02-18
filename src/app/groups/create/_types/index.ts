import { z } from 'zod'

export const groupCreateSchema = z.object({
  groupName: z.string(),
  introduce: z.string(),
  description: z.string(),
  isPublic: z.boolean(),
  maxNum: z.number(),
  categoryNames: z.array(z.string()),
})

export const groupCreateResponseSchema = z.object({
  groupId: z.number(),
})

export type GroupCreateForm = z.infer<typeof groupCreateSchema>
export type GroupCreateResponse = z.infer<typeof groupCreateResponseSchema>

import { z } from 'zod'

// TODO: 나중에 서버 api 스키마에 맞게 변경 필요
export const groupCreateSchema = z.object({
  groupName: z.string(),
  introduction: z.string(),
  description: z.string(),
  isPublic: z.boolean(),
  numOfMembers: z.number(),
  tags: z.array(z.string()),
})

export type GroupCreateForm = z.infer<typeof groupCreateSchema>

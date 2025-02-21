import { z } from 'zod'

export const userCreateSchema = z.object({
  nickname: z.string(),
  job: z.string(),
  featureKeywordList: z.array(z.string()),
})

export type UserCreateForm = z.infer<typeof userCreateSchema>

import { z } from 'zod'

export const userCreateSchema = z.object({
  nickname: z.string(),
  job: z.string(),
  //Todo: user조회 데이터랑 동기화 필요
  featureKeyword: z.array(z.string()),
})

export type UserCreateForm = z.infer<typeof userCreateSchema>

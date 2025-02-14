import { z } from 'zod'

// TODO: 나중에 서버 api 스키마에 맞게 변경 필요
/** 메모 작성 전 메모 유형을 선택 */
export const memoTypeSelectSchema = z.object({
  memoType: z.enum(['GROUP', 'PERSONAL', 'NONE']).nullable(),
  template: z.string(),
  group: z.string(),
})

export type MemoTypeSelectForm = z.infer<typeof memoTypeSelectSchema>

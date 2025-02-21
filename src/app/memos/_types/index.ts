import { z } from 'zod'

export const commentCreateSchema = z.object({
  retrospectId: z.number(),
  content: z.string(),
})

export const commentCreateResponseSchema = z.object({
  commentId: z.number(),
  userId: z.string(),
  retrospectId: z.number(),
  content: z.string(),
  nickName: z.string(),
  timeMessage: z.string(),
})

export type CommentCreateForm = z.infer<typeof commentCreateSchema>
export type CommentCreateResponse = z.infer<typeof commentCreateResponseSchema>

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
  likeCount: z.number(),
  isAuthor: z.boolean(),
})

/** 댓글 및 답글 작성 형식 */
export type CommentCreateForm = z.infer<typeof commentCreateSchema>
/** 댓글 및 답글 작성 후 응답 형식 */
export type CommentCreateResponse = z.infer<typeof commentCreateResponseSchema>

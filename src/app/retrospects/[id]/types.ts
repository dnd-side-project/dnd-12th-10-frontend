import { z } from 'zod'

export const commentUpdateSchema = z.object({
  content: z.string(),
})

export type CommentUpdateForm = z.infer<typeof commentUpdateSchema>

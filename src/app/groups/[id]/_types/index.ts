import { z } from 'zod'
import { ROLE } from '../_consts'

export const groupSchema = z.object({
  groupId: z.number(),
  groupName: z.string(),
  description: z.string(),
  introduction: z.string(),
  userCount: z.number(),
  recentActString: z.string(),
  categoryNames: z.array(z.string()),
  retrospectCount: z.number(),
  createDate: z.string(),
  role: z.nativeEnum(ROLE),
  isPublic: z.boolean(),
  maxNum: z.number(),
})

export const retrospectSchema = z.object({
  retrospectId: z.number(),
  title: z.string(),
  content: z.string(),
  userName: z.string(),
  timeString: z.string(),
  likeCount: z.number(),
  commentCount: z.number(),
  groupName: z.string(),
  groupId: z.number(),
  showBorder: z.boolean().optional(),
})
export const retrospectListSchema = z.array(retrospectSchema)

export const commentSchema = z.object({
  commentId: z.number(),
  userId: z.string(),
  retrospectId: z.number(),
  content: z.string(),
  nickName: z.string(),
  timeMessage: z.string(),
  likeCount: z.number(),
  isAuthor: z.boolean(),
})
export const commentListSchema = z.array(commentSchema)

export const replyListSchema = z.array(
  z.object({
    commentId: z.number(),
    userId: z.string(),
    retrospectId: z.number(),
    content: z.string(),
    nickName: z.string(),
    timeMessage: z.string(),
  }),
)

export const groupJoinSchema = z.object({
  groupId: z.string(),
})

export const gropJoinReponseSchema = z.object({
  userId: z.string(),
  groupId: z.number(),
})

export type Group = z.infer<typeof groupSchema>
export type RetrospectList = z.infer<typeof retrospectListSchema>
export type Retrospect = z.infer<typeof retrospectSchema>
export type Comment = z.infer<typeof commentSchema>
export type CommentList = z.infer<typeof commentListSchema>
export type ReplyList = z.infer<typeof replyListSchema>
export type GroupJoin = z.infer<typeof groupJoinSchema>
export type GroupJoinResponse = z.infer<typeof gropJoinReponseSchema>

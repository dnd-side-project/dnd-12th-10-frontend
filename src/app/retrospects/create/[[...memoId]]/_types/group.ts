import { z } from 'zod'

export const getMyGroupListSchema = z.array(
  z.object({
    groupId: z.number(),
    groupName: z.string(),
    description: z.string(),
    introduction: z.string(),
    userCount: z.number(),
    recentActString: z.string(),
    categoryNames: z.array(z.string()),
    retrospectCount: z.number(),
  }),
)

export type MyGroupList = z.infer<typeof getMyGroupListSchema>

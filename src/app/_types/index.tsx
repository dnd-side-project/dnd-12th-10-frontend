export interface Group {
  groupId: number
  groupName: string
  description: string
  introduction: string
  userCount: number
  retrospectCount: number
  recentActString: string
  categoryNames: string[]
}

// Todo: 위치 이동 필요
export interface Retrospect {
  retrospectId: number
  title: string
  content: string
  userName: string
  timeString: string
  likeCount: number
}

export interface PopularGroup {
  groupResponseDto: Group
  retrospectResponseDto: Retrospect
}

export interface Memo {
  memoId: number
  userId: string
  title: string
  updateTime: string
  content: string
  categoryNames: string[]
  groupId: number
  templateId: number
}

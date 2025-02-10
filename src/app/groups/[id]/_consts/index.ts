interface Group {
  groupName: string
  introduction: string
  tags: string[]
  isPublic: boolean
  numOfMembers: number
  leaderName: string
  description: string
  numOfMemos: number
  createdAtGroup: string
  latestUpdateTime: string
  memoList: MemoItem[]
  roll: 'LEADER' | 'MEMBER' | null
}
interface MemoItem {
  title: string
  nickname: string
  createdAt: string
  content: string
  tags: string[]
  numOfLikes: number
  numOfComments: number
}
const MEMO_LIST: MemoItem[] = [
  {
    title: '하이루',
    nickname: '이준석석',
    createdAt: '1시간 전',
    content:
      '✔ Keep 회사 직원용 메신저를 혼자 개발하면서 사용자 피드백을 적극 반영해 UI 개선 작업을 성공적으로 진행했고, Flutter, Node.js, MongoDB 같은 기술들을 활용하며 많은 성장을 이뤘습니다. 특히 팀원들과 협업이 잘 이루어져 프로젝트 진행이 순조로웠던 점도 큰 성과로 느껴졌습니다.\n' +
      '\n' +
      '✔ Problem 디자인 시스템 문서화 작업이 예상보다 오래 걸려 일정이 지연되는 상황이 있었고, 모바일 최적화 과정에서 일부 레이아웃이 깨지는 문제가 발생해 ...',
    tags: ['태그1', '태그2'],
    numOfLikes: 6,
    numOfComments: 6,
  },
  {
    title: '하이루',
    nickname: '이준석석',
    createdAt: '1시간 전',
    content: 'asdasdasdas',
    tags: ['태그1', '태그2'],
    numOfLikes: 6,
    numOfComments: 6,
  },
]

export const GROUP_DETAIL: Group = {
  groupName: '개발자 모임',
  introduction:
    '개발자들의 인사이트와 경험을 나누는 공간! 함께 회고하며 성장하고, 더 나은 코드를 만들어가요. 💡',
  tags: ['개발', '프론트엔드', '백엔드'],
  numOfMembers: 1,
  leaderName: '이준석',
  description:
    '안녕하세요! 개발자 회고 모임에 오신 걸 환영합니다! 😊\n' +
    '여기는 개발자들이 서로의 경험을 나누고, 배운 점을 공유하며 함께 성장하는 공간이에요.\n' +
    ' 혼자만의 기록이 아닌, 다른 개발자들과의 피드백과 소통을 통해 더 큰 인사이트를 얻을 수 있답니다!\n' +
    '\n' +
    '모임에서 나눌 이야기들\n' +
    '삽질 경험: 내가 겪은 에러와 문제 해결 과정 공유하기!\n' +
    '프로젝트 성공담: 야근 끝에 런칭된 서비스의 뒷이야기!\n' +
    '새로운 기술 도입 후기: React, Next.js, Serverless, 뭐든 좋아요!\n' +
    '개발자 성장기: 주니어에서 미드레벨로 성장하며 배운 점들!\n' +
    '\n' +
    '추천 포인트\n' +
    '회고 템플릿 제공: 회고가 막막하다면 질문 가이드로 쉽게 작성!\n' +
    '다양한 개발자 네트워킹: 프론트엔드, 백엔드, 데이터 엔지니어까지 모두 모였어요!\n' +
    '진심 어린 피드백: 다른 개발자들과 공감하고 성장할 기회를 잡아보세요.\n' +
    '\n' +
    '지금 바로 가입하고, 우리랑 함께 회고하면서 성장해봐요! 🚀',
  numOfMemos: 0,
  createdAtGroup: '2024년 2월 9일',
  latestUpdateTime: '',
  memoList: MEMO_LIST,
  isPublic: true,
  roll: 'MEMBER',
}

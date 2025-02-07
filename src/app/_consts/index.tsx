// 목 데이터 (TODO: api 연결해서 받아오기)

export type MyGroup = {
  id: number
  groupName: string
  numOfMembers: number
  numOfMemos: number
  latestUpdateTime: string
}

export type Template = {
  id: number
  title: string
  description: string
  tags: string[]
}

export type PopularGroup = {
  id: number
  tags: string[]
  title: string
  numOfMembers: number
}

export type RecommendedGroup = {
  id: number
  tags: string[]
  title: string
  description: string
  numOfMembers: number
}

export const MY_GROUPS: MyGroup[] = [
  {
    id: 1,
    groupName: '모임명',
    numOfMembers: 50,
    numOfMemos: 24,
    latestUpdateTime: '1시간 전',
  },
  {
    id: 2,
    groupName: '모임명',
    numOfMembers: 50,
    numOfMemos: 24,
    latestUpdateTime: '1시간 전',
  },
  {
    id: 3,
    groupName: '모임명',
    numOfMembers: 50,
    numOfMemos: 24,
    latestUpdateTime: '1시간 전',
  },
]

export const POPULAR_MEMO = {
  title: '글 제목',
  nickname: '작성자 닉네임',
  latestUpdateTime: '1시간 전',
  content: (
    <p>
      ✔ Keep
      <br />
      회사 직원용 메신저를 혼자 개발하면서 사용자 피드백을 적극 반영해 UI 개선
      작업을 성공적으로 진행했고, Flutter, Node.js, MongoDB 같은 기술들을
      활용하며 많은 성장을 이뤘습니다. 특히 팀원들과 협업이 잘 이루어져 프로젝트
      진행이 순조로웠던 점도 큰 성과로 느껴졌습니다. <br />
      <br />✔ Problem <br />
      디자인 시스템 문서화 작업이 예상보다 오래 걸려 일정이 지연되는 상황이
      있었고, 모바일 최적화 과 ...
    </p>
  ),
}

export const TEMPLATE_LIST: Template[] = [
  {
    id: 1,
    title: '자유 구성',
    description: '자유롭게 회고를 작성하실 수 있는 템플릿입니다.',
    tags: ['일반'],
  },
  {
    id: 2,
    title: 'KPT',
    description:
      'Keep, Problem, Try의 약자로 Keep은 잘 한 것, Problem은 아쉬운 것, Try는 앞으로 시도해볼 것을 적습니다.',
    tags: ['일반'],
  },
  {
    id: 3,
    title: '4L',
    description:
      'Liked : 좋았던 점은 무엇인가? Lacked : 아쉬웠던 점, 부족한 점은 무엇인가? Learned : 배운 점은 무엇인가? Longed for : 앞으로 바라는 것은 무엇인가?',
    tags: ['일반'],
  },
  {
    id: 4,
    title: 'UXUI 디자이너',
    description:
      '주요 질문 4개로 구성되어있습니다. UXUI 디자이너가 회고할 때 주로 많이 하는 질문들로 구성되어있습니다.',
    tags: ['디자인'],
  },
]

export const RECOMMENDED_GROUP_LIST: RecommendedGroup[] = [
  {
    id: 1,
    tags: ['모임 태그', '모임 태그'],
    title: '모임명',
    description:
      '(한 줄 소개가 들어갑니다) 개발자들의 인사이트와 경험을 나누는 공간입니다! 함께 회고하며 성장하고, 더 나은 코드를 만들어가봅시다!',
    numOfMembers: 50,
  },
  {
    id: 2,
    tags: ['모임 태그', '모임 태그'],
    title: '모임명',
    description:
      '(한 줄 소개가 들어갑니다) 개발자들의 인사이트와 경험을 나누는 공간입니다! 함께 회고하며 성장하고, 더 나은 코드를 만들어가봅시다!',
    numOfMembers: 50,
  },
  {
    id: 3,
    tags: ['모임 태그', '모임 태그'],
    title: '모임명',
    description:
      '(한 줄 소개가 들어갑니다) 개발자들의 인사이트와 경험을 나누는 공간입니다! 함께 회고하며 성장하고, 더 나은 코드를 만들어가봅시다!',
    numOfMembers: 50,
  },
]

export const POPULAR_GROUP_LIST: PopularGroup[] = [
  {
    id: 1,
    tags: ['개발자', '프론트엔드'],
    title: '0.1%씩 성장하는 개발자',
    numOfMembers: 40,
  },
  {
    id: 2,
    tags: ['디자인', 'UXUI'],
    title: '모임명',
    numOfMembers: 40,
  },
  {
    id: 3,
    tags: ['일반', '사이드프로젝트'],
    title: '모임명',
    numOfMembers: 40,
  },
]

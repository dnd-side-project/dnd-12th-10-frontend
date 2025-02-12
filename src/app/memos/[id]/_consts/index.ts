interface MemoDetail {
  groupName: string
  roll: 'Member' | 'Leader' | null
  title: string
  tags: string[]
  author: string
  latestUpdateTime: string
  description: string
  numOfLikes: number
  numOfComments: number
}

export const MEMO_DETAIL: MemoDetail = {
  groupName: '모임명',
  roll: 'Member',
  title: '글제목',
  tags: ['tag1', 'tag2'],
  author: '작성자',
  latestUpdateTime: '20일 전',
  description:
    '✔ Keep 회사 직원용 메신저를 혼자 개발하면서 사용자 피드백을 적극 반영해 UI 개선 작업을 성공적으로 진행했고, Flutter, Node.js, MongoDB 같은 기술들을 활용하며 많은 성장을 이뤘습니다. 특히 팀원들과 협업이 잘 이루어져 프로젝트 진행이 순조로웠던 점도 큰 성과로 느껴졌습니다.\n' +
    '\n' +
    '✔ Problem 디자인 시스템 문서화 작업이 예상보다 오래 걸려 일정이 지연되는 상황이 있었고, 모바일 최적화 과정에서 일부 레이아웃이 깨지는 문제가 발생해 추가적인 수정 작업이 필요했습니다. 또한, MongoDB를 사용하면서 쿼리 코스트를 효율적으로 개선하는 데 어려움을 겪고 있는 상황입니다.\n' +
    '\n' +
    '✔ Try 디자인 시스템 문서화를 더 효율적으로 진행할 수 있도록 작업 템플릿을 제작해 시간을 절약하려고 하고, 모바일 테스트 단계를 강화해 레이아웃 깨짐 문제를 사전에 방지하려고 합니다. 또한, 비관계형 DB 활용과 관련된 스터디를 진행해 MongoDB 쿼리 코스트 개선 방안을 찾아내고 이를 프로젝트에 적용할 계획입니다.',
  numOfLikes: 0,
  numOfComments: 0,
}

export const COMMENT_LIST = [
  {
    id: '1',
    content: '좋은 글 잘 읽었습니다.',
    author: '개발의 신',
    latestUpdateTime: '2일전',
  },
  {
    id: '2',
    content: '좋은 글 잘 읽었습니다.',
    author: '개발의 신',
    latestUpdateTime: '2일전',
  },
]

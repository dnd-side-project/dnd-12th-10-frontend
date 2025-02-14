import Link from 'next/link'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'

// Todo: 모임 가입 이벤트를 위해 group id도 전달 받아야 할 듯
interface GroupInfoProps {
  groupName: string
  roll: 'Leader' | 'Member' | null
}
/** 페이지 상단 (모임명, 가입 or 글쓰기 버튼) 영역 */
const GroupInfo = ({ groupName, roll }: GroupInfoProps) => {
  return (
    <div className='flex justify-between'>
      <span className='text-title01 text-gray-700'>{groupName}</span>
      {roll ? <WriteButton /> : <JoinButton />}
    </div>
  )
}
export default GroupInfo

const WriteButton = () => (
  <Link href=''>
    <Button color='primary' variant='subtle' size='medium'>
      <Icon name='edit' size={20} className='stroke-blue-500 mr-2' />
      글쓰기
    </Button>
  </Link>
)

const JoinButton = () => (
  <Button color='primary' variant='subtle' size='medium'>
    모임 가입하기
  </Button>
)

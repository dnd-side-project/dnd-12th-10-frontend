import Link from 'next/link'
import { Group } from '../_types'
import { Icon } from '@/components/Icon'
import { URL_PATH } from '@/consts/urls'
import { Dropdown as DropdownHero } from '@heroui/dropdown'
import { DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

/** 모임 액션 드롭다운 */
const GroupActionsDropdown = ({
  role,
  groupId,
}: {
  role: Group['role']
  groupId: number
}) => {
  const isLeader = role === 'LEADER'

  return (
    <DropdownHero>
      <DropdownTrigger>
        <button className='ml-auto h-fit'>
          <Icon name='more' className='fill-gray-400' size={20} />
        </button>
      </DropdownTrigger>
      {isLeader ? <LeaderMenu groupId={groupId} /> : <MemberMenu />}
    </DropdownHero>
  )
}

export default GroupActionsDropdown

const LeaderMenu = ({ groupId }: { groupId: number }) => {
  // const deleteGroup = () => {}

  return (
    <DropdownMenu aria-label='Leader Actions Menu'>
      <DropdownItem
        key='update'
        as={Link}
        href={URL_PATH.GroupUpdate + `/${groupId}`}
      >
        수정하기
      </DropdownItem>
      <DropdownItem key='delete' color='danger'>
        모임 삭제하기
      </DropdownItem>
    </DropdownMenu>
  )
}

const MemberMenu = () => {
  return (
    <DropdownMenu aria-label='Member Actions Menu'>
      <DropdownItem key='copy'>링크 복사하기</DropdownItem>
      <DropdownItem key='leave' color='danger'>
        탈퇴하기
      </DropdownItem>
    </DropdownMenu>
  )
}

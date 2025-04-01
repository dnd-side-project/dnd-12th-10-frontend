import Link from 'next/link'
import { Group } from '../_types'
import { Icon } from '@/components/Icon'
import { URL_PATH } from '@/consts/urls'
import { Dropdown as DropdownHero } from '@heroui/dropdown'
import { DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'
import useDeleteGroupMutation from '@/app/groups/[id]/_queries/useDeleteGroupMutation'
import { useEffect } from 'react'

/** 모임 액션 메뉴(수정, 삭제) 드롭다운 */
const GroupActionsDropdown = ({
  role,
  groupId,
  openDeleteGroupConfirm,
  confirmResponse,
}: {
  role: Group['role']
  groupId: number
  openDeleteGroupConfirm: VoidFunction
  confirmResponse: boolean | undefined
}) => {
  const isLeader = role === 'LEADER'
  const { mutate: deleteGroupMutate } = useDeleteGroupMutation(String(groupId))

  useEffect(() => {
    if (confirmResponse) {
      // Todo: 삭제하는 동안 로딩 상태 표시 고민
      deleteGroupMutate()
    }
  }, [confirmResponse])

  return (
    <DropdownHero>
      <DropdownTrigger>
        <button className='ml-auto h-fit'>
          <Icon name='more' className='fill-gray-400' size={20} />
        </button>
      </DropdownTrigger>
      {isLeader ? (
        <LeaderMenu
          openDeleteGroupConfirm={openDeleteGroupConfirm}
          groupId={groupId}
        />
      ) : (
        <MemberMenu />
      )}
    </DropdownHero>
  )
}

export default GroupActionsDropdown

const LeaderMenu = ({
  groupId,
  openDeleteGroupConfirm,
}: {
  groupId: number
  openDeleteGroupConfirm: VoidFunction
}) => {
  return (
    <>
      <DropdownMenu aria-label='Leader Actions Menu'>
        <DropdownItem
          key='update'
          as={Link}
          href={URL_PATH.GroupUpdate + `/${groupId}`}
        >
          수정하기
        </DropdownItem>
        <DropdownItem key='delete' color='danger'>
          <button onClick={openDeleteGroupConfirm}>모임 삭제하기</button>
        </DropdownItem>
      </DropdownMenu>
    </>
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

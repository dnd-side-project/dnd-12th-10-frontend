import Link from 'next/link'
import { ActionItemProps, Group, MenuItemProps } from '../_types'
import { Icon } from '@/components/Icon'
import { URL_PATH } from '@/consts/urls'
import {
  Dropdown as DropdownHero,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown'
import copyToCurrentUrl from '../_utils/copyToCurrentUrl'

/** 모임 액션 메뉴(수정, 삭제) 드롭다운 */
const GroupActionsDropdown = ({
  role,
  groupId,
  openModal,
}: {
  role: Group['role']
  groupId: number
  openModal: VoidFunction
}) => {
  const isLeader = role === 'LEADER'

  return (
    <DropdownHero>
      <DropdownTrigger>
        <button className='ml-auto h-fit'>
          <Icon name='more' className='fill-gray-400' size={20} />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Group Actions Menu'>
        {getMenuItems({ isLeader, groupId, openModal })}
      </DropdownMenu>
    </DropdownHero>
  )
}

export default GroupActionsDropdown

/** 액션 메뉴 항목 생성 함수 */
const getMenuItems = ({ isLeader, groupId, openModal }: MenuItemProps) => {
  if (isLeader) {
    return (
      <>
        {ActionItem({
          key: 'update',
          label: '수정하기',
          as: Link,
          href: `${URL_PATH.GroupUpdate}/${groupId}`,
        })}
        {ActionItem({
          key: 'delete',
          label: '모임 삭제하기',
          onPress: openModal,
          color: 'danger',
        })}
      </>
    )
  }

  return (
    <>
      {ActionItem({
        key: 'copy',
        label: '링크 복사하기',
        onPress: copyToCurrentUrl,
      })}
      {ActionItem({
        key: 'leave',
        label: '탈퇴하기',
        onPress: openModal,
        color: 'danger',
      })}
    </>
  )
}

/** 개별 액션 항목 컴포넌트 */
const ActionItem = ({
  key,
  label,
  onPress,
  color,
  as = 'button',
  href,
}: ActionItemProps) => (
  <DropdownItem
    key={key}
    color={color}
    as={as}
    href={href}
    onPress={onPress}
    className='text-center'
  >
    {label}
  </DropdownItem>
)

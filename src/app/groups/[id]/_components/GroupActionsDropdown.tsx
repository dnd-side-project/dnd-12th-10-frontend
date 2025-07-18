import Link from 'next/link'
import { Group } from '../_types'
import { URL_PATH } from '@/consts/urls'
import copyToCurrentUrl from '../_utils/copyToCurrentUrl'
import ActionDropDown from '@/components/ActionDropDown'

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
  return (
    <ActionDropDown
      role={role}
      itemList={{
        LEADER: [
          {
            key: 'update',
            label: '수정하기',
            as: Link,
            href: `${URL_PATH.GroupUpdate}/${groupId}`,
          },
          {
            key: 'delete',
            label: '모임 삭제하기',
            onPress: openModal,
            color: 'danger',
          },
        ],
        MEMBER: [
          {
            key: 'copy',
            label: '링크 복사하기',
            onPress: copyToCurrentUrl,
          },
          {
            key: 'leave',
            label: '탈퇴하기',
            onPress: openModal,
            color: 'danger',
          },
        ],
        NON_MEMBER: [],
      }}
    />
  )
}

export default GroupActionsDropdown

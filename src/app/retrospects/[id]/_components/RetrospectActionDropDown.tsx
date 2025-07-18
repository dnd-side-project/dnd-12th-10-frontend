import ActionDropDown from '@/components/ActionDropDown'
import { Icon } from '@/components/Icon'
import copyToCurrentUrl from '@/app/groups/[id]/_utils/copyToCurrentUrl'
import Link from 'next/link'
import { URL_PATH } from '@/consts/urls'

type RetrospectAccessType = 'AUTHOR' | 'VIEWER'

const RetrospectActionDropDown = ({
  isAuthor,
  retrospectId,
  openModal,
}: {
  isAuthor: boolean
  retrospectId: number
  openModal: VoidFunction
}) => {
  const role: RetrospectAccessType = isAuthor ? 'AUTHOR' : 'VIEWER'

  return (
    <ActionDropDown
      role={role}
      itemList={{
        AUTHOR: [
          {
            key: 'copy',
            label: '공유하기',
            icon: (
              <Icon name='link-chain' size={18} className='stroke-gray-900' />
            ),
            onPress: copyToCurrentUrl,
          },
          {
            key: 'update',
            label: '수정하기',
            icon: <Icon name='pencil' size={18} className='stroke-gray-900' />,
            as: Link,
            href: `${URL_PATH.RetrospectsCreate}/${retrospectId}?isRetrospectUpdate=true`,
          },
          {
            key: 'delete',
            label: '삭제하기',
            icon: <Icon name='trash' size={18} className='stroke-gray-900' />,
            onPress: openModal,
            color: 'danger',
          },
        ],
        VIEWER: [
          {
            key: 'update',
            label: '공유하기',
            icon: (
              <Icon name='link-chain' size={18} className='stroke-gray-900' />
            ),
            onPress: copyToCurrentUrl,
          },
        ],
      }}
    />
  )
}

export default RetrospectActionDropDown

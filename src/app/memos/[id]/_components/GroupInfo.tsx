import Link from 'next/link'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Group } from '@/app/groups/[id]/_types'
import { ROLE } from '@/app/groups/[id]/_consts'
import { URL_PATH } from '@/consts/urls'
import GroupJoinModal from '@/app/groups/[id]/_components/GroupJoinModal'
import useModal from '@/hooks/useModal'
import useGetGroupInfo from '@/app/groups/[id]/_queries/useGetGroupInfo'

// Todo: 모임 가입 이벤트를 위해 group id도 전달 받아야 할 듯
interface GroupInfoProps {
  groupName: string
  groupId: Group['groupId']
}
/** 페이지 상단 (모임명, 가입 or 글쓰기 버튼) 영역 */
const GroupInfo = ({ groupName, groupId }: GroupInfoProps) => {
  const { isOpen, openModal, closeModal } = useModal()
  const { data } = useGetGroupInfo(String(groupId))

  if (!data) return null

  return (
    <>
      <div className='flex justify-between'>
        <span className='text-title01 text-gray-700'>{groupName}</span>
        {data.role === ROLE.NON_MEMBER ? (
          <JoinButton openModal={openModal} />
        ) : (
          <WriteButton />
        )}
      </div>
      <GroupJoinModal
        isOpen={isOpen}
        closeModal={closeModal}
        groupName={groupName}
        userCount={data.userCount}
        groupId={data.groupId}
      />
    </>
  )
}
export default GroupInfo

const WriteButton = () => (
  <Link href={URL_PATH.RetrospectsCreate}>
    <Button color='primary' variant='subtle' size='medium'>
      <Icon name='edit' size={20} className='stroke-blue-500 mr-2' />
      글쓰기
    </Button>
  </Link>
)

const JoinButton = ({ openModal }: { openModal: () => void }) => (
  <Button color='primary' variant='subtle' size='medium' onClick={openModal}>
    모임 가입하기
  </Button>
)

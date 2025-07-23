import Chip from '@/components/Chip'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Group } from '../_types'
import { ROLE } from '../_consts'
import GroupJoinModal from './GroupJoinModal'
import useModal from '@/hooks/useModal'
import OpenMemoListModalButton from '@/app/_components/OpenMemoListModalButton'

interface Props {
  groupName: Group['groupName']
  introduction: Group['introduction']
  categoryNames: Group['categoryNames']
  role: Group['role']
  userCount: Group['userCount']
  groupId: Group['groupId']
  openInviteModal: VoidFunction
}

const GroupHeading = ({
  groupName,
  introduction,
  categoryNames,
  role,
  userCount,
  groupId,
  openInviteModal,
}: Props) => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <div className='flex justify-between mb-6'>
        <h1 className='text-display01'>{groupName}</h1>
        {role === ROLE.NON_MEMBER ? (
          <JoinButton openModal={openModal} />
        ) : (
          <WriteButton />
        )}
      </div>
      <div className='flex gap-2 text-body03 text-gray-800 mb-2'>
        {categoryNames?.map((tag) => (
          <Chip key={tag} label={tag} color='gray' size='small' />
        ))}
        {role === 'LEADER' && (
          <InviteButton openInviteModal={openInviteModal} />
        )}
      </div>
      <p className='text-body03 text-gray-700 mb-6'>{introduction}</p>
      <GroupJoinModal
        isOpen={isOpen}
        closeModal={closeModal}
        groupName={groupName}
        userCount={userCount}
        groupId={groupId}
      />
    </>
  )
}
export default GroupHeading

const WriteButton = () => (
  <OpenMemoListModalButton color='primary' variant='filled' size='medium'>
    <Icon name='edit' className='stroke-white mr-2' size={20} />
    글쓰기
  </OpenMemoListModalButton>
)

const JoinButton = ({ openModal }: { openModal: () => void }) => (
  <Button
    color='primary'
    variant='filled'
    size='medium'
    type='button'
    onClick={openModal}
  >
    <Icon name='profile-add' className='stroke-white mr-2' size={20} />
    모임 가입하기
  </Button>
)

const InviteButton = ({
  openInviteModal,
}: {
  openInviteModal: VoidFunction
}) => {
  return (
    <button className='flex gap-1 items-center' onClick={openInviteModal}>
      <Icon name='add-square-filled' className='fill-orange-500' size={20} />
      <span className='text-title03 text-orange-500'>초대하기</span>
    </button>
  )
}

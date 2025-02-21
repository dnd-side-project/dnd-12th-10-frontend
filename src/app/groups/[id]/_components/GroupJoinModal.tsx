import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import Modal from '@/components/Modal'
import { Group } from '../_types'
import useJoinGroupMutation from '../_queries/useJoinGroupMutation'
import openCustomToast from '@/utils/openCustomToast'

const GroupJoinModal = ({
  isOpen,
  closeModal,
  groupName,
  userCount,
  groupId,
}: {
  isOpen: boolean
  closeModal: () => void
  groupName: Group['groupName']
  userCount: Group['userCount']
  groupId: Group['groupId']
}) => {
  const { mutate } = useJoinGroupMutation()
  const handleJoin = () => {
    mutate(
      { groupId: String(groupId) },
      {
        onSuccess: () => {
          closeModal()
          openCustomToast('모임에 가입되었습니다.', false)
        },
      },
    )
  }
  return (
    <Modal isOpen={isOpen} onClose={closeModal} left={248}>
      <div className='w-[551px]'>
        <div className='text-title01 flex items-center justify-between'>
          {groupName}에 가입하세요
          <button type='button' onClick={closeModal}>
            <Icon name='close' />
          </button>
        </div>
        <div className='mt-2 mb-6 text-gray-600 text-body01'>
          함께 회고를 나누고 성장할 수 있는 모입입니다. <br /> 가입 후 활동을
          시작하세요!
        </div>
        <div className='text-body01 font-semibold text-gray-600 flex items-center'>
          <Icon
            name='profile-user'
            className='stroke-blue-500 mr-2'
            size={20}
          />
          현재 가입 인원:{' '}
          <span className='text-blue-500 text-body01 font-semibold'>
            {userCount}명
          </span>
        </div>
        <div className='w-full flex justify-center mt-8'>
          <Button
            type='button'
            variant='filled'
            color='primary'
            size='medium'
            onClick={handleJoin}
          >
            가입하기
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default GroupJoinModal

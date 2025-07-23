import Modal from '@/components/Modal'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import copyToCurrentUrl from '../_utils/copyToCurrentUrl'

interface InviteModalProps {
  isOpen: boolean
  closeModal: () => void
}

const InviteModal = ({ isOpen, closeModal }: InviteModalProps) => {
  const currentUrl = window.document.location.href

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='flex items-center justify-between gap-[124px]'>
        <h2 className='text-title01'>링크를 복사하고 멤버들을 초대해보세요!</h2>
        <button type='button' onClick={closeModal}>
          <Icon name='close' />
        </button>
      </div>
      <p
        className={
          cn(
            'mt-6 mb-8',
            'py-[14.5px] px-6',
            'rounded-[10px]',
            'border-1 border-gray-900',
            'shadow-[0px_2px_0px_0px_#000000]',
          ) + ' text-body01 text-blue-500'
        }
      >
        {currentUrl}
      </p>
      <div className='flex justify-center'>
        <Button
          color='primary'
          variant='filled'
          size='medium'
          onClick={copyToCurrentUrl}
        >
          <Icon name='link-chain' size={20} className='stroke-white mr-2' />
          초대 링크 복사하기
        </Button>
      </div>
    </Modal>
  )
}

export default InviteModal

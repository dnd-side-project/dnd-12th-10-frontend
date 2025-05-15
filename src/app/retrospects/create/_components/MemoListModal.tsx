'use client'

import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { useState } from 'react'
import { cn } from '@/utils/cn'

const MemoListModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean
  closeModal: () => void
}) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='text-lg font-semibold lineHeight-150 mb-4'>
        임시저장 글
      </div>
      <div className='text-caption01 text-gray-700 mb-2'>총 5개</div>
      <ul className='flex flex-col border border-gray-100 rounded-sm mb-8 overflow-hidden'>
        {[0, 1, 2, 3, 4].map((_, index) => (
          <>
            <MemoListItem key={index} />
            {index !== 4 && <BottomBorder />}
          </>
        ))}
      </ul>
      <div className='flex gap-2'>
        <Button
          variant='subtle'
          color='primary'
          size='medium'
          onClick={closeModal}
          style={{ width: '180px' }}
        >
          닫기
        </Button>
        <Button
          variant='filled'
          color='primary'
          size='medium'
          onClick={closeModal}
          style={{ width: '180px' }}
        >
          이어서 작성하기
        </Button>
      </div>
    </Modal>
  )
}

export default MemoListModal

const MemoListItem = () => {
  const [ShowTrashIcon, setShowTrashIcon] = useState(false)
  const handleMouseEnter = () => {
    setShowTrashIcon(true)
  }
  const handleMouseLeave = () => {
    setShowTrashIcon(false)
  }
  return (
    <li
      className={cn(
        'flex justify-between items-center',
        'py-3 px-4',
        'cursor-pointer',
        'hover:bg-gray-50',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-col'>
        <div className='text-body03'>타이틀</div>
        <p className='text-xs text-gray-500 lineHeight-150'>
          2025.01.29 10:49:20
        </p>
      </div>
      {ShowTrashIcon && (
        <button>
          <Icon name='trash' size={20} className='stroke-gray-500' />
        </button>
      )}
    </li>
  )
}

const BottomBorder = () => {
  return <hr className='border-gray-100' />
}

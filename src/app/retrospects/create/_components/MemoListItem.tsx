import { useState } from 'react'
import { cn } from '@/utils/cn'
import { Icon } from '@/components/Icon'

const MemoListItem = ({
  isSelected,
  handleSelectedMemo,
}: {
  isSelected: boolean
  handleSelectedMemo: VoidFunction
}) => {
  const [showTrashIcon, setShowTrashIcon] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleMemoClick = () => {
    if (!showDeleteConfirm) {
      handleSelectedMemo()
    }
  }
  const handleMouseEnter = () => {
    if (!isSelected) {
      setShowTrashIcon(true)
    }
  }
  const handleMouseLeave = () => {
    setShowTrashIcon(false)
  }
  const openDeleteConfirm = () => {
    setShowDeleteConfirm(true)
  }
  const closeDeleteConfirm = () => {
    setShowDeleteConfirm(false)
  }

  return (
    <li
      className={cn(
        'flex justify-between items-center',
        'py-3 px-4',
        'cursor-pointer',
        { 'bg-gray-50': showTrashIcon },
        { 'bg-blue-50': isSelected },
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMemoClick}
    >
      <div className='flex flex-col w-full'>
        <div className='text-body03'>타이틀</div>
        <p className='text-xs text-gray-500 lineHeight-150'>
          2025.01.29 10:49:20
        </p>
        {showDeleteConfirm && (
          <ConfirmModal closeDeleteConfirm={closeDeleteConfirm} />
        )}
      </div>
      {isSelected && (
        <Icon name='check' size={20} className='stroke-blue-500' />
      )}
      {!isSelected && !showDeleteConfirm && showTrashIcon && (
        <DeleteMemoButton openDeleteConfirm={openDeleteConfirm} />
      )}
    </li>
  )
}

export default MemoListItem

const DeleteMemoButton = ({
  openDeleteConfirm,
}: {
  openDeleteConfirm: VoidFunction
}) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation()
        openDeleteConfirm()
      }}
    >
      <Icon name='trash' size={20} className='stroke-gray-500' />
    </button>
  )
}

const ConfirmModal = ({
  closeDeleteConfirm,
}: {
  closeDeleteConfirm: VoidFunction
}) => {
  return (
    <div className='flex w-full justify-between bg-gray-900 rounded-[4px] mt-2 px-3 py-[9px] text-caption01'>
      <div className='text-white'>해당 회고를 삭제하시겠습니까?</div>
      <div className='flex gap-3'>
        <button className='text-white' onClick={closeDeleteConfirm}>
          취소
        </button>
        <button className='text-orange-500'>삭제</button>
      </div>
    </div>
  )
}

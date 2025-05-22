'use client'

import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Fragment, useState } from 'react'
import MemoListItem from '@/app/retrospects/create/_components/MemoListItem'
import { useMemoListModalStore } from '@/store/memoListModal'
// import { cn } from '@/utils/cn'

const MemoListModal = () => {
  const { isOpen, closeModal } = useMemoListModalStore()
  const [selectedMemo, setSelectedMemo] = useState<null | number>(null)

  const handleSelectedMemo = (id: number) => {
    if (selectedMemo === id) {
      setSelectedMemo(null)
    } else {
      setSelectedMemo(id)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='text-title01 flex items-center justify-between'>
        <span>임시저장 글</span>
        <button type='button' onClick={closeModal}>
          <Icon name='close' />
        </button>
      </div>
      <div className='text-caption01 text-gray-700 mb-2'>총 5개</div>
      {/*<NoMemo />*/}
      <ul className='flex flex-col border border-gray-100 rounded-sm mb-8 overflow-hidden'>
        {/*Todo: memoId로 변경 필요*/}
        {[0, 1, 2, 3, 4].map((id, index) => (
          <Fragment key={id}>
            <MemoListItem
              isSelected={selectedMemo === index}
              handleSelectedMemo={() => {
                handleSelectedMemo(id)
              }}
            />
            {index !== 4 && <BottomBorder />}
          </Fragment>
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
          새로 작성
        </Button>
        <Button
          variant='filled'
          color='primary'
          size='medium'
          onClick={closeModal}
          style={{ width: '180px' }}
          disabled={selectedMemo === null}
        >
          이어서 작성하기
        </Button>
      </div>
    </Modal>
  )
}

export default MemoListModal

const BottomBorder = () => {
  return <hr className='border-gray-100' />
}

// const NoMemo = () => {
//   return (
//     <div
//       className={cn(
//         'flex flex-col items-center justify-center',
//         'text-body03',
//         'bg-gray-50',
//         'rounded-sm',
//         'py-3 mb-8',
//       )}
//     >
//       저장된 회고가 없습니다.
//     </div>
//   )
// }

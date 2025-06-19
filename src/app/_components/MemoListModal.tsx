'use client'

import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Fragment, useState } from 'react'
import MemoListItem from '@/app/retrospects/create/_components/MemoListItem'
import { useMemoListModalStore } from '@/store/memoListModal'
import useMyMemoListQuery from '@/app/_queries/useMyMemoListQuery'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { URL_PATH } from '@/consts/urls'

const MemoListModal = () => {
  const { isOpen, closeModal } = useMemoListModalStore()
  const [selectedMemo, setSelectedMemo] = useState<null | number>(null)
  const { myMemoList = [] } = useMyMemoListQuery(isOpen)
  const handleSelectedMemo = (id: number) => {
    if (selectedMemo === id) {
      setSelectedMemo(null)
    } else {
      setSelectedMemo(id)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='text-lg font-semibold lineHeight-150 flex items-center justify-between'>
        <p>이전에 작성 중인 회고가 있어요!</p>
        <button type='button' onClick={closeModal}>
          <Icon name='close' />
        </button>
      </div>
      <div className='text-caption01 text-gray-700 mb-2'>
        총 {myMemoList.length}개
      </div>
      {myMemoList.length === 0 ? (
        <NoMemo />
      ) : (
        <ul className='flex flex-col border border-gray-100 rounded-sm mb-8 overflow-hidden'>
          {myMemoList.map((memo, index) => (
            <Fragment key={memo.memoId}>
              <MemoListItem
                memoId={memo.memoId}
                title={memo.title}
                timeString={'2025.01.29 10:49:20'}
                isSelected={selectedMemo === index}
                handleSelectedMemo={() => {
                  handleSelectedMemo(memo.memoId)
                }}
              />
              {index !== 4 && <BottomBorder />}
            </Fragment>
          ))}
        </ul>
      )}
      <div className='flex gap-2'>
        <Button
          variant='subtle'
          color='primary'
          size='medium'
          onClick={closeModal}
          style={{ width: '180px' }}
        >
          <Link href={URL_PATH.RetrospectsCreate}> 새로 작성</Link>
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

const NoMemo = () => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'text-body03',
        'bg-gray-50',
        'rounded-sm',
        'py-3 mb-8',
      )}
    >
      저장된 회고가 없습니다.
    </div>
  )
}

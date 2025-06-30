'use client'

import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Fragment, useState } from 'react'
import MemoListItem from '@/app/retrospects/create/[[...memoId]]/_components/MemoListItem'
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

  const closeModalWithRefresh = () => {
    setSelectedMemo(null)
    closeModal()
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModalWithRefresh}>
      <div className='text-lg font-semibold lineHeight-150 flex items-center justify-between'>
        <p>이전에 작성 중인 회고가 있어요!</p>
        <button type='button' onClick={closeModalWithRefresh}>
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
                timeString={memo.updateTime}
                isSelected={selectedMemo === memo.memoId}
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
        <Link href={URL_PATH.RetrospectsCreate} onClick={closeModalWithRefresh}>
          <Button
            variant='subtle'
            color='primary'
            size='medium'
            onClick={closeModal}
            style={{ width: '180px' }}
          >
            새로 작성
          </Button>
        </Link>
        <Link
          href={URL_PATH.RetrospectsCreate + '/' + selectedMemo}
          onClick={closeModalWithRefresh}
        >
          <Button
            variant='filled'
            color='primary'
            size='medium'
            onClick={closeModal}
            style={{ width: '180px' }}
            disabled={selectedMemo === null || myMemoList.length === 0}
          >
            이어서 작성하기
          </Button>
        </Link>
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

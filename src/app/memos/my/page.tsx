'use client'

import { Icon } from '@/components/Icon'
import { useRouter } from 'next/navigation'
import MemoCard from '../_components/MemoCard'
import useUserDataQuery from '@/querys/useUserDataQuery'
import useMyMemoListQuery from '@/app/memos/_querys/useMyMemoListQuery'

const MyMemosPage = () => {
  const { back } = useRouter()
  const { userData } = useUserDataQuery()
  const { myMemoList = [] } = useMyMemoListQuery()
  if (!userData) return null

  return (
    <>
      <button
        className='flex items-center my-3 mx-4 text-body03 text-gray-900'
        onClick={() => {
          back()
        }}
      >
        <Icon
          name='line-arrow-left'
          className='stroke-gray-600 mr-2'
          size={20}
        />
        회고스페이스 / 회고 현황
      </button>
      <div className='flex flex-col py-[70px] px-[88px]'>
        <h1 className='text-display01'>{userData.nickname}님의 회고 현황</h1>
        <p className='text-body01 text-gray-700'>
          총 {myMemoList.length}개의 회고를 작성했습니다!
        </p>
        <div className='mt-4 flex gap-4 flex-wrap'>
          {myMemoList.map((props) => (
            <MemoCard
              key={`memos-${props.retrospectId}`}
              retrospectId={props.retrospectId}
              title={props.title}
              content={props.content}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default MyMemosPage

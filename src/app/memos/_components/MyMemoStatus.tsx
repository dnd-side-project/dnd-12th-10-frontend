'use client'
import SectionHeader from '@/app/_components/SectionHeader'
import Link from 'next/link'
import NoMemoList from './NoMemoList'
import { URL_PATH } from '@/consts/urls'
import MemoList from './MemoList'
import useUserDataQuery from '@/querys/useUserDataQuery'
import useMyMemoListQuery from '@/app/memos/_querys/useMyMemoListQuery'

const MyMemoStatus = () => {
  const { userData } = useUserDataQuery()
  const { myMemoList = [] } = useMyMemoListQuery()
  const isMyGroupListEmpty = myMemoList.length === 0

  if (!userData) return null

  return (
    <section>
      <div className='flex justify-between'>
        <SectionHeader
          title={`${userData.nickname}님의 회고 현황`}
          description={`총 ${myMemoList.length}개의 회고를 작성했습니다!`}
        />
        <Link href={URL_PATH.MyMemos} className='mt-6 h-fit'>
          더보기
        </Link>
      </div>
      {isMyGroupListEmpty ? (
        <NoMemoList />
      ) : (
        <MemoList myMemoList={myMemoList} />
      )}
    </section>
  )
}
export default MyMemoStatus

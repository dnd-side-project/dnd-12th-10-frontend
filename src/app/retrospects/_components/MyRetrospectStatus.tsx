'use client'
import SectionHeader from '@/app/_components/SectionHeader'
import Link from 'next/link'
import NoRetrospectList from './NoRetrospectList'
import { URL_PATH } from '@/consts/urls'
import RetrospectList from './RetrospectList'
import useUserDataQuery from '@/querys/useUserDataQuery'
import useMyRetrospectListQuery from '../_querys/useMyRetrospectListQuery'

const MyRetrospectStatus = () => {
  const { userData } = useUserDataQuery()
  const { myRetrospectList = [] } = useMyRetrospectListQuery()
  const isMyGroupListEmpty = myRetrospectList.length === 0

  if (!userData) return null

  return (
    <section>
      <div className='flex justify-between'>
        <SectionHeader
          title={`${userData.nickname}님의 회고 현황`}
          description={`총 ${myRetrospectList.length}개의 회고를 작성했습니다!`}
        />
        <Link href={URL_PATH.MyRetrospects} className='mt-6 h-fit'>
          더보기
        </Link>
      </div>
      {isMyGroupListEmpty ? (
        <NoRetrospectList />
      ) : (
        <RetrospectList myRetrospectList={myRetrospectList} />
      )}
    </section>
  )
}
export default MyRetrospectStatus

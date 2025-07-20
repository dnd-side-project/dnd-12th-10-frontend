import { Metadata } from 'next'
import GroupForm from '../GroupForm'
import AuthGuard from '@/app/AuthGuard'

export const metadata: Metadata = {
  title: 'Leev | 모임 생성',
}

/**
 * 모임 생성 페이지
 */
const GroupCreatePage = () => {
  return (
    <AuthGuard>
      <div className='px-[88px] pt-[72px] pb-[66px]'>
        <h1 className='text-display01 mb-6'>회고 모임 만들기</h1>
        <GroupForm mode='create' />
      </div>
    </AuthGuard>
  )
}

export default GroupCreatePage

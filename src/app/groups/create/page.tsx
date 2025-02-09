import { Metadata } from 'next'
import GroupCreateForm from './GroupCreateForm'

export const metadata: Metadata = {
  title: 'Leev | 모임 생성',
}

/**
 * 모임 생성 페이지
 */
const GroupCreatePage = () => {
  return (
    <div className='px-[88px] pt-[72px] pb-[66px]'>
      <h1 className='text-display01 mb-6'>회고 모임 만들기</h1>
      <GroupCreateForm />
    </div>
  )
}

export default GroupCreatePage

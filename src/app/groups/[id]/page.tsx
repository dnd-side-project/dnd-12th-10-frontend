import { Metadata } from 'next'
import GroupDetail from './GroupDetail'
import AuthGuard from '@/app/AuthGuard'
/**
 * 모임 상세 페이지
 */

// Todo: api 연결 후 모임 이름으로 변경 필요
export const metadata: Metadata = {
  title: 'Reev | 모임',
}

const GroupDetailPage = () => {
  return (
    <AuthGuard>
      <GroupDetail />
    </AuthGuard>
  )
}

export default GroupDetailPage

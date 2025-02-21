import { Metadata } from 'next'
import GroupDetail from './GroupDetail'
/**
 * 모임 상세 페이지
 */

// Todo: api 연결 후 모임 이름으로 변경 필요
export const metadata: Metadata = {
  title: 'Leev | 모임',
}

const GroupDetailPage = () => {
  return <GroupDetail />
}

export default GroupDetailPage

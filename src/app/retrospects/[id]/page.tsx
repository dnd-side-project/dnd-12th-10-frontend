import type { Metadata } from 'next'
import Retrospect from './Retrospect'
import AuthGuard from '@/app/AuthGuard'

// TODO: 추후 회고록 제목 포함으로 변경 필요
export const metadata: Metadata = {
  title: 'Reev | 회고록',
}

const RetrospectPage = () => {
  return (
    <AuthGuard>
      <Retrospect />
    </AuthGuard>
  )
}
export default RetrospectPage

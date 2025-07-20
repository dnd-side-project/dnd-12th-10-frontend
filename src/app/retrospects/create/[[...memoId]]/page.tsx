import { Metadata } from 'next'
import RetrospectCreate from './RetrospectCreate'
import AuthGuard from '@/app/AuthGuard'

export const metadata: Metadata = {
  title: 'Leev | 회고 작성',
}

const RetrospectCreatePage = async ({
  params,
}: {
  params: Promise<{ memoId?: string[] }>
}) => {
  const { memoId } = await params

  return (
    <AuthGuard>
      <RetrospectCreate memoId={Number(memoId?.[0]) || null} />
    </AuthGuard>
  )
}
export default RetrospectCreatePage

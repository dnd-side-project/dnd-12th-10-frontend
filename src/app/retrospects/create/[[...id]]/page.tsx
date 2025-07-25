import { Metadata } from 'next'
import RetrospectCreate from './RetrospectCreate'
import AuthGuard from '@/app/AuthGuard'

export const metadata: Metadata = {
  title: 'Reev | 회고 작성',
}

const RetrospectCreatePage = async ({
  params,
}: {
  params: Promise<{ id?: string[] }>
}) => {
  const { id } = await params

  return (
    <AuthGuard>
      <RetrospectCreate id={Number(id?.[0]) || null} />
    </AuthGuard>
  )
}
export default RetrospectCreatePage

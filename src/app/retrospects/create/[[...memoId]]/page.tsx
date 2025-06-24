import { Metadata } from 'next'
import RetrospectCreate from './RetrospectCreate'

export const metadata: Metadata = {
  title: 'Leev | 회고 작성',
}

const RetrospectCreatePage = async ({
  params,
}: {
  params: { memoId?: string[] }
}) => {
  const { memoId } = await params

  return <RetrospectCreate memoId={Number(memoId?.[0]) || null} />
}
export default RetrospectCreatePage

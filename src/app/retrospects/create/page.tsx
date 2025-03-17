import { Metadata } from 'next'
import RetrospectCreate from './RetrospectCreate'

export const metadata: Metadata = {
  title: 'Leev | 회고 작성',
}

const RetrospectCreatePage = () => {
  return <RetrospectCreate />
}
export default RetrospectCreatePage

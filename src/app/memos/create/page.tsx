import { Metadata } from 'next'
import MemoCreate from './MemoCreate'

export const metadata: Metadata = {
  title: 'Leev | 회고 작성',
}

const MemoCreatePage = () => {
  return <MemoCreate />
}
export default MemoCreatePage

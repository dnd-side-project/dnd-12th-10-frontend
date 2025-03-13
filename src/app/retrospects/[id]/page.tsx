import type { Metadata } from 'next'
import Retrospect from './Retrospect'

// TODO: 추후 회고록 제목 포함으로 변경 필요
export const metadata: Metadata = {
  title: 'Leev | 회고록',
}

const MemoPage = () => {
  return <Retrospect />
}
export default MemoPage

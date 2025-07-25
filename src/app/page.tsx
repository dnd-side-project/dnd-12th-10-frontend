import { Metadata } from 'next'
import HomeContainer from './HomeContainer'
import AuthGuard from '@/app/AuthGuard'

// TODO: 추후 변경 필요
export const metadata: Metadata = {
  title: 'Reev',
}

export default function Home() {
  return (
    <AuthGuard>
      <HomeContainer />
    </AuthGuard>
  )
}

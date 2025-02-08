import { Metadata } from 'next'
import HomeContainer from './HomeContainer'

// TODO: 추후 변경 필요
export const metadata: Metadata = {
  title: 'Leev',
}

export default function Home() {
  return <HomeContainer />
}

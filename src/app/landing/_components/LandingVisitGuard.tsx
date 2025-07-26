'use client'

import { useRouter } from 'next/navigation'
import { getLocalStorage } from '@/utils/storage'
import { HAS_VISITED_LANDING_KEY } from '../_consts'

const LandingVisitGuard = () => {
  const router = useRouter()
  const hasVisitedLanding = getLocalStorage(HAS_VISITED_LANDING_KEY, '')
  if (!hasVisitedLanding) {
    router.replace('/landing')
  }

  return null
}

export default LandingVisitGuard

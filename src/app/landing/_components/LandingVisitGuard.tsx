'use client'

import { useRouter } from 'next/navigation'
import { getLocalStorage } from '@/utils/storage'
import { HAS_VISITED_LANDING_KEY } from '../_consts'
import { useEffect } from 'react'

const LandingVisitGuard = () => {
  const router = useRouter()
  useEffect(() => {
    const hasVisitedLanding = getLocalStorage(HAS_VISITED_LANDING_KEY, '')
    if (!hasVisitedLanding) {
      router.replace('/landing')
    }
  }, [])

  return null
}

export default LandingVisitGuard

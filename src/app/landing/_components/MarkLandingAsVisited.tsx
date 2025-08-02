'use client'

import { useEffect } from 'react'
import { setLocalStorage } from '@/utils/storage'
import { HAS_VISITED_LANDING_KEY } from '@/app/landing/_consts'

const MarkLandingAsVisited = () => {
  useEffect(() => {
    setLocalStorage(HAS_VISITED_LANDING_KEY, true)
  }, [])
  return null
}

export default MarkLandingAsVisited

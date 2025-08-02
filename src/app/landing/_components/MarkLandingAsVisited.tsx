'use client'

import { setLocalStorage } from '@/utils/storage'
import { HAS_VISITED_LANDING_KEY } from '@/app/landing/_consts'

const MarkLandingAsVisited = () => {
  setLocalStorage(HAS_VISITED_LANDING_KEY, true)
  return null
}

export default MarkLandingAsVisited

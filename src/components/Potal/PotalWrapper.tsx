'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function PortalWrapper({ children }: PropsWithChildren) {
  const [container, setContainer] = useState<Element | null>(null)

  useEffect(() => {
    setContainer(document.body)
  }, [])

  if (!container) return null

  return createPortal(<>{children}</>, container)
}

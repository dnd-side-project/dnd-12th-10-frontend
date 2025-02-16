import { PropsWithChildren } from 'react'
import { AnimatePresence } from 'motion/react'
import { PortalWrapper } from './PotalWrapper'

interface PortalProps {
  isOpen: boolean
  mode?: 'sync' | 'popLayout' | 'wait'
}

const Portal = ({
  isOpen,
  mode = 'wait',
  children,
}: PropsWithChildren<PortalProps>) => {
  return (
    <PortalWrapper>
      <AnimatePresence mode={mode}>{isOpen && children}</AnimatePresence>
    </PortalWrapper>
  )
}

export default Portal

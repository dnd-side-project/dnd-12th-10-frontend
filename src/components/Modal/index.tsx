import { ReactNode } from 'react'
import { motion } from 'motion/react'
import Portal from '../Potal'
import { FADE_IN_ANIMATION } from './consts'

interface ModalProps {
  isOpen: boolean
  onClose?: VoidFunction
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // 배경 클릭시 닫기
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose()
    }
  }

  return (
    <Portal isOpen={isOpen}>
      <motion.div
        key='modal'
        variants={FADE_IN_ANIMATION}
        initial='initial'
        animate='animate'
        exit='exit'
        onClick={handleBackdropClick}
        className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
      >
        <div className='bg-white p-10 rounded-md shadow-modal'>{children}</div>
      </motion.div>
    </Portal>
  )
}

export default Modal

import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return {
    isOpen,
    openModal: handleOpen,
    closeModal: handleClose,
  }
}

export default useModal

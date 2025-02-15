import { useState } from 'react'

const useConfirm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [response, setResponse] = useState<boolean>()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const onConfirm = () => {
    setResponse(true)
    handleClose()
  }

  const onCancel = () => {
    setResponse(false)
    handleClose()
  }

  return {
    isOpen,
    openConfirm: handleOpen,
    ConfirmResponse: response,
    onConfirm,
    onCancel,
  }
}

export default useConfirm

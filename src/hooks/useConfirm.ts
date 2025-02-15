import { useState } from 'react'

const useConfirm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [response, setResponse] = useState<boolean>()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const returnTrue = () => {
    setResponse(true)
    handleClose()
  }

  const returnFalse = () => {
    setResponse(false)
    handleClose()
  }

  return {
    isOpen,
    openConfirm: handleOpen,
    ConfirmResponse: response,
    returnTrue,
    returnFalse,
  }
}

export default useConfirm

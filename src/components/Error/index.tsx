'use client'

import { useRouter } from 'next/navigation'
import Button from '../Button'

const Error = ({
  errorMessage,
  onReset,
}: {
  errorMessage: string
  onReset?: () => void
}) => {
  const { back } = useRouter()
  const handleClick = () => {
    if (!!onReset) onReset()
    else back()
  }

  return (
    <div className='h-screen grow overflow-auto flex flex-col justify-center items-center gap-y-8'>
      <strong className='text-title01'>{errorMessage}</strong>
      <Button
        type='button'
        onClick={handleClick}
        color='primary'
        variant='filled'
        size='medium'
      >
        새로고침하기
      </Button>
    </div>
  )
}

export default Error

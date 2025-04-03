'use client'

import Button from '@/components/Button'
import Sidebar from '@/components/RootLayout/Sidebar'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className='flex h-screen bg-[#FEFCF9]'>
          <Sidebar />
          <div className='grow overflow-auto flex flex-col justify-center items-center gap-y-8'>
            <strong className='text-title01'>{error.message}</strong>
            <Button
              type='button'
              onClick={reset}
              color='primary'
              variant='filled'
              size='medium'
            >
              새로고침하기
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

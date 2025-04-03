'use client'

import Button from '@/components/Button'

const ERROR_MESSAGE = '일시적인 오류가 발생하였습니다.'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <div className='h-screen flex flex-col justify-center items-center gap-y-8'>
          <strong className='text-title01'>{ERROR_MESSAGE}</strong>
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
      </body>
    </html>
  )
}

'use client'

import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import { useState } from 'react'
import CommentInput from './CommentInput'

/** 답글 인풋창과 버튼을 감싸는 컴포넌트 */
const AnswerInputWrap = ({
  closeCommentAnswer,
}: {
  closeCommentAnswer: () => void
}) => {
  const [commentValue, setCommentValue] = useState('')

  return (
    <>
      <CommentInput
        value={commentValue}
        setValue={setCommentValue}
        nickname='개발의 신'
      />
      <div className='mt-3 flex justify-end gap-4'>
        <button
          className={cn(
            'px-3',
            'rounded-full',
            'min-w-[80px] w-[80px]',
            'text-title03 text-white',
            'font-semibold',
            'bg-gray-100',
          )}
          onClick={closeCommentAnswer}
        >
          취소
        </button>
        <Button
          color='primary'
          variant='filled'
          size='medium'
          disabled={commentValue.length === 0}
          style={{
            ...(commentValue.length === 0 && {
              color: 'white',
              backgroundColor: '#8CC2FF',
            }),
          }}
        >
          답글 남기기
        </Button>
      </div>
    </>
  )
}

export default AnswerInputWrap

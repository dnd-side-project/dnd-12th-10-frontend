'use client'
import { useState } from 'react'
import IconWithButton from './IconWithButton'
import CommentInput from './CommentInput'
import Button from '@/components/Button'

interface CommentInputWrapProps {
  nickName: string
  numOfLikes: number
  numOfComments: number
}

/** 댓글 인풋창과 버튼을 감싸는 컴포넌트 */
const CommentInputWrap = ({
  nickName,
  numOfLikes,
  numOfComments,
}: CommentInputWrapProps) => {
  const [commentValue, setCommentValue] = useState('')
  return (
    <>
      <div className='mt-[72px] flex gap-6'>
        <IconWithButton iconName='like' count={numOfLikes} />
        <IconWithButton
          iconName='message'
          text='댓글'
          count={numOfComments}
          countColor='blue'
        />
      </div>
      <CommentInput
        value={commentValue}
        setValue={setCommentValue}
        nickname={nickName}
      />
      <div className='mt-3 flex justify-end'>
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
          댓글 남기기
        </Button>
      </div>
    </>
  )
}
export default CommentInputWrap

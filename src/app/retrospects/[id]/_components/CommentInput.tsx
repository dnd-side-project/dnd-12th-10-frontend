'use client'
import { useState } from 'react'
import IconWithButton from './IconWithButton'
import Textarea from './Textarea'
import Button from '@/components/Button'
import useCommentMutation from '../../_queries/useCommentMutation'
import { Retrospect } from '@/app/groups/[id]/_types'
import openCustomToast from '@/utils/openCustomToast'

interface Props {
  commentCount: Retrospect['commentCount']
  retrospectId: Retrospect['retrospectId']
  likeCount: Retrospect['likeCount']
  userName: Retrospect['userName']
}

/** 댓글 인풋창과 버튼을 감싸는 컴포넌트 */
const CommentInput = ({
  commentCount,
  retrospectId,
  // likeCount,
  userName,
}: Props) => {
  const { mutate } = useCommentMutation()
  const [commentValue, setCommentValue] = useState('')

  const handleSubmit = () => {
    mutate({
      retrospectId,
      content: commentValue,
    })
    openCustomToast('댓글이 작성되었습니다.', false)
    setCommentValue('')
  }

  return (
    <>
      <div className='mt-[72px] flex gap-6'>
        {/*<IconWithButton iconName='like' count={likeCount} />*/}
        <IconWithButton
          iconName='message'
          text='댓글'
          count={commentCount}
          countColor='blue'
        />
      </div>
      <Textarea
        value={commentValue}
        setValue={setCommentValue}
        nickname={userName}
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
          onClick={handleSubmit}
        >
          댓글 남기기
        </Button>
      </div>
    </>
  )
}
export default CommentInput

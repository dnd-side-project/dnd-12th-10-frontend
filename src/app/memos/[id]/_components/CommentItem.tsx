'use client'
import { useState } from 'react'
import IconWithButton from './IconWithButton'
import ReplyInput from './ReplyInput'
import AuthorInfo from '@/components/AuthorInfo'
import { Comment } from '@/app/groups/[id]/_types'
import { useParams } from 'next/navigation'
import useGetReplyList from '@/app/groups/[id]/_queries/useGetReplyList'

/** 댓글 컴포넌트 */
const CommentItem = ({
  commentId,
  nickName,
  timeMessage,
  content,
  isAuthor,
}: Comment) => {
  const retrospectId = useParams<{ id: string }>()?.id
  const { data: replyList } = useGetReplyList(retrospectId, String(commentId))
  const [showReplyInput, setShowReplyInput] = useState(false)

  const closeReplyInput = () => {
    setShowReplyInput(false)
  }

  return (
    <li key={commentId} className='pb-10 border-b-1 border-gray-100'>
      <div className='flex items-center gap-3'>
        <AuthorInfo
          size='large'
          author={nickName}
          latestUpdateTime={timeMessage}
        />
        {isAuthor && <span className='text-blue-500 text-body01'>작성자</span>}
      </div>
      <div className='ml-[42px]'>
        <p className='mt-4 text-body01 font-normal'>{content}</p>
        <div className='mt-4 flex'>
          <IconWithButton iconName='like' count={19} />
          <button
            className='text-title03 text-gray-500 ml-6 hover:text-blue-400'
            onClick={() => {
              setShowReplyInput((prevState) => !prevState)
            }}
          >
            답글
          </button>
        </div>

        {/*답글 리스트*/}
        {replyList && replyList.length > 0 && (
          <ul>
            {replyList.map((reply) => (
              <li key={reply.commentId} className='mt-8'>
                <div className='flex items-center gap-3'>
                  <AuthorInfo
                    size='large'
                    author={reply.userId}
                    latestUpdateTime={reply.timeMessage}
                  />
                  {/*Todo: 작성자 구분에 따른 조건부렌더링 로직 추가 필요*/}
                  <span className='text-blue-500 text-body01'>작성자</span>
                </div>
                <p className='mt-4 ml-[42px] text-body01 font-normal'>
                  {reply.content}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/*답글 인풋창*/}
        {showReplyInput && (
          <ReplyInput
            retrospectId={Number(retrospectId)}
            commentId={commentId}
            closeReplyInput={closeReplyInput}
          />
        )}
      </div>
    </li>
  )
}

export default CommentItem

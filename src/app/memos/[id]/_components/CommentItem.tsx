'use client'
import { useState } from 'react'
import IconWithButton from './IconWithButton'
import ReplyInput from './ReplyInput'
import AuthorInfo from '@/components/AuthorInfo'
import { COMMENT_LIST } from '../_consts'

// Todo: 백엔드 스키마에 따라 변경 필요 (답글을 댓글의 포함하는지)

export interface CommentItemProps {
  id: string
  author: string
  latestUpdateTime: string
  content: string
}

/** 댓글 컴포넌트 */
const CommentItem = ({
  id,
  author,
  latestUpdateTime,
  content,
}: CommentItemProps) => {
  const [isShowAnswerInput, setIsShowAnswerInput] = useState(false)

  const closeCommentAnswer = () => {
    setIsShowAnswerInput(false)
  }

  return (
    <li key={id} className='pb-10 border-b-1 border-gray-100'>
      <div className='flex items-center gap-3'>
        <AuthorInfo
          size='large'
          author={author}
          latestUpdateTime={latestUpdateTime}
        />
        {/*Todo: 작성자 구분에 따른 조건부렌더링 로직 추가 필요*/}
        <span className='text-blue-500 text-body01'>작성자</span>
      </div>
      <div className='ml-[42px]'>
        <p className='mt-4 text-body01 font-normal'>{content}</p>
        <div className='mt-4 flex'>
          <IconWithButton iconName='like' count={19} />
          <button
            className='text-title03 text-gray-500 ml-6 hover:text-blue-400'
            onClick={() => {
              setIsShowAnswerInput((prevState) => !prevState)
            }}
          >
            답글
          </button>
        </div>
        {/*답글 인풋창*/}
        {isShowAnswerInput && (
          <ReplyInput closeCommentAnswer={closeCommentAnswer} />
        )}
        {/*답글 리스트*/}
        {/*Todo: 답글 유무에 따라 조건부 렌더링*/}
        <ul>
          {COMMENT_LIST.map((comment) => (
            <li key={comment.id} className='mt-8'>
              <div className='flex items-center gap-3'>
                <AuthorInfo
                  size='large'
                  author={author}
                  latestUpdateTime={latestUpdateTime}
                />
                {/*Todo: 작성자 구분에 따른 조건부렌더링 로직 추가 필요*/}
                <span className='text-blue-500 text-body01'>작성자</span>
              </div>
              <p className='mt-4 ml-[42px] text-body01 font-normal'>
                {content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default CommentItem

import type { Metadata } from 'next'

import { cn } from '@/utils/cn'
import GroupInfo from './_components/GroupInfo'
import CommentList from './_components/CommentList'
import MemoHeading from './_components/MemoHeading'
import CommentInput from './_components/CommentInputWrap'

import { COMMENT_LIST, MEMO_DETAIL } from './_consts'

// TODO: 추후 회고록 제목 포함으로 변경 필요
export const metadata: Metadata = {
  title: 'Leev | 회고록',
}

const MemoPage = () => {
  const {
    groupName,
    roll,
    title,
    tags,
    author,
    latestUpdateTime,
    description,
    numOfLikes,
    numOfComments,
  } = MEMO_DETAIL

  return (
    <div className='py-[72px] px-[88px]'>
      <GroupInfo groupName={groupName} roll={roll} />
      <article
        className={cn(
          'mt-6',
          'p-14',
          'bg-white',
          'rounded-lg',
          'border-1 border-gray-100',
        )}
      >
        <MemoHeading
          title={title}
          tags={tags}
          author={author}
          latestUpdateTime={latestUpdateTime}
        />
        <main className='mt-16 whitespace-pre-wrap'>{description}</main>
        <CommentInput
          numOfComments={numOfComments}
          numOfLikes={numOfLikes}
          nickName='사용자 이름'
        />
        <CommentList commentList={COMMENT_LIST} />
      </article>
    </div>
  )
}
export default MemoPage

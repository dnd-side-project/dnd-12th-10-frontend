'use client'

import { cn } from '@/utils/cn'
import CommentInput from './_components/CommentInput'
import CommentList from './_components/CommentList'
import GroupInfo from './_components/GroupInfo'
import RetrospectHeading from './_components/RetrospectHeading'
import { useParams } from 'next/navigation'
import useGetRetrospect from '@/app/groups/[id]/_queries/useGetRetrospect'
import useGetCommentList from '@/app/groups/[id]/_queries/useGetCommentList'
import DOMPurify from 'isomorphic-dompurify'

const Retrospect = () => {
  const retrospectId = useParams<{ id: string }>()?.id
  const { data: retrospect } = useGetRetrospect(retrospectId)
  const { data: commentList } = useGetCommentList(retrospectId)

  if (!retrospect) return null

  const {
    title,
    timeString,
    userName,
    content,
    likeCount,
    commentCount,
    groupName,
    groupId,
  } = retrospect

  // TODO: 수정
  return (
    <div className='py-[72px] px-[88px]'>
      {groupId && <GroupInfo groupName={groupName} groupId={groupId} />}
      <article
        className={cn(
          'mt-6',
          'p-14',
          'bg-white',
          'rounded-lg',
          'border-1 border-gray-100',
        )}
      >
        <RetrospectHeading
          title={title}
          tags={[]}
          author={userName}
          latestUpdateTime={timeString}
        />
        <main
          className='mt-16 whitespace-pre-wrap'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
        <CommentInput
          retrospectId={Number(retrospectId)}
          commentCount={commentCount}
          likeCount={likeCount}
          userName={userName}
        />
        {commentList && <CommentList commentList={commentList} />}
      </article>
    </div>
  )
}

export default Retrospect

'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import CommentInput from './_components/CommentInput'
import CommentList from './_components/CommentList'
import GroupInfo from './_components/GroupInfo'
import RetrospectHeading from './_components/RetrospectHeading'
import { useParams } from 'next/navigation'
import useGetRetrospect from '@/app/groups/[id]/_queries/useGetRetrospect'
import useGetCommentList from '@/app/groups/[id]/_queries/useGetCommentList'
import DOMPurify from 'isomorphic-dompurify'
import IconWithButton from './_components/IconWithButton'
import RetrospectActionDropDown from './_components/RetrospectActionDropDown'
import Confirm from '@/components/Confirm'
import useDeleteRetrospectMutation from './_queries/useDeleteRetrospectMutation'

const Retrospect = () => {
  const retrospectId = useParams<{ id: string }>()?.id
  const { data: retrospect } = useGetRetrospect(retrospectId)
  const { data: commentList } = useGetCommentList(retrospectId)
  const { mutate: deleteRetrospect } = useDeleteRetrospectMutation(retrospectId)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const confirmModalContent = {
    modalTitle: '선택한 글을 삭제하시겠습니까?',
    message: '삭제된 글은 복구되지 않습니다.',
    onConfirmText: '삭제하기',
    onConfirm: deleteRetrospect,
  }
  const { modalTitle, message, onConfirm, onConfirmText } = confirmModalContent

  if (!retrospect) return null

  const {
    title,
    timeString,
    userName,
    content,
    commentCount,
    groupName,
    groupId,
    isAuthor,
  } = retrospect

  // TODO: 수정
  return (
    <div className='py-[72px] px-[88px]'>
      {groupName && groupId && (
        <GroupInfo groupName={groupName} groupId={groupId} />
      )}
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
        <div className='mt-[72px] flex gap-6'>
          {/*<IconWithButton iconName='like' count={likeCount} />*/}
          <IconWithButton
            iconName='message'
            text='댓글'
            count={commentCount}
            countColor='blue'
          />
          <RetrospectActionDropDown
            isAuthor={isAuthor}
            retrospectId={Number(retrospectId)}
            openModal={() => {
              setIsModalOpen(true)
            }}
          />
        </div>
        <CommentInput retrospectId={Number(retrospectId)} userName={userName} />
        {commentList && <CommentList commentList={commentList} />}
      </article>
      <Confirm
        isDanger={true}
        isOpen={isModalOpen}
        title={modalTitle}
        message={message}
        onCancel={() => {
          setIsModalOpen(false)
        }}
        onConfirm={onConfirm}
        onConfirmText={onConfirmText}
      />
    </div>
  )
}

export default Retrospect

'use client'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import GroupHeading from './_components/GroupHeading'
import GroupDescription from './_components/GroupDescription'
import GroupInfoList from './_components/GroupInfoList'
import NoRetrospectList from './_components/NoRetrospectList'
import RetrospectList from './_components/RetrospectList'
import { useParams } from 'next/navigation'
import Spinner from '@/components/Spinner'
import useGetGroupInfo from './_queries/useGetGroupInfo'
import useGetRetrospectList from './_queries/useGetRetrospectList'
import { ROLE } from './_consts'
import GroupActionsDropdown from './_components/GroupActionsDropdown'
import Confirm from '@/components/Confirm'
import useDeleteGroupMutation from './_queries/useDeleteGroupMutation'
import useLeaveGroupMutation from './_queries/useLeaveGroupMutation'
import { ConfirmModal } from './_types'

const GroupDetail = () => {
  const groupId = useParams<{ id: string }>()?.id
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: groupInfo } = useGetGroupInfo(groupId)
  const { data: retrospectList } = useGetRetrospectList(groupId)
  const { mutate: deleteGroup } = useDeleteGroupMutation(String(groupId))
  const { mutate: leaveGroup } = useLeaveGroupMutation(String(groupId))

  if (!groupInfo) return <Spinner />

  const confirmModalContent: ConfirmModal =
    groupInfo.role === 'LEADER'
      ? {
          title: '선택한 모임을 삭제하시겠습니까?',
          message: '삭제된 모임은 복구되지 않습니다.',
          onConfirmText: '삭제하기',
          onConfirm: deleteGroup,
        }
      : {
          title: '선택한 모임을 탈퇴하시겠습니까?',
          message: '탈퇴한 모임은 다시 참여할 수 없습니다.',
          onConfirmText: '탈퇴하기',
          onConfirm: leaveGroup,
        }

  const { title, message, onConfirm, onConfirmText } = confirmModalContent

  const {
    groupName,
    introduction,
    categoryNames,
    recentActString,
    retrospectCount,
    userCount,
    createDate,
    role,
    description,
    isPublic,
  } = groupInfo

  return (
    <div className={cn('px-[88px] py-[72px]')}>
      <GroupHeading
        groupName={groupName}
        introduction={introduction}
        categoryNames={categoryNames}
        userCount={userCount}
        role={role}
        groupId={Number(groupId)}
      />
      <div
        className={cn(
          'flex flex-col gap-8',
          'mt-12 p-6',
          'bg-gray-50 ',
          'rounded-lg',
        )}
      >
        <div className='flex'>
          <GroupInfoList
            numOfMembers={userCount}
            numOfRetrospects={retrospectCount}
            createdAtGroup={createDate}
            latestUpdateTime={recentActString}
          />
          {role !== 'NON_MEMBER' && (
            <GroupActionsDropdown
              role={role}
              groupId={Number(groupId)}
              openModal={() => {
                setIsModalOpen(true)
              }}
            />
          )}
        </div>
        {description && <GroupDescription description={description} />}
      </div>

      {retrospectList &&
      retrospectList.length > 0 &&
      (isPublic || role !== ROLE.NON_MEMBER) ? (
        <RetrospectList retrospectList={retrospectList} />
      ) : (
        <NoRetrospectList
          isPublic={isPublic}
          role={role}
          groupName={groupName}
          userCount={userCount}
          groupId={Number(groupId)}
        />
      )}
      <Confirm
        isDanger={true}
        isOpen={isModalOpen}
        title={title}
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

export default GroupDetail

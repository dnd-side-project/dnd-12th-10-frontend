'use client'

import { cn } from '@/utils/cn'
import GroupHeading from './_components/GroupHeading'
import GroupDescription from './_components/GroupDescription'
import GroupInfoList from './_components/GroupInfoList'
import NoMemoList from './_components/NoMemoList'
import MemoList from './_components/MemoList'
import { useParams } from 'next/navigation'
import Spinner from '@/components/Spinner'
import useGetGroupInfo from './_queries/useGetGroupInfo'
import useGetRetrospectList from './_queries/useGetRetrospectList'
import { ROLE } from './_consts'

const GroupDetail = () => {
  const groupId = useParams<{ id: string }>()?.id
  const { data: groupInfo } = useGetGroupInfo(groupId)
  const { data: memoList } = useGetRetrospectList(groupId)

  if (!groupInfo) return <Spinner />

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
        role={role}
      />
      <div
        className={cn(
          'flex flex-col gap-8',
          'mt-12 p-6',
          'bg-gray-50 ',
          'rounded-lg',
        )}
      >
        <GroupInfoList
          numOfMembers={userCount}
          numOfMemos={retrospectCount}
          createdAtGroup={createDate}
          latestUpdateTime={recentActString}
        />
        {description && <GroupDescription description={description} />}
      </div>

      {memoList &&
      memoList.length > 0 &&
      (isPublic || role !== ROLE.NON_MEMBER) ? (
        <MemoList memoList={memoList} />
      ) : (
        <NoMemoList isPublic={isPublic} role={role} />
      )}
    </div>
  )
}

export default GroupDetail

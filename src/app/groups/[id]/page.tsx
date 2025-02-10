import { cn } from '@/utils/cn'
import { GROUP_DETAIL } from './_consts'
import GroupHeading from './_components/GroupHeading'
import GroupDescription from './_components/GroupDescription'
import GroupInfoList from '@/app/groups/[id]/_components/GroupInfoList'
import NoMemoList from '@/app/groups/[id]/_components/NoMemoList'
import { Metadata } from 'next'
import MemoList from './_components/MemoList'
/**
 * 모임 상세 페이지
 */

// Todo: api 연결 후 모임 이름으로 변경 필요
export const metadata: Metadata = {
  title: 'Leev | 모임이름',
}

const GroupDetailPage = () => {
  const {
    groupName,
    numOfMembers,
    introduction,
    tags,
    isPublic,
    leaderName,
    description,
    numOfMemos,
    createdAtGroup,
    latestUpdateTime,
    memoList,
    roll,
  } = GROUP_DETAIL

  return (
    <div className={cn('px-[88px] py-[72px]')}>
      <GroupHeading
        groupName={groupName}
        numOfMembers={numOfMembers}
        introduction={introduction}
        tags={tags}
        isPublic={isPublic}
        leaderName={leaderName}
        roll={roll}
      />
      {!roll && <GroupDescription description={description} />}
      <GroupInfoList
        numOfMembers={numOfMembers}
        numOfMemos={numOfMemos}
        createdAtGroup={createdAtGroup}
        latestUpdateTime={latestUpdateTime}
      />

      {memoList.length > 0 && (isPublic || roll) ? (
        <MemoList memoList={memoList} />
      ) : (
        <NoMemoList isPublic={isPublic} roll={roll} />
      )}
    </div>
  )
}

export default GroupDetailPage

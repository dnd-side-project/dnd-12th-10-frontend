export interface GroupInfoListProps {
  numOfMembers: number
  numOfMemos: number
  createdAtGroup: string
  latestUpdateTime: string
}

const GroupInfoList = ({
  numOfMembers,
  numOfMemos,
  createdAtGroup,
  latestUpdateTime,
}: GroupInfoListProps) => {
  return (
    <div className='flex p-6 bg-gray-50 rounded-lg mt-8'>
      <InfoItem title='멤버' content={`${numOfMembers}명`} />
      <VerticalLine />
      <InfoItem title='총 게시글 수' content={`${numOfMemos}개`} />
      <VerticalLine />
      <InfoItem title='개설일' content={createdAtGroup} />
      <VerticalLine />
      <InfoItem title='마지막 회고록' content={latestUpdateTime} />
    </div>
  )
}

export default GroupInfoList

const InfoItem = ({
  title,
  content,
}: {
  title: string
  content: string | number
}) => {
  return (
    <div className='flex flex-col gap-[2px]'>
      <span className='text-body03 text-gray-500'>{title}</span>
      {content && (
        <span className='text-body01 text-gray-700 font-semibold'>
          {content}
        </span>
      )}
    </div>
  )
}

const VerticalLine = () => {
  return (
    <div className='h-[40px] my-auto mx-[62px] border-solid border-x-[1px] border-orange-100' />
  )
}

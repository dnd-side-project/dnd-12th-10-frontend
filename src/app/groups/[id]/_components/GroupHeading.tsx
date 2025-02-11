import Link from 'next/link'
import { PropsWithChildren } from 'react'
import Chip from '@/components/Chip'
import Button from '@/components/Button'

//Todo: Icon컴포넌트로 변경
import LockIcon from '@/assets/icons/filled/lock-filled.svg'
import UnLockIcon from '@/assets/icons/filled/unlock-filled.svg'
import ProfileFilledIcon from '@/assets/icons/filled/profile-filled.svg'
import EditIcon from '@/assets/icons/edit.svg'
import AddMemberIcon from '@/assets/icons/profile-add.svg'
import AddSquareIcon from '@/assets/icons/filled/add-square-filled.svg'

export interface GroupHeadingProps {
  groupName: string
  introduction: string
  tags: string[]
  isPublic: boolean
  numOfMembers: number
  leaderName: string
  roll: 'LEADER' | 'MEMBER' | null
}
const GroupHeading = ({
  groupName,
  introduction,
  tags,
  numOfMembers,
  isPublic,
  leaderName,
  roll,
}: GroupHeadingProps) => {
  return (
    <>
      <div className='flex justify-between mb-6'>
        <h2 className='text-display01'>{groupName}</h2>
        {roll ? <WriteButton /> : <JoinButton />}
      </div>
      <div className='flex gap-2 text-body03 text-gray-800 mb-2'>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} color={'gray'} size={'small'} />
        ))}
      </div>
      <p className='text-body03 text-gray-700 mb-6'>{introduction}</p>
      <div className='flex gap-2 text-gray-300'>
        <InfoWrap text={`멤버 ${numOfMembers}명`}>
          <ProfileFilledIcon className='fill-gray-700' width={18} height={18} />
        </InfoWrap>
        <InfoWrap text={`${!isPublic ? '비공개 모임' : '공개 모임'}`}>
          {isPublic ? (
            <UnLockIcon className='fill-gray-700' width={18} height={18} />
          ) : (
            <LockIcon className='fill-gray-700' width={18} height={18} />
          )}
        </InfoWrap>
        <InfoWrap text={`리더 ${leaderName}`} />
        {roll === 'LEADER' && <InviteButton />}
      </div>
    </>
  )
}
export default GroupHeading

const WriteButton = () => (
  <Link href=''>
    <Button color='primary' variant='filled' size='medium'>
      <EditIcon className='stroke-white mr-2' width={20} height={20} />
      글쓰기
    </Button>
  </Link>
)

const JoinButton = () => (
  <Button color='primary' variant='filled' size='medium'>
    <AddMemberIcon className='stroke-white mr-2' width={20} height={20} />
    모임 가입하기
  </Button>
)

const InfoWrap = ({
  text,
  children,
}: PropsWithChildren<{
  text: string
}>) => {
  return (
    <>
      <div className='flex items-center'>
        {children}
        <span className={`text-body02 text-gray-700 ${children && 'ml-1'}`}>
          {text}
        </span>
      </div>
      {children && '·'}
    </>
  )
}

const InviteButton = () => {
  return (
    <>
      ·
      <div className='flex items-center'>
        <AddSquareIcon className='fill-orange-500' width={18} height={18} />
        <span className='text-body02 text-orange-500 ml-1'>초대하기</span>
      </div>
    </>
  )
}

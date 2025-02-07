import Link from 'next/link'
import CardWrap from '@/components/CardWrap'
import { URL_PATH } from '@/consts/urls'
import ProfileFilledIcon from '@/assets/icons/filled/profile-filled.svg'
import ClipboardFilledIcon from '@/assets/icons/filled/clipboard-text-filled.svg'
import StarFilledIcon from '@/assets/icons/filled/star-fill.svg'
import { MY_GROUPS, MyGroup } from '../_consts'
import GroupCreateCard from './GroupCreateCard'
import SectionHeader from './SectionHeader'

/** 내 모임 영역 */
const MyGroupList = () => {
  return (
    <section className='py-16'>
      <div className='flex justify-between items-start'>
        <SectionHeader
          title='🏡 내 모임'
          description='내가 함께 기록하고 성장하는 모임이에요!'
        />
        <Link href={URL_PATH.GroupList} className='text-title03 text-gray-800'>
          더보기
        </Link>
      </div>

      <div className='flex gap-x-4'>
        {MY_GROUPS.map((props) => (
          <MyGroupCard key={`my-group-${props.id}`} {...props} />
        ))}

        <GroupCreateCard />
      </div>
    </section>
  )
}

export default MyGroupList

const MyGroupCard = ({
  groupName,
  numOfMembers,
  numOfMemos,
  latestUpdateTime,
}: MyGroup) => {
  return (
    <CardWrap path='/' height={156} size='medium'>
      <div className='flex flex-col w-full'>
        <div className='flex w-full justify-between'>
          <h4 className='text-title01 text-gray-900'>{groupName}</h4>
          <StarFilledIcon className='fill-orange-500' width={22} height={22} />
        </div>

        <div className='mt-2 mb-6 flex items-center'>
          <ProfileFilledIcon className='fill-gray-400' width={16} height={16} />
          <span className='text-body03 text-gray-400 ml-1'>
            {numOfMembers}명
          </span>
          <hr className='border-orange-200 border w-px h-3 mx-2' />
          <ClipboardFilledIcon
            className='fill-gray-400'
            width={16}
            height={16}
          />
          <span className='text-body03 text-gray-400 ml-1'>{numOfMemos}개</span>
        </div>

        <div className='flex gap-x-1.5 text-body03 text-gray-600'>
          마지막 회고
          <span className='text-orange-500 font-semibold'>
            {latestUpdateTime}
          </span>
        </div>
      </div>
    </CardWrap>
  )
}

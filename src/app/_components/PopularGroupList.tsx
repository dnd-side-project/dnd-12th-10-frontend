import Link from 'next/link'
import { cn } from '@/utils/cn'
import Chip from '@/components/Chip'
import { Icon } from '@/components/Icon'
import { POPULAR_GROUP_LIST, POPULAR_MEMO, PopularGroup } from '../_consts'
import SectionHeader from './SectionHeader'
import AuthorInfo from '@/components/AuthorInfo'

/** 인기 모임 영역 */
const PopularGroupList = () => {
  return (
    <section className='py-6 bg-[#FAF8F5] -mx-[88px] px-[88px]'>
      <SectionHeader title='🔥 다양한 인사이트가 오가는 인기 모임' />
      <div className='flex gap-x-4'>
        <div className='flex flex-col gap-y-2'>
          {POPULAR_GROUP_LIST.map((props) => (
            <PopularGroupCard key={`popular-group-${props.id}`} {...props} />
          ))}
        </div>
        <MemoCard />
      </div>
    </section>
  )
}

export default PopularGroupList

const PopularGroupCard = ({ tags, title, numOfMembers }: PopularGroup) => {
  return (
    <Link
      href='/'
      className={cn(
        'px-6 py-[18px]',
        'bg-white',
        'rounded-md',
        'w-[328px]',
        'shadow-my-group-list-item',
        'hover:bg-[#FEFCF9]',
      )}
    >
      <div className='flex gap-x-1 mb-1'>
        {tags.map((tag, index) => (
          <Chip
            key={`group-tag-${index}`}
            label={tag}
            color='gray'
            size='small'
          />
        ))}
      </div>
      <p className='text-title02 font-semibold'>{title}</p>
      <div className='text-gray-400 text-body02 mt-2 flex items-center gap-x-1'>
        <Icon name='profile-filled' className='fill-gray-400' size={18} />
        멤버 {numOfMembers}명
      </div>
    </Link>
  )
}

const MemoCard = () => {
  return (
    <div className='bg-white rounded-md p-6 relative w-full'>
      <h4 className='text-title01 mb-2'>{POPULAR_MEMO.title}</h4>
      <AuthorInfo
        size='medium'
        author={POPULAR_MEMO.nickname}
        latestUpdateTime={POPULAR_MEMO.latestUpdateTime}
      />
      <div className='text-gray-700 text-body02 font-normal mt-6'>
        {POPULAR_MEMO.content}
      </div>

      <Link
        href='/'
        className='absolute bottom-6 text-blue-500 text-body02 mt-4 block'
      >
        더보기
      </Link>
    </div>
  )
}

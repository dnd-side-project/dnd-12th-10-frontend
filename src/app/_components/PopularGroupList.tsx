'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import Chip from '@/components/Chip'
import { Icon } from '@/components/Icon'
import { Group, Retrospect } from '../_types'
import SectionHeader from './SectionHeader'
import AuthorInfo from '@/components/AuthorInfo'
import usePopularGroupListQuery from '../_querys/usePopularGroupListQuery'

/** 인기 모임 영역 */
const PopularGroupList = () => {
  const [currentActiveMemo, setCurrentActiveMemo] = useState(0)
  const { popularGroupList = [] } = usePopularGroupListQuery()

  return (
    <section className='py-6 bg-[#FAF8F5] -mx-[88px] px-[88px]'>
      <SectionHeader title='🔥 다양한 인사이트가 오가는 인기 모임' />
      <div className='flex gap-x-4'>
        <div className='flex flex-col gap-y-2'>
          {popularGroupList.slice(0, 3).map((props, index) => (
            <PopularGroupCard
              isActive={currentActiveMemo === index}
              onClick={() => {
                setCurrentActiveMemo(index)
              }}
              key={`popular-group-${props.groupResponseDto.groupId}`}
              {...props.groupResponseDto}
            />
          ))}
        </div>
        <MemoCard
          {...popularGroupList[currentActiveMemo]?.retrospectResponseDto}
        />
      </div>
    </section>
  )
}

export default PopularGroupList

const PopularGroupCard = ({
  isActive,
  groupName,
  userCount,
  categoryNames,
  onClick,
}: Group & { isActive: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-6 py-[18px]',
        'bg-white',
        'rounded-md',
        'w-[328px]',
        'shadow-gray',
        'hover:bg-[#FEFCF9]',
      )}
    >
      <div className='flex gap-x-1 mb-1'>
        {categoryNames.map((tag, index) => (
          <Chip
            key={`group-tag-${index}`}
            label={tag}
            color='gray'
            size='small'
          />
        ))}
      </div>
      <p className='text-title02 font-semibold'>{groupName}</p>
      {isActive && (
        <div className='text-gray-400 text-body02 mt-2 flex items-center gap-x-1'>
          <Icon name='profile-filled' className='fill-gray-400' size={18} />
          멤버 {userCount}명
        </div>
      )}
    </button>
  )
}

const MemoCard = ({
  retrospectId,
  title,
  content,
  userName,
  timeString,
}: Retrospect) => {
  return (
    <div className='bg-white rounded-md p-6 relative w-full'>
      <h4 className='text-title01 mb-2'>{title}</h4>
      <AuthorInfo
        size='medium'
        author={userName}
        latestUpdateTime={timeString}
      />
      <div className='text-gray-700 text-body02 font-normal mt-6'>
        {content}
      </div>

      <Link
        // Todo: 상세페이지 url 따로 변수 만들지 상의 필요 : memos/:id
        href={`/memos/${retrospectId}`}
        className='absolute bottom-6 text-blue-500 text-body02 mt-4 block'
      >
        더보기
      </Link>
    </div>
  )
}

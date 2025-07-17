'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import Chip from '@/components/Chip'
import { Icon } from '@/components/Icon'
import { Group } from '../_types'
import SectionHeader from './SectionHeader'
import usePopularGroupListQuery from '../_queries/usePopularGroupListQuery'
import PopularRetrospectCard from './PopularRetrospectCard'

/** 인기 모임 영역 */
const PopularGroupList = () => {
  const [currentActiveRetrospect, setCurrentActiveRetrospect] = useState(0)
  const { popularGroupList = [] } = usePopularGroupListQuery()
  const currentGroup = popularGroupList[currentActiveRetrospect]

  return (
    <section className='py-6 bg-[#FAF8F5] -mx-[88px] px-[88px]'>
      <SectionHeader title='🔥 다양한 인사이트가 오가는 인기 모임' />
      <div className='flex gap-x-4'>
        <div className='flex flex-col gap-y-2'>
          {popularGroupList.slice(0, 3).map((props, index) => (
            <PopularGroupCard
              rank={index + 1}
              isActive={currentActiveRetrospect === index}
              onClick={() => {
                setCurrentActiveRetrospect(index)
              }}
              key={`popular-group-${props.groupResponseDto.groupId}`}
              {...props.groupResponseDto}
            />
          ))}
        </div>
        <PopularRetrospectCard
          {...currentGroup?.retrospectResponseDto}
          groupId={currentGroup?.groupResponseDto.groupId}
        />
      </div>
    </section>
  )
}

export default PopularGroupList

const PopularGroupCard = ({
  rank,
  isActive,
  onClick,
  groupName,
  userCount,
  categoryNames,
}: Group & { rank: number; isActive: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={cn('px-6 py-[18px]', 'rounded-md', 'flex gap-6', 'w-[328px]', {
        'bg-white shadow-gray': isActive,
      })}
    >
      <div className='text-title02 text-blue-500'>{rank}</div>
      <div className='flex flex-col gap-3 flex-1'>
        <p className='text-title02 font-semibold text-left'>{groupName}</p>
        <div className='flex items-center justify-between'>
          <div className='flex gap-x-1'>
            {categoryNames.slice(0, 2).map((tag, index) => (
              <Chip
                key={`group-tag-${index}`}
                label={tag}
                color={isActive ? 'lightBlue' : 'linear'}
                size='small'
              />
            ))}
          </div>
          <div className='text-gray-400 text-body02 flex items-center gap-x-1'>
            <Icon name='profile-filled' className='fill-gray-400' size={18} />
            멤버 {userCount}명
          </div>
        </div>
      </div>
    </button>
  )
}

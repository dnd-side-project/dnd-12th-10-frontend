'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import Chip from '@/components/Chip'
import { Icon } from '@/components/Icon'
import { Group } from '../_types'
import SectionHeader from './SectionHeader'
import usePopularGroupListQuery from '../_queries/usePopularGroupListQuery'
import { URL_PATH } from '@/consts/urls'
import PopularRetrospectCard from './PopularRetrospectCard'

/** 인기 모임 영역 */
const PopularGroupList = () => {
  const [currentActiveRetrospect, setCurrentActiveRetrospect] = useState(0)
  const { popularGroupList = [] } = usePopularGroupListQuery()

  return (
    <section className='py-6 bg-[#FAF8F5] -mx-[88px] px-[88px]'>
      <SectionHeader title='🔥 다양한 인사이트가 오가는 인기 모임' />
      <div className='flex gap-x-4'>
        <div className='flex flex-col gap-y-2'>
          {popularGroupList.slice(0, 3).map((props, index) => (
            <PopularGroupCard
              isActive={currentActiveRetrospect === index}
              onMouseEnter={() => {
                setCurrentActiveRetrospect(index)
              }}
              key={`popular-group-${props.groupResponseDto.groupId}`}
              {...props.groupResponseDto}
            />
          ))}
        </div>
        <PopularRetrospectCard
          {...popularGroupList[currentActiveRetrospect]?.retrospectResponseDto}
        />
      </div>
    </section>
  )
}

export default PopularGroupList

const PopularGroupCard = ({
  isActive,
  onMouseEnter,
  groupId,
  groupName,
  userCount,
  categoryNames,
}: Group & { isActive: boolean; onMouseEnter: () => void }) => {
  return (
    <Link
      href={`${URL_PATH.GroupList}/${groupId}`}
      onMouseEnter={onMouseEnter}
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
    </Link>
  )
}

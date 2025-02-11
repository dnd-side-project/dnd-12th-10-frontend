'use client'

import Link from 'next/link'
import { cn } from '@/utils/cn'
import Chip from '@/components/Chip'
import { useState } from 'react'
import { Icon, IconName } from '../Icon'

export interface MyGroupListItemProps {
  id: string
  title: string
  description: string
  tagList: string[]
  peopleCount: number
  memoCount: number
}

const MyGroupListItem = ({
  id,
  title,
  description,
  tagList,
  peopleCount,
  memoCount,
}: MyGroupListItemProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Link
      // Todo: path 변경 필요
      href={`/${id}`}
      className={cn(
        'flex',
        'gap-20',
        'justify-between',
        'p-6',
        'shadow-my-group-list-item',
        'rounded-md',
        'bg-white',
        'hover:bg-gray-50',
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='flex flex-col gap-2 overflow-hidden'>
        <div className='flex gap-3'>
          <h3 className='text-title02'>{title}</h3>
          <div className='flex gap-1 text-body03'>
            {tagList.map((tag) => (
              <Chip
                key={tag}
                size='small'
                color={isHover ? 'blue' : 'gray'}
                label={tag}
              />
            ))}
          </div>
        </div>
        <p className='overflow-hidden whitespace-nowrap text-ellipsis text-gray-600 text-body03'>
          {description}
        </p>
      </div>
      <div className='flex items-center text-gray-400 gap-2'>
        <Info iconName='profile-filled' text={`${peopleCount}명`} />
        ·
        <Info iconName='clipboard-text-filled' text={`${memoCount}개`} />
      </div>
    </Link>
  )
}

export default MyGroupListItem

const Info = ({ iconName, text }: { iconName: IconName; text: string }) => {
  return (
    <div className='flex gap-1 items-center'>
      <Icon name={iconName} size={16} className='fill-gray-400' />
      <span className='text-nowrap'>{text}</span>
    </div>
  )
}

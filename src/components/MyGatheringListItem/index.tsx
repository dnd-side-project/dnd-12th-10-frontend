'use client'

import { cn } from '@/utils/cn'
import Chip from '@/components/Chip'
import ProfileIcon from '@/assets/icons/filled/profile-filled.svg'
import ClipBoardIcon from '@/assets/icons/filled/clipboard-text-filled.svg'
import { useState } from 'react'
import Link from 'next/link'

interface MyGatheringListItemProps {
  id: string
  title: string
  description: string
  tagList: string[]
  peopleCount: number
  clipCount: number
}

const MyGatheringListItem = ({
  id,
  title,
  description,
  tagList,
  peopleCount,
  clipCount,
}: MyGatheringListItemProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Link
      href={`/${id}`}
      className={cn(
        'flex',
        'gap-20',
        'justify-between',
        'p-6',
        'shadow-my-gathering',
        'rounded-md',
        'hover:bg-gray-50',
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='flex flex-col gap-2 overflow-hidden'>
        <div className='flex gap-3'>
          <h3 className='text-title02'>{title}</h3>
          <div className='flex gap-1'>
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
        <Info SvgIcon={ProfileIcon} text={`${peopleCount}명`} />
        ·
        <Info SvgIcon={ClipBoardIcon} text={`${clipCount}개`} />
      </div>
    </Link>
  )
}

export default MyGatheringListItem

const Info = ({
  SvgIcon,
  text,
}: {
  SvgIcon: React.ElementType
  text: string
}) => {
  return (
    <div className='flex gap-1 items-center'>
      <SvgIcon width='16' height='16' className='fill-gray-400' />
      <span className='text-nowrap'>{text}</span>
    </div>
  )
}

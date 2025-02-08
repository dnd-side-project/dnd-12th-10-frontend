import Link from 'next/link'
import { cn } from '@/utils/cn'
import { PropsWithChildren } from 'react'
import { CARD_WRAP_SIZE } from '@/components/CardWrap/consts'

export interface CardWrapProps {
  path: string
  size: 'medium' | 'large'
  height?: number
}

const CardWrap = ({
  size,
  height = 156,
  path,
  children,
}: PropsWithChildren<CardWrapProps>) => {
  return (
    <Link
      href={path}
      className={cn(
        'flex',
        'border',
        'border-gray-900',
        'shadow-card',
        'p-6',
        'rounded-[24px]',
        {
          'hover:bg-[#0000000D]': size === 'medium',
        },
        CARD_WRAP_SIZE[size],
      )}
      style={{ height }}
    >
      {children}
    </Link>
  )
}

export default CardWrap

import Link from 'next/link'
import { cn } from '@/utils/cn'
import { PropsWithChildren } from 'react'
import { CARD_WRAP_SIZE } from '@/components/CardWrap/consts'

export interface CardWrapProps extends React.ComponentPropsWithoutRef<'a'> {
  path: string
  size: 'medium' | 'large'
}

const CardWrap = ({
  children,
  size,
  path,
}: PropsWithChildren<CardWrapProps>) => {
  return (
    <Link
      href={path}
      className={cn(
        'flex',
        'border',
        'border-gray-900',
        'shadow-black',
        'p-6',
        'rounded-[24px]',
        CARD_WRAP_SIZE[size],
      )}
    >
      {children}
    </Link>
  )
}

export default CardWrap

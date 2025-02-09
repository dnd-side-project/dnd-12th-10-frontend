'use client'

import { PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { usePathname } from 'next/navigation'

export interface SidebarItemProps {
  activeIcon: ReactNode
  nonActiveIcon: ReactNode
  contentName: string
  path: string
}

const SidebarItem = ({
  children,
  activeIcon,
  nonActiveIcon,
  contentName,
  path,
}: PropsWithChildren<SidebarItemProps>) => {
  const pathname = usePathname().split('/')[1]
  const splitPath = path.split('/')[1]
  const isActive = pathname === splitPath

  return (
    <Link
      href={path}
      className={cn(
        'flex gap-2',
        'py-4',
        'text-title03',
        isActive && '[&>svg]:fill-blue-400 ',
      )}
    >
      {isActive ? activeIcon : nonActiveIcon}
      <span className={isActive ? 'text-blue-400' : 'text-white'}>
        {contentName}
      </span>
      {children && <div className='ml-auto'>{children}</div>}
    </Link>
  )
}

export default SidebarItem

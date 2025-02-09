'use client'

import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { usePathname } from 'next/navigation'
import { Icon, IconName } from '@/components/Icon'

interface SidebarItemProps {
  iconName: IconName
  contentName: string
  path: string
}

const SidebarItem = ({
  children,
  iconName,
  contentName,
  path,
}: PropsWithChildren<SidebarItemProps>) => {
  const pathname = usePathname()
  const isActive = path === pathname

  return (
    <Link href={path} className={cn('flex gap-2', 'py-4', 'text-title03')}>
      <Icon
        name={isActive ? (`${iconName}-filled` as IconName) : iconName}
        className={cn(
          { 'fill-white': !isActive && iconName === 'home' }, // home 아이콘은 예외적으로 fill
          { 'stroke-white': !isActive },
          { 'fill-blue-400': isActive },
        )}
      />
      <span className={isActive ? 'text-blue-400' : 'text-white'}>
        {contentName}
      </span>
      {children && <div className='ml-auto'>{children}</div>}
    </Link>
  )
}

export default SidebarItem

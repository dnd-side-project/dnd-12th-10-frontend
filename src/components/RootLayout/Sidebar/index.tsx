'use client'

const HIDE_SIDEBAR_PAGE_LIST = ['/login']

import { cn } from '@/utils/cn'
import LogoIcon from '@/assets/icons/logo.svg'
import LogoutButton from '@/components/RootLayout/SidebarItem/LogoutButton'
import NavigateList from '../NavigateList'
import { usePathname } from 'next/navigation'
const Sidebar = () => {
  const pathname = usePathname()

  return (
    !HIDE_SIDEBAR_PAGE_LIST.includes(pathname) && (
      <aside
        className={cn(
          'flex flex-col',
          'w-[248px]',
          'px-[24px] py-[40px]',
          'bg-gray-900',
        )}
      >
        <LogoIcon className='mb-[40px]' />
        <NavigateList />
        <LogoutButton />
      </aside>
    )
  )
}

export default Sidebar

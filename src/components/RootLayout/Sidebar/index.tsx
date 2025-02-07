'use client'

import { cn } from '@/utils/cn'
import LogoIcon from '@/assets/icons/logo.svg'
import LogoutButton from '@/components/RootLayout/SidebarItem/LogoutButton'
import NavigateList from '../NavigateList'
import { usePathname } from 'next/navigation'

const HIDE_SIDEBAR_PAGE_LIST = ['/login', '/login/onboarding']

const Sidebar = () => {
  const pathname = usePathname()

  if (HIDE_SIDEBAR_PAGE_LIST.includes(pathname)) return null

  return (
    <aside
      className={cn(
        'flex flex-col',
        'w-[248px]',
        'px-[24px] py-[40px]',
        'bg-gray-900',
      )}
    >
      <LogoIcon fill='white' width='100' className='mb-[40px]' />
      <NavigateList />
      <LogoutButton />
    </aside>
  )
}

export default Sidebar

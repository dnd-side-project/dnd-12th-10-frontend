'use client'

import { cn } from '@/utils/cn'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/Icon'
import NavigateList from '../NavigateList'
import LogoutButton from '../SidebarItem/LogoutButton'
import { URL_PATH } from '@/consts/urls'

const HIDE_SIDEBAR_PAGE_LIST = [
  URL_PATH.Login,
  URL_PATH.Signup,
  URL_PATH.LoginSuccess,
  URL_PATH.MemosCreate,
]

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
        'shrink-0',
      )}
    >
      <Icon
        name='logo'
        width={100}
        height={30}
        className='mb-[40px] fill-white'
      />
      <NavigateList />
      <LogoutButton />
    </aside>
  )
}

export default Sidebar

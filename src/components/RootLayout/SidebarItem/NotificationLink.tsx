'use client'

import { cn } from '@/utils/cn'
import SidebarItem from './index'

const NotificationLink = () => {
  return (
    <SidebarItem path='/3' contentName='알림' iconName='notification'>
      {/*Todo:알림 갯수 api 연결*/}
      <span
        className={cn(
          'flex justify-center items-center',
          'text-white text-xs',
          'px-2',
          'bg-orange-500',
          'rounded-full',
        )}
      >
        300
      </span>
    </SidebarItem>
  )
}

export default NotificationLink

'use client'

import { cn } from '@/utils/cn'
import SidebarItem from './index'
import NotificationIcon from '@/assets/icons/sidebar/non-active/notification.svg'
import ActiveNotificationIcon from '@/assets/icons/sidebar/active/notification-filled.svg'

const NotificationLink = () => {
  return (
    <SidebarItem
      path='/3'
      contentName='알림'
      activeIcon={<ActiveNotificationIcon />}
      nonActiveIcon={<NotificationIcon />}
    >
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

import React from 'react'
import SidebarItem from '../SidebarItem'
import NotificationLink from '@/components/RootLayout/SidebarItem/NotificationLink'

const NavigateList = () => {
  // Todo: 각 페이지 path 설정 후 변경
  return (
    <nav>
      <SidebarItem path='/' contentName='홈' iconName='home' />
      <SidebarItem path='/1' contentName='회고 스페이스' iconName='edit' />
      <SidebarItem path='/2' contentName='모임' iconName='profile-user' />
      <NotificationLink />
      <SidebarItem path='/4' contentName='내 정보' iconName='profile' />
    </nav>
  )
}

export default NavigateList

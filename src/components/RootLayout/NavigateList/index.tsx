import React from 'react'
import SidebarItem from '../SidebarItem'
import NotificationLink from '@/components/RootLayout/SidebarItem/NotificationLink'

import HomeIcon from '@/assets/icons/sidebar/non-active/home.svg'
import EditIcon from '@/assets/icons/sidebar/non-active/edit.svg'
import ProfileIcon from '@/assets/icons/sidebar/non-active/profile.svg'
import ProfileUserIcon from '@/assets/icons/sidebar/non-active/profile-user.svg'

import ActiveHomeIcon from '@/assets/icons/sidebar/active/home-fiiled.svg'
import ActiveEditIcon from '@/assets/icons/sidebar/active/edit-filled.svg'
import ActiveProfileIcon from '@/assets/icons/sidebar/active/profile-filled.svg'
import ActiveProfileUserIcon from '@/assets/icons/sidebar/active/profile-user-filled.svg'

const NavigateList = () => {
  // Todo: 각 페이지 path 설정 후 변경
  return (
    <nav>
      <SidebarItem
        path='/'
        contentName='홈'
        activeIcon={<ActiveHomeIcon />}
        nonActiveIcon={<HomeIcon />}
      />
      <SidebarItem
        path='/1'
        contentName='회고 스페이스'
        activeIcon={<ActiveEditIcon />}
        nonActiveIcon={<EditIcon />}
      />
      <SidebarItem
        path='/2'
        contentName='모임'
        activeIcon={<ActiveProfileUserIcon />}
        nonActiveIcon={<ProfileUserIcon />}
      />
      <NotificationLink />
      <SidebarItem
        path='/4'
        contentName='내 정보'
        activeIcon={<ActiveProfileIcon />}
        nonActiveIcon={<ProfileIcon />}
      />
    </nav>
  )
}

export default NavigateList

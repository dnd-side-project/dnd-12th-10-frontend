import React from 'react'
import SidebarItem from '../SidebarItem'
import NotificationLink from '../SidebarItem/NotificationLink'

import HomeIcon from '@/assets/icons/sidebar/non-active/home.svg'
import Edit from '@/assets/icons/sidebar/non-active/edit.svg'
import Profile from '@/assets/icons/sidebar/non-active/profile.svg'
import ProfileUser from '@/assets/icons/sidebar/non-active/profile-user.svg'

import ActiveHomeIcon from '@/assets/icons/sidebar/active/home-fiiled.svg'
import ActiveEdit from '@/assets/icons/sidebar/active/edit-filled.svg'
import ActiveProfile from '@/assets/icons/sidebar/active/profile-filled.svg'
import ActiveProfileUser from '@/assets/icons/sidebar/active/profile-user-filled.svg'

const NavigateList = () => {
  // Todo: 각 페이지 path 설정 후 변경
  return (
    <nav>
      <SidebarItem
        path={'/'}
        contentName={'홈'}
        activeIcon={<ActiveHomeIcon />}
        nonActiveIcon={<HomeIcon />}
      />
      <SidebarItem
        path={'/'}
        contentName={'회고 스페이스'}
        activeIcon={<ActiveEdit />}
        nonActiveIcon={<Edit />}
      />
      <SidebarItem
        path={'/'}
        contentName={'모임'}
        activeIcon={<ActiveProfileUser />}
        nonActiveIcon={<ProfileUser />}
      />
      <NotificationLink />
      <SidebarItem
        path={'/'}
        contentName={'내 정보'}
        activeIcon={<ActiveProfile />}
        nonActiveIcon={<Profile />}
      />
    </nav>
  )
}

export default NavigateList

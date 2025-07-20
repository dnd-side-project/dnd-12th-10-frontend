'use client'

import MyGroupList from './_components/MyGroupList'
import GroupSearch from '@/app/groups/_components/GroupSearch'
import AuthGuard from '@/app/AuthGuard'

const GroupsPage = () => {
  return (
    <AuthGuard>
      <div className='flex flex-col gap-14 px-[88px] py-[72px]'>
        <MyGroupList />
        <GroupSearch />
      </div>
    </AuthGuard>
  )
}

export default GroupsPage

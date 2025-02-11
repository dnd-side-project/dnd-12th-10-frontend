import MyGroupList from './_components/MyGroupList'
import GroupSearch from '@/app/groups/_components/GroupSearch'

const GroupsPage = () => {
  return (
    <div className='flex flex-col gap-14 px-[88px] py-[72px]'>
      <MyGroupList />
      <GroupSearch />
    </div>
  )
}

export default GroupsPage

import GroupForm from '@/app/groups/(form)/GroupForm'
import AuthGuard from '@/app/AuthGuard'

const UpdateGroupPage = () => {
  return (
    <AuthGuard>
      <div className='px-[88px] pt-[72px] pb-[66px]'>
        <h1 className='text-display01 mb-6'>모임 정보 수정</h1>
        <GroupForm mode='update' />
      </div>
    </AuthGuard>
  )
}

export default UpdateGroupPage

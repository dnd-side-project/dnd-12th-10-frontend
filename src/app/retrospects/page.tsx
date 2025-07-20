import TemplateList from '@/app/_components/TemplateList'
import MyRetrospectStatus from './_components/MyRetrospectStatus'
import AuthGuard from '@/app/AuthGuard'

const RetrospectsPage = () => {
  return (
    <AuthGuard>
      <div className='flex flex-col gap-[50px] py-[70px] px-[88px]'>
        <h1 className='text-display01'>회고스페이스</h1>
        <TemplateList />
        <MyRetrospectStatus />
      </div>
    </AuthGuard>
  )
}

export default RetrospectsPage

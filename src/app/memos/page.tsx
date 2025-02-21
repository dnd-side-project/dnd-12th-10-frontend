import TemplateList from '@/app/_components/TemplateList'
import MyMemoStatus from './_components/MyMemoStatus'

const MemosPage = () => {
  return (
    <div className='flex flex-col gap-[50px] py-[70px] px-[88px]'>
      <h1 className='text-display01'>회고스페이스</h1>
      <TemplateList />
      <MyMemoStatus />
    </div>
  )
}

export default MemosPage

import MyGroupListItem from '@/components/MyGroupListItem'
import Button from '@/components/Button'
import { MY_GROUP_LIST } from '../_consts'

const MyGroupList = () => {
  return (
    <div>
      <h3 className='text-title01 text-gray-800'>내 모임</h3>
      <div className='mt-6 bg-[#FAF8F5] p-6 rounded-lg'>
        <div className='text-body02'>
          전체모임 <span className='text-blue-500'>10</span>
        </div>
        {MY_GROUP_LIST.length > 0 ? <GroupList /> : <NoGroupList />}
      </div>
    </div>
  )
}

export default MyGroupList

const GroupList = () => {
  return (
    <>
      <ul className='mt-6 flex flex-col gap-4'>
        {MY_GROUP_LIST.map((group) => (
          <MyGroupListItem key={group.id} {...group} />
        ))}
      </ul>
      <button className='block mt-6 mx-auto text-title03 text-blue-500'>
        더보기
      </button>
    </>
  )
}

const NoGroupList = () => {
  return (
    <div className='mt-[22px] flex flex-col items-center'>
      <p className='text-title02 text-gray-500'>아직 가입한 모임이 없어요.</p>
      <p className='text-body02 text-gray-500 font-normal mb-6'>
        새로운 모임을 찾아보거나, 직접 모임을 만들어보세요!
      </p>
      <Button color='primary' variant='subtle' size='medium'>
        모임 만들기
      </Button>
    </div>
  )
}

import MyGroupListItem from '@/components/MyGroupListItem'
import Button from '@/components/Button'
import useMyGroupListQuery from '@/app/_queries/useMyGroupListQuery'
import { Group } from '@/app/_types'
import { useState } from 'react'
import Link from 'next/link'
import { URL_PATH } from '@/consts/urls'

const MyGroupList = () => {
  const { myGroupList = [] } = useMyGroupListQuery()

  return (
    <div>
      <h3 className='text-title01 text-gray-800'>내 모임</h3>
      <div className='mt-6 bg-[#FAF8F5] p-6 rounded-lg'>
        <div className='text-body02'>
          전체모임 <span className='text-blue-500'>{myGroupList.length}</span>
        </div>
        {myGroupList.length > 0 ? (
          <GroupList myGroupList={myGroupList} />
        ) : (
          <NoGroupList />
        )}
      </div>
    </div>
  )
}

export default MyGroupList

const GroupList = ({ myGroupList }: { myGroupList: Group[] }) => {
  const [showListLength, setShowListLength] = useState(3)

  return (
    <>
      <ul className='mt-6 flex flex-col gap-4'>
        {myGroupList.slice(0, showListLength).map((group) => (
          <li key={group.groupId}>
            <MyGroupListItem
              groupId={group.groupId}
              groupName={group.groupName}
              description={group.description}
              categoryNames={group.categoryNames}
              userCount={group.userCount}
              retrospectCount={group.retrospectCount}
            />
          </li>
        ))}
      </ul>
      {showListLength < myGroupList.length && (
        <button
          className='block mt-6 mx-auto text-title03 text-blue-500'
          onClick={() => {
            setShowListLength((prevState) => prevState + 3)
          }}
        >
          더보기
        </button>
      )}
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
      <Link href={URL_PATH.GroupCreate}>
        <Button color='primary' variant='subtle' size='medium'>
          모임 만들기
        </Button>
      </Link>
    </div>
  )
}

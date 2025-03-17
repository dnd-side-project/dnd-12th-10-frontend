'use client'

import useUserDataQuery from '@/querys/useUserDataQuery'
import MyRetrospectStatus from '@/app/retrospects/_components/MyRetrospectStatus'
import ChipButton from '@/components/ChipButton'

const ProfilePage = () => {
  const { userData } = useUserDataQuery()

  if (!userData) return null

  return (
    <div className='px-[88px] py-[70px]'>
      <div className='p-10 mb-20 bg-gray-50 rounded-md'>
        <p className='text-title01'>{userData.nickname}님 안녕하세요!</p>
        <p className='mt-4 text-body03 text-gray-500'>관심있는 키워드</p>
        <div className='mt-2 flex text-body03 gap-2'>
          {userData.featureKeywordList.map((keyword, index) => (
            <ChipButton
              key={`${keyword}-${index}`}
              label={keyword}
              disabled={true}
            />
          ))}
        </div>
      </div>
      <MyRetrospectStatus />
    </div>
  )
}

export default ProfilePage

'use client'

import Link from 'next/link'
import CardWrap from '@/components/CardWrap'
import { URL_PATH } from '@/consts/urls'
import { Icon } from '@/components/Icon'
import GroupCreateCard from './GroupCreateCard'
import SectionHeader from './SectionHeader'
import useMyGroupListQuery from '../_querys/useMyGroupListQuery'
import { Group } from '@/app/_types'

/** 내 모임 영역 */
const MyGroupList = () => {
  const { myGroupList = [] } = useMyGroupListQuery()

  const isMyGroupListEmpty = myGroupList.length === 0

  return (
    <section className='py-16'>
      <div className='flex justify-between items-start'>
        <SectionHeader
          title='🏡 내 모임'
          description={
            isMyGroupListEmpty
              ? '아직 가입한 모임이 없어요'
              : '내가 함께 기록하고 성장하는 모임이에요!'
          }
        />
        {!isMyGroupListEmpty && (
          <Link
            href={URL_PATH.GroupList}
            className='text-title03 text-gray-800'
          >
            더보기
          </Link>
        )}
      </div>

      {isMyGroupListEmpty ? (
        <GroupCreateCard />
      ) : (
        <div className='flex gap-x-4'>
          {myGroupList.slice(0, 3).map((props) => (
            <MyGroupCard key={`my-group-${props.groupId}`} {...props} />
          ))}

          <GroupCreateCard />
        </div>
      )}
    </section>
  )
}

export default MyGroupList

const MyGroupCard = ({
  groupId,
  groupName,
  userCount,
  retrospectCount,
  recentActString,
}: Group) => {
  return (
    <CardWrap
      path={`${URL_PATH.GroupList}/${groupId}`}
      height={156}
      size='medium'
    >
      <div className='flex flex-col w-full'>
        <div className='flex w-full justify-between items-center'>
          <h4 className='text-title01 text-gray-900 line-clamp-1'>
            {groupName}
          </h4>
          {/*<Icon name='star-filled' className='fill-orange-500' size={22} />*/}
        </div>

        <div className='mt-2 mb-6 flex items-center'>
          <Icon name='profile-filled' className='fill-gray-400' size={16} />
          <span className='text-body03 text-gray-400 ml-1'>{userCount}명</span>
          <hr className='border-orange-200 border w-px h-3 mx-2' />
          <Icon
            name='clipboard-text-filled'
            className='fill-gray-400'
            size={16}
          />
          <span className='text-body03 text-gray-400 ml-1'>
            {retrospectCount}개
          </span>
        </div>

        <div className='flex gap-x-1.5 text-body03 text-gray-600'>
          마지막 회고
          <span className='text-orange-500 font-semibold'>
            {recentActString}
          </span>
        </div>
      </div>
    </CardWrap>
  )
}

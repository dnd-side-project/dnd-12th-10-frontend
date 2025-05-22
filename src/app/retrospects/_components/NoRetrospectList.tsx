'use client'

import { Icon } from '@/components/Icon'
import OpenMemoListModalButton from '@/app/_components/OpenMemoListModalButton'

const NoRetrospectList = () => (
  <div className='flex flex-col items-center text-body02 text-gray-500 mt-16'>
    <p>작성한 회고가 없습니다.</p>
    <p>모임에 가입하거나, 개인적으로 회고를 작성해보세요!</p>
    <OpenMemoListModalButton
      color='primary'
      variant='subtle'
      size='medium'
      style={{ minWidth: '156px', marginTop: '16px' }}
    >
      <Icon name='edit' className='stroke-blue-500 stroke-[2] mr-2' size={20} />
      <span>글쓰기</span>
    </OpenMemoListModalButton>
  </div>
)

export default NoRetrospectList

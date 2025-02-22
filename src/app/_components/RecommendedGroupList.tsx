'use client'
import { URL_PATH } from '@/consts/urls'
import { Group } from '@/app/_types'
import useRecommendGroupListQuery from '../_querys/useRecommendGroupList'

import CardWrap from '@/components/CardWrap'
import Chip from '@/components/Chip'
import { Icon } from '@/components/Icon'
import SectionHeader from './SectionHeader'
import SliderContainer from '@/app/_components/SliderContainer'

/** 모임 추천 영역 */
const RecommendedGroupList = () => {
  const { recommendGroupList = [] } = useRecommendGroupListQuery()

  return (
    <section className='py-16'>
      <SectionHeader
        title='⭐ 이런 회고 모임은 어때요'
        description='관심사가 비슷한 멤버들과 함께 회고를 시작해보세요'
      />
      <SliderContainer mediumDeviceSlidesToShow={3} largeDeviceSlidesToShow={4}>
        {recommendGroupList.map((props) => (
          <RecommendedGroupCard
            key={`recommended-group-${props.groupId}`}
            {...props}
          />
        ))}
      </SliderContainer>
    </section>
  )
}

export default RecommendedGroupList

export const RecommendedGroupCard = ({
  groupId,
  groupName,
  userCount,
  description,
  categoryNames,
}: Group) => {
  return (
    <CardWrap
      // Todo: 상세페이지 url 따로 변수 만들지 상의 필요 : groups/:id
      path={`${URL_PATH.GroupList}/${groupId}`}
      size='large'
      height={229}
    >
      <div>
        <div className='flex gap-x-1 mb-2 text-body03'>
          {categoryNames.map((tag, index) => (
            <Chip
              key={`group-tag-${index}`}
              size='small'
              label={tag}
              color='gray'
            />
          ))}
        </div>
        <h4 className='text-title01 mb-2'>{groupName}</h4>
        <p className='text-body03 font-normal text-gray-600'>{description}</p>
        <div className='mt-4 flex items-center gap-x-1 text-gray-400 text-body02 font-normal'>
          <Icon name='profile-filled' size={18} className='fill-gray-400' />
          멤버 {userCount}명
        </div>
      </div>
    </CardWrap>
  )
}

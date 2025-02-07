import CardWrap from '@/components/CardWrap'
import Chip from '@/components/Chip'
import ProfileFilledIcon from '@/assets/icons/filled/profile-filled.svg'
import SectionHeader from './SectionHeader'
import { RECOMMENDED_GROUP_LIST, RecommendedGroup } from '../_consts'

/** 모임 추천 영역 */
const RecommendedGroupList = () => {
  return (
    <section className='py-16'>
      <SectionHeader
        title='⭐ 이런 회고 모임은 어때요'
        description='관심사가 비슷한 멤버들과 함께 회고를 시작해보세요'
      />
      <div className='flex gap-x-4 flex-wrap'>
        {RECOMMENDED_GROUP_LIST.map((props) => (
          <RecommendedGroupCard
            key={`recommended-group-${props.id}`}
            {...props}
          />
        ))}
      </div>
    </section>
  )
}

export default RecommendedGroupList

const RecommendedGroupCard = ({
  title,
  tags,
  description,
  numOfMembers,
}: RecommendedGroup) => {
  return (
    <CardWrap path='/' size='large' height={229}>
      <div>
        <div className='flex gap-x-1 mb-2'>
          {tags.map((tag, index) => (
            <Chip
              key={`group-tag-${index}`}
              size='small'
              label={tag}
              color='gray'
            />
          ))}
        </div>
        <h4 className='text-title01 mb-2'>{title}</h4>
        <p className='text-body03 font-normal text-gray-600'>{description}</p>
        <div className='mt-4 flex items-center gap-x-1 text-gray-400 text-body02 font-normal'>
          <ProfileFilledIcon width={18} height={18} className='fill-gray-400' />
          멤버 {numOfMembers}명
        </div>
      </div>
    </CardWrap>
  )
}

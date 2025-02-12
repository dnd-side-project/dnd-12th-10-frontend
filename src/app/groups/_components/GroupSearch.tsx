'use client'

import SearchInput from '@/components/SearchInput'
import { RECOMMENDED_GROUP_LIST } from '@/app/_consts'
import { RecommendedGroupCard } from '@/app/_components/RecommendedGroupList'

const GroupSearch = () => {
  return (
    <div>
      <h3 className='text-title01 text-gray-800 mb-6'>모임 탐색</h3>
      <SearchInput
        onSearch={() => {}}
        placeholder='어떤 모임을 찾고 계신가요?'
      />
      <div className='mx-auto mt-6 flex gap-4 flex-wrap'>
        {RECOMMENDED_GROUP_LIST.map((props) => (
          <RecommendedGroupCard
            key={`recommended-group-${props.id}`}
            {...props}
          />
        ))}
        {RECOMMENDED_GROUP_LIST.map((props) => (
          <RecommendedGroupCard
            key={`recommended-group-${props.id}`}
            {...props}
          />
        ))}
        {RECOMMENDED_GROUP_LIST.map((props) => (
          <RecommendedGroupCard
            key={`recommended-group-${props.id}`}
            {...props}
          />
        ))}
      </div>
    </div>
  )
}
export default GroupSearch

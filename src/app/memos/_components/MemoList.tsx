import { RECOMMENDED_GROUP_LIST, RecommendedGroup } from '@/app/_consts'
import CardWrap from '@/components/CardWrap'
import Chip from '@/components/Chip'

const MemoList = () => {
  return (
    <div className='flex gap-x-4 flex-wrap'>
      {RECOMMENDED_GROUP_LIST.map((props) => (
        <MemoCard key={`recommended-group-${props.id}`} {...props} />
      ))}
    </div>
  )
}

export default MemoList

export const MemoCard = ({ title, tags, description }: RecommendedGroup) => {
  return (
    <CardWrap path='/' size='medium' height={182}>
      <div>
        <div className='flex gap-x-1 mb-2 text-body03'>
          {tags.map((tag, index) => (
            <Chip
              key={`group-tag-${index}`}
              size='small'
              label={tag}
              color='gray'
            />
          ))}
        </div>
        <h4 className='text-body01 font-semibold mb-2'>{title}</h4>
        <p className='text-body03 font-normal text-gray-600 line-clamp-3'>
          {description}
        </p>
      </div>
    </CardWrap>
  )
}

import { RecommendedGroup } from '@/app/_consts'
import CardWrap from '@/components/CardWrap'
import { URL_PATH } from '@/consts/urls'
import Chip from '@/components/Chip'

const MemoCard = ({ id, title, tags, description }: RecommendedGroup) => {
  return (
    <CardWrap path={`${URL_PATH.Memos}/${id}`} size='medium' height={182}>
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

export default MemoCard

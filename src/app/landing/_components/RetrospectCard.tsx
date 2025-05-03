import CardWrap from '@/components/CardWrap'
import Chip from '@/components/Chip'
import { Icon } from '@/components/Icon'

const RetrospectCard = ({
  tagList,
  title,
  content,
  numberOfMembers,
}: {
  tagList: string[]
  title: string
  content: string
  numberOfMembers: number
}) => {
  return (
    <CardWrap path={``} size='large' height={229}>
      <div className='flex flex-col'>
        <div className='flex gap-x-1 mb-2 text-body03'>
          {tagList.map((tag) => (
            <Chip key={tag} size='small' label={tag} color='gray' />
          ))}
        </div>
        <h4 className='text-body01 font-semibold mb-2'>{title}</h4>
        <p className='text-body03 font-normal text-gray-600 line-clamp-3'>
          {content}
        </p>
        <div className='text-gray-400 text-body02 mt-auto flex items-center gap-x-1'>
          <Icon name='profile-filled' className='fill-gray-400' size={18} />
          멤버 {numberOfMembers}명
        </div>
      </div>
    </CardWrap>
  )
}

export default RetrospectCard

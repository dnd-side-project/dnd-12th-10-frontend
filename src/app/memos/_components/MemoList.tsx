import { RECOMMENDED_GROUP_LIST } from '@/app/_consts'
import MemoCard from '@/app/memos/_components/MemoCard'

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
